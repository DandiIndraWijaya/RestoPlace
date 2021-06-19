/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Restaurants');

Before(async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.resto__detail__link');

  const firstRestaurant = locate('.resto__detail__link').first();
  const locateFirstRestaurantName = locate('.restaurant__name').first();
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

Scenario('showing liked restaurants', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.seeElement('.resto__detail__link');
});

Scenario('unliking one restaurant', async ({ I }) => {
  const firstRestaurant = await locate('.resto__detail__link').first();
  I.wait(3);
  I.click(firstRestaurant);
  I.seeElement('#liked__button');
  I.click('#liked__button');
  I.amOnPage('/#/favorite');
  I.see("You don't have any favorite restaurant", '.data__not__found');
});
