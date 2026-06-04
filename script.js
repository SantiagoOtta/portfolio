// ===== NAV: achica al hacer scroll =====
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  nav.style.padding = window.scrollY > 50 ? "10px 60px" : "16px 60px";
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
document.getElementById("skillsToggle").addEventListener("click", () => {
  document.getElementById("skills").classList.toggle("collapsed");
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
