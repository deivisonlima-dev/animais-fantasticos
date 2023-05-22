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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Accordion list\nvar initAccordion = function initAccordion() {\n  var accordionList = document.querySelectorAll('[data-animate=\"accordion\"] dt');\n  if (accordionList.length) {\n    var activeClass = 'active';\n    accordionList[0].classList.add(activeClass);\n    accordionList[0].nextElementSibling.classList.add(activeClass);\n\n    /** @param { MouseEvent } event */\n    var accordionContent = function accordionContent(event) {\n      var nextElement = event.currentTarget.nextElementSibling;\n      event.currentTarget.classList.toggle(activeClass);\n      nextElement.classList.toggle(activeClass);\n    };\n    accordionList.forEach(function (item) {\n      item.addEventListener('click', accordionContent);\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initAccordion);\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/accordion.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar _this = undefined;\nvar initModal = function initModal() {\n  var openButton = document.querySelector('[data-modal=\"abrir\"]');\n  var closeButton = document.querySelector('[data-modal=\"fechar\"]');\n  var containerModal = document.querySelector('[data-modal=\"container\"]');\n  var toggleModal = function toggleModal(event) {\n    event.preventDefault();\n    containerModal.classList.toggle('ativo');\n  };\n  var outsideModal = function outsideModal(event) {\n    event.preventDefault();\n    if (event.target === _this) {\n      toggleModal(event);\n    }\n  };\n  if (openButton && closeButton && containerModal) {\n    openButton.addEventListener('click', toggleModal);\n    closeButton.addEventListener('click', toggleModal);\n    containerModal.addEventListener('click', outsideModal);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initModal);\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/modal.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Scroll suave - link interno\nvar smoothScrolling = function smoothScrolling() {\n  var internalLinks = document.querySelectorAll('[data-menu=\"suave\"] a[href^=\"#\"]');\n  if (internalLinks.length) {\n    /** @param {MouseEvent} event */\n    var scrollToSection = function scrollToSection(event) {\n      event.preventDefault();\n      var href = event.currentTarget.getAttribute('href');\n      var section = document.querySelector(href);\n      section.scrollIntoView({\n        behavior: 'smooth',\n        block: 'start'\n      });\n    };\n    internalLinks.forEach(function (link) {\n      link.addEventListener('click', scrollToSection);\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScrolling);\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tabmenu.js":
/*!*******************************!*\
  !*** ./js/modules/tabmenu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Tab menu\nvar initTabMenu = function initTabMenu() {\n  var tabMenu = document.querySelectorAll('[data-tab=\"menu\"] li');\n  var tabContent = document.querySelectorAll('[data-tab=\"content\"] section');\n  if (tabMenu.length && tabContent.length) {\n    tabContent[0].classList.add('active');\n    var activeContent = function activeContent(index) {\n      tabContent.forEach(function (section) {\n        section.classList.remove('active');\n      });\n      var direction = tabContent[index].dataset.anime;\n      tabContent[index].classList.add('active', direction);\n    };\n    tabMenu.forEach(function (item, index) {\n      item.addEventListener('click', function () {\n        activeContent(index);\n      });\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initTabMenu);\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tabmenu.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_escrever_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/escrever.js */ \"./js/modules/escrever.js\");\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_animate_scroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/animate-scroll.js */ \"./js/modules/animate-scroll.js\");\n/* harmony import */ var _modules_tabmenu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabmenu.js */ \"./js/modules/tabmenu.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fecth_animais_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fecth-animais.js */ \"./js/modules/fecth-animais.js\");\n/* harmony import */ var _modules_fecth_bitcoin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/fecth-bitcoin.js */ \"./js/modules/fecth-bitcoin.js\");\n\n\n\n\n\n\n\n\n\n// import initAnimateNumbers from './modules/numeros.js';\n\n\n\n(0,_modules_escrever_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_animate_scroll_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_tabmenu_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n// initAnimateNumbers();\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_modules_fecth_animais_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n(0,_modules_fecth_bitcoin_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])();\n\n// Verificar tipo de dados do protótipo\nvar typeofData = function typeofData(dado) {\n  return Object.prototype.toString.call(dado);\n};\nconsole.log(typeofData('ola mundo'));\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?");

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