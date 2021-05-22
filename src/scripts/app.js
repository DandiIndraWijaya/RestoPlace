/* eslint-disable linebreak-style */
import UrlParser from './routes/urlParser';
import routes from './routes/routes';
import {
  OnLoad, SkipToContent, Navbar, Drawer, Hero,
} from './events';

class App {
  constructor({
    loader, skipToContentButton, navbar, hero, content, drawerButton, drawer,
  }) {
    this._loader = loader;
    this._skipToContentButton = skipToContentButton;
    this._navbar = navbar;
    this._hero = hero;
    this._content = content;
    this._drawer = drawer;
    this._drawerButton = drawerButton;
    this._initialAppShell();
  }

  _initialAppShell() {
    OnLoad.init(this._loader);

    SkipToContent.init(this._skipToContentButton, this._content);

    Drawer.init({
      content: this._content,
      drawer: this._drawer,
      drawerButton: this._drawerButton,
    });
  }

  async renderPage() {
    Hero.init(this._hero);
    Navbar.init(this._navbar);
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}
export default App;
