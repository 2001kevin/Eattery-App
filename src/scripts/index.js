import 'regenerator-runtime'; /* for async await transpile */
import App from './views/app';
import '../styles/main.css';
import swRegister from './utils/sw-register';


const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});


// const skipToContent = document.querySelector('.skip-link');
// skipToContent.addEventListener('click', () => {
//   document.querySelector('#maindetail').focus();
// });
