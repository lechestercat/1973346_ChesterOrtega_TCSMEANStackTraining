// required npm packages
let app = require('express')();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
const methodOverride = require('method-override');
let port = 9090;
let db = 'courseDB';

// mongoDB Url
let url = 'mongodb://localhost:27017/' + db;

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

//DB connection without warning
const mongooseDbOption = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(url, mongooseDbOption); //ready to connect

//Connect the db
mongoose.connection;

let CourseRouter = require('./backend/router/course.router');
let Router = require('./backend/router/main.router');

//Middleware for routers
app.use('/course', CourseRouter);
app.use('/', Router);

app.listen(port, () => console.log(`Server running on port number ${port}`));
