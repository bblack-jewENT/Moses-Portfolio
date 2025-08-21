let typed = new Typed(".multiple-text", {
    strings: ["Front-end Developer", "Videographer", "Photographer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Navbar toggle for mobile
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Highlight navbar link based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
let current = '';
sections.forEach(section => {
  const sectionTop = section.offsetTop - 120; // adjust for header height
  const sectionHeight = section.offsetHeight;
  if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
    current = section.getAttribute('id');
  }
});

navLinks.forEach(link => {
  link.classList.remove('active');
  if (link.getAttribute('href').includes(current)) {
    link.classList.add('active');
  }
});
});

 // Background color selector logic
  const bgSelector = document.getElementById('bg-color');
  bgSelector.addEventListener('change', function() {
    document.body.style.background = this.value;
    // Optionally, update .home and .skills backgrounds for full effect
    document.querySelectorAll('.home, .skills').forEach(el => el.style.background = this.value);
  });



