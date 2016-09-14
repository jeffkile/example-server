exports.create = function(req, res, next) {
  
  // Generate keypairs
  // Put public into DB
  // Return private to client
  res.json({
    privateKey: 1234
  });

}
