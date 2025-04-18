const els = {
  navToggle: document.querySelector('.nav-toggle'),
  navList: document.querySelector('.nav__list'),
  navLinks: document.querySelectorAll(".link--section"),
};

const classes = {
  navToggle: 'nav-toggle--display',
  toggleOpen: 'nav-toggle--open',
  listClosed: 'nav__list--closed',
  listOpen: 'nav__list--open',
  linkActive: 'nav__link--active'
};

const init = () => {
  setUpMenu();
  toggleMenu();
  activeOnScroll();
};

const setUpMenu = () => {
  els.navToggle.addEventListener('click', toggleMenu);
  els.navToggle.classList.add(classes.navToggle);
};

const toggleMenu = () => {
  if (els.navList.classList.contains(classes.listClosed)) {
    openMenu();
  } else {
    closeMenu();
  }
};

const closeMenu = () => {
  els.navList.classList.remove(classes.listOpen);
  els.navList.classList.add(classes.listClosed);
  els.navToggle.classList.remove(classes.toggleOpen);
};
const openMenu = () => {
  els.navList.classList.remove('nav__list--closed');
  els.navList.classList.add(classes.listOpen);
  els.navToggle.classList.add(classes.toggleOpen);
};

const activeOnScroll = () => {
  let mainNavLinks = els.navLinks;

  window.addEventListener("scroll", event => {
    let fromTop = window.scrollY - 50;

    mainNavLinks.forEach(link => {
      let hash = new URL(link.href).hash;
      let section = document.querySelector(hash);
      if (
        section.offsetTop <= fromTop + 200 &&
        section.offsetTop + section.offsetHeight > fromTop + 200
      ) {
        link.classList.add(classes.linkActive);
      } else {
        link.classList.remove(classes.linkActive);
      }
    });
  });

};

window.addEventListener('DOMContentLoaded', init);