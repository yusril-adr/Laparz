import { createReviewItemTemplate } from '../../template/template-creator';

class ReviewItem extends HTMLElement {
  set data(data) {
    this._data = data;

    this._render();
  }

  async _render() {
    this.innerHTML = createReviewItemTemplate(this._data);
  }
}

customElements.define('review-item', ReviewItem);
