const express = require('express');
const morgan = require('morgan');
const _ = require('lodash');
const port = 3050;
require('./config/database');
const app = express();
const indexRouter = require('./routes/index');
const articlesRouter = require('./routes/articles');
const toolsRouter = require('./routes/tools');
const coursesRouter = require('./routes/courses');
const downloadsRouter = require('./routes/downloads');
const aboutRouter = require('./routes/about')



app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false}));
app.use(express.static('public'));


app.use('/', indexRouter);
app.use('/', articlesRouter);
app.use('/', toolsRouter);
app.use('/', coursesRouter);
app.use('/', downloadsRouter);
app.use('/', aboutRouter);

// app.post('/articles', function (req, res) {
//     console.log(req.body);
// })

app.listen(port, function() {
    console.log(`Express is listening on port: ${port}`);
});