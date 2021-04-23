import Block from "../framework/block";

import '../assets/css/error.scss'
import ErrorTemplate from "../components/error";

const errorTemplate = new ErrorTemplate({
  name: "ErrorServer",
  props: {
    title: "500",
    description: "Мы уже фиксим"
  }
});

class ErrorServer extends Block {
  constructor() {
    super({
      name: "errorServer",
      tagName: "section",
      blockClass: "error-page",
      components: { errorTemplate }
    });
  }
  render() {
    return `
      {{errorTemplate}}
    `;
  }
  componentMounted() {
    document.title = "Error Server";
  }
}

export default ErrorServer
