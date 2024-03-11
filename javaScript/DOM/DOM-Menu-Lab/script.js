// Menu data structure (Task 5.0)
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
        {text: 'all', href: '/catalog/all'},
        {text: 'top selling', href: '/catalog/top'},
        {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
        {text: 'new', href: '/orders/new'},
        {text: 'pending', href: '/orders/pending'},
        {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
        {text: 'profile', href: '/account/profile'},
        {text: 'sign out', href: '/account/signout'},
    ]},
];

const mainEl = document.querySelector('main');

mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
mainEl.classList.add('flex-ctr');

const topMenuEl = document.getElementById('top-menu');

topMenuEl.style.height = '100%'
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

menuLinks.forEach(function(link) {
    const linkEl = document.createElement('a');
    linkEl.setAttribute('href', link.href);
    linkEl.textContent = link.text;
    topMenuEl.appendChild(linkEl);
});

const subMenuEl = document.getElementById('sub-menu');

subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');

subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';


const topMenuLinks = document.querySelectorAll('#top-menu a');
let showingSubMenu = false;

topMenuEl.addEventListener('click', function(evt) {
    evt.preventDefault();
    const link = evt.target;
    if (link.tagName !== 'A') return;
    console.log(link.textContent);
    if (link.classList.contains('active')) {
        link.classList.remove('active');
        showingSubMenu = false;
        subMenuEl.style.top = '0';
        return;
    }
    topMenuLinks.forEach(function(link) {
        link.classList.remove('active');
    });
    link.classList.add('active');
    const linkData = menuLinks.find(function(linkObj) {
        return linkObj.text === link.textContent;
    });
    showingSubMenu = 'subLinks' in linkData;
    if (showingSubMenu) {
        buildSubMenu(linkData.subLinks);
        subMenuEl.style.top = '100%';
    } else {
        subMenuEl.style.top = '0';
        mainEl.innerHTML = '<h1>about</h1>';
    }
});

function buildSubMenu(subLinks) {
    subMenuEl.innerHTML = '';
    subLinks.forEach(function(link) {
        const linkEl = document.createElement('a');
        linkEl.setAttribute('href', link.href);
        linkEl.textContent = link.text;
        subMenuEl.appendChild(linkEl);
    });
}

subMenuEl.addEventListener('click', function(evt) {
    evt.preventDefault();
    const link = evt.target;
    if (link.tagName !== 'A') return;
    console.log(link.textContent);
    // Task 6.1
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    // Task 6.2
    topMenuLinks.forEach(function(link) {
        link.classList.remove('active');
    });
    mainEl.innerHTML = `<h1>${link.textContent}</h1>`;
});

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