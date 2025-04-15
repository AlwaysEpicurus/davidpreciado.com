// Auto-update copyright year
document.getElementById("copyright-year").textContent = new Date().getFullYear();

// Dark mode toggle
const toggle = document.getElementById("dark-mode-toggle");
if (toggle) {
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode", toggle.checked);
  });
}
