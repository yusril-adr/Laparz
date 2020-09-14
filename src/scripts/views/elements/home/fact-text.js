import facts from '../../../data/facts.json';

class FactText extends HTMLElement {
  connectedCallback() {
    this._facts = facts;
    this._writeFacts();
  }

  _writeFacts() {
    this.innerHTML = this._randomFact(facts);
  }

  _randomFact() {
    return this._facts[Math.floor(Math.random() * facts.length)];
  }
}

customElements.define('fact-text', FactText);
