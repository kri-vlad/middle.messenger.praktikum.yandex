parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"gPlh":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("../framework/block"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=c();return function(){var n,l=p(e);if(t){var i=p(this).constructor;n=Reflect.construct(l,arguments,i)}else n=l.apply(this,arguments);return u(this,n)}}function u(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}require("../assets/css/settings.scss");var _=function(t){r(i,e.default);var n=a(i);function i(){return l(this,i),n.call(this,{name:"settings",tagName:"section",blockClass:"settings"})}return o(i,[{key:"render",value:function(){return'\n      <h2 class="visually-hidden">Профиль</h2>\n      <a class="settings__link-to-chats" href="#chat_list">Вернуться к списку чатов</a>\n      <form class="settings__profile  profile" methods="POST" action="/">\n        <button class="profile__upload-avatar">Загрузить фотографию</button>\n        <b class="profile__preview-name">Иван</b>\n        <ul class="profile__list">\n          <li class="profile__list-item">\n            <label class="profile__form-item-label">\n              Почта\n              <input class="profile__form-input" type="email" name="email" value="pochta@yandex.ru" disabled>\n            </label>\n          </li>\n          <li class="profile__list-item">\n            <label class="profile__form-item-label">\n              Логин\n              <input class="profile__form-input" type="text" name="login" value="ivanivanov" disabled>\n            </label>\n          </li>\n          <li class="profile__list-item">\n            <label class="profile__form-item-label">\n              Имя\n              <input class="profile__form-input" type="text" name="first_name" value="Иван" disabled>\n            </label>\n          </li>\n          <li class="profile__list-item">\n            <label class="profile__form-item-label">\n              Фамилия\n              <input class="profile__form-input" type="text" name="second_name" value="Иванов" disabled>\n            </label>\n          </li>\n          <li class="profile__list-item">\n            <label class="profile__form-item-label">\n              Имя в чате\n              <input class="profile__form-input" type="text" name="display_name" value="Иван" disabled>\n            </label>\n          </li>\n          <li class="profile__list-item">\n            <label class="profile__form-item-label">\n              Телефон\n              <input class="profile__form-input" type="tel" name="phone" value="+7 (909) 967 30 30" disabled>\n            </label>\n          </li>\n        </ul>\n        <ul class="profile__list">\n          <li class="profile__list-item"><a href="#settings_change" class="profile__button">Изменить данные</a></li>\n          <li class="profile__list-item"><a href="#change_password" class="profile__button">Изменить пароль</a></li>\n          <li class="profile__list-item"><button class="profile__button  profile__button--exit" type="button">Выйти</button></li>\n        </ul>\n      </form>\n    '}},{key:"componentMounted",value:function(){document.title="Settings"}}]),i}(),b=_;exports.default=b;
},{"../framework/block":"Zfgr","../assets/css/settings.scss":"WyUc"}]},{},[], null)
//# sourceMappingURL=/settings.7e514020.js.map