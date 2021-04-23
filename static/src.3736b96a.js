parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"OZet":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=function(){function t(){e(this,t),this.listeners={}}return n(t,[{key:"on",value:function(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)}},{key:"off",value:function(e,t){if(!this.listeners[e])throw new Error("Нет события: ".concat(e));this.listeners[e]=this.listeners[e].filter(function(e){return e!==t})}},{key:"emit",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(!this.listeners[e])throw new Error("Нет события: ".concat(e));this.listeners[e].forEach(function(e){e.apply(void 0,n)})}}]),t}(),i=r;exports.default=i;
},{}],"Zfgr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("./eventBus"));function e(t){return t&&t.__esModule?t:{default:t}}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){return c(t)||u(t,e)||r(t,e)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,e){if(t){if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function u(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=n){var o,i,r=[],s=!0,u=!1;try{for(n=n.call(t);!(s=(o=n.next()).done)&&(r.push(o.value),!e||r.length!==e);s=!0);}catch(c){u=!0,i=c}finally{try{s||null==n.return||n.return()}finally{if(u)throw i}}return r}}function c(t){if(Array.isArray(t))return t}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function h(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}var f=function(){function e(i){var r=this,s=i.tagName,u=void 0===s?"div":s,c=i.props,a=void 0===c?{}:c,h=i.components,f=void 0===h?{}:h,m=i.blockClass,p=void 0===m?"":m,d=i.root,y=void 0===d?null:d,v=i.isRoot,E=void 0!==v&&v,_=i.el,b=void 0===_?null:_,k=i.name,T=void 0===k?"":k;l(this,e),this._element=null,this._meta=null,this.nextTick=function(t){t&&"function"==typeof t&&r.nextTickCallbacks.push(t)},this.destroy=function(){r.isMounted=!1,r.eventBus().emit(e.EVENTS.FLOW_DESTROY)},this._componentDestroy=function(){if(r.componentDestroy(),Object.keys(r.components).length)for(var t=0,n=Object.keys(r.components);t<n.length;t++){var o=n[t];r.components[o].eventBus().emit(e.EVENTS.FLOW_DESTROY),r.components[o]=null}r.eventBus().emit(e.EVENTS.FLOW_CDU,r.props,{}),r.isMounted=!1},this.setProps=function(t){t&&(Object.assign(r.props,t),r.eventBus().emit(e.EVENTS.FLOW_CDU,r.props,t))};var O=new t.default;this._meta={tagName:u,props:a},this.name=T,this.isMounted=!1,this.elId=null,this.el=b,this.isRoot=E,this._root=y,E&&(this._root=this),this.blockClass=p,this.props=this._makePropsProxy(a),this.eventBus=function(){return O},this._registerEvents(O),this.nextTickCallbacks=[],this._components=f||{},this.components={};var S=[],g=this.render().match(/({{)(\w+)(}})/gim)||[];if(Object.keys(f).length)for(var N=0,D=Object.entries(f);N<D.length;N++){var M=o(D[N],2),C=M[0],L=M[1],w=(g.includes("{{".concat(C,"}}")),n(L));if(L instanceof e&&(L.setRoot(this),this.components[C]=L),"function"===w){var F=L;S.push(F())}}S.length?Promise.allSettled(S).then(function(t){for(var n=0;n<t.length;n++){var o=t[n];if("rejected"!==o.status){var i=new(0,o.value.default)({root:r});r.components[i.name]=i}}O.emit(e.EVENTS.INIT)}):O.emit(e.EVENTS.INIT);this.render()}return h(e,[{key:"root",get:function(){return this._root}},{key:"setRoot",value:function(t){this._root=t}},{key:"_registerEvents",value:function(t){t.on(e.EVENTS.INIT,this.init.bind(this)),t.on(e.EVENTS.FLOW_CDM,this._componentDidMount.bind(this)),t.on(e.EVENTS.FLOW_CDU,this._componentDidUpdate.bind(this)),t.on(e.EVENTS.FLOW_RENDER,this._render.bind(this)),t.on(e.EVENTS.FLOW_MOUNTED,this._componentMounted.bind(this)),t.on(e.EVENTS.FLOW_DESTROY,this._componentDestroy.bind(this))}},{key:"componentDestroy",value:function(){}},{key:"_componentMounted",value:function(){this.componentMounted()}},{key:"componentMounted",value:function(){}},{key:"_createResources",value:function(){var t=this._meta.tagName;this._element=this._createDocumentElement(t)}},{key:"init",value:function(){this._createResources(),this.eventBus().emit(e.EVENTS.FLOW_CDM)}},{key:"_componentDidMount",value:function(){var t=null;if(""===this.render()&&(t="Template is empty!"),t)throw new Error(t);this.componentDidMount(),this.isMounted=!0,this.eventBus().emit(e.EVENTS.FLOW_RENDER),this.eventBus().emit(e.EVENTS.FLOW_MOUNTED)}},{key:"componentDidMount",value:function(){}},{key:"_componentDidUpdate",value:function(t,n){this.componentDidUpdate(),t!==n&&this.eventBus().emit(e.EVENTS.FLOW_RENDER)}},{key:"componentDidUpdate",value:function(){}},{key:"element",get:function(){return this._element}},{key:"_render",value:function(){for(var t=this,n=this.render(),o=Object.keys(this.components),i=Object.keys(Object.assign({},this.props)),r=function(e){n=n.replace(new RegExp("({{)(".concat(i[e],")(}})")),function(){return t.props[i[e]]})},s=0;s<i.length;s++)r(s);for(var u=function(e){n=n.replace(new RegExp("({{)(".concat(o[e],")(}})")),function(){return t.components[o[e]].getContent().outerHTML})},c=0;c<o.length;c++)u(c);this._element.innerHTML=n,this.isMounted||this.eventBus().emit(e.EVENTS.FLOW_MOUNTED),this.root&&this.nextTickCallbacks.length&&this.nextTickCallbacks.forEach(function(t){t(),t=null})}},{key:"render",value:function(){return""}},{key:"getContent",value:function(){return this.element}},{key:"_makePropsProxy",value:function(t){return new Proxy(t,{deleteProperty:function(){throw new Error("Нет прав")}})}},{key:"_createDocumentElement",value:function(t){var e=null;if(this.el&&(e=document.querySelector(this.el)),null!==e)return this.blockClass&&e.classList.add(this.blockClass),e;var n=document.createElement(t);return""!==this.blockClass&&(n.className=this.blockClass),this.elId=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),n.id=this.elId,n}},{key:"show",value:function(){this.getContent().style.display="block",this.eventBus().emit(e.EVENTS.FLOW_CDU,this.props,{})}},{key:"hide",value:function(){this.getContent().style.display="none",this.eventBus().emit(e.EVENTS.FLOW_CDU,this.props,{})}}]),e}();f.EVENTS={INIT:"init",FLOW_CDM:"flow:component-did-mount",FLOW_MOUNTED:"flow:component-mounted",FLOW_CDU:"flow:component-did-update",FLOW_RENDER:"flow:render",FLOW_DESTROY:"flow:destroy"};var m=f;exports.default=m;
},{"./eventBus":"OZet"}],"MeuM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(e){return e.toLowerCase().replace(/([-_][a-z])/g,function(e){return e.toUpperCase().replace(/[-_]/,"")})},r=e;exports.default=r;
},{}],"FheM":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"TUK3":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"FheM"}],"QCba":[function(require,module,exports) {
"use strict";var e=t(require("./framework/block")),r=t(require("./framework/utils"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function i(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,r,t){return r&&i(e.prototype,r),t&&i(e,t),e}function a(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&s(e,r)}function s(e,r){return(s=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function c(e){var r=p();return function(){var t,n=b(e);if(r){var o=b(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return l(this,t)}}function l(e,r){return!r||"object"!==n(r)&&"function"!=typeof r?f(e):r}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d={signIn:function(){return require("_bundle_loader")(require.resolve("./pages/signIn"))},signUp:function(){return require("_bundle_loader")(require.resolve("./pages/signUp"))},home:function(){return require("_bundle_loader")(require.resolve("./pages/home"))},dialog:function(){return require("_bundle_loader")(require.resolve("./pages/dialog"))},changePassword:function(){return require("_bundle_loader")(require.resolve("./pages/changePassword"))},chatList:function(){return require("_bundle_loader")(require.resolve("./pages/chatList"))},settings:function(){return require("_bundle_loader")(require.resolve("./pages/settings"))},settingsChange:function(){return require("_bundle_loader")(require.resolve("./pages/settingsChange"))},errorClient:function(){return require("_bundle_loader")(require.resolve("./pages/errorClient"))},errorServer:function(){return require("_bundle_loader")(require.resolve("./pages/errorServer"))}},g=function(r){a(n,e.default);var t=c(n);function n(e){var r=e.blockClass,i=e.components,u=e.props,a=e.isRoot,s=e.el,c=e.name;return o(this,n),t.call(this,{blockClass:r,components:i,props:u,isRoot:a,el:s,name:c})}return u(n,[{key:"render",value:function(){var e="";switch(location.hash){case"":e+="{{home}}";break;case"#dialog":e+="{{dialog}}";break;case"#change_password":e+="{{changePassword}}";break;case"#chat_list":e+="{{chatList}}";break;case"#settings":e+="{{settings}}";break;case"#settings_change":e+="{{settingsChange}}";break;case"#sign_in":e+="{{signIn}}";break;case"#sign_up":e+="{{signUp}}";break;case"#error_client":e+="{{errorClient}}";break;case"#error_server":e+="{{errorServer}}";break;default:e+="{{errorClient}}"}return e}}]),n}(),h=new g({blockClass:"router",components:d,props:{route:"errorClient"},isRoot:!0,el:"#app",name:"router"}),_=function(){function e(){o(this,e);var t=(0,r.default)(location.hash.split("#")[1]||"");this.oldPagePath=t,this.newPagePath=t}return u(e,[{key:"observe",value:function(){var e=this;window.addEventListener("popstate",function(){var t=(0,r.default)(location.hash.split("#")[1]||""),n=h.components[e.oldPagePath];try{n.destroy()}catch(o){console.warn(o,n)}h.setProps({route:t}),e.oldPagePath=t})}}]),e}();(new _).observe();
},{"./framework/block":"Zfgr","./framework/utils":"MeuM","_bundle_loader":"TUK3","./pages/signIn":[["signIn.abd2cb20.js","tyzC"],"signIn.abd2cb20.js.map","tyzC"],"./pages/signUp":[["signUp.08fb17c5.js","n7K6"],"signUp.08fb17c5.js.map","n7K6"],"./pages/home":[["home.29aa67a5.js","n6ng"],"home.29aa67a5.js.map","home.957637e3.css","n6ng"],"./pages/dialog":[["dialog.2306b60c.js","PTQf"],"dialog.2306b60c.js.map",["test-images-for-dialog.589d3e79.png","sgRw"],"PTQf"],"./pages/changePassword":[["changePassword.02ff6129.js","MRub"],"changePassword.02ff6129.js.map","MRub"],"./pages/chatList":[["chatList.b81e5762.js","vdOQ"],"chatList.b81e5762.js.map","vdOQ"],"./pages/settings":[["settings.7e514020.js","gPlh"],"settings.7e514020.js.map","gPlh"],"./pages/settingsChange":[["settingsChange.1e527d3b.js","TzyR"],"settingsChange.1e527d3b.js.map","TzyR"],"./pages/errorClient":[["errorClient.e47c881f.js","KayR"],"errorClient.e47c881f.js.map","KayR"],"./pages/errorServer":[["errorServer.ddb5ad58.js","R23M"],"errorServer.ddb5ad58.js.map","R23M"]}],"KWOJ":[function(require,module,exports) {
"use strict";function t(t,e,r,n,o,u,s){try{var i=t[u](s),a=i.value}catch(c){return void r(c)}i.done?e(a):Promise.resolve(a).then(n,o)}function e(e){return function(){var r=this,n=arguments;return new Promise(function(o,u){var s=e.apply(r,n);function i(e){t(s,o,u,i,a,"next",e)}function a(e){t(s,o,u,i,a,"throw",e)}i(void 0)})}}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function n(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach(function(e){o(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){return l(t)||f(t,e)||a(t,e)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){if(t){if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function f(t,e){var r=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=r){var n,o,u=[],s=!0,i=!1;try{for(r=r.call(t);!(s=(n=r.next()).done)&&(u.push(n.value),!e||u.length!==e);s=!0);}catch(a){i=!0,o=a}finally{try{s||null==r.return||r.return()}finally{if(i)throw o}}return u}}function l(t){if(Array.isArray(t))return t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p={GET:"GET",PUT:"PUT",POST:"POST",DELETE:"DELETE"};function h(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=[],r=0,n=Object.entries(t);r<n.length;r++){var o=s(n[r],2),u=o[0],i=o[1];e.push("".concat(u,"=").concat(i))}return e.length?"?".concat(e.join("&")):""}var v=function t(){var e=this;u(this,t),this.get=function(t,r,n){return e.request(t,r,n)},this.post=function(t,r,o){return e.request(t,n(n({},r),{},{method:p.POST}),o)},this.put=function(t,r,o){return e.request(t,n(n({},r),{},{method:p.PUT}),o)},this.delete=function(t,r,o){return e.request(t,n(n({},r),{},{method:p.DELETE}),o)},this.request=function(t,e,r){var o=e.method,u=void 0===o?p.GET:o,i=e.body,a=void 0===i?null:i,c=e.queryStringParams,f=void 0===c?{}:c,l=e.headers,v=void 0===l?{}:l;return new Promise(function(e,o){try{var i=new XMLHttpRequest;i.open(u,"".concat(t).concat(h(f))),i.timeout=r||2e3;for(var c=n({"Content-Type":"application/json; charset=utf-8"},v),l=0,p=Object.entries(c);l<p.length;l++){var d=s(p[l],2),y=d[0],b=d[1];i.setRequestHeader(y,b)}i.onload=function(){200===i.status&&e(new Response(i.response)),o({status:i.status,response:i.response,responseText:i.responseText})},i.onerror=function(){o(new Response(null,{status:i.status,statusText:i.statusText}))},i.ontimeout=function(){o(new Response(null,{status:i.status,statusText:i.statusText}))},"GET"===u?i.send():i.send(a)}catch(m){o(new Response(m.toString(),{status:450,statusText:"Client error"}))}})}};function d(t,e){return y.apply(this,arguments)}function y(){return(y=e(regeneratorRuntime.mark(function t(e,r){var o,u,s,i=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=i.length>2&&void 0!==i[2]?i[2]:{},u=new v,s=function(t){var r=((null==o?void 0:o.tries)||5)-1;if(!r)throw t;return d(e,n(n({},o),{},{tries:r}))},t.abrupt("return",u.get(e).catch(s));case 4:case"end":return t.stop()}},t)}))).apply(this,arguments)}var b=v;exports.default=b;
},{}],"AVBf":[function(require,module,exports) {
"use strict";function e(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}function s(e,s){for(var a=0;a<s.length;a++){var r=s[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,a,r){return a&&s(e.prototype,a),r&&s(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=function(){function s(a,r,t){var i=this;e(this,s),this.init=function(){i.formData=new FormData(i.form),i.form.classList.add("validator"),i.formData.forEach(function(e,s){var a=i.form.querySelector("input[name=".concat(s,"]")),r=i.validateFormData;a.addEventListener("focus",r),a.addEventListener("blur",r)}),i.form.addEventListener("submit",i.validate)},this.validate=function(e){var s=!1,a=i.validateFormData;e instanceof Event&&(e.preventDefault(),i.formData=new FormData(i.form),s=a(i.formData)),e instanceof FormData&&(s=a(e)),!s&&i.errorHandler?i.errorHandler(i.issues):i.successHandler&&i.successHandler()},this.validateFormData=function(e){var s=new FormData(i.form);i.form.classList.add("was-validated"),i._issues={},i.form.querySelectorAll("input").forEach(function(e){e.classList.remove("error")});var a=[];return s.forEach(function(e,r){switch(r){case"login":var t=i.loginCheck(e);t.length&&i.addIssues("login",t),a.push({fieldName:r,fieldValue:e,issues:t});break;case"email":var n=i.emailCheck(e);n.length&&i.addIssues("email",n),a.push({fieldName:r,fieldValue:e,issues:n});break;case"password":var u=i.passwordCheck(e);u.length&&i.addIssues("password",u),a.push({fieldName:r,fieldValue:e,issues:u});break;case"password_second":var o=i.passwordSecondCheck(e,s.get("password"));o.length&&i.addIssues("password_second",o),a.push({fieldName:r,fieldValue:e,issues:o});break;default:var l=i.baseFieldsCheck(e);a.push({fieldName:r,fieldValue:e,issues:l}),l.length&&i.addIssues(r,l)}}),!Object.keys(i.issues).length},this.addIssues=function(e,s){i.issues[e]||(i.issues[e]=[]),i.issues[e].push(s);var a=i.form.querySelector("input[name=".concat(e,"]"));a&&a.classList.add("error")},this._issues={},this.form=a,this.formData=null,this.successHandler=r||null,this.errorHandler=t||null}return a(s,[{key:"issues",get:function(){return this._issues}},{key:"destroy",value:function(){var e=this,s=this.validate;this.form.removeEventListener("submit",s);var a=this.validateFormData;this.formData.forEach(function(s,r){var t=e.form.querySelector("input[name=".concat(r,"]"));t.removeEventListener("focus",a),t.removeEventListener("blur",a)})}},{key:"isRequired",value:function(e){return 0===e.length}},{key:"isMaxLength",value:function(e,s){return e.length>=s+1}},{key:"baseFieldsCheck",value:function(e){var s=[];return this.isRequired(e)&&s.push("Is required"),s}},{key:"appendFormData",value:function(e,s){this.formData.append(e,s)}},{key:"loginCheck",value:function(e){var s=[];return this.isRequired(e)&&s.push("Login is required"),this.isMaxLength(e,10)&&s.push("Login max length is 10"),s}},{key:"emailCheck",value:function(e){var s=[];return this.isRequired(e)&&s.push("Email is required"),this.isMaxLength(e,24)&&s.push("Email max length is 24"),s}},{key:"passwordCheck",value:function(e){var s=[];return this.isRequired(e)&&s.push("Password is required"),this.isMaxLength(e,10)&&s.push("Password max length is 10"),s}},{key:"passwordSecondCheck",value:function(e,s){var a=[];return this.isRequired(s)&&a.push("Second is required"),e!==s&&a.push("Passwords isn't match"),a}},{key:"getIsValid",value:function(){return!Object.keys(this.issues).length}},{key:"removeListener",value:function(e){document.removeEventListener("submit",e,!1)}}]),s}(),t=r;exports.default=t;
},{}],"HAcM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("../framework/block"));function e(t){return t&&t.__esModule?t:{default:t}}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){var e=s();return function(){var n,r=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function l(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(e){c(o,t.default);var n=i(o);function o(t){var e=t.name,u=void 0===e?"":e,c=t.props,f=void 0===c?{}:c,i=t.blockClass;return r(this,o),n.call(this,{name:u,tagName:"div",props:f,blockClass:i})}return u(o,[{key:"render",value:function(){return'\n      <button class="btn {{classButton}}" type="{{type}}">{{text}}</button>\n    '}}]),o}(),b=y;exports.default=b;
},{"../framework/block":"Zfgr"}],"TVdw":[function(require,module,exports) {

},{}],"myS2":[function(require,module,exports) {

},{}],"eDZY":[function(require,module,exports) {

},{"./..\\images\\icon-arrow-right.svg":[["icon-arrow-right.7393bbc6.svg","Os5N"],"Os5N"],"./..\\images\\icon-clip.svg":[["icon-clip.189ceb20.svg","WEYA"],"WEYA"],"./..\\images\\icon-big-circle-arrow-right.svg":[["icon-big-circle-arrow-right.05a0f540.svg","YqWB"],"YqWB"],"./..\\images\\icon-message-read.svg":[["icon-message-read.e853882a.svg","FEfa"],"FEfa"]}],"WyUc":[function(require,module,exports) {

},{"./..\\images\\icon-big-circle-arrow-left.svg":[["icon-big-circle-arrow-left.519da947.svg","b4Eg"],"b4Eg"]}],"VdFl":[function(require,module,exports) {

},{}],"liHi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("../framework/block"));function e(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=s();return function(){var r,n=p(t);if(e){var o=p(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}function a(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(e){c(o,t.default);var r=f(o);function o(t){var e=t.name,u=void 0===e?"":e,c=t.props,i=void 0===c?{}:c;return n(this,o),r.call(this,{name:u,props:i,tagName:"section",blockClass:"error-page"})}return u(o,[{key:"render",value:function(){return'\n      <h2 class="error-page__title">{{title}}</h2>\n      <p class="error-page__description">{{description}}</p>\n      <a class="error-page__link link" href="#chat_list">Назад к чатам</a>\n    '}}]),o}(),b=y;exports.default=b;
},{"../framework/block":"Zfgr"}],"Yi9z":[function(require,module,exports) {
module.exports=function(n){return new Promise(function(e,o){var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.charset="utf-8",r.src=n,r.onerror=function(n){r.onerror=r.onload=null,o(n)},r.onload=function(){r.onerror=r.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(r)})};
},{}],"dZuk":[function(require,module,exports) {
module.exports=function(e){return new Promise(function(n,o){var r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onerror=function(e){r.onerror=r.onload=null,o(e)},r.onload=function(){r.onerror=r.onload=null,n()},document.getElementsByTagName("head")[0].appendChild(r)})};
},{}],0:[function(require,module,exports) {
var b=require("TUK3");b.register("js",require("Yi9z"));b.register("css",require("dZuk"));
},{}]},{},[0,"QCba"], null)
//# sourceMappingURL=/src.3736b96a.js.map