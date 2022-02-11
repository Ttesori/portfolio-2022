const els = {
  navToggle: document.querySelector('.nav-toggle'),
  navList: document.querySelector('.nav__list')
}

const classes = {
  navToggle: 'nav-toggle--display',
  toggleOpen: 'nav-toggle--open',
  listClosed: 'nav__list--closed',
  listOpen: 'nav__list--open',
  linkActive: 'nav__link--active'
}

const init = () => {
  setUpMenu();
  toggleMenu();
  addObserver();
}

const setUpMenu = () => {
  els.navToggle.addEventListener('click', toggleMenu);
  els.navToggle.classList.add(classes.navToggle);
}

const toggleMenu = () => {
  if (els.navList.classList.contains(classes.listClosed)) {
    openMenu();
  } else {
    closeMenu();
  }
}

const closeMenu = () => {
  els.navList.classList.remove(classes.listOpen);
  els.navList.classList.add(classes.listClosed);
  els.navToggle.classList.remove(classes.toggleOpen);
}
const openMenu = () => {
  els.navList.classList.remove('nav__list--closed');
  els.navList.classList.add(classes.listOpen);
  els.navToggle.classList.add(classes.toggleOpen);
}

const addObserver = () => {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    if (entry.isIntersecting && window.scrollY > 0) {
      document.querySelector(`.${classes.linkActive}`).classList.remove(classes.linkActive);
      document.querySelector(`nav li a[href="#${id}"]`).classList.add(classes.linkActive);
    }
  }), {
    threshold: window.innerWidth > 980 ? .75 : .1, // 75% or 10% of el is visible
    rootMargin: '-200px 0px 0px 0px', // top margin is 200px from the top
  });
  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
  })
}

window.addEventListener('DOMContentLoaded', init);