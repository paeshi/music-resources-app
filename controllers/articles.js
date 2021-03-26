const Article = require('../models/article');

const index = function (req, res) {
    Article.find().sort({ createdAt: -1 })
    .then((result) => {
    res.render('articles', {title: 'All Articles', articles: result});
})
.catch((err) => {
    console.log(err);  
});
};

const create_get = (req, res) => {
    res.render('create', {title: 'Create Article'});
};

const create_post = (req, res) => {
const article = new Article(req.body);
    article.save()
    .then((result) => {
        res.redirect('/articles');
    })
    .catch((err) => {
        console.log(err);  
    });
};

const details = (req, res) => {
    Article.findById(req.params.id)
    .then((result) => {
        res.render('details', { article: result, title: 'Article Details'})
    })
    .catch((err) => {
        console.log(err);  
    });
};

const delete_post = (req, res) => {
    Article.findByIdAndDelete(req.params.id)
    .then(result => {
        res.json({ redirect: '/articles'})
    })
    .catch((err) => {
        console.log(err);  
    });
};


const update = async (req, res) => {
Article.findById(req.params.id)

    .then((result) => {
    
        res.render('edit', { articles: result, title: 'Edit Details'})
    })
    .catch((err) => {
        console.log(err);  
    });
}
const put = (req, res) => {
    console.log('hello')
            Article.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, doc) => {
                
                if(!err)
                res.redirect('/articles')
        
                })
            };

module.exports = {
    index,
    details,
    create_get,
    create_post,
    delete_post,
    update,
    put,

}















// function show(req, res) {
//     res.render('articles', {
//         posts: posts,
//     })
// }
// const posts = [];
// function create(req, res) {
//     const post = {
//         title: req.body.title,
//         content: req.body.bodyContent,
//     }
//     posts.push(post);
//     res.redirect('articles');
//     // console.log(posts)

// }

// function go(req, res) {
//     const requestedTitle = _.lowerCase(req.params.articleName);
//     posts.forEach(function(post) {
//         const storedTitle = _.lowerCase(post.title);
//         if (storedTitle===requestedTitle) {
//             // res.render('articles', {
//             //     title: post.title,
//             //     content: post.content,
//                 console.log
//             // })
//         } 
//     });
    
// };





// module.exports = {
//     // index,
//     show,
//     create,
//     go,
//     posts,
    
//     // new: newArticle,