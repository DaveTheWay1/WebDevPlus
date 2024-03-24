// * some of the methods we can instantly use through the global object

console.log('Hey ninjas');

setTimeout(function(){
    console.log('from setTimeout function: 3 seconds have passed');
}, 3000)

var time = 0; 
setInterval(function(){
    time += 2;
    console.log(time + ' seconds have passed');
}, 2000)

// setTimeout VS setInterval
// setTimeout is used to execute a function once after a specified delay, 
// while setInterval is used to repeatedly execute a function with a 
// fixed time delay between each execution.

var time = 0; 

var timer = setInterval(function(){
    time += 2;
    console.log(time + ' seconds have passed');
    if (time > 5){
        clearInterval(timer);
    }
}, 2000)
// output:
// 2 seconds have passed
// 4 seconds have passed
// 6 seconds have passed

// as you can see the global object, provided by node, allows us to instantly use some of its methods
// at the obove we practiced console.log() setTimeout(), setInterval(), and clearInterval()

console.log(__dirname);
// output:
// /Users/davidramirez/Desktop/adobe-ga-practice/Node/netNinjaPreview/Global-Object

console.log(__filename);
// output:
// /Users/davidramirez/Desktop/adobe-ga-practice/Node/netNinjaPreview/Global-Object/app.js