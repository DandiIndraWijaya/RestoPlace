import UrlParser from '../../routes/urlParser';
import RestaurantDbSource from '../../services/api';
import { createRestaurantDetailTemplate } from '../templates/templateCreator';
import restaurantCard from '../../events/restaurantCard';

const RestaurantDetail = {
  async render() {
    return `
    <div class="content">
      <div id="restaurant__detail" class="restaurant__detail">

      </div>
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetailContainer = document.querySelector('#restaurant__detail');
    RestaurantDbSource.restaurantDetail(url.id)
      .then((response) => response.json())
      .then((responseJson) => {
        restaurantDetailContainer.innerHTML = createRestaurantDetailTemplate(responseJson.restaurant);
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

export default RestaurantDetail;
