// * Turning NodeList & HTMLCollection Array-Like Objects Into Actual Arrays

// As discussed in the lesson, methods designed to return a collection of 
// DOM elements return “array-like” objects that have a forEach method, 
// but don’t contain other useful methods that full-fledged arrays have.

// If you would need to hold your DOM elements in an actual 
// array, either of the following two approaches will do the trick…

// * Array.from() Method
// Here’s how you can use the Array.from static method to convert a
// n iterable, such as a NodeList, into an actual array:
const itemEls = Array.from(document.querySelectorAll('.item'));

// For example, here’s how you could find the 
// index of a clicked DOM element in the array:
const itemEls1 = Array.from(document.querySelectorAll('.item'));
const containerEl = document.querySelector('section');

containerEl.addEventListener('click', handleClick);

function handleClick(evt) {
    const indexOfClickedItem = itemEls1.indexOf(evt.target);
    console.log(indexOfClickedItem);
}

// * Spread Syntax
// * Another way to convert a NodeList or HTMLCollection into an array is by using the Spread Syntax within an array literal:

const itemEls2 = [...document.querySelectorAll('.item')];

// * Other Methods to Select Multiple Elements
// * The following methods can also be used to select multiple elements:

getElementsByTagName(namesString)
getElementsByClassName(namesString)