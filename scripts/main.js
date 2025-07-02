document.addEventListener('DOMContentLoaded', () => {
  const anchors = document.querySelectorAll('a[href^="#"]');

  anchors.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  document.body.style.backgroundPositionY = `${scrolled * 0.5}px`;
});