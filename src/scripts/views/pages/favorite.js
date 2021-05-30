import FavoriteRestaurantsIdb from '../../data/favoriteRestaurantsIDB';
import { createRestaurantCardTemplate, createDataNotFoundTemplate } from '../templates/templateCreator';

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
      favoriteRestaurantsContainer.innerHTML = createDataNotFoundTemplate("You don't have any favorite restaurant");
    } else {
      favoriteRestaurants.forEach((restaurant) => {
        favoriteRestaurantsContainer.innerHTML += createRestaurantCardTemplate(restaurant);
      });
    }
    this._events();
  },

  async _events() {
    window.scrollTo(0, 0);
  },
};

export default Favorite;
