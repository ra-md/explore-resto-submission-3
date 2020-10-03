import RestaurantSourceApi from '../src/scripts/data/restaurant-source-api';
import HomePresenter from '../src/scripts/views/pages/home/home-presenter';
import HomeView from '../src/scripts/views/pages/home/home-view';
import fakeRestaurant from './data/fakeRestaurant.json';

describe('Showing restaurant list', () => {
  const view = new HomeView();

  function createHomePresenter(restaurantSource) {
    return new HomePresenter({
      view,
      restaurantSource,
    });
  }

  function createSpy(customReturnValues = []) {
    spyOn(RestaurantSourceApi, 'restaurantList').and.returnValues(customReturnValues);
  }

  beforeEach(() => {
    document.body.innerHTML = '<div id="restaurants-list"></div>';
  });

  it('should ask for the restaurants list', async () => {
    createSpy();

    createHomePresenter(RestaurantSourceApi);

    expect(RestaurantSourceApi.restaurantList).toHaveBeenCalledTimes(1);
  });

  it('should be able to show an error message', (done) => {     
    createSpy();

    createHomePresenter(RestaurantSourceApi);      

    document.getElementById('restaurants-list').addEventListener('restaurants:updated', () => {
      expect(document.querySelector('.error-message')).toBeTruthy();
      done();
    });
  });

  it('should show the restaurants list', (done) => {
    createSpy({ restaurants: [fakeRestaurant, fakeRestaurant] });

    createHomePresenter(RestaurantSourceApi);

    document.getElementById('restaurants-list').addEventListener('restaurants:updated', () => {
      expect(document.querySelectorAll('.restaurant').length).toEqual(2);
      done();
    });
  });

});
