var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/albums', function(req, res, next) {
  knex('albums')
  .then(function(response){
    res.render('albums', { albums: response });
  })
});


var getGenres = function () {
  return [
    {value: 'pop', title: 'pop'},
    {value: 'rock', title: 'rock'},
    {value: 'rnb', title: 'R\'N\'B'}
  ]
}

router.get('/albums/creators', function(req, res, next) {
  res.render('creators', { genres: getGenres() });
});

router.post('/albums', function(req, res, next) {
  knex('albums').insert(req.body).then(function(records) {
    res.redirect('/albums');
  });
});

router.post('/albums/delete/:id', function(req, res, next) {
  knex('albums').where('id', req.params.id).del().then(function (){
    res.redirect('/albums')
    })
  });

  







// router.('/albums/creators', function(req, res, next) {
//   res.render('creators', { title: 'Express' });
// });

module.exports = router;
