var events = require('events');

// just like there is custom modules
// node js also has built in modules of its own
// an example is the event module. we call it 
// like we did in line 1.

// one of the things returned from the events module
// * is the events emitter
// can be used to created custom events and react
// to those events

// * Ex: 
var myEmitter = new events.EventEmitter();
// due to the line above we now have our own 
// EventEmitter stored in myEmitter

myEmitter.on('someEvent', function(message){
    console.log(message);
});

myEmitter.emit('someEvent', 'the event was emitted');
//              event       arg
// output: the event was emitted

// we created our own custom event.
// instead of it being an event like onclick
// we have our custom event called someEvent

var util = require('util');
// allows us to inherit certain things from object built into node js
// or other objects

var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);
// what we want to inherit something      what gets inherited
// the line above is making it so that every Person that is created
// inherits, or in other words also obtain, the event.EventEmitter

var gisselle = new Person('gisselle');
var david = new Person('david');
var cazador = new Person('cazador');

var people = [gisselle, david, cazador];

people.forEach(function(person){
    person.on('speak', function(message){
        // be of line 38 we are able to do line 50. and therefore can have a custom event like speak
        console.log(`${person.name} said ${message}`);
    });
});

cazador.emit('speak', 'hey dudes');
// output: cazador said hey dudes

// cazador is the created person
// emit is like announcing the calling
// speak is the event we are calling 
// hey dudes is the arg we pass to the speak event