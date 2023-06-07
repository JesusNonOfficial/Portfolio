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
slider.addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
  });
  
  slider.addEventListener('mouseleave', () => {
    autoplaySlider();
  });