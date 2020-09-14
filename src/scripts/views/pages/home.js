import RestaurantSource from '../../data/restaurant-source';
import { movieItemTemplate, loading } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="restaurants">
      <h1 class="restaurants__h1">Daftar Restoran</h1>
      <div id="restaurants-list"></div>
    </div>
    `;
  },
  async afterRender() {
    const restaurantList = document.getElementById('restaurants-list');
    restaurantList.innerHTML = loading;

    const { restaurants } = await RestaurantSource.restaurantList();
    restaurantList.innerHTML = '';

    restaurants.forEach((restaurant) => {
      restaurantList.innerHTML += movieItemTemplate(restaurant);
    });
  },
};

export default Home;
