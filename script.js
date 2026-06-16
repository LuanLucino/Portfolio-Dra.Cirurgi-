// Fade-out na navegação entre páginas
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    if (this.href.includes("#")) return;
    e.preventDefault();
    document.body.classList.remove("fade-in");
    document.body.classList.add("fade-out");
    const target = this.href;
    setTimeout(() => { window.location.href = target; }, 280);
  });
});

// Hamburger menu
const toggleBtn = document.getElementById("menu-toggle");
const navList   = document.getElementById("nav-list");

if (toggleBtn && navList) {
  toggleBtn.addEventListener("click", () => {
    navList.classList.toggle("active");
  });

  // Fecha ao clicar fora
  document.addEventListener("click", (e) => {
    if (!toggleBtn.contains(e.target) && !navList.contains(e.target)) {
      navList.classList.remove("active");
    }
  });
}
