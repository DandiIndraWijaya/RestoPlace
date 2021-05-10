import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import DATA from '../DATA.json';
import restaurants from './views/restaurants';

// display restaurants
restaurants(DATA.restaurants);
