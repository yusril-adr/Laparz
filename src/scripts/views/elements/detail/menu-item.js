import { createMenuItemTemplate } from '../../template/template-creator';

class MenuItem extends HTMLElement {
  set data(data) {
    this._data = data;

    this._render();
  }

  async _render() {
    this.innerHTML = createMenuItemTemplate(this._data);
  }
}

customElements.define('menu-item', MenuItem);
