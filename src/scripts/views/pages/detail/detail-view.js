import { restaurantDetailTemplate, loading, errorTemplate } from '../../templates/template-creator';

class DetailView {
  get template() {
    return `
      <div class="restaurant-detail">
        ${loading()}
      </div>
    `;
  }

  _getRestaurantDetailElement() {
    return document.querySelector('.restaurant-detail');
  }

  set restaurant(restaurant) {
    this._getRestaurantDetailElement.innerHTML = restaurantDetailTemplate(restaurant);
  }

  set error(errorMessage) {
    this._getRestaurantDetailElement.innerHTML = errorTemplate(errorMessage);
  }
}

export default DetailView;
