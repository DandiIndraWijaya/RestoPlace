import UrlParser from '../routes/urlParser';

const Navbar = {
  init(navbar) {
    this._navbar = navbar;
    this._onPage();
  },

  _onPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    if (url === '/') {
      this._onScrollOnHomePage(this._navbar);
    } else {
      this._onScroll(this._navbar);
    }
  },

  _onScrollOnHomePage() {
    this._navbar.classList.add('navbar__inherit');
    this._navbar.classList.remove('nav-card');
    document.addEventListener('scroll', () => this._offsetRule(this._navbar));
  },

  _onScroll() {
    this._coloredNavbar(this._navbar);
    document.addEventListener('scroll', () => {
      this._coloredNavbar(this._navbar);
    });
  },

  _offsetRule() {
    if (window.scrollY > 1) {
      this._coloredNavbar(this._navbar);
    } else if (window.scrollY < 1) {
      this._inheritColorNavbar(this._navbar);
    }
  },

  _coloredNavbar() {
    this._navbar.classList.remove('navbar__inherit');
    this._navbar.classList.add('nav-card');
  },

  _inheritColorNavbar() {
    this._navbar.classList.add('navbar__inherit');
    this._navbar.classList.remove('nav-card');
  },
};

export default Navbar;
