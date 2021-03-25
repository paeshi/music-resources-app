
const express = require('express');
const router = express.Router();
const downloadsCtrl = require('../controllers/downloads')

router.get('/downloads', downloadsCtrl.show);

module.exports = router;

