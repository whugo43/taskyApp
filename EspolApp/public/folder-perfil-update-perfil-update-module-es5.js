(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-perfil-update-perfil-update-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/perfil-update/perfil-update.page.html":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/perfil-update/perfil-update.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFolderPerfilUpdatePerfilUpdatePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\r\n  <ion-toolbar>\r\n\r\n    <ion-segment color=\"tertiary\" value=\"perfil\" >\r\n\r\n      <!-- <ion-segment-button *ngIf=\"Rol==Ayudante\" value=\"mis-ayudantias\" [routerLink]=\"['/mis-ayudantias']\" routerDirection=\"root\">\r\n        <ion-icon name=\"file-tray-stacked-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Mis Cursos</ion-label>\r\n      </ion-segment-button> -->\r\n\r\n      <ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\r\n        <ion-icon name=\"newspaper-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Publicaciones</ion-label>\r\n      </ion-segment-button>\r\n      \r\n      <ion-segment-button value=\"cursos\" [routerLink]=\"['/cursos']\" routerDirection=\"root\">\r\n        <ion-icon name=\"library-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 14px;\">Cursos</ion-label>\r\n      </ion-segment-button>\r\n    \r\n    \r\n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-icon name=\"person-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\r\n      </ion-segment-button>\r\n\r\n      <ion-segment-button value=\"adopcion\" [routerLink]=\"['/adopcion']\" routerDirection=\"root\">\r\n        <ion-icon name=\"paw-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Adopcion</ion-label>\r\n      </ion-segment-button>\r\n\r\n      <!-- <ion-segment-button value=\"citas\" *ngIf = \"user.Citas\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-icon name=\"flame-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Citas</ion-label>\r\n      </ion-segment-button> -->\r\n\r\n  \r\n\r\n  \r\n\r\n    </ion-segment>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <form #form=\"ngForm\" (ngSubmit)=\"UpdateUser(form)\">\r\n    <ion-list>   \r\n        \r\n  \r\n\r\n \r\n      \r\n\r\n\r\n\r\n      <ion-item>\r\n        <ion-label><ion-icon name=\"logo-whatsapp\"></ion-icon> <ion-text color=\"danger\"></ion-text></ion-label>\r\n        <ion-input value=\"{{user.Telefono}}\" name=\"telefono\" required type='text' ngModel></ion-input>\r\n      </ion-item>\r\n\r\n      \r\n      \r\n      <ion-item>\r\n\r\n                  <ion-img id=\"blah\" [src]=\"image\" alt=\"your image\" style=\"margin-top:7.5px;margin-bottom: 7.5px;height: 350px;width: 350px;\"></ion-img>\r\n         \r\n        </ion-item>\r\n\r\n\r\n      <!-- <ion-item>\r\n        <ion-label><ion-icon name=\"image-outline\"></ion-icon><ion-text style='margin-left: 7.5px;'>Cambiar foto</ion-text></ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-input type='file' accept=\"image/*\" id=\"perfilFoto\" name=\"foto\" (change)=\"readURL($event);\" class=\"fileInput\" ngModel></ion-input>\r\n      </ion-item> -->\r\n\r\n      <ion-item>\r\n        <ion-label><ion-icon name=\"cloud-upload-outline\"></ion-icon>  <ion-text style='margin-left:7.5px'>Cambiar foto</ion-text></ion-label>\r\n        <ion-input id=\"myFileInput\" (change)=\"readURL($event);\" accept=\"image/*\" placeholder=\"archivo\" name=\"archivo\" type='file' ngModel value=\"{{file}}\"></ion-input>\r\n      \r\n     \r\n      </ion-item>\r\n\r\n\r\n      \r\n\r\n\r\n    </ion-list> \r\n\r\n    <div class=\"ion-padding\" align=\"center\">\r\n      <ion-button type=\"submit\"  [disabled]=\"form.invalid\" expand=\"block\" style=\"width: 150px;\">\r\n        Actualizar\r\n      </ion-button>\r\n      \r\n    </div>\r\n  </form>\r\n\r\n</ion-content>\r\n<style>\r\n  #myFileInput{\r\n    position: absolute;\r\n    opacity: 0;\r\n  }\r\n</style>";
      /***/
    },

    /***/
    "./src/app/folder/perfil-update/perfil-update-routing.module.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/folder/perfil-update/perfil-update-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: PerfilUpdatePageRoutingModule */

    /***/
    function srcAppFolderPerfilUpdatePerfilUpdateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfilUpdatePageRoutingModule", function () {
        return PerfilUpdatePageRoutingModule;
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


      var _perfil_update_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./perfil-update.page */
      "./src/app/folder/perfil-update/perfil-update.page.ts");

      var routes = [{
        path: '',
        component: _perfil_update_page__WEBPACK_IMPORTED_MODULE_3__["PerfilUpdatePage"]
      }];

      var PerfilUpdatePageRoutingModule = function PerfilUpdatePageRoutingModule() {
        _classCallCheck(this, PerfilUpdatePageRoutingModule);
      };

      PerfilUpdatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PerfilUpdatePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/folder/perfil-update/perfil-update.module.ts":
    /*!**************************************************************!*\
      !*** ./src/app/folder/perfil-update/perfil-update.module.ts ***!
      \**************************************************************/

    /*! exports provided: PerfilUpdatePageModule */

    /***/
    function srcAppFolderPerfilUpdatePerfilUpdateModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfilUpdatePageModule", function () {
        return PerfilUpdatePageModule;
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


      var _perfil_update_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./perfil-update-routing.module */
      "./src/app/folder/perfil-update/perfil-update-routing.module.ts");
      /* harmony import */


      var _perfil_update_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./perfil-update.page */
      "./src/app/folder/perfil-update/perfil-update.page.ts");

      var PerfilUpdatePageModule = function PerfilUpdatePageModule() {
        _classCallCheck(this, PerfilUpdatePageModule);
      };

      PerfilUpdatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _perfil_update_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilUpdatePageRoutingModule"]],
        declarations: [_perfil_update_page__WEBPACK_IMPORTED_MODULE_6__["PerfilUpdatePage"]]
      })], PerfilUpdatePageModule);
      /***/
    },

    /***/
    "./src/app/folder/perfil-update/perfil-update.page.scss":
    /*!**************************************************************!*\
      !*** ./src/app/folder/perfil-update/perfil-update.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFolderPerfilUpdatePerfilUpdatePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9wZXJmaWwtdXBkYXRlL3BlcmZpbC11cGRhdGUucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/folder/perfil-update/perfil-update.page.ts":
    /*!************************************************************!*\
      !*** ./src/app/folder/perfil-update/perfil-update.page.ts ***!
      \************************************************************/

    /*! exports provided: PerfilUpdatePage */

    /***/
    function srcAppFolderPerfilUpdatePerfilUpdatePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfilUpdatePage", function () {
        return PerfilUpdatePage;
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


      var src_app_models_usuarios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/usuarios */
      "./src/app/models/usuarios.ts");
      /* harmony import */


      var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/usuario.service */
      "./src/app/services/usuario.service.ts");
      /* harmony import */


      var angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angularfire2/storage */
      "./node_modules/angularfire2/storage/index.js");
      /* harmony import */


      var angularfire2_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_mensaje_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/mensaje-error.service */
      "./src/app/services/mensaje-error.service.ts");

      var PerfilUpdatePage = /*#__PURE__*/function () {
        function PerfilUpdatePage(usuarioService, angularFireStorage, loadingController, router, alertCtrt, mensajeErrorService) {
          _classCallCheck(this, PerfilUpdatePage);

          this.usuarioService = usuarioService;
          this.angularFireStorage = angularFireStorage;
          this.loadingController = loadingController;
          this.router = router;
          this.alertCtrt = alertCtrt;
          this.mensajeErrorService = mensajeErrorService;
          this.user = new src_app_models_usuarios__WEBPACK_IMPORTED_MODULE_2__["Usuarios"]();
        }

        _createClass(PerfilUpdatePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(function (res) {
              _this.user = res;
              _this.image = res.FotoPerfil;
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this4 = this;

              var userId;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.user.Telefono = telefono;
                      this.user.FotoPerfil = downloadURL;
                      userId = localStorage.getItem('userId');
                      this.usuarioService.updateUsuario(userId, this.user).then(function (auth) {
                        _this4.loading.dismiss();

                        _this4.router.navigateByUrl("/perfil");
                      })["catch"](function (error) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                          var mensaje, presentarMensaje;
                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  this.loading.dismiss();
                                  mensaje = error.code.split('/')[1];
                                  presentarMensaje = this.mensajeErrorService.AuthErrorCodeSpanish(mensaje);
                                  this.failedAlert(presentarMensaje);

                                case 4:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4, this);
                        }));
                      });

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return PerfilUpdatePage;
      }();

      PerfilUpdatePage.ctorParameters = function () {
        return [{
          type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]
        }, {
          type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: src_app_services_mensaje_error_service__WEBPACK_IMPORTED_MODULE_7__["MensajeErrorService"]
        }];
      };

      PerfilUpdatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-perfil-update',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./perfil-update.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/perfil-update/perfil-update.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./perfil-update.page.scss */
        "./src/app/folder/perfil-update/perfil-update.page.scss"))["default"]]
      })], PerfilUpdatePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=folder-perfil-update-perfil-update-module-es5.js.map