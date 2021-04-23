import EventBus from "./eventBus";


class Block {

  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_MOUNTED: "flow:component-mounted",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
    FLOW_DESTROY: "flow:destroy"
  };

  _element = null;
  _meta = null;


  private isMounted: boolean;
  private elId: string | null;
  private _root: Block;
  private readonly blockClass: string;
  private readonly props: Record<string, string>;
  private eventBus: () => EventBus;
  components: Record<string, Block>;
  private isRoot: boolean;
  private el: string | null;
  name: string;
  private _components: Record<string, (() => void)>;
  private nextTickCallbacks;

  /**
   * Block creation
   * @param {string} [tagName]
   * @param {Object} [props]
   * @param {Record<string, (() => import)>} [components]
   * @param {string} [blockClass]
   * @param {Block} [root]
   * @param {boolean} [isRoot]
   * @param {string|null} [el]
   * @param {string} name
   */
  constructor({
    tagName = 'div',
    props = {},
    components = {},
    blockClass = '',
    root = null,
    isRoot = false,
    el = null,
    name = ''
  }) {
    const eventBus = new EventBus();
    this._meta = {
      tagName,
      props
    };

    this.name = name;

    this.isMounted = false;

    this.elId = null;

    this.el = el;

    this.isRoot = isRoot;

    this._root = root;

    if (isRoot) {
      this._root = this;
    }

    this.blockClass = blockClass;

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);

    this.nextTickCallbacks = [];

    this._components = components || {};
    this.components = {};

    const importChildComponentsQue = [];
    const tpl : string = this.render();
    const tplTags = tpl.match(/({{)(\w+)(}})/gmi) || [];

    if (Object.keys(components).length) {
      for (const [ componentName, componentImportFunction ] of Object.entries(components) ) {

        const containsInTemplate = tplTags.includes(`{{${componentName}}}`);
        const isBlock = componentImportFunction instanceof Block;
        const componentSourceType = typeof componentImportFunction;

        if (componentImportFunction instanceof Block) {
          componentImportFunction.setRoot(this);
          this.components[componentName] = componentImportFunction;
        }

        if (componentSourceType === "function") {
          const importedComponent: unknown | string = componentImportFunction;
          importChildComponentsQue.push(importedComponent());
        }
      }
    }
    if (!importChildComponentsQue.length) {
      eventBus.emit(Block.EVENTS.INIT);
    } else {

      Promise.allSettled(importChildComponentsQue).then((results) => {
        for (let i = 0; i < results.length; i++) {
          const importResult = results[i];
          if (importResult.status !== "rejected") {
            const childComponentClass = importResult.value.default;
            const childComponentInstance = new childComponentClass({
              root: this
            });
            this.components[childComponentInstance.name] = childComponentInstance;
          }

        }
        eventBus.emit(Block.EVENTS.INIT);
      })
    }

    const template = this.render();
  }

  get root() {
    return this._root;
  }

  setRoot(root: Block): void {
    this._root = root;
  }

  nextTick = (callback: () => void): void => {
    if (callback && typeof callback === "function") {
      this.nextTickCallbacks.push(callback);
    }
  };

  _registerEvents(eventBus: EventBus): void {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_MOUNTED, this._componentMounted.bind(this));
    eventBus.on(Block.EVENTS.FLOW_DESTROY, this._componentDestroy.bind(this));
  }

  destroy = () => {
    this.isMounted = false;
    this.eventBus().emit(Block.EVENTS.FLOW_DESTROY);
  }

  _componentDestroy = () => {
    this.componentDestroy();

    if (Object.keys(this.components).length) {
      for (const componentName of Object.keys(this.components)) {
        const component = this.components[componentName];

        component.eventBus().emit(Block.EVENTS.FLOW_DESTROY);
        this.components[componentName] = null;
      }
    }

    this.eventBus().emit(Block.EVENTS.FLOW_CDU, this.props, {});
    this.isMounted = false;
  }

  componentDestroy(): void {
    //
  }

  _componentMounted () {
    this.componentMounted();
  }

  componentMounted() {
    //
  }

  _createResources(): void {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init(): void {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidMount(): void {
    let error = null;

    const template = this.render();

    if (template === '') {
      error = 'Template is empty!'
    }

    if (error) {
      throw new Error(error);
    }

    this.componentDidMount();
    this.isMounted = true;
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    this.eventBus().emit(Block.EVENTS.FLOW_MOUNTED);
  }

  componentDidMount(): void {
    //
  }

  _componentDidUpdate(oldProps: Record<string, string>, newProps: Record<string, string>): void {
    this.componentDidUpdate();
    if (oldProps !== newProps) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate(): void {
    //
  }

  setProps = (nextProps: Record<string, string>): void => {
    if (!nextProps) {
      return;
    }
    Object.assign(this.props, nextProps);
    this.eventBus().emit(Block.EVENTS.FLOW_CDU, this.props, nextProps);
  };

  get element(): Element {
    return this._element;
  }

  _render(): void {
    let template:string = this.render();

    const componentsAsArray = Object.keys(this.components);
    const propsAsArray = Object.keys(Object.assign({}, this.props));

    for (let i = 0; i < propsAsArray.length; i++) {
      template = template.replace(new RegExp(
        `({{)(${propsAsArray[i]})(}})`
      ), () => {
        return this.props[propsAsArray[i]];
      });
    }

    for (let i = 0; i < componentsAsArray.length; i++) {
      template = template.replace(new RegExp(
        `({{)(${componentsAsArray[i]})(}})`
      ), () => {
        return this.components[componentsAsArray[i]].getContent().outerHTML;
      });
    }

    this._element.innerHTML = template;

    if (!this.isMounted) {
      this.eventBus().emit(Block.EVENTS.FLOW_MOUNTED);
    }

    if (this.root) {
      if (this.nextTickCallbacks.length) {
        this.nextTickCallbacks.forEach(callback => {
          callback();
          callback = null;
        })
      }
    }
  }

  render(): string {
    return '';
  }

  getContent(): Element {
    return this.element;
  }

  _makePropsProxy(props) {
    return new Proxy(props, {
      deleteProperty() {
        throw new Error('Нет прав');
      }
    });
  }

  _createDocumentElement(tagName: string): Element {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков

    let el = null;

    if (this.el) {
      el = document.querySelector(this.el);
    }

    if (el !== null) {
      if (this.blockClass) {
        el.classList.add(this.blockClass);
      }
      return el;
    }

    const element = document.createElement(tagName);
    if (this.blockClass !== '') {
      element.className = this.blockClass;
    }

    this.elId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    element.id = this.elId;

    return element;
  }

  show(): void {
    this.getContent()["style"].display = 'block';
    this.eventBus().emit(Block.EVENTS.FLOW_CDU, this.props, {});
  }

  hide(): void {
    this.getContent()["style"].display = 'none';
    this.eventBus().emit(Block.EVENTS.FLOW_CDU, this.props, {});
  }
}


export default Block
