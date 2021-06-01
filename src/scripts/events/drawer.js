const Drawer = {
  init({ drawerButton, drawer, content }) {
    this._drawerButton = drawerButton;
    this._drawer = drawer;

    this._drawerButton.addEventListener('click', (event) => {
      this._toggleDrawer(event);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawerButton, drawer);
    });
  },

  _toggleDrawer(event) {
    event.stopPropagation();
    this._drawerButton.classList.toggle('humberger__drawer__clicked');
    this._drawer.classList.toggle('drawer__open');
  },

  _closeDrawer(event) {
    event.stopPropagation();
    this._drawerButton.classList.remove('humberger__drawer__clicked');
    this._drawer.classList.remove('drawer__open');
  },
};

export default Drawer;
