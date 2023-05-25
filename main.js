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

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\n\n// Accordion list\nvar Accordion = /*#__PURE__*/function () {\n  function Accordion(list) {\n    var _this = this;\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Accordion);\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"toggleAccordion\", function (item) {\n      item.classList.toggle(_this.activeClass);\n      item.nextElementSibling.classList.toggle(_this.activeClass);\n    });\n    this.accordionList = document.querySelectorAll(list); // '[data-animate=\"accordion\"] dt'\n    this.activeClass = 'active';\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Accordion, [{\n    key: \"addAccordionEvent\",\n    value:\n    // adiciona os eventos ao accordion\n    function addAccordionEvent() {\n      var _this2 = this;\n      this.accordionList.forEach(function (item) {\n        item.addEventListener('click', function () {\n          return _this2.toggleAccordion(item);\n        });\n      });\n    }\n\n    // iniciar função\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.accordionList.length) {\n        // ativar primeiro item\n        this.toggleAccordion(this.accordionList[0]);\n        this.addAccordionEvent();\n      }\n      return this;\n    }\n  }]);\n  return Accordion;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordion);\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/animate-scroll.js":
/*!**************************************!*\
  !*** ./js/modules/animate-scroll.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Animar scroll\nvar initAnimationScroll = function initAnimationScroll() {\n  var sections = document.querySelectorAll('[data-animate=\"scroll\"]');\n  if (sections.length) {\n    var windowHalf = window.innerHeight * 0.6;\n    var animateScrolling = function animateScrolling() {\n      sections.forEach(function (section) {\n        var sectionTop = section.getBoundingClientRect().top - windowHalf;\n        if (sectionTop < 0) {\n          section.classList.add('animate');\n        } else if (section.classList.contains('animate')) {\n          section.classList.remove('animate');\n        }\n      });\n    };\n    animateScrolling();\n    window.addEventListener('scroll', animateScrolling);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initAnimationScroll);\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/animate-scroll.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar initDropdowMenu = function initDropdowMenu() {\n  var dropdownMenus = document.querySelectorAll('[data-dropdown]');\n  var eventAll = ['touchstart', 'click'];\n  function outsideClick(element, events, callback) {\n    var html = document.documentElement;\n    var outside = 'data-outside';\n    function handleOutside(event) {\n      if (!element.contains(event.target)) {\n        events.forEach(function (userEvent) {\n          html.removeEventListener(userEvent, handleOutside);\n        });\n        element.removeAttribute(outside);\n        callback();\n      }\n    }\n    if (!element.hasAttribute(outside)) {\n      events.forEach(function (userEvent) {\n        html.addEventListener(userEvent, handleOutside);\n      });\n      element.setAttribute(outside, '');\n    }\n  }\n\n  /** @param {MouseEvent} event */\n  function handleDropdown(event) {\n    var _this = this;\n    event.preventDefault();\n    event.stopPropagation();\n    this.classList.add('active');\n    outsideClick(this, eventAll, function () {\n      _this.classList.remove('active');\n    });\n  }\n  dropdownMenus.forEach(function (item) {\n    eventAll.forEach(function (userEvent) {\n      item.addEventListener(userEvent, handleDropdown);\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initDropdowMenu);\n\n// const initDropdownMenu = () => {\n//   const dropdownMenus = document.querySelectorAll(\"[data-dropdown]\");\n\n//   function handleClick(event) {\n//     event.preventDefault();\n//     this.classList.add(\"active\");\n//     clickOutside(this, [\"touchstart\", \"click\"], () => {\n//       this.classList.remove(\"active\");\n//     });\n//   }\n\n//   function clickOutside(element, events, callback) {\n//     const outside = \"data-outside\";\n//     const html = document.documentElement;\n\n//     if (!element.hasAttribute(outside)) {\n//       events.forEach((userEvent) => {\n//         html.addEventListener(userEvent, handleOutside);\n//       });\n//       element.setAttribute(outside, \"\");\n//     }\n\n//     /**@param {MouseEvent} event */\n//     function handleOutside(event) {\n//       if (!element.contains(event.target)) {\n//         events.forEach((userEvent) => {\n//           html.removeEventListener(userEvent, handleOutside);\n//         });\n//         element.removeAttribute(outside);\n//         callback();\n//       }\n//     }\n//   }\n\n//   dropdownMenus.forEach((menu) => {\n//     [\"touchstart\", \"click\"].forEach((userEvent) => {\n//       menu.addEventListener(userEvent, handleClick);\n//     });\n//   });\n// };\n\n// export default initDropdownMenu;\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/escrever.js":
/*!********************************!*\
  !*** ./js/modules/escrever.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Efeito maquina de escrever\nvar initWritingEfferct = function initWritingEfferct() {\n  var titleH1 = document.querySelector('#title');\n  var writeTitle = function writeTitle(element) {\n    var el = element;\n    var titleArray = el.innerHTML.split('');\n    el.innerHTML = '';\n    titleArray.forEach(function (letter, index) {\n      setTimeout(function () {\n        return el.innerHTML += letter;\n      }, 70 * index);\n    });\n  };\n  if (titleH1) {\n    writeTitle(titleH1);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initWritingEfferct);\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/escrever.js?");

/***/ }),

/***/ "./js/modules/fecth-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fecth-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numeros.js */ \"./js/modules/numeros.js\");\n\n\n// animais fecth\nfunction createAnimail(animal) {\n  var div = document.createElement('div');\n  div.classList.add('numero-animal');\n  div.innerHTML = \"\\n      <h3>\".concat(animal.specie, \"</h3>\\n      <span data-numero>\").concat(animal.total, \"</span>\\n      \");\n  return div;\n}\nvar initFecthAnimais = function initFecthAnimais() {\n  function fetchAnimais(url) {\n    var animais = fetch(url);\n    var grid = document.querySelector('.numeros-grid');\n    animais.then(function (response) {\n      return response.json();\n    }).then(function (animalText) {\n      animalText.forEach(function (animal) {\n        var divAnimal = createAnimail(animal);\n        grid.appendChild(divAnimal);\n      });\n      (0,_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    })[\"catch\"](function (erro) {\n      console.log(Error(erro));\n    });\n  }\n  fetchAnimais('./animaisapi.json');\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initFecthAnimais);\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fecth-animais.js?");

