import FavoriteRestaurantsIdb from '../data/favoriteRestaurantsIDB';

const LikeButton = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantsIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = '';
    const likeButtonElement = document.createElement('like-button');
    this._likeButtonContainer.appendChild(likeButtonElement);

    const likeButton = document.querySelector('#like__button');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantsIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = '';
    const likedButtonElement = document.createElement('liked-button');
    this._likeButtonContainer.appendChild(likedButtonElement);

    const likedButton = document.querySelector('#liked__button');
    likedButton.addEventListener('click', async () => {
      await FavoriteRestaurantsIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButton;
