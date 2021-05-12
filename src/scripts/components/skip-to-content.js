/* eslint-disable linebreak-style */
class SkipToContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <a href="#main__content" class="skip__to__content" id="skip__to__content">
            Skip to Content
        </a>
        `;
  }
}

customElements.define('skip-to-content', SkipToContent);
