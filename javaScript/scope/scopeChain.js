// * The Scope Chain

// * When a variable or function is referenced in code, 
// JavaScript must find that identifier in memory and 
// retrieve its value or reference.

// * First, JS will look for the variable or function 
// in the current scope that the code is executing in.
// * However, if JS doesn’t find the identifier, 
// up the scope chain it goes looking for it!

var a = 4; 

function foo(x){
    var b = a * 4;

    function bar(y) {
        var c = y * b;
        return c
    }
    return bar(b);
}

console.log(foo(a));

// * Notice how the scopes are given a name followed 
// by a list of the identifiers defined within that scope:

// Scope of…	Identifiers defined within…
// global:	a, foo
// foo:	x, b, bar
// bar:	y, c

// !! You can go up the scope chain, but not down it!

// * If JS gets to the global scope 
// * (which is the top of the food chain in the scope hierarchy) 
// * and still can’t find what it’s looking for, 
// that’s when your program crashes due to a ReferenceError.

// ? Would the function foo have access to the variable c?
// No, because c is not "up" the scope chain
// and also it is in a different function though it is within the foo function.
// it cannot access things in different functions.