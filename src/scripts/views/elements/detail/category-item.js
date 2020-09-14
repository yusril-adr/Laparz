class CategoryItem extends HTMLElement {
  set data(data) {
    this._data = data;

    this._render();
  }

  async _render() {
    this.innerHTML = this._data;
  }
}

customElements.define('category-item', CategoryItem);
