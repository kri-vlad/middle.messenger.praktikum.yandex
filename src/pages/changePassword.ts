import Block from "../framework/block";
import HTTPTransport from "../framework/http";
import FormValidator from "../framework/formValidator";

import '../assets/css/settings.scss'
import Button from "../components/button";

const http = new HTTPTransport();

const button = new Button({
  name: "ButtonChangePassword",
  blockClass: "profile__wrapper-submit",
  props: {
    type: 'submit',
    text: 'Сохранить',
    classButton: 'profile__btn-submit'
  }
});

class ChangePassword extends Block {
  private formValidator: FormValidator;
  constructor({ root }) {
    super({
      name: "changePassword",
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
      <h2 class="visually-hidden">Сменить пароль</h2>
      <a class="settings__link-to-chats" href="#chat_list">Вернуться к списку чатов</a>
      <form class="settings__profile  profile" methods="put" name="change-password">
        <button class="profile__upload-avatar" name="avatar">Загрузить фотографию</button>
        <b class="profile__preview-name">Иван</b>
        <ul class="profile__list">
          <li class="profile__list-item">
            <label class="profile__form-item-label">
              Старый пароль
              <input class="profile__form-input" type="password" name="oldPassword" value="">
            </label>
          </li>
          <li class="profile__list-item">
            <label class="profile__form-item-label">
              Новый пароль
              <input class="profile__form-input" type="password" name="newPassword" value="">
            </label>
          </li>
          <li class="profile__list-item">
            <label class="profile__form-item-label">
              Повторите новый пароль
              <input class="profile__form-input" type="password" name="password_second" value="">
            </label>
          </li>
        </ul>
        {{button}}
      </form>
    `;
  }
  componentMounted() {
    document.title = "Change Password";

    function tryToChangePassword(formData) {
      const formDataAsObject = {};
      formData.forEach((value, prop) => {formDataAsObject[prop] = value});
      return http.put(
        'https://ya-praktikum.tech/api/v2/user/password',
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
      const form:HTMLFormElement = document.querySelector("form[name=change-password]");
      function errorHandler(error): void {
        console.warn('errorHandler', error);
      }

      function successHandler () {
        const formData = new FormData(form)
        tryToChangePassword(formData).then().catch((reason) => {
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

export default ChangePassword
