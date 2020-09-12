const Drawer = {
  _hamburgerIcon: '☰',
  _closeIcon: '✖',
  init({
    drawer,
    button,
    body,
    navItems,
  }) {
    this._drawer = drawer;
    this._button = button;
    this._body = body;
    this._navItems = navItems;

    button.addEventListener('click', (event) => {
      this._toggleDrawer(event);
    });

    navItems.forEach((item) => {
      item.addEventListener('click', (event) => {
        this._closeDrawer(event);
      });
    });
  },
  _toggleDrawer(event) {
    event.stopPropagation();
    this._drawer.classList.toggle('nav--open');

    if (this._button.innerHTML === this._hamburgerIcon) {
      this._button.innerHTML = this._closeIcon;
      this._body.style.overflowY = 'hidden';
    } else {
      this._button.innerHTML = this._hamburgerIcon;
      this._body.style.overflowY = 'auto';
    }
  },
  _closeDrawer(event) {
    event.stopPropagation();
    this._body.style.overflowY = 'auto';
    this._drawer.classList.remove('nav--open');
    this._button.innerHTML = this._hamburgerIcon;
  },
};

export default Drawer;
