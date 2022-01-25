const els = {
  navToggle: document.querySelector('.nav-toggle'),
  navList: document.querySelector('.nav__list')
}

const init = () => {
  setUpMenu();
  toggleMenu();
}

const setUpMenu = () => {
  els.navToggle.addEventListener('click', toggleMenu);
  els.navToggle.classList.add('nav-toggle--display');
}

const toggleMenu = () => {
  els.navList.classList.toggle('nav__list--closed');
  els.navToggle.classList.toggle('nav-toggle--open');
}

init();