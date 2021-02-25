(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-adopcion-crear-adopcion-crear-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/adopcion-crear/adopcion-crear.page.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/adopcion-crear/adopcion-crear.page.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFolderAdopcionCrearAdopcionCrearPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\r\n  <ion-toolbar>\r\n\r\n    <ion-segment color=\"tertiary\" value=\"adopcion\" >\r\n\r\n\r\n      <ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\r\n        <ion-icon name=\"newspaper-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Publicaciones</ion-label>\r\n      </ion-segment-button>\r\n      \r\n      <ion-segment-button value=\"cursos\" [routerLink]=\"['/cursos']\" routerDirection=\"root\">\r\n        <ion-icon name=\"library-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 14px;\">Cursos</ion-label>\r\n      </ion-segment-button>\r\n    \r\n    \r\n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-icon name=\"person-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\r\n      </ion-segment-button>\r\n\r\n      <ion-segment-button value=\"adopcion\" [routerLink]=\"['/adopcion']\" routerDirection=\"root\">\r\n        <ion-icon name=\"paw-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Adopcion</ion-label>\r\n      </ion-segment-button>\r\n\r\n    </ion-segment>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n<ion-content>\r\n\r\n<form #form=\"ngForm\" (ngSubmit)=\"crearAdopcion(form)\">\r\n      <ion-list>   \r\n        \r\n        <ion-card style=\"margin-top:15px\">\r\n          <ion-item>\r\n            <ion-label>Título </ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n          \r\n            <ion-input required placeholder=\"Ingrese el título\" name=\"titulo\" type='text' ngModel required></ion-input>\r\n          </ion-item>\r\n\r\n        </ion-card>\r\n\r\n\r\n      <ion-card style=\"margin-top:15px\">\r\n        <ion-item>\r\n          <ion-label>Descripción </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-textarea required placeholder=\"Ingrese la descripción\" name=\"descripcion\" type='text' ngModel required></ion-textarea>\r\n        </ion-item>\r\n\r\n\r\n\r\n      </ion-card>\r\n\r\n    <ion-card style=\"margin-top:15px\">\r\n      <ion-item>\r\n\r\n        <ion-item>\r\n          <ion-icon name=\"image-outline\"></ion-icon><ion-text color=\"\" style=\"margin-left: 7.5px;\">Seleccionar foto</ion-text>\r\n        \r\n          <ion-input type='file' accept=\"image/*\" id=\"myFileInput\" name=\"foto1\" (change)=\"readURL1($event);\" class=\"fileInput\" ngModel required></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-icon name=\"images-outline\"></ion-icon><ion-text color=\"\" style=\"margin-left: 7.5px;\">Añadir otra foto</ion-text>\r\n        \r\n          <ion-input type='file' accept=\"image/*\" id=\"myFileInput\" name=\"foto2\" (change)=\"readURL2($event);\" class=\"fileInput\" ngModel required></ion-input>\r\n        </ion-item>\r\n\r\n\r\n\r\n      </ion-item>\r\n      \r\n\r\n    </ion-card>\r\n    \r\n    <ion-card style=\"margin-top:15px\" *ngIf='image!=null'>\r\n\r\n      <ion-item>\r\n\r\n        <ion-img id=\"blah\" [src]=\"image\" alt=\"your image\" style=\"margin-top:5px;margin-bottom: 5px;height: 250px;width: 250px;\"></ion-img>\r\n        <ion-img id=\"blah\" *ngIf='image1!=null' [src]=\"image1\" alt=\"your image\" style=\"margin-left: 5px;margin-top:5px;margin-bottom: 5px;height: 250px;width: 250px;\"></ion-img>\r\n      </ion-item>\r\n      \r\n\r\n    </ion-card>\r\n\r\n    <ion-card style=\"margin-top:15px\">\r\n      <ion-item>\r\n        <ion-label>Especie: </ion-label>\r\n        <ion-select required  name='tipo' ngModel>\r\n         \r\n                <ion-select-option value=\"P\">Perrito</ion-select-option>\r\n                <ion-select-option value=\"G\">Gatito</ion-select-option>\r\n                <ion-select-option value=\"P\">Ave</ion-select-option>\r\n                <ion-select-option value=\"O\">Otro</ion-select-option>\r\n        \r\n        </ion-select>\r\n\r\n      </ion-item>\r\n      \r\n    </ion-card>\r\n\r\n\r\n  </ion-list>\r\n  \r\n\r\n    <ion-button  style=\"width: 150px;margin:auto;margin-bottom: 7.5px;\" type=\"submit\"  [disabled]=\"form.invalid\" expand=\"block\">\r\n      Guardar\r\n    </ion-button>\r\n  </form>\r\n\r\n</ion-content>\r\n<style>\r\n#myFileInput{\r\n  position: absolute;\r\n  opacity: 0;\r\n}\r\n</style>";
      /***/
    },

    /***/
    "./src/app/folder/adopcion-crear/adopcion-crear-routing.module.ts":
    /*!************************************************************************!*\
      !*** ./src/app/folder/adopcion-crear/adopcion-crear-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: AdopcionCrearPageRoutingModule */

    /***/
    function srcAppFolderAdopcionCrearAdopcionCrearRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdopcionCrearPageRoutingModule", function () {
        return AdopcionCrearPageRoutingModule;
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


      var _adopcion_crear_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./adopcion-crear.page */
      "./src/app/folder/adopcion-crear/adopcion-crear.page.ts");

      var routes = [{
        path: '',
        component: _adopcion_crear_page__WEBPACK_IMPORTED_MODULE_3__["AdopcionCrearPage"]
      }];

      var AdopcionCrearPageRoutingModule = function AdopcionCrearPageRoutingModule() {
        _classCallCheck(this, AdopcionCrearPageRoutingModule);
      };

      AdopcionCrearPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AdopcionCrearPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/folder/adopcion-crear/adopcion-crear.module.ts":
    /*!****************************************************************!*\
      !*** ./src/app/folder/adopcion-crear/adopcion-crear.module.ts ***!
      \****************************************************************/

    /*! exports provided: AdopcionCrearPageModule */

    /***/
    function srcAppFolderAdopcionCrearAdopcionCrearModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdopcionCrearPageModule", function () {
        return AdopcionCrearPageModule;
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


      var _adopcion_crear_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./adopcion-crear-routing.module */
      "./src/app/folder/adopcion-crear/adopcion-crear-routing.module.ts");
      /* harmony import */


      var _adopcion_crear_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./adopcion-crear.page */
      "./src/app/folder/adopcion-crear/adopcion-crear.page.ts");

      var AdopcionCrearPageModule = function AdopcionCrearPageModule() {
        _classCallCheck(this, AdopcionCrearPageModule);
      };

      AdopcionCrearPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _adopcion_crear_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdopcionCrearPageRoutingModule"]],
        declarations: [_adopcion_crear_page__WEBPACK_IMPORTED_MODULE_6__["AdopcionCrearPage"]]
      })], AdopcionCrearPageModule);
      /***/
    },

    /***/
    "./src/app/folder/adopcion-crear/adopcion-crear.page.scss":
    /*!****************************************************************!*\
      !*** ./src/app/folder/adopcion-crear/adopcion-crear.page.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFolderAdopcionCrearAdopcionCrearPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9hZG9wY2lvbi1jcmVhci9hZG9wY2lvbi1jcmVhci5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/folder/adopcion-crear/adopcion-crear.page.ts":
    /*!**************************************************************!*\
      !*** ./src/app/folder/adopcion-crear/adopcion-crear.page.ts ***!
      \**************************************************************/

    /*! exports provided: AdopcionCrearPage */

    /***/
    function srcAppFolderAdopcionCrearAdopcionCrearPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdopcionCrearPage", function () {
        return AdopcionCrearPage;
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


      var angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angularfire2/storage */
      "./node_modules/angularfire2/storage/index.js");
      /* harmony import */


      var angularfire2_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var src_app_models_adopcion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/models/adopcion */
      "./src/app/models/adopcion.ts");
      /* harmony import */


      var src_app_services_adopcion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/adopcion.service */
      "./src/app/services/adopcion.service.ts");

      var AdopcionCrearPage = /*#__PURE__*/function () {
        function AdopcionCrearPage(angularFireStorage, router, adopcionService, alertCtrt, activateRoute, loadingController) {
          _classCallCheck(this, AdopcionCrearPage);

          this.angularFireStorage = angularFireStorage;
          this.router = router;
          this.adopcionService = adopcionService;
          this.alertCtrt = alertCtrt;
          this.activateRoute = activateRoute;
          this.loadingController = loadingController;
          this.adopcion = new src_app_models_adopcion__WEBPACK_IMPORTED_MODULE_5__["Adopcion"]();
        }

        _createClass(AdopcionCrearPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "readURL1",
          value: function readURL1(event) {
            var _this = this;

            if (event.target.files && event.target.files[0]) {
              this.file1 = event.target.files[0];
              var reader = new FileReader();

              reader.onload = function (e) {
                return _this.imageSrc = reader.result;
              };

              reader.readAsDataURL(this.file1);
              this.guardarArchivo1();
            }
          }
        }, {
          key: "guardarArchivo1",
          value: function guardarArchivo1() {
            var _this2 = this;

            var storageRef = this.angularFireStorage.storage.ref();
            storageRef.child(this.file1.name).put(this.file1).then(function (data) {
              data.ref.getDownloadURL().then(function (downloadURL) {
                _this2.adopcion.Foto1 = downloadURL;
                _this2.image = downloadURL;
              })["catch"](function (err) {
                _this2.loading.dismiss();

                console.log('error');
              });
            });
          }
        }, {
          key: "readURL2",
          value: function readURL2(event) {
            var _this3 = this;

            if (event.target.files && event.target.files[0]) {
              this.file2 = event.target.files[0];
              var reader = new FileReader();

              reader.onload = function (e) {
                return _this3.imageSrc2 = reader.result;
              };

              reader.readAsDataURL(this.file2);
              this.guardarArchivo2();
            }
          }
        }, {
          key: "guardarArchivo2",
          value: function guardarArchivo2() {
            var _this4 = this;

            var storageRef = this.angularFireStorage.storage.ref();
            storageRef.child(this.file2.name).put(this.file2).then(function (data) {
              data.ref.getDownloadURL().then(function (downloadURL) {
                _this4.adopcion.Foto2 = downloadURL;
                _this4.image1 = downloadURL;
              })["catch"](function (err) {
                _this4.loading.dismiss();

                console.log('error');
              });
            });
          }
        }, {
          key: "crearAdopcion",
          value: function crearAdopcion(form) {
            this.presentLoading("Espere por favor...");
            var fechaActual = new Date();
            this.adopcion.Titulo = form.value.titulo;
            this.adopcion.Descripcion = form.value.descripcion;
            this.adopcion.Usuario = localStorage.getItem('userId');
            this.adopcion.Fecha = fechaActual.toString();
            this.adopcion.Visitas = 0;
            this.adopcion.Tipo = form.value.tipo;
            this.registroCompleto();
          }
        }, {
          key: "guardarArchivo",
          value: function guardarArchivo() {}
        }, {
          key: "registroCompleto",
          value: function registroCompleto() {
            var _this5 = this;

            this.adopcionService.addAdopcion(this.adopcion).then(function (auth) {
              _this5.loading.dismiss();

              _this5.router.navigate(["/adopcion"]);
            })["catch"](function (error) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        this.loading.dismiss();
                        this.failedAlert("Algo salió mal, inténtelo de nuevo");

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "presentLoading",
          value: function presentLoading(mensaje) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: mensaje
                      });

                    case 2:
                      this.loading = _context2.sent;
                      return _context2.abrupt("return", this.loading.present());

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "failedAlert",
          value: function failedAlert(text) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertCtrt.create({
                        cssClass: 'my-custom-class',
                        header: text,
                        buttons: [{
                          text: 'OK',
                          handler: function handler() {}
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return AdopcionCrearPage;
      }();

      AdopcionCrearPage.ctorParameters = function () {
        return [{
          type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_adopcion_service__WEBPACK_IMPORTED_MODULE_6__["AdopcionService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }];
      };

      AdopcionCrearPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adopcion-crear',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./adopcion-crear.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/adopcion-crear/adopcion-crear.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./adopcion-crear.page.scss */
        "./src/app/folder/adopcion-crear/adopcion-crear.page.scss"))["default"]]
      })], AdopcionCrearPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=folder-adopcion-crear-adopcion-crear-module-es5.js.map