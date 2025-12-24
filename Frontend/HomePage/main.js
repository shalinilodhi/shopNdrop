const role = sessionStorage.getItem("role");
const loggedIn = sessionStorage.getItem("loggedIn");

const vendorLink = document.getElementById("vendorLink");
const orderLink = document.getElementById("orderLink");
const loginLink = document.getElementById("loginLink");
const logoutLink = document.getElementById("logoutLink");

if (vendorLink) vendorLink.style.display = "none";
if (orderLink) orderLink.style.display = "none";
if (logoutLink) logoutLink.style.display = "none";

if (loggedIn === "true") {
  loginLink.style.display = "none";
  logoutLink.style.display = "block";

  if (role === "vendor") vendorLink.style.display = "block";
  if (role === "customer") orderLink.style.display = "block";
}

if (logoutLink) {
  logoutLink.addEventListener("click", () => {
    sessionStorage.clear();
    window.location.href = "index.html";
  });
}
/* =========================
   Smooth Scroll for Navbar
========================= */
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = this.getAttribute('href');

    if (target.startsWith('#')) {
      e.preventDefault();
      const section = document.querySelector(target);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

/* =========================
   Scroll Reveal Animation
========================= */
const revealElements = document.querySelectorAll(
  '.hero-content, .vendor-card, .feature-item, #about, #contact'
);

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      el.classList.add('show');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

/* =========================
   Active Navbar Highlight
========================= */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
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

/* =========================
   Vendor Card Click (Demo)
========================= */
document.querySelectorAll('.vendor-card').forEach(card => {
  card.addEventListener('click', () => {
    alert('🛒 Vendor page coming soon!');
  });
});

/* =========================
   Button Click Feedback
========================= */
const mainBtn = document.querySelector('.btn');
if (mainBtn) {
  mainBtn.addEventListener('click', () => {
    console.log('Get Started clicked');
  });
}
