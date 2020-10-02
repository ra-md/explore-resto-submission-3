import RestaurantSourceApi from '../../data/restaurant-source-api';
import HomePresenter from './home/home-presenter';
import HomeView from './home/home-view';

const view = new HomeView();

const Home = {
  async render() {
    return view.template;
  },
  async afterRender() {
    new HomePresenter({ view, restaurantSource: RestaurantSourceApi });
  },
};

export default Home;
