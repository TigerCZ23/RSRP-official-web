const toggle = document.getElementById("themeToggle");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

let currentTheme = savedTheme || (prefersDark ? "dark" : "light");
applyTheme(currentTheme);
toggle.checked = currentTheme === "light";

toggle.addEventListener("change", function () {
  const newTheme = this.checked ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);

  // Přidání nebo odebrání třídy light-mode na <body>
  if (theme === "light") {
    document.body.classList.add("light-mode");
  } else {
    document.body.classList.remove("light-mode");
  }
}

// parralax
function updateAllParallax() {
  const scroll = window.scrollY;
  const isMobile = window.innerWidth <= 768;

  document.querySelectorAll('.parallax').forEach(el => {
    const offset = parseFloat(el.dataset.offset) || 0;
    const mobileoffset = parseFloat(el.dataset.mobileoffset) || 0;

    let speed;
    let baseOffset;

    if (isMobile) {
      speed = parseFloat(el.dataset.mobileSpeed) || 0.6;
      baseOffset = mobileoffset;
    } else {
      speed = parseFloat(el.dataset.desktopSpeed) || 0.3;
      baseOffset = offset;
    }

    el.style.backgroundPositionY = `${baseOffset + scroll * speed}px`;

    // ✅ Log bez chyb
    console.log(`Speed: ${speed}, Scroll: ${scroll}, PosY: ${baseOffset + scroll * speed}`);
  });
}

window.addEventListener('scroll', updateAllParallax);
window.addEventListener('load', updateAllParallax);
document.addEventListener('DOMContentLoaded', updateAllParallax);

// Toggle the visibility of the navigation menu
function toggleMenu() {
    document.getElementById('nav-list').classList.toggle('active');
}
