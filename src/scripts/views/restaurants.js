const restaurants = (datas = []) => {
  let restaurantsView = '';
  datas.forEach((data) => {
    restaurantsView += `
      <section class="restaurant">
        <div tabIndex="0" class="restaurant__city">
          Kota. ${data.city}
        </div>
        <img tabIndex="0" src="${data.pictureId}" alt="${data.name} picture" class="restaurant__picture" />
        <div class="restaurant__information">
          <div class="restaurant__flex">
            <div tabIndex="0" class="restaurant__name">
              ${data.name}
            </div>
          </div>
          <div class="restaurant__flex">
            <div tabIndex="0" class="restaurant__rating">
              Rating: ${data.rating}
            </div>
          </div>
        </div>
        <article class="restaurant__desc">
          <button class="resto__detail__btn">Detail</button><span class="desc__arrow">&darr;</span>
          <p tabIndex="0" class="restaurant__desc__close">
            ${data.description}
          </p>
        </article>
      </section>
    `;
  });

  const containerEl = document.getElementById('container');
  const restaurantsEL = document.createElement('DIV');
  restaurantsEL.classList.add('restaurants');
  containerEl.appendChild(restaurantsEL);

  restaurantsEL.innerHTML = restaurantsView;
};

export default restaurants;
