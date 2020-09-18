import { restaurantItemTemplate } from '../templates/template-creator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurants';

const Favorite = {
  async render() {
    return `
    <div class="restaurants container">
      <h1 class="restaurants__h1">Daftar Restoran Favorite</h1>
      <div id="restaurants-list"></div>
    </div>
    `;
  },
  async afterRender() {
    this._restaurantList = document.getElementById('restaurants-list');

    const restaurantsIndexedDB = await FavoriteRestaurantIdb.getAll();

    if (restaurantsIndexedDB.length === 0) {
      this._emptyFavoriteRestaurant();
    } else {
      restaurantsIndexedDB.forEach((restaurant) => {
        this._restaurantList.innerHTML += restaurantItemTemplate(restaurant);
      });
    }
  },
  _emptyFavoriteRestaurant() {
    this._restaurantList.style.gridTemplateColumns = '1fr';
    this._restaurantList.style.textAlign = 'center';
    this._restaurantList.innerHTML = 'Masih Kosong';
  },
};

export default Favorite;
