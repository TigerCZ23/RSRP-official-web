const track = document.getElementById("vip-track");
const cards = track.children;
const totalRealCards = 3;
let currentIndex = 1; // Začínáme na 1 (skutečná VIP 1)
let transitioning = false;

function updateCarousel() {
  const offset = -currentIndex * 100;
  track.style.transition = "transform 0.5s ease";
  track.style.transform = `translateX(${offset}%)`;
  transitioning = true;
}

function nextVIP() {
  if (transitioning) return;
  currentIndex++;
  updateCarousel();
}

function prevVIP() {
  if (transitioning) return;
  currentIndex--;
  updateCarousel();
}

track.addEventListener("transitionend", () => {
  transitioning = false;

  if (currentIndex === 0) {
    track.style.transition = "none";
    currentIndex = totalRealCards;
    track.style.transform = `translateX(${-currentIndex * 100}%)`;
  }

  if (currentIndex === totalRealCards + 1) {
    track.style.transition = "none";
    currentIndex = 1;
    track.style.transform = `translateX(${-currentIndex * 100}%)`;
  }
});

window.addEventListener("load", () => {
  track.style.transition = "none";
  track.style.transform = `translateX(-100%)`; // Skutečný začátek
});
