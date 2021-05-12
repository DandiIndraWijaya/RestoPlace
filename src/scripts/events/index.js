/* eslint-disable linebreak-style */
const events = () => {
  // navbar background color change whene scrolltop is > 500
  const navEl = document.getElementById('navbar');

  document.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      navEl.classList.remove('navbar__inherit');
    } else if (window.scrollY <= 500) {
      navEl.classList.add('navbar__inherit');
    }
  });

  // onscroll when click find restaurant button
  const findRestoBtn = document.getElementById('findresto__button');
  const title = document.getElementById('title');

  findRestoBtn.addEventListener('click', () => {
    window.scrollTo(0, title.offsetTop - 70);
  });

  // onscroll when click skipt to content
  const skiptToContent = document.getElementById('skip__to__content');
  skiptToContent.addEventListener('click', () => {
    window.scrollTo(0, title.offsetTop - 90);
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
