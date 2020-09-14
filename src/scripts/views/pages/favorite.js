import '../elements/home/fact-text';
import '../elements/restaurant-list';
import content from '../../../templates/content/favorite.html';
import HeaderInitiator from '../../utils/header-initiator';
import HEADER_CONFIG from '../../global/header-config';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import CONFIG from '../../global/config';

const { header } = HEADER_CONFIG;

const favorite = {
  async render() {
    return content;
  },

  async afterRender() {
    HeaderInitiator._headerOptions(header); // Header without fixed option

    const restaurantList = document.querySelector('restaurant-list');
    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
      restaurantList.load(restaurants);
    } catch (error) {
      restaurantList.error(CONFIG.ERROR_MESSAGE.DEFAULT);
    }
  },
};

export default favorite;
