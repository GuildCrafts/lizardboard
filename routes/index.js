var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('front_end/views/index', { title: 'Lizardboard' });
});

module.exports = router;
