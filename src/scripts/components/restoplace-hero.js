/* eslint-disable linebreak-style */
class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero__image">
            <div class="hero__paper">
                
            </div>
            <div class="hero__text">
                <h1 tabindex="0" style="font-size:50px">Welcome To RestoPlace</h1>
                <br>
                <button id="findresto__button">Find Restaurant</button>
            </div>
        </div>
        `;
  }
}

customElements.define('restoplace-hero', Hero);
