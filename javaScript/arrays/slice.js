// * Some of an Array
// We can use the slice method to create part (or all), of an array.
// The slice method always returns a new array and does not mutate (change) the source array.

movies //-> ['Best In Show', 'Alien', 'The Matrix', 'Gladiator']
const twoMovies = movies.slice(1, 3);
twoMovies //-> ['Alien', 'The Matrix']
// * it does not include the last(3), only the first(1)