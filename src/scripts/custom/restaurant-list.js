import './restaurant-item';
import { restaurants } from '../../DATA.json';

class RestaurantList extends HTMLElement {
  connectedCallback() {
    // Generate multiple restaurant-item element
    restaurants.forEach((restaurant) => {
      const restaurantItem = document.createElement('restaurant-item');

      // Load each restaurant detail with restaurant-item element
      restaurantItem.data = restaurant;

      this.appendChild(restaurantItem);
    });
  }
}

customElements.define('restaurant-list', RestaurantList);
