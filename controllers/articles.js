
const _= require('lodash');

function show(req, res) {
    res.render('articles', {
        posts: posts,
    })
}
const posts = [];
function create(req, res) {
    const post = {
        title: req.body.title,
        content: req.body.bodyContent,
    }
    posts.push(post);
    res.redirect('articles');
    // console.log(posts)

}

function go(req, res) {
    const requestedTitle = _.lowerCase(req.params.articleName);
    posts.forEach(function(post) {
        const storedTitle = _.lowerCase(post.title);
        if (storedTitle===requestedTitle) {
            // res.render('articles', {
            //     title: post.title,
            //     content: post.content,
                console.log
            // })
        } 
    });
    
};





module.exports = {
    // index,
    show,
    create,
    go,
    posts,
    
    // new: newArticle,
};