import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { restaurantDetailTemplate, loading, errorTemplate } from '../templates/template-creator';

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

    try {
      const { restaurant } = await RestaurantSource.restaurantDetail(url.id);
      restaurantDetail.innerHTML = restaurantDetailTemplate(restaurant);
    } catch (error) {
      restaurantDetail.innerHTML = errorTemplate(error);
    }

    window.scrollTo(0, 0);
  },
};

export default Detail;
