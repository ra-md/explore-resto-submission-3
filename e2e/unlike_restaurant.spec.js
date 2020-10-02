const assert = require('assert');

Feature('Unlike restaurant');

Scenario('unlike a restaurant', async ({ I }) => {

  await I.likeRestaurant();

  I.amOnPage('/#/favorite');

  I.seeElement('.restaurant-body__name');

  const firstRestaurant = locate('.restaurant-body__name').first();
  I.click(firstRestaurant);

  const unlikeRestaurantButton = '[aria-label="Unlike this restaurant"]';

  I.seeElement(unlikeRestaurantButton);
  I.click(unlikeRestaurantButton);

  I.amOnPage('/#/favorite');

  I.seeEmptyRestaurant();

});
