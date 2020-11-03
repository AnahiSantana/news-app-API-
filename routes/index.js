const express = require('express');
const router = express.Router();

const newsController = require('./../src/controllers/news.controller');

router.get('/everything', newsController.getAll);
router.get('/topHeadlines/:pais?',  newsController.getTopHeadlines);
router.get('/sources', newsController.getSources);
/*router.post('/auth', function(req, res) {
  console.log('Auth: ', req.body);
  res.send('ok');
});

router.post('/auth2', function(req, res) {
  console.log('Auth2: ', req.body);
  res.send('ok');
});*/


module.exports = router;