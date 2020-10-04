import 'regenerator-runtime';
import './assets'; // Assets for loader
import App from './views/app';
import HEADER_CONFIG from './global/header-config';
import swRegister from './utils/sw-register';

const { header, button, nav } = HEADER_CONFIG;

const app = new App({
  header,
  button,
  nav,
  skipLink: document.querySelector('.skip-link'),
  content: document.querySelector('main'),
});

// Needed for Hot Module Reload
if (module.hot) {
  module.hot.accept();
}

document.addEventListener('DOMContentLoaded', () => {
  swRegister();
  app.renderPage();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
