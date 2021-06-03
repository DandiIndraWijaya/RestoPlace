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
    RestaurantDbSource.postReviewOnRestaurant({
      id: this._restaurantId,
      name: this._userNameInput.value,
      review: this._userReviewInput.value,
    })
      .then((response) => {
        this._updateRestaurantReviewsContainer(response.customerReviews);
      })
      .catch((error) => {
        console.log(error);
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
};

export default AddReview;
