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
    const restaurantList = document.getElementById('restaurants-list');

    const restaurants = await FavoriteRestaurantIdb.getAll();

    if (restaurants.length === 0) {
      restaurantList.style.gridTemplateColumns = '1fr';
      restaurantList.style.textAlign = 'center';
      restaurantList.innerHTML = 'Masih Kosong';
    } else {
      restaurants.forEach((restaurant) => {
        restaurantList.innerHTML += restaurantItemTemplate(restaurant);
      });
    }
  },
};

export default Favorite;
