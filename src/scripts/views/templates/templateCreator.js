import CONFIG from '../../config';

const createRestaurantCardTemplate = (restaurant) => `
  <section class="restaurant">
    <div tabIndex="0" class="restaurant__city">
      Kota. ${restaurant.city}
    </div>
    <img tabIndex="0" src="${CONFIG.BASE_IMAGE_URL.MEDIUM}${restaurant.pictureId}" alt="${restaurant.name} picture" class="restaurant__picture" />
    <div class="restaurant__information">
      <div tabIndex="0" class="restaurant__name">
        ${restaurant.name}
      </div>
      <div tabIndex="0" class="restaurant__rating">
        Rating: ${restaurant.rating}
      </div>
    </div>
    <article class="restaurant__desc">
      <p tabIndex="0" class="restaurant__desc__close">
        ${restaurant.description}
      </p>
      </br>
      <a href="#/restaurant/${restaurant.id}" class="resto__detail__link">Detail</a>
    </article>
  </section>
`;

const createRestaurantDetailTemplate = () => `
  <section>

  </section>
`;

export {
  createRestaurantCardTemplate,
  createRestaurantDetailTemplate,
};
