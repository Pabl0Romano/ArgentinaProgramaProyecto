var express = require('express');
var router = express.Router();
var path = require('path')
var indexController = require("../controllers/indexController")

/* GET home page. */
router.get('/', indexController.index);

module.exports = router;
