const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const page = document.body.dataset.page;

document.querySelectorAll(".main-nav a").forEach((link) => {
  if (link.dataset.page === page) {
    link.classList.add("active");
  }
});
