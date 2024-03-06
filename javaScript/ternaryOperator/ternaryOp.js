// * Ternary Operator
// * The ternary operator is ideal when you need to return 
// * one of two values depending upon a condition:
let score = 76;
let message = score > 100 ? "You rock!" : "Keep trying!";
console.log(message);
// output: Keep trying!

// the above translates to
let score1 = 76
let message1;
if (score1 > 100) {
    message1 = "You rock!";
} else {
    message1 = "Keep trying!";
}
console.log(message1);
// output:keep trying!

// ** A ternary can also be used to evaluate one of two 
// expressions, so you can actually run a method 
// if you’d like:

score > 100 ? gameWinner() : gameLoop();