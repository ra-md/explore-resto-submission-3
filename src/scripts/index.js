import 'regenerator-runtime';
import '../styles/style.scss';

import App from './views/app';

const app = new App({
  mainContent: document.getElementById('main-content'),
  button: document.querySelector('.header__menu'),
  drawer: document.querySelector('.nav'),
  body: document.querySelector('body'),
  navItems: document.querySelectorAll('.nav__list'),
});

window.addEventListener('load', () => {
  app.renderPage();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
