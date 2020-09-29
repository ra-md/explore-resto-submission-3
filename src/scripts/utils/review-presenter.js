import { restaurantDetailTemplate, reviewForm } from '../views/templates/template-creator';

const ReviewInitiator = {
  init({
    reviewContainer,
    restaurant,
    restaurantSource,
  }) {
    this._restaurantSource = restaurantSource;
    this._restaurant = restaurant;

    reviewContainer.innerHTML = reviewForm();

    this._submit({
      restaurantId: restaurant.id,
      name: document.getElementById('review-name'),
      review: document.getElementById('review'),
    });
  },
  _submit({ restaurantId, name, review }) {
    const submitBtn = document.querySelector('.review-form__submit');

    submitBtn.addEventListener('click', (event) => {
      event.preventDefault();

      const nameValue = name.value;
      const reviewValue = review.value;

      if (nameValue.length === 0 && reviewValue.length === 0) {
        this._setErrorMessage('nama dan review harus diisi!');
      } else if (nameValue.length === 0) {
        this._setErrorMessage('nama harus diisi!');
      } else if (reviewValue.length === 0) {
        this._setErrorMessage('review harus diisi!');
      } else {
        this._setLoading({ elm: submitBtn });
        this._postReview({
          id: restaurantId,
          name: nameValue,
          review: reviewValue,
        });
      }
    });
  },
  async _postReview(reviewBody) {
    const response = await this._restaurantSource.reviewRestaurant(reviewBody);

    if (response.error) {
      this._setErrorMessage(response.message);
    } else {
      this._setRestaurant({ ...this._restaurant, consumerReviews: response.customerReviews });
      window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
  },
  _setErrorMessage(message) {
    const messageElm = document.querySelector('.review-message');
    messageElm.innerHTML = message;
  },
  _setLoading({ elm }) {
    elm.setAttribute('disabled', true);
    elm.setAttribute('value', 'Loading...');
  },
  _setRestaurant(restaurant) {
    const restaurantElm = document.getElementById('restaurant');
    restaurantElm.innerHTML = restaurantDetailTemplate(restaurant);
  },
};

export default ReviewInitiator;
