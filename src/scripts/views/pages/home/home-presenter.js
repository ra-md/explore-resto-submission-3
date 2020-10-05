class HomePresenter {
  constructor({ view, restaurantSource }) {
    this._view = view;
    this._restaurantSource = restaurantSource;

    this._showRestaurantList();
  }

  async _showRestaurantList() {
    try {
      const response = await this._restaurantSource.restaurantList();
      this._view.setRestaurant = response.restaurants;
    } catch (error) {
      this._view.setError = error;
    }
  }
}

export default HomePresenter;
