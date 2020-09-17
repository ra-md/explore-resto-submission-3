import RestaurantSource from '../../data/restaurant-source';
import { restaurantItemTemplate, loading, errorTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="jumbotron">
      <div class="jumbotron__text">
        <h1>Tempat Makan Yang Sedang Populer Di Indonesia</h1>
      </div>
    </div>
    <div class="restaurants container">
      <img src="https://image.tmdb.org/t/p/w500//9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg" />
      <h1 class="restaurants__h1">Daftar Restoran</h1>
      <div id="restaurants-list">${loading}</div>
    </div>
    `;
  },
  async afterRender() {
    const restaurantList = document.getElementById('restaurants-list');

    try {
      const { restaurants } = await RestaurantSource.restaurantList();
      restaurantList.innerHTML = '';

      restaurants.forEach((restaurant) => {
        restaurantList.innerHTML += restaurantItemTemplate(restaurant);
      });
    } catch (error) {
      restaurantList.style.gridTemplateColumns = '1fr';
      restaurantList.innerHTML = errorTemplate(error);
    }
  },
};

export default Home;
