
const express = require('express');
const router = express.Router();
const toolsCtrl = require('../controllers/tools')

router.get('/tools', toolsCtrl.show);

module.exports = router;

