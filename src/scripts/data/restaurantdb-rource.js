import API_ENDPOINT from '../config/api';

class RestaurantDbSource {
  static listRestaurants() {
    fetch(API_ENDPOINT.LIST_RESTAURANTS)
      .then((response) => response.json())
      .then((responseJson) => responseJson.restaurants)
      .catch((error) => {
        console.log(error);
      });
  }
}

export default RestaurantDbSource;
