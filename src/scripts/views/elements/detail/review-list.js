import './review-item';
import UrlParser from '../../../routes/url-parser';
import RestaurantSource from '../../../data/restaurants-source';
import AlertInitiator from '../../../utils/alert-initiator';
import CONFIG from '../../../global/config';
import { createReviewListTemplate } from '../../template/template-creator';

class ReviewList extends HTMLElement {
  set id(id) {
    this._id = id;

    this._render();
  }

  async _render() {
    this.innerHTML = createReviewListTemplate();

    this._renderAllElem();
  }

  async _renderAllElem() {
    this._renderItem();

    this._postEvent();
  }

  async _renderItem() {
    const container = this.querySelector('.item-container');
    if (await this._getData()) {
      container.innerHTML = '';
      (await this._getData()).forEach((item) => {
        const reviewItem = document.createElement('review-item');
        reviewItem.data = item;
        container.appendChild(reviewItem);
      });
    }
  }

  async _getData() {
    return RestaurantSource.reviews(this._id);
  }

  async _postEvent() {
    this.querySelector('.send-btn').addEventListener('click', async (event) => {
      if (!!this._getReview()) {
        try {
          const newReview = {
            id: UrlParser.parseActiveUrlWithoutCombiner().id,
            name: this._getName(),
            review: this._getReview(),
          };
          await RestaurantSource.postReview(newReview);
          this._resetInput();
          this._renderItem();
        } catch (error) {
          AlertInitiator.init(CONFIG.ERROR_MESSAGE.DEFAULT);
        }
      }

      event.stopPropagation();
    });
  }

  _getName() {
    return this.querySelector('#name').value || 'Anonymous';
  }

  _getReview() {
    return this.querySelector('#review').value;
  }

  _resetInput() {
    this.querySelector('#name').value = null;
    this.querySelector('#review').value = null;
  }
}

customElements.define('review-list', ReviewList);
