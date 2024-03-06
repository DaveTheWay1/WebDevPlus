// * Branching
// the if..else statement allows us to conditionally execute code.

// * The if Statement (Single Path)
let char = 'a';
if ('aeiou'.includes(char)) {
    console.log('char is a vowel!');
}
// output: char is a vowel!
// * If you have only a single statement that needs to execute, 
// * you can write that statement without using curly braces

// This code is functionally identical to the above code
if ('aeiou'.includes(char)) console.log('char is a vowel!');
// output: char is a vowel!

let num = 3;
if (num !== 3) console.log(true)
// output: none bc num is 3

// * The if...else Statement (Dual Path) 
let winner = false;
if (winner) {
    console.log('Game has been won!');
} else {
    console.log('Keep playing!');
}
// output: Keep playing!

// * The if...else...if Statement (Three or More Paths)
let secretNum = 3;
let guessNum = 3;

if (guessNum < secretNum) {
    console.log('Guess higher!');
} else if (guessNum > secretNum) {
    console.log('Guess lower!');
} else {
    console.log('You guessed the number!');
}
// output: You guessed the number!