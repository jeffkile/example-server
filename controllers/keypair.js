const keypair = require ('keypair');

const Key = require('../models/Key');


exports.create = function(req, res, next) {

  // Generate keypairs
  let pair = keypair();

  // Put public into DB
  const publicKey = new Key({ publicKey: pair.public });
  publicKey.save(function(err, data) {
    if (err)
      return next(err);

    // Return private to client
    res.json({ privateKey: pair.private });
  });
}
