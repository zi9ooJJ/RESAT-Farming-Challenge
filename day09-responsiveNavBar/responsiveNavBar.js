const navBurgerBtn = document.querySelector('.nav-burger-icon');
const navXBtn = document.querySelector('.nav-x-icon');
const navListWrapperMobile = document.querySelector('.nav-list-wrapper-mobile');
const headerNavMobile = document.querySelector('.header-nav-mobile');

navBurgerBtn.addEventListener('click', () => {
  navListWrapperMobile.classList.toggle('active');
  headerNavMobile.classList.toggle('active');
});

navXBtn.addEventListener('click', () => {
  navListWrapperMobile.classList.remove('active');
  headerNavMobile.classList.remove('active');
});

// headerNavMobile.addEventListener('click', () => {
//   navListWrapperMobile.classList.remove('active');
//   headerNavMobile.classList.remove('active');
// });
