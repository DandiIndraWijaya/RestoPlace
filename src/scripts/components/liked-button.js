class LikedButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <button aria-label="unlike this restaurant" id="liked__button" class="liked__button">
      <i class="fas fa-heart" aria-hidden="true"></i>
    </button>`;
  }
}

customElements.define('liked-button', LikedButton);
