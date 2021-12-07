/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\r\n    ///////////////////////////\r\n    //Открытие меню навигации//\r\n    ///////////////////////////\r\n    //загрузка submenu и вложений//\r\n    const loadSubmenu = () => {\r\n        $('.sub-menu__item').each(function () {\r\n            if ($(this).children('.subsub-menu').length) {\r\n                $(this).children('.sub-menu__link').next().addClass('active');\r\n            }\r\n        })\r\n\r\n        $('.subsub-menu__item').each(function () {\r\n            if ($(this).children('.subsubsub-menu').length) {\r\n                $(this).children('.subsub-menu__link').next().addClass('active');\r\n            }\r\n        })\r\n    }\r\n\r\n    loadSubmenu();\r\n    //открытие меню на мобилках\r\n    $('.menu__arrow').each(function () {\r\n        $(this).click(function () {\r\n            $(this).closest('li').siblings().removeClass('open');\r\n            $(this).next().children('li').removeClass('open');\r\n            $(this).closest('li').toggleClass('open');\r\n        })\r\n    })\r\n\r\n    //////////\r\n    //бургер//\r\n    //////////\r\n    //открытие меню\r\n    $('.header__bottom-mobile').click(function (event) {\r\n        event.preventDefault();\r\n        $('body').toggleClass('no-scroll');\r\n        $('.goods__filter-bar').next().removeClass('open');\r\n        $('.goods__filter-bar').children('.goods__filter-arrow').removeClass('active');\r\n        $(this).toggleClass('active');\r\n        $('.header__bottom-inner').toggleClass('open-mobile');\r\n\r\n    })\r\n    //закрытие при изменении размера\r\n    $(window).resize(function () {\r\n        if ($(window).width > 588) {\r\n            $('body').removeClass('no-scroll');\r\n            $('.header__bottom-mobile').removeClass('active');\r\n            $('.header__bottom-inner').removeClass('open-mobile');\r\n        }\r\n\r\n        if ($(window).width > 479.98) {\r\n            $('body').removeClass('no-scroll');\r\n            $('.goods__filter-bar').next().removeClass('open');\r\n            $('.goods__filter-bar').children('.goods__filter-arrow').removeClass('active');\r\n        }\r\n    })\r\n\r\n    /////////////\r\n    //категории//\r\n    /////////////\r\n    //открытие категорий\r\n    $('.goods__filter-bar').click(function () {\r\n        $('body').toggleClass('no-scroll');\r\n        $(this).next().toggleClass('open');\r\n        $(this).children('.goods__filter-arrow').toggleClass('active');\r\n    })\r\n\r\n    $(window).resize(function () {\r\n        if ($(window).width() <= 479.98) {\r\n            $('.goods__filter-mobile').next().css({ 'top': '65px' })\r\n        } else {\r\n            $('.goods__filter-mobile').next().css({ 'top': '30px' })\r\n        }\r\n    })\r\n\r\n\r\n\r\n\r\n    ////////////\r\n    //слайдеры//\r\n    ////////////\r\n    //begin slider//\r\n    $('.begin__slider').slick({\r\n        arrows: false,\r\n        dots: true,\r\n        autoplay: true,\r\n        speed: 500,\r\n        autoplaySpeed: 3990,\r\n    });\r\n    //cards slider//\r\n    $('.cards__slider').slick({\r\n        slidesToShow: 4,\r\n        arrows: false,\r\n        dots: true,\r\n        slidesToScroll: 1,\r\n        draggable: false,\r\n        autoplay: true,\r\n        speed: 500,\r\n        autoplaySpeed: 3000,\r\n        responsive: [\r\n            {\r\n                breakpoint: 1192,\r\n                settings: {\r\n                    slidesToShow: 3,\r\n                }\r\n            },\r\n            {\r\n                breakpoint: 991.98,\r\n                settings: {\r\n                    slidesToShow: 3,\r\n                    draggable: true,\r\n                }\r\n            },\r\n            {\r\n                breakpoint: 767.98,\r\n                settings: {\r\n                    slidesToShow: 2,\r\n                }\r\n            },\r\n        ]\r\n    })\r\n    //reviews slider//\r\n    $('.reviews__slider').slick({\r\n        slidesToShow: 3,\r\n        arrows: false,\r\n        dots: true,\r\n        slidesToScroll: 1,\r\n        autoplay: true,\r\n        speed: 500,\r\n        autoplaySpeed: 3000,\r\n        responsive: [\r\n            {\r\n                breakpoint: 1192,\r\n                settings: {\r\n                    slidesToShow: 2,\r\n                }\r\n            },\r\n            {\r\n                breakpoint: 767.98,\r\n                settings: {\r\n                    slidesToShow: 1,\r\n                    centerMode: true,\r\n                    variableWidth: true,\r\n                }\r\n            },\r\n        ]\r\n    });\r\n    //big slider//\r\n    $('.content__bigslider').slick({\r\n        slidesToShow: 1,\r\n        arrows: false,\r\n        dots: false,\r\n        draggable: false,\r\n        autoplay: false,\r\n        speed: 500,\r\n        asNavFor: \".content__smallslider\",\r\n        fade: true,\r\n\r\n        responsive: [\r\n            {\r\n                breakpoint: 479.98,\r\n                settings: {\r\n                    dots: true,\r\n                }\r\n            }\r\n        ]\r\n    })\r\n    //small slider//\r\n    $('.content__smallslider').slick({\r\n        slidesToShow: 3,\r\n        arrows: false,\r\n        dots: false,\r\n        autoplay: false,\r\n        speed: 500,\r\n        asNavFor: \".content__bigslider\",\r\n        focusOnSelect: true,\r\n        draggable: false,\r\n        responsive: [\r\n            {\r\n                breakpoint: 991.98,\r\n                settings: {\r\n                    slidesToShow: 2,\r\n                }\r\n            },\r\n            {\r\n                breakpoint: 596,\r\n                settings: {\r\n                    slidesToShow: 3,\r\n                }\r\n            },\r\n            {\r\n                breakpoint: 479.98,\r\n                settings: \"unslick\",\r\n            },\r\n        ]\r\n    })\r\n\r\n\r\n\r\n    ///////////////////\r\n    //звёздный список//\r\n    ///////////////////\r\n    $('.stars').each(function (e) {\r\n        let starsValue = $(this).children('span').text();\r\n        $(this).find('.stars__active').css('width', function () {\r\n            let widthActive = starsValue / 0.05;\r\n            return widthActive + \"%\";\r\n        });\r\n    });\r\n\r\n\r\n    /////////////////////////////////\r\n    //наведение на карточки товаров//\r\n    /////////////////////////////////\r\n    $('.cards__slider-item').mouseenter(function () {\r\n        $(this).addClass('active');\r\n    })\r\n    $('.cards__slider-item').mouseleave(function () {\r\n        $(this).removeClass('active');\r\n    })\r\n\r\n\r\n    ///////////////////\r\n    //корзина покупок//\r\n    ///////////////////\r\n    const cardButtons = $('.cards__slider-button');\r\n    const cart = $('.cart');\r\n    const cartProductsList = $('.cart__list');\r\n    const cartQuantity = $('.cart__text span');\r\n    const fullCost = $('.fullcost');\r\n    let cost = 0;\r\n\r\n    //генерация ID//\r\n    const randomId = () => {\r\n        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);\r\n    };\r\n\r\n    //удаление пробелов//\r\n    const costWhithoutSpaces = (str) => {\r\n        return str.replace(/\\s/g, '');\r\n    };\r\n\r\n    //преобразование в форматированную стоимость//\r\n    const normalCost = (str) => {\r\n        return String(str).replace(/(\\d)(?=(\\d\\d\\d)+([^\\d]|$))/g, '$1 ')\r\n    }\r\n\r\n    //добавление к итоговой стоимости//\r\n    const plusFullCost = (currentCost) => {\r\n        return cost += currentCost;\r\n    }\r\n\r\n    //отнятие от итоговой стоимости//\r\n    const minusFullCost = (currentCost) => {\r\n        return cost -= currentCost;\r\n    }\r\n\r\n    //отрисовка итоговой стоимости//\r\n    const printFullCost = () => {\r\n        fullCost.text(function () {\r\n            return normalCost(cost) + \" ₽\";\r\n        });\r\n    }\r\n\r\n    //отрисовка количества товаров//\r\n    const printQuantity = () => {\r\n        let length = $('.simplebar-content').find('.cart__item').length;\r\n        cartQuantity.text(length);\r\n        if (length > 0) {\r\n            cart.addClass('active');\r\n        } else {\r\n            cart.removeClass('active');\r\n            cart.removeClass('view');\r\n        }\r\n    }\r\n\r\n    //удаление карточек в корзине//\r\n    const deleteProducts = (productParent) => {\r\n        let id = productParent.children('.cart__product').attr('data-id');\r\n        $(`.cards__slider-item[data-id=\"${id}\"]`).find('.cards__slider-button').prop('disabled', false);\r\n        let currentCost = parseInt(costWhithoutSpaces(productParent.find('.cart__product-cost').text()));\r\n        minusFullCost(currentCost);\r\n        printFullCost();\r\n        productParent.remove();\r\n        printQuantity();\r\n    };\r\n\r\n    //отрисовка карточке в корзине//\r\n    const generateCardProduct = (img, title, cost, id) => {\r\n        return `<li class=\"cart__item\"><a class=\"cart__product\" href = \"#\" data-id=\"${id}\"><img src=\"${img}\" alt=\"\"><div class=\"cart__product-text\"><p class=\"cart__product-title\">${title}</p><p class=\"cart__product-cost\">${normalCost(cost)} ₽</p></div><button class=\"cart__product-delete\" type=\"button\"></button</></li >`;\r\n    }\r\n\r\n    //открытие корзины//\r\n    cart.click(function () {\r\n        $('.cart__content').click(function (e) {\r\n            e.stopPropagation();\r\n        });\r\n        $(this).toggleClass('view');\r\n    });\r\n\r\n    //закрытие при клике на пустую область//\r\n    $(document).click(function (event) {\r\n        let $target = $(event.target).closest('.cart');\r\n\r\n        if (!$target.length) {\r\n            $('.cart').removeClass('view');\r\n        }\r\n    })\r\n\r\n    printQuantity();\r\n\r\n    //клик по кнопке карточки//\r\n    cardButtons.each(function (el) {\r\n        $(this).closest('.cards__slider-item').attr('data-id', randomId());\r\n        $(this).click(function (e) {\r\n            let self = $(this);\r\n            let parent = self.closest('.cards__slider-item');\r\n            let id = parent.attr('data-id');\r\n            let img = parent.children('.cards__slider-photo').find('img').attr('src');\r\n            let title = parent.children('.cards__slider-name').text();\r\n            let costNumber = parseInt(costWhithoutSpaces(parent.children('.cards__slider-cost').find('span').text()));\r\n\r\n            $(this).prop('disabled', true);\r\n            plusFullCost(costNumber);\r\n            printFullCost();\r\n            $('.simplebar-content').prepend(generateCardProduct(img, title, costNumber, id));\r\n            printQuantity();\r\n        });\r\n    });\r\n\r\n    //клик по кнопке удаления//\r\n    cartProductsList.click(function (event) {\r\n\r\n        if ($(event.target).hasClass('cart__product-delete')) {\r\n            deleteProducts($(event.target).closest('.cart__item'));\r\n        }\r\n        if ($(event.target).hasClass('cart__product')) {\r\n            $(event.target).click(function (e) {\r\n                e.preventDefault();\r\n            });\r\n        }\r\n    });\r\n\r\n    ////////////////////////////////////////\r\n    //закрытие при клике на пустую область//\r\n    ////////////////////////////////////////\r\n    $(document).click(function (event) {\r\n        let $targetCart = $(event.target).closest('.cart');\r\n\r\n        if (!$targetCart.length) {\r\n            $('.cart').removeClass('view');\r\n        }\r\n    })\r\n\r\n    ///////////////\r\n    //rangeSlider//\r\n    ///////////////\r\n\r\n    const range1 = document.getElementById('rangeSlider-1');\r\n    const range2 = document.getElementById('rangeSlider-2');\r\n    const input1 = document.getElementById('input-1');\r\n    const input2 = document.getElementById('input-2');\r\n\r\n    if (range1) {\r\n        noUiSlider.create(range1, {\r\n            start: 20,\r\n            connect: 'lower',\r\n            step: 100,\r\n            range: {\r\n                'min': 300,\r\n                'max': 9999\r\n            }\r\n        });\r\n    }\r\n\r\n    range1.noUiSlider.on('update', function (values, handle) {\r\n        input1.value = Math.round(values);\r\n    });\r\n\r\n    if (range2) {\r\n        noUiSlider.create(range2, {\r\n            start: 20,\r\n            connect: 'lower',\r\n            step: 100,\r\n            range: {\r\n                'min': 300,\r\n                'max': 9999\r\n            }\r\n        });\r\n    }\r\n\r\n    range2.noUiSlider.on('update', function (values, handle) {\r\n        input2.value = Math.round(values);\r\n    });\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/isMobile.js":
/*!***********************************!*\
  !*** ./src/assets/js/isMobile.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let isMobile = {\r\n    Android: function () { return navigator.userAgent.match(/Android/i); },\r\n    BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },\r\n    iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },\r\n    Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },\r\n    Windows: function () { return navigator.userAgent.match(/IEMobile/i); },\r\n    any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }\r\n};\r\n\r\nlet body = document.querySelector('body');\r\nif (isMobile.any()) {\r\n    body.classList.add('touch');\r\n} else {\r\n    body.classList.add('mouse');\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/isMobile.js?");

/***/ }),

