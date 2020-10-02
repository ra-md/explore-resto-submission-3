import DetailPresenter from '../src/scripts/views/pages/detail/detail-presenter';
import DetailView from '../src/scripts/views/pages/detail/detail-view';
import RestaurantSourceApi from '../src/scripts/data/restaurant-source-api';
import fakeRestaurant from './data/fakeRestaurant.json';

describe('Showing a restaurant', () => {
  const view = new DetailView();

  function createDetailPresenter(id) {
    return new DetailPresenter({
      view,
      restaurantSource: RestaurantSourceApi,
      id,
    });
  }

  beforeEach(() => {
    document.body.innerHTML = view.template;
  });

  describe('when id does not exist', () => {
    it('should ask for the restaurant detail', async () => {
      spyOn(RestaurantSourceApi, 'restaurantDetail');

      await createDetailPresenter(1);
     
      expect(RestaurantSourceApi.restaurantDetail).toHaveBeenCalledTimes(1);
    });

    it('should show an error message', async () => {

      spyOn(RestaurantSourceApi, 'restaurantDetail').withArgs(1).and.returnValues({
        error: true,
        message: 'not found',
        restaurant: null,
      });

      await createDetailPresenter(1);

      expect(document.querySelector('.error-message')).toBeTruthy();
    });
  });

  describe('when restaurant exist', () => {
    it('should show a restaurant', async () => {
      spyOn(RestaurantSourceApi, 'restaurantDetail').withArgs(fakeRestaurant.id).and.returnValues({
        restaurant: fakeRestaurant,
      });

      await createDetailPresenter(fakeRestaurant.id);

      expect(document.querySelector('.restaurant-detail__body')).toBeTruthy();
    });
  });

});
