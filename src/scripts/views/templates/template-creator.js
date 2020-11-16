import CONFIG from '../../globals/config';

function menuList(menus) {
  return menus.reduce((acc, current) => acc.concat(`<li>${current.name}</li>`), '');
}

function reviews(customerReviews) {
  return customerReviews.reduce((acc, current) => {
    return acc.concat(`
      <div class="consumer-reviews__body">
        <p class="consumer-reviews__name">${current.name}</p>
        <p class="consumer-reviews__date">${current.date}</p>
        <p class="consumer-reviews__review">${current.review}</p>
      </div>
    `);
  }, '');
}

function loading() {
  return `
    <div class="loading">
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    </div>
  `;
}

function restaurantItemTemplate(restaurant) {
  return `
    <div class="restaurant">
      <a href="#/detail/${restaurant.id}">
        <img
          class="restaurant__image"
          alt="Restoran ${restaurant.name}"
          src="${`${CONFIG.BASE_IMAGE_URL}/small/${restaurant.pictureId}`}"
          height="400"
          width="300"
          loading="lazy"
          crossorigin='anonymous'/>
        <div class="restaurant-body">
          <h1 class="restaurant-body__name">${restaurant.name}</h1>
          <p class="restaurant-body__description">${restaurant.description}</p>
          <div class="city-rating">
            <span class="city-rating__city"><i class="fas fa-map-marker-alt"></i>${restaurant.city}</span>
            <span class="city-rating__rating"><i class="fas fa-star"></i>${restaurant.rating}</span>
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
  customerReviews,
}) {
  const transformCategories = categories.map((category) => category.name).join(', ');

  return `
    <div class="restaurant-detail__picture">
      <h1 class="restaurant-name">${name}</h1>
      <img alt="gambar restoran ${name}" src="${`${CONFIG.BASE_IMAGE_URL}/large/${pictureId}`}" crossorigin='anonymous'/>
    </div>
    <div class="container">
      <div class="restaurant-detail__body">
        <div class="profile">
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
        <div class="consumer-reviews">
          <h1>Consumer Reviews</h1>
          <div id="review-container"></div>
          <div class="consumer-reviews__list">
            ${reviews(customerReviews)}
          </div>
        </div>
      </div>
    </div>
    <div id="favButtonContainer"></div>
  `;
}

function errorTemplate(error) {
  return `<p class="error-message">${error}</p>`;
}

function buttonWithHeartIconTemplate(fasOrFar) {
  const isFar = fasOrFar === 'far';

  return `
  <button aria-label="${isFar ? 'Like' : 'Unlike'} this restaurant" id="favButton">
    <i class="${isFar ? 'far' : 'fas'} fa-heart" aria-hidden="true"></i>
  </button>`;
}

function likeButtonTemplate() {
  return buttonWithHeartIconTemplate('far');
}

function likedButtonTemplate() {
  return buttonWithHeartIconTemplate('fas');
}

function reviewForm() {
  return `
    <form id="form-new-review" class="review-form">
      <label for="review-name">Nama: </label>
      <input type="text" id="review-name" placeholder="write your name here...">
      <label for="review">Review: </label>
      <textarea
        id="review"
        placeholder="write your review here..."
        class="review-form__textarea"
        name="review-textarea"
        form="add-new-review"
      ></textarea>
      <p class="review-message"></p>
      <input type="submit" class="review-form__submit btn" value="Submit">
    </form>
  `;
}

function skeletonLoading({ height, width }) {
  return `
    <div class="skeleton" style="height: ${height}; width: ${width}">
      <div class="skeleton-bg"></div>
      <div class="skeleton-shimmer"></div>
    </div>
  `;
}

export {
  restaurantItemTemplate,
  restaurantDetailTemplate,
  loading,
  errorTemplate,
  likeButtonTemplate,
  likedButtonTemplate,
  reviewForm,
  reviews,
  skeletonLoading,
};
