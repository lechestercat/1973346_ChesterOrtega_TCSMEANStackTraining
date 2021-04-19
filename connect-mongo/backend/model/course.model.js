let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let CourseSchema = mongoose.Schema({
  _id: Number,
  courseName: String,
  courseDesc: String,
  price: Number,
});

let CourseModel = mongoose.model('', CourseSchema, 'Courses');

module.exports = CourseModel;
