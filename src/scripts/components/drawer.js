/* eslint-disable linebreak-style */
class Drawer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div id="drawer" class="drawer">
            <div id="drawer__title">
                <h3>RestoPlace</h3>
            </div>
            <a tabindex="-1" href="/"><div class="link">Home</div></a>
            <a tabindex="-1" href="#"><div class="link">Favorite</div> </a>
            <a tabindex="-1" href="https://www.instagram.com/dandiindrawijaya"><div class="link">About Us</div></a>
        </div>
        `;
  }
}

customElements.define('drawer-nav', Drawer);
