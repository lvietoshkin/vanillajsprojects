// Import the data 
import {redGradients, greenGradients} from './data.js'

// set the counter variable
let count = 0
let fontSize = 10

// select the value and buttons
const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn')

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const classList = event.currentTarget.classList;
        // increase the count and font size
        if (classList.contains('decrease')) {
            count--;
            fontSize -= 0.05;
            value.style.fontSize = fontSize + "rem"
        } else if (classList.contains('increase')) {
            count++;
            fontSize += 0.05;
            value.style.fontSize = fontSize + "rem"
        } else if (classList.contains('reset')) {
            count = 0;
            fontSize = 10;
            value.style.fontSize = fontSize + "rem"
        }
        value.textContent = count;
        value.style.color = setColor(count)

        // Set the background
        if (count > 0) {
           const randomNumber = getRandomInteger(greenGradients.length)
        document.body.style.background = greenGradients[randomNumber];  
        } else if (count < 0) {
            const randomNumber = getRandomInteger(redGradients.length)
        document.body.style.background = redGradients[randomNumber]; 
        } else {document.body.style.background = '#f1f5f8';}
    })
})




// Function(s)
function getRandomInteger(length) {
    return Math.floor(Math.random() * length);
}

function setColor(counter) {
    if (counter > 0) {
        return 'green'
    } else if (counter < 0) {
        return 'red'
    } else if (counter === 0) {
        return '#102a42'
    }
}


