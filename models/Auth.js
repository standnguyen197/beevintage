var mongoose = require('mongoose');

var AuthSchema = new mongoose.Schema({
  _id: String,
  nameProfile: String,
  linkProfile: String,
  emailProfile: String,
  coverProfile: String,
  pictureProfile: String,
  publisher: String,
  publisher_date:{ type: Date, default: Date.now },
  roleProfile: {type: String , default:'0'},
  created_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('auths', AuthSchema);
