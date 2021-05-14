/* eslint-disable linebreak-style */
const events = () => {
  // navbar background color change when scrolltop is > 500
  const navEl = document.getElementById('navbar');

  document.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      navEl.classList.remove('navbar__inherit');
      navEl.classList.add('nav-card');
    } else if (window.scrollY <= 500) {
      navEl.classList.add('navbar__inherit');
      navEl.classList.remove('nav-card');
    }
  });

  // onscroll when click find restaurant button
  const findRestoBtn = document.getElementById('findresto__button');
  const title = document.getElementById('title');

  findRestoBtn.addEventListener('click', () => {
    window.scrollTo(0, title.offsetTop - 70);
  });

  // onscroll when click skip to content
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

  // restaurant description detail
  const detailBtnEl = document.getElementsByClassName('resto__detail__btn');
  const restoDescEl = document.getElementsByClassName('restaurant__desc__close');
  const descArrowEl = document.getElementsByClassName('desc__arrow');

  for (let i = 0; i < detailBtnEl.length; i += 1) {
    detailBtnEl[i].addEventListener('click', () => {
      descArrowEl[i].classList.toggle('desc__arrow__see__detail');
      restoDescEl[i].classList.toggle('restaurant__desc__display');
    });
  }
};

export default events;
