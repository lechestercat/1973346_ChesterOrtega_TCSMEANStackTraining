const path = require('path');

//Retrieve main page
const getMainPage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'index.html'));
};

//Retrieve Display Courses page
const getDisplayCoursesPage = (req, res) => {
  res.sendFile(
    path.join(__dirname, '..', '..', 'frontend', 'displayCourse.html')
  );
};

//Retrieve Add Course page
const getAddCoursePage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'addCourse.html'));
};

//Retrieve Update Course page
const getUpdateCoursePage = (req, res) => {
  res.sendFile(
    path.join(__dirname, '..', '..', 'frontend', 'updateCourse.html')
  );
};

//Retrieve Delete Course page
const getDeleteCoursePage = (req, res) => {
  res.sendFile(
    path.join(__dirname, '..', '..', 'frontend', 'deleteCourse.html')
  );
};

//exports
module.exports = {
  getMainPage,
  getDisplayCoursesPage,
  getAddCoursePage,
  getUpdateCoursePage,
  getDeleteCoursePage,
};
