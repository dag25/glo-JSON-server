/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/render */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_addUsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addUsers */ \"./src/modules/addUsers.js\");\n/* harmony import */ var _modules_userService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/userService */ \"./src/modules/userService.js\");\n/* harmony import */ var _modules_removeUsers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/removeUsers */ \"./src/modules/removeUsers.js\");\n/* harmony import */ var _modules_changePermissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/changePermissions */ \"./src/modules/changePermissions.js\");\n/* harmony import */ var _modules_editUsers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/editUsers */ \"./src/modules/editUsers.js\");\n/* harmony import */ var _modules_filterUsers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/filterUsers */ \"./src/modules/filterUsers.js\");\n/* harmony import */ var _modules_sortUsers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sortUsers */ \"./src/modules/sortUsers.js\");\n/* harmony import */ var _modules_searchUsers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/searchUsers */ \"./src/modules/searchUsers.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.userService = new _modules_userService__WEBPACK_IMPORTED_MODULE_2__.UserService;\r\nuserService.getUsers().then((data) => {\r\n  (0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.render)(data);\r\n});\r\n\r\n(0,_modules_addUsers__WEBPACK_IMPORTED_MODULE_1__.addUsers)();\r\n(0,_modules_removeUsers__WEBPACK_IMPORTED_MODULE_3__.removeUsers)();\r\n(0,_modules_changePermissions__WEBPACK_IMPORTED_MODULE_4__.changePermissions)();\r\n(0,_modules_editUsers__WEBPACK_IMPORTED_MODULE_5__.editUsers)();\r\n(0,_modules_filterUsers__WEBPACK_IMPORTED_MODULE_6__.filterUsers)();\r\n\r\n(0,_modules_sortUsers__WEBPACK_IMPORTED_MODULE_7__.sortUsers)();\r\n\r\n(0,_modules_searchUsers__WEBPACK_IMPORTED_MODULE_8__.searchUsers)();\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/index.js?");

/***/ }),

/***/ "./src/modules/addUsers.js":
/*!*********************************!*\
  !*** ./src/modules/addUsers.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addUsers: () => (/* binding */ addUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\n\r\nconst addUsers = () => {\r\n  const form = document.querySelector('form');\r\n  const nameInput = form.querySelector('#form-name');\r\n  const emailInput = form.querySelector('#form-email');\r\n  const childrenInput = form.querySelector('#form-children');\r\n\r\n  form.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    if (form.dataset.method) {\r\n      const user = {\r\n\t\t\t\tname: nameInput.value,\r\n\t\t\t\temail: emailInput.value,\r\n\t\t\t\tchildren: childrenInput.checked,\r\n\t\t\t\tpermission: false,\r\n\t\t\t};\r\n\r\n\t\t\tuserService.addUser(user).then(() => {\r\n\t\t\t\tuserService.getUsers().then(users => {\r\n\t\t\t\t\t(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\r\n          form.reset();\r\n\t\t\t\t});\r\n\t\t\t});\r\n    }\r\n  })\r\n};\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/addUsers.js?");

/***/ }),

/***/ "./src/modules/changePermissions.js":
/*!******************************************!*\
  !*** ./src/modules/changePermissions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changePermissions: () => (/* binding */ changePermissions)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\nconst changePermissions = () => {\r\n\tconst tbody = document.getElementById('table-body');\r\n\r\n\ttbody.addEventListener('click', e => {\r\n\t\tif (e.target.closest('input[type=checkbox]')) {\r\n\t\t\tconst tr = e.target.closest('tr');\r\n      const input = tr.querySelector('input[type=checkbox]');\r\n\t\t\tconst id = tr.dataset.key;\r\n\r\n\t\t\tuserService.changeUser(id, {permission: input.checked}).then(() => {\r\n\t\t\t\tuserService.getUsers().then(users => {\r\n\t\t\t\t\t(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\r\n\t\t\t\t});\r\n\t\t\t});\r\n\t\t}\r\n\t});\r\n};\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/changePermissions.js?");

/***/ }),

