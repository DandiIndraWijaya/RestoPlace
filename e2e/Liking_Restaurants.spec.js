/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#favorite__restaurants');

  I.see("You don't have any favorite restaurant", '.data__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see("You don't have any favorite restaurant", '.data__not__found');

  I.amOnPage('/');

  I.seeElement('.resto__detail__link');

  const firstRestaurant = locate('.resto__detail__link').first();
  const locateFirstRestaurantName = await locate('.restaurant__name').first();
  const firstRestaurantName = await I.grabTextFrom(locateFirstRestaurantName);

  // Tunggu sampai loader logo selesai
  I.wait(3);
  I.click(firstRestaurant);
  I.seeElement('#like__button');
  I.click('#like__button');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__card__1');
  const likedRestaurantName = await I.grabTextFrom('.restaurant__name');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});
