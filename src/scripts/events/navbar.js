import UrlParser from '../routes/urlParser';

const Navbar = {
  init(navbar) {
    this._onPage(navbar);
  },

  _onPage(navbar) {
    const url = UrlParser.parseActiveUrlWithCombiner();
    if (url === '/') {
      this._onScrollOnHomePage(navbar);
    } else {
      this._onScroll(navbar);
    }
  },

  _onScrollOnHomePage(navbar) {
    navbar.classList.add('navbar__inherit');
    navbar.classList.remove('nav-card');
    document.addEventListener('scroll', () => this._offsetRule(navbar));
  },

  _onScroll(navbar) {
    this._coloredNavbar(navbar);
    document.addEventListener('scroll', () => {
      this._coloredNavbar(navbar);
    });
  },

  _offsetRule(navbar) {
    if (window.scrollY > 500) {
      this._coloredNavbar(navbar);
    } else if (window.scrollY <= 500) {
      this._inheritColorNavbar(navbar);
    }
  },

  _coloredNavbar(navbar) {
    navbar.classList.remove('navbar__inherit');
    navbar.classList.add('nav-card');
  },

  _inheritColorNavbar(navbar) {
    navbar.classList.add('navbar__inherit');
    navbar.classList.remove('nav-card');
  },
};

export default Navbar;
