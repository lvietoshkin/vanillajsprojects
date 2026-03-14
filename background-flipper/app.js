// Import the data (arrays)
import {colors, svgs} from './data.js'

// Set The Variables
const btn = document.getElementById('btn');
const currentColor = document.querySelector('.color');

/* THE LOGIC */
//Backgrounds
btn.addEventListener('click', () => {
    // get a random number between 0 and (colors.length - 1)
    const randomNumber = getRandomInteger(colors.length)
    
    document.body.style.background = colors[randomNumber]; 
    currentColor.textContent = colors[randomNumber] 
})

// Svgs
const shapeBtn = document.getElementById("shapeBtn");
const svgLayer = document.getElementById("svg-layer");

shapeBtn.addEventListener("click", () => {

  const randomNumber = getRandomInteger(svgs.length);

  const wrapper = document.createElement("div");
  wrapper.innerHTML = svgs[randomNumber];

  const svg = wrapper.firstElementChild;

  svg.style.left = Math.random() * 90 + "vw";
  svg.style.top = Math.random() * 90 + "vh";

  svgLayer.appendChild(svg);

   // Waiting a tiny bit before adding the fade-shrink class to trigger transition
  setTimeout(() => {
    svg.classList.add("fade-shrink");
  }, 50);

  // Removing the element after the animation is complete (5s)
  setTimeout(() => {
    svgLayer.removeChild(svg);
  }, 5050);

});


// Function(s)
function getRandomInteger(length) {
    return Math.floor(Math.random() * length);
}




