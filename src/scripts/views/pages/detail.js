import '../elements/loading-element';
import '../elements/detail/restaurant-detail';
import { createDetailPageTemplate } from '../template/template-creator';
import UrlParser from '../../routes/url-parser';
import HeaderInitiator from '../../utils/header-initiator';
import HEADER_CONFIG from '../../global/header-config';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import RestaurantSource from '../../data/restaurants-source';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const { header } = HEADER_CONFIG;

const detail = {
  async render() {
    return createDetailPageTemplate();
  },

  async afterRender() {
    HeaderInitiator._headerOptions(header); // Header without fixed option

    const { id } = UrlParser.parseActiveUrlWithoutCombiner();
    const detailElem = document.querySelector('restaurant-detail');
    try {
      const restaurant = await this._getRestaurant(id);
      detailElem.data = restaurant;

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant,
      });
    } catch (error) {
      detailElem.error(error);
    }
  },

  async _getRestaurant(id) {
    if (this._isRestaurantOnline(id)) {
      return RestaurantSource.detail(id);
    }
    return FavoriteRestaurantIdb.getRestaurant(id);
  },

  async _isRestaurantOnline(id) {
    const restaurant = await RestaurantSource.detail(id);

    if (restaurant.error) {
      return !restaurant;
    }

    return !!restaurant;
  },
};

export default detail;
