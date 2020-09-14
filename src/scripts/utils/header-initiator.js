const HeaderInitiator = {
  init({ header, button, nav }, options) {
    this._hideDrawerOnTabletAndUp(nav);

    nav.addEventListener('click', (event) => {
      this._closeDrawer(event, nav);
    });

    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, nav);
    });

    document.addEventListener('scroll', (event) => {
      this._scrollEvent(event, header);
    });

    this._headerOptions(header, options);
  },

  _hideDrawerOnTabletAndUp(nav) {
    this._toggleDrawerElem(nav);

    // Prevent event for chrome devtools
    window.addEventListener('resize', () => {
      this._toggleDrawerElem(nav);
    });
  },

  _toggleDrawerElem(nav) {
    if (window.innerWidth >= 640) {
      nav.removeAttribute('id');
    } else {
      nav.setAttribute('id', 'drawer');
    }
  },

  _toggleDrawer(event, nav) {
    event.stopPropagation();
    nav.classList.toggle('active');
  },

  _closeDrawer(event, nav) {
    event.stopPropagation();
    nav.classList.remove('active');
  },

  _scrollEvent(event, header) {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      header.classList.add('onscroll');
    } else {
      header.classList.remove('onscroll');
    }

    event.stopPropagation();
  },

  _headerOptions(header, { fixed = false } = {}) {
    if (fixed) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  },
};

export default HeaderInitiator;
