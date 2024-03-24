// * What’s an Event Listener?

// * An event listener is a function, more specifically, a callback function, 
// that is called when an event fires.
// Event listeners may also be referred to as event handlers.

// ? How Are Event Listeners Are Added to DOM Elements?
// * The best practice approach to register an event 
// listener is to use the addEventListener() method.

// * syntax
// element.addEventListener(<event-name>, <callback>);
// * event-name 
// is the name of the event (string)
// * callback 
// is the function we want 
// executed when the event happens. When called by the JS engine, 
// it will be passed an event object as an argument.