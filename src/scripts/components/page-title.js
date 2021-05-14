/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */

class Title extends HTMLElement {
  set title(title) {
    this._title = title;
    this.render();
  }

  render() {
    const title = this._title;
    this.innerHTML = `
        <div id="title" class="title">
            <h2 tabindex="0">${title}</h2>
        </div>
        `;
  }
}

customElements.define('page-title', Title);
