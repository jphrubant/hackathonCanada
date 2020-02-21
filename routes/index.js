var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/third', function(req, res, next) {
  res.render('third', { title: 'Express' });
});


/* Get second page */
router.get('/second', function(req, res, next) {
  res.render('second', { title: 'Express' });
});

//*Get third page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
