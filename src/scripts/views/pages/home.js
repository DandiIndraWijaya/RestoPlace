import DATA from '../../../DATA.json';
import { createRestaurantCardTemplate } from '../templates/template-creator';
import restaurantCard from '../../events/restaurantCard';

const Home = {
  async render() {
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
    DATA.restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantCardTemplate(restaurant);
    });

    const buttons = document.querySelectorAll('.resto__detail__btn');
    const description = document.getElementsByClassName('restaurant__desc__close');
    const arrow = document.getElementsByClassName('desc__arrow');
    restaurantCard.init({ buttons, description, arrow });
  },
};

export default Home;
