const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const navcontainermenu = document.getElementById('containermenu');
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);