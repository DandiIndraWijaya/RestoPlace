import UrlParser from '../../routes/urlParser';
import RestaurantDbSource from '../../services/api';
import { createRestaurantDetailTemplate, createErrorTemplate } from '../templates/templateCreator';
import { LikeButton } from '../../events';

const RestaurantDetail = {
  async render() {
    return `
    <div class="content">
      <div id="title" class="title">
        <h2 tabindex="0">Restaurant Detail</h2>  
      </div>
      <div id="restaurant__detail" class="restaurant__detail">
        <h2 class="loading">Loading...</h2>
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
      })
      .catch((error) => {
        console.log(error);
        restaurantDetailContainer.innerHTML = createErrorTemplate(error.message);
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
