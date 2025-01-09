// mobile nav

function toggleMenu() {
  const mobileNav = document.getElementById('mobileNav');
  mobileNav.classList.toggle('active');
}

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


//Tab section

function openPage(evt, pageName) {
  var i, tabcontent, tablinks;
  
  // Hide all tab contents
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove "active" class from all buttons
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show the clicked page content and add "active" class to the clicked button
  document.getElementById(pageName).style.display = "flex";
  evt.currentTarget.classList.add("active");
}

// Show the first page by default
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".tablinks").click();
});
  


// track order
document.querySelector('.track-btn').addEventListener('click', () => {
  const trackingNumber = document.getElementById('tracking-number').value;
  if (trackingNumber) {
    alert(`Tracking number ${trackingNumber} submitted.`);
  } else {
    alert('Please enter a tracking number.');
  }
});
