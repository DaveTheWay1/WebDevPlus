// * Default Parameters
// Now, using default parameters, we can do this:

function setColor(bicycle, color = 'purple') {
    bicycle.color = color;
    console.log(bicycle, color)
    
}
setColor('rickyBike', 'blue');
// Any expression can be provided as a default, including objects, etc.
// output: rickyBike blue
setColor('rickyBike');
// output: rickyBike purple