const carouselContainer = document.querySelector('.vip-carousel .carousel-container');
let isMoving = false;

function nextSlide() {
  if (isMoving) return;
  isMoving = true;

  carouselContainer.style.transition = 'transform 0.5s ease';
  carouselContainer.style.transform = 'translateX(-100%)';

  carouselContainer.addEventListener('transitionend', () => {
    carouselContainer.style.transition = 'none';
    carouselContainer.appendChild(carouselContainer.firstElementChild);
    carouselContainer.style.transform = 'translateX(0)';
    isMoving = false;
  }, { once: true });
}

function prevSlide() {
  if (isMoving) return;
  isMoving = true;

  carouselContainer.style.transition = 'none';
  carouselContainer.insertBefore(
    carouselContainer.lastElementChild,
    carouselContainer.firstElementChild
  );
  carouselContainer.style.transform = 'translateX(-100%)';

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      carouselContainer.style.transition = 'transform 0.5s ease';
      carouselContainer.style.transform = 'translateX(0)';
    });
  });

  carouselContainer.addEventListener('transitionend', () => {
    isMoving = false;
  }, { once: true });
}
