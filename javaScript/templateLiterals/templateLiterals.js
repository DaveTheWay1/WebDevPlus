// * Template Literals 

let myString = `This is my string`;

// * Features of Template Literals
const person = {
    firstName: 'Albert',
    lastName: 'Einstein',
    born: 1879,
    note: 'genius'
};

let result = person.firstName + ' ' + person.lastName + ' was born in ' + person.born + ' and was a ' + person.note + '.';
console.log(result);
  // Albert Einstein was born in 1879 and was a genius.

//   Using template literals, we can “embed” JS expressions within a string using interpolation

let result1 = `${person.firstName} ${person.lastName} was born in ${person.born} and was a ${person.note}.`;
console.log(result1)
// Albert Einstein was born in 1879 and was a genius.
// * the $ is a heads up that there will be interpolation
// * the {} is for what we want interpolated.. if thats the correct word.
// * interpolation is a word that describes the process of inject a value into a template string.

// * the .firstName, .born, are all example of dot notation. 
// * it is the name of the object . the name of the key that contains the value you want

// * multiline strings

let phrase = "When in doubt, \nconsole log it out";
let myPhrase2 = `when in doubt
console log it out`;

console.log(phrase);
// When in doubt, 
// console log it out

console.log(myPhrase2);
// when in doubt
// console log it out

let htmlTemplate =
`
<div class="panel">
    <div class="title">${person.firstName} ${person.lastName}</div>
    <div class="content">
        <p>Born: ${person.born}</p>
        <p>Note: ${person.note}</p>
    </div>
</div>
`;

// * the below is more advanced focus on the above

// * Tagged Template Literals
function tagFn(strings, ...values) {
    // strings will be an array of the literal text parts of the string
    //   e.g., ['String 1 ', ' string 2 ']
    // values will be an array of the JS expressions between the ${}'s
    //   e.g., [value1, value2]
    return 'Whatever you want!';
}

let result3 = tagFn`String 1 ${value1} string 2 ${value2}`;
  // result3 -> 'Whatever you want!'