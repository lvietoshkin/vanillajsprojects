// import data
import {reviews, backgrounds} from './data.js'

// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');


// set starting item 
let currentItem = 0;

// show inital item after the page has been loaded
window.addEventListener('DOMContentLoaded', () => {
  showPerson(currentItem);
  setBackground(backgrounds, currentItem)
})

// show next person
nextBtn.addEventListener('click', () => {
  currentItem++;
  if (currentItem > reviews.length -1) {
    currentItem = 0;
  }
  showPerson(currentItem);
  setBackground(backgrounds, currentItem)
})

// show previous person
prevBtn.addEventListener('click', () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length -1;
  }
  showPerson(currentItem);
  setBackground(backgrounds, currentItem)
})

// show random person
randomBtn.addEventListener('click', () => {
  currentItem = getRandomInteger(reviews.length)
  showPerson(currentItem)
  setBackground(backgrounds, currentItem)
})



// functions 

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

function getRandomInteger(length) {
    return Math.floor(Math.random() * length);
}

function setBackground(array, item) {
  document.body.style.backgroundImage = `url('${array[item].img}')`;
}