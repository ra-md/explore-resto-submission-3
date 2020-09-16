import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { restaurantDetailTemplate, loading, errorTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant-detail">
        ${loading}
      </div>
    `;
  },
  async afterRender() {
    const restaurantDetail = document.getElementById('restaurant');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const response = await RestaurantSource.restaurantDetail(url.id);

    if (response.error || !response.restaurant) {
      restaurantDetail.innerHTML = errorTemplate(response.message);
    } else {
      restaurantDetail.innerHTML = restaurantDetailTemplate(response.restaurant);
    }

    LikeButtonInitiator.init({
      favButtonContainer: document.getElementById('favButtonContainer'),
      restaurant: response.restaurant,
    });

    window.scrollTo(0, 0);
  },
};

export default Detail;
