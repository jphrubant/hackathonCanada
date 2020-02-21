var express = require('express');
var router = express.Router();
const axios = require('axios');

/* Get Atheletes page */
router.get('/athletes', function(req, res, next) {
  axios.get('https://canadajson.herokuapp.com/athletes')
    .then( (response) => {
      res.render('index', {athletes:response.data});
    })
    .catch((err) => {
      console.log(err)
    });

  axios.get('https://canadajson.herokuapp.com/sports')
    .then( (response) => {
      res.render('index', {sports:response.data});
    })
    .catch((err) => {
      console.log(err)
    });

    axios.get('https://canadajson.herokuapp.com/years')
    .then( (response) => {
      res.render('index', {years:response.data});
    })
    .catch((err) => {
      console.log(err)
    });
  res.render('athletes');
});

/* Get Sports page */
router.get('/sports', function(req, res, next) {
  axios.get('https://canadajson.herokuapp.com/athletes')
    .then( (response) => {
      res.render('index', {athletes:response.data});
    })
    .catch((err) => {
      console.log(err)
    });

  axios.get('https://canadajson.herokuapp.com/sports')
    .then( (response) => {
      res.render('index', {sports:response.data});
    })
    .catch((err) => 
      console.log(err)
    });

    axios.get('https://canadajson.herokuapp.com/years')
    .then( (response) => {
      res.render('index', {years:response.data});
    })
    .catch((err) => {
      console.log(err)
    });
  res.render('sports');
});

/* Get Years page. */
router.get('/years', function(req, res, next) {
  axios.get('https://canadajson.herokuapp.com/athletes')
    .then( (response) => {
      res.render('index', {athletes:response.data});
    })
    .catch((err) => {
      console.log(err)
    });

  axios.get('https://canadajson.herokuapp.com/sports')
    .then( (response) => {
      res.render('index', {sports:response.data});
    })
    .catch((err) => {
      console.log(err)
    });

    axios.get('https://canadajson.herokuapp.com/years')
    .then( (response) => {
      res.render('index', {years:response.data});
    })
    .catch((err) => {
      console.log(err)
    });
  res.render('years');
});

//*Get Homepage */
router.get('/', function(req, res, next) {
  axios.get('https://canadajson.herokuapp.com/athletes')
    .then( (response) => {
      res.render('index', {athletes:response.data});
    })
    .catch((err) => {
      console.log(err)
    });

  axios.get('https://canadajson.herokuapp.com/sports')
    .then( (response) => {
      res.render('index', {sports:response.data});
    })
    .catch((err) => {
      console.log(err)
    });

    axios.get('https://canadajson.herokuapp.com/years')
    .then( (response) => {
      res.render('index', {years:response.data});
    })
    .catch((err) => {
      console.log(err)
    });
});



module.exports = router;
