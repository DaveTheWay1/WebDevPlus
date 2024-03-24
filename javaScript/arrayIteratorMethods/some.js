// * some(cb)
// Purpose: Check if at least one element matches a condition
// Returns: true or false
// Callback Should: Return truthy if elem is what you’re checking for
// Callback's Args: (elem, idx)

const cars = [
    {color: 'red', make: 'BMW', year: 2001},
    {color: 'white', make: 'Toyota', year: 2013},
    {color: 'black', make: 'Ford', year: 2014},
    {color: 'white', make: 'Tesla', year: 2016}
];

const hasFord = cars.some((car) => car.make === 'Ford');
  // hasFord -> true

// * YOU DO
// ? Do I have an evil monkey in my room?

const myRoom = ["evil monkey", "bed", "lamp"];
const isEvilMonkeyInRoom = myRoom.some(evil => evil === "evil monkey");
console.log(isEvilMonkeyInRoom);
// * true