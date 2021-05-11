/* eslint-disable linebreak-style */
class Container extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div id="container" class="container">
        </div>
        `;
  }
}

customElements.define('page-container', Container);
