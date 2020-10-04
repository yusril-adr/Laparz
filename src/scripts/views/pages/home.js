import '../elements/home/fact-text';
import '../elements/restaurant-list';
import { createHomeTemplate } from '../template/template-creator';
import HeaderInitiator from '../../utils/header-initiator';
import HEADER_CONFIG from '../../global/header-config';
import RestaurantSource from '../../data/restaurants-source';
import CONFIG from '../../global/config';

const { header } = HEADER_CONFIG;

const home = {
  async render() {
    return createHomeTemplate();
  },

  async afterRender() {
    HeaderInitiator._headerOptions(header, { fixed: true }); // header with fixed option

    const restaurantList = document.querySelector('restaurant-list');
    try {
      const restaurants = await RestaurantSource.list();
      restaurantList.load(restaurants);
    } catch (error) {
      restaurantList.error(CONFIG.ERROR_MESSAGE.DEFAULT);
    }
  },
};

export default home;
