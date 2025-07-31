// Simple smooth nav active link highlight on scroll

const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Hamburger menu toggle (for mobile)

const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinksContainer.classList.toggle('open');
  hamburger.classList.toggle('open');
});

// Accessibility: keyboard toggle hamburger
hamburger.addEventListener('keydown', e => {
  if(e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    hamburger.click();
  }
});

// Contact form submission handling

const form = document.getElementById('contact-form');
const messageDiv = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if(!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // In real scenario, send data to backend here
  // For demo, just show thank you message
  form.reset();
  messageDiv.hidden = false;

  setTimeout(() => {
    messageDiv.hidden = true;
  }, 5000);
});
