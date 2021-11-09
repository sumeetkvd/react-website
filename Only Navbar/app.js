
const hamburger = document.querySelector('.hamburger');
const displayOptions = document.querySelector('.btns--header');
hamburger.addEventListener('click', () => {
    if (displayOptions.style.display == 'none')
        displayOptions.style.display = 'block';
    else
        displayOptions.style.display = 'none'
})
setInterval(() => {
    if (getComputedStyle(hamburger).display == 'none') {
        displayOptions.style.display = 'block';
    }
    else {

    }
}, 1000)