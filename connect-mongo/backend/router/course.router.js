let express = require('express');
let router = express.Router(); // router reference
const CourseController = require('../controller/course.controller');

router.get('/getAllCourseDetails', CourseController.getAllCourseDetails);
router.post('/deleteCourse', CourseController.deleteCourse);
router.post('/updateCourse', CourseController.updateCourse);
router.post('/addCourse', CourseController.addCourse);

module.exports = router;
