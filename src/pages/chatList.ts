import Block from "../framework/block";

import '../assets/css/chats.scss'

class ChatList extends Block {
  constructor() {
    super({
      name: "chatList",
      tagName: "section",
      blockClass: "chat",
    });
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
          <li class="chat-list__dialog dialog-preview">
            <div class="dialog-preview__avatar">Изображение фотографии</div>
            <div class="dialog-preview__info">
              <b class="dialog-preview__name">Диана</b>
              <p class="dialog-preview__message">Занятно :)</p>
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
        </ul>
      </aside>
      <div class="dialog-container  chat__dialog-container">
        <p class="dialog-container__description">Выберите чат чтобы отправить сообщение</p>
      </div>
    `;
  }
  componentMounted() {
    document.title = "Chat list";
  }
}

export default ChatList
