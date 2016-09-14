const Key = require('../models/Key');

exports.create = function(req, res, next) {

  // Generate keypairs
  // Put public into DB

  const publicKey = new Key({ publicKey: Math.random() });
  publicKey.save(function(err, data) {
    if (err)
      return next(err);

    console.log('success', data);

    // Return private to client
    res.json({
      privateKey: 1234
    });

  });


}
