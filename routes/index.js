const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (request, response, next) => {
  response.render('index', { title: 'Dragonboard', logo: 'D' });
});

/* GET home page. */
router.get('/dashboard', (request, response, next) => {
  response.render('dashboard');
});

module.exports = router;
