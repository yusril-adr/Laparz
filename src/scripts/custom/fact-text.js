import facts from '../data/facts';

class FactText extends HTMLElement {
  connectedCallback() {
    // Get random fact
    const randomFact = facts[Math.floor(Math.random() * facts.length)];

    // Write the random fact
    this.innerHTML = randomFact;
  }
}

customElements.define('fact-text', FactText);
