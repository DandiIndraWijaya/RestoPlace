/* eslint-disable linebreak-style */

const reviews = (datas = []) => {
  let reviewsView = '';
  datas.forEach((data) => {
    reviewsView += `
    <section class="restoplace-review card">
      <img tabIndex="0" src="${data.picture}" alt="${data.userName} Picture" />
        <div class="information">
          <div class="user__name">
            <span tabIndex="0">${data.userName}</span>
          </div>
          <div class="user__rating">
            <span tabIndex="0">Rate : ${data.rating} / 5</span>
          </div>
        </div>
      <hr>
      <div class="user__review">
        <p tabIndex="0">
          ${data.review}
        </p>
      </div>
    </section>
    `;
  });

  const containerEl = document.getElementById('container');

  // create reviews container
  const reviewsContainer = document.createElement('DIV');
  reviewsContainer.classList.add('reviews__container');
  containerEl.appendChild(reviewsContainer);

  // crate title
  const reviewsTitle = document.createElement('DIV');
  reviewsTitle.classList.add('review__title');
  reviewsContainer.appendChild(reviewsTitle);
  document.querySelector('.review__title').innerHTML = `<h2 tabIndex="0">
    RestoPlace Reviews
  </h2>`;

  // display reiviews data
  const reviewsEL = document.createElement('DIV');
  reviewsEL.classList.add('reviews');
  reviewsContainer.appendChild(reviewsEL);

  reviewsEL.innerHTML = reviewsView;
};

export default reviews;
