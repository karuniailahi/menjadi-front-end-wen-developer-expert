import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/root.css';
import '../styles/detail.css';
import '../styles/responsive.css';

import './components/app-bar';
import './components/footer-custom';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
  toggle: document.querySelector('#dark-mode'),
  currentTheme: localStorage.getItem('theme'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
