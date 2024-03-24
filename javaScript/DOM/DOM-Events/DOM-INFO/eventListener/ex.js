// * EVENT LISTENER EXAMPLE

// * with the below in our html
{/* <h3>Comments</h3>
<ul>
    <li>SEI Rocks!</li>
</ul>
<input>
<button>Add Comment</button> */}

// * Listen to the click Event on the <button>
// * using an anonymous callback function

// Select the button
const btn = document.querySelector('button');
btn.addEventListener('click', function(evt) {
  // testing!
    console.log(evt);  
});
// If all goes well, clicking the button should log out the event object.

// ? What's the name of the method used to attach event listeners to elements?
// addEventListener()
// ? ❓ Name three events that might be triggered in the browser.
// click, submit, change, mousemove, etc.

// If all goes well, clicking the button should log out the event object.

// * The Event Object

// * Examining the event object that 
// was provided as an argument to our event 
// istener reveals lots of useful information about the event!

// * Of special interest are:
// * Several ...X and ...Y properties 
// that provide where the click occurred.

// * The target property, which holds a 
// reference to the DOM element that triggered (dispatched) the event.
// * The target property will certainly be the one to 
// remember as it will be used very often moving forward.