import { createLoadingTemplate } from '../template/template-creator';

class LoadingElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = createLoadingTemplate();
  }
}

customElements.define('loading-element', LoadingElement);
