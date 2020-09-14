import { createRestaurantItemTemplate } from '../template/template-creator';

class RestaurantItem extends HTMLElement {
  set data(restaurant) {
    this._restaurant = restaurant;

    this._render();
  }

  _render() {
    // Slicing 100 char if description length > 100
    this._restaurant.description = this._shortDescription();

    this.innerHTML = createRestaurantItemTemplate(this._restaurant);
  }

  _shortDescription() {
    if (this._restaurant.description.length > 100) return `${this._restaurant.description.slice(0, 100)} ...`;
    return this._restaurant.description;
  }
}

customElements.define('restaurant-item', RestaurantItem);
