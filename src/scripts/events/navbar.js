const Navbar = {
  init(navbar) {
    document.addEventListener('scroll', () => {
      this._onScroll(navbar);
    });
  },

  _onScroll(navbar) {
    if (window.scrollY > 500) {
      navbar.classList.remove('navbar__inherit');
      navbar.classList.add('nav-card');
    } else if (window.scrollY <= 500) {
      navbar.classList.add('navbar__inherit');
      navbar.classList.remove('nav-card');
    }
  },
};

export default Navbar;
