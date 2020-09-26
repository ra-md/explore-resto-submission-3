import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { restaurantDetailTemplate, loading, errorTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import ReviewInitiator from '../../utils/review-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurants';

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
    const response = await RestaurantSource.restaurantDetail(url.id);

    if (response.error || !response.restaurant) {
      restaurantElm.innerHTML = errorTemplate(response.message);
    } else {
      restaurantElm.innerHTML = restaurantDetailTemplate(response.restaurant);
    }

    ReviewInitiator.init({
      submit: document.querySelector('.review-form__submit'),
      nameElm: document.getElementById('review-name'),
      reviewElm: document.getElementById('review'),
      messageElm: document.querySelector('.review-message'),
      restaurantElm,
      restaurant: response.restaurant,
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
