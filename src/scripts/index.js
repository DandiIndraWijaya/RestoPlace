import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import './components/skip-to-content';
import './components/nav-bar';
import './components/drawer-nav';
import './components/restoplace-hero';
import './components/page-title';
import './components/page-content';
import './components/restoplace-footer';
import App from './app';

const app = new App({
  loader: document.querySelector('.loader'),
  skipToContentButton: document.getElementById('skip__to__content'),
  navbar: document.getElementById('navbar'),
  content: document.querySelector('#main__content'),
  drawer: document.querySelector('#drawer'),
  drawerButton: document.querySelector('#humberger'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
