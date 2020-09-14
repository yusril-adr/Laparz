import './restaurant-item';
import CONFIG from '../../global/config';
import { createRestaurantListEmptyTemplate, createRestaurantListErrorTemplate } from '../template/template-creator';

class RestaurantList extends HTMLElement {
  async load(restaurants) {
    if (restaurants.length === 0) this._emptyList();
    else this._render(restaurants);
  }

  _emptyList() {
    this.innerHTML = createRestaurantListEmptyTemplate();
  }

  _render(restaurants) {
    try {
      restaurants.forEach(async (restaurant) => {
        const restaurantItem = document.createElement('restaurant-item');

        // Load each restaurant detail with restaurant-item element
        restaurantItem.data = await restaurant;

        this.appendChild(restaurantItem);
      });
    } catch (error) {
      this.error(CONFIG.ERROR_MESSAGE.DEFAULT);
    }
  }

  error(message) {
    this.innerHTML = createRestaurantListErrorTemplate(message);
  }
}

customElements.define('restaurant-list', RestaurantList);
