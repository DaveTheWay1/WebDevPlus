/*-----------------------------------------------------------------
Challenge: 11-isPalindrome
Difficulty: Intermediate
Prompt:
- Write a function called isPalindrome that accepts a single string argument, then returns true or false depending upon whether or not the string is a palindrome.
- A palindrome is a word or phrase that are the same forward or backward.
- Casing and spaces are not included when considering whether or not a string is a palindrome.
- If the length of the string is 0 or 1, return true.
Examples:
isPalindrome('SEI Rocks'); //=> false
isPalindrome('rotor'); //=> true
isPalindrome('A nut for a jar of tuna'); //=> true
isPalindrome(''); //=> true
-----------------------------------------------------------------*/
// Your solution for 11-isPalindrome here:


function isPalindrome(string){
    let revString = '';
    let noSpaces = '';
    if(string.length === 0 || string.length === 1){
        return true;
    }
    if(string.includes(' ')){
        for(i = 0; i < string.length; i++){
            if(string[i] === ' '){
                continue
                }else{
                noSpaces += string[i];
            }
        }
    }else{
        noSpaces += string;
    }
    for(i = string.length-1; i >= 0; i--){
        if(string[i] === ' '){
            continue
        } else {
            revString += string[i];
        }
    }
    revString = revString.toLowerCase();
    noSpaces = noSpaces.toLowerCase();
    // console.log(`revString: ${revString}, noSpaces: ${noSpaces}`);
    if(revString === noSpaces){
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome('SEI Rocks!'));
console.log(isPalindrome('rotor'));
console.log(isPalindrome('A nut for a jar of tuna'));
console.log(isPalindrome(''));