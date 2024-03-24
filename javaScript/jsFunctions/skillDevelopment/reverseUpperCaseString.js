/*-----------------------------------------------------------------
Challenge: 07-reverseUpcaseString
Difficulty: Basic
Prompt:
- Write a function called reverseUpcaseString that accepts a single string argument, then returns the string with its characters in reverse order and converts all characters to uppercase.
Examples:
reverseUpcaseString("SEI Rocks!"); //=> "!SKCOR IES" 
-----------------------------------------------------------------*/
// Your solution for 07-reverseUpcaseString here:

function reverseUpcaseString(string){
    const arr = []
    let ogStr = string.length-1;
    for(i = ogStr; i >= 0; i--){
        arr.push(string[i]);
        
    }
    const reverseString = arr.join('');
    const reverseStringCaps = reverseString.toUpperCase();
    return reverseStringCaps
}
console.log(reverseUpcaseString('blue'));