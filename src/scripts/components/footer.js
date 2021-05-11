/* eslint-disable linebreak-style */
class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer tabindex="0">
            Copyright © 2020 - RestoPlace
        </footer>
        `;
  }
}

customElements.define('restoplace-footer', Footer);
