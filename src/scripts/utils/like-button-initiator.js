import { likeButtonTemplate, likedButtonTemplate } from '../views/templates/template-creator';
import FavoriteRestaurantIdb from '../data/favorite-restaurants';

const LikeButtonInitiator = {
  async init({ favButtonContainer, restaurant }) {
    this._favButtonContainer = favButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },
  async _renderButton() {
    if (await this._isRestauranExist(this._restaurant.id)) {
      this._renderLikedButton();
    } else {
      this._renderLikeButton();
    }
  },
  async _isRestauranExist(id) {
    const restaurant = await FavoriteRestaurantIdb.get(id);
    return !!restaurant;
  },
  _renderLikeButton() {
    this._favButtonContainer.innerHTML = likeButtonTemplate();

    document.getElementById('favButton').addEventListener('click', async () => {
      await FavoriteRestaurantIdb.put(this._restaurant);
      this._renderButton();
    });
  },
  _renderLikedButton() {
    this._favButtonContainer.innerHTML = likedButtonTemplate();

    document.getElementById('favButton').addEventListener('click', async () => {
      await FavoriteRestaurantIdb.delete(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
