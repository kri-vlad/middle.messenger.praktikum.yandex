import Block from "../framework/block";
import HTTPTransport from "../framework/http";
import FormValidator from "../framework/formValidator";

import Button from "../components/button";

import '../assets/css/form.scss'
import '../assets/css/modal.scss'

const http = new HTTPTransport();

const button = new Button({
  name: "ButtonSignUp",
  blockClass: "form__wrapper-submit",
  props: {
    type: 'submit',
    text: 'Зарегистрироваться',
    classButton: 'form__btn-submit'
  }
});

class SignUp extends Block {
  private formValidator: FormValidator;
  constructor({ root }) {
    super({
      name: "signUp",
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
      <h2 class="modal__title">Регистрация</h2>
      <form class="modal__form  form  needs-validation" name="signup" method="post">
        <ul class="form__list">
          <li class="form__field  input">
            <input class="input__enter" type="email" id="email" name="email" placeholder="Почта">
            <label class="input__label" for="email">Почта</label>
          </li>
          <li class="form__field  input">
            <input class="input__enter" type="text" id="login" name="login" placeholder="Логин">
            <label class="input__label" for="login">Логин</label>
          </li>
          <li class="form__field  input">
            <input class="input__enter" type="text" id="first_name" name="first_name" placeholder="Имя">
            <label class="input__label" for="first_name">Имя</label>
          </li>
          <li class="form__field  input">
            <input class="input__enter" type="text" id="second_name" name="second_name" placeholder="Фамилия">
            <label class="input__label" for="second_name">Иванов</label>
          </li>
          <li class="form__field  input">
            <input class="input__enter" type="text" id="phone" name="phone" placeholder="Телефон">
            <label class="input__label" for="phone">Телефон</label>
          </li>
          <li class="form__field  input">
            <input class="input__enter" type="password" id="password" name="password" placeholder="Пароль">
            <label class="input__label" for="password">Пароль</label>
          </li>
          <li class="form__field  input">
            <input class="input__enter" type="password" id="password-repeat" name="password_second" placeholder="Пароль (ещё раз)">
            <label class="input__label" for="password-repeat">Пароль (ещё раз)</label>
          </li>
        </ul>
        {{button}}
      </form>
      <a class="modal__link  link" href="#sign_in">Войти</a>
    `;
  }
  componentMounted() {
    document.title = "Sign Up";

    this.root.nextTick(() => {
      const form:HTMLFormElement = document.querySelector("form[name=signup]");

      function tryToSignUp() {
        return http.post(
          'https://ya-praktikum.tech/api/v2/auth/signin',
          {
            body: JSON.stringify({
              email: "",
              login: "yaya",
              password: "yaya",
              first_name: "",
              second_name: "",
              phone: "",
            }),
            headers: {
              accept: 'application/json',
              'Content-Type': 'application/json',
            }
          },
          4000
        );
      }

      function errorHandler(error): void {
        console.warn('errorHandler', error);
      }

      function successHandler () {
        tryToSignUp();
      }

      if (!form) {
        errorHandler("Form is not found");
      } else {
        this.formValidator = new FormValidator(form, successHandler, errorHandler);
        this.formValidator.init()
      }
    })
  }
  componentDestroy(): void {
    this.formValidator.destroy()
  }
}

export default SignUp
