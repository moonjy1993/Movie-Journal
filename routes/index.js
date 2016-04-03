var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Movie = mongoose.model('Movie');


router.get('/', function(req, res){
	res.redirect('movies');
});


router.get('/movies', function(req, res, next){
	var input=req.query.name;
	if(input!=null && input.length>0) Movie.find({director: input}, function(err,movies,count){res.render('movies',{movies: movies, print: input});});
	else Movie.find(function(err,movies,count){res.render('movies',{movies: movies});});
});

router.get('/movies/add', function(req,res){
	res.render('add');
});

router.post('/movies/add', function(req, res, next) {
	new Movie({
		title:req.body.title, 
		year: req.body.year, 
		director: req.body.director
		}).save(function(err,movie,count){
			res.redirect('/movies');
	});
 
});
module.exports = router;