const AlertInitiator = {
  init(message) {
    const body = document.querySelector('body');
    const alertElem = document.createElement('div');
    this._render({ body, alertElem }, message);

    alertElem.querySelector('.alert-btn').addEventListener('click', (event) => {
      this._btnEvent({ body, alertElem }, event);
    });
  },

  async _render({ body, alertElem }, message) {
    alertElem.classList.add('alert');
    alertElem.innerHTML = `
    <div class="alert-container">
        <span class="alert-text">${message}</span>
        <button class="alert-btn">Oke</button>
    </div>`;
    body.appendChild(alertElem);
    setTimeout(() => {
      alertElem.classList.add('alert-active');
    }, 300);
  },

  async _btnEvent({ body, alertElem }, event) {
    alertElem.classList.remove('alert-active');
    event.stopPropagation();

    this._removeAlert(body, alertElem);
  },

  _removeAlert(body, alertElem) {
    setTimeout(() => {
      body.removeChild(alertElem);
    }, 500);
  },
};

export default AlertInitiator;
