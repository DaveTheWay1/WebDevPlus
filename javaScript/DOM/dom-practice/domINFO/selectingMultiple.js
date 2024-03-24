// * Selecting Multiple Elements
// Like querySelector(), the querySelectorAll(selector) 
// method uses the power of CSS3 selectors to specify which 
// DOM elements we want to select.

// Of course, like the name says, 
// it selects all DOM elements that match the provided selector.

// ? YOU DO: Selecting Multiple Elements

// * Use document.querySelectorAll() to select all <li> 
// elements that are children of the element with an id of 
// comments, assigning them to a variable named commentEls.

const commentsEls = document.querySelectorAll('li');
console.log(commentsEls);