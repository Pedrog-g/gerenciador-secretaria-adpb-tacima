// Abrir o menu mobile

const mobileMenuButton = document.querySelector('#mobile-menu-button');
const mobileMenu = document.querySelector('#mobile-menu');


mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('flex');
  mobileMenu.classList.toggle('hidden');
})

const btnNext = document.getElementById('goToPhotoStep');
const stepForm = document.getElementById('new_member_form');
const stepPhoto = document.getElementById('step-photo');

btnNext.addEventListener('click', () => {
  stepForm.classList.add('hidden');
  stepPhoto.classList.remove('hidden');
});