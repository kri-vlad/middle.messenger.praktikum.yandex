import Block from "../framework/block";
import ErrorTemplate from "../components/error";

import '../assets/css/error.scss'

const errorTemplate = new ErrorTemplate({
  name: "errorClient",
  props: {
    title: "404",
    description: "Не туда попали"
  }
});

class ErrorClient extends Block {
  constructor() {
    super({
      name: "errorClient",
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
    document.title = "Error Client";
  }
}

export default ErrorClient
