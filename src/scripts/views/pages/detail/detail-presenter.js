class DetailPresenter {
  constructor({ view, restaurantSource, id }) {
    this._view = view;

    this._response = restaurantSource.restaurantDetail(id);
    this._displayRestaurant();
  }

  async _displayRestaurant() {
    const response = await this._response;

    if (response.error) {
      this._view.error = response.message;
    } else {
      this._view.restaurant = response.restaurant;
    }
  }

  get restaurant() {
    return this._response.then(({ restaurant }) => restaurant);
  }
}

export default DetailPresenter;
