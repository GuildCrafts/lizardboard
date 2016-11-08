const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
  response.render('dashboard', { title: 'Dashboard', logo: 'D' });
});

module.exports = router;
