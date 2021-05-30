/* eslint-disable linebreak-style */
class Drawer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div id="drawer" class="drawer">
            <div id="drawer__title">
                <img tabIndex="0" src="/images/app/logo.png" width="110" alt="Restoplace Logo" />
            </div>
            <a href="/"><div class="link">Home</div></a>
            <a href="#/favorite"><div class="link">Favorite</div> </a>
            <a href="https://www.instagram.com/dandiindrawijaya"><div class="link">About Us</div></a>
        </div>
        `;
  }
}

customElements.define('drawer-nav', Drawer);
