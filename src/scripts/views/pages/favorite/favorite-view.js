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
    this._restaurantList = document.getElementById('restaurants-list');

    if (restaurants.length === 0) {
      this._restaurantList.innerHTML = this._emptyFavoriteRestaurant();
    } else {
      restaurants.forEach((restaurant) => {
        this._restaurantList.innerHTML += restaurantItemTemplate(restaurant);
      });
    }
  }

  _emptyFavoriteRestaurant() {
    return '<p class="empty-favorite-restaurant">Tidak ada restaurant untuk ditampilkan</p>';
  }
}

export default FavoriteView;
