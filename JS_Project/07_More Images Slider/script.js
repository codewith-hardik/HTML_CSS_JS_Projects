const slidesContainer = document.getElementById('slides-container');

// Dynamically add 50 slides
const totalSlides = 45;
for (let i = 1; i <= totalSlides; i++) {
  const slide = document.createElement('div');
  slide.classList.add('slide');

  // Set image source dynamically (e.g., "image1.jpg", "image2.jpg", ...)
  const img = document.createElement('img');
  img.src = `images/image${i}.jpg`; // Ensure your images are named accordingly and in the "images" folder
  img.alt = `Image ${i}`;

  slide.appendChild(img);
  slidesContainer.appendChild(slide);
}

let currentIndex = 0;

function moveSlide(direction) {
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Optional: Auto-play functionality
setInterval(() => moveSlide(1), 3000);
