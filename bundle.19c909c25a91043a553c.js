/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/mystyles.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/mystyles.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --header-height: 7vh;
    --footer-height: 7vh;
    --header-color-light: #3f98b7;
    --nav-color-light: #a2cfdb;
    --footer-color-light: #3f98b7;
    --main-color-light: #ecf6f8;
    --header-color-dark: #A5D8FF;
    --nav-color-dark: #266DD3;
    --footer-color-dark: #A5D8FF;
    --main-color-dark: #f0f7f4;
}

body {
    margin: 0;
    font-size: 100%;
}

img {
    width: 50px;
    height: 50px;
}

.page-container {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
    'header header'
    'menu content'
    'footer footer';
    min-height: 100dvh;
}

header {
    display: flex;
    align-items: center;
    gap: 25px;
    padding-left: 25px;
    background-color: var(--header-color-light);
    grid-area: header;
}

header h1 {
    margin: 10px;
}

nav {
    grid-area: menu;
    background-color: var(--nav-color-light);
    width: auto;
}

.projects-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin-top: 25px;
}

.project {
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: white;
    width: 75%;
    border-radius: 5px;
    padding: 5px 15px;
    font-size: 1.5em;
    gap: 15px;
}

.project:hover {
    opacity: .8;
}
.projects-container svg {
    width: 1em;
    height: 1em;
}
main {
    grid-area: content;
    background-color: var(--main-color-light);
}


main > div > h1 {
    margin: 0;
}

.current-project {
    text-align: center;
}

.open-task-form-btn {
    background-color: var(--nav-color-light);
    border: none;
    border-radius: 5px;
    font-size: 1.2em;
    padding: 5px 15px;
    cursor: pointer;
    margin: 15px;
}

.open-task-form-btn:hover {
    opacity: .8;
}

.project-title {
    font-size: 3rem;
    text-align: center;
}

.current-project {
    border-bottom: solid 2px var(--header-color-light);
    width: 75%;
    margin: auto;
    padding-top: 5%;
}

.tasks-container {
    display: grid;
    width: 75%;
    margin: auto;
}

.task-area-title {
    display: flex;
    justify-content: center;
    border-bottom: 2px solid var(--header-color-light);
    font-size: 2.5rem;
}

.task-elements-container {
    display: flex;
    justify-content: start;
    align-items: center;
    margin: auto;
    gap: 0.5rem;
    width: 75%;
    padding-top: 0.5rem;
}

.hide {
    opacity: 0;
}

.col-header {
    font-size: 1.3rem;
    font-weight: bold;
}

.first-row {
    padding: 15px;
}
.title {
    width: 40%;
}

.due-date {
    width: 25%;
}

.task-elements-container img {
    display: flex;
    align-items: center;
    width: 25px;
    height: 25px;
}

.description {
    flex-grow: 1;
}

.strikethrough {
    text-decoration: line-through;
    opacity: 50%;
}

.new-task-btn-container {
    display: flex;
    justify-content: center;
}

.modal {
    border: none;
    border-radius: 5px;
    max-width: 400px;
    padding: 0;
    font-size: 2rem;
}

.modal::backdrop {
    background: rgb(0 0 0 / .6);
}

.form-header {
    background-color: var(--header-color-light);
    padding: 15px;
}

#task-form {
    display: flex;
    padding: 15px;
    font-size: 1.5rem;
}

.form-elements-container input {
    border: none;
    border-bottom: 2px solid var(--header-color-light);
    width: 100%;
    padding: 25px 0;
    padding-bottom: 0;
    margin-bottom: 25px;
    font-size: 1rem;
    outline: none;
}

.form-buttons {
    display: flex;
    justify-content: end;
    gap: 10px;
    margin-top: 25px;
}

.form-buttons button {
    font-size: 1rem;
    background-color: var(--header-color-light);
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
}

footer {
    grid-area: footer;
    background-color: var(--footer-color-light);
}

