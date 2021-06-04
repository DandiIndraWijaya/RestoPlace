class RatingStar extends HTMLElement {
  set rating(rating) {
    this._rating = rating;
    this.render();
  }

  render() {
    const ratingCountFloored = Math.floor(this._rating);
    const modulus = this._rating % 1;

    Array(ratingCountFloored).fill(0).map(() => {
      this.innerHTML += '<i class="fas fa-star fa-2x"></i>';
    });

    if (modulus > 0.4) {
      this.innerHTML += '<i class="fas fa-star-half-alt fa-2x"></i>';
    }

    this.innerHTML += `<h4>(${this._rating})</h4>`;
  }
}

customElements.define('rating-star', RatingStar);
