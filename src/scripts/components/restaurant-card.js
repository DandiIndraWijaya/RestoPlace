import CONFIG from '../config';

class RestaurantCard extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="restaurant" class="restaurant container__skeleton">
      <div tabIndex="0" class="restaurant__city">
        Kota. ${this._restaurant.city}
      </div>
      <div class="restaurant__picture__container">
        <img tabIndex="0" data-src="${CONFIG.BASE_IMAGE_URL.MEDIUM}${this._restaurant.pictureId}" alt="${this._restaurant.name} picture" class="lazyload restaurant__picture" />
      </div>
      <div class="restaurant__information">
        <div tabIndex="0" class="restaurant__name">
          ${this._restaurant.name}
        </div>
        <div tabIndex="0" class="restaurant__rating">
          Rating: ${this._restaurant.rating}
        </div>
      </div>
      <article class="restaurant__desc">
        <p tabIndex="0">
          ${this._restaurant.description}
        </p>
        </br>
        <a href="#/restaurant/${this._restaurant.id}" class="resto__detail__link">
          <div class="link">
            Detail
          </div>
        </a>
      </article>
    </section>`;
  }
}

customElements.define('restaurant-card', RestaurantCard);
