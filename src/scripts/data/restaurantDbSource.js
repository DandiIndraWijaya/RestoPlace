import API_ENDPOINT from '../config/api';

class RestaurantDbSource {
  static listRestaurants() {
    return fetch(API_ENDPOINT.LIST_RESTAURANTS);
  }
}

export default RestaurantDbSource;
