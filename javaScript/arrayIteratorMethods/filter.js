// * filter(cb)
// Purpose: Select certain elements from a source array.
// Returns: New array
// Callback Should: Return truthy value if current elem is to be included in new array
// Callback’s Args: (elem, idx)

const nums = [100, 2, 5, 42, 99];
const odds = nums.filter((num) => num % 2);

// odds -> [5, 99]

// * YOU DO
// ? Filter out all “jerks”!

const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];

const noJerks = people.filter(jerk => jerk !== "jerks")
console.log(noJerks);