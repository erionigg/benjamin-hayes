// Smooth scrolling for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


//navbar
let lastScrollY = 0; // Tracks the last scroll position
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    // Scrolling down -> hide navbar
    navbar.classList.add('hidden');
  } else if (currentScrollY < lastScrollY) {
    // Scrolling up -> show navbar
    navbar.classList.remove('hidden');
  }

  lastScrollY = currentScrollY; // Update last scroll position
});





//blog 

const slides = document.querySelectorAll('.slider'); // Select individual slides
let currentIndex = 0;
let slideInterval;

function startSlider() {
    slideInterval = setInterval(() => {
        // Reset all slides' transform to ensure smooth transition
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
        });

        // Update index to show the next slide
        currentIndex = (currentIndex + 1) % slides.length;
    }, 2000); // Change every 2 seconds
}

function stopSlider() {
    clearInterval(slideInterval); // Stop the interval
}

// Attach mouseenter and mouseleave events to each slide
slides.forEach(slide => {
    slide.addEventListener('mouseenter', stopSlider); // Stop slider on hover
    slide.addEventListener('mouseleave', startSlider); // Restart slider when mouse leaves
});

// Initialize slider
startSlider();
