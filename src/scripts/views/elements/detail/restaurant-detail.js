import './category-list';
import './menu-list';
import './review-list';
import { createRestaurantDetailTemplate, createRestaurantDetailErrorTemplate } from '../../template/template-creator';
import CONFIG from '../../../global/config';

class RestaurantDetail extends HTMLElement {
  set data(restaurant) {
    this._restaurant = restaurant;

    this._render();
  }

  _render() {
    this._renderContent();

    this._renderAllElement();
  }

  async _renderContent() {
    this.innerHTML = createRestaurantDetailTemplate(this._restaurant);
  }

  async _renderAllElement() {
    this._renderCategory();
    this._renderFoodMenu();
    this._renderDrinkMenu();
    this._renderReview();
  }

  async _renderCategory() {
    const categoryElem = this.querySelector('category-list');
    categoryElem.data = this._restaurant.categories;
  }

  async _renderFoodMenu() {
    const foodsElem = this.querySelector('#food-menu');
    foodsElem.title = 'Makanan';
    foodsElem.data = this._restaurant.menus.foods;
  }

  async _renderDrinkMenu() {
    const drinksElem = this.querySelector('#drink-menu');
    drinksElem.title = 'Minuman';
    drinksElem.data = this._restaurant.menus.drinks;
  }

  async _renderReview() {
    const reviewElem = this.querySelector('review-list');
    reviewElem.id = this._restaurant.id;
  }

  async error() {
    this.innerHTML = createRestaurantDetailErrorTemplate(CONFIG.ERROR_MESSAGE.RESTAURANT_DETAIL);
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
