import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurants';
import * as TestFactories from './helpers/testFactories';

 
describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="favButtonContainer"></div>';
  };

  function clickFavBtn() {
    document.querySelector('#favButton').dispatchEvent(new Event('click'));
  }

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.put({ id: 1 });
  });
 
  afterEach(async () => {
    await FavoriteRestaurantIdb.delete(1);
  });
 
  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
 
    expect(document.querySelector('[aria-label="Unlike this restaurant"]')).toBeTruthy();
  });
 
  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
 
    expect(document.querySelector('[aria-label="Like this restaurant"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
   
    clickFavBtn();
   
    expect(await FavoriteRestaurantIdb.getAll()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
   
    await FavoriteRestaurantIdb.delete(1);
   
    clickFavBtn();
   
    expect(await FavoriteRestaurantIdb.getAll()).toEqual([]);
  });

});
