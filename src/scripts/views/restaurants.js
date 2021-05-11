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
        <div class="restaurant__desc">
          <p tabIndex="0">${data.description}</p>
        </div>
      </div>
    `;
  });

  const restaurantsHTML = document.getElementById('restaurants');
  restaurantsHTML.innerHTML = restaurantsView;
};

export default restaurants;
