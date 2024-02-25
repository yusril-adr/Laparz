/* eslint-disable no-undef */
Feature('Review a Restaurants');

const restaurantTestAt = 1;

Before(({ I }) => {
  I.amOnPage('/');
  I.seeElement('a span.name');

  const restaurantTest = locate('a span.name').at(restaurantTestAt);
  I.click(restaurantTest);
});

const reviewName = 'User test';
const reviewText = 'Review Test';

Scenario('Review a restaurant with name and text', async ({ I }) => {
  I.seeElement('review-list');

  I.seeElement('.review-post');
  I.fillField('#name', reviewName);
  I.fillField('#review', reviewText);
  I.click('button.send-btn');

  I.seeElement(locate('.review-name').withText(reviewName));
  I.seeElement(locate('.review-text').withText(reviewText));
});

Scenario('Review a restaurant without name', async ({ I }) => {
  I.seeElement('review-list');

  I.seeElement('.review-post');
  I.fillField('#review', reviewText);
  I.click('button.send-btn');

  I.seeElement(locate('.review-name').withText('Anonymous'));
  I.seeElement(locate('.review-text').withText(reviewText));
});
