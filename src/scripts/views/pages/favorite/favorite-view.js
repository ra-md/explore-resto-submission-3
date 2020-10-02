import { restaurantItemTemplate } from '../../templates/template-creator';

class FavoriteView {
  get template() {
    return `
      <div class="restaurants container">
        <h1 class="restaurants__h1">Daftar Restoran Favorite</h1>
        <div id="restaurants-list"></div>
      </div>
    `;
  }

  set displayRestaurants(restaurants) {
    const restaurantList = document.getElementById('restaurants-list');

    if (restaurants.length === 0) {
      restaurantList.innerHTML = this._emptyFavoriteRestaurant();
    } else {
      restaurants.forEach((restaurant) => {
        restaurantList.innerHTML += restaurantItemTemplate(restaurant);
      });
    }

    restaurantList.dispatchEvent(new Event('restaurants:updated'));
  }

  _emptyFavoriteRestaurant() {
    return '<p class="favorite-restaurant-not-found">Tidak ada restaurant untuk ditampilkan</p>';
  }
}

export default FavoriteView;
