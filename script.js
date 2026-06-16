/* === PORTFOLIO SCRIPT === */

// --- Typed title effect ---
const titles = [
  'Backend Developer',
  'Python Automator',
  'Problem Solver',
  'Student @ UADE',
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typedTitle');
const TYPING_SPEED = 80;
const DELETE_SPEED = 40;
const PAUSE_BEFORE_DELETE = 2200;
const PAUSE_BEFORE_TYPE = 400;

function typeTitle() {
  if (!typedEl) return;
  const current = titles[titleIndex];

  if (!isDeleting) {
    typedEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(typeTitle, PAUSE_BEFORE_DELETE);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      setTimeout(typeTitle, PAUSE_BEFORE_TYPE);
      return;
    }
  }
  setTimeout(typeTitle, isDeleting ? DELETE_SPEED : TYPING_SPEED);
}

// --- Nav scroll effect ---
const nav = document.getElementById('nav');
function handleNavScroll() {
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}

// --- Mobile nav toggle ---
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// --- Intersection Observer for fade-up animations ---
const fadeUpEls = document.querySelectorAll('.fade-up');
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger children if multiple
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 0);
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

fadeUpEls.forEach(el => fadeObserver.observe(el));

// --- Skill bars animation ---
const skillFills = document.querySelectorAll('.skill-fill');
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        skillObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);
skillFills.forEach(el => skillObserver.observe(el));

// --- Add fade-up to section children ---
function addFadeUps() {
  const selectorGroups = [
    '.about-main > *',
    '.about-sidebar > *',
    '.edu-item',
    '.skill-group',
    '.project-card',
    '.timeline-item',
    '.roadmap-card',
    '.contact-card',
  ];

  selectorGroups.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add('fade-up');
      el.style.transitionDelay = `${i * 0.07}s`;
    });
  });
}

// --- Active nav link on scroll ---
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

function updateActiveNav() {
  const scrollY = window.scrollY + 100;
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const match = document.querySelector(`.nav-links a[href="#${section.id}"]`);
      if (match) match.classList.add('active');
    }
  });
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  addFadeUps();

  // Re-observe after adding fade-up classes
  document.querySelectorAll('.fade-up').forEach(el => {
    fadeObserver.observe(el);
  });

  // Start typewriter
  setTimeout(typeTitle, 800);

  // Nav active style
  const style = document.createElement('style');
  style.textContent = `.nav-links a.active { color: var(--accent) !important; }`;
  document.head.appendChild(style);
});

window.addEventListener('scroll', () => {
  handleNavScroll();
  updateActiveNav();
}, { passive: true });

handleNavScroll();