/***/ }),

/***/ "./js/modules/fecth-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fecth-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// fetch Bitcoin\nvar initFecthBitcoin = function initFecthBitcoin() {\n  fetch('https://blockchain.info/ticker').then(function (response) {\n    return response.json();\n  }).then(function (bitcoin) {\n    var btcPreco = document.querySelector('.btc-preco');\n    btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(4);\n  })[\"catch\"](function (erro) {\n    console.log(Error(erro));\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initFecthBitcoin);\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fecth-bitcoin.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar initFuncionamento = function initFuncionamento() {\n  var funcionamento = document.querySelector('[data-semana]');\n  var diasSemana = funcionamento.dataset.semana.split(',').map(Number);\n  var horaSemana = funcionamento.dataset.horario.split(',').map(Number);\n  var dataAtual = new Date();\n  var diaAtual = dataAtual.getDay();\n  var horaAtual = dataAtual.getHours();\n  // const semanaAberto = diasSemana.indexOf(diaAtual) !== -1;\n  var semanaAberto1 = diasSemana.includes(diaAtual);\n  var horarioAberto = horaAtual >= horaSemana[0] && horaAtual < horaSemana[1];\n  if (semanaAberto1 && horarioAberto) {\n    funcionamento.classList.add('open');\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initFuncionamento);\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-click.js */ \"./js/modules/outside-click.js\");\n\nvar initMenuMobile = function initMenuMobile() {\n  var btnMenu = document.querySelector('[data-menu=\"mobile\"]');\n  var menuList = document.querySelector('[data-menu=\"lista\"]');\n  var events = ['click', 'touchstart'];\n  if (btnMenu) {\n    /** @param {MouseEvent} event */\n    var openMenu = function openMenu(event) {\n      event.stopPropagation();\n      menuList.classList.add('active');\n      btnMenu.classList.add('active');\n      (0,_outside_click_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, events, function () {\n        menuList.classList.remove('active');\n        btnMenu.classList.remove('active');\n      });\n    };\n    events.forEach(function (userEvent) {\n      btnMenu.addEventListener(userEvent, openMenu);\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initMenuMobile);\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\n\nvar Modal = /*#__PURE__*/function () {\n  function Modal(openButton, closeButton, containerModal) {\n    var _this = this;\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Modal);\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"toggleModal\", function () {\n      return _this.containerModal.classList.toggle('ativo');\n    });\n    this.openButton = document.querySelector(openButton);\n    this.closeButton = document.querySelector(closeButton);\n    this.containerModal = document.querySelector(containerModal);\n    this.eventToggleModal = this.eventToggleModal.bind(this);\n    this.outsideModal = this.outsideModal.bind(this);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Modal, [{\n    key: \"eventToggleModal\",\n    value:\n    // Adiciona o evento de toggle ao modal\n    function eventToggleModal(event) {\n      event.preventDefault();\n      this.toggleModal();\n    }\n\n    // Fecha modal ao clicar do lado de fora\n  }, {\n    key: \"outsideModal\",\n    value: function outsideModal(event) {\n      if (event.target === this.containerModal) {\n        this.toggleModal();\n      }\n    }\n\n    // Adiciona os eventos aos elementos do modal\n  }, {\n    key: \"addModalEvent\",\n    value: function addModalEvent() {\n      this.openButton.addEventListener('click', this.eventToggleModal);\n      this.closeButton.addEventListener('click', this.eventToggleModal);\n      this.containerModal.addEventListener('click', this.outsideModal);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.openButton && this.closeButton && this.containerModal) {\n        this.addModalEvent();\n      }\n    }\n  }]);\n  return Modal;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/numeros.js":
/*!*******************************!*\
  !*** ./js/modules/numeros.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar initAnimateNumbers = function initAnimateNumbers() {\n  function animateNumbers() {\n    var numbers = document.querySelectorAll('[data-numero]');\n    numbers.forEach(function (num) {\n      var total = +num.innerText;\n      var add = Math.floor(total / 100);\n      var start = 0;\n      var timer = setInterval(function () {\n        start += add;\n        num.innerText = start;\n        if (start > total) {\n          num.innerText = total;\n          clearInterval(timer);\n        }\n      }, 25);\n    });\n  }\n  var observer;\n  function handleMutation(mutation) {\n    if (mutation[0].target.classList.contains('animate')) {\n      observer.disconnect();\n      animateNumbers();\n    }\n  }\n  observer = new MutationObserver(handleMutation);\n  var sectionObserver = document.querySelector('.numeros');\n  observer.observe(sectionObserver, {\n    attributes: true\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initAnimateNumbers);\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/numeros.js?");

/***/ }),

