// * Passing an Anonymous Function
// Certain functions and methods (functions attached to an object) require that a function be provided as an argument.

// For example, the forEach method on arrays:
const colors = ['red', 'green', 'blue'];
	
colors.forEach(function(color) {
    console.log(color);
});
// Since the function provided to the forEach will never be called from anywhere else in the code, we don’t need to bother to create a separate named function and pass it in.

// Anonymous functions like shown above are very convenient!