class DetailPresenter {
  constructor({ view, restaurantSource, id }) {
    this._view = view;

    this._response = restaurantSource.restaurantDetail(id);
    this._displayRestaurant(this._response);
  }

  async _displayRestaurant(response) {
    const { error, message, restaurant } = await response;

    if (error || !restaurant) {
      this._view._showError(message);
    } else {
      this._view._showRestaurant(restaurant);
    }
  }

  get restaurant() {
    return this._response.then(({ restaurant }) => restaurant);
  }
}

export default DetailPresenter;