/***/ "./js/modules/outside-click.js":
/*!*************************************!*\
  !*** ./js/modules/outside-click.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  var html = document.documentElement;\n  var outside = 'data-outside';\n  function handleOutside(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach(function (userEvent) {\n        html.removeEventListener(userEvent, handleOutside);\n      });\n      callback();\n    }\n  }\n  if (!element.hasAttribute(outside)) {\n    events.forEach(function (userEvent) {\n      //  setTimeout(() => {\n      html.addEventListener(userEvent, handleOutside);\n      //  });\n    });\n\n    element.setAttribute(outside, '');\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (outsideClick);\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/outside-click.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\n\n// Scroll suave - link interno\nvar SmoothScrolling = /*#__PURE__*/function () {\n  function SmoothScrolling(links, options) {\n    var _this = this;\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, SmoothScrolling);\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"scrollToSection\", function (event) {\n      event.preventDefault();\n      var href = event.currentTarget.getAttribute('href');\n      var section = document.querySelector(href);\n      section.scrollIntoView(_this.options);\n    });\n    this.internalLinks = document.querySelectorAll(links);\n    if (options === undefined) {\n      this.options = {\n        behavior: 'smooth',\n        block: 'start'\n      };\n    } else {\n      this.options = options;\n    }\n    this.scrollToSection = this.scrollToSection.bind(this);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(SmoothScrolling, [{\n    key: \"addLinkEvent\",\n    value: function addLinkEvent() {\n      var _this2 = this;\n      this.internalLinks.forEach(function (link) {\n        link.addEventListener('click', _this2.scrollToSection);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.internalLinks.length) {\n        this.addLinkEvent();\n      }\n      return this;\n    }\n  }]);\n  return SmoothScrolling;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SmoothScrolling);\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\n\n// Tab menu\nvar TabNav = /*#__PURE__*/function () {\n  function TabNav(menu, content) {\n    var _this = this;\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, TabNav);\n    // Ativa a tab de acordo com o index da mesma\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, \"activeTab\", function (index) {\n      _this.tabContent.forEach(function (section) {\n        section.classList.remove(_this.activeClass);\n      });\n      var direction = _this.tabContent[index].dataset.anime;\n      _this.tabContent[index].classList.add(_this.activeClass, direction);\n    });\n    this.tabMenu = document.querySelectorAll(menu);\n    this.tabContent = document.querySelectorAll(content);\n    this.activeClass = 'active';\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(TabNav, [{\n    key: \"addTabNavEvent\",\n    value:\n    // Adiciona os eventos nas tabs\n    function addTabNavEvent() {\n      var _this2 = this;\n      this.tabMenu.forEach(function (item, index) {\n        item.addEventListener('click', function () {\n          return _this2.activeTab(index);\n        });\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.tabMenu.length && this.tabContent.length) {\n        // Ativar classe no primeiro item\n        this.activeTab(0);\n        this.addTabNavEvent();\n      }\n      return this;\n    }\n  }]);\n  return TabNav;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabNav);\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar initTooltip = function initTooltip() {};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initTooltip);\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_escrever_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/escrever.js */ \"./js/modules/escrever.js\");\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_animate_scroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/animate-scroll.js */ \"./js/modules/animate-scroll.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fecth_animais_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fecth-animais.js */ \"./js/modules/fecth-animais.js\");\n/* harmony import */ var _modules_fecth_bitcoin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/fecth-bitcoin.js */ \"./js/modules/fecth-bitcoin.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar smoothScrolling = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]');\nsmoothScrolling.init();\nvar accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('[data-animate=\"accordion\"] dt');\naccordion.init();\nvar tabNav = new _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('[data-tab=\"menu\"] li', '[data-tab=\"content\"] section');\ntabNav.init();\nvar modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('[data-modal=\"abrir\"]', '[data-modal=\"fechar\"]', '[data-modal=\"container\"]');\nmodal.init();\n(0,_modules_escrever_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_animate_scroll_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_modules_fecth_animais_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n(0,_modules_fecth_bitcoin_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])();\n\n// Verificar tipo de dados do protótipo\nvar typeofData = function typeofData(dado) {\n  return Object.prototype.toString.call(dado);\n};\nconsole.log(typeofData('ola mundo'));\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\n/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js\");\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(descriptor.key), descriptor);\n  }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  Object.defineProperty(Constructor, \"prototype\", {\n    writable: false\n  });\n  return Constructor;\n}\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _defineProperty)\n/* harmony export */ });\n/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js\");\n\nfunction _defineProperty(obj, key, value) {\n  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(key);\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n  return obj;\n}\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toPrimitive)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n\nfunction _toPrimitive(input, hint) {\n  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input) !== \"object\" || input === null) return input;\n  var prim = input[Symbol.toPrimitive];\n  if (prim !== undefined) {\n    var res = prim.call(input, hint || \"default\");\n    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(res) !== \"object\") return res;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (hint === \"string\" ? String : Number)(input);\n}\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/toPrimitive.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toPropertyKey)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ \"./node_modules/@babel/runtime/helpers/esm/toPrimitive.js\");\n\n\nfunction _toPropertyKey(arg) {\n  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arg, \"string\");\n  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(key) === \"symbol\" ? key : String(key);\n}\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n\n//# sourceURL=webpack://animais-fantasticos/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;