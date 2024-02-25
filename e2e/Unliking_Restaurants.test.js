/* eslint-disable no-undef */
Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
  I.seeElement('a span.name');

  const firstRestaurant = locate('a span.name').first();
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.seeElement('restaurant-item');

  const likedRestaurant = locate('a span.name').first();
  I.click(likedRestaurant);

  I.seeElement('#likedButton');
  I.click('#likedButton');

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-list');
  I.see('List ini kosong.', '.empty-list-message');
});
