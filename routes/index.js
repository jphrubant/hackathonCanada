var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET home page. */

router.get('/third', function(req, res, next) {
  res.render('third', { title: 'Express' });
});


router.get('/second', function(req, res, next) {
  res.render('second', { title: 'Express' });
});




module.exports = router;
