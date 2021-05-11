import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import DATA from '../DATA.json';
import restaurants from './views/restaurants';
import './components/navbar';
import './components/drawer';
import './components/hero';
import './components/title';
import './components/container';
import './components/footer';

// display restaurants
restaurants(DATA.restaurants);

// fdsfs
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

// drawer
const humbergerEl = document.getElementById('humberger');
const drawerEl = document.getElementById('drawer');
humbergerEl.addEventListener('click', () => {
  humbergerEl.classList.toggle('humberger__drawer__clicked');
  drawerEl.classList.toggle('drawer__open');
});
