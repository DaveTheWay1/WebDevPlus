// * find(cb)
// purpose: Find a certain element
// returns: The “found” elem, otherwise undefined
// Callback Should: Return truthy when elem is “found”
// Callback's Args: (elem, idx)

const cars = [
    {color: 'red', make: 'BMW', year: 2001},
    {color: 'white', make: 'Toyota', year: 2013},
    {color: 'black', make: 'Ford', year: 2014},
    {color: 'white', make: 'Tesla', year: 2016}
];

const firstWhiteCar = cars.find((car) => car.color === 'white');
  // firstWhiteCar -> {color: 'white', make: 'Toyota', year: 2013}

const missingCar = cars.find((car) => car.color === 'blue');
  // missingCar -> undefined

// * YOU DO
// ? Find the first car whose year is older than 2014 and assign it to a variable named notTooOldCar;

const first2014Car = cars.find(car => car.year === 2014);
console.log(first2014Car);
// output:{ color: 'black', make: 'Ford', year: 2014 }