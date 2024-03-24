const titleEl = document.getElementById('title');
console.log(titleEl);

console.dir(titleEl);
// to explore the element’s JS object representation

const pEl = document.querySelector('.cool')
console.log(pEl);

// pEl.innerHTML = 'Comments for <strong>Today</strong>';
// * ^ will display as it is intended to. today bolded
// pEl.innerText = 'Comments for <strong>Today</strong>';
// * ^ will literally display as it

// This is how we can center the text in the <h1> 
// by setting the text-align CSS property on the style object:
titleEl.style.textAlign = 'center';

// Change the color of the <p> element to a color of your choosing.
pEl.style.color = 'maroon';

const aEL = document.querySelector('a')
aEL.setAttribute('href', '#');
console.log(aEL);

// * Use document.querySelectorAll() to select all <li> elements 
// that are children of the element with an id of comments, 
// assigning them to a variable named commentEls.
const commentEls = document.querySelectorAll('li');
console.log(commentEls);

// * Add a for...of loop to main.js that changes the font 
// size all of the <li> comment elements to 30px.
for(let commentEl of commentEls) {
    commentEl.style.fontSize = '30px'
}

// (1) What method is the most efficient for selecting an element that has an id?
// getElementById
// (2) If we want to assign content to an element that includes HTML, what property on the DOM element would we assign to?
// innerHTML
// (3) If we want to assign plain text (no embedded HTML), what property on the DOM element would we assign to?
// innerText (or textContent)
// (4) Which property on a DOM element is used to set the CSS styling for that element?
// style