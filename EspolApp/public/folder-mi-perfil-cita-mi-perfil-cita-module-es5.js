(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-mi-perfil-cita-mi-perfil-cita-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/mi-perfil-cita/mi-perfil-cita.page.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/mi-perfil-cita/mi-perfil-cita.page.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFolderMiPerfilCitaMiPerfilCitaPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar>\n\n    <ion-segment color=\"tertiary\" value=\"perfil\" >\n\n      <!-- <ion-segment-button *ngIf=\"Rol==Ayudante\" value=\"publicaciones\" [routerLink]=\"['/mis-ayudantias']\" routerDirection=\"root\">\n        <ion-icon name=\"file-tray-stacked-outline\" size=\"large\"></ion-icon> \n        <ion-label style=\"font-size: 14;\">Mis Cursos</ion-label>\n      </ion-segment-button> -->\n\n      <ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\n        <ion-icon name=\"newspaper-outline\" size=\"large\"></ion-icon> \n        <ion-label style=\"font-size: 14;\">Publicaciones</ion-label>\n      </ion-segment-button>\n      \n      <ion-segment-button value=\"cursos\" [routerLink]=\"['/cursos']\" routerDirection=\"root\">\n        <ion-icon name=\"library-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 14px;\">Cursos</ion-label>\n      </ion-segment-button>\n    \n    \n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\n        <ion-icon name=\"person-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\n      </ion-segment-button>\n\n      <ion-segment-button value=\"citas\" *ngIf = \"mostrarCita == 'Si'\" [routerLink]=\"['/citas']\" routerDirection=\"root\">\n        <ion-icon name=\"flame-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Biffis</ion-label>\n      </ion-segment-button>\n      \n  \n\n  \n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-segment color=\"tertiary\" value=\"perfil\">\n  \n    <ion-segment-button value=\"buscar\" [routerLink]=\"['/curso-detalle',id, nombreCurso]\" routerDirection=\"root\">\n      <ion-icon name=\"accessibility-outline\" size=\"large\"></ion-icon> <ion-label>Buscar</ion-label>\n    </ion-segment-button>\n    \n    <ion-segment-button value=\"ayudantes\" [routerLink]=\"['/curso-ayudantes',id, nombreCurso]\" routerDirection=\"root\">\n      <ion-icon name=\"chatbubbles-outline\" size=\"large\"></ion-icon> <ion-label>Chats</ion-label>\n    </ion-segment-button>\n\n    <ion-segment-button value=\"perfil\" [routerLink]=\"['/mi-perfil-cita']\" routerDirection=\"root\">\n      <ion-icon name=\"person-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\n    </ion-segment-button>\n\n  </ion-segment>\n  \n  <ion-img class=\"circle-pic\"  src=\"{{user.Foto}}\" ></ion-img>\n\n  <ion-card>\n    <ion-item>\n      <ion-icon name=\"person-outline\" size=\"large\" style=\"margin-right: 8px;\"></ion-icon>\n      <ion-label style=\"font-size: 17px;\">{{user.Nombre}} {{user.Apellido}}</ion-label>\n    </ion-item>\n  \n\n\n\n\n\n\n    <ion-item>\n      <ion-icon routerLink=\"/perfil-update\" name=\"create-outline\" size=\"large\" style=\"margin-right: 8px;\" layout=\"icon-end\" slot=\"end\"></ion-icon>\n\n    </ion-item>\n  \n  </ion-card>\n\n  \n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button routerLink=\"/sugerencias\">\n     <ion-icon name=\"help-circle-outline\" size=\"large\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n<style>\n  .circle-pic {     \n    width: 55%;\n    height: 35%;\n    margin: auto;\n    display: block;\n    margin-bottom: 10px;\n    margin-top: 10px;\n    /* -webkit-border-radius: 50%;\n    border-radius: 50%;\n    border-width: 50px; */\n\n  }\n</style>";
      /***/
    },

    /***/
    "./src/app/folder/mi-perfil-cita/mi-perfil-cita-routing.module.ts":
    /*!************************************************************************!*\
      !*** ./src/app/folder/mi-perfil-cita/mi-perfil-cita-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: MiPerfilCitaPageRoutingModule */

    /***/
    function srcAppFolderMiPerfilCitaMiPerfilCitaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MiPerfilCitaPageRoutingModule", function () {
        return MiPerfilCitaPageRoutingModule;
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


      var _mi_perfil_cita_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mi-perfil-cita.page */
      "./src/app/folder/mi-perfil-cita/mi-perfil-cita.page.ts");

      var routes = [{
        path: '',
        component: _mi_perfil_cita_page__WEBPACK_IMPORTED_MODULE_3__["MiPerfilCitaPage"]
      }];

      var MiPerfilCitaPageRoutingModule = function MiPerfilCitaPageRoutingModule() {
        _classCallCheck(this, MiPerfilCitaPageRoutingModule);
      };

      MiPerfilCitaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MiPerfilCitaPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/folder/mi-perfil-cita/mi-perfil-cita.module.ts":
    /*!****************************************************************!*\
      !*** ./src/app/folder/mi-perfil-cita/mi-perfil-cita.module.ts ***!
      \****************************************************************/

    /*! exports provided: MiPerfilCitaPageModule */

    /***/
    function srcAppFolderMiPerfilCitaMiPerfilCitaModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MiPerfilCitaPageModule", function () {
        return MiPerfilCitaPageModule;
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


      var _mi_perfil_cita_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./mi-perfil-cita-routing.module */
      "./src/app/folder/mi-perfil-cita/mi-perfil-cita-routing.module.ts");
      /* harmony import */


      var _mi_perfil_cita_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./mi-perfil-cita.page */
      "./src/app/folder/mi-perfil-cita/mi-perfil-cita.page.ts");

      var MiPerfilCitaPageModule = function MiPerfilCitaPageModule() {
        _classCallCheck(this, MiPerfilCitaPageModule);
      };

      MiPerfilCitaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mi_perfil_cita_routing_module__WEBPACK_IMPORTED_MODULE_5__["MiPerfilCitaPageRoutingModule"]],
        declarations: [_mi_perfil_cita_page__WEBPACK_IMPORTED_MODULE_6__["MiPerfilCitaPage"]]
      })], MiPerfilCitaPageModule);
      /***/
    },

    /***/
    "./src/app/folder/mi-perfil-cita/mi-perfil-cita.page.scss":
    /*!****************************************************************!*\
      !*** ./src/app/folder/mi-perfil-cita/mi-perfil-cita.page.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFolderMiPerfilCitaMiPerfilCitaPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9taS1wZXJmaWwtY2l0YS9taS1wZXJmaWwtY2l0YS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/folder/mi-perfil-cita/mi-perfil-cita.page.ts":
    /*!**************************************************************!*\
      !*** ./src/app/folder/mi-perfil-cita/mi-perfil-cita.page.ts ***!
      \**************************************************************/

    /*! exports provided: MiPerfilCitaPage */

    /***/
    function srcAppFolderMiPerfilCitaMiPerfilCitaPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MiPerfilCitaPage", function () {
        return MiPerfilCitaPage;
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


      var angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angularfire2/storage */
      "./node_modules/angularfire2/storage/index.js");
      /* harmony import */


      var angularfire2_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_models_citas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/models/citas */
      "./src/app/models/citas.ts");
      /* harmony import */


      var src_app_services_citas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/citas.service */
      "./src/app/services/citas.service.ts");
      /* harmony import */


      var src_app_services_mensaje_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/mensaje-error.service */
      "./src/app/services/mensaje-error.service.ts");

      var MiPerfilCitaPage = /*#__PURE__*/function () {
        function MiPerfilCitaPage(usuarioService, angularFireStorage, loadingController, alertCtrt, mensajeErrorService) {
          _classCallCheck(this, MiPerfilCitaPage);

          this.usuarioService = usuarioService;
          this.angularFireStorage = angularFireStorage;
          this.loadingController = loadingController;
          this.alertCtrt = alertCtrt;
          this.mensajeErrorService = mensajeErrorService;
          this.user = new src_app_models_citas__WEBPACK_IMPORTED_MODULE_4__["Citas"]();
        }

        _createClass(MiPerfilCitaPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.usuarioService.getCita(localStorage.getItem('userId')).subscribe(function (res) {
              _this.user = res;
            });
          }
        }, {
          key: "presentLoading",
          value: function presentLoading(mensaje) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: mensaje
                      });

                    case 2:
                      this.loading = _context.sent;
                      return _context.abrupt("return", this.loading.present());

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "readURL",
          value: function readURL(event) {
            var _this2 = this;

            if (event.target.files && event.target.files[0]) {
              this.file = event.target.files[0];
              var reader = new FileReader();

              reader.onload = function (e) {
                return _this2.image = reader.result;
              };

              reader.readAsDataURL(this.file);
            }
          }
        }, {
          key: "UpdateUser",
          value: function UpdateUser(form) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var telefono;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      // this.presentLoading("Espere por favor...");
                      this.presentLoading("Espere por favor...");
                      telefono = form.value.telefono;

                      if (telefono.length == 10) {
                        telefono = '+593' + telefono.slice(1, telefono.length);
                      } // if(this.file!='null'){
                      //   this.guardarArchivo(telefono);
                      // }
                      // else{


                      this.UpdateUserCompleto(telefono, this.image); // }

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "guardarArchivo",
          value: function guardarArchivo(telefono) {
            var _this3 = this;

            //this.presentLoading("Espere por favor...");
            var storageRef = this.angularFireStorage.storage.ref();
            storageRef.child(this.file.name).put(this.file).then(function (data) {
              data.ref.getDownloadURL().then(function (downloadURL) {
                _this3.UpdateUserCompleto(telefono, downloadURL);
              })["catch"](function (err) {
                _this3.loading.dismiss(), _this3.failedAlert("Error al cargar la foto de perfil, intentelo de nuevo");
              });
            });
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
        }, {
          key: "UpdateUserCompleto",
          value: function UpdateUserCompleto(telefono, downloadURL) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));
          }
        }]);

        return MiPerfilCitaPage;
      }();

      MiPerfilCitaPage.ctorParameters = function () {
        return [{
          type: src_app_services_citas_service__WEBPACK_IMPORTED_MODULE_5__["CitasService"]
        }, {
          type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: src_app_services_mensaje_error_service__WEBPACK_IMPORTED_MODULE_6__["MensajeErrorService"]
        }];
      };

      MiPerfilCitaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mi-perfil-cita',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./mi-perfil-cita.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/mi-perfil-cita/mi-perfil-cita.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./mi-perfil-cita.page.scss */
        "./src/app/folder/mi-perfil-cita/mi-perfil-cita.page.scss"))["default"]]
      })], MiPerfilCitaPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=folder-mi-perfil-cita-mi-perfil-cita-module-es5.js.map