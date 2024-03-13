// * The What, Why & How of this

// * this 
// is a keyword in JavaScript available for use inside of functions/methods.

// ? When is a function considered to be a method?
// When the function is "attached" or called on an object.
// In other words, there's a dot to the left of it.

// * binding
// this has its value set by the JS engine automatically when a function is invoked.

// ? Why this is Necessary?
// Provide access to an object’s properties & methods from other methods within that object;
// and…
// Implement code reuse

class Person {
    constructor(name) {
        this.name = name;
    }

    intro() {
        return `Hello, I'm ${this.name}!`;
    }
}

    const person = new Person('Katie');
    person.intro(); //-> Hello, I'm Katie!

    // Example 2 - Implement code reuse

    // class Sprite {
    //     constructor(color, pos) {
    //         this.color = color;
    //         this.pos = pos;
    //         this.move = function(direction) {...};
    //         this.rotate = function(direction) {...};
    //         this.accelerate = function() {...};
    //         this.checkCollision = function() {...};
    //     }
    // }

// * ^ bad practice

// * the bellow is good practice
class Sprite {
    constructor(color, pos) {
        this.color = color;
        this.pos = pos;
    }
    
    move(direction) {
        switch (direction) {
        case 'R':
            this.pos.x < 999 ? this.pos.x++ : this.pos.x = 0;
            break;
        case 'D':
          //...additional code
        }
    }
    //...other methods
}

// ? The this keyword is accessible within every ____________?
// * function

// ? What is one of the reasons why we need this in JavaScript?
// * To provide access to an object's properties & methods from another method within that object.
// * Implement code reuse thanks to a single copy of a method being able to be called by any number of objects.

// * Automatic Binding of this
// Since the value of this is determined by how we call a function, 
// we’ll take a look at the following scenarios of how functions are called:

// * As Non-Methods (not attached to an object)
// When called as a basic, non-method function (not attached to an object):
function thisCheck() {
    console.log(this);
}
thisCheck(); // -> references the window object bc we used it within a window function
// a default behavior when using it in a stand alone function like above
function thisCheck() {
    x = 25;
    console.log(this)
}
thisCheck(); // now within the window function, at the bottom, an x:25 will appear
// this would not happen if you had attatched var let or const
// on a browser
function thisCheck() {
    'use strict';
    x = 25;
    console.log(this)
}
thisCheck(); // now, with 'use strict' it prevents from x = 25 to work. prevents us from making mistakes

// * As Methods
function thisCheck() {
    console.log(this);
}

const ninja1 = {
    name: 'JS Ninja',
    coolMethod:thisCheck
};
ninja1.coolMethod();
// //////////////////////////////////
function thisCheck() {
    console.log(this);
}

const ninja = {
    name: 'JS Ninja',
    thisCheck
};    
// call thisCheck() as a method
ninja.thisCheck();  //-> {name: "JS Ninja", thisCheck: f}

// As Classes & Constructor Functions


// * As DOM Event Handlers
const board = document.getElementById('board');
board.addEventListener('click', function() {
    console.log(this);
});
// on click of that element... it will console log it
//->  <main id="board">...

// * As Generic Callback Functions
class Ninja {
    constructor(name) {
        this.ninjaName = name;
    }

    chop(numChops) {
        setTimeout(function() {
        // Won't work because...
        // 'this' will set to the window object
        if (numChops > 0) {
            console.log(`${this.ninjaName} chop!`);
          // Recursion coming up!
            this.chop(--numChops);
        }
    }, 500);
    }
}
    
const ninja2 = new Ninja('JS Ninja');
ninja2.chop(2);  //->  undefined chop! / then an error
// this fails because THIS is applied to ninjaName and bc it is not defined to out object and it is to the window by default
// and it does not have ninjaName it works once then fails

class Ninja {
    constructor(name) {
        this.ninjaName = name;
    }

    chop(numChops) {
        setTimeout(() => {
        // Won't work because...
        // 'this' will set to the window object
        if (numChops > 0) {
            console.log(`${this.ninjaName} chop!`);
          // Recursion coming up!
            this.chop(--numChops);
        }
    }, 500);
    }
}
    
const ninja3 = new Ninja('JS Ninja');
ninja3.chop(2);
// using an arrow function solves the issue

// this way the value of "this" is bound, depends on how a function is called:

//  stand alone functions: this is found to the blobal object (window object when in the browser)
// methods: this is bound to the object that calls the method
// classess and constructor functions: this is bound the instance of the class
// callbacks: this is bound to the global object (window object when in the browser)
// event hadnlers: this is bound to the element we registed the event to
// arrow functions: they dont have their own automatic this binding and instead take the this context of the enclosing object


// ? What type of programming languages rely on the concept of this?
// Object Oriented Programming Languages
// ? True or false: The value of this can be always be determined by examining the definition of a non-arrow function.
// False, because the value of this is determined by how the function is called, not how it is defined.
// ? What is this bound to within a general callback function (not an event listener callback)?
// The window object
// unless in strict mode, then it will be undefined
// ? What is this bound to within a method invoked on an object?
// The object left of the dot!