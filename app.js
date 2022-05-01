require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./models/connect');
const coursesRouter = require('./routes/courses');
// const studyTimeRouter = require('./routes/study_time');
// const tuitionRouter = require('./routes/tuition');
const homeRouter = require('./routes/home');
const upload = require('./routes/upload');

const app = express();
let _ = require('lodash');
app.locals.htmlDisplay = html => _.escape(html).replace(/\n/g, '<br>');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './public')));

// Get home
app.use('/', homeRouter);

// Khóa học
app.use('/courses', coursesRouter);

app.use('/upload', upload);

//TEST
// app.use('/courses', studyTimeRouter);
// app.use('/tuition', tuitionRouter);

db.sync().then(function (){
   const port = process.env.PORT || 3000;
   console.log(`Server is listening on port ${port}`);
   app.listen(port);
}).catch(console.error);