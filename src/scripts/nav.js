const loadNav = () => {
  const menu = document.querySelector('#menu');
  const drawer = document.querySelector('#drawer');

  // Preven event when on tablet and up
  if (innerWidth >= 640) {
    drawer.removeAttribute('id');
  }

  // Preven event for chrome devtools
  window.addEventListener('resize', () => {
    if (innerWidth >= 640) {
      drawer.removeAttribute('id');
    } else {
      drawer.setAttribute('id', 'drawer');
    }
  });

  menu.addEventListener('click', (event) => {
    drawer.classList.toggle('active');
    event.stopPropagation();
  });

  drawer.addEventListener('click', (event) => {
    drawer.classList.toggle('active');
    event.stopPropagation();
  });

  document.addEventListener('scroll', (event) => {
    const header = document.querySelector('header');

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      header.classList.add('onscroll');
    } else {
      header.classList.remove('onscroll');
    }

    event.stopPropagation();
  });
};

export default loadNav;
