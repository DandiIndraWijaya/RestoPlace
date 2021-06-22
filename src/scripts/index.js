import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.scss';
import './components/skip-to-content';
import './components/nav-bar';
import './components/drawer-nav';
import './components/restoplace-hero';
import './components/page-title';
import './components/page-content';
import './components/restoplace-footer';
import './components/restaurant-card';
import './components/retoplace-review-card';
import './components/error-message';
import './components/data-not-found-message';
import './components/like-button';
import './components/liked-button';
import './components/rating-star';
import './components/restaurant-detail';
import App from './app';
import swRegister from './services/pwa/swRegister';

const app = new App({
  loader: document.querySelector('.loader'),
  skipToContentButton: document.getElementById('skip__to__content'),
  navbar: document.getElementById('navbar'),
  hero: document.getElementById('hero'),
  content: document.querySelector('#main__content'),
  drawer: document.querySelector('#drawer'),
  drawerButton: document.querySelector('#humberger'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
