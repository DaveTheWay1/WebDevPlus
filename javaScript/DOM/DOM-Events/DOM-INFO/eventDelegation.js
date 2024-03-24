// * Event Delegation
// ? What is Event Delegation
// * it prevents the case in which many elements would require the creation of many
// event listeners for each.

// * Event delegation allows us to attach an event 
// listener to a single DOM element that can respond 
// to events triggered by any of its descendant 
// DOM elements. Much more efficient!

ulEl.addEventListener('click', handleClick);

// Naming the function handleXxxxx is a great practice
// function handleClick(evt) {
//     console.log(evt.target);
// }
// Important: The event object’s target property will 
// be set to the actual element that was clicked!

// * Not only is event delegation more efficient, by it’s very 
// design, it’s dynamic - as descendants are added, they too will be listened to!

// * Write the code to change the color of the text of a clicked comment to a color of your choosing.
function handleClick(evt){ 
    evt.target.style.color = 'maroon';
}