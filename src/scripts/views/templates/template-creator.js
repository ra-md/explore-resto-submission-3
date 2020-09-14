import API_ENDPOINT from '../../globals/api-endpoint';

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
}) {
  const transformCategories = categories.map((category) => category.name).join(', ');

  return `
    <div class="restaurant-detail__picture">
      <img src="${API_ENDPOINT.RESTAURANT_IMAGE(pictureId, 'large')}" />
    </div>
    <div class="restaurant-detail__body">
      <div class="detail">
        <h1>${name}</h1>
        <p><b><i class="fas fa-map-marker-alt"></i>${city} ${address}</b></p>
        <p>${transformCategories}</p>
      </div>
      <div class="review"></div>
    </div>
  `;
}

export { restaurantItemTemplate, restaurantDetailTemplate, loading };
