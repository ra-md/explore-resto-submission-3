import FavoriteRestaurantIdb from '../../data/favorite-restaurants-idb';
import FavoritePresenter from './favorite/favorite-presenter';
import FavoriteView from './favorite/favorite-view';

const view = new FavoriteView();

const Favorite = {
  async render() {
    return view.template;
  },
  async afterRender() {
    new FavoritePresenter({ view, favoriteRestaurant: FavoriteRestaurantIdb });
  },
};

export default Favorite;
