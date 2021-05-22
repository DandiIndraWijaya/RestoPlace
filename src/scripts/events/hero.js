import UrlParser from '../routes/urlParser';

const Hero = {
  init(hero) {
    this._onPage(hero);
  },

  _onPage(hero) {
    const url = UrlParser.parseActiveUrlWithCombiner();
    if (url === '/') {
      this._addHero(hero);
    } else {
      this._removeHero(hero);
    }
  },

  _addHero(hero) {
    hero.classList.remove('remove__hero');
  },

  _removeHero(hero) {
    hero.classList.add('remove__hero');
  },

};

export default Hero;
