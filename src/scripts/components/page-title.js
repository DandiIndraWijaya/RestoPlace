/* eslint-disable linebreak-style */
class Title extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div id="title" class="title">
            <h2 tabindex="0">Explore Restaurant</h2>
        </div>
        `;
  }
}

customElements.define('page-title', Title);
