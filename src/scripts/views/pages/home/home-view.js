import { restaurantItemTemplate, loading, errorTemplate } from '../../templates/template-creator';

class HomeView {
  get template() {
    return `
      <div class="jumbotron">
        <img class="jumbotron__image" src="images/heros/hero-image_2.jpg" alt="" />
        <div class="jumbotron__text">
          <h1>Tempat Makan Yang Sedang Populer Di Indonesia</h1>
        </div>
      </div>
      <div class="restaurants container">
        <h1 class="restaurants__h1">Daftar Restoran</h1>
        <div id="restaurants-list">${loading()}</div>
      </div>
    `;
  }

  _getRestaurantListElement() {
    return document.getElementById('restaurants-list');
  }

  set setRestaurant(restaurants) {
    const restaurantListElement = this._getRestaurantListElement();

    restaurantListElement.innerHTML = '';

    restaurants.forEach((restaurant) => {
      restaurantListElement.innerHTML += restaurantItemTemplate(restaurant);
    });
  }

  set setError(error) {
    const restaurantListElement = this._getRestaurantListElement();
    restaurantListElement.innerHTML = errorTemplate(error);
  }
}

export default HomeView;
