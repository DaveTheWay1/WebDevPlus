// * Create a Single String from an Array of Strings
fourMovies //-> ['Amadeus', 'Alien', 'The Matrix', 'The Sting'];
let movieString = fourMovies.join();
movieString //-> 'Amadeus,Alien,The Matrix,The Sting'

// As you can see, by default, the movie strings were separated by a comma. 
// However, we can pass join whatever string we want to use as the separator:
movieString = fourMovies.join(' -- ');
movieString //-> 'Amadeus -- Alien -- The Matrix -- The Sting'