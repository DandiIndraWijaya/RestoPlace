/* eslint-disable linebreak-style */
class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div tabIndex="0">
            Copyright © 2021 - RestoPlace
        </div>
        `;
  }
}

customElements.define('restoplace-footer', Footer);
