/* eslint-disable linebreak-style */
import events from './events';
import DATA from '../DATA.json';
import restaurants from './views/restaurants';

const app = () => {
  // display restaurants
  restaurants(DATA.restaurants);

  // page events
  events();
};

export default app;
