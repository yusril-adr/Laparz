import HeaderInitiator from '../utils/header-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    header, button, nav, skipLink, content,
  }) {
    this._header = header;
    this._button = button;
    this._nav = nav;
    this._skipLink = skipLink;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    HeaderInitiator.init({
      header: this._header,
      button: this._button,
      nav: this._nav,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    this._removeLoading();
  }

  async _removeLoading() {
    const loading = document.querySelector('loading-element');
    this._content.removeChild(loading);
  }
}

export default App;
