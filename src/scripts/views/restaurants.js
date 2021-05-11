const restaurants = (datas = []) => {
  let restaurantsView = '';
  datas.forEach((data) => {
    restaurantsView += `
      <div class="restaurant">
        <div tabIndex="0" class="restaurant__city">
          Kota. ${data.city}
        </div>
        <img src="${data.pictureId}" class="restaurant__picture" />
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
        <div tabIndex="0" class="restaurant__desc">
          ${data.description}
        </div>
      </div>
    `;
  });

  const containerEl = document.getElementById('container');
  const restaurantsEL = document.createElement('DIV');
  restaurantsEL.classList.add('restaurants');
  containerEl.appendChild(restaurantsEL);

  restaurantsEL.innerHTML = restaurantsView;
};

export default restaurants;
