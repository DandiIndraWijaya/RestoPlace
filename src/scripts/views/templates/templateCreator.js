/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
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
      <p tabIndex="0">
        ${restaurant.description}
      </p>
      </br>
      <a href="#/restaurant/${restaurant.id}" class="resto__detail__link">
        <div class="link">
          Detail
        </div>
      </a>
    </article>
  </section>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <section id="restaurant__detail__content" class="restaurant__detail__content">
  <div id="restaurant__detail__1" class="restaurant__detail__1 card">
    <div class="restaurant__picture">
      <div tabindex="0" class="name">${restaurant.name}</div>
      <img tabIndex="0" src="${CONFIG.BASE_IMAGE_URL.LARGE}${restaurant.pictureId}" alt="${restaurant.name} picture" />
      <div class="restaurant__like">
        <div id="like__button__container">

        </div>
      </div>
    </div>
    <div class="restaurant__detail__information">
      <div tabIndex="0" class="city">Kota. ${restaurant.city}, ${restaurant.address}</div>
      <div id="restaurant__rating__star"></div>
      <table>
        <tr>
          <td tabIndex="0">Categories </td>
          <td>
            ${restaurant.categories.map((category) => `<span tabIndex="0" class="category"> ${category.name}</span>`).join(' ')}
          </td>
        </tr>
        <tr>
        <td tabIndex="0">Foods </td>
          <td>
            ${restaurant.menus.foods.map((food) => `<div tabIndex="0" class="food"> ${food.name}</div>`).join(' ')}
          </td>
        </tr>
        <tr>
        <td tabIndex="0">Drinks </td>
          <td>
            ${restaurant.menus.drinks.map((drink) => `<div tabIndex="0" class="drink"> ${drink.name}</div>`).join(' ')}
          </td>
        </tr>
      </table>
    </div>
  </div>
   
  <div id="restaurant__detail__2" class="restaurant__detail__2">
    <article class="description card">
      <h3 tabIndex="0">Description</h3>

      <p tabIndex="0">${restaurant.description}</p>
    </article>

    <artilcle class="restaurant__reviews card">
      <h3 tabIndex="0">Reviews</h3>
      <hr class="line"/>
      <div id="add__review">
        <h5>Add Review</h5>
        <input id="user__name__input" placeholder="Your Name" />
        <textarea id="user__review__input" rows="1" cols="40" placeholder="Your Review" ></textarea>
        </br>
        <button id="add__review__button">Add</button>
        </br>
      </div>
      <div class="restaurant__reviews__container" id="restaurant__reviews__container">
        ${restaurant.customerReviews.reverse().map((review) => `<div class="restaurant__review">
        <div tabIndex="0" class="user__name">${review.name}</div>
        <div tabIndex="0" class="user__review"><p>${review.review}</p></div>
        <div tabIndex="0" class="review__date">${review.date}</div></div>`).join(' ')}
      </div>
    </article>
  </div>
  </section>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="like__button" class="like__button">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="like this restaurant" id="liked__button" class="liked__button">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

const createErrorTemplate = (errorMessage) => `
  <div class="error">
    <div class="message">
      <span>${errorMessage}</span>
    </div>
    </br>
    <div class="reload">
      <a href="javascript:location.reload();"" class="redo">Reload &#8634;</a>
    </div>
  </div>
`;

const createDataNotFoundTemplate = (message) => `
  <div class="data__not__found">
    <h3>${message}</h3>
    </br>
    <i class="far fa-frown-open fa-7x"></i>
  </div>
`;

const createRatingStarTemplate = (element, rating) => {
  const ratingCountFloored = Math.floor(rating);
  const modulus = rating % 1;

  Array(ratingCountFloored).fill(0).map(() => {
    element.innerHTML += '<i class="fas fa-star fa-2x"></i>';
  });

  if (modulus > 0.4) {
    element.innerHTML += '<i class="fas fa-star-half-alt fa-2x"></i>';
  }

  element.innerHTML += `<h4>(${rating})</h4>`;
};

export {
  createRestaurantCardTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createErrorTemplate,
  createDataNotFoundTemplate,
  createRatingStarTemplate,
};
