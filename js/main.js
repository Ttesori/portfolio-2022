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
  if (els.navList.classList.contains('nav__list--closed')) {
    openMenu();
  } else {
    closeMenu();
  }
}

const closeMenu = () => {
  els.navList.classList.remove('nav__list--open');
  els.navList.classList.add('nav__list--closed');
  els.navToggle.classList.remove('nav-toggle--open');
}
const openMenu = () => {
  els.navList.classList.remove('nav__list--closed');
  els.navList.classList.add('nav__list--open');
  els.navToggle.classList.add('nav-toggle--open');
}

init();