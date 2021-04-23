import Block from "../framework/block";
import HTTPTransport from "../framework/http";
import FormValidator from "../framework/formValidator";

const image = require('../assets/images/test-images-for-dialog.png');

import '../assets/css/chats.scss'

const http = new HTTPTransport();

class Dialog extends Block {
  private formValidator: FormValidator;
  constructor({ root }) {
    super({
      tagName: "section",
      blockClass: "chat",
      name: "dialog",
      root: root
    });

    this.formValidator = null;
  }
  render() {
    return `
      <aside class="chat-list  chat__list">
        <header class="chat-list__header">
          <a class="chat-list__link-to-profile" href="/index.html#settings">Профиль</a>
          <label class="chat-list__search-label">
            <input class="chat-list__search" type="text" placeholder="Поиск">
            <svg class="chat-list__search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5924 11.4138C10.1605 12.8457 7.83886 12.8457 6.40694 11.4138C4.97502 9.9819 4.97502 7.6603 6.40694 6.22837C7.83886 4.79645 10.1605 4.79645 11.5924 6.22837C13.0243 7.6603 13.0243 9.9819 11.5924 11.4138ZM12.0328 12.7968C10.0725 14.2962 7.25696 14.1495 5.46413 12.3566C3.51151 10.404 3.51151 7.23819 5.46413 5.28556C7.41675 3.33294 10.5826 3.33294 12.5352 5.28556C14.3279 7.07831 14.4747 9.89373 12.9755 11.8539L16.5423 15.4206L15.5994 16.3635L12.0328 12.7968Z" fill="#999999"/>
            </svg>
          </label>
        </header>
        <ul class="chat-list__list">
          <li class="chat-list__dialog dialog-preview">
            <div class="dialog-preview__avatar">Изображение фотографии</div>
            <div class="dialog-preview__info">
              <b class="dialog-preview__name">Андрей</b>
              <p class="dialog-preview__message">Изображение</p>
            </div>
            <div class="dialog-preview__stats">
              <time class="dialog-preview__time">10:49</time>
              <span class="dialog-preview__count-messages">2</span>
            </div>
            <a href="/index.html#dialog" class="chat-list__list-link"></a>
          </li>
          <li class="chat-list__dialog dialog-preview">
            <div class="dialog-preview__avatar">Изображение фотографии</div>
            <div class="dialog-preview__info">
              <b class="dialog-preview__name">Вадим</b>
              <p class="dialog-preview__message  dialog-preview__message--my-message">Круто!</p>
            </div>
            <div class="dialog-preview__stats">
              <time class="dialog-preview__time">10:49</time>
            </div>
            <a href="/index.html#dialog" class="chat-list__list-link"></a>
          </li>
          <li class="chat-list__dialog dialog-preview">
            <div class="dialog-preview__avatar">Изображение фотографии</div>
            <div class="dialog-preview__info">
              <b class="dialog-preview__name">Диана</b>
              <p class="dialog-preview__message">В 2008 году художник Jon Rafman начал собирать картины</p>
            </div>
            <div class="dialog-preview__stats">
              <time class="dialog-preview__time">10:49</time>
              <span class="dialog-preview__count-messages">4</span>
            </div>
            <a href="/index.html#dialog" class="chat-list__list-link"></a>
          </li>
          <li class="chat-list__dialog dialog-preview">
            <div class="dialog-preview__avatar">Изображение фотографии</div>
            <div class="dialog-preview__info">
              <b class="dialog-preview__name">Андрей</b>
              <p class="dialog-preview__message">Изображение</p>
            </div>
            <div class="dialog-preview__stats">
              <time class="dialog-preview__time">10:49</time>
              <span class="dialog-preview__count-messages">2</span>
            </div>
            <a href="/index.html#dialog" class="chat-list__list-link"></a>
          </li>
          <li class="chat-list__dialog dialog-preview">
            <div class="dialog-preview__avatar">Изображение фотографии</div>
            <div class="dialog-preview__info">
              <b class="dialog-preview__name">Вадим</b>
              <p class="dialog-preview__message  dialog-preview__message--my-message">Круто!</p>
            </div>
            <div class="dialog-preview__stats">
              <time class="dialog-preview__time">10:49</time>
            </div>
            <a href="/index.html#dialog" class="chat-list__list-link"></a>
          </li>
          <li class="chat-list__dialog dialog-preview">
            <div class="dialog-preview__avatar">Изображение фотографии</div>
            <div class="dialog-preview__info">
              <b class="dialog-preview__name">Диана</b>
              <p class="dialog-preview__message">В 2008 году художник Jon Rafman начал собирать картины</p>
            </div>
            <div class="dialog-preview__stats">
              <time class="dialog-preview__time">10:49</time>
              <span class="dialog-preview__count-messages">4</span>
            </div>
            <a href="/index.html#dialog" class="chat-list__list-link"></a>
          </li>
          <li class="chat-list__dialog dialog-preview">
            <div class="dialog-preview__avatar">Изображение фотографии</div>
            <div class="dialog-preview__info">
              <b class="dialog-preview__name">Андрей</b>
              <p class="dialog-preview__message">Изображение</p>
            </div>
            <div class="dialog-preview__stats">
              <time class="dialog-preview__time">10:49</time>
              <span class="dialog-preview__count-messages">2</span>
            </div>
            <a href="/index.html#dialog" class="chat-list__list-link"></a>
          </li>
          <li class="chat-list__dialog dialog-preview">
            <div class="dialog-preview__avatar">Изображение фотографии</div>
            <div class="dialog-preview__info">
              <b class="dialog-preview__name">Вадим</b>
              <p class="dialog-preview__message  dialog-preview__message--my-message">Круто!</p>
            </div>
            <div class="dialog-preview__stats">
              <time class="dialog-preview__time">10:49</time>
            </div>
            <a href="/index.html#dialog" class="chat-list__list-link"></a>
          </li>
          <li class="chat-list__dialog dialog-preview dialog-preview--opened">
            <div class="dialog-preview__avatar"">Изображение фотографии</div>
            <div class="dialog-preview__info">
              <b class="dialog-preview__name">Диана</b>
              <p class="dialog-preview__message  dialog-preview__message--my-message">Занятно :)</p>
            </div>
            <div class="dialog-preview__stats">
              <time class="dialog-preview__time">10:49</time>
            </div>
            <a href="/index.html#dialog" class="chat-list__list-link"></a>
          </li>
          <li class="chat-list__dialog dialog-preview">
            <div class="dialog-preview__avatar">Изображение фотографии</div>
            <div class="dialog-preview__info">
              <b class="dialog-preview__name">Андрей</b>
              <p class="dialog-preview__message">Изображение</p>
            </div>
            <div class="dialog-preview__stats">
              <time class="dialog-preview__time">10:49</time>
              <span class="dialog-preview__count-messages">2</span>
            </div>
            <a href="/index.html#dialog" class="chat-list__list-link"></a>
          </li>
          <li class="chat-list__dialog dialog-preview">
            <div class="dialog-preview__avatar">Изображение фотографии</div>
            <div class="dialog-preview__info">
              <b class="dialog-preview__name">Вадим</b>
              <p class="dialog-preview__message  dialog-preview__message--my-message">Круто!</p>
            </div>
            <div class="dialog-preview__stats">
              <time class="dialog-preview__time">10:49</time>
            </div>
            <a href="/index.html#dialog" class="chat-list__list-link"></a>
          </li>
          <li class="chat-list__dialog dialog-preview">
            <div class="dialog-preview__avatar">Изображение фотографии</div>
            <div class="dialog-preview__info">
              <b class="dialog-preview__name">Диана</b>
              <p class="dialog-preview__message">В 2008 году художник Jon Rafman начал собирать картины</p>
            </div>
            <div class="dialog-preview__stats">
              <time class="dialog-preview__time">10:49</time>
              <span class="dialog-preview__count-messages">4</span>
            </div>
            <a href="/index.html#dialog" class="chat-list__list-link"></a>
          </li>
        </ul>
      </aside>
      <section class="dialog chat__dialog-container">
        <header class="dialog__header">
          <a class="dialog__avatar" href="#">Изображение фотографии</a>
          <b class="dialog__name">Диана</b>
          <button class="dialog__options">
            Опции
            <svg width="3" height="15" viewBox="0 0 3 15" xmlns="http://www.w3.org/2000/svg">
              <circle cx="1.5" cy="1.5" r="1.5"/>
              <circle cx="1.5" cy="7.5" r="1.5"/>
              <circle cx="1.5" cy="13.5" r="1.5"/>
            </svg>
            <ul class="dropdown  dialog__options-dropdown">
              <li class="dropdown__item  dropdown__item--add-user">Добавить пользователя</li>
              <li class="dropdown__item  dropdown__item--delete-user">Удалить пользователя</li>
            </ul>
          </button>
        </header>
        <main class="dialog__container-messages">
          <ul class="dialog__list-message">
            <li class="dialog__date-message">
              19 июня
            </li>
            <li class="dialog__item-message  dialog__item-message--left">
              <p class="dialog__message">
                Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.

                Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.
                <time class="dialog__message-time">10:37</time>
              </p>
            </li>
            <li class="dialog__item-message  dialog__item-message--left  dialog__item-message--images">
              <img class="dialog__item-image" src="${image}">
              <time class="dialog__message-time">10:41</time>
            </li>
            <li class="dialog__item-message  dialog__item-message--right">
              <p class="dialog__message">
                Занятно :)
                <time class="dialog__message-time">10:49</time>
              </p>
            </li>
          </ul>
        </main>
        <footer class="dialog__footer">
          <button class="dialog__btn-more">
            Дополнительно
            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.18661 13.5L14.7628 5.92386L15.7056 6.86667L8.12942 14.4428L7.18661 13.5Z"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.70065 16.0141L17.2768 8.43792L18.2196 9.38073L10.6435 16.9569L9.70065 16.0141Z"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0433 21.3567L22.6194 13.7806L23.5623 14.7234L15.9861 22.2995L15.0433 21.3567Z"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5573 23.8708L25.1335 16.2946L26.0763 17.2374L18.5001 24.8136L17.5573 23.8708Z"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5574 23.8709C14.9423 26.486 10.7118 26.4954 8.10829 23.8919C5.50479 21.2884 5.51421 17.0579 8.12933 14.4428L7.18652 13.5C4.04838 16.6381 4.03708 21.7147 7.16127 24.8389C10.2855 27.9631 15.3621 27.9518 18.5002 24.8137L17.5574 23.8709Z"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6195 13.7806L23.5623 14.7234C26.003 12.2826 26.0118 8.3341 23.5819 5.90417C21.152 3.47424 17.2035 3.48303 14.7627 5.92381L15.7055 6.86662C17.6233 4.94887 20.7257 4.94196 22.6349 6.85119C24.5441 8.76042 24.5372 11.8628 22.6195 13.7806Z"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.70093 16.0144C7.95752 17.7578 7.95123 20.5782 9.6869 22.3138C11.4226 24.0495 14.2429 24.0432 15.9863 22.2998L15.0435 21.357C13.8231 22.5774 11.8489 22.5818 10.6339 21.3668C9.41895 20.1518 9.42335 18.1776 10.6437 16.9572L9.70093 16.0144Z"/>
            </svg>
            <ul class="dropdown  dialog__btn-more-dropdown">
              <li class="dropdown__item  dropdown__item--photo-video">Фото или Видео</li>
              <li class="dropdown__item  dropdown__item--file">Файл</li>
              <li class="dropdown__item  dropdown__item--location">Локация</li>
            </ul>
          </button>
          <form class="dialog__form" action="/" method="POST" name="dialog-form">
            <input class="dialog__input-message" type="text" name="message" placeholder="Сообщение">
            <button class="dialog__send-message" type="submit">Отправить</button>
          </form>
        </footer>
      </section>
    `;
  }
  componentMounted() {
    document.title = "Dialog";

    this.root.nextTick(() => {
      const form: HTMLFormElement = document.querySelector("form[name=dialog-form]");

      function errorHandler(error): void {
        console.warn('errorHandler', error);
      }

      function successHandler() {
        //
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
    try {
      this.formValidator.destroy()
    } catch (e) {
      console.warn("missing formValidator", e)
    }
  }
}

export default Dialog