/***/ "./src/modules/editUsers.js":
/*!**********************************!*\
  !*** ./src/modules/editUsers.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   editUsers: () => (/* binding */ editUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\n\r\nconst editUsers = () => {\r\n  const tbody = document.getElementById('table-body');\r\n  const form = document.querySelector('form');\r\n\tconst nameInput = form.querySelector('#form-name');\r\n\tconst emailInput = form.querySelector('#form-email');\r\n\tconst childrenInput = form.querySelector('#form-children');\r\n\r\n\ttbody.addEventListener('click', e => {\r\n\t\tif (e.target.closest('.btn-edit')) {\r\n\t\t\tconst tr = e.target.closest('tr');\r\n\t\t\tconst id = tr.dataset.key;\r\n\r\n\t\t\tuserService.getUser(id).then((user) => {\r\n\t\t\t\tnameInput.value = user.name;\r\n        emailInput.value = user.email;\r\n        childrenInput.checked = user.children;\r\n\r\n        form.dataset.method = id;\r\n\t\t\t});\r\n\t\t}\r\n\t});\r\n\r\n  form.addEventListener('submit', e => {\r\n\t\te.preventDefault();\r\n\t\tif (form.dataset.method) {\r\n      const id = form.dataset.method;\r\n\r\n\t\t\tconst user = {\r\n\t\t\t\tname: nameInput.value,\r\n\t\t\t\temail: emailInput.value,\r\n\t\t\t\tchildren: childrenInput.checked,\r\n\t\t\t\tpermission: false,\r\n\t\t\t};\r\n\r\n\t\t\tuserService.editUser(id, user).then(() => {\r\n\t\t\t\tuserService.getUsers().then(users => {\r\n\t\t\t\t\t(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\r\n          form.reset();\r\n          form.removeAttribute('data-method');\r\n\t\t\t\t});\r\n\t\t\t});\r\n\t\t}\r\n\t});\r\n};\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/editUsers.js?");

/***/ }),

