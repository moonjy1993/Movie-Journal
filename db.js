var mongoose = require('mongoose'),
    URLSlugs = require('mongoose-url-slugs');

// my schema goes here!
var Movie = new mongoose.Schema({
	title: String,
	director: String,
	year: Number
});
//Movie.plugin(URLSlugs('movie'));

mongoose.model('Movie', Movie);


mongoose.connect('mongodb://localhost/hw05');