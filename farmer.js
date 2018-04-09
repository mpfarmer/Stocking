//Module shared among references
console.log("General Module Import ");
var movies = require('./movies');
console.log("Farmer's favorite movie is: " + movies.favMovie);
// Object Factory
console.log("Object Factory ");
var moviesFactory = require('./movies_factory');
var farmerMovies = moviesFactory();
console.log("Farmer's favorite movie is: " + farmerMovies.favMovie);