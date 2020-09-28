import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurants';
import * as testFactories from './helpers/testFactories';
 
describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="favButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.put({ id: 1 });
  });
 
  afterEach(async () => {
    await FavoriteRestaurantIdb.delete(1);
  });
 
  it('should display unlike widget when the restaurant has been liked', async () => {
    await testFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
 
    expect(document.querySelector('[aria-label="Unlike this restaurant"]')).toBeTruthy();
  });
 
  it('should not display like widget when the restaurant has been liked', async () => {
    await testFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
 
    expect(document.querySelector('[aria-label="Like this restaurant"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await testFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
   
    testFactories.clickFavBtn()
   
    expect(await FavoriteRestaurantIdb.getAll()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await testFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
   
    await FavoriteRestaurantIdb.delete(1);
   
    testFactories.clickFavBtn()
   
    expect(await FavoriteRestaurantIdb.getAll()).toEqual([]);
  });

});
