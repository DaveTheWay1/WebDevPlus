// * Syntax
sort()
sort(compareFn);

function compareNumbers(a, b) {
    return a - b;
}

const stringArray = ["Blue", "Humpback", "Beluga"];
stringArray.join(); 
// 'Blue,Humpback,Beluga'
stringArray.sort();
// ['Beluga', 'Blue', 'Humpback']

const numberArray = [40, 1, 5, 200];
numberArray.join(); 
// '40,1,5,200'
numberArray.sort(); 
// [1, 200, 40, 5]
numberArray.sort(compareNumbers); 
// [1, 5, 40, 200]

const numericStringArray = ["80", "9", "700"];
numericStringArray.join(); 
// '80,9,700'
numericStringArray.sort(); 
// ['700', '80', '9']
numericStringArray.sort(compareNumbers); 
// ['9', '80', '700']

const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];
mixedNumericArray.join(); 
// '80,9,700,40,1,5,200'
mixedNumericArray.sort(); 
// [1, 200, 40, 5, '700', '80', '9']
mixedNumericArray.sort(compareNumbers); 
// [1, 5, '9', 40, '80', 200, '700']