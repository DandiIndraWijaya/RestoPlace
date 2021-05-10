const restaurants = (datas = []) => {
  let restaurantsView = '';
  datas.forEach((data) => {
    restaurantsView += `
      <div class="restaurant">
        <div class="restaurant__city">
          Kota. ${data.city}
        </div>
        <img src="${data.pictureId}" class="restaurant__picture" />
        <div class="restaurant__information">
          <div class="restaurant__flex">
            <div class="restaurant__name">
              ${data.name}
            </div>
          </div>
          <div class="restaurant__flex">
            <div class="restaurant__rating">
              Rating: ${data.rating}
            </div>
          </div>
        </div>
        <div class="restaurant__desc">
          ${data.description}
        </div>
      </div>
    `;
  });

  const restaurantsHTML = document.getElementById('restaurants');
  restaurantsHTML.innerHTML = restaurantsView;
};

export default restaurants;
