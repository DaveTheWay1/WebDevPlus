// * Accessing/Modifying the Attributes of an Element

// * You may need to get, set, or check if an element has a certain attribute.

// * The following are methods that the Element API has 
// for working with an element’s attributes

// * getAttribute(name)
// * setAttribute(name, value)
// * hasAttribute(name)

// ? YOU DO: Attributes

// In index.html, add an <a> element to index.html with 
// content of “Visit Google” but without an href attribute.
<a>Visit Google</a>
// Reload the page and verify that the link does not work. 
// In fact, it won’t even look like a link.

// In the JS, write the line of code that will add an href 
// attribute that will make the link navigate to “https://www.google.com”.
const aEL = document.querySelector('a')
aEL.setAttribute('href', '#');
console.log(aEL);