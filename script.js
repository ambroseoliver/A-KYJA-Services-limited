document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS (Animate on Scroll)
  AOS.init({
    offset: 200,
    duration: 1000,
    easing: "ease-in-out",
    once: true,
  });
});

// Navbar Scroll Effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile Menu Toggle
document.getElementById("mobile-menu").addEventListener("click", function () {
  const navMenu = document.getElementById("navbarNav");
  navMenu.classList.toggle("show");

  // Close menu when a link is clicked (for mobile users)
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("show");
    });
  });
});


// Hero Section Typewriter Effect
document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("hero-title");
  const text = title.innerText;
  title.innerText = "";
  let i = 0;

  function typeEffect() {
    if (i < text.length) {
      title.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeEffect, 50);
    }
  }
  typeEffect();
});



// About us section 
document.querySelector(".btn-learn-more").addEventListener("click", () => {
  alert("More details coming soon!");
});


// Services section
// 3D Hover Effect
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    let x = (e.offsetX / card.offsetWidth) * 30 - 15;
    let y = (e.offsetY / card.offsetHeight) * 30 - 15;
    card.style.transform = `rotateX(${y}deg) rotateY(${x}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  });
});



// Property section 
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const propertyCards = document.querySelectorAll(".property-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filterValue = button.getAttribute("data-filter");

      propertyCards.forEach((card) => {
        if (filterValue === "all" || card.classList.contains(filterValue)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});

// Our property management section 
// Smooth Scroll for Links
document.addEventListener("DOMContentLoaded", function () {
  const scrollLinks = document.querySelectorAll('a[href^="#"]');

  scrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: "smooth",
        });
      }
    });
  });
});

// Hover Effect for 3D Depth
document.querySelectorAll(".management-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    let x = (e.offsetX / card.offsetWidth) * 30 - 15;
    let y = (e.offsetY / card.offsetHeight) * 30 - 15;
    card.style.transform = `rotateX(${y}deg) rotateY(${x}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  });
});


// Our process section 
document.addEventListener("DOMContentLoaded", function () {
  const getStartedBtn = document.querySelector(".btn-primary");

  getStartedBtn.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
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

// Blog section 
document.addEventListener("DOMContentLoaded", function () {
  // Lazy Load Images
  const lazyImages = document.querySelectorAll(".lazyload");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.src = entry.target.dataset.src;
          entry.target.classList.remove("lazyload");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  lazyImages.forEach((img) => observer.observe(img));
});

// Team Section 
document.addEventListener("DOMContentLoaded", function () {
  // Lazy Load Images
  const lazyImages = document.querySelectorAll(".lazyload");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.src = entry.target.dataset.src;
          entry.target.classList.remove("lazyload");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  lazyImages.forEach((img) => observer.observe(img));
});


// Faqs section 
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".accordion-button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      setTimeout(() => {
        button.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 300);
    });
  });
});

// Footer section 
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("newsletter-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = form.querySelector("input").value;

    if (validateEmail(email)) {
      alert("Thank you for subscribing!");
      form.reset();
    } else {
      alert("Please enter a valid email address.");
    }
  });

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const chatToggle = document.getElementById("chat-toggle");
  const chatBox = document.getElementById("chat-box");
  const closeChat = document.getElementById("close-chat");
  const sendMessage = document.getElementById("send-message");
  const chatInput = document.getElementById("chat-input");
  const chatBody = document.getElementById("chat-body");

  // Open chat with animation
  chatToggle.addEventListener("click", function () {
    chatBox.style.display = "flex";
    setTimeout(() => {
      chatBox.style.opacity = "1";
      chatBox.style.transform = "translateY(0)";
    }, 100);
  });

  // Close chat
  closeChat.addEventListener("click", function () {
    chatBox.style.opacity = "0";
    chatBox.style.transform = "translateY(10px)";
    setTimeout(() => {
      chatBox.style.display = "none";
    }, 300);
  });

  // Send message
  sendMessage.addEventListener("click", function () {
    if (chatInput.value.trim() !== "") {
      let userMessage = document.createElement("div");
      userMessage.classList.add("chat-message", "user-message");
      userMessage.textContent = chatInput.value;
      chatBody.appendChild(userMessage);
      chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll to the latest message
      chatInput.value = "";
    }
  });

  // Send message on Enter key press
  chatInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      sendMessage.click();
    }
  });
});


// Whatsup floating button 
document.addEventListener("DOMContentLoaded", function () {
  const whatsappBtn = document.getElementById("whatsapp-btn");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      whatsappBtn.style.display = "flex";
    } else {
      whatsappBtn.style.display = "none";
    }
  });
});



// Back to top button 
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("back-to-top");

  // Show button when scrolling down
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  // Scroll to top when button is clicked
  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});



