
const express = require('express');
const router = express.Router();
const aboutCtrl = require('../controllers/about')

router.get('/about', aboutCtrl.show);

module.exports = router;

