// * Selecting a Single Element Using a CSS Selector

// * The querySelector(selector) method
// is the go to method for selecting a single element that doesn’t have an id.

// The selector argument is a string that follows the rules of regular CSS3 selectors.
// Yes, we can select DOM elements using CSS3 selectors just like do to target elements for styling!

// ? What selector would be used to select a <section> element with a class of main?
// section.main

// !sIf the CSS selector provided to querySelector() matches multiple elements, 
// it returns the “first” matching element, however, it’s best to avoid this 
// scenario by using a more specific selector.

// * If no matching DOM element is found, querySelector() will return null.

// ? YOU DO: Practice
// * In index.html, add a <p> tag below the <h1> and give it a class of cool, then…
{/* <p class="cool"></p> */}
// * Add some content inside of the <p> tag - try typing lorem [tab] to emit (using emmet) random lorem ipsum text.
{/* <p class="cool">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, soluta dignissimos. Ullam nobis, est eveniet veniam consectetur, non quod asperiores excepturi totam velit vel nam sint, nisi quis adipisci harum?</p> */}
// * Use document.querySelector() to select the <p> element with a class of cool and assign it to a variable named pEl.
// const pEl = document.querySelector('.cool')
// * Verify that the <p> element was selected by logging out pEl.
// console.log(pEl);