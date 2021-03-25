// const Article = require('../models/article')

// function index(req, res) {
//     Article.find({}, function (err, articles) {
//       res.render("articles", { title: "All Movies", articles });
//     });
//   }

//   function show(req, res) {
//     Article.findById(req.params.id)
//     .populate('cast').exec(function (err, article) {
//       // Performer.find({}).where('_id').nin(movie.cast)
//       Author.find(
//         {_id: {$nin: article.cast}},
//         function(err, authors) {
//           console.log(authors);
//           res.render('articles/show', {
//             title: 'Movie Detail', article, authors
//           });
//         }
//       );
//     });
//   }
  





// function newArticle(req, res) {
//     res.render('articles/new', { title: "Add Article"});
// }

// function create(req, res) {
//     for (let key in req.body) {
//         if (req.body[key] === "") delete req.body[key];
//       }
    
//       // convert nowShowing's checkbox of nothing or "on" to boolean
//       req.body.nowShowing = !!req.body.nowShowing;
    
    
//       Article.create(req.body, function (err, article) {
//         // one way to handle errors
//         if (err) return res.redirect("/articles/new");
//         // for now, redirect right back to the "new" view
//         res.redirect(`/articles/${article._id}`);
//       });
//     }
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
    const requestedTitle = req.params.articleName;
    posts.forEach(function(post) {
        const storedTitle = post.title;
        if (storedTitle===requestedTitle) {
            console.log("YES")
        } else {
            console.log('NOPE')
        }
    });
    
};





module.exports = {
    // index,
    show,
    create,
    go,
    // new: newArticle,
};