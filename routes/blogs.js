const express = require('express');
const router = express.Router();
const Article = require('../models/article');
const blogsCtrl = require('../controllers/blogs')


router.get('/blogs', blogsCtrl.index);
module.exports = router;