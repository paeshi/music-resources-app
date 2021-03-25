const _ = require('lodash');
const {posts} = require('../controllers/articles');

function show(req, res) {
    res.render('posts');
}

function go(req, res) {
    const requestedTitle = _.lowerCase(req.params.articleName);
    posts.forEach(function(post) {
        const storedTitle = _.lowerCase(post.title);
        if (storedTitle===requestedTitle) {
            console.log('ok');
            // res.render('posts', {
            //     title: post.title,
            //     content: post.content,
            
        } 

    })
};





module.exports = {
    show,
    go,
   
};