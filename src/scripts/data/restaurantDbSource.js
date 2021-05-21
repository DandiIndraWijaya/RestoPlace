import API_ENDPOINT from '../services/api';

class RestaurantDbSource {
  static listRestaurants() {
    return fetch(API_ENDPOINT.LIST_RESTAURANTS);
  }
}

export default RestaurantDbSource;
