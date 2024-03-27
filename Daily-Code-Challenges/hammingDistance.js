/*-----------------------------------------------------------------
Challenge: 12-hammingDistance
Difficulty: Intermediate
Prompt:
In information theory, the hamming distance refers to the count of the differences between two strings of equal length.  It is used in computer science for such things as implementing "fuzzy search"  capability.
- Write a function named hammingDistance that accepts two arguments which are both strings of equal length.
- The function should return the count of the symbols (characters, numbers, etc.) at the same position within each string that are different.
- If the strings are not of the same length, the function should return NaN.
Examples:
hammingDistance('abc', 'abc'); //=> 0
hammingDistance('a1c', 'a2c'); //=> 1
hammingDistance('!!!!', '****'); //=> 4
hammingDistance('abc', 'ab'); //=> NaN
-----------------------------------------------------------------*/
// Your solution for 12-hammingDistance here:

function hammingDistance(stringOne, stringTwo){
    let diffLetterCount = 0;
    if (stringOne.length !== stringTwo.length){
        return NaN;
    }
    for(i = 0; i < stringOne.length; i++){
        console.log(`String One Letter: ${stringOne[i]}`);
        console.log(`String Two Letter: ${stringTwo[i]}`);
        if(stringOne[i] !== stringTwo[i]){
            diffLetterCount += 1;
        }
    }
    return diffLetterCount;
}
console.log(hammingDistance('abc', 'abc'));
console.log(hammingDistance('a1c', 'a2c'));
console.log(hammingDistance('!!!!', '****'));
console.log(hammingDistance('abc', 'ab'));