/* SaiVerse Solutions JavaScript (Final Version) */

// Smooth scroll for anchor links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Review form submission (basic confirmation only)
const reviewForm = document.getElementById('review-form');
if (reviewForm) {
  reviewForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.name.value.trim();
    const country = this.country.value.trim();
    const feedback = this.feedback.value.trim();

    if (name && country && feedback) {
      alert('Thank you for your review, ' + name + '!');
      this.reset();
    } else {
      alert('Please fill in all fields.');
    }
  });
}

// Scroll fade-in animation using IntersectionObserver
const faders = document.querySelectorAll('section');
const options = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, options);

faders.forEach(section => {
  section.classList.add('fade-in');
  appearOnScroll.observe(section);
});

// WhatsApp floating button
const waBtn = document.createElement('a');
waBtn.href = 'https://wa.me/918939701718';
waBtn.target = '_blank';
waBtn.innerHTML = '💬';
waBtn.style.position = 'fixed';
waBtn.style.bottom = '20px';
waBtn.style.right = '20px';
waBtn.style.fontSize = '2rem';
waBtn.style.background = '#25d366';
waBtn.style.color = '#fff';
waBtn.style.padding = '10px 14px';
waBtn.style.borderRadius = '50%';
waBtn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
waBtn.style.textDecoration = 'none';
waBtn.style.zIndex = '999';
document.body.appendChild(waBtn);

// Align Booking and Social Icons better
window.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  const bookingBtn = document.querySelector('.hero .btn');
  const socialIcons = document.querySelector('.social-icons');

  if (hero && bookingBtn && socialIcons) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('cta-wrapper');
    wrapper.appendChild(bookingBtn);
    wrapper.appendChild(socialIcons);
    hero.appendChild(wrapper);
  }
});
