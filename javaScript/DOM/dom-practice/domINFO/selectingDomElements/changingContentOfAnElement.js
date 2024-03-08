// * Changing the Content of an Element

// Now that we’re able to select an element of our choosing, 
// ? let’s see how we can change the content of that element…

// Inspecting the properties of a DOM element in the console 
// reveals a couple of properties that we can use to read and set its content:

// * innerHTML 
// - Used to retrieve/set content as an HTML string
cool.innerText = 'Comments for <strong>Today</strong>';
// The element's content will be: "Comments for <strong>Today</strong>"
// * on browser it will display like in the above
// * innerText
// - Used to retrieve/set content as plain text
cool.innerHTML = 'Comments for <strong>Today</strong>';
// The element's content will be: "Comments for Today" (with "Today" in bold)
// * on browser it will display like the above

// * a good way to think about it! Use innerText when you want to 
// * set or get the text content of an element as a plain string, 
// * and use innerHTML when you want to set or get the content as HTML, 
// * allowing you to apply formatting or include elements like <strong> for bold text.

// * The power of innerHTML may not be obvious at first, however, 
// the string being assigned can be as complex as you want - 
// containing multiple elements with attributes, etc.

// * textContent
// is another property.
// very similar to innerText - the primary difference between 
// the two is that textContent returns all text content 
// regardless of styling, whereas, innerText takes styling into consideration. 
// For example, innerText will not return text that has been hidden using CSS.