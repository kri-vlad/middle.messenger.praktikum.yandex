import Block from './framework/block';
import snakeToCamel from "./framework/utils";

const components =  {
  signIn: () => import('./pages/signIn'),
  signUp: () => import('./pages/signUp'),
  home: () => import('./pages/home'),
  dialog: () => import('./pages/dialog'),
  changePassword: () => import('./pages/changePassword'),
  chatList: () => import('./pages/chatList'),
  settings: () => import('./pages/settings'),
  settingsChange: () => import('./pages/settingsChange'),
  errorClient: () => import('./pages/errorClient'),
  errorServer: () => import('./pages/errorServer'),
};

class Router extends Block {
  constructor({
    blockClass,
    components,
    props,
    isRoot,
    el,
    name
  }) {
    super({
      blockClass,
      components,
      props,
      isRoot,
      el,
      name
    });
  }
  render() {
    let template = ``;
    switch (location.hash) {
      case '':
        template += `{{home}}`;
        break;
      case '#dialog':
        template += `{{dialog}}`;
        break;
      case '#change_password':
        template += `{{changePassword}}`;
        break;
      case '#chat_list':
        template += `{{chatList}}`;
        break;
      case '#settings':
        template += `{{settings}}`;
        break;
      case '#settings_change':
        template += `{{settingsChange}}`;
        break
      case '#sign_in':
        template += `{{signIn}}`;
        break
      case '#sign_up':
        template += `{{signUp}}`;
        break
      case '#error_client':
        template += `{{errorClient}}`;
        break
      case '#error_server':
        template += `{{errorServer}}`;
        break
      default:
        template += `{{errorClient}}`;
    }
    return template;
  }
}

const router = new Router({
  blockClass: 'router',
  components,
  props: {
    route: "errorClient",
  },
  isRoot: true,
  el: '#app',
  name: 'router'
});

class RouteChange {
  private newPagePath: string;
  private oldPagePath: string;

  constructor() {
    const path = snakeToCamel(
      location.hash.split('#')[1] || ""
    );
    this.oldPagePath = path;
    this.newPagePath = path;
  }

  observe () {
    window.addEventListener('popstate', () => {
      const path = snakeToCamel(
        location.hash.split('#')[1] || ""
      );

      const oldView = router.components[this.oldPagePath];

      try {
        oldView.destroy();
      } catch (e) {
        console.warn(e, oldView);
      }
      router.setProps({
        route: path
      })
      this.oldPagePath = path;
    });
  }
}
new RouteChange().observe();
