const Article = require('../models/article');



const index = function(req, res) {
    Article.find().sort({ createdAt: -1 })
    .then((result) => {
    res.render('articles', {title: 'All Articles', articles: result});
})
.catch((err) => {
    console.log(err);  
});
};


module.exports = {
    index,
}