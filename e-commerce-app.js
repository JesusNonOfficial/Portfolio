

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

const slider = document.querySelector('.slider');
const navLinks = document.querySelectorAll('.nav-link');
let autoplayInterval;

// Add event listeners to navigation links
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const targetSlide = link.getAttribute('data-slide');
    const scrollPosition = (targetSlide - 1) * slider.offsetWidth;
    slider.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    });
  });
});

slider.addEventListener('scroll', () => {
  const scrollPosition = slider.scrollLeft;
  const currentSlide = Math.round(scrollPosition / slider.offsetWidth) + 1;
  navLinks.forEach((link) => link.classList.remove('active'));
  const activeLink = document.querySelector(`.nav-link[data-slide="${currentSlide}"]`);
  activeLink.classList.add('active');
});

// Function to autoplay the slider
function autoplaySlider() {
  const scrollWidth = slider.scrollWidth;
  const containerWidth = slider.offsetWidth;
  let scrollPosition = 0;

  autoplayInterval = setInterval(() => {
    scrollPosition += containerWidth;
    if (scrollPosition >= scrollWidth) {
      scrollPosition = 0;
    }
    slider.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    });
  }, 5000); // Adjust the autoplay interval (in milliseconds) as desired
}

// Call the autoplay function to start autoplaying the slider
autoplaySlider();

// Restart autoplay when a navigation link is clicked
slider.addEventListener('click', () => {
  clearInterval(autoplayInterval);
  autoplaySlider();
});

// Stop autoplay on mouseenter and start it again on mouseleave
slider.addEventListener('mouseover', () => {
  clearInterval(autoplayInterval);
});

slider.addEventListener('mouseleave', () => {
  autoplaySlider();
});


function ShowBubblyDrinks() {
  var page3 = document.querySelector(".bubbly-drinks-grid");
  page3.classList.toggle("show");
}

// JavaScript variables
const carousel = document.querySelector('.drinks-container');
const slides = Array.from(document.querySelectorAll('.slide'));

let currentIndex = 0;
const slideWidth = slides[0].offsetWidth;

// Function to show the current slide
function showSlide(index) {
  carousel.style.transform = `translateX(-${index * slideWidth}px)`;
}

// Function to handle next slide
function nextSlide() {
  currentIndex++;
  if (currentIndex === slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

// Function to handle previous slide
function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
}

function ShowBubblyDrinks() {
  document.querySelector('.drinks-type-menu').style.transform = 'translateX(100%)';
  document.querySelector('.bubbly-drinks').style.transform = 'translateX(-100%)';
}

function ShowHotDrinks() {
  document.querySelector('.drinks-type-menu').style.transform = 'translateX(-100%)';
  document.querySelector('.hot-drinks').style.transform = 'translateX(-200%)';
}

function ShowDrinksMenu() {
  document.querySelector('.drinks-type-menu').style.transform = 'translateX(0)';
  document.querySelector('.bubbly-drinks').style.transform = 'translateX(-200%)';
  document.querySelector('.hot-drinks').style.transform = 'translateX(-100%)';
}



const AboutUsBox = document.querySelector('.about-us')
const AboutDrinksBox = document.querySelector('.about-drinks')


AboutUsBox.addEventListener("mouseover", function () {
  AboutDrinksBox.classList.add("not-hover");
});

AboutUsBox.addEventListener('mouseout', () => {
  AboutDrinksBox.classList.remove('not-hover');
});

const plane = document.getElementById('paper-plane');
const bell = document.getElementById('bell');
const message = document.getElementById('message');

plane.addEventListener('mouseover', function () {
  plane.classList.add('animated');
});

message.addEventListener('mousenter', function () {
  message.classList.add('animated');
});
bell.addEventListener('mousenter', function () {
  bell.classList.add('animated');
});

plane.addEventListener('mouseleave', function() {
  setTimeout(function() {
    plane.classList.remove('animated');
  }, 1500); 
});
