// * When we click the [Add Comment] button, 
// * we’ll need our event listener function to do something

// * in the example we are practicing on
// Create a new <li> element
// Set the <li> element’s innerText to that of the text entered in the <input>
// Append the <li> to its parent, the <ul>
// Finally, clear the text from the <input>

// * Creating a New <li> Element ex:
btn.addEventListener('click', function(evt) {
    // Create a new <li> element
    const newCommentEl = document.createElement('li');
    console.log(newCommentEl)
});
// Note: At this point, the element is 
// “in memory” only and is not part of the DOM (yet).

// * Getting/Setting the Text of an <input>
// We’ll need to access the text the user has typed into the <input> element in 
// order to set the innerText of newCommentEl.

// * Since <input> elements are empty elements, i.e., elements with no content, 
// innerText and innerHTML properties do not exist.

// * Instead, 
// we get and set the text within an <input> using the value property.

// * input must be reference outside the even listener function
// Because this app needs to access the <input> every time the <button> is 
// clicked, it would be more efficient to cache (a developer term for ‘remember’ 
// or ‘store’) the <input> outside of the event handler function so 
// that it isn’t selected over and over:

// ? why?
// Querying the DOM (Document Object Model) can be a relatively expensive operation 
// in terms of performance, especially when done repeatedly. When you use document.querySelector('input') 
// inside an event handler function that is triggered frequently, such as a click event,
//  the browser has to search the entire DOM tree to find the <input> element each 
//  time the event occurs. This can lead to unnecessary performance overhead, especially 
//  if the DOM is large or complex.

// By caching the <input> element in a variable outside of the event handler, 
// you essentially store a reference to the element. This means that the 
// browser doesn't need to search the DOM tree every time the event handler 
// is called; instead, it can directly access the element through the variable. 
// . This can result in faster and more efficient code execution, particularly 
// in scenarios where the same element needs to be accessed multiple times.

// Cached elements
const inputEl = document.querySelector('input');

btn.addEventListener('click', function(evt) {
    const newCommentEl = document.createElement('li');
  // Access the input's text
    const commentText = inputEl.value;
    console.log(commentText)
});
// * remembering that we use the value property to get/set the text of 
// an <input> element is worthwhile.

// * Setting the Content of the <li>

btn.addEventListener('click', function(evt) {
    const newCommentEl = document.createElement('li');
    const commentText = inputEl.value;
  // Set newComment's text
    newCommentEl.innerText = commentText;
});

// * Adding the <li> to the DOM
// ? Which element do we we want to add the <li> to?
// The <ul>
const ulEl = document.querySelector('ul');

btn.addEventListener('click', function(evt) {
    const newCommentEl = document.createElement('li');
    const commentText = inputEl.value;
    newCommentEl.innerText = commentText;
  // Add the new li as the ul's last child
    ulEl.append(newCommentEl);
    // commentText = '';
    // * Clearing the Text in the <input>
    // * the above doesnt work bc it stored the value and not the value itself. it STORED the value
    inputEl.value = ''
});
