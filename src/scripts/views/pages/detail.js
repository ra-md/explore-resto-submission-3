import RestaurantSourceIdb from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { restaurantDetailTemplate, loading, errorTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import ReviewPresenter from '../../utils/review-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurants-idb';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant-detail">
        ${loading}
      </div>
    `;
  },
  async afterRender() {
    const restaurantElm = document.getElementById('restaurant');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const response = await RestaurantSourceIdb.restaurantDetail(url.id);

    if (response.error || !response.restaurant) {
      restaurantElm.innerHTML = errorTemplate(response.message);
    } else {
      restaurantElm.innerHTML = restaurantDetailTemplate(response.restaurant);
    }

    ReviewPresenter.init({
      reviewContainer: document.getElementById('review-container'),
      restaurant: response.restaurant,
      restaurantSource: RestaurantSourceIdb,
    });

    LikeButtonPresenter.init({
      favButtonContainer: document.getElementById('favButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: response.restaurant,
    });

    window.scrollTo(0, 0);
  },
};

export default Detail;
