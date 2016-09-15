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
  
    console.log(data._id);

    // Return private to client
    res.json({ 
      id: data._id,
      privateKey: pair.private
    });
  });
}

exports.encrypt = function(req, res, next) {

  console.log(req.body);
  next();

}
