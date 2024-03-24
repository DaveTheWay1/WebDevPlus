// THIS references the object that is executing the current function

// * if the function is part of an object, this references the object itself
const video = {
    title:'a',
    play(){
        console.log(this);
    }
};
video.play()
// output: { title: 'a', play: [Function: play] }
video.stop = function(){
    console.log(this);
}
video.stop();
// output: { title: 'a', play: [Function: play], stop: [Function (anonymous)] }

// * if it is a regular function, not in a object, this references the global object (window in browsers, global in node)

function playVideo(){
    console.log(this);
}

playVideo();
// output: 
{/* <ref *1> Object [global] { */}
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Function: structuredClone],
//   atob: [Getter/Setter],
//   btoa: [Getter/Setter],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   crypto: [Getter]
// }

// ? what if it is a constructor function?

function Video(title){
    this.title = title;
    console.log(this);
}
const v = new Video('b');
// output: Video { title: 'b' } // references a new empty object{}

const video = {
    title: '',
    tags: ['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(tag)
        })
    }
}
video.showTags();
// output:
// a
// b
// c

// ? what if we wanted the titles too?
const video = {
    title: '',
    tags: ['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){
            // console.log(this.title, tag) // this will fail and put undefined instead
            console.log(this, tag)
        })
    }
}
video.showTags();
// output:
// undefined a
// undefined b
// undefined c
// ? why?? 
// * if we remove the .title and console.log the this it references the window object or the gloabl
// ? but why?? arent we inside the video object?? shouldnt it reference the video?? 
// * NOOO, and that is because we are inside the callback function which is just a regular function
// * WHICH regular functions just log the global or windows depending if youre on browser or node
// the only method we have that actually belongs to the video object is showtags and NOT the call back function
// its the global object that is execusting the anonymous call back function

// ? how can we solve the above issue
const video = {
    title: 'a',
    tags: ['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title, tag)
        }, this)
    }
}
video.showTags();
// * the for each has another parameter called thisArg? sooo..we can do it like this above with allows
// * us to include this as an arg and then that this can properly be plugged in to get the title in there 
// * and work as we desire

// output:
// a a
// a b
// a c