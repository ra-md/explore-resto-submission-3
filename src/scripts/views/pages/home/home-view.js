import { skeletonLoading, errorTemplate, restaurantItemTemplate } from '../../templates/template-creator';

class HomeView {
  get template() {
    return `
      <div class="jumbotron">
        <img
          class="jumbotron__image"
          src="./images/hero-image_2-large.webp"
          srcset="./images/hero-image_2-small.webp 480w, ./images/hero-image_2-large.webp 800w"
          sizes="(max-width: 600px) 480px, 800px" alt=""
        >
        <div class="jumbotron__text">
          <h1>Tempat Makan Yang Sedang Populer Di Indonesia</h1>
        </div>
      </div>
      <div class="restaurants container">
        <h1 class="restaurants__h1">Daftar Restoran</h1>
        <div id="restaurants-list">${this._skeletonItemLoading()}</div>
      </div>
    `;
  }

  _skeletonItemLoading() {
    return [{}, {}, {}, {}, {}, {}].reduce((acc) => {
      return acc.concat(`
      <div class="restaurant">
        ${skeletonLoading({ height: '250px', width: '100%' })}
        <div class="restaurant-body">
          ${skeletonLoading({ height: '30px', width: '100%' })}
          <div style="margin-top: 10px; margin-bottom: 5px;">
            ${skeletonLoading({ height: '20px', width: '100%' })}
          </div>
          ${skeletonLoading({ height: '20px', width: '100%' })}
          <div class="city-rating" style="margin-top: 5px">
            ${skeletonLoading({ height: '15px', width: '70px' })}
            ${skeletonLoading({ height: '15px', width: '40px' })}
          </div>
        </div>
      </div>
      `);
    }, '');
  }

  _getRestaurantListElement() {
    return document.getElementById('restaurants-list');
  }

  _dispatchNewEvent(element) {
    element.dispatchEvent(new Event('restaurants:updated'));
  }

  set setRestaurant(restaurants) {
    const restaurantListElement = this._getRestaurantListElement();

    restaurantListElement.innerHTML = '';

    restaurants.forEach((restaurant) => {
      restaurantListElement.innerHTML += restaurantItemTemplate(restaurant);
    });

    this._dispatchNewEvent(restaurantListElement);
  }

  set setError(error) {
    const restaurantListElement = this._getRestaurantListElement();
    restaurantListElement.innerHTML = errorTemplate(error);

    this._dispatchNewEvent(restaurantListElement);
  }
}

export default HomeView;
