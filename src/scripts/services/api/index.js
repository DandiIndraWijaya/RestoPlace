import API_ENDPOINT from './endpoints';
import CONFIG from '../../config';

class RestaurantDbSource {
  static listRestaurants() {
    return fetch(API_ENDPOINT.LIST_RESTAURANTS);
  }

  static restaurantDetail(id) {
    return fetch(`${API_ENDPOINT.DETAIL_RESTAURANT}${id}`);
  }

  static async postReviewOnRestaurant({ id, name, review }) {
    const response = await fetch(`${API_ENDPOINT.POST_REVIEW_ON_RESTAURANT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.API_KEY,
      },
      body: JSON.stringify({ id, name, review }),
    });

    return response.json();
  }
}

export default RestaurantDbSource;
