import Home from '../views/pages/home';
import RestaurantDetail from '../views/pages/restaurantDetail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Home,
  '/restaurant/:id': RestaurantDetail,
  '/favorite': Favorite,
};

export default routes;
