
const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts');


router.get('/posts', postsCtrl.show);
router.get('/posts/:postName', postsCtrl.go);

module.exports = router;

