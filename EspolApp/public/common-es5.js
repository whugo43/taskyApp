(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function node_modulesIonicCoreDistEsmButtonActiveA6787d69Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-e806d1f6.js */
      "./node_modules/@ionic/core/dist/esm/index-e806d1f6.js");
      /* harmony import */


      var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-f49d994d.js */
      "./node_modules/@ionic/core/dist/esm/index-f49d994d.js");
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function node_modulesIonicCoreDistEsmFrameworkDelegate4584ab5aJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });

      var attachComponent = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!delegate) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);

                  if (!el.componentOnReady) {
                    _context.next = 11;
                    break;
                  }

                  _context.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context.abrupt("return", el);

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function node_modulesIonicCoreDistEsmHaptic27b3f981Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function node_modulesIonicCoreDistEsmSpinnerConfigsCd7845afJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function node_modulesIonicCoreDistEsmThemeFf3fc52fJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context2.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context2.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context2.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context2.abrupt("return", false);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function openURL(_x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "./src/app/models/adopcion.ts":
    /*!************************************!*\
      !*** ./src/app/models/adopcion.ts ***!
      \************************************/

    /*! exports provided: Adopcion */

    /***/
    function srcAppModelsAdopcionTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Adopcion", function () {
        return Adopcion;
      });

      var Adopcion = function Adopcion() {
        _classCallCheck(this, Adopcion);
      };
      /***/

    },

    /***/
    "./src/app/models/ayudantes.ts":
    /*!*************************************!*\
      !*** ./src/app/models/ayudantes.ts ***!
      \*************************************/

    /*! exports provided: Ayudantes */

    /***/
    function srcAppModelsAyudantesTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ayudantes", function () {
        return Ayudantes;
      });

      var Ayudantes = function Ayudantes() {
        _classCallCheck(this, Ayudantes);
      };
      /***/

    },

    /***/
    "./src/app/models/citas.ts":
    /*!*********************************!*\
      !*** ./src/app/models/citas.ts ***!
      \*********************************/

    /*! exports provided: Citas */

    /***/
    function srcAppModelsCitasTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Citas", function () {
        return Citas;
      });

      var Citas = function Citas() {
        _classCallCheck(this, Citas);
      };
      /***/

    },

    /***/
    "./src/app/models/comentarios.ts":
    /*!***************************************!*\
      !*** ./src/app/models/comentarios.ts ***!
      \***************************************/

    /*! exports provided: Comentarios */

    /***/
    function srcAppModelsComentariosTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Comentarios", function () {
        return Comentarios;
      });

      var Comentarios = function Comentarios() {
        _classCallCheck(this, Comentarios);
      };
      /***/

    },

    /***/
    "./src/app/models/grupos.ts":
    /*!**********************************!*\
      !*** ./src/app/models/grupos.ts ***!
      \**********************************/

    /*! exports provided: Grupos */

    /***/
    function srcAppModelsGruposTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Grupos", function () {
        return Grupos;
      });

      var Grupos = function Grupos() {
        _classCallCheck(this, Grupos);
      };
      /***/

    },

    /***/
    "./src/app/models/publicaciones-materia.ts":
    /*!*************************************************!*\
      !*** ./src/app/models/publicaciones-materia.ts ***!
      \*************************************************/

    /*! exports provided: PublicacionesMateria */

    /***/
    function srcAppModelsPublicacionesMateriaTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublicacionesMateria", function () {
        return PublicacionesMateria;
      });

      var PublicacionesMateria = function PublicacionesMateria() {
        _classCallCheck(this, PublicacionesMateria);
      };
      /***/

    },

    /***/
    "./src/app/models/publicidad.ts":
    /*!**************************************!*\
      !*** ./src/app/models/publicidad.ts ***!
      \**************************************/

    /*! exports provided: Publicidad */

    /***/
    function srcAppModelsPublicidadTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Publicidad", function () {
        return Publicidad;
      });

      var Publicidad = function Publicidad() {
        _classCallCheck(this, Publicidad);
      };
      /***/

    },

    /***/
    "./src/app/models/usuarios.ts":
    /*!************************************!*\
      !*** ./src/app/models/usuarios.ts ***!
      \************************************/

    /*! exports provided: Usuarios */

    /***/
    function srcAppModelsUsuariosTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Usuarios", function () {
        return Usuarios;
      });

      var Usuarios = function Usuarios() {
        _classCallCheck(this, Usuarios);
      };
      /***/

    },

    /***/
    "./src/app/pipes/filtro-adopcion.pipe.ts":
    /*!***********************************************!*\
      !*** ./src/app/pipes/filtro-adopcion.pipe.ts ***!
      \***********************************************/

    /*! exports provided: FiltroAdopcionPipe */

    /***/
    function srcAppPipesFiltroAdopcionPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FiltroAdopcionPipe", function () {
        return FiltroAdopcionPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FiltroAdopcionPipe = /*#__PURE__*/function () {
        function FiltroAdopcionPipe() {
          _classCallCheck(this, FiltroAdopcionPipe);
        }

        _createClass(FiltroAdopcionPipe, [{
          key: "transform",
          value: function transform(adopcion, texto) {
            if (texto.length === 0) {
              return adopcion;
            }

            texto = texto.toLocaleLowerCase();
            return adopcion.filter(function (adopcion) {
              return adopcion.Descripcion.toLocaleLowerCase().includes(texto) || adopcion.Titulo.toLocaleLowerCase().includes(texto);
            });
          }
        }]);

        return FiltroAdopcionPipe;
      }();

      FiltroAdopcionPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtroAdopcion'
      })], FiltroAdopcionPipe);
      /***/
    },

    /***/
    "./src/app/pipes/filtro-anuncio.pipe.ts":
    /*!**********************************************!*\
      !*** ./src/app/pipes/filtro-anuncio.pipe.ts ***!
      \**********************************************/

    /*! exports provided: FiltroAnuncioPipe */

    /***/
    function srcAppPipesFiltroAnuncioPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FiltroAnuncioPipe", function () {
        return FiltroAnuncioPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FiltroAnuncioPipe = /*#__PURE__*/function () {
        function FiltroAnuncioPipe() {
          _classCallCheck(this, FiltroAnuncioPipe);
        }

        _createClass(FiltroAnuncioPipe, [{
          key: "transform",
          value: function transform(anuncios, texto) {
            if (texto.length === 0) {
              return anuncios;
            }

            texto = texto.toLocaleLowerCase();
            return anuncios.filter(function (anuncio) {
              return anuncio.Descripcion.toLocaleLowerCase().includes(texto) || anuncio.Titulo.toLocaleLowerCase().includes(texto);
            });
          }
        }]);

        return FiltroAnuncioPipe;
      }();

      FiltroAnuncioPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtroAnuncio'
      })], FiltroAnuncioPipe);
      /***/
    },

    /***/
    "./src/app/pipes/filtro-comentarios.pipe.ts":
    /*!**************************************************!*\
      !*** ./src/app/pipes/filtro-comentarios.pipe.ts ***!
      \**************************************************/

    /*! exports provided: FiltroComentariosPipe */

    /***/
    function srcAppPipesFiltroComentariosPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FiltroComentariosPipe", function () {
        return FiltroComentariosPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FiltroComentariosPipe = /*#__PURE__*/function () {
        function FiltroComentariosPipe() {
          _classCallCheck(this, FiltroComentariosPipe);
        }

        _createClass(FiltroComentariosPipe, [{
          key: "transform",
          value: function transform(comentarios, texto) {
            if (texto.length === 0) {
              return comentarios;
            }

            texto = texto.toLocaleLowerCase();
            return comentarios.filter(function (comentarios) {
              return comentarios.Comentario.toLocaleLowerCase().includes(texto);
            });
          }
        }]);

        return FiltroComentariosPipe;
      }();

      FiltroComentariosPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtroComentarios'
      })], FiltroComentariosPipe);
      /***/
    },

    /***/
    "./src/app/pipes/filtro-curso.pipe.ts":
    /*!********************************************!*\
      !*** ./src/app/pipes/filtro-curso.pipe.ts ***!
      \********************************************/

    /*! exports provided: FiltroCursoPipe */

    /***/
    function srcAppPipesFiltroCursoPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FiltroCursoPipe", function () {
        return FiltroCursoPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FiltroCursoPipe = /*#__PURE__*/function () {
        function FiltroCursoPipe() {
          _classCallCheck(this, FiltroCursoPipe);
        }

        _createClass(FiltroCursoPipe, [{
          key: "transform",
          value: function transform(cursos, texto) {
            if (texto.length === 0) {
              return cursos;
            }

            texto = texto.toLocaleLowerCase();
            return cursos.filter(function (curso) {
              return curso.Nombre.toLocaleLowerCase().includes(texto);
            });
          }
        }]);

        return FiltroCursoPipe;
      }();

      FiltroCursoPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtroCurso'
      })], FiltroCursoPipe);
      /***/
    },

    /***/
    "./src/app/pipes/filtro-publicacion.pipe.ts":
    /*!**************************************************!*\
      !*** ./src/app/pipes/filtro-publicacion.pipe.ts ***!
      \**************************************************/

    /*! exports provided: FiltroPublicacionPipe */

    /***/
    function srcAppPipesFiltroPublicacionPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FiltroPublicacionPipe", function () {
        return FiltroPublicacionPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FiltroPublicacionPipe = /*#__PURE__*/function () {
        function FiltroPublicacionPipe() {
          _classCallCheck(this, FiltroPublicacionPipe);
        }

        _createClass(FiltroPublicacionPipe, [{
          key: "transform",
          value: function transform(value) {
            return null;
          }
        }]);

        return FiltroPublicacionPipe;
      }();

      FiltroPublicacionPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtroPublicacion'
      })], FiltroPublicacionPipe);
      /***/
    },

    /***/
    "./src/app/pipes/filtro-usuario.pipe.ts":
    /*!**********************************************!*\
      !*** ./src/app/pipes/filtro-usuario.pipe.ts ***!
      \**********************************************/

    /*! exports provided: FiltroUsuarioPipe */

    /***/
    function srcAppPipesFiltroUsuarioPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FiltroUsuarioPipe", function () {
        return FiltroUsuarioPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FiltroUsuarioPipe = /*#__PURE__*/function () {
        function FiltroUsuarioPipe() {
          _classCallCheck(this, FiltroUsuarioPipe);
        }

        _createClass(FiltroUsuarioPipe, [{
          key: "transform",
          value: function transform(usuarios, texto) {
            if (texto.length === 0) {
              return usuarios;
            }

            texto = texto.toLocaleLowerCase();
            return usuarios.filter(function (usuarios) {
              var usuarioCompleto = usuarios.Nombre + " " + usuarios.Apellido;
              return usuarioCompleto.toLocaleLowerCase().includes(texto);
            });
          }
        }]);

        return FiltroUsuarioPipe;
      }();

      FiltroUsuarioPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtroUsuario'
      })], FiltroUsuarioPipe);
      /***/
    },

    /***/
    "./src/app/pipes/filtro-veterinarios.pipe.ts":
    /*!***************************************************!*\
      !*** ./src/app/pipes/filtro-veterinarios.pipe.ts ***!
      \***************************************************/

    /*! exports provided: FiltroVeterinariosPipe */

    /***/
    function srcAppPipesFiltroVeterinariosPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FiltroVeterinariosPipe", function () {
        return FiltroVeterinariosPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FiltroVeterinariosPipe = /*#__PURE__*/function () {
        function FiltroVeterinariosPipe() {
          _classCallCheck(this, FiltroVeterinariosPipe);
        }

        _createClass(FiltroVeterinariosPipe, [{
          key: "transform",
          value: function transform(usuarios, texto) {
            if (texto.length === 0) {
              return usuarios;
            }

            texto = texto.toLocaleLowerCase();
            return usuarios.filter(function (usuarios) {
              var usuarioCompleto = usuarios.Nombres + " " + usuarios.Apellidos;
              return usuarioCompleto.toLocaleLowerCase().includes(texto) || usuarios.Descripcion.toLocaleLowerCase().includes(texto) || usuarios.Direccion.toLocaleLowerCase().includes(texto) || usuarios.RedSocial.toLocaleLowerCase().includes(texto);
            });
          }
        }]);

        return FiltroVeterinariosPipe;
      }();

      FiltroVeterinariosPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtroVeterinarios'
      })], FiltroVeterinariosPipe);
      /***/
    },

    /***/
    "./src/app/pipes/pipes.module.ts":
    /*!***************************************!*\
      !*** ./src/app/pipes/pipes.module.ts ***!
      \***************************************/

    /*! exports provided: PipesModule */

    /***/
    function srcAppPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
        return PipesModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _filtro_curso_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./filtro-curso.pipe */
      "./src/app/pipes/filtro-curso.pipe.ts");
      /* harmony import */


      var _filtro_usuario_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./filtro-usuario.pipe */
      "./src/app/pipes/filtro-usuario.pipe.ts");
      /* harmony import */


      var _filtro_publicacion_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./filtro-publicacion.pipe */
      "./src/app/pipes/filtro-publicacion.pipe.ts");
      /* harmony import */


      var _filtro_anuncio_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./filtro-anuncio.pipe */
      "./src/app/pipes/filtro-anuncio.pipe.ts");
      /* harmony import */


      var _filtro_comentarios_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./filtro-comentarios.pipe */
      "./src/app/pipes/filtro-comentarios.pipe.ts");
      /* harmony import */


      var _filtro_adopcion_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./filtro-adopcion.pipe */
      "./src/app/pipes/filtro-adopcion.pipe.ts");
      /* harmony import */


      var _filtro_veterinarios_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./filtro-veterinarios.pipe */
      "./src/app/pipes/filtro-veterinarios.pipe.ts");

      var PipesModule = function PipesModule() {
        _classCallCheck(this, PipesModule);
      };

      PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_filtro_curso_pipe__WEBPACK_IMPORTED_MODULE_2__["FiltroCursoPipe"], _filtro_usuario_pipe__WEBPACK_IMPORTED_MODULE_3__["FiltroUsuarioPipe"], _filtro_publicacion_pipe__WEBPACK_IMPORTED_MODULE_4__["FiltroPublicacionPipe"], _filtro_anuncio_pipe__WEBPACK_IMPORTED_MODULE_5__["FiltroAnuncioPipe"], _filtro_comentarios_pipe__WEBPACK_IMPORTED_MODULE_6__["FiltroComentariosPipe"], _filtro_adopcion_pipe__WEBPACK_IMPORTED_MODULE_7__["FiltroAdopcionPipe"], _filtro_veterinarios_pipe__WEBPACK_IMPORTED_MODULE_8__["FiltroVeterinariosPipe"]],
        exports: [_filtro_curso_pipe__WEBPACK_IMPORTED_MODULE_2__["FiltroCursoPipe"], _filtro_usuario_pipe__WEBPACK_IMPORTED_MODULE_3__["FiltroUsuarioPipe"], _filtro_publicacion_pipe__WEBPACK_IMPORTED_MODULE_4__["FiltroPublicacionPipe"], _filtro_anuncio_pipe__WEBPACK_IMPORTED_MODULE_5__["FiltroAnuncioPipe"], _filtro_comentarios_pipe__WEBPACK_IMPORTED_MODULE_6__["FiltroComentariosPipe"], _filtro_adopcion_pipe__WEBPACK_IMPORTED_MODULE_7__["FiltroAdopcionPipe"], _filtro_veterinarios_pipe__WEBPACK_IMPORTED_MODULE_8__["FiltroVeterinariosPipe"]]
      })], PipesModule);
      /***/
    },

    /***/
    "./src/app/services/adopcion.service.ts":
    /*!**********************************************!*\
      !*** ./src/app/services/adopcion.service.ts ***!
      \**********************************************/

    /*! exports provided: AdopcionService */

    /***/
    function srcAppServicesAdopcionServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdopcionService", function () {
        return AdopcionService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angularfire2/firestore */
      "./node_modules/angularfire2/firestore/index.js");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var AdopcionService = /*#__PURE__*/function () {
        function AdopcionService(firestore) {
          _classCallCheck(this, AdopcionService);

          this.AdopcionCollection = firestore.collection('Adopcion', function (ref) {
            return ref.orderBy("Fecha", "desc");
          });
          this.Adopcion = this.AdopcionCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          }));
        }

        _createClass(AdopcionService, [{
          key: "getAdopciones",
          value: function getAdopciones() {
            return this.Adopcion;
          }
        }, {
          key: "getAdopcion",
          value: function getAdopcion(id) {
            return this.AdopcionCollection.doc(id).valueChanges();
          }
        }, {
          key: "addAdopcion",
          value: function addAdopcion(Adopcion) {
            return this.AdopcionCollection.add(Object.assign({}, Adopcion));
          }
        }, {
          key: "updateAdopcion",
          value: function updateAdopcion(id, Adopcion) {
            return this.AdopcionCollection.doc(id).update(Object.assign({}, Adopcion));
          }
        }, {
          key: "removeAdopcion",
          value: function removeAdopcion(id) {
            return this.AdopcionCollection.doc(id)["delete"]();
          }
        }]);

        return AdopcionService;
      }();

      AdopcionService.ctorParameters = function () {
        return [{
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      AdopcionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AdopcionService);
      /***/
    },

    /***/
    "./src/app/services/ayudantes.service.ts":
    /*!***********************************************!*\
      !*** ./src/app/services/ayudantes.service.ts ***!
      \***********************************************/

    /*! exports provided: AyudantesService */

    /***/
    function srcAppServicesAyudantesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AyudantesService", function () {
        return AyudantesService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angularfire2/firestore */
      "./node_modules/angularfire2/firestore/index.js");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js"); // import firebase from 'firebase/app';
      // import 'firebase/firestore';


      var AyudantesService = /*#__PURE__*/function () {
        function AyudantesService(firestore) {
          _classCallCheck(this, AyudantesService);

          this.firestore = firestore;
          this.ayudantesCollection = firestore.collection('Ayudantes');
          this.ayudantes = this.ayudantesCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          }));
        }

        _createClass(AyudantesService, [{
          key: "getAyudantes",
          value: function getAyudantes() {
            return this.ayudantes;
          }
        }, {
          key: "getAyudante",
          value: function getAyudante(id) {
            return this.ayudantesCollection.doc(id).valueChanges();
          }
        }, {
          key: "addAyudante",
          value: function addAyudante(Ayudantes) {
            return this.ayudantesCollection.add(Object.assign({}, Ayudantes));
          }
        }, {
          key: "updateAyudante",
          value: function updateAyudante(id, Ayudantes) {
            return this.ayudantesCollection.doc(id).update(Object.assign({}, Ayudantes));
          }
        }, {
          key: "removeAyudante",
          value: function removeAyudante(id) {
            return this.ayudantesCollection.doc(id)["delete"]();
          }
        }]);

        return AyudantesService;
      }();

      AyudantesService.ctorParameters = function () {
        return [{
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      AyudantesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AyudantesService);
      /***/
    },

    /***/
    "./src/app/services/citas.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/citas.service.ts ***!
      \*******************************************/

    /*! exports provided: CitasService */

    /***/
    function srcAppServicesCitasServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CitasService", function () {
        return CitasService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angularfire2/firestore */
      "./node_modules/angularfire2/firestore/index.js");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var CitasService = /*#__PURE__*/function () {
        function CitasService(firestore) {
          _classCallCheck(this, CitasService);

          this.citasCollection = firestore.collection('Citas');
          this.citas = this.citasCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          }));
        }

        _createClass(CitasService, [{
          key: "getCitas",
          value: function getCitas() {
            return this.citas;
          }
        }, {
          key: "getCita",
          value: function getCita(id) {
            return this.citasCollection.doc(id).valueChanges();
          }
        }, {
          key: "addCita",
          value: function addCita(Citas, id) {
            return this.citasCollection.doc(id).set(Object.assign({}, Citas));
          }
        }]);

        return CitasService;
      }();

      CitasService.ctorParameters = function () {
        return [{
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      CitasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CitasService);
      /***/
    },

    /***/
    "./src/app/services/comentarios.service.ts":
    /*!*************************************************!*\
      !*** ./src/app/services/comentarios.service.ts ***!
      \*************************************************/

    /*! exports provided: ComentariosService */

    /***/
    function srcAppServicesComentariosServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComentariosService", function () {
        return ComentariosService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angularfire2/firestore */
      "./node_modules/angularfire2/firestore/index.js");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var ComentariosService = /*#__PURE__*/function () {
        function ComentariosService(firestore) {
          _classCallCheck(this, ComentariosService);

          this.ComentariosCollection = firestore.collection('Comentarios', function (ref) {
            return ref.orderBy("Fecha", "desc");
          });
          this.Comentarios = this.ComentariosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          }));
        }

        _createClass(ComentariosService, [{
          key: "getComentarios",
          value: function getComentarios() {
            return this.Comentarios;
          }
        }, {
          key: "getComentario",
          value: function getComentario(id) {
            return this.ComentariosCollection.doc(id).valueChanges();
          }
        }, {
          key: "addComentario",
          value: function addComentario(Comentarios) {
            return this.ComentariosCollection.add(Object.assign({}, Comentarios));
          }
        }, {
          key: "removeComentario",
          value: function removeComentario(id) {
            return this.ComentariosCollection.doc(id)["delete"]();
          }
        }]);

        return ComentariosService;
      }();

      ComentariosService.ctorParameters = function () {
        return [{
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      ComentariosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ComentariosService);
      /***/
    },

    /***/
    "./src/app/services/cursos.service.ts":
    /*!********************************************!*\
      !*** ./src/app/services/cursos.service.ts ***!
      \********************************************/

    /*! exports provided: CursosService */

    /***/
    function srcAppServicesCursosServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CursosService", function () {
        return CursosService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angularfire2/firestore */
      "./node_modules/angularfire2/firestore/index.js");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var CursosService = /*#__PURE__*/function () {
        function CursosService(firestore) {
          _classCallCheck(this, CursosService);

          this.cursosCollection = firestore.collection('Materias', function (ref) {
            return ref.orderBy("Nombre", "asc");
          });
          this.cursos = this.cursosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          }));
        }

        _createClass(CursosService, [{
          key: "getCursos",
          value: function getCursos() {
            return this.cursos;
          }
        }, {
          key: "getCurso",
          value: function getCurso(id) {
            return this.cursosCollection.doc(id).valueChanges();
          }
        }]);

        return CursosService;
      }();

      CursosService.ctorParameters = function () {
        return [{
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      CursosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CursosService);
      /***/
    },

    /***/
    "./src/app/services/grupos.service.ts":
    /*!********************************************!*\
      !*** ./src/app/services/grupos.service.ts ***!
      \********************************************/

    /*! exports provided: GruposService */

    /***/
    function srcAppServicesGruposServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GruposService", function () {
        return GruposService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angularfire2/firestore */
      "./node_modules/angularfire2/firestore/index.js");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var GruposService = /*#__PURE__*/function () {
        function GruposService(firestore) {
          _classCallCheck(this, GruposService);

          this.gruposCollection = firestore.collection('Grupos');
          this.grupos = this.gruposCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          }));
        }

        _createClass(GruposService, [{
          key: "getGrupos",
          value: function getGrupos() {
            return this.grupos;
          }
        }, {
          key: "getGrupo",
          value: function getGrupo(id) {
            return this.gruposCollection.doc(id).valueChanges();
          }
        }, {
          key: "addGrupo",
          value: function addGrupo(Grupos) {
            return this.gruposCollection.add(Object.assign({}, Grupos));
          }
        }, {
          key: "updateGrupo",
          value: function updateGrupo(id, Grupos) {
            return this.gruposCollection.doc(id).update(Object.assign({}, Grupos));
          }
        }, {
          key: "removeGrupo",
          value: function removeGrupo(id) {
            return this.gruposCollection.doc(id)["delete"]();
          }
        }]);

        return GruposService;
      }();

      GruposService.ctorParameters = function () {
        return [{
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      GruposService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], GruposService);
      /***/
    },

    /***/
    "./src/app/services/mensaje-error.service.ts":
    /*!***************************************************!*\
      !*** ./src/app/services/mensaje-error.service.ts ***!
      \***************************************************/

    /*! exports provided: MensajeErrorService */

    /***/
    function srcAppServicesMensajeErrorServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MensajeErrorService", function () {
        return MensajeErrorService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var MensajeErrorService = /*#__PURE__*/function () {
        function MensajeErrorService() {
          _classCallCheck(this, MensajeErrorService);
        }

        _createClass(MensajeErrorService, [{
          key: "AuthErrorCodeSpanish",
          value: function AuthErrorCodeSpanish(description) {
            if (description == "email-already-in-use") {
              return "Este correo ya está siendo usado por otro usuario";
            } else if (description == "user-disabled") {
              return "Este usuario ha sido deshabilitado";
            } else if (description == "operation-not-allowed") {
              return "Operación no permitida";
            } else if (description == "invalid-email") {
              return "Correo electrónico no válido";
            } else if (description == "wrong-password") {
              return "Contraseña incorrecta";
            } else if (description == "user-not-found") {
              return "No se encontró cuenta del usuario con el correo especificado";
            } else if (description == "network-request-failed") {
              return "Promblema al intentar conectar al servidor";
            } else if (description == "weak-password") {
              return "Contraseña muy débil o no válida";
            } else if (description == "missing-email") {
              return "Hace falta registrar un correo electrónico";
            } else if (description == "internal-error") {
              return "Error interno";
            } else if (description == "invalid-custom-token") {
              return "Token personalizado invalido";
            } else if (description == "too-many-requests") {
              return "Ya se han enviado muchas solicitudes al servidor";
            } else {
              return "Algo salio mal, intentelo de nuevo";
            }
          }
        }]);

        return MensajeErrorService;
      }();

      MensajeErrorService.ctorParameters = function () {
        return [];
      };

      MensajeErrorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], MensajeErrorService);
      /***/
    },

    /***/
    "./src/app/services/publicaciones.service.ts":
    /*!***************************************************!*\
      !*** ./src/app/services/publicaciones.service.ts ***!
      \***************************************************/

    /*! exports provided: PublicacionesService */

    /***/
    function srcAppServicesPublicacionesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublicacionesService", function () {
        return PublicacionesService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angularfire2/firestore */
      "./node_modules/angularfire2/firestore/index.js");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var PublicacionesService = /*#__PURE__*/function () {
        //private probar1: AngularFirestore <PublicacionesMateria>;
        function PublicacionesService(firestore) {
          _classCallCheck(this, PublicacionesService);

          this.publicacionesCollection = firestore.collection('PublicacionesGenerales'); //this.probar1 = firestore.collection('Publicaciones'.where("Visibilidad", "==", true).get();

          this.publicaciones = this.publicacionesCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          }));
          this.publicacionesMateriaCollection = firestore.collection('Publicaciones', function (ref) {
            return ref.orderBy("Fecha", "desc");
          });
          this.publicacionesMateria = this.publicacionesMateriaCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          }));
        }

        _createClass(PublicacionesService, [{
          key: "getPublicaciones",
          value: function getPublicaciones() {
            return this.publicaciones;
          }
        }, {
          key: "getPublicacion",
          value: function getPublicacion(id) {
            return this.publicacionesCollection.doc(id).valueChanges();
          }
        }, {
          key: "addPublicaciones",
          value: function addPublicaciones(Usuarios) {
            return this.publicacionesCollection.add(Object.assign({}, Usuarios));
          }
        }, {
          key: "updatePublicaciones",
          value: function updatePublicaciones(id, Usuarios) {
            return this.publicacionesCollection.doc(id).update(Object.assign({}, Usuarios));
          }
        }, {
          key: "removePublicaciones",
          value: function removePublicaciones(id) {
            return this.publicacionesCollection.doc(id)["delete"]();
          } // probar(){
          //   return this.probar1;
          // }

        }, {
          key: "getPublicacionesMateria",
          value: function getPublicacionesMateria() {
            return this.publicacionesMateria;
          }
        }, {
          key: "getPublicacionMateria",
          value: function getPublicacionMateria(id) {
            return this.publicacionesMateriaCollection.doc(id).valueChanges();
          }
        }, {
          key: "addPublicacionesMateria",
          value: function addPublicacionesMateria(PublicacionesMateria) {
            return this.publicacionesMateriaCollection.add(Object.assign({}, PublicacionesMateria));
          }
        }, {
          key: "updatePublicacionesMateria",
          value: function updatePublicacionesMateria(id, PublicacionesMateria) {
            return this.publicacionesMateriaCollection.doc(id).update(Object.assign({}, PublicacionesMateria));
          }
        }, {
          key: "removePublicacionesMateria",
          value: function removePublicacionesMateria(id) {
            return this.publicacionesMateriaCollection.doc(id)["delete"]();
          }
        }]);

        return PublicacionesService;
      }();

      PublicacionesService.ctorParameters = function () {
        return [{
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      PublicacionesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PublicacionesService);
      /***/
    },

    /***/
    "./src/app/services/publicidad.service.ts":
    /*!************************************************!*\
      !*** ./src/app/services/publicidad.service.ts ***!
      \************************************************/

    /*! exports provided: PublicidadService */

    /***/
    function srcAppServicesPublicidadServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublicidadService", function () {
        return PublicidadService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angularfire2/firestore */
      "./node_modules/angularfire2/firestore/index.js");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var PublicidadService = /*#__PURE__*/function () {
        //private probar1: AngularFirestore <PublicacionesMateria>;
        function PublicidadService(firestore) {
          _classCallCheck(this, PublicidadService);

          this.publicidadCollection = firestore.collection('Publicidad'); //this.probar1 = firestore.collection('Publicaciones'.where("Visibilidad", "==", true).get();

          this.publicidad = this.publicidadCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          }));
        }

        _createClass(PublicidadService, [{
          key: "getPublicidad",
          value: function getPublicidad() {
            return this.publicidad;
          }
        }, {
          key: "getPublicidadId",
          value: function getPublicidadId(id) {
            return this.publicidadCollection.doc(id).valueChanges();
          }
        }, {
          key: "updatePublicidad",
          value: function updatePublicidad(id, Publicidad) {
            return this.publicidadCollection.doc(id).update(Object.assign({}, Publicidad));
          }
        }]);

        return PublicidadService;
      }();

      PublicidadService.ctorParameters = function () {
        return [{
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      PublicidadService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PublicidadService);
      /***/
    },

    /***/
    "./src/app/services/veterinarios.service.ts":
    /*!**************************************************!*\
      !*** ./src/app/services/veterinarios.service.ts ***!
      \**************************************************/

    /*! exports provided: VeterinariosService */

    /***/
    function srcAppServicesVeterinariosServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VeterinariosService", function () {
        return VeterinariosService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angularfire2/firestore */
      "./node_modules/angularfire2/firestore/index.js");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var VeterinariosService = /*#__PURE__*/function () {
        function VeterinariosService(firestore) {
          _classCallCheck(this, VeterinariosService);

          this.usuariosCollection = firestore.collection('Veterinarios');
          this.usuarios = this.usuariosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          }));
        }

        _createClass(VeterinariosService, [{
          key: "getUsuarios",
          value: function getUsuarios() {
            return this.usuarios;
          }
        }, {
          key: "getUsuario",
          value: function getUsuario(id) {
            return this.usuariosCollection.doc(id).valueChanges();
          }
        }, {
          key: "addUsuario",
          value: function addUsuario(id, Usuarios) {
            return this.usuariosCollection.doc(id).set(Object.assign({}, Usuarios));
          }
        }, {
          key: "updateUsuario",
          value: function updateUsuario(id, Usuarios) {
            return this.usuariosCollection.doc(id).update(Object.assign({}, Usuarios));
          }
        }, {
          key: "removeUsuario",
          value: function removeUsuario(id) {
            return this.usuariosCollection.doc(id)["delete"]();
          }
        }]);

        return VeterinariosService;
      }();

      VeterinariosService.ctorParameters = function () {
        return [{
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      VeterinariosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], VeterinariosService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map