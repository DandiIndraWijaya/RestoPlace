class RestoplaceReviewCard extends HTMLElement {
  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    this.innerHTML = `
    <section>
    <img tabIndex="0" src="${this._review.picture}" alt="${this._review.userName} Picture" />
      <div class="information">
        <div class="user__name">
          <span tabIndex="0">${this._review.userName}</span>
        </div>
        <div class="user__rating">
          <span tabIndex="0">Rate : ${this._review.rating} / 5</span>
        </div>
      </div>
    <hr>
    <div class="user__review">
      <p tabIndex="0">
        ${this._review.review}
      </p>
    </div>
  </section>
    `;
  }
}

customElements.define('restoplace-review-card', RestoplaceReviewCard);
