// * findIndex(cb)
// Purpose: Find the index of a certain element
// Returns: The index of the first elem “found”, otherwise -1
// Callback should: Return truthy when elem is “found”
// Callback's Args: (elem, idx)

const cars = [
    {color: 'red', make: 'BMW', year: 2001},
    {color: 'white', make: 'Toyota', year: 2013},
    {color: 'black', make: 'Ford', year: 2014},
    {color: 'white', make: 'Tesla', year: 2016}
];

const idxFirstCarNewerThan2015 = cars.findIndex((car) => car.year > 2015);
console.log(idxFirstCarNewerThan2015);
// idxFirstCarNewerThan2015 -> 3


const missingCarIdx = cars.findIndex((car) => car.year > 2020);
console.log(missingCarIdx);
// missingCarIdx -> -1