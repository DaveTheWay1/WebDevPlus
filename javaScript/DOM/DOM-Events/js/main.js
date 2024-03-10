// * Listen to the click Event on the <button>
// * using an anonymous callback function
const btn = document.querySelector('button');
btn.addEventListener('click', function(evt) {
  // testing!
    console.log(evt);  
});

// * remembering that we use the value property to get/set the text of 
// an <input> element is worthwhile.

// Cached elements
const inputEl = document.querySelector('input');

// Remember the <ul> too!
const ulEl = document.querySelector('ul');

btn.addEventListener('click', function(evt) {
  console.log(evt);
  console.log(evt.target);
  //<button>Add Comment</button>
    const newCommentEl = document.createElement('li');
    const commentText = inputEl.value;
  // Set newComment's text
    newCommentEl.innerText = commentText;
    // Add the new li as the ul's last child
    ulEl.append(newCommentEl);
    // * Clearing the Text in the <input>
    // commentText = '';
    // * the above doesnt work bc it stored the value and not the value itself. it STORED the value
    inputEl.value = ''
    // * ^ the above works
});

ulEl.addEventListener('click', handleClick);

// Naming the function handleXxxxx is a great practice
// function handleClick(evt) {
//     console.log(evt.target);
// }

function handleClick(evt){ 
    evt.target.style.color = 'maroon';
}