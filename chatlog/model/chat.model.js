let mongoose = require('mongoose');

//DEFINE schema
let ChatSchema = mongoose.Schema({
  _id: Number,
  name: String,
  message: String,
});

//DEFINE model
let ChatModel = mongoose.model('', ChatSchema, 'chatlog');

//EXPORT model
module.exports = ChatModel;
