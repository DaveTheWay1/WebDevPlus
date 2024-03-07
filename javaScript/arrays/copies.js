// * Copy all of an array
let movies = ['Best In Show', 'Alien', 'The Matrix', 'Gladiator']
const moviesCopy = [...movies];
// moviesCopy //-> ['Best In Show', 'Alien', 'The Matrix', 'Gladiator']

// * Copy All of an Array & Insert Additional Elements
twoMovies //-> ['Alien', 'The Matrix']
const fourMovies = [ 'Amadeus', ...twoMovies, 'The Sting' ];
fourMovies //-> ['Amadeus', 'Alien', 'The Matrix', 'The Sting'];