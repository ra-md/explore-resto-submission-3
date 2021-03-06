import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurants-idb';
import testFactories from './helpers/testFactories';

describe('Liking a restaurant', () => {
  beforeEach(() => {
    testFactories.addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await testFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Like this restaurant"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await testFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await testFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    testFactories.clickFavBtn();

    const restaurant = await FavoriteRestaurantIdb.get(1);

    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestaurantIdb.delete(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await testFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantIdb.put({ id: 1 });

    testFactories.clickFavBtn();

    expect(await FavoriteRestaurantIdb.getAll()).toEqual([{ id: 1 }]);

    FavoriteRestaurantIdb.delete(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await testFactories.createLikeButtonPresenterWithRestaurant({});

    testFactories.clickFavBtn();

    expect(await FavoriteRestaurantIdb.getAll()).toEqual([]);
  });
});
