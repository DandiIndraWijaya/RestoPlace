class LikeButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <button aria-label="like this restaurant" id="like__button" class="like__button">
      <i class="fas fa-heart" aria-hidden="true"></i>
    </button>`;
  }
}

customElements.define('like-button', LikeButton);
