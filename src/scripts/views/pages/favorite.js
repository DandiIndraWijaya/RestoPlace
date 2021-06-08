/* eslint-disable no-param-reassign */
import FavoriteRestaurantsIdb from '../../data/favoriteRestaurantsIDB';

const Favorite = {
  async render() {
    return `
    <div class="content">
      <div id="favorite__restaurants" class="favorite__restaurants">
          <div id="title" class="title">
            <h2 tabindex="0">Favorite</h2>  
          </div>
          <div id="favorite__restaurants__content">

          </div>
      </div>
    </div>
    `;
  },

  async afterRender() {
    const favoriteRestaurantsContainer = document.querySelector('#favorite__restaurants__content');
    const favoriteRestaurants = await FavoriteRestaurantsIdb.getAllRestaurants();

    if (favoriteRestaurants.length === 0) {
      this._renderNotFoundMessage(favoriteRestaurantsContainer);
    } else {
      favoriteRestaurants.forEach((restaurant, i) => {
        const restaurantCardElement = document.createElement('restaurant-card');
        restaurantCardElement.classList.add(`restaurant__card__${i + 1}`);
        favoriteRestaurantsContainer.appendChild(restaurantCardElement);
        document.querySelector(`.restaurant__card__${i + 1}`).restaurant = restaurant;
      });
    }
    this._events();
  },

  async _renderNotFoundMessage(favoriteRestaurantsContainer) {
    favoriteRestaurantsContainer.innerHTML = '';
    const errorMessageElement = document.createElement('data-not-found-message');
    favoriteRestaurantsContainer.appendChild(errorMessageElement);
    document.querySelector('data-not-found-message').message = "You don't have any favorite restaurant";
    this._events();
  },

  async _events() {
    window.scrollTo(0, 0);
  },

};

export default Favorite;
