/* eslint-disable linebreak-style */
class Content extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div id="content" class="content">
        
      </div>
        `;
  }
}

customElements.define('page-content', Content);
