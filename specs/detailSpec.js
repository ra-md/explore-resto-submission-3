import DetailPresenter from '../src/scripts/views/pages/detail/detail-presenter';
import DetailView from '../src/scripts/views/pages/detail/detail-view';
import RestaurantSourceApi from '../src/scripts/data/restaurant-source-api';
import fakeRestaurant from './data/fakeRestaurant.json';

describe('Showing the restaurant detail', () => {
  const view = new DetailView();

  const responseError = {
    error: true,
    message: 'not found',
    restaurant: null,
  };

  function createDetailPresenter(id) {
    return new DetailPresenter({
      view,
      restaurantSource: RestaurantSourceApi,
      id,
    });
  }

  function createSpy(args = 1, returnValues = responseError) {
    spyOn(RestaurantSourceApi, 'restaurantDetail').withArgs(args).and.returnValues(returnValues);
  }

  beforeEach(() => {
    document.body.innerHTML = view.template;
  });

  describe('when id does not exist', () => {
    it('should ask for the restaurant detail', async () => {
      createSpy();

      await createDetailPresenter(1);
     
      expect(RestaurantSourceApi.restaurantDetail).toHaveBeenCalledTimes(1);
    });

    it('should show an error message', async () => {
      createSpy();

      await createDetailPresenter(1);

      expect(document.querySelector('.error-message')).toBeTruthy();
    });
  });

  describe('when restaurant exist', () => {
    it('should show a restaurant', async () => {
      createSpy(fakeRestaurant.id, { restaurant: fakeRestaurant });

      await createDetailPresenter(fakeRestaurant.id);

      expect(document.querySelector('.restaurant-detail__body')).toBeTruthy();
    });
  });

});
