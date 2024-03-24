// * Square Bracket Notation - Example

// * Consider an object that represents a catalog of items where:
// Each property in the object represents an item for sale
// The key of each property represents the item’s SKU (Stock Keeping Unit - a retail store’s unique ID for an item)
// The value of the property represents the price of the item

const catalog = {
    "ejfvn242": 3.99,
    "efvijn43": 7.99,
    "ecijr564": 12.99
}

// * Now let’s code a price lookup:
let sku;
// we have let sku as it is above bc that will take in what the user inputs
while (sku !== 'quit') {
    // we say.. as long as the user doesnt input quit..
    sku = prompt('Enter SKU or "quit" to exit: ');
    // we prompt for the sku... where the input will be taken as the sku.
    if (sku === 'quit') break;
    // we check to see if the input was quit, if it was we use break to immediately exit a while or for loop
        let price = catalog[sku];
        // if it was not we set the price to the value of the skull which should be a price as our catalog shows
        console.log(`The price of ${sku} is ${price}`);
        // we console log it. should read to.. for ex.. The price of ejfvn242 is $3.99
}

// ? What kind of string is within the console.log
// tempalte literal