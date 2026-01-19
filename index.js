// DARK/LIGHT MODE
const switchBtn = document.querySelector(".switch i");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
  switchBtn.classList.toggle("fa-sun", savedTheme === "dark-mode");
  switchBtn.classList.toggle("fa-moon", savedTheme === "light-mode");
}

switchBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  switchBtn.classList.toggle("fa-moon");
  switchBtn.classList.toggle("fa-sun");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark-mode");
  } else {
    localStorage.setItem("theme", "light-mode");
  }
});

// FADE-IN ON SCROLL
const sections = document.querySelectorAll(
  "main section, footer, .project-card"
);
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach((section) => observer.observe(section));
