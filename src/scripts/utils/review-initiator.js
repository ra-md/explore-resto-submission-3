import { restaurantDetailTemplate } from '../views/templates/template-creator';

const ReviewInitiator = {
  init({
    submit,
    nameElm,
    reviewElm,
    messageElm,
    restaurantElm,
    restaurant,
    restaurantSource,
  }) {
    this._messageElm = messageElm;
    this._submitBtn = submit;
    this._restaurantElm = restaurantElm;
    this._restaurant = restaurant;
    this._restaurantSource = restaurantSource;

    this._submitBtn.addEventListener('click', (e) => {
      e.preventDefault();

      this._name = nameElm.value;
      this._review = reviewElm.value;

      if (this._name.length === 0 && this._review.length === 0) {
        this._setErrorMessage('nama dan review harus diisi!');
      } else if (this._name.length === 0) {
        this._setErrorMessage('nama harus diisi!');
      } else if (this._review.length === 0) {
        this._setErrorMessage('review harus diisi!');
      } else {
        this._setLoading();
        this._postReview(restaurant.id);
      }
    });
  },
  async _postReview(id) {
    const reviewBody = {
      id,
      name: this._name,
      review: this._review,
    };

    const response = await this._restaurantSource.reviewRestaurant(reviewBody);

    if (response.error) {
      this._setErrorMessage(response.message);
    } else {
      this._setRestaurant({ ...this._restaurant, consumerReviews: response.customerReviews });
      window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
  },
  _setErrorMessage(message) {
    this._messageElm.innerHTML = message;
  },
  _setLoading() {
    this._submitBtn.setAttribute('disabled', true);
    this._submitBtn.setAttribute('value', 'Loading...');
  },
  _setRestaurant(restaurant) {
    this._restaurantElm.innerHTML = restaurantDetailTemplate(restaurant);
  },
};

export default ReviewInitiator;
