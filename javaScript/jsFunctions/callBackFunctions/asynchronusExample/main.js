const lightSequence = [
    {color: 'red', time: 3000},
    {color: 'green', time: 2000},
    {color: 'yellow', time: 1000}
];

// Cache the divs for the lights
const lightEls = document.querySelectorAll('main > div');

// Variable to track the current light
let curLightIdx = 0;  // Start with red object

function renderLight(cb) {
    // First, turn off all lights
    lightEls.forEach(el => el.style.backgroundColor = 'black');
    // Next, turn on the current light
    lightEls[curLightIdx].style.backgroundColor = lightSequence[curLightIdx].color;
    // Invoke the callback when this light's time has expired
    setTimeout(cb, lightSequence[curLightIdx].time);
}

function renderLightSequence() {
    renderLight(renderLightSequence);
    // Increment and reset to zero when 3 is reached
    curLightIdx = ++curLightIdx % 3;
}

  // Make it start!
renderLightSequence();
