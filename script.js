// Pour valider le formulaire
const form = document.getElementById('formulaire-contact');
  const confirmation = document.getElementById('confirmation');

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche le rechargement
    const data = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        confirmation.style.display = "block";
        form.reset();
      } else {
        confirmation.textContent = "Une erreur s'est produite. Veuillez réessayer.";
        confirmation.style.color = "red";
        confirmation.style.display = "block";
      }
    });
  });
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.top-bar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});



  // Ouvrir le menu
  document.getElementById("open-menu").addEventListener("click", function () {
    document.getElementById("side-menu").classList.add("active");
  });

  // Fermer le menu
  document.getElementById("close-menu").addEventListener("click", function () {
    document.getElementById("side-menu").classList.remove("active");
  });

  // Fermer quand on clique sur un lien
  document.querySelectorAll(".side-menu a").forEach(link => {
    link.addEventListener("click", () => {
      document.getElementById("side-menu").classList.remove("active");
    });
  });