/***/ "./src/modules/filterUsers.js":
/*!************************************!*\
  !*** ./src/modules/filterUsers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   filterUsers: () => (/* binding */ filterUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\nconst filterUsers = (user) => {\r\n  const btnIsChildren = document.getElementById('btn-isChildren');\r\n  const btnIsPermissions = document.getElementById('btn-isPermissions');\r\n  const btnIsAll = document.getElementById('btn-isAll');\r\n\r\n  btnIsChildren.addEventListener('click', () => {\r\n    userService.filterUsers('children').then((users) => {\r\n      (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\r\n    })\r\n  });\r\n  btnIsPermissions.addEventListener('click', () => {\r\n    userService.filterUsers('permission').then(users => {\r\n\t\t\t(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\r\n\t\t});\r\n  });\r\n  btnIsAll.addEventListener('click', () => {\r\n    userService.getUsers('children').then(users => {\r\n\t\t\t(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\r\n\t\t});\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/filterUsers.js?");

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   debounce: () => (/* binding */ debounce)\n/* harmony export */ });\nconst debounce = (func, ms = 300) => {\r\n  let timer;\r\n  return (...args) => {\r\n    clearTimeout(timer);\r\n    timer = setTimeout(() => {func.apply(undefined, args)}, ms);\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/helpers.js?");

/***/ }),

/***/ "./src/modules/removeUsers.js":
/*!************************************!*\
  !*** ./src/modules/removeUsers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeUsers: () => (/* binding */ removeUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\nconst removeUsers = () => {\r\n  const tbody = document.getElementById('table-body');\r\n\r\n  tbody.addEventListener('click', (e) => {\r\n    if (e.target.closest('.btn-remove')) {\r\n      const tr = e.target.closest('tr');\r\n      const id = tr.dataset.key;\r\n\r\n      userService.removeUser(id).then(() => {\r\n        userService.getUsers().then(users => {\r\n          (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\r\n        });\r\n      });\r\n    }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/removeUsers.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\nconst render = (users) => {\r\n  const tbody = document.getElementById('table-body');\r\n  tbody.innerHTML = '';\r\n  users.forEach(user => {\r\n    tbody.insertAdjacentHTML(\r\n\t\t\t'beforeend',\r\n\t\t\t`\r\n      <tr data-key='${user.id}'>\r\n        <th scope=\"row\">${user.id}</th>\r\n        <td>${user.name}</td>\r\n        <td>${user.email}</td>\r\n        <td>${user.children ? 'Есть' : 'Нет'}</td>\r\n        <td>\r\n          <div class=\"form-check form-switch\">\r\n            <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\"\r\n            id=\"form-children\"${user.permission ? 'checked' : ''}>\r\n          </div>\r\n        </td>\r\n        <td>\r\n          <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\r\n            <button type=\"button\" class=\"btn btn-warning btn-edit\">\r\n                <i class=\"bi-pencil-square\"></i>\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-danger btn-remove\">\r\n              <i class=\"bi-person-x\"></i>\r\n            </button>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      `,\r\n\t\t);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/render.js?");

/***/ }),

/***/ "./src/modules/searchUsers.js":
/*!************************************!*\
  !*** ./src/modules/searchUsers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   searchUsers: () => (/* binding */ searchUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n\r\n\r\nconst searchUsers = () => {\r\n  const searchInput = document.getElementById('search-input');\r\n\r\n  const debounceSearch = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.debounce)(() => {\r\n    userService.getSearchUsers(searchInput.value).then(users => {\r\n\t\t\t(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\r\n\t\t});\r\n  }, 500);\r\n\r\n  searchInput.addEventListener('input', debounceSearch);\r\n};\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/searchUsers.js?");

/***/ }),

/***/ "./src/modules/sortUsers.js":
/*!**********************************!*\
  !*** ./src/modules/sortUsers.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sortUsers: () => (/* binding */ sortUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\nconst sortUsers = () => {\r\n  const headerSortIsChildren = document.getElementById('sort-is-children');\r\n  let isSort = false;\r\n  headerSortIsChildren.style.cursor = 'pointer';\r\n  headerSortIsChildren.addEventListener('click', () => {\r\n    userService.getSortUsers({\r\n      name: 'children',\r\n      value: isSort ? 'asc' : 'desc',\r\n    }).then((users) => {\r\n      (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\r\n    })\r\n    isSort = !isSort;\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/sortUsers.js?");

/***/ }),

/***/ "./src/modules/userService.js":
/*!************************************!*\
  !*** ./src/modules/userService.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserService: () => (/* binding */ UserService)\n/* harmony export */ });\nclass UserService {\r\n\tgetUsers() {\r\n\t\treturn fetch('http://localhost:4545/users').then(res => res.json());\r\n\t}\r\n\r\n\taddUser(user) {\r\n\t\treturn fetch('http://localhost:4545/users', {\r\n\t\t\tmethod: 'POST',\r\n\t\t\theaders: {\r\n\t\t\t\t'Content-Type': 'application/json',\r\n\t\t\t},\r\n\t\t\tbody: JSON.stringify(user),\r\n\t\t}).then(res => res.json());\r\n\t}\r\n\r\n\tremoveUser(id) {\r\n\t\treturn fetch(`http://localhost:4545/users/${id}`, {\r\n\t\t\tmethod: 'DELETE',\r\n\t\t}).then(res => res.json());\r\n\t}\r\n\r\n\tchangeUser(id, data) {\r\n\t\treturn fetch(`http://localhost:4545/users/${id}`, {\r\n\t\t\tmethod: 'PATCH',\r\n      body: JSON.stringify(data),\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n      },\r\n\t\t}).then(res => res.json());\r\n\t}\r\n\r\n  getUser(id) {\r\n    return fetch(`http://localhost:4545/users/${id}`).then(res => res.json());\r\n  }\r\n  editUser(id, user) {\r\n    return fetch(`http://localhost:4545/users/${id}`, {\r\n\t\t\tmethod: 'PUT',\r\n\t\t\tbody: JSON.stringify(user),\r\n\t\t\theaders: {\r\n\t\t\t\t'Content-Type': 'application/json',\r\n\t\t\t},\r\n\t\t}).then(res => res.json());\r\n  }\r\n\r\n  filterUsers(filterOption) {\r\n    return fetch(`http://localhost:4545/users?${filterOption}=true`).then(res => res.json());\r\n  }\r\n\r\n  getSortUsers(sortOption) {\r\n    return fetch(\r\n\t\t\t`http://localhost:4545/users?_sort=${sortOption.name}&_order=${sortOption.value}`,\r\n\t\t).then(res => res.json());\r\n  }\r\n\r\n  getSearchUsers(str) {\r\n    return fetch(`http://localhost:4545/users?name_like=${str}`).then(res =>\r\n\t\t\tres.json(),\r\n\t\t);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/userService.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;