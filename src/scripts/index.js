import './assets'; // Assets for loader
import loadNav from './nav';

// Custom Elements
import './custom/fact-text';
import './custom/restaurant-list';

const main = () => {
  loadNav();
};

document.addEventListener('DOMContentLoaded', main);
