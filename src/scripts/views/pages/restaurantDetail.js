import UrlParser from '../../routes/urlParser';
import RestaurantDbSource from '../../services/api';
import { createRestaurantDetailTemplate, createErrorTemplate, createRatingStarTemplate } from '../templates/templateCreator';
import { LikeButton, AddReview } from '../../events';

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

        const likeButtonContainer = document.querySelector('#like__button__container');
        const restaurantRatingContainer = document.querySelector('#restaurant__rating__star');
        const addReviewButton = document.querySelector('#add__review__button');
        const userNameInput = document.querySelector('#user__name__input');
        const userReviewInput = document.querySelector('#user__review__input');
        const restaurantReviewsContainer = document.querySelector('#restaurant__reviews__container');

        createRatingStarTemplate(restaurantRatingContainer, restaurantData.rating);
        this._events(restaurantData, likeButtonContainer, addReviewButton, userNameInput, userReviewInput, restaurantReviewsContainer);
      })
      .catch((error) => {
        console.log(error);
        restaurantDetailContainer.innerHTML = createErrorTemplate(error.message);
      });
  },

  async _events(restaurantData, likeButtonContainer, addReviewButton, userNameInput, userReviewInput, restaurantReviewsContainer) {
    window.scrollTo(0, 0);

    LikeButton.init({
      likeButtonContainer,
      restaurant: restaurantData,
    });

    AddReview.init({
      addReviewButton,
      restaurantId: restaurantData.id,
      userNameInput,
      userReviewInput,
      restaurantReviewsContainer,
    });
  },

};

export default RestaurantDetail;
