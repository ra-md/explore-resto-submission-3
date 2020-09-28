import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurants';

async function createLikeButtonPresenterWithRestaurant(restaurant) {
  await LikeButtonPresenter.init({
    favButtonContainer: document.getElementById('favButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
}

function clickFavBtn() {
  document.querySelector('#favButton').dispatchEvent(new Event('click'));
}

export {
  createLikeButtonPresenterWithRestaurant,
  clickFavBtn,
};
