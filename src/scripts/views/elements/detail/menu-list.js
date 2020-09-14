import './menu-item';
import { createMenuListTemplate } from '../../template/template-creator';

class MenuList extends HTMLElement {
  set title(title) {
    this._title = title;
  }

  set data(data) {
    this._data = data;

    this._render();
  }

  async _render() {
    this.innerHTML = await createMenuListTemplate(this._title);

    this._renderItem();
  }

  async _renderItem() {
    const container = this.querySelector('.container');

    this._data.forEach((item) => {
      const itemElem = document.createElement('menu-item');
      itemElem.data = item.name;
      container.appendChild(itemElem);
    });
  }
}

customElements.define('menu-list', MenuList);