@media screen and (max-width: 600px) {
    /* body {
        margin: 0;
    } */
    .page-container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto 1fr auto;
        grid-template-areas:
        'header'
        'menu'
        'content'
        'footer';
        min-height: 100dvh;
    }

    nav {
        width: 100%;
    }
    
    .projects-container {
        margin: 10px 0;
    }
    .project {
        width: auto;
    }
}`, "",{"version":3,"sources":["webpack://./src/styles/mystyles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --header-height: 7vh;\n    --footer-height: 7vh;\n    --header-color-light: #3f98b7;\n    --nav-color-light: #a2cfdb;\n    --footer-color-light: #3f98b7;\n    --main-color-light: #ecf6f8;\n    --header-color-dark: #A5D8FF;\n    --nav-color-dark: #266DD3;\n    --footer-color-dark: #A5D8FF;\n    --main-color-dark: #f0f7f4;\n}\n\nbody {\n    margin: 0;\n    font-size: 100%;\n}\n\nimg {\n    width: 50px;\n    height: 50px;\n}\n\n.page-container {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: auto 1fr auto;\n    grid-template-areas:\n    'header header'\n    'menu content'\n    'footer footer';\n    min-height: 100dvh;\n}\n\nheader {\n    display: flex;\n    align-items: center;\n    gap: 25px;\n    padding-left: 25px;\n    background-color: var(--header-color-light);\n    grid-area: header;\n}\n\nheader h1 {\n    margin: 10px;\n}\n\nnav {\n    grid-area: menu;\n    background-color: var(--nav-color-light);\n    width: auto;\n}\n\n.projects-container {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n    justify-content: center;\n    margin-top: 25px;\n}\n\n.project {\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    background-color: white;\n    width: 75%;\n    border-radius: 5px;\n    padding: 5px 15px;\n    font-size: 1.5em;\n    gap: 15px;\n}\n\n.project:hover {\n    opacity: .8;\n}\n.projects-container svg {\n    width: 1em;\n    height: 1em;\n}\nmain {\n    grid-area: content;\n    background-color: var(--main-color-light);\n}\n\n\nmain > div > h1 {\n    margin: 0;\n}\n\n.current-project {\n    text-align: center;\n}\n\n.open-task-form-btn {\n    background-color: var(--nav-color-light);\n    border: none;\n    border-radius: 5px;\n    font-size: 1.2em;\n    padding: 5px 15px;\n    cursor: pointer;\n    margin: 15px;\n}\n\n.open-task-form-btn:hover {\n    opacity: .8;\n}\n\n.project-title {\n    font-size: 3rem;\n    text-align: center;\n}\n\n.current-project {\n    border-bottom: solid 2px var(--header-color-light);\n    width: 75%;\n    margin: auto;\n    padding-top: 5%;\n}\n\n.tasks-container {\n    display: grid;\n    width: 75%;\n    margin: auto;\n}\n\n.task-area-title {\n    display: flex;\n    justify-content: center;\n    border-bottom: 2px solid var(--header-color-light);\n    font-size: 2.5rem;\n}\n\n.task-elements-container {\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    margin: auto;\n    gap: 0.5rem;\n    width: 75%;\n    padding-top: 0.5rem;\n}\n\n.hide {\n    opacity: 0;\n}\n\n.col-header {\n    font-size: 1.3rem;\n    font-weight: bold;\n}\n\n.first-row {\n    padding: 15px;\n}\n.title {\n    width: 40%;\n}\n\n.due-date {\n    width: 25%;\n}\n\n.task-elements-container img {\n    display: flex;\n    align-items: center;\n    width: 25px;\n    height: 25px;\n}\n\n.description {\n    flex-grow: 1;\n}\n\n.strikethrough {\n    text-decoration: line-through;\n    opacity: 50%;\n}\n\n.new-task-btn-container {\n    display: flex;\n    justify-content: center;\n}\n\n.modal {\n    border: none;\n    border-radius: 5px;\n    max-width: 400px;\n    padding: 0;\n    font-size: 2rem;\n}\n\n.modal::backdrop {\n    background: rgb(0 0 0 / .6);\n}\n\n.form-header {\n    background-color: var(--header-color-light);\n    padding: 15px;\n}\n\n#task-form {\n    display: flex;\n    padding: 15px;\n    font-size: 1.5rem;\n}\n\n.form-elements-container input {\n    border: none;\n    border-bottom: 2px solid var(--header-color-light);\n    width: 100%;\n    padding: 25px 0;\n    padding-bottom: 0;\n    margin-bottom: 25px;\n    font-size: 1rem;\n    outline: none;\n}\n\n.form-buttons {\n    display: flex;\n    justify-content: end;\n    gap: 10px;\n    margin-top: 25px;\n}\n\n.form-buttons button {\n    font-size: 1rem;\n    background-color: var(--header-color-light);\n    border: none;\n    border-radius: 5px;\n    padding: 10px;\n    cursor: pointer;\n}\n\nfooter {\n    grid-area: footer;\n    background-color: var(--footer-color-light);\n}\n\n@media screen and (max-width: 600px) {\n    /* body {\n        margin: 0;\n    } */\n    .page-container {\n        display: grid;\n        grid-template-columns: 1fr;\n        grid-template-rows: auto auto 1fr auto;\n        grid-template-areas:\n        'header'\n        'menu'\n        'content'\n        'footer';\n        min-height: 100dvh;\n    }\n\n    nav {\n        width: 100%;\n    }\n    \n    .projects-container {\n        margin: 10px 0;\n    }\n    .project {\n        width: auto;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/mystyles.css":
/*!*********************************!*\
  !*** ./src/styles/mystyles.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_mystyles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./mystyles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/mystyles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_mystyles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_mystyles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_mystyles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_mystyles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/createProject.js":
/*!**************************************!*\
  !*** ./src/modules/createProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProject)
/* harmony export */ });
function createProject(name) {
    let tasks = [];

    function addTask(task) {
        tasks.push(task);
    }

    function getTasks() { return tasks; }

    // function deleteTask(task) {
    //     let index = tasks.indexOf(task);
    //     tasks.splice(index, 1);
    // }

    function getName() { return name; }

    return { addTask, getTasks, getName }
}

/***/ }),

/***/ "./src/modules/createTask.js":
/*!***********************************!*\
  !*** ./src/modules/createTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTask)
/* harmony export */ });
function createTask(completed, title, description, dueDate) {

    /* Load completed status and update checkmark icon in DOM */
    // if (completed) {
    //     taskCompletedElement.appendChild(myCompleteIcon);
    //     taskDescriptionElement.classList.add('strikethrough');
    // }
    // else {
    //     taskCompletedElement.appendChild(myIncompleteIcon);
    // }

    // /* Toggle whether a task has been completed and update checkbox accordingly */
    // function toggleCompletion() {
    //     if (completed) {
    //         taskCompletedElement.removeChild(taskCompletedElement.firstChild);
    //         taskCompletedElement.appendChild(myIncompleteIcon);
    //         completed = false;
    //         taskDescriptionElement.classList.remove('strikethrough');
    //     }
    //     else {
    //         taskCompletedElement.removeChild(taskCompletedElement.firstChild);
    //         taskCompletedElement.appendChild(myCompleteIcon);
    //         completed = true;
    //         taskDescriptionElement.classList.add('strikethrough');
    //     }
    // }

    function isCompleted() { return completed; }
    function getTitle() { return title; }
    function getDescription() { return description ;}
    function getDueDate() { return dueDate; }

    return {
        isCompleted, getTitle, getDescription, getDueDate
    };
}

/***/ }),

/***/ "./src/modules/domController.js":
/*!**************************************!*\
  !*** ./src/modules/domController.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_pencil_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/pencil-outline.svg */ "./src/assets/pencil-outline.svg");
/* harmony import */ var _assets_trashcan_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/trashcan-outline.svg */ "./src/assets/trashcan-outline.svg");
/* harmony import */ var _assets_circle_outline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/circle-outline.svg */ "./src/assets/circle-outline.svg");
/* harmony import */ var _assets_check_circle_outline_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/check-circle-outline.svg */ "./src/assets/check-circle-outline.svg");





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    function showProject(project) {
        // Change project title element in dom to current project title
        const nameElement = document.querySelector('.current-project');
        nameElement.innerText = project.getName();

        let tasks = project.getTasks();
        const taskContainer = document.querySelector('.tasks-container');
        taskContainer.innerHTML =
            `<div class="task-elements-container first-row">
            <div class="completed hide"><img src="http://localhost:3000/circle-outline.svg"></div>
            <div class="title col-header">Task Title</div>
            <div class="due-date col-header">Due Date</div>
            <div class="edit hide"><img src="http://localhost:3000/pencil-outline.svg"></div>
            <div class="remove hide"><img src="http://localhost:3000/trashcan-outline.svg"></div>
            </div>`;
        tasks.forEach(task => {
            // Create svg icons to be added to dom  
            const myEditIcon = new Image();
            myEditIcon.src = _assets_pencil_outline_svg__WEBPACK_IMPORTED_MODULE_0__;
            const myRemoveIcon = new Image();
            myRemoveIcon.src = _assets_trashcan_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
            const myIncompleteIcon = new Image();
            myIncompleteIcon.src = _assets_circle_outline_svg__WEBPACK_IMPORTED_MODULE_2__;
            const myCompleteIcon = new Image();
            myCompleteIcon.src = _assets_check_circle_outline_svg__WEBPACK_IMPORTED_MODULE_3__;

            //Create div element to wrap new task
            const el = document.createElement('div');
            el.classList.add('task-elements-container');

            // Create element for checkbox indicating completion status
            const taskCompletedElement = document.createElement('div');
            taskCompletedElement.appendChild(myIncompleteIcon);
            //taskCompletedElement.addEventListener('click', toggleCompletion);
            taskCompletedElement.classList.add('completed');

            // Create title element
            const taskTitleElement = document.createElement('div');
            taskTitleElement.innerText = task.getTitle();
            taskTitleElement.classList.add('title');

            // Create due date element
            const taskDueDateElement = document.createElement('div');
            taskDueDateElement.innerText = task.getDueDate();
            taskDueDateElement.classList.add('due-date');

            // Create element for edit icon
            const editLogoElement = document.createElement('div');
            editLogoElement.appendChild(myEditIcon);
            editLogoElement.classList.add('edit');

            // Create element for delete icon
            const deleteLogoElement = document.createElement('div');
            deleteLogoElement.appendChild(myRemoveIcon);
            deleteLogoElement.classList.add('remove');

            // Append all task elements to container
            el.appendChild(taskCompletedElement);
            el.appendChild(taskTitleElement);
            el.appendChild(taskDueDateElement);
            el.appendChild(editLogoElement);
            el.appendChild(deleteLogoElement);

            // Finally append newly created task to taskContainer
            taskContainer.appendChild(el);
        });
    }

    // function taskPrinter(task) {
    //     console.log('taskPrinter()');
    //     const el = document.createElement('div');
    //     el.classList.add('task-elements-container');

    //     // const taskCompletedElement = document.createElement('div');
    //     // taskCompletedElement.addEventListener('click', toggleCompletion);
    //     // taskCompletedElement.classList.add('completed');

    //     const taskDescriptionElement = document.createElement('div');
    //     taskDescriptionElement.innerText = task.getDescription();
    //     taskDescriptionElement.classList.add('description');

    //     const taskDueDateElement = document.createElement('div');
    //     taskDueDateElement.innerText = task.getDueDate();
    //     taskDueDateElement.classList.add('due-date');

    //     const editLogoElement = document.createElement('div');
    //     editLogoElement.appendChild(myEditIcon);
    //     editLogoElement.classList.add('edit');

    //     const deleteLogoElement = document.createElement('div');
    //     deleteLogoElement.appendChild(myRemoveIcon);
    //     deleteLogoElement.classList.add('remove');

    //     // el.appendChild(taskCompletedElement);
    //     el.appendChild(taskDescriptionElement);
    //     el.appendChild(taskDueDateElement);
    //     el.appendChild(editLogoElement);
    //     el.appendChild(deleteLogoElement);
    //     addTask(el);
    // }
    return { showProject }
}


/***/ }),

/***/ "./src/page-components/header.js":
/*!***************************************!*\
  !*** ./src/page-components/header.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addHeaderStuff)
/* harmony export */ });
/* harmony import */ var _assets_check_all_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/check-all.svg */ "./src/assets/check-all.svg");
/* harmony import */ var _styles_mystyles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/mystyles.css */ "./src/styles/mystyles.css");



function addHeaderStuff() {
    const el = document.getElementById('app-header');
    const title = document.createElement('h1');
    title.innerText = 'Alpha ToDo';
    const myLogo = new Image();
    myLogo.src = _assets_check_all_svg__WEBPACK_IMPORTED_MODULE_0__;

    el.appendChild(myLogo);
    el.appendChild(title);
}

/***/ }),

/***/ "./src/assets/check-all.svg":
/*!**********************************!*\
  !*** ./src/assets/check-all.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "check-all.svg";

/***/ }),

/***/ "./src/assets/check-circle-outline.svg":
/*!*********************************************!*\
  !*** ./src/assets/check-circle-outline.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "check-circle-outline.svg";

/***/ }),

/***/ "./src/assets/circle-outline.svg":
/*!***************************************!*\
  !*** ./src/assets/circle-outline.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "circle-outline.svg";

/***/ }),

/***/ "./src/assets/pencil-outline.svg":
/*!***************************************!*\
  !*** ./src/assets/pencil-outline.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pencil-outline.svg";

/***/ }),

/***/ "./src/assets/trashcan-outline.svg":
/*!*****************************************!*\
  !*** ./src/assets/trashcan-outline.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "trashcan-outline.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-components/header */ "./src/page-components/header.js");
/* harmony import */ var _modules_domController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/domController */ "./src/modules/domController.js");
/* harmony import */ var _modules_createProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/createProject */ "./src/modules/createProject.js");
/* harmony import */ var _modules_createTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/createTask */ "./src/modules/createTask.js");
/* harmony import */ var _styles_mystyles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/mystyles.css */ "./src/styles/mystyles.css");






// Init projects array and starting project objects for first page load
let projects = [];
let defaultProject = (0,_modules_createProject__WEBPACK_IMPORTED_MODULE_2__["default"])('All Tasks');
let currentProject = defaultProject;
projects.push(currentProject);

// let task1 = createTask('false', 'task1', 'desc', 'now');
// let task2 = createTask('false', 'task2', 'desc', 'now');
// let task3 = createTask('false', 'task3', 'desc', 'now');
// currentProject.addTask(task1);
// currentProject.addTask(task2);
// currentProject.addTask(task3);
// Add project tasks to DOM with domController object
let myDomController = (0,_modules_domController__WEBPACK_IMPORTED_MODULE_1__["default"])();
myDomController.showProject(currentProject);

// Handle data capture when new task is created
const newTaskBtn = document.querySelector('.open-task-form-btn');
const closeTaskFormBtn = document.querySelector('.task-form-close-btn');
const modal = document.querySelector('.modal');
const form = document.getElementById('task-form');
form.addEventListener('submit', (e) => {

    const formData = new FormData(form);
});
form.addEventListener('formdata', (e) => {
    let formData = e.formData;
    let task = (0,_modules_createTask__WEBPACK_IMPORTED_MODULE_3__["default"])('false', formData.get('title'), formData.get('description'), formData.get('duedate'));
    currentProject.addTask(task);
    myDomController.showProject(currentProject);
})
newTaskBtn.addEventListener('click', () => {
    // clear form fields
    // title.value = "";
    // description.value = "";
    // dueDate.value = "";
    modal.showModal();
});
closeTaskFormBtn.addEventListener('click', () => {
    modal.close();
});

(0,_page_components_header__WEBPACK_IMPORTED_MODULE_0__["default"])();

// TODO: refactor form and data capture for creating tasks
})();

/******/ })()
;
//# sourceMappingURL=bundle.19c909c25a91043a553c.js.map