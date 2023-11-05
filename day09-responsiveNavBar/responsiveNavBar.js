const navBurgerBtn = document.querySelector('.nav-burger-icon');
const navXBtn = document.querySelector('.nav-x-icon');
const navListWrapper = document.querySelector('.nav-list-wrapper');

navBurgerBtn.addEventListener('click', () => {
  navListWrapper.classList.toggle('active');
});

navXBtn.addEventListener('click', () => {
  navListWrapper.classList.remove('active');
});
