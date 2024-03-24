function callFunction(fun){
    fun();
}

// * normal function statement
function sayHi(){
    console.log('Hi');
}
sayHi();
// output: Hi

// * function expression
// -- an anonymous function being set equal to a variable
var sayBye = function(){
    console.log('Bye');
}
sayBye();
// output: Bye

// * we can pass functions from one thing to another

callFunction(sayBye);
// sayBye will be passed through the callFunction, repalcing the "fun"
// which will eventually then call sayBye()
// output:Bye