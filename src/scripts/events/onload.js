const OnLoad = {
  init(loader) {
    window.addEventListener('load', () => [
      this._onLoad(loader),
    ]);
  },

  _onLoad(loader) {
    setTimeout(() => {
      // eslint-disable-next-line no-param-reassign
      loader.className += ' hidden';
    }, 2000);
  },
};

export default OnLoad;
