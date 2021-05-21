const Drawer = {
  init({ drawerButton, drawer, content }) {
    drawerButton.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawerButton, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawerButton, drawer);
    });
  },

  _toggleDrawer(event, drawerButton, drawer) {
    event.stopPropagation();
    drawerButton.classList.toggle('humberger__drawer__clicked');
    drawer.classList.toggle('drawer__open');
  },

  _closeDrawer(event, drawerButton, drawer) {
    event.stopPropagation();
    drawerButton.classList.remove('humberger__drawer__clicked');
    drawer.classList.remove('drawer__open');
  },
};

export default Drawer;
