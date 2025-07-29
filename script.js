// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
});

// Smooth scroll fallback for older browsers
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

// Image modal for resume
const resumeImage = document.getElementById('resumeImage');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');

resumeImage.addEventListener('click', () => {
    modalImage.src = resumeImage.src;
    imageModal.style.display = 'flex';
});

imageModal.addEventListener('click', () => {
    imageModal.style.display = 'none';
});
    });
});
