import { restaurantDetailTemplate, loading, errorTemplate } from '../../templates/template-creator';

class DetailView {
  get template() {
    return `
      <div id="restaurant" class="restaurant-detail">
        ${loading()}
      </div>
    `;
  }

  _showRestaurant(restaurant) {
    document.getElementById('restaurant').innerHTML = restaurantDetailTemplate(restaurant);
  }

  _showError(errorMessage) {
    document.getElementById('restaurant').innerHTML = errorTemplate(errorMessage);
  }
}

export default DetailView;
