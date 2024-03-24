// * Selecting DOM Elements
// * Developers make web pages dynamic by manipulating the DOM using JavaScript.

// * For example, in a To-Do app, a user typically would:
// Type the text of the new to-do into an <input>
// Click an [Add Todo] <button></button>

// The developer certainly would have coded a JavaScript function 
// that would run in response to the button being clicked.

// * That function would then perform the following:
// Create a new element, e.g., an <li>
// Access the text entered into the <input> element
// Set the content of the <li> to that text
// Append the new element to the appropriate parent element, e.g., a <ul>
// Finally, for a better user experience (UX), “reset” the input by clearing out the current text
// Several of the above steps requires the JS to access existing elements. Let’s see how we can select those DOM elements…