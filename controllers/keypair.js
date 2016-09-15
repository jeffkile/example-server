const crypto = require('crypto');
const keypair = require ('keypair');

const Key = require('../models/Key');


exports.create = function(req, res, next) {

  // Generate keypairs
  let pair = keypair();

  // Put public into DB
  const publicKey = new Key({ publicKey: pair.public });
  publicKey.save((err, data) => {
    if (err)
      return next(err);
  
    // Return private to client
    res.json({ 
      id: data._id,
      privateKey: pair.private
    });
  });
}

exports.encrypt = function(req, res, next) {

  // TODO: Sanitize input to prevent DB injection attack 
  Key.findById(req.body.id, (err, key) => {
    if (err)
      return next(err);

    // Encrypt using the public key
    let encrypted = crypto.publicEncrypt(key.publicKey, new Buffer(req.body.thingToEncrypt));

    res.json({
      encryptedData: encrypted.toString('base64')
    });
  });
}
