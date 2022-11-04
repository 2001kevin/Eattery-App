/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
const assert = require('assert');
const {features} = require('process');
const {async} = require('regenerator-runtime');

Feature('Unliking Restaurant');

Before(({I}) => {
  I.amOnPage('/#/favorite');
});

const emptyFavoriteRestaurantText = 'you are not liking any restaurant';

Scenario('showing empty liked restaurants', ({I}) => {
  I.seeElement('#list-container');
  I.see(emptyFavoriteRestaurantText, '#list-container');
});

Scenario('Unliking Restaurant', async ({I}) => {
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

  I.seeElement('.post-item');
  const likedRestaurantTitle = await I.grabTextFrom(
      '.post-content #detailButton',
  );
  I.click(likedRestaurantTitle);

  // URL: /resto/:id
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // URL: /#/favorite
  I.amOnPage('/#/favorite');
  I.seeElement('#list-container');
  I.dontSeeElement('.post-item');
  I.dontSeeElement('.post-item');
});
