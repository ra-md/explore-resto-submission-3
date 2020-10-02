import { restaurantDetailTemplate, loading, errorTemplate } from '../../templates/template-creator';

class DetailView {
  get template() {
    return `
      <div class="restaurant-detail">
        ${loading()}
      </div>
    `;
  }

  set restaurant(restaurant) {
    document.querySelector('.restaurant-detail').innerHTML = restaurantDetailTemplate(restaurant);
  }

  set error(errorMessage) {
    document.querySelector('.restaurant-detail').innerHTML = errorTemplate(errorMessage);
  }
}

export default DetailView;
