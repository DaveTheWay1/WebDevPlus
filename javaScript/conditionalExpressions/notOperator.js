// * Not Operator
!false === true // true
!null === true // true
!3 === false // true
!'' === true // true

// * !false === true:

// The ! operator negates its operand, so !false evaluates to true.
// true === true is true.
// Therefore, !false === true is true.

// * !null === true:
// m !null evaluates to true because null is a falsy value.
// true === true is true.
// Therefore, !null === true is true.

// * !3 === false:
// * !3 evaluates to false because 3 is a truthy value.
// false === false is true.
// Therefore, !3 === false is true.

// * !'' === true:
// * !'' evaluates to true because an empty string '' is a falsy value.
// true === true is true.
// Therefore, !'' === true is true.

// * DOUBLE ! OPERATOR
// A double ! operator is a great way to force an 
// expression into its actual boolean value of true or false
console.log(!!3); 
// outputs true