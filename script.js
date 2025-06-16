// Pour valider le formulaire
document.getElementById('formulaire-contact').addEventListener('submit', function(event) {
  event.preventDefault();
  alert("Merci pour votre message !");
});

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.top-bar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
