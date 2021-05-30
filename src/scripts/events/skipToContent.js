const SkipToContent = {
  init(button, content) {
    button.addEventListener('click', (event) => {
      this._content = content;
      event.preventDefault();
      this._gotToContent();
    });
  },

  _gotToContent() {
    window.scrollTo(0, this._content.offsetTop - 90);
  },
};

export default SkipToContent;
