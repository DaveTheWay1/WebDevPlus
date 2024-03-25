console.log(module);
// node days-of-week in Terminal.
// output:
// {
//     id: '.',
//     path: '/Users/davidramirez/Desktop/adobe-ga-practice/Node/Adobe-GA-Node/intro/Node-Modules',
//     exports: {},
//     filename: '/Users/davidramirez/Desktop/adobe-ga-practice/Node/Adobe-GA-Node/intro/Node-Modules/day-of-week.js',
//     loaded: false,
//     children: [],
//     paths: [
//         '/Users/davidramirez/Desktop/adobe-ga-practice/Node/Adobe-GA-Node/intro/Node-Modules/node_modules',
//         '/Users/davidramirez/Desktop/adobe-ga-practice/Node/Adobe-GA-Node/intro/node_modules',
//         '/Users/davidramirez/Desktop/adobe-ga-practice/Node/Adobe-GA-Node/node_modules',
//         '/Users/davidramirez/Desktop/adobe-ga-practice/Node/node_modules',
//         '/Users/davidramirez/Desktop/adobe-ga-practice/node_modules',
//         '/Users/davidramirez/Desktop/node_modules',
//         '/Users/davidramirez/node_modules',
//         '/Users/node_modules',
//         '/node_modules'
//     ]
// }

// * Each module is uniquely identified by its fully qualified filename 
// (including the folder path). This allows modules to be named the same, 
// as long as they exist in different folders.
// The property on module that we’re really interested in though is exports…

// * module.exports = 'SEI Rocks!';
// * Whatever is assigned to module.exports can be accessed 
// by any number of other modules using the require function we saw earlier.

// * Now in main.js, we can now put the require function to work:

// * though not done in this exmaple: It is convention to name the variable the same as, or similar to, the name of the module being required.

// ? Instead of exporting a string, change days-of-week.js to export the following array instead:
// const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
// // module.exports = weekdays; when the above and below is active this line is not
// module.exports.weekdays = weekdays;
// module.exports.getWeekday = function(dayNo) {
//     if (dayNo < 0 || dayNo > 6) dayNo = 0;
//     return weekdays[dayNo];
// };
// * Another common approach to exporting multiple pieces of functionality like above would be to assign a new object like this:
const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

module.exports = {
    weekdays,
    getWeekday
};

function getWeekday(dayNo) {
    if (dayNo < 0 || dayNo > 6) dayNo = 0;
    return weekdays[dayNo];
}