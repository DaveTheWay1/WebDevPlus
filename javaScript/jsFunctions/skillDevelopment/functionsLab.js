// 1.
function maxOfTwoNumbers(x, y) {
    if (x === y){
        return x;
    }
    else if (x >= y) {
        return x;
    } else {
        return y;
    }
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
}

console.log(maxOfTwoNumbers(3, 9));
console.log(maxOfTwoNumbers(9,9));

const maxOfThree = function(x,y,z){
    if (x === y && y === z){
        return x;
    }
    else if (x > y && x > z){
        return x
    } else if (y > x && y > z){
        return y
    }
    else{
        return z
    }
}

console.log(maxOfThree(3,3,3));
console.log(maxOfThree(3,1,2));
console.log(maxOfThree(1,2,0));
console.log(maxOfThree(0,0,1));

const vowel = ['a','e','i','o','u']
function isCharAVowel(a){
    for(i = 0; i < vowel.length; i++){
        if(a === vowel[i]){
            return true
        }
    }
    return false;
    // it goes here bc it means it went through the whole thing and it did not match
    // if we had placed it within, it would return false immediately without testing the others
}
console.log(isCharAVowel('e'));
console.log(isCharAVowel('a'));
console.log(isCharAVowel('b'));

const sumArray = function(arr){
    let total = 0;
    arr.forEach(function(i){
        total += i;
    })
    return total;
}
console.log(sumArray([1,1,1]));
console.log(sumArray([1,1,5]));

function multiplyArray(arr){
    let product = 1;
    arr.forEach(function(num){
        product *= num;
    })
    return product;
}
console.log(multiplyArray([1,1,1]));

const numArgs = function(...args){
    return args.length;
};
console.log(numArgs(1,2,3,4,5))
// output: 5


function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// this couldve also been done but it felt like cheating
// console.log(reverseString('rockstar'));

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverseString('rockstar'));

// const longestStringInArray = function(arr){
//     let longest = ''
//     arr.forEach(function(string){
//         // console.log(string);
//         if(longest.length < string.length){
//             console.log(`current longest: ${longest.length} , sting length: ${string.length}`);
//             longest = string;
//         }
//     })
//     return longest;
// }
// console.log(longestStringInArray(['i','hello','hmmmm']));
// * intereating find.. the for each is opinionated.

const longestStringInArray = function(arr){
    let longest = ''
    for (let i = 0; i < arr.length; i++) {
        const string = arr[i];
        if(longest.length < string.length){
            console.log(`current longest: ${longest.length} , sting length: ${string.length}`);
            longest = string;
        }
    }
    return longest;
}

console.log(longestStringInArray(['i','hello','hmmmm']));