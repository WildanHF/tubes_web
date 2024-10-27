let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.card');
  const totalSlides = slides.length;
  const container = document.querySelector('.card-container');

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  const offset = -currentSlide * 100 / totalSlides;
  container.style.transform = `translateX(${offset}%)`;
}
