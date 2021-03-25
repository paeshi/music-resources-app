
const express = require('express');
const router = express.Router();
const coursesCtrl = require('../controllers/courses')

router.get('/courses', coursesCtrl.show);

module.exports = router;

