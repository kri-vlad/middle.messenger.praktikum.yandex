import Block from "../framework/block";

import '../assets/css/screen-list.scss'
import '../assets/css/modal.scss'

class Home extends Block {
  constructor() {
    super({
      name: "home",
      tagName: "section",
      blockClass: "screen-list modal",
    });
  }
  render() {
    return `
      <h2 class="screen-list__title modal__title">Список экранов</h2>
      <ul class="screen-list__list">
        <li class="screen-list__item"><a class="screen-list__link" href="#sign_in">Авторизация</a></li>
        <li class="screen-list__item"><a class="screen-list__link" href="#sign_up">Регистрация</a></li>
        <li class="screen-list__item"><a class="screen-list__link" href="#chat_list">Список чатов</a></li>
        <li class="screen-list__item"><a class="screen-list__link" href="#dialog">Диалог</a></li>
        <li class="screen-list__item"><a class="screen-list__link" href="#settings">Аккаунт</a></li>
        <li class="screen-list__item"><a class="screen-list__link" href="#settings_change">Редактировать профиль</a></li>
        <li class="screen-list__item"><a class="screen-list__link" href="#change_password">Сменить пароль</a></li>
        <li class="screen-list__item"><a class="screen-list__link" href="#error_client">Страница 404</a></li>
        <li class="screen-list__item"><a class="screen-list__link" href="#error_server">Страница 5**</a></li>
      </ul>
    `;
  }
  componentMounted() {
    document.title = "Home";
  }
}

export default Home
