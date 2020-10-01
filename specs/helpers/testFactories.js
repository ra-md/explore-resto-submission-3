import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurants-idb';

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

function addLikeButtonContainer() {
  document.body.innerHTML = '<div id="favButtonContainer"></div>';
};

export default {
  createLikeButtonPresenterWithRestaurant,
  clickFavBtn,
  addLikeButtonContainer,
};
