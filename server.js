const express = require('express');
const morgan = require('morgan');
const _ = require('lodash');
const port = 3050;
require('./config/database');
const app = express();
const Article = require('./models/article');
// const indexRouter = require('./routes/index');
// const articlesRouter = require('./routes/articles');
const toolsRouter = require('./routes/tools');
const coursesRouter = require('./routes/courses');
const downloadsRouter = require('./routes/downloads');
const aboutRouter = require('./routes/about')
const postsRouter = require('./routes/posts');
const { removeListener } = require('./models/article');
const { render } = require('ejs');



app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));


// app.use('/', indexRouter);
// app.use('/', articlesRouter);
app.use('/', toolsRouter);
app.use('/', coursesRouter);
app.use('/', downloadsRouter);
app.use('/', aboutRouter);
app.use('/', postsRouter);

app.get('/', function(req, res) {
    const articles = [
        {title: 'Harmony', snippet: 'This is harmony...'},
        {title: 'Melody', snippet: 'This is melody...'},
        {title: 'Theory', snippet: 'This is theory...'},
    ];
    res.render('index', {title: 'Home', articles});
})

app.get('/add-article', function(req, res) {
    const articles = new Article({
        title: 'Chords',
        snippet: 'About chords',
        body: 'This is chord theory'
    });
    articles.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    })
})

app.get('/articles', (req, res) => {
    Article.find().sort({ createdAt: -1 })
    .then((result) => {
    res.render('articles', {title: 'All Articles', articles: result});
})
.catch((err) => {
    console.log(err);  
});
})

app.get('/single-articles', (req, res) => {
    Article.findById('605c32221be38770857367fc')
    .then((result) => {
    res.send(result);
})
.catch((err) => {
    console.log(err);  
});
})

app.get('/articles/create', (req, res) => {
    res.render('create');
})

app.post('/articles', (req, res) => {
    console.log(req.body)
    const article = new Article(req.body);
    article.save()
    .then((result) => {
        res.redirect('/articles');
    })
    .catch((err) => {
        console.log(err);  
    });
})



app.get('/articles/:id', (req, res) => {
    const id = req.params.id;
    Article.findById(id)
    .then(result => {
        res.render('details', { article: result, title: 'Article Details'})
    })
    .catch((err) => {
        console.log(err);  
    });
})

app.delete('/articles/:id', (req, res) => {
    const id = req.params.id;
    Article.findByIdAndDelete(id)
    .then(result => {
        res.json({ redirect: '/articles'})
    })
    .catch((err) => {
        console.log(err);  
    });
})




// app.post('/articles', function (req, res) {
//     console.log(req.body);
// })

app.listen(port, function() {
    console.log(`Express is listening on port: ${port}`);
});