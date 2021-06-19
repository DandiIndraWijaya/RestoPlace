/* eslint-disable no-param-reassign */
import RestaurantDbSource from '../../services/api';
import REVIEWS from '../../data/REVIEWS.json';

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
      <div class="reviews__container" id="reviews__container">
        <div class="review__title">
          <h2 tabIndex="0">RestoPlace Reviews</h2>
        </div>
        <div class="reviews">

        <div>
      </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurants');
    const reviewsContainer = document.querySelector('.reviews');
    RestaurantDbSource.listRestaurants()
      .then((response) => response.json())
      .then((responseJson) => {
        restaurantsContainer.innerHTML = '';
        responseJson.restaurants.forEach((restaurant, i) => {
          const restaurantCardElement = document.createElement('restaurant-card');
          restaurantCardElement.classList.add(`restaurant__card__${i + 1}`);
          restaurantsContainer.appendChild(restaurantCardElement);
          document.querySelector(`.restaurant__card__${i + 1}`).restaurant = restaurant;
        });

        REVIEWS.reviews.map((review, i) => {
          const restoplaceReviewCardElement = document.createElement('restoplace-review-card');
          restoplaceReviewCardElement.classList.add(`restoplace__review__${i + 1}`);
          restoplaceReviewCardElement.classList.add('review');
          restoplaceReviewCardElement.classList.add('card');

          reviewsContainer.appendChild(restoplaceReviewCardElement);
          document.querySelector(`.restoplace__review__${i + 1}`).review = review;
        });
      })
      .catch((error) => {
        this._renderError(error.message, restaurantsContainer);
      });
  },

  async _renderError(message, restaurantsContainer) {
    restaurantsContainer.innerHTML = '';
    const errorMessageElement = document.createElement('error-message');
    restaurantsContainer.appendChild(errorMessageElement);
    document.querySelector('error-message').message = message;
  },
};

export default Home;
