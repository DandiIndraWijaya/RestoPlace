/* eslint-disable linebreak-style */
class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div id="navbar" class="navbar navbar__inherit">
            <span class="links">
                <a href="/">Home</a>
                <a href="#">Favorite</a>
                <a href="https://www.instagram.com/dandiindrawijaya">About Us</a>
            </span>
            <div id="humberger">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>`;
  }
}

customElements.define('nav-bar', NavBar);
