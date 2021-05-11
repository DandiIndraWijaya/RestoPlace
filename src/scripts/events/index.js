/* eslint-disable linebreak-style */
const events = () => {
  // onscroll when click find restaurant button
  const navEl = document.getElementById('navbar');

  document.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      navEl.classList.remove('navbar__inherit');
    } else if (window.scrollY <= 500) {
      navEl.classList.add('navbar__inherit');
    }
  });

  const findRestoBtn = document.getElementById('findresto__button');
  const title = document.getElementById('title');

  findRestoBtn.addEventListener('click', () => {
    window.scrollTo(0, title.offsetTop - 70);
  });

  // toggle drawer
  const humbergerEl = document.getElementById('humberger');
  const drawerEl = document.getElementById('drawer');
  humbergerEl.addEventListener('click', () => {
    humbergerEl.classList.toggle('humberger__drawer__clicked');
    drawerEl.classList.toggle('drawer__open');
  });
};

export default events;
