/*-----------------------------------------------------------------
Challenge: 13-mumble
Difficulty: Intermediate
Prompt:
- Write a function called mumble that accepts a single string argument.
- The function should return a string that has each character repeated the number of times according to its position within the string arg.  In addition, each repeated section of characters should be separated by a hyphen (-).
- Examples describe it best..
Examples:
mumble('X'); //=> 'X'
mumble('abc'); //=> 'a-bb-ccc'
mumble('121'); //=> '1-22-111'
mumble('!A 2'); //=> '!-AA-   -2222'
-----------------------------------------------------------------*/
// Your solution for 13-mumble here:

function mumble(string){
    let mumbleString = '';
    let position;
    for(i=0;i<string.length;i++){
        position = i + 1;
        mumbleString += string[i].repeat(position);
        mumbleString += '-';
    }
    mumbleString = mumbleString.substring(0,mumbleString.length-1);
    return mumbleString;
}
console.log(mumble('X'));
console.log(mumble('abc'));
console.log(mumble('121')); 
console.log(mumble('!A 2'));
