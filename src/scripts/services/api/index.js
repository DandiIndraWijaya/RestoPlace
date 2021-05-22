import API_ENDPOINT from './endpoints';

class RestaurantDbSource {
  static listRestaurants() {
    return fetch(API_ENDPOINT.LIST_RESTAURANTS);
  }

  static restaurantDetail(id) {
    return fetch(`${API_ENDPOINT.DETAIL_RESTAURANT}${id}`);
  }
}

export default RestaurantDbSource;
