// * For Loops
// * for loops are commonly used to run a block of code a certain number of times

let array = [1,2,3,4,5,6,7,8,9,10];

for (i = 0; i < array.length; i++){
    console.log(array[i]);
}
// output: 1,2,3,4,5,6,7,8,9,10

for (i = 0; i < 5; i++){
    console.log(i);
}
// output:
// 0
// 1
// 2
// 3
// 4

// * Notice the for loop has three parts after the for keyword:

// * The initializer which runs only once before looping begins. It is used to declare and initialize a looping variable.
// * The condition which will be evaluated before each loop. If truthy, the code block will execute.
// * The last part will execute after each loop and is typically used to increment or decrement the looping variable by one or more units.