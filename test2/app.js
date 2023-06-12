// JavaScript variables
const carousel = document.querySelector('.carousel');
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

// Event listeners for next and previous buttons
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);
