var express = require('express');
var axios = require('axios');
var router = express.Router();

/* Get Atheletes page */
router.get('/athletes', function(req, res, next) {
  axios.get('https://canadajson.herokuapp.com/athletes')
    .then( (response) => {
      console.log(response.data);
      res.render('athletes', {athletes:response.data});
    })
    .catch((err) => {
      console.log(err)
    });
});

/* Get Sports page */
router.get('/sports', function(req, res, next) {
    axios.get('https://canadajson.herokuapp.com/sports')
    .then( (response) => {
      res.render('sports', {sports:response.data});
    })
    .catch((err) => {
      console.log(err)
    });
});

/* Get Years page. */
router.get('/years', function(req, res, next) {
    axios.get('https://canadajson.herokuapp.com/years')
    .then( (response) => {
      res.render('years', {years:response.data});
    })
    .catch((err) => {
      console.log(err)
    });
});

//*Get Homepage */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
