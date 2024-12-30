const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// ScrollReveal().reveal(".header__image img, .container img ", {
//   ...scrollRevealOption,
//   origin: "right",
// });

// ScrollReveal().reveal(".header__content h1,.container", {
//   ...scrollRevealOption,
//   delay: 500,
// });

// ScrollReveal().reveal(".header__content pr", {
//   ...scrollRevealOption,
//   delay: 1000,
// });

// ScrollReveal().reveal(".header__content form", {
//   ...scrollRevealOption,
//   delay: 1500,
// });

// ScrollReveal().reveal(".header__content .bar", {
//   ...scrollRevealOption,
//   delay: 2000,
// });

// ScrollReveal().reveal(".header__image__card", {
//   duration: 1000,
//   interval: 500,
//   delay: 2500,
// });


// FAQ

const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isVisible = answer.style.display === 'block';

        // Hide all other answers
        document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');

        // Toggle the clicked question's answer
        answer.style.display = isVisible ? 'none' : 'block';
    });
});


//review 



// track order
function trackOrder() {
  const trackingNumber = document.getElementById('trackingNumber').value;
  if (trackingNumber) {
      alert(`Tracking Order: ${trackingNumber}`);
  } else {
      alert('Please enter a valid tracking number.');
  }
};