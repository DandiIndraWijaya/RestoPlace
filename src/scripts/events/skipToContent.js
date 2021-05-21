const SkipToContent = {
  init(button, content) {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      this._gotToContent(content);
    });
  },

  _gotToContent(content) {
    window.scrollTo(0, content.offsetTop - 90);
  },
};

export default SkipToContent;
