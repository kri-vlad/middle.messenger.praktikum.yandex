import Block from "../framework/block";
import HTTPTransport from "../framework/http";
import FormValidator from "../framework/formValidator";

import Button from "../components/button";

import '../assets/css/form.scss'
import '../assets/css/modal.scss'

const http = new HTTPTransport();

const button = new Button({
  name: "ButtonSignIn",
  blockClass: "form__wrapper-submit",
  props: {
    type: 'submit',
    text: 'Авторизоваться',
    classButton: 'form__btn-submit'
  }
});

class SignIn extends Block {
  private formValidator: FormValidator;
  constructor({ root }) {
    super({
      name: "signIn",
      components: {
        button
      },
      tagName: "section",
      blockClass: "modal",
      root: root
    });

    this.formValidator = null;
  }
  render() {
    return `
      <h2 class="modal__title">Вход</h2>
      <form class="modal__form  form" name="signin" method="post">
        <ul class="form__list">
          <li class="form__field  input">
            <input class="input__enter" type="text" id="login" name="login" placeholder="Логин">
            <label class="input__label" for="login">Логин</label>
          </li>
          <li class="form__field  input">
            <input class="input__enter" type="password" id="password" name="password" placeholder="Пароль">
            <label class="input__label" for="password">Пароль</label>
          </li>
        </ul>
        {{button}}
      </form>
      <a class="modal__link  link" href="#sign_up">Нет аккаунта?</a>
    `;
  }
  componentMounted() {
    document.title = "Sign In";

    function tryToSignIn(formData) {
      const formDataAsObject = {};
      formData.forEach((value, prop) => {formDataAsObject[prop] = value});
      return http.post(
        'https://ya-praktikum.tech/api/v2/auth/signin',
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

      const form:HTMLFormElement = document.querySelector("form[name=signin]");

      function errorHandler(error): void {
        console.warn('errorHandler', error);
      }

      function successHandler () {
        const formData = new FormData(form)
        tryToSignIn(formData).then().catch((reason) => {
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

export default SignIn
