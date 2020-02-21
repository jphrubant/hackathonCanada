var express = require('express');
var axios = require('axios');
var router = express.Router();
const axios = require('axios');

/* Get Years page. */
router.get('/years', function(req, res, next) {
  res.render('years');
});

/* Get Sports page */
router.get('/sports', function(req, res, next) {
  res.render('sports');
});

/* Get Atheletes page */
router.get('/athletes', function(req, res, next) {
  res.render('athletes');
});

//*Get Homepage */
router.get('/', function(req, res, next) {
  axios.get('https://canadajson.herokuapp.com/sports')
    .then( (response) => {
      res.render('index', {data:response.data});
    })
    .catch((err) => {
      console.log(err)
    })
});

module.exports = router;
