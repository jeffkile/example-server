const mongoose = require('mongoose');

const keySchema = new mongoose.Schema({
  publicKey: String
}, { timestamps: true });

const Key = mongoose.model('Key', keySchema);

module.exports = Key;
