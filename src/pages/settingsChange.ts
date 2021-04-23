import Block from "../framework/block";
import FormValidator from "../framework/formValidator";
import HTTPTransport from "../framework/http";
import Button from "../components/button";

const http = new HTTPTransport();

const button = new Button({
  name: "ButtonSaveAccount",
  blockClass: "profile__wrapper-submit",
  props: {
    type: 'submit',
    text: 'Сохранить',
    classButton: 'profile__btn-submit'
  }
});

import '../assets/css/settings.scss'


class SettingsChange extends Block {
  private formValidator: FormValidator;
  constructor({ root }) {
    super({
      name: "settingsChange",
      tagName: "section",
      components: {
        button
      },
      blockClass: "settings",
      root: root
    });

    this.formValidator = null;
  }
  render() {
    return `
      <h2 class="visually-hidden">Профиль</h2>
      <a class="settings__link-to-chats" href="#chat_list">Вернуться к списку чатов</a>
      <form class="settings__profile  profile" method="post" name="settings-change">
        <label class="profile__label-avatar" for="avatar">Загрузить фотографию</label>
        <input class="profile__upload-avatar" type="file" id="avatar" name="avatar">
        <b class="profile__preview-name">Иван</b>
        <ul class="profile__list">
          <li class="profile__list-item">
            <label class="profile__form-item-label">
              Почта
              <input class="profile__form-input" type="email" name="email" value="pochta@yandex.ru" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$">
            </label>
          </li>
          <li class="profile__list-item">
            <label class="profile__form-item-label">
              Логин
              <input class="profile__form-input" type="text" name="login" value="ivanivanov" minlength="4" maxlength="24" pattern="[a-zA-Z0-9]{4,24}">
            </label>
          </li>
          <li class="profile__list-item">
            <label class="profile__form-item-label">
              Имя
              <input class="profile__form-input" type="text" name="first_name" value="Иван" minlength="4" maxlength="24">
            </label>
          </li>
          <li class="profile__list-item">
            <label class="profile__form-item-label">
              Фамилия
              <input class="profile__form-input" type="text" name="second_name" value="Иванов" minlength="4" maxlength="24">
            </label>
          </li>
          <li class="profile__list-item">
            <label class="profile__form-item-label">
              Имя в чате
              <input class="profile__form-input" type="text" name="display_name" value="Иван" minlength="4" maxlength="24">
            </label>
          </li>
          <li class="profile__list-item">
            <label class="profile__form-item-label">
              Телефон
              <input class="profile__form-input" type="tel" name="phone" value="+7 (909) 967 30 30" pattern="[+]7 [(]{1}[0-9]{3}[)]{1} [0-9]{3} [0-9]{2} [0-9]{2}$" required>
            </label>
          </li>
        </ul>
        {{button}}
      </form>
    `;
  }
  componentMounted() {
    document.title = "Settings change";

    function tryToChangeSettings(formData) {
      const formDataAsObject = {};
      formData.forEach((value, prop) => {formDataAsObject[prop] = value});
      return http.put(
        'https://ya-praktikum.tech/api/v2/user/profile',
        {
          body: JSON.stringify(formDataAsObject),
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
          }
        },
        4000
      );
    }

    this.root.nextTick(() => {
      const form:HTMLFormElement = document.querySelector("form[name=settings-change]");

      function errorHandler(error): void {
        console.warn('errorHandler', error);
      }

      function successHandler () {
        const formData = new FormData(form)
        tryToChangeSettings(formData).then().catch((reason) => {
          console.warn(reason);
        })
      }

      if (!form) {
        errorHandler("Form is not found");
      } else {
        this.formValidator = new FormValidator(form, successHandler, errorHandler);
        this.formValidator.init()
      }

    });

  }
  componentDestroy(): void {
    try {
      this.formValidator.destroy()
    } catch (e) {
      console.warn("missing formValidator", e)
    }
  }
}

export default SettingsChange
