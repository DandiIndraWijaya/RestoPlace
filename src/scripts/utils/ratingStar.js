/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
const ratingStar = (element, rating) => {
  const ratingCountFloored = Math.floor(rating);
  const modulus = rating % 1;

  Array(ratingCountFloored).fill(0).map(() => {
    element.innerHTML += '<i class="fas fa-star fa-2x"></i>';
  });

  if (modulus > 0.4) {
    element.innerHTML += '<i class="fas fa-star-half-alt fa-2x"></i>';
  }

  element.innerHTML += `<h4>(${rating})</h4>`;
};

export default ratingStar;
