// * The Logical || (or) and && (and) Operators
// The logical operators || and && can be used to combine 
// multiple conditional expressions like this:
if (num < 1 || num > 10) {
    console.log('Number is not between 1 and 10 inclusive');
}
// * The logical || (OR) operator always returns the first operand 
// * if it is truthy, otherwise return the second operand
'hello' || 'goodbye'  
// evaluates to 'hello'
0 || null  
// evaluates to null

// * The logical && (AND) operator always returns the first operand if it is falsy, 
// * otherwise return the second operand

'hello' && 'goodbye'  
// evaluates to 'goodbye'
0 && null  
// evaluates to 0

'cat' || 'dog'
// output: cat

false || true
// output: true

true && false
// output: false

false && true
// output: false

10 || 'ten'
// output: 10

10 && 'ten'
// output: 'ten'

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// * The logical || (OR) operator always returns the first operand 
// * if it is truthy, otherwise return the second operand
// * The logical && (AND) operator always returns the first operand if it is falsy, 
// * otherwise return the second operand