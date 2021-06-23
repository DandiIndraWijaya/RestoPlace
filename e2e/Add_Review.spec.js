/* eslint-disable no-undef */

Feature('Adding a Review');

Before(async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.resto__detail__link');

  const firstRestaurant = locate('.resto__detail__link').first();

  // Tunggu sampai loader logo selesai
  I.wait(3);
  I.click(firstRestaurant);
});

Scenario('showing add review input', ({ I }) => {
  I.seeElement('#add__review');
});

Scenario('add review without user name or user review', ({ I }) => {
  I.fillField('#user__name__input', 'Dandi Indra Wijaya');
  I.click(locate('.add__review__button'));
  I.see('Please Fill Name and Review Column', '.failed__add__review');

  I.fillField('#user__name__input', '');
  I.fillField('#user__review__input', 'Mantap makanannya enak');
  I.click(locate('.add__review__button'));
  I.see('Please Fill Name and Review Column', '.failed__add__review');

  I.fillField('#user__name__input', '');
  I.fillField('#user__review__input', '');
  I.click(locate('.add__review__button'));
  I.see('Please Fill Name and Review Column', '.failed__add__review');
});

Scenario('add review', ({ I }) => {
  I.fillField('#user__name__input', 'Dandi Indra Wijaya');
  I.fillField('#user__review__input', 'Mantap makanannya enak');
  I.click(locate('.add__review__button'));
  I.seeElement('.text__status__add__review');
});
