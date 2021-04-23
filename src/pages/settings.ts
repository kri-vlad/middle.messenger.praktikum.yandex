import Block from "../framework/block";

import '../assets/css/settings.scss'

class Settings extends Block {
  constructor() {
    super({
      name: "settings",
      tagName: "section",
      blockClass: "settings",
    });
  }
  render() {
    return `
      <h2 class="visually-hidden">Профиль</h2>
      <a class="settings__link-to-chats" href="#chat_list">Вернуться к списку чатов</a>
      <form class="settings__profile  profile" methods="POST" action="/">
        <button class="profile__upload-avatar">Загрузить фотографию</button>
        <b class="profile__preview-name">Иван</b>
        <ul class="profile__list">
          <li class="profile__list-item">
            <label class="profile__form-item-label">
              Почта
              <input class="profile__form-input" type="email" name="email" value="pochta@yandex.ru" disabled>
            </label>
          </li>
          <li class="profile__list-item">
            <label class="profile__form-item-label">
              Логин
              <input class="profile__form-input" type="text" name="login" value="ivanivanov" disabled>
            </label>
          </li>
          <li class="profile__list-item">
            <label class="profile__form-item-label">
              Имя
              <input class="profile__form-input" type="text" name="first_name" value="Иван" disabled>
            </label>
          </li>
          <li class="profile__list-item">
            <label class="profile__form-item-label">
              Фамилия
              <input class="profile__form-input" type="text" name="second_name" value="Иванов" disabled>
            </label>
          </li>
          <li class="profile__list-item">
            <label class="profile__form-item-label">
              Имя в чате
              <input class="profile__form-input" type="text" name="display_name" value="Иван" disabled>
            </label>
          </li>
          <li class="profile__list-item">
            <label class="profile__form-item-label">
              Телефон
              <input class="profile__form-input" type="tel" name="phone" value="+7 (909) 967 30 30" disabled>
            </label>
          </li>
        </ul>
        <ul class="profile__list">
          <li class="profile__list-item"><a href="#settings_change" class="profile__button">Изменить данные</a></li>
          <li class="profile__list-item"><a href="#change_password" class="profile__button">Изменить пароль</a></li>
          <li class="profile__list-item"><button class="profile__button  profile__button--exit" type="button">Выйти</button></li>
        </ul>
      </form>
    `;
  }
  componentMounted() {
    document.title = "Settings";
  }
}

export default Settings
