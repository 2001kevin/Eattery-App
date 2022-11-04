const assert = require('assert');
// eslint-disable-next-line no-unused-vars
const {async} = require('regenerator-runtime');
/* eslint-disable new-cap */
Feature('Liking Restaurants');

Before(({I}) => {
  I.amOnPage('/#/favorite');
});

const emptyFavoriteRestaurantText = 'you are not liking any restaurant';

Scenario('showing empty liked restaurants', ({I}) => {
  I.seeElement('#list-container');
  I.see(emptyFavoriteRestaurantText, '#list-container');
});

Scenario('Liking Restaurant', async ({I}) => {
  I.see(emptyFavoriteRestaurantText, '#list-container');

  I.amOnPage('/');

  I.waitForElement('.post-content #detailButton');
  const firstRestaurant = locate('.post-content #detailButton').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');


  const favoriteRestaurantTitle = await I.grabTextFrom(
      '.post-content #detailButton',
  );
  assert.strictEqual(firstRestaurantTitle, favoriteRestaurantTitle);
});


