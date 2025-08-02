document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    if (this.href.includes("#")) return;
    e.preventDefault();
    document.body.classList.remove("fade-in");
    document.body.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = this.href;
    }, 300);
  });
});




  const toggleBtn = document.getElementById('menu-toggle');
  const navList = document.getElementById('nav-list');

  toggleBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
  });

