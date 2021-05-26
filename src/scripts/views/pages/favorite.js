import FavoriteRestaurantsIdb from '../../data/favoriteRestaurantsIDB';
import { createRestaurantCardTemplate } from '../templates/templateCreator';
import { RestaurantCard } from '../../events';

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

    favoriteRestaurants.forEach((restaurant) => {
      favoriteRestaurantsContainer.innerHTML += createRestaurantCardTemplate(restaurant);
    });
  },

  async _events() {
    const buttons = document.querySelectorAll('.resto__detail__btn');
    const description = document.getElementsByClassName('restaurant__desc__close');
    const arrow = document.getElementsByClassName('desc__arrow');
    RestaurantCard.init({ buttons, description, arrow });
  },
};

export default Favorite;
