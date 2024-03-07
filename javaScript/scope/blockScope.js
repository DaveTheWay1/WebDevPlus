// * Block Scope

// * Both let and const define variables that 
// can only be accessed within the code block they are defined in.

// * A code block is created by using curly braces.

function varTest() {
    var x = 1;
    if (true) {
      var x = 2;  // same variable!
      console.log(x);  // 2
    }
    console.log(x);  // 2
}

function letTest() {
    let x = 1;
    if (true) {
      let x = 2;  // different variable
      console.log(x);  // 2
    }
    console.log(x);  // 1
}

// * this is due to hoisting.
// the var change travels while the let does not.
// ! NOTE those changes in var would exist only in that scope
// to exist elsewhere it would need to be returned