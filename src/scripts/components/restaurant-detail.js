import CONFIG from '../config';

class RestaurantDetail extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="restaurant__detail__content" class="restaurant__detail__content">
    <div id="restaurant__detail__1" class="restaurant__detail__1 card">
      <div class="restaurant__picture">
        <div tabindex="0" class="name">${this._restaurant.name}</div>
        <img tabIndex="0" src="${CONFIG.BASE_IMAGE_URL.LARGE}${this._restaurant.pictureId}" alt="${this._restaurant.name} picture" />
        <div class="restaurant__like">
          <div id="like__button__container">
  
          </div>
        </div>
      </div>
      <div class="restaurant__detail__information">
        <div tabIndex="0" class="city">Kota. ${this._restaurant.city}, ${this._restaurant.address}</div>
        <div id="restaurant__rating__star"></div>
        <table>
          <tr>
            <td tabIndex="0">Categories </td>
            <td>
              ${this._restaurant.categories.map((category) => `<span tabIndex="0" class="category"> ${category.name}</span>`).join(' ')}
            </td>
          </tr>
          <tr>
          <td tabIndex="0">Foods </td>
            <td>
              ${this._restaurant.menus.foods.map((food) => `<div tabIndex="0" class="food"> ${food.name}</div>`).join(' ')}
            </td>
          </tr>
          <tr>
          <td tabIndex="0">Drinks </td>
            <td>
              ${this._restaurant.menus.drinks.map((drink) => `<div tabIndex="0" class="drink"> ${drink.name}</div>`).join(' ')}
            </td>
          </tr>
        </table>
      </div>
    </div>
     
    <div id="restaurant__detail__2" class="restaurant__detail__2">
      <article class="description card">
        <h3 tabIndex="0">Description</h3>
  
        <p tabIndex="0">${this._restaurant.description}</p>
      </article>
  
      <artilcle class="restaurant__reviews card">
        <h3 tabIndex="0">Reviews</h3>
        <hr class="line"/>
        <div id="add__review">
          <h5>Add Review</h5>
          <input id="user__name__input" placeholder="Your Name" />
          <textarea id="user__review__input" rows="1" cols="40" placeholder="Your Review" ></textarea>
          </br>
          <button id="add__review__button">Add</button>
          </br>
        </div>
        <div class="restaurant__reviews__container" id="restaurant__reviews__container">
          ${this._restaurant.customerReviews.reverse().map((review) => `<div class="restaurant__review">
          <div tabIndex="0" class="user__name">${review.name}</div>
          <div tabIndex="0" class="user__review"><p>${review.review.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p></div>
          <div tabIndex="0" class="review__date">${review.date}</div></div>`).join(' ')}
        </div>
      </article>
    </div>
    </section>
    `;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
