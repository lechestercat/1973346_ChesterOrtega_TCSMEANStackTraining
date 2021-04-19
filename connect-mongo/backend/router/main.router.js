let express = require('express');
let router = express.Router(); // router reference
let MainController = require('../controller/main.controller');

router.get('/', MainController.getMainPage);
router.get('/displayCourse', MainController.getDisplayCoursesPage);
router.get('/addCourse', MainController.getAddCoursePage);
router.get('/updateCourse', MainController.getUpdateCoursePage);
router.get('/deleteCourse', MainController.getDeleteCoursePage);

module.exports = router;
