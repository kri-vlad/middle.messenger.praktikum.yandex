import Block from "../framework/block";

class Error extends Block {
  constructor({ name = '', props = {} }) {
    super({
      name: name,
      props: props,
      tagName: "section",
      blockClass: "error-page",
    });
  }
  render() {
    return `
      <h2 class="error-page__title">{{title}}</h2>
      <p class="error-page__description">{{description}}</p>
      <a class="error-page__link link" href="#chat_list">Назад к чатам</a>
    `;
  }
}

export default Error
