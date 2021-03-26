const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const _ = require('lodash');
const port = process.env.PORT || 3050;
require('./config/database');
const app = express();
const Article = require('./models/article');
const indexRouter = require('./routes/index');
const articlesRouter = require('./routes/articles');
const toolsRouter = require('./routes/tools');
const coursesRouter = require('./routes/courses');
const downloadsRouter = require('./routes/downloads');
const aboutRouter = require('./routes/about')
const postsRouter = require('./routes/posts');
const { removeListener } = require('./models/article');
const { render } = require('ejs');
const blogsRouter = require('./routes/blogs');



app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use(methodOverride('_method'));

        
// const details = (req, res) => {
//     Article.findById(req.params.id)
//     .then((result) => {
//         res.render('details', { article: result, title: 'Article Details'})
//     })
//     .catch((err) => {
//         console.log(err);  
//     });
// };
// app.use('/', indexRouter);





app.use('/', articlesRouter);
app.use('/', toolsRouter);
app.use('/', coursesRouter);
app.use('/', downloadsRouter);
app.use('/', aboutRouter);
app.use('/', postsRouter);
app.use('/', blogsRouter)
app.use('/', indexRouter)

// app.get('/', function(req, res) {
//     const articles = [
//         {title: 'Harmony', snippet: 'This is harmony...'},
//         {title: 'Melody', snippet: 'This is melody...'},
//         {title: 'Theory', snippet: 'This is theory...'},
//     ];
//     res.render('index', {title: 'Home', articles});
// })


// app.get('/articles/:id/edit', function (req, res) {
    
//     Article.findById(req.params.id)
//     .then((result) => {
//         res.render('edit', { articles: result, title: 'Edit Details'})
//     })
//     .catch((err) => {
//         console.log(err);  
//     });
// })

// app.put('/articles/:id', function (req, res) {
//     console.log('hello')
//         Article.findByIdAndUpdate(req.params.id, (err, doc) => {
//             console.log('hihi')
//             console.log(doc);
//             if(!err)
//             res.redirect('/articles')
    
//             })
//         });







// app.post('/articles', function (req, res) {
//     console.log(req.body);
// })

app.listen(port, function() {
    console.log(`Express is listening on port: ${port}`);
});