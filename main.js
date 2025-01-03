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




// track order
function trackOrder() {
  const trackingNumber = document.getElementById('trackingNumber').value;
  if (trackingNumber) {
      alert(`Tracking Order: ${trackingNumber}`);
  } else {
      alert('Please enter a valid tracking number.');
  }
};