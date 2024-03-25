const randomNum = require('./random');

for (let i = 0; i < 10; i++) {
    console.log( randomNum(100, 200) );
}
// output:
// 152
// 190
// 109
// 162
// 164
// 124
// 168
// 194
// 196
// 113

const circle = require('./circle');
console.log(circle.area(50));
// 7853.98...
console.log(circle.circumference(75));
// 471.23...