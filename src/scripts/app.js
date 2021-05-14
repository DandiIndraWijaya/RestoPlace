/* eslint-disable linebreak-style */
import events from './events';
import DATA from '../DATA.json';
import REVIEWSDATA from '../REVIEWS.json';
import restaurants from './views/restaurants';
import reviews from './views/reviews';

const app = () => {
  // display restaurants
  restaurants(DATA.restaurants);

  // display reviews
  reviews(REVIEWSDATA.reviews);

  // page events
  events();
};

export default app;
