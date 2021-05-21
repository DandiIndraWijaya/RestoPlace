import RestaurantDbSource from '../../data/restaurantDbSource';
import { createRestaurantCardTemplate } from '../templates/templateCreator';
import { Hero, RestaurantCard } from '../../events';

const Home = {
  async render() {
    Hero.init();
    return `
    <div class="content">
      <div id="title" class="title">
          <h2 tabindex="0">Explore Restaurant</h2>
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
    RestaurantCard.init({ buttons, description, arrow });
  },
};

export default Home;
