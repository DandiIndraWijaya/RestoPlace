const OnLoad = {
  init(loader) {
    window.addEventListener('load', () => {
      this._loader = loader;
      this._onLoad(loader);
    });
  },

  _onLoad() {
    setTimeout(() => {
      // eslint-disable-next-line no-param-reassign
      this._loader.className += ' hidden';
    }, 2000);
  },
};

export default OnLoad;
