// ============================================================
// Portfólio — Diego Lorenço
// Interações simples em JavaScript puro
// ============================================================

// Anima as barras de progresso quando a seção de estudo entra na tela
const progressBars = document.querySelectorAll(".progress-bar");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 }
);

progressBars.forEach((bar) => observer.observe(bar));

// Destaca o link da navegação correspondente à seção visível
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          const isActive = link.getAttribute("href") === `#${entry.target.id}`;
          link.style.color = isActive ? "var(--foreground)" : "";
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => sectionObserver.observe(section));
