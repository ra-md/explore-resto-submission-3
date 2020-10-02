import { restaurantDetailTemplate, loading, errorTemplate } from '../../templates/template-creator';

class DetailView {
  get template() {
    return `
      <div class="restaurant-detail">
        ${loading()}
      </div>
    `;
  }

  _showRestaurant(restaurant) {
    document.querySelector('.restaurant-detail').innerHTML = restaurantDetailTemplate(restaurant);
  }

  _showError(errorMessage) {
    document.querySelector('.restaurant-detail').innerHTML = errorTemplate(errorMessage);
  }
}

export default DetailView;
