//Module shared among references
console.log("General Module Import ");
var movies = require('./movies');
movies.favMovie = "The Notebook";
console.log("Coder's favorite movie is: " + movies.favMovie);
// Object Factory
console.log("Object Factory ");
var moviesFactory = require('./movies_factory');
var coderMovies = moviesFactory();
coderMovies.favMovie = "The Notebook";
console.log("Coder's favorite movie is: " + coderMovies.favMovie);

