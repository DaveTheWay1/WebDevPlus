// * Iterating Over a Collection of Elements

// * querySelectorAll returns an array-like object called a NodeList

// ? There are 3 approaches we can use to iterate over the elements in a NodeList:
// * A regular for loop: This works, but it’s not as readable or elegant…

// * The NodeList’s forEach method: A good option when you want to iterate 
// through all elements and/or need to access the index of the iteration.

// * A for…of loop: Elegant and allows early exit of the loop 
// with the break statement. However, if we need to access 
// the index of the iteration, we would need to track it manually 
// by initializing a separate variable before the loop and incrementing 
// it within the loop.

// ? Let’s type the following for...of loop in the console to log each element:

for(let commentEl of commentEls) {
    console.log(commentEl);
}

// ? YOU DO: Iterating and Updating Styling
// * Add a for...of loop to main.js that changes the font 
// size all of the <li> comment elements to 30px.
for(let commentEl of commentEls) {
    commentEl.style.fontSize = '30px'
}