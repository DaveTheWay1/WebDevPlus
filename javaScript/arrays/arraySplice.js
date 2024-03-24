// * Add/Remove Elements To/From Anywhere in the Array
// * The splice() method is capable of adding and/or removing any number of elements to/from an array with a single line of code!

// * syntax
// array.splice(start, deleteCount, newItem1, newItem2...)

const movies = ['Jurassic Park', 'Caddyshack', 'Interstellar', 'Contact'];

// * Using splice() to Remove Element(s)
// Remove 'Caddyshack' & 'Interstellar'
let removedMovies = movies.splice(1, 2);
console.log(movies);
// output: [ 'Jurassic Park', 'Contact' ]
console.log(removedMovies);
// output: [ 'Caddyshack', 'Interstellar' ]

// * Using splice() to Insert Element(s)
// Insert 'Spaceballs' & 'Alien' after 'Jurassic Park'
removedMovies = movies.splice(1, 0, 'Spaceballs', 'Alien');
console.log(movies, removedMovies);
// output: [ 'Jurassic Park', 'Spaceballs', 'Alien', 'Contact' ]
// output: [] nothing was removed

// * Using splice() to Replace Element(s)
// Replace 'Jurassic Park' & 'Spaceballs' with 'Best In Show'
removedMovies = movies.splice(0, 2, 'Best In Show');
console.log(movies);
console.log(removedMovies);
// output: [ 'Best In Show', 'Alien', 'Contact' ]
// output: [ 'Jurassic Park', 'Spaceballs' ]