// * Deleting a Property

// * To completely remove a property from an object, we use the delete operator:
const geniuses = {
    Einstein: true,
    'Mr Bean': false,
    Newton: true,
    Snooki: true
};
delete geniuses['Mr Bean'];
console.log(geniuses);
// { Einstein: true, Newton: true, Snooki: true }

// * delete Operator
// Write a line of code to remove one of the items from your catalog object.

const catalog = {
    "ejfvn242": 3.99,
    "efvijn43": 7.99,
    "ecijr564": 12.99
}
delete catalog["ejfvn242"];
console.log(catalog);
// output: { efvijn43: 7.99, ecijr564: 12.99 }