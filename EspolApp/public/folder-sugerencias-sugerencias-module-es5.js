(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-sugerencias-sugerencias-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/sugerencias/sugerencias.page.html":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/sugerencias/sugerencias.page.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFolderSugerenciasSugerenciasPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\r\n  <ion-toolbar>\r\n\r\n    <ion-segment color=\"tertiary\" value=\"perfil\" >\r\n\r\n      <!-- <ion-segment-button *ngIf=\"Rol==Ayudante\" value=\"publicaciones\" [routerLink]=\"['/mis-ayudantias']\" routerDirection=\"root\">\r\n        <ion-icon name=\"file-tray-stacked-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Mis Cursos</ion-label>\r\n      </ion-segment-button> -->\r\n\r\n      <ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\r\n        <ion-icon name=\"newspaper-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Publicaciones</ion-label>\r\n      </ion-segment-button>\r\n      \r\n      <ion-segment-button value=\"cursos\" [routerLink]=\"['/cursos']\" routerDirection=\"root\">\r\n        <ion-icon name=\"library-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 14px;\">Cursos</ion-label>\r\n      </ion-segment-button>\r\n    \r\n    \r\n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-icon name=\"person-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\r\n      </ion-segment-button>\r\n      \r\n  \r\n\r\n  \r\n\r\n    </ion-segment>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n<form #form=\"ngForm\" (ngSubmit)=\"enviarSugerencia(form)\">\r\n    <ion-list>\r\n      \r\n      <ion-card style=\"margin-top:15px\">\r\n        <ion-item>\r\n          <ion-label>Asunto </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-input required placeholder=\"Ingrese el asunto:\" name=\"titulo\" type='text' ngModel required></ion-input>\r\n        </ion-item>\r\n      </ion-card>\r\n         \r\n      <!-- <ion-item>\r\n        <ion-label> </ion-label>\r\n        <ion-input required placeholder=\"Título\" name=\"titulo\" type='text' ngModel required></ion-input>\r\n      </ion-item>\r\n      <ion-item> -->\r\n\r\n        <ion-card style=\"margin-top:15px\">\r\n          <ion-item>\r\n            <ion-label>Descripción </ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-textarea required placeholder=\"Ingrese la descripción:\" name=\"descripcion\" type='text' ngModel required></ion-textarea>\r\n          </ion-item>\r\n        </ion-card>\r\n\r\n\r\n        <!-- <ion-label> </ion-label>\r\n        <ion-textarea required placeholder=\"Descripción\" name=\"descripcion\" type='text' ngModel required></ion-textarea>\r\n      </ion-item> -->\r\n    \r\n    </ion-list>\r\n\r\n    <div class=\"ion-padding\">\r\n      <ion-button type=\"submit\"  [disabled]=\"form.invalid\" expand=\"block\" style=\"width: 125px;margin:auto;\">\r\n        Enviar\r\n      </ion-button>\r\n    </div>\r\n  </form>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/folder/sugerencias/sugerencias-routing.module.ts":
    /*!******************************************************************!*\
      !*** ./src/app/folder/sugerencias/sugerencias-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: SugerenciasPageRoutingModule */

    /***/
    function srcAppFolderSugerenciasSugerenciasRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SugerenciasPageRoutingModule", function () {
        return SugerenciasPageRoutingModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _sugerencias_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sugerencias.page */
      "./src/app/folder/sugerencias/sugerencias.page.ts");

      var routes = [{
        path: '',
        component: _sugerencias_page__WEBPACK_IMPORTED_MODULE_3__["SugerenciasPage"]
      }];

      var SugerenciasPageRoutingModule = function SugerenciasPageRoutingModule() {
        _classCallCheck(this, SugerenciasPageRoutingModule);
      };

      SugerenciasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SugerenciasPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/folder/sugerencias/sugerencias.module.ts":
    /*!**********************************************************!*\
      !*** ./src/app/folder/sugerencias/sugerencias.module.ts ***!
      \**********************************************************/

    /*! exports provided: SugerenciasPageModule */

    /***/
    function srcAppFolderSugerenciasSugerenciasModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SugerenciasPageModule", function () {
        return SugerenciasPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _sugerencias_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sugerencias-routing.module */
      "./src/app/folder/sugerencias/sugerencias-routing.module.ts");
      /* harmony import */


      var _sugerencias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sugerencias.page */
      "./src/app/folder/sugerencias/sugerencias.page.ts");

      var SugerenciasPageModule = function SugerenciasPageModule() {
        _classCallCheck(this, SugerenciasPageModule);
      };

      SugerenciasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sugerencias_routing_module__WEBPACK_IMPORTED_MODULE_5__["SugerenciasPageRoutingModule"]],
        declarations: [_sugerencias_page__WEBPACK_IMPORTED_MODULE_6__["SugerenciasPage"]]
      })], SugerenciasPageModule);
      /***/
    },

    /***/
    "./src/app/folder/sugerencias/sugerencias.page.scss":
    /*!**********************************************************!*\
      !*** ./src/app/folder/sugerencias/sugerencias.page.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFolderSugerenciasSugerenciasPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9zdWdlcmVuY2lhcy9zdWdlcmVuY2lhcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/folder/sugerencias/sugerencias.page.ts":
    /*!********************************************************!*\
      !*** ./src/app/folder/sugerencias/sugerencias.page.ts ***!
      \********************************************************/

    /*! exports provided: SugerenciasPage */

    /***/
    function srcAppFolderSugerenciasSugerenciasPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SugerenciasPage", function () {
        return SugerenciasPage;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_models_sugerenicas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/models/sugerenicas */
      "./src/app/models/sugerenicas.ts");
      /* harmony import */


      var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angularfire2/storage */
      "./node_modules/angularfire2/storage/index.js");
      /* harmony import */


      var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var src_app_services_sugerencia_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/sugerencia.service */
      "./src/app/services/sugerencia.service.ts");

      var SugerenciasPage = /*#__PURE__*/function () {
        function SugerenciasPage(angularFireStorage, router, alertCtrt, loadingController, sugerenciaService) {
          _classCallCheck(this, SugerenciasPage);

          this.angularFireStorage = angularFireStorage;
          this.router = router;
          this.alertCtrt = alertCtrt;
          this.loadingController = loadingController;
          this.sugerenciaService = sugerenciaService;
          this.sugerencia = new src_app_models_sugerenicas__WEBPACK_IMPORTED_MODULE_4__["Sugerencias"]();
        }

        _createClass(SugerenciasPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "enviarSugerencia",
          value: function enviarSugerencia(form) {
            var _this = this;

            this.sugerencia.Titulo = form.value.titulo;
            this.sugerencia.Detalle = form.value.descripcion;
            this.sugerencia.Visibilidad = true;
            this.sugerencia.Usuario = localStorage.getItem('userId');
            this.sugerencia.Telefono = localStorage.getItem('Telefono');
            this.sugerenciaService.addSugerencias(this.sugerencia).then(function (res) {
              _this.failedAlert();
            })["catch"]();
          }
        }, {
          key: "failedAlert",
          value: function failedAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrt.create({
                        cssClass: 'my-custom-class',
                        header: "Gracias por su sugerencia!",
                        //  message: "Su sugerencia la tomaremos en cuenta en una nueva actualización.",
                        buttons: [{
                          text: 'OK',
                          handler: function handler() {
                            _this2.router.navigateByUrl("/perfil");
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return SugerenciasPage;
      }();

      SugerenciasPage.ctorParameters = function () {
        return [{
          type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: src_app_services_sugerencia_service__WEBPACK_IMPORTED_MODULE_6__["SugerenciaService"]
        }];
      };

      SugerenciasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sugerencias',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./sugerencias.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/sugerencias/sugerencias.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./sugerencias.page.scss */
        "./src/app/folder/sugerencias/sugerencias.page.scss"))["default"]]
      })], SugerenciasPage);
      /***/
    },

    /***/
    "./src/app/models/sugerenicas.ts":
    /*!***************************************!*\
      !*** ./src/app/models/sugerenicas.ts ***!
      \***************************************/

    /*! exports provided: Sugerencias */

    /***/
    function srcAppModelsSugerenicasTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Sugerencias", function () {
        return Sugerencias;
      });

      var Sugerencias = function Sugerencias() {
        _classCallCheck(this, Sugerencias);
      };
      /***/

    },

    /***/
    "./src/app/services/sugerencia.service.ts":
    /*!************************************************!*\
      !*** ./src/app/services/sugerencia.service.ts ***!
      \************************************************/

    /*! exports provided: SugerenciaService */

    /***/
    function srcAppServicesSugerenciaServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SugerenciaService", function () {
        return SugerenciaService;
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


      var SugerenciaService = /*#__PURE__*/function () {
        function SugerenciaService(firestore) {
          _classCallCheck(this, SugerenciaService);

          this.firestore = firestore;
          this.sugerenciasCollection = firestore.collection('Sugerencias');
          this.sugerencias = this.sugerenciasCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          }));
        }

        _createClass(SugerenciaService, [{
          key: "getSugerencias",
          value: function getSugerencias() {
            return this.sugerencias;
          }
        }, {
          key: "getSugerencia",
          value: function getSugerencia(id) {
            return this.sugerenciasCollection.doc(id).valueChanges();
          }
        }, {
          key: "addSugerencias",
          value: function addSugerencias(Sugerencias) {
            return this.sugerenciasCollection.add(Object.assign({}, Sugerencias));
          }
        }, {
          key: "updateSugerencias",
          value: function updateSugerencias(id, Sugerencias) {
            return this.sugerenciasCollection.doc(id).update(Object.assign({}, Sugerencias));
          }
        }, {
          key: "removeSugerencias",
          value: function removeSugerencias(id) {
            return this.sugerenciasCollection.doc(id)["delete"]();
          }
        }]);

        return SugerenciaService;
      }();

      SugerenciaService.ctorParameters = function () {
        return [{
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      SugerenciaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SugerenciaService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=folder-sugerencias-sugerencias-module-es5.js.map