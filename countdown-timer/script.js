const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const titleElement = document.getElementById('title')

const date = prompt('enter a date in "day month-name year" format')
const title = prompt('enter a title for the date')

const newYears = '1 Jan 2027'

function countdown() {
    const newDate = new Date(date);
    const currentDate = new Date();

    const totalSeconds = (newDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60 ) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysElement.innerHTML = days
    hoursElement.innerHTML = formatTime(hours) 
    minutesElement.innerHTML = formatTime(minutes) 
    secondsElement.innerHTML = formatTime(seconds) 
    titleElement.innerHTML = title
}

function formatTime(time) {
    return time < 10? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);