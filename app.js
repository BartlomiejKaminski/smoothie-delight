window.onload=function(){

const slider = document.querySelector('.slider');
const sliderImages = document.getElementsByClassName('sliderImage');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = sliderImages[0].clientWidth;

slider.style.transform = 'translateX(' + (-(size) * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    if(counter >= sliderImages.length - 1) return;
    slider.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    slider.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

slider.addEventListener('transitionend', () => {
    n = counter
    if(sliderImages[n].id === 'lastClone'){
        slider.style.transition = 'none'; 
        counter = sliderImages.length -2;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(sliderImages[n].id === 'firstClone'){
        slider.style.transition = 'none'; 
        counter = sliderImages.length - n;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})

slider.style.width = sliderImages[counter].offsetWidth + 'px'


const joinButton = document.getElementById('joinNewsletter');
const input = document.querySelector('.newsletter-input');


let usersList = []
let atPosition = input.value.indexOf('@');
let dotPosition = input.value.indexOf('.');

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

joinButton.addEventListener('click', () => {
    if (validateEmail(input.value) && !(usersList.includes(input.value))){
        usersList.push(input.value)
        alert('Congratulations you have signed up for our newsletter!')
    } else if(validateEmail(input.value) && usersList.includes(input.value)){
        alert('You are already signed up!')
    } else if(!validateEmail(input.value)){
        alert('This email is incorrect.')
    }
    input.value = '';
})


}