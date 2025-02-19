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

// Contact us section js 
// Initialize Google Maps
function initMap() {
  var location = { lat: 37.7749, lng: -122.4194 }; // Change to your location
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: location,
    styles: [
      {
        elementType: "geometry",
        stylers: [{ color: "#242f3e" }],
      },
      {
        elementType: "labels.text.fill",
        stylers: [{ color: "#746855" }],
      },
    ],
  });

  var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "Our Location",
  });
}
