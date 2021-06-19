/* eslint-disable import/prefer-default-export */
import FavoriteRestaurantsIdb from '../../src/scripts/data/favoriteRestaurantsIDB';
import likeButton from '../../src/scripts/events/likeButton';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await likeButton.init({
    likeButtonContainer: document.querySelector('#like__button__container'),
    favoriteRestaurants: FavoriteRestaurantsIdb,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
