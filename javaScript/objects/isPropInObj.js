// * Checking if an Object has a Property

const catalog = {
    "ejfvn242": 3.99,
    "efvijn43": 7.99,
    "ecijr564": 12.99
}

// let sku;
// while (sku !== 'quit') {
//     sku = prompt('Enter SKU or "quit" to exit: ');
//   // Use break to immediately exit a while or for loop
//     if (sku === 'quit') break;
//         let price = catalog[sku];
//         console.log(`The price of ${sku} is ${price}`);
// }

// * Notice that if we enter a non-existing SKU (key), we are logging a price of undefined.
// we can’t rely on a value of undefined to check if a property exists because maybe 
// a property legitimately has a value of undefined
// * Instead, we can use the in operator…

let sku = '';
// we have let sku as it is above bc that will take in what the user inputs
while (sku !== 'quit') {
        // we say.. as long as the user doesnt input quit..
    sku = prompt('Enter SKU or "quit" to exit: ');
        // we prompt for the sku... where the input will be taken as the sku.
    if (sku === 'quit') break;
        // we check to see if the input was quit, if it was we use break to immediately exit a while or for loop
        if (sku in catalog) {
        // we check to see if the sku exists in catalog.. if it does..
            let price = catalog[sku];
            console.log(`The price of ${sku} is ${price}`);
    } else {
        // if it does not
        console.log('Invalid SKU - try again');
        // and it restars the while loop once again
    }
}