/***/ "./src/assets/js/webpForCss.js":
/*!*************************************!*\
  !*** ./src/assets/js/webpForCss.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function testWebP(callback) {\r\n\r\n    var webP = new Image();\r\n    webP.onload = webP.onerror = function () {\r\n        callback(webP.height == 2);\r\n    };\r\n    webP.src = \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\r\n}\r\n\r\ntestWebP(function (support) {\r\n\r\n    if (support == true) {\r\n        document.querySelector('body').classList.add('webp');\r\n    } else {\r\n        document.querySelector('body').classList.add('no-webp');\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/webpForCss.js?");

/***/ }),

/***/ 0:
/*!**********************************************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/isMobile.js ./src/assets/js/webpForCss.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! E:\\Any\\WEB\\ПРОЕКТ --Fitness--\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\n__webpack_require__(/*! E:\\Any\\WEB\\ПРОЕКТ --Fitness--\\src\\assets\\js\\isMobile.js */\"./src/assets/js/isMobile.js\");\nmodule.exports = __webpack_require__(/*! E:\\Any\\WEB\\ПРОЕКТ --Fitness--\\src\\assets\\js\\webpForCss.js */\"./src/assets/js/webpForCss.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/isMobile.js_./src/assets/js/webpForCss.js?");

/***/ })

/******/ });