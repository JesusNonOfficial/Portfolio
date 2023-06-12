// Select the carousel container
const carouselContainer = document.querySelector('.carousel-container');

// Initialize variables
let currentIndex = 0;
let isCarouselVisible = false;

// Function to play the carousel
function playCarousel() {
  // Check if the carousel is visible
  if (!isCarouselVisible) return;

  // Increment the current index and update the carousel container's transform
  currentIndex = (currentIndex + 1) % carouselContainer.children.length;
  carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Delay the next iteration using setTimeout
  setTimeout(playCarousel, 3000);
}

// Create an Intersection Observer to track the visibility of the carousel
const carouselObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // Check if the carousel container is intersecting with the viewport
    if (entry.isIntersecting) {
      // Set the flag to indicate the carousel is visible and start playing it
      isCarouselVisible = true;
      playCarousel();
    } else {
      // Set the flag to indicate the carousel is hidden
      isCarouselVisible = false;
    }
  });
});

// Observe the carousel container for visibility changes
carouselObserver.observe(carouselContainer);
