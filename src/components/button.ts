import Block from "../framework/block";

class Button extends Block {
  constructor({
    name = '',
    props = {},
    blockClass
  }) {
    super({
      name,
      tagName: "div",
      props,
      blockClass
    });
  }

  render() {
    return `
      <button class="btn {{classButton}}" type="{{type}}">{{text}}</button>
    `;
  }
}

export default Button
