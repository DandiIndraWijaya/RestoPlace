/* eslint-disable linebreak-style */
class Content extends HTMLElement {
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

customElements.define('page-content', Content);
