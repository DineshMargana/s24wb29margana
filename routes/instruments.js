var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Instruments', { title: 'Search results of Instruments'});
});

module.exports = router;