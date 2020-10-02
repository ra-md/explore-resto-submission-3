const assert = require('assert');
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
    likeRestaurant: async function() {
      this.amOnPage('/');

      this.seeElement('.restaurant-body__name');

      const firstRestaurant = locate('.restaurant-body__name').first();
      const firstRestaurantName = await this.grabTextFrom(firstRestaurant);
      this.click(firstRestaurant);

      const likeRestaurantButton = '[aria-label="Like this restaurant"]';

      this.seeElement(likeRestaurantButton);
      this.click(likeRestaurantButton);

      this.amOnPage('/#/favorite');
      this.seeElement('.restaurant');
      const likedRestaurantName = await this.grabTextFrom('.restaurant-body__name');

      assert.strictEqual(firstRestaurantName, likedRestaurantName);
    },
    seeEmptyRestaurant: function() {
      this.see('Tidak ada restaurant untuk ditampilkan', '.favorite-restaurant-not-found');
    },
  });
}
