import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { restaurantDetailTemplate, loading, errorTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import ReviewInitiator from '../../utils/review-initiator';

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

    LikeButtonInitiator.init({
      favButtonContainer: document.getElementById('favButtonContainer'),
      restaurant: response.restaurant,
    });

    window.scrollTo(0, 0);
  },
};

export default Detail;
