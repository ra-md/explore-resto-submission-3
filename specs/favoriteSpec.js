import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurants-idb';
import FavoritePresenter from '../src/scripts/views/pages/favorite/favorite-presenter';
import FavoriteView from '../src/scripts/views/pages/favorite/favorite-view';
import fakeRestaurant from './data/fakeRestaurant.json';

describe('Showing favorite restaurants', () => {
  const view = new FavoriteView();

  function createFavoritePresenter(favoriteRestaurant) {
    return new FavoritePresenter({
      view,
      favoriteRestaurant,
    });
  }

  function createSpy(returnValues = []) {
    const favorite = spyOnAllFunctions(FavoriteRestaurantIdb);
    favorite.getAll.and.returnValues(returnValues);
    return favorite;
  }

  beforeEach(() => {
    document.body.innerHTML = view.template;
  });

  describe('When no restaurants have been liked', () => {
    it('should ask for the favorite restaurants', () => {
      const favoriteRestaurant = createSpy();

      createFavoritePresenter(favoriteRestaurant);

      expect(favoriteRestaurant.getAll).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no restaurants have been liked', (done) => {     
      const favoriteRestaurant = createSpy();

      createFavoritePresenter(favoriteRestaurant);      

      document.getElementById('restaurants-list').addEventListener('restaurants:updated', () => {
        expect(document.querySelector('.favorite-restaurant-not-found')).toBeTruthy();
        done();
      });
    });

  });

  describe('When favorite restaurants exist', () => {
    it('should show the restaurants', (done) => {
      const favoriteRestaurant = createSpy([fakeRestaurant]);

      createFavoritePresenter(favoriteRestaurant);

      document.getElementById('restaurants-list').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.restaurant').length).toEqual(1);
        done();
      });

    });
  });

});
