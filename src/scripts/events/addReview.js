import RestaurantDbSource from '../services/api';

const AddReview = {
  init({
    addReviewButton,
    restaurantId,
    userNameInput,
    userReviewInput,
    restaurantReviewsContainer,
  }) {
    this._restaurantId = restaurantId;
    this._userNameInput = userNameInput;
    this._userReviewInput = userReviewInput;
    this._restaurantReviewsContainer = restaurantReviewsContainer;

    addReviewButton.addEventListener('click', () => {
      this._postReview();
    });
  },

  _postReview() {
    if (this._userNameInput.value.length === 0 || this._userReviewInput.value.length === 0) {
      this._resetInformation();
      this._restaurantReviewsContainer.innerHTML = `<div class="failed__add__review">Please Fill Name and Review Column</div>${this._restaurantReviewsContainer.innerHTML}`;
      return;
    }
    RestaurantDbSource.postReviewOnRestaurant({
      id: this._restaurantId,
      name: this._userNameInput.value,
      review: this._userReviewInput.value,
    })
      .then((response) => {
        this._resetInformation();
        this._updateRestaurantReviewsContainer(response.customerReviews);
      })
      .catch((error) => {
        console.log(error);
        this._resetInformation();
        this._restaurantReviewsContainer.innerHTML = `<div class="failed__add__review">Failed to add review</div>${this._restaurantReviewsContainer.innerHTML}`;
      });
  },

  _updateRestaurantReviewsContainer(reviews) {
    this._restaurantReviewsContainer.innerHTML = '<div class="success__add__review">Successfully add review</div>';
    this._userNameInput.value = '';
    this._userReviewInput.value = '';
    reviews.reverse().map((review) => {
      this._restaurantReviewsContainer.innerHTML
      += `<div class="restaurant__review">
        <div tabIndex="0" class="user__name">${review.name}</div>
        <div tabIndex="0" class="user__review"><p>${review.review.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p></div>
        <div tabIndex="0" class="review__date">${review.date}</div></div>`;
    }).join(' ');
  },

  _resetInformation() {
    const failedAddReviewElement = document.querySelector('.failed__add__review');
    if (failedAddReviewElement !== null) {
      this._restaurantReviewsContainer.removeChild(failedAddReviewElement);
    }

    const successAddReviewElement = document.querySelector('.success__add__review');
    if (successAddReviewElement !== null) {
      this._restaurantReviewsContainer.removeChild(successAddReviewElement);
    }
  },
};

export default AddReview;
