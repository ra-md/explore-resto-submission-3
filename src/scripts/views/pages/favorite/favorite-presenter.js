class FavoritePresenter {
  constructor({ view, favoriteRestaurant }) {
    this._view = view;
    this._favoriteRestaurant = favoriteRestaurant;

    this._showFavortieRestaurants();
  }

  async _showFavortieRestaurants() {
    const restaurants = await this._favoriteRestaurant.getAll();
    this._view.displayRestaurants = restaurants;
  }
}

export default FavoritePresenter;
