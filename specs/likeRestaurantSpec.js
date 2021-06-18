/* eslint-disable no-undef */
import FavoriteRestaurantsIdb from '../src/scripts/data/favoriteRestaurantsIDB';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="like__button__container"></div>';
};

describe('Liking A Restaurant', () => {
  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({
      id: 1,
    });
    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({
      id: 1,
    });

    document.querySelector('#like__button').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantsIdb.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });
    FavoriteRestaurantsIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantsIdb.putRestaurant({ id: 1 });

    document.querySelector('#like__button').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantsIdb.getAllRestaurants()).toEqual([{ id: 1 }]);
    FavoriteRestaurantsIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector('#like__button').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantsIdb.getAllRestaurants()).toEqual([]);
  });
});
