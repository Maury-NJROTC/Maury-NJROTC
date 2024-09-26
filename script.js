document.getElementById('hamburger').addEventListener('click', function() {
  const mobileNav = document.getElementById('mobileNav');
  mobileNav.classList.toggle('show');
  this.classList.toggle('active');
});


