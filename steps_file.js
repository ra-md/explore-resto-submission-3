const assert = require('assert');
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
    async likeRestaurant() {
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
    seeEmptyRestaurant() {
      this.see('Tidak ada restaurant untuk ditampilkan', '.favorite-restaurant-not-found');
    },
    clickTheFirstRestaurant() {
      this.amOnPage('/');

      this.seeElement('.restaurant-body__name');
      const firstRestaurant = locate('.restaurant-body__name').first();
      this.click(firstRestaurant);
    },
    fillAndSubmitTheReview({ name, review }) {
      this.seeElement('#review-name');
      this.fillField('Nama', name);

      this.seeElement('#review');
      this.fillField('Review', review);

      this.seeElement('.review-form__submit');
      this.click('.review-form__submit');
    },
  });
}
