const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (request, response, next) => {
  response.render('index', { title: 'Lizardboard' });
});

router.get('/styleguide', ( request, response, next ) => {
  response.render('styleguide/styleguide', { title: 'Style Guide'});
});

module.exports = router;
