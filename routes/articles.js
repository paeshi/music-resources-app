const express = require('express');
const router = express.Router();
const articlesCtrl = require('../controllers/articles')

router.get('/articles', articlesCtrl.show);
// router.get('/new', articlesCtrl.new);
// router.get('/:id', articlesCtrl.show);
router.post('/articles', articlesCtrl.create)

router.get('/articles/:articleName', articlesCtrl.go);
module.exports = router;