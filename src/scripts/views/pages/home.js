import RestaurantDbSource from '../../services/api';

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
    </div>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurants');

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
      })
      .catch((error) => {
        console.log(error);
        restaurantsContainer.innerHTML = '';
        const errorMessageElement = document.createElement('error-message');
        restaurantsContainer.appendChild(errorMessageElement);
        document.querySelector('error-message').message = error.message;
      });
  },
};

export default Home;
