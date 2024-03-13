// * reduce(cb, initAcc)
// Purpose: Reduce the array to a single value/object
// Returns: Final value of acc (accumulator) 
// Callback Should: Return the new value of acc for the next iteration
// Callback's Args: (acc, elem, idx)

const nums = [25, 6, 100, 3];

// The callback returns the value of
// acc (accumulator) for the next iteration.
// The second argument, `0`, is the value
// of acc on the first iteration.
const sum = nums.reduce((acc, num) => acc + num, 0);

// Initial values: acc = 0 (initial value provided as the second argument to reduce), num = 25 (first element of the array).
// First iteration: acc + num = 0 + 25 = 25.
// Second iteration: acc + num = 25 + 6 = 31.
// Third iteration: acc + num = 31 + 100 = 131.
// Fourth iteration: acc + num = 131 + 3 = 134.

// Count votes
// The reduce method can return any single thing, such as an object!

const votes = ['Yes', 'No', 'No', 'Yes', 'Yes'];
const tally = votes.reduce((acc, vote) => {
  // Assign 1 if first time seeing a certain "type" of vote
  // otherwise increase count by 1
    acc[vote] = acc[vote] ? acc[vote] + 1 : 1;
    return acc;
}, {});  // Note the initial value is an empty object

// tally -> {"No": 2, "Yes": 3}