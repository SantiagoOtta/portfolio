/* === PORTFOLIO SCRIPT === */

// --- Translations ---
const i18n = {
  es: {
    'nav.about': 'Sobre mí',
    'nav.education': 'Formación',
    'nav.skills': 'Skills',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.contact': 'Contacto',
    'hero.summary': 'Backend developer con experiencia en automatización de procesos, QA testing, programación en Python, creación y administración de bases de datos en PostgreSQL. Estudiante de Sistemas en UADE.',
    'hero.btn.projects': 'Ver proyectos',
    'hero.btn.contact': 'Contactame',
    'about.tag': '01 // about',
    'about.title': 'Sobre mí',
    'about.lead': 'Soy un desarrollador backend que actualmente trabaja principalmente en automatización de procesos y búsqueda de soluciones a problemas técnicos.',
    'about.body': 'Estudio Sistemas en UADE, donde estoy construyendo las bases formales que complementan mi experiencia práctica. En agosto arranco Programación 2 y OOP en Java — una transición que espero con entusiasmo porque entiendo que cada paradigma y lenguaje nuevo amplía el repertorio de habilidades.',
    'about.interests.label': 'Intereses tech',
    'about.interest.1': 'Automatización de procesos',
    'about.interest.2': 'Backend development',
    'about.interest.3': 'Bases de datos relacionales',
    'about.interest.4': 'Linux & scripting',
    'about.interest.5': 'OOP & diseño de software',
    'about.interest.6': 'Open source',
    'about.strengths.label': 'Fortalezas',
    'about.strength.1': 'Descomposición de problemas complejos',
    'about.strength.2': 'Pensamiento analítico antes del código',
    'about.strength.3': 'Aprendizaje autodirigido y estructurado',
    'about.strength.4': 'Trabajo en entornos universitarios reales',
    'edu.tag': '02 // educación',
    'edu.title': 'Formación',
    'edu.period': '2023 — presente',
    'edu.degree': 'Tecnicatura en Programación',
    'edu.institution': 'UADE — Universidad Argentina de la Empresa',
    'edu.desc': 'Carrera de sistemas con orientación a programación. Próximo desafío: Programación 2 y OOP en Java (Agosto 2025).',
    'edu.status': 'En cursada',
    'skills.tag': '03 // skills',
    'skills.title': 'Habilidades',
    'skills.group.languages': 'Lenguajes',
    'skills.group.tools': 'Tecnologías & Herramientas',
    'skills.group.soft': 'Soft Skills',
    'skills.group.spoken': 'Idiomas',
    'skills.soft.comm.title': 'Comunicación técnica',
    'skills.soft.comm.desc': 'Bilingüe EN/ES. Explico soluciones complejas de forma clara a equipos no técnicos.',
    'skills.soft.improve.title': 'Orientación a la mejora',
    'skills.soft.improve.desc': 'Identifico patrones problemáticos en mi código y los corrijo proactivamente.',
    'skills.lang.es': 'Español',
    'skills.lang.esLevel': 'Nativo',
    'skills.lang.en': 'Inglés',
    'skills.lang.enLevel': 'B2 — Upper Intermediate',
    'projects.tag': '04 // proyectos',
    'projects.title': 'Proyectos destacados',
    'projects.parking.type': 'Sistema de gestión · UADE',
    'projects.parking.title': 'Sistema de Gestión de Estacionamiento',
    'projects.parking.desc': 'Aplicación en Python desarrollada en equipo para la UADE que automatiza la administración de un estacionamiento: control de ocupación en tiempo real, registro de ingresos/egresos, cálculo dinámico de tarifas por tipo de vehículo, reservas con validación de disponibilidad y roles diferenciados de administrador y cliente.',
    'projects.parking.learning': '→ Aprendizaje clave:',
    'projects.parking.learningText': 'Diseño modular con persistencia, roles de usuario y testing automatizado en equipo.',
    'projects.portfolio.type': 'Portfolio · Web',
    'projects.portfolio.title': 'Portfolio Personal',
    'projects.portfolio.desc': 'Sitio web profesional desplegado en GitHub Pages. Construido con HTML, CSS y JS vanilla. Diseño responsive, optimizado para presentar el perfil ante reclutadores.',
    'projects.portfolio.learning': '→ Aprendizaje clave:',
    'projects.portfolio.learningText': 'Diseño web orientado a la experiencia del visitante.',
    'exp.tag': '05 // experiencia',
    'exp.title': 'Experiencia',
    'exp.uba.title': 'Backend Developer',
    'exp.uba.company': 'Universidad de Buenos Aires (UBA)',
    'exp.uba.period': '2025 — Presente',
    'exp.uba.desc': 'Desarrollo y mantenimiento de scripts de automatización en Python sobre entornos Linux. Gestión y consulta de bases de datos PostgreSQL para procesar información académica e institucional. Reducción de procesos manuales repetitivos mediante soluciones programáticas.',
    'exp.uba.tag.auto': 'Automatización',
    'exp.shoppear.title': 'QA Analyst & Coordinador de Proyectos Digitales',
    'exp.shoppear.company': 'Shoppear SA',
    'exp.shoppear.period': '2022 — 2023',
    'exp.shoppear.desc': 'Testing funcional de aplicaciones web y mobile, gestión y reporte de bugs, y coordinación de equipos y proyectos en el ámbito digital. Comunicación entre stakeholders técnicos y no técnicos. Esta experiencia me dio visión holística del ciclo de vida del software que hoy aplico al escribir código más robusto y manejable.',
    'exp.shoppear.tag.testing': 'Testing funcional',
    'exp.shoppear.tag.bugs': 'Gestión de bugs',
    'exp.shoppear.tag.sdlc': 'SDLC',
    'exp.shoppear.tag.projects': 'Gestión de proyectos',
    'exp.shoppear.tag.comm': 'Comunicación',
    'contact.tag': '06 // contacto',
    'contact.title': 'Hablemos!',
    'contact.intro': 'Estoy abierto a oportunidades de trabajo, prácticas y colaboración en proyectos. Si hay algo en lo que pueda sumar, escribime.',
    'contact.portfolio.label': 'Portfolio web',
  },
  en: {
    'nav.about': 'About',
    'nav.education': 'Education',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'hero.summary': 'Backend developer with experience in process automation, QA testing, Python programming, and PostgreSQL database creation and management. Systems student at UADE.',
    'hero.btn.projects': 'View projects',
    'hero.btn.contact': 'Contact me',
    'about.tag': '01 // about',
    'about.title': 'About me',
    'about.lead': "I'm a backend developer currently focused on process automation and finding solutions to technical problems.",
    'about.body': 'I study Systems at UADE, building the formal foundations that complement my practical experience. In August I start Programming 2 and OOP in Java — a transition I look forward to, as each new paradigm and language expands my skill set.',
    'about.interests.label': 'Tech interests',
    'about.interest.1': 'Process automation',
    'about.interest.2': 'Backend development',
    'about.interest.3': 'Relational databases',
    'about.interest.4': 'Linux & scripting',
    'about.interest.5': 'OOP & software design',
    'about.interest.6': 'Open source',
    'about.strengths.label': 'Strengths',
    'about.strength.1': 'Breaking down complex problems',
    'about.strength.2': 'Analytical thinking before coding',
    'about.strength.3': 'Self-directed and structured learning',
    'about.strength.4': 'Working in real university environments',
    'edu.tag': '02 // education',
    'edu.title': 'Education',
    'edu.period': '2023 — present',
    'edu.degree': 'Programming Technician Degree',
    'edu.institution': 'UADE — Universidad Argentina de la Empresa',
    'edu.desc': 'Systems degree with a programming focus. Next challenge: Programming 2 and OOP in Java (August 2025).',
    'edu.status': 'In progress',
    'skills.tag': '03 // skills',
    'skills.title': 'Skills',
    'skills.group.languages': 'Languages',
    'skills.group.tools': 'Technologies & Tools',
    'skills.group.soft': 'Soft Skills',
    'skills.group.spoken': 'Spoken Languages',
    'skills.soft.comm.title': 'Technical communication',
    'skills.soft.comm.desc': 'Bilingual EN/ES. I explain complex solutions clearly to non-technical teams.',
    'skills.soft.improve.title': 'Improvement mindset',
    'skills.soft.improve.desc': 'I identify problematic patterns in my code and fix them proactively.',
    'skills.lang.es': 'Spanish',
    'skills.lang.esLevel': 'Native',
    'skills.lang.en': 'English',
    'skills.lang.enLevel': 'B2 — Upper Intermediate',
    'projects.tag': '04 // projects',
    'projects.title': 'Featured projects',
    'projects.parking.type': 'Management system · UADE',
    'projects.parking.title': 'Parking Management System',
    'projects.parking.desc': 'Python application developed as a team for UADE that automates parking administration: real-time occupancy control, entry/exit logging, dynamic fare calculation by vehicle type, reservations with availability validation, and differentiated admin and client roles.',
    'projects.parking.learning': '→ Key learning:',
    'projects.parking.learningText': 'Modular design with persistence, user roles, and automated team testing.',
    'projects.portfolio.type': 'Portfolio · Web',
    'projects.portfolio.title': 'Personal Portfolio',
    'projects.portfolio.desc': 'Professional website deployed on GitHub Pages. Built with vanilla HTML, CSS and JS. Responsive design, optimized to showcase the profile to recruiters.',
    'projects.portfolio.learning': '→ Key learning:',
    'projects.portfolio.learningText': 'Visitor-experience-driven web design.',
    'exp.tag': '05 // experience',
    'exp.title': 'Experience',
    'exp.uba.title': 'Backend Developer',
    'exp.uba.company': 'Universidad de Buenos Aires (UBA)',
    'exp.uba.period': '2025 — Present',
    'exp.uba.desc': 'Development and maintenance of Python automation scripts on Linux environments. Management and querying of PostgreSQL databases to process academic and institutional data. Reduction of repetitive manual processes through programmatic solutions.',
    'exp.uba.tag.auto': 'Automation',
    'exp.shoppear.title': 'QA Analyst & Digital Projects Coordinator',
    'exp.shoppear.company': 'Shoppear SA',
    'exp.shoppear.period': '2022 — 2023',
    'exp.shoppear.desc': 'Functional testing of web and mobile applications, bug management and reporting, and coordination of digital teams and projects. Communication between technical and non-technical stakeholders. This experience gave me a holistic view of the software lifecycle that I now apply to writing more robust and maintainable code.',
    'exp.shoppear.tag.testing': 'Functional testing',
    'exp.shoppear.tag.bugs': 'Bug management',
    'exp.shoppear.tag.sdlc': 'SDLC',
    'exp.shoppear.tag.projects': 'Project management',
    'exp.shoppear.tag.comm': 'Communication',
    'contact.tag': '06 // contact',
    'contact.title': "Let's talk!",
    'contact.intro': "I'm open to job opportunities, internships, and project collaborations. If there's anything I can contribute, reach out.",
    'contact.portfolio.label': 'Portfolio',
  },
};

// --- Language state ---
let currentLang = 'es';

const titlesByLang = {
  es: ['Backend Developer', 'Python Automator', 'Resolvedor de Problemas', 'Estudiante @ UADE'],
  en: ['Backend Developer', 'Python Automator', 'Problem Solver', 'Student @ UADE'],
};

let titles = titlesByLang[currentLang];

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  titles = titlesByLang[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const text = i18n[lang][key];
    if (text !== undefined) el.textContent = text;
  });

  document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  localStorage.setItem('lang', lang);
}

// --- Typed title effect ---
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

// --- Lang toggle ---
const langToggle = document.getElementById('langToggle');
langToggle?.addEventListener('click', () => {
  setLang(currentLang === 'es' ? 'en' : 'es');
});

// --- Intersection Observer for fade-up animations ---
const fadeUpEls = document.querySelectorAll('.fade-up');
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), 0);
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
  const savedLang = localStorage.getItem('lang') || 'es';
  setLang(savedLang);

  addFadeUps();

  document.querySelectorAll('.fade-up').forEach(el => {
    fadeObserver.observe(el);
  });

  setTimeout(typeTitle, 800);

  const style = document.createElement('style');
  style.textContent = `.nav-links a.active { color: var(--accent) !important; }`;
  document.head.appendChild(style);
});

window.addEventListener('scroll', () => {
  handleNavScroll();
  updateActiveNav();
}, { passive: true });

handleNavScroll();
