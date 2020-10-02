import RestaurantSourceApi from '../../data/restaurant-source-api';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import ReviewPresenter from '../../utils/review-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurants-idb';
import DetailView from './detail/detail-view';
import DetailPresenter from './detail/detail-presenter';

const view = new DetailView();

const Detail = {
  async render() {
    return view.template;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const presenter = new DetailPresenter({
      view,
      restaurantSource: RestaurantSourceApi,
      id: url.id,
    });

    const restaurant = await presenter.restaurant;

    ReviewPresenter.init({
      reviewContainer: document.getElementById('review-container'),
      restaurantId: restaurant.id,
      restaurantSource: RestaurantSourceApi,
    });

    LikeButtonPresenter.init({
      favButtonContainer: document.getElementById('favButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant,
    });

    window.scrollTo(0, 0);
  },
};

export default Detail;
