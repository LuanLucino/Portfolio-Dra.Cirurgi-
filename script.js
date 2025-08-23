// Transição suave entre páginas
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    const isAnchorLink = this.href.includes("#");
    if (isAnchorLink) return;

    e.preventDefault();
    document.body.classList.remove("fade-in");
    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = this.href;
    }, 300);
  });
});

// Menu hamburguer responsivo
const menuToggle = document.getElementById("menu-toggle");
const navigationList = document.getElementById("nav-list");

if (menuToggle && navigationList) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navigationList.classList.toggle("active");
  });
}

// Botão "Saiba mais" com animação de check-in e retorno
document.querySelectorAll('.btn-saiba-mais').forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();

    if (this.classList.contains('checked')) return;

    this.classList.add('checked');
    this.innerHTML = 'Check-in feito <span class="check-icon">✔</span>';

    setTimeout(() => {
      this.classList.remove('checked');
      this.textContent = 'Saiba mais';
    }, 3000);
  });
});
