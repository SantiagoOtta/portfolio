// ===== NAV: achica al hacer scroll =====
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  const side = window.innerWidth <= 768 ? "20px" : "60px";
  nav.style.padding = window.scrollY > 50 ? `10px ${side}` : `16px ${side}`;
});

// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".fade-in").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.1}s`;
  observer.observe(el);
});

// ===== SKILLS TOGGLE =====
const skillsEl = document.getElementById("skills");
if (window.innerWidth <= 768) skillsEl.classList.add("collapsed");

document.getElementById("skillsToggle").addEventListener("click", () => {
  skillsEl.classList.toggle("collapsed");
});

// ===== CAMBIO DE IDIOMA =====
const langBtns = document.querySelectorAll(".lang-btn");

function setLanguage(lang) {
  document.querySelectorAll("[data-en]").forEach((el) => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
  langBtns.forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });
}

langBtns.forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.getAttribute("data-lang")));
});
