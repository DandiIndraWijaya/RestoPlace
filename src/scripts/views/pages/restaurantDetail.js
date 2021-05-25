import UrlParser from '../../routes/urlParser';
import RestaurantDbSource from '../../services/api';
import { createRestaurantDetailTemplate } from '../templates/templateCreator';
import { LikeButton } from '../../events';

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
        const restaurantData = responseJson.restaurant;
        restaurantDetailContainer.innerHTML = createRestaurantDetailTemplate(restaurantData);
        this._events(restaurantData);
      });
  },

  async _events(restaurantData) {
    const likeButtonContainer = document.querySelector('#like__button__container');

    LikeButton.init({
      likeButtonContainer,
      restaurant: restaurantData,
    });
  },
};

export default RestaurantDetail;
