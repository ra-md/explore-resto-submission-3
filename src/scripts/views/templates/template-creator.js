import API_ENDPOINT from '../../globals/api-endpoint';

function menuList(menus) {
  return menus.reduce((acc, current) => acc.concat(`<li>${current.name}</li>`), '');
}

function reviews(consumerReviews) {
  return consumerReviews.reduce((acc, current) => {
    return acc.concat(`
      <div class="consumer-reviews__body">
        <p class="consumer-reviews__name">${current.name}</p>
        <p class="consumer-reviews__date">${current.date}</p>
        <p class="consumer-reviews__review">${current.review}</p>
      </div>
    `);
  }, '');
}

const loading = `
  <div class="loading">
    <div class="spinner">
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div>
  </div>
`;

function restaurantItemTemplate({
  name,
  pictureId,
  description,
  city,
  rating,
  id,
}) {
  return `
    <div class="restaurant">
      <a href="#/detail/${id}">
        <img
          class="restaurant__image"
          loading="lazy"
          height="400"
          width="300"
          alt="restoran ${name}"
          src="${API_ENDPOINT.RESTAURANT_IMAGE(pictureId, 'small')}"/>
        <div class="restaurant-body">
          <h1 class="restaurant-body__name">${name}</h1>
          <p class="restaurant-body__description">${description}</p>
          <div class="city-rating">
            <span class="city-rating__city"><i class="fas fa-map-marker-alt"></i>${city}</span>
            <span class="city-rating__rating"><i class="fas fa-star"></i>${rating}</span>
          </div>
        </div>
      </a>
    </div>
  `;
}

function restaurantDetailTemplate({
  pictureId,
  name,
  city,
  address,
  categories,
  rating,
  description,
  menus,
  consumerReviews,
}) {
  const transformCategories = categories.map((category) => category.name).join(', ');

  return `
    <div class="restaurant-detail__picture">
      <img src="${API_ENDPOINT.RESTAURANT_IMAGE(pictureId, 'large')}"/>
    </div>
    <div class="container">
      <div class="restaurant-detail__body">
        <div class="profile">
          <h1 class="detail__name">${name}</h1>
          <p class="detail__address"><i class="fas fa-map-marker-alt"></i>${city}, ${address}</p>
          <p class="detail__categories"><i class="fas fa-layer-group"></i>${transformCategories}</p>
          <p class="detail__rating"><i class="fas fa-star"></i>${rating}</p>
          <p class="detail__description">${description}</p>
        </div>
        <div class="menus">
          <h1>Menu</h1>
          <div class="foods">
            <h2>Foods</h2>
            <ul>
              ${menuList(menus.foods)}
            </ul>
          </div>
          <div class="drinks">
            <h2>Drinks</h2>
            <ul>
              ${menuList(menus.drinks)}
            </ul>
          </div>
        </div>
        <h1>Consumer reviews</h1>
        <div class="consumer-reviews">
          ${reviews(consumerReviews)}
        </div>
      </div>
    </div>
  `;
}

export { restaurantItemTemplate, restaurantDetailTemplate, loading };
