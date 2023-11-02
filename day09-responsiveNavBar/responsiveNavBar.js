const navBurgerBtn = document.querySelector('.nav-burger-icon');
const navXBtn = document.querySelector('.nav-x-icon');
const navListWrapperMobile = document.querySelector('.nav-list-wrapper-mobile');

navBurgerBtn.addEventListener('click', () => {
  navListWrapperMobile.classList.toggle('active');
});

navXBtn.addEventListener('click', () => {
  navListWrapperMobile.classList.remove('active');
});

navListWrapperMobile.addEventListener('click', () => {
  navListWrapperMobile.classList.remove('active');
});
