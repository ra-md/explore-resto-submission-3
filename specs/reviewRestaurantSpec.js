import ReviewPresenter from '../src/scripts/utils/review-presenter';
import RestaurantSourceApi from '../src/scripts/data/restaurant-source';
import fakeRestaurant from './data/fakeRestaurant.json';

describe('Reviewing a restaurant', () => {

  function assignReviewAValue(value) {
    const review = document.getElementById('review');
    review.value = value;
  }

  function assignNameAValue(value) {
    const name = document.getElementById('review-name');
    name.value = value;
  }

  function clickSubmit() {
    document.querySelector('.review-form__submit').dispatchEvent(new Event('click'));
  }

  beforeEach(async () => {
    document.body.innerHTML = '<div id="review-container"></div>';

    document.body.innerHTML += '<div id="restaurant"></div>';

    await ReviewPresenter.init({
      reviewContainer: document.getElementById('review-container'),
      restaurant: fakeRestaurant,
      restaurantSource: RestaurantSourceApi,
    });
  });

  it('should show "nama harus diisi!" when the name value is empty', () => {
    assignReviewAValue('fake review');

    clickSubmit();

    expect(document.querySelector('.review-message').textContent).toEqual('nama harus diisi!');
  });

  it('should show "review harus diisi!" when the review value is empty', () => {
    assignNameAValue('fake name');

    clickSubmit();

    expect(document.querySelector('.review-message').textContent).toEqual('review harus diisi!');
  });

  it('should show "nama dan review harus diisi!" when the name and review values are empty', () => {
    clickSubmit();

    expect(document.querySelector('.review-message').textContent).toEqual('nama dan review harus diisi!');
  });

  it('should show the review that has added', (done) => {

    const reviewBody = {
      id: fakeRestaurant.id,
      name: 'Fake name',
      review: 'fakeReview',
    };

    const fakeReview = {
      name: reviewBody.name,
      review: reviewBody.review,
      date: '28 September 2020',
    };

    spyOn(RestaurantSourceApi, 'reviewRestaurant')
      .withArgs(reviewBody).and.returnValues({
        customerReviews: fakeRestaurant.consumerReviews.concat(fakeReview),
      });

    assignNameAValue(fakeReview.name);
    assignReviewAValue(fakeReview.review);

    clickSubmit();

    document.getElementById('restaurant').addEventListener('review:updated', () => {
      const reviewList = document.querySelectorAll('.consumer-reviews__body');

      expect(document.querySelectorAll('.consumer-reviews__name')
        .item(reviewList.length - 1).textContent).toEqual(fakeReview.name);
      expect(document.querySelectorAll('.consumer-reviews__review')
        .item(reviewList.length - 1).textContent).toEqual(fakeReview.review);
      expect(document.querySelectorAll('.consumer-reviews__date')
        .item(reviewList.length - 1).textContent).toEqual(fakeReview.date);
      done();
    });

  });

});
