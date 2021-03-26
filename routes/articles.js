const express = require('express');
const router = express.Router();
const Article = require('../models/article');
const articlesCtrl = require('../controllers/articles')
const methodOverride = require('method-override');

// router.get('/articles', articlesCtrl.show);
// // router.get('/new', articlesCtrl.new);
// // router.get('/:id', articlesCtrl.show);
// router.post('/articles', articlesCtrl.create)

// router.get('/articles/:articleName', articlesCtrl.go);


router.get('/articles', articlesCtrl.index);

router.get('/articles/create', articlesCtrl.create_get);
router.post('/articles', articlesCtrl.create_post);
router.get('/articles/:id', articlesCtrl.details);
router.delete('/articles/:id', articlesCtrl.delete_post);
router.get('/articles/:id/edit', articlesCtrl.update);

router.put('/articles/:id/edit', articlesCtrl.put)
    
// router.put('/articles/:id', articlesCtrl.update);

// router.put('/:id', (req, res) => {
//     res.send('Update Author' + req.params.id)
// })

// router.get('/single-articles', (req, res) => {
//     Article.findById('605c32221be38770857367fc')
//     .then((result) => {
//     res.send(result);
// })
// .catch((err) => {
//     console.log(err);  
// });
// })


// router.get('/add-article', function(req, res) {
//     const articles = new Article({
//         title: 'Chords',
//         snippet: 'About chords',
//         body: 'This is chord theory'
//     });
//     articles.save()
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// })



module.exports = router;