/* eslint-disable linebreak-style */
class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div id="navbar" class="navbar navbar__inherit">
            <span class="links">
              <span id="logo">
                <img tabIndex="0" src="/images/app/logo.png" width="110" alt="Restoplace Logo" />
              </span>
                <a href="/">Home</a>
                <a href="#">Favorite</a>
                <a href="https://www.instagram.com/dandi.i.wijaya">About Us</a>
            </span>
            <button aria-label="humberger" id="humberger" class="humberger">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </button>
        </div>`;
  }
}

customElements.define('nav-bar', NavBar);
