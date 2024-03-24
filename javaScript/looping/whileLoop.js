// * While Loop
// while (/* conditional expression */) {
//     // statement block
// }

// ex:

let num = 5;
let i = 0
while (i < num){
    console.log(i);
    // * if we were to stop here the the loop would go on forever. 
    // ! we need an end, something to trigger false
    i += 1
}
// output: 
// 0
// 1
// 2
// 3
// 4