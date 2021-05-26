import RestaurantDbSource from '../../services/api';
import { createRestaurantCardTemplate, createErrorTemplate } from '../templates/templateCreator';
import { RestaurantCard } from '../../events';

const Home = {
  async render() {
    return `
    <div class="content">
      <div id="home__title" class="home__title">
          <h2 tabindex="0">Explore Restaurant</h2>
      </div>
      <div id="restaurants" class="restaurants">
        <h2 class="loading">Loading...</h2>
      </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurants');
    RestaurantDbSource.listRestaurants()
      .then((response) => response.json())
      .then((responseJson) => {
        restaurantsContainer.innerHTML = '';
        responseJson.restaurants.forEach((restaurant) => {
          restaurantsContainer.innerHTML += createRestaurantCardTemplate(restaurant);
        });
        this._events();
      })
      .catch((error) => {
        console.log(error);
        restaurantsContainer.innerHTML = createErrorTemplate(error.message);
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
