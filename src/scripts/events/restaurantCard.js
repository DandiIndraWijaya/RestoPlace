const restaurantCard = {
  init({ buttons, description, arrow }) {
    Array.prototype.forEach.call(buttons, (button, index) => {
      button.addEventListener('click', () => {
        this._toggleDescription(description[index], arrow[index]);
      });
    });
  },

  _toggleDescription(description, arrow) {
    description.classList.toggle('restaurant__desc__display');
    arrow.classList.toggle('desc__arrow__see__detail');
  },
};

export default restaurantCard;
