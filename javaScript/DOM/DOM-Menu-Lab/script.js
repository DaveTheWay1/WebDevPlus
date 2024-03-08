const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
];
const mainEl = document.querySelector('main');

// Set the background color of mainEl using the CSS var() function
mainEl.style.backgroundColor = 'var(--main-bg)';

// * NOTES ON WHY VAR AND WHY IT WORKED
// In your CSS, you've defined --main-bg to be #4a4e4d.
// In your JavaScript, when you set mainEl.style.backgroundColor to 
// 'var(--main-bg)', the browser understands this as a request to 
// use the value of --main-bg (which is #4a4e4d) as the background color for mainEl.
// As a result, the background color of mainEl is set to #4a4e4d.

// var() function can be used with any custom property you define in CSS. 
// It allows you to define a value in one place 
// * (usually in a :root or other selector) and then use 
// that value throughout your CSS code by referencing the custom 
// property with var(). This can be useful for defining colors, 
// sizes, margins, and other properties that you want to reuse across your stylesheets.

// * :root is the norm for custom styling

mainEl.innerHTML = '<h1>SEI Rocks! </h1>'
mainEl.classList.add('flex-ctr');

const topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

for(let menuLink of menuLinks){
    let link = document.createElement('a');
    link.setAttribute('href',menuLink.href);
    link.innerText = menuLink.text;
    topMenuEl.appendChild(link);
}