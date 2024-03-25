    const daysOfWeek = require('./day-of-week');

    const day = daysOfWeek.getWeekday(5);
    console.log(day);
    
    // ** what if we had done the below
    // const dayOfWeek = require('./day-of-week')[1];
    // console.log(dayOfWeek);
    // output: Mo

    // * another exmaple of accessing a custom module but an array rather than a module
    // const array = require('./day-of-week');
    // console.log(array);
    // output: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

    // the below is an example of accessing our custom module. 
    // every customer module must start with either ./ or ../
    // * const dayOfWeek = require('./day-of-week');
    // When we require our app’s own modules, we need to always 
    // provide a relative path, i.e., starting with either a . or ..
    // * console.log(dayOfWeek);  
    // -> SEI Rocks!

    // * An example of a built into Node module are the http and fs modules
    const fs = require('fs');
    // A module is “loaded” into a Node app using Node’s require function

    fs.writeFile('./hello.txt', 'Hello!', function() {
        console.log('done creating file');
    });
    // after being in the folder in terminal
    // and running node main.js:
    //the file hello.txt was created with Hello! written on it
