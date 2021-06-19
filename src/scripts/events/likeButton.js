const LikeButton = {
  async init({ likeButtonContainer, favoriteRestaurants, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._favoriteRestaurants = favoriteRestaurants;
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
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = '';
    const likeButtonElement = document.createElement('like-button');
    likeButtonElement.innerHTML = '<button aria-label="like this restaurant" id="like__button" class="like__button"> <i class="fas fa-heart" aria-hidden="true"></i></button>';
    this._likeButtonContainer.appendChild(likeButtonElement);

    const likeButton = document.querySelector('#like__button');

    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = '';
    const likedButtonElement = document.createElement('liked-button');
    likedButtonElement.innerHTML = ` <button aria-label="unlike this restaurant" id="liked__button" class="liked__button">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>`;
    this._likeButtonContainer.appendChild(likedButtonElement);

    const likedButton = document.querySelector('#liked__button');
    likedButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButton;
