import RestaurantDbSource from '../../data/restaurantDbSource';
import { createRestaurantCardTemplate } from '../templates/templateCreator';
import restaurantCard from '../../events/restaurantCard';

const Favorite = {
  async render() {
    return `
    <div class="content">
      <div id="title" class="title">
          <h2 tabindex="0">Favorite</h2>
      </div>
      <div id="restaurants" class="restaurants">

      </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurants');
    RestaurantDbSource.listRestaurants()
      .then((response) => response.json())
      .then((responseJson) => {
        responseJson.restaurants.forEach((restaurant) => {
          restaurantsContainer.innerHTML += createRestaurantCardTemplate(restaurant);
        });
        this._events();
      });
  },

  async _events() {
    const buttons = document.querySelectorAll('.resto__detail__btn');
    const description = document.getElementsByClassName('restaurant__desc__close');
    const arrow = document.getElementsByClassName('desc__arrow');
    restaurantCard.init({ buttons, description, arrow });
  },
};

export default Favorite;
