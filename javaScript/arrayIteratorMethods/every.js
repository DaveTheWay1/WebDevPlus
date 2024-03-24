// * every(cb)
// Purpose: Check if every element matches a condition
// Returns: true or false
// Callback Should Return truthy if elem is what you’re checking for
// Callback's Args: (elem, idx)

// ? Are all cars newer than 2000?

const cars = [
    {color: 'red', make: 'BMW', year: 2001},
    {color: 'white', make: 'Toyota', year: 2013},
    {color: 'black', make: 'Ford', year: 2014},
    {color: 'white', make: 'Tesla', year: 2016}
];

const everyCarIsNewerThan2000 = cars.every((car) => car.year > 2000);
  // everyCarIsNewerThan2000 -> true