/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('no liked restaurant', ({ I }) => {
  I.seeElement('restaurant-list');
  I.see('List ini kosong.', '.empty-list-message');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('List ini kosong.', '.empty-list-message');

  I.amOnPage('/');
  I.seeElement('a span.name');

  const firstRestaurant = locate('a span.name').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-item');

  const firstLikedRestaurant = locate('a span.name').first();
  const firstLikedRestaurantTitle = await I.grabTextFrom(firstLikedRestaurant);

  assert.strictEqual(firstRestaurantTitle, firstLikedRestaurantTitle);
});

Scenario('liking two restaurant', async ({ I }) => {
  I.see('List ini kosong.', '.empty-list-message');

  I.amOnPage('/');
  I.seeElement('a span.name');

  const likedTitle = [];

  for (let i = 1; i <= 2; i++) {
    const restaurant = locate('a span.name').at(i);
    I.click(restaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    const restaurantTitle = await I.grabTextFrom('figcaption.name');
    likedTitle.push(restaurantTitle);

    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-item');

  const likedRestaurant = await I.grabNumberOfVisibleElements('restaurant-item');
  assert.strictEqual(likedTitle.length, likedRestaurant);

  likedTitle.forEach(async (title, index) => {
    const visibleTitle = await I.grabTextFrom(locate('a span.name').at(index + 1));
    assert.strictEqual(title, visibleTitle);
  });
});
