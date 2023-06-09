const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', (event) => {
    event.stopPropagation();
    wrapper.classList.toggle('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

document.addEventListener('click', (event) => {
    const isClickedInsideWrapper = wrapper.contains(event.target);
    if (!isClickedInsideWrapper && wrapper.classList.contains('active-popup')) {
        wrapper.classList.remove('active-popup');
        wrapper.classList.add('scale-down');
    }
});



// ----------- DROPDOWN MENU ---------------- //

const svg = document.getElementById('menu-icon');
const nav = document.querySelector('.dropdown-nav');

let isRotated = false;

svg.addEventListener('click', function (event) {
    wrapper.classList.remove('active-popup');
    event.stopPropagation();
    if (!isRotated) {
        svg.style.transform = 'rotate(45deg)';
        nav.classList.add('active');
    } else {
        svg.style.transform = 'none';
        nav.classList.remove('active');
    }
    isRotated = !isRotated;
});

document.addEventListener('click', function () {

    if (isRotated) {
        svg.style.transform = 'none';
        nav.classList.remove('active');
        isRotated = false;
    }
});


// ----------- BOUTON BIENVENUE-------------- //


const button1 = document.getElementById("welcome-btn-inv")
const button2 = document.getElementById("welcome-btn");

button1.addEventListener("mouseover", function () {
    button2.classList.toggle("welcome-btn--active");
});

button1.addEventListener('mouseout', () => {
    button2.classList.remove('welcome-btn--active');
});




// ----------- SCROLL ANIMATIONS-------------- //

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('translateX-show');
            entry.target.classList.add('translateY-show');
            entry.target.classList.add('scale-show');
        }
        else {
            entry.target.classList.remove('translateX-show');
            entry.target.classList.remove('translateY-show');
            entry.target.classList.remove('scale-show');
        }
    });
});

const translateXhiddenElements = document.querySelectorAll('.translateX-hidden');
const translateYhiddenElements = document.querySelectorAll('.translateY-hidden');
const scalehiddenElements = document.querySelectorAll('.scale-hidden');
translateXhiddenElements.forEach((el) => observer.observe(el));
translateYhiddenElements.forEach((el) => observer.observe(el));
scalehiddenElements.forEach((el) => observer.observe(el));



// CAROUSSEL 


var slidesContainer = document.querySelector('.slides');
var rightArrow = document.querySelector('.right-arrow');
var leftArrow = document.querySelector('.left-arrow');

rightArrow.addEventListener('click', function () {
    slidesContainer.scrollBy({ left: 600, behavior: 'smooth' }); // Adjust the scrollBy value as per your slide width
});

leftArrow.addEventListener('click', function () {
    slidesContainer.scrollBy({ left: -600, behavior: 'smooth' }); // Adjust the scrollBy value as per your slide width
});

