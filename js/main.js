const els = {
  navToggle: document.querySelector('.nav-toggle'),
  navList: document.querySelector('.nav__list')
}

const init = () => {
  setUpMenu();
  toggleMenu();
  addObserver();
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

const addObserver = () => {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    if (entry.intersectionRatio > 0) {
      console.log(id, entry.intersectionRatio)
      document.querySelector('.nav__link--active').classList.remove('nav__link--active');
      document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('nav__link--active');
    }
  }));
  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
  })
}

init();