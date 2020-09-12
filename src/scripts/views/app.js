import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({
    mainContent,
    button,
    drawer,
    body,
    navItems,
  }) {
    this._mainContent = mainContent;
    this._drawer = drawer;
    this._body = body;
    this._button = button;
    this._navItems = navItems;
    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      drawer: this._drawer,
      button: this._button,
      body: this._body,
      navItems: this._navItems,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    this._mainContent.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
