import CONFIG from '../../config';

const createRestaurantCardTemplate = (restaurant) => `
  <section id="restaurant" class="restaurant">
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

const createRestaurantDetailTemplate = (restaurant) => `
  <div id="title" class="title">
    <h2 tabindex="0">Restaurant Detail</h2>
  </div>
  <section id="restaurant__detail__content" class="restaurant__detail__content card">
  <div id="restaurant__detail__1" class="restaurant__detail__1">
    <div class="restaurant__picture">
      <div class="name">${restaurant.name}</div>
      <img tabIndex="0" src="${CONFIG.BASE_IMAGE_URL.LARGE}${restaurant.pictureId}" alt="${restaurant.name} picture" />
    </div>
    <div class="restaurant__detail__information">
      <div class="city">Kota. ${restaurant.city}, ${restaurant.address}</div>
      <table>
        <tr>
          <td>Rating</td>
          <td><span class="rating">${restaurant.rating} </span></td>
        </tr>
        <tr>
          <td>Categories </td>
          <td>
            ${restaurant.categories.map((category) => `<span class="category"> ${category.name}</span>`).join(' ')}
          </td>
        </tr>
        <tr>
        <td>Foods </td>
          <td>
            ${restaurant.menus.foods.map((food) => `<div class="food"> ${food.name}</div>`).join(' ')}
          </td>
        </tr>
        <tr>
        <td>Drinks </td>
          <td>
            ${restaurant.menus.drinks.map((drink) => `<div class="drink"> ${drink.name}</div>`).join(' ')}
          </td>
        </tr>
      </table>
    </div>
  </div>
   
  <div id="restaurant__detail__2" class="restaurant__detail__2">
    <div class="description">
      <h3>Description</h3>

      <p>${restaurant.description}</p>
    </div>

    <div class="restaurant__reviews">
      <h3>Reviews</h3>
      ${restaurant.customerReviews.map((review) => `<div class="restaurant__review">
      <div class="user__name">${review.name}</div>
      <div class="user__review"><p>${review.review}</p></div>
      <div class="review__date">${review.date}</div></div>`).join(' ')}
    </div>
  </div>
  </section>
`;

export {
  createRestaurantCardTemplate,
  createRestaurantDetailTemplate,
};
