import API_ENDPOINT from '../../globals/api-endpoint';

const loading = `
  <div class="spinner">
    <div class="double-bounce1"></div>
    <div class="double-bounce2"></div>
  </div>
`;

function movieItemTemplate({
  name,
  pictureId,
  description,
  city,
  rating,
}) {
  return `
    <div class="restaurant">
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
    </div>
  `;
}

export { movieItemTemplate, loading };
