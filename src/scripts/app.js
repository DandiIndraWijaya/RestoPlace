/* eslint-disable linebreak-style */
import events from './events';
import DATA from '../DATA.json';
import restaurants from './views/restaurants';

const app = () => {
  // page events
  events();

  // display restaurants
  restaurants(DATA.restaurants);
};

export default app;
