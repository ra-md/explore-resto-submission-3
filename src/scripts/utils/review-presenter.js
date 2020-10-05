import { reviewForm, reviews } from '../views/templates/template-creator';

const ReviewInitiator = {
  init({
    reviewContainer,
    restaurantId,
    restaurantSource,
  }) {
    this._restaurantSource = restaurantSource;
    this._reviewContainer = reviewContainer;

    this._renderReviewForm();

    this._submit({
      restaurantId,
      name: document.getElementById('review-name'),
      review: document.getElementById('review'),
    });
  },
  _renderReviewForm() {
    this._reviewContainer.innerHTML = reviewForm();
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
      this._setReview(response.customerReviews);
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
  _setReview(consumerReviews) {
    document.querySelector('.consumer-reviews__list').innerHTML = reviews(consumerReviews);

    this._renderReviewForm();

    document.querySelector('.consumer-reviews__list').dispatchEvent(new Event('review:updated'));
  },
};

export default ReviewInitiator;
