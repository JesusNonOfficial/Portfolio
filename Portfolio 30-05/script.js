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




// ----------- page 3-------------- //
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



// CAROUSSEL 

// Get the slides container element
var slidesContainer = document.querySelector('.slides');

// Get the right and left arrow elements
var rightArrow = document.querySelector('.right-arrow');
var leftArrow = document.querySelector('.left-arrow');

// Scroll to the right when right arrow is clicked
rightArrow.addEventListener('click', function() {
  slidesContainer.scrollBy({ left: 600, behavior: 'smooth' }); // Adjust the scrollBy value as per your slide width
});

// Scroll to the left when left arrow is clicked
leftArrow.addEventListener('click', function() {
  slidesContainer.scrollBy({ left: -600, behavior: 'smooth' }); // Adjust the scrollBy value as per your slide width
});
