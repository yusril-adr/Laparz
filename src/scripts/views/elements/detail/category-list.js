import './category-item';

class CategoryList extends HTMLElement {
  set data(data) {
    this._data = data;

    this._render();
  }

  async _render() {
    this._data.forEach((item) => {
      const itemElem = document.createElement('category-item');
      itemElem.data = item.name;
      this.appendChild(itemElem);
    });
  }
}

customElements.define('category-list', CategoryList);
