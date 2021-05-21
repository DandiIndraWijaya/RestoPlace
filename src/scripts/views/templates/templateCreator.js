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
      <button class="resto__detail__btn">Detail</button><span class="desc__arrow">&darr;</span>
      <p tabIndex="0" class="restaurant__desc__close">
        ${restaurant.description}
      </p>
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
