// * Changing the Style of an Element
// DOM elements have a style property that can be used to set CSS styling!

// ? What naming convention is used for CSS properties in the DOM?
// lowerCamelCasing

// ? What naming convention is used for CSS properties in CSS?
// kebob-casing

// ? Why can't kebob-casing be used for the DOM as well?
// The DOM is JS so the hyphen would be interpreted as a minus sign

// This is how we can center the text in the <h1> by 
// setting the text-align CSS property on the style object:
const titleEl = document.getElementById('title');
titleEl.style.textAlign = 'center';

//  ? YOU DO: Setting Styling on a DOM Element
// * Change the color of the <p> element to a color of your choosing.
pEl.style.color = 'maroon;'