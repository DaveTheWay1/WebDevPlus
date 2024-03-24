// * Array Sort

// * The sort() method of Array instances sorts the elements of an array in place and 
// returns the reference to the same array, now sorted. 

// * The default sort order is ascending, built upon converting the elements into strings, 
// then comparing their sequences of UTF-16 code units values.
// * ^ nearly alphabetical order but it MAY NOT always be.
// ? what does this really mean? Ex: 
// "hi" in UTF-16:
// 'h' is represented as the code unit 0x0068.
// 'i' is represented as the code unit 0x0069.
// So, "hi" in UTF-16 is represented as 0x0068 0x0069.

// "david" in UTF-16:
// 'd' is represented as the code unit 0x0064.
// 'a' is represented as the code unit 0x0061.
// 'v' is represented as the code unit 0x0076.
// 'i' is represented as the code unit 0x0069.
// 'd' is represented as the code unit 0x0064.
// So, "david" in UTF-16 is represented as 0x0064 0x0061 0x0076 0x0069 0x0064.

// Compare the first code unit of each string: 0x0068 (hi) vs 0x0064 (david). 
// Since 0x0064 comes before 0x0068, "david" comes before "hi" in ascending order.
// If the first code units are the same, move to the next code unit and compare: 0x0069 (hi) vs
// 0x0061 (david). Since 0x0061 comes before 0x0069, "david" still comes before "hi" in ascending order.

// * trying sort

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// output: [ 'Dec', 'Feb', 'Jan', 'March' ]

const array1 = [1,30,4,21,100000];
array1.sort();
console.log(array1);
// output [ 1, 100000, 21, 30, 4 ]

// * Syntax
sort()
sort(compareFn);