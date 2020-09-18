import RestaurantSource from '../data/restaurant-source';
import { restaurantDetailTemplate } from '../views/templates/template-creator';

const ReviewInitiator = {
  init({
    submit,
    nameElm,
    reviewElm,
    messageElm,
    restaurantElm,
    restaurant,
  }) {
    this._messageElm = messageElm;
    this._submitBtn = submit;
    this._restaurantElm = restaurantElm;
    this._restaurant = restaurant;

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

    const response = await RestaurantSource.reviewRestaurant(reviewBody);
    console.log(response);
    if (response.error) {
      this._setErrorMessage(response.message);
    } else {
      this._restaurant.consumerReviews = response.customerReviews;
      this._setNewRestaurant();
    }
  },
  _setErrorMessage(message) {
    this._messageElm.innerHTML = message;
  },
  _setLoading() {
    this._submitBtn.setAttribute('disabled', true);
    this._submitBtn.setAttribute('value', 'Loading...');
  },
  _setNewRestaurant() {
    this._restaurantElm.innerHTML = restaurantDetailTemplate(this._restaurant);
  },
};

export default ReviewInitiator;
