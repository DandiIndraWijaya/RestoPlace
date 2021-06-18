/* eslint-disable import/prefer-default-export */
import likeButton from '../../src/scripts/events/likeButton';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await likeButton.init({
    likeButtonContainer: document.querySelector('#like__button__container'),
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
