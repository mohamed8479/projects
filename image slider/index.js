const slides = document.querySelectorAll(".sliders img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("slidedisplay");
    intervalId = setInterval(nextSlide, 5000);
  }
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.classList.remove("slidedisplay");
  });
  slides[slideIndex].classList.add("slidedisplay");
}

function prev() {
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
}

function suiv() {
  slideIndex++;
  showSlide(slideIndex);
}
