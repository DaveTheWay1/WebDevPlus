// * Using DevTools to Explore the DOM

// * option command J (macOS)
// * Click on the Elements tab to browse the HTML hierarchy of the DOM.

// ? Let’s try out the DevTools by clicking on the h1 element 
// and using the Styles panel to add a CSS property of color: red;

// * in styles tab
// element.style {
//     color: red;
// }
// * makes the h1 red

// * after doing sooo... 
// * Look closely after the closing </h1> tag - you see that == $0?
// That tells us that Chrome has created a variable named $0 that 
// represents the <h1> element in the DOM!

// * Click on the Console tab and let’s explore the properties 
// * on the $0 element/object by typing dir($0).
// * You are now able to explore the <h1> element’s DOM object - referred to as a node.

// * typing
// $0.style.backgroundColor = 'yellow' 
// in the console will turn the background of tht h1 as yellow
// * CSS property names in the DOM are lowerCamelCased because hyphens would be interpreted as minus signs.