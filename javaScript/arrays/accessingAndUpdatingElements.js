// * Accessing/Updating the Elements in an Array
let movies = ['Caddyshack', 'Interstellar', 'Moonraker'];
let firstMovie = movies[0];
console.log(firstMovie);
// output: Caddyshack

movies[2] = 'Contact';
console.log(movies);
// output: [ 'Caddyshack', 'Interstellar', 'Contact' ]

// * assume we didnt know how many elements in an array and we want the last one.
let lastMovie = movies[movies.length - 1];
console.log(lastMovie);
// * output: Contact