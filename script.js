document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS (Animate on Scroll)
  AOS.init({
    offset: 200,
    duration: 1000,
    easing: "ease-in-out",
    once: true,
  });
});


// About us section 
document.querySelector(".btn-learn-more").addEventListener("click", () => {
  alert("More details coming soon!");
});


// Our services section 
/* JavaScript Interactions */
document.querySelectorAll('.col-md-4').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    let x = (e.offsetX / card.offsetWidth) * 30 - 15;
    let y = (e.offsetY / card.offsetHeight) * 30 - 15;
    card.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
});