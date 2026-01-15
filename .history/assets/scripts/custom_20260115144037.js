// Abrir o menu mobile

const mobileMenuButton = document.querySelector('#mobile-menu-button');
const mobileMenu = document.querySelector('#mobile-menu');


mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('flex');
  mobileMenu.classList.toggle('flex');
})