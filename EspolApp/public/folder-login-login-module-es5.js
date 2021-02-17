(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-login-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/login/login.page.html":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/login/login.page.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFolderLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \r\n\r\n<ion-content>\r\n<ion-card style=\"margin-top:35px\">\r\n    <ion-list>\r\n<<<<<<< HEAD\r\n    <ion-img src=\"../../assets/logoTasky.png\" alt=\"hola\" style=\"width: 100%;height: 285px;\"></ion-img>\r\n=======\r\n    <ion-img src=\"../../assets/logo.png\" alt=\"hola\"></ion-img>\r\n>>>>>>> e016a75059c3a37f5930b471973a0e55f04701ff\r\n    </ion-list>\r\n    \r\n    <form #form=\"ngForm\" (ngSubmit)=\"loginUser(form)\">\r\n      <ion-list>   \r\n        \r\n        <ion-item>\r\n          <ion-label><ion-icon name=\"mail-outline\"></ion-icon><ion-text color=\"danger\"></ion-text></ion-label>\r\n          <ion-input required placeholder=\"Correo\" name=\"email\" type='email' ngModel required></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label><ion-icon name=\"key-outline\"></ion-icon> <ion-text color=\"danger\"></ion-text></ion-label>\r\n          <ion-input placeholder=\"Contraseña\" name=\"password\" type='password' ngModel required></ion-input>\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n      <div class=\"ion-padding\" align=\"center\">\r\n        <ion-button  style=\"background-color:aquamarine;width: 150px;\" shape=\"round\" type=\"submit\"  [disabled]=\"form.invalid\" expand=\"block\">\r\n          Ingresar\r\n        </ion-button>\r\n        \r\n      </div>\r\n\r\n      <div align=\"center\" style=\"margin-top:21px\">\r\n        <p (click)=\"presentResetPassword()\" style=\"font-size:15px\">Restablecer contraseña</p>\r\n        <p style=\"font-size:15px\" routerLink=\"/registro\" routerDirection=\"root\">Crear cuenta</p>\r\n\r\n      </div>\r\n\r\n    </form>\r\n  </ion-card>\r\n</ion-content> -->\r\n\r\n<!-- <ion-header>\r\n  <ion-toolbar >\r\n    <ion-title>Login</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>  -->\r\n\r\n<ion-content>\r\n<ion-card style=\"margin-top:55px\">\r\n    \r\n    <ion-img src=\"../../assets/logoTasky.png\" style=\"width: 100%;height: 285px;margin-top:7.5px\" alt=\"hola\"></ion-img>\r\n    \r\n    \r\n    <form #form=\"ngForm\" (ngSubmit)=\"loginUser(form)\">\r\n      <ion-list>   \r\n        \r\n        <ion-item>\r\n          <ion-label><ion-icon name=\"mail-outline\"></ion-icon><ion-text color=\"danger\"></ion-text></ion-label>\r\n          <ion-input placeholder=\"Correo\" name=\"email\" type='email' ngModel required></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label><ion-icon name=\"key-outline\"></ion-icon> <ion-text color=\"danger\"></ion-text></ion-label>\r\n          <ion-input placeholder=\"Contraseña\" name=\"password\" type='password' ngModel required></ion-input>\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n      <div class=\"ion-padding\" align=\"center\">\r\n        <ion-button  style=\"width: 150px;\" shape=\"round\" type=\"submit\"  [disabled]=\"form.invalid\" expand=\"block\">\r\n          Ingresar\r\n        </ion-button>\r\n        \r\n      </div>\r\n\r\n      <div align=\"center\" style=\"margin-top:21px\">\r\n        <p (click)=\"presentResetPassword()\" style=\"font-size:15px\">Restablecer contraseña</p>\r\n        <p style=\"font-size:15px\" routerLink=\"/registro\" routerDirection=\"root\">Crear cuenta</p>\r\n\r\n      </div>\r\n\r\n    </form>\r\n  </ion-card>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/folder/login/login-routing.module.ts":
    /*!******************************************************!*\
      !*** ./src/app/folder/login/login-routing.module.ts ***!
      \******************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppFolderLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/folder/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/folder/login/login.module.ts":
    /*!**********************************************!*\
      !*** ./src/app/folder/login/login.module.ts ***!
      \**********************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppFolderLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/folder/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/folder/login/login.page.ts");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/folder/login/login.page.scss":
    /*!**********************************************!*\
      !*** ./src/app/folder/login/login.page.scss ***!
      \**********************************************/

    /*! exports provided: default */

    /***/
    function srcAppFolderLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9sb2dpbi9sb2dpbi5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/folder/login/login.page.ts":
    /*!********************************************!*\
      !*** ./src/app/folder/login/login.page.ts ***!
      \********************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppFolderLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");
      /* harmony import */


      var src_app_models_usuarios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/models/usuarios */
      "./src/app/models/usuarios.ts");
      /* harmony import */


      var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/usuario.service */
      "./src/app/services/usuario.service.ts");
      /* harmony import */


      var src_app_services_mensaje_error_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/mensaje-error.service */
      "./src/app/services/mensaje-error.service.ts");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(authService, router, usuarioService, alertCtrt, firestore, mensajeErrorService) {
          _classCallCheck(this, LoginPage);

          this.authService = authService;
          this.router = router;
          this.usuarioService = usuarioService;
          this.alertCtrt = alertCtrt;
          this.firestore = firestore;
          this.mensajeErrorService = mensajeErrorService;
          this.user = new src_app_models_usuarios__WEBPACK_IMPORTED_MODULE_6__["Usuarios"]();
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "loginUser",
          value: function loginUser(form) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.authService.loginUser(form.value.email, form.value.password).then(function (res) {
                        localStorage.setItem('userId', res.user.uid);
                        localStorage.setItem('Fondo', '#FBC8B5');

                        _this.usuarioService.getUsuario(res.user.uid).subscribe(function (res) {
                          _this.user = res;
                          localStorage.setItem('email', res.Correo);
                          localStorage.setItem('Estado', res.Estado);
                          localStorage.setItem('Rol', res.Rol);
                          localStorage.setItem('Telefono', res.Telefono);

                          if (localStorage.getItem('Estado') == "P") {
                            _this.router.navigateByUrl('/pendiente');
                          } else if (localStorage.getItem('Estado') == "A") {
                            _this.router.navigateByUrl('/cursos');
                          }
                        });

                        ; //this.router.navigateByUrl("/home")
                      }, function (error) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var mensaje, presentarMensaje, alert;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  mensaje = error.code.split('/')[1];
                                  presentarMensaje = this.mensajeErrorService.AuthErrorCodeSpanish(mensaje);
                                  _context.next = 4;
                                  return this.alertCtrt.create({
                                    message: presentarMensaje,
                                    buttons: [{
                                      text: 'ok',
                                      role: 'cancel'
                                    }]
                                  });

                                case 4:
                                  alert = _context.sent;
                                  _context.next = 7;
                                  return alert.present();

                                case 7:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      });

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "redireccionar",
          value: function redireccionar(email) {
            console.log(this.firestore.collection("Estudiantes", function (ref) {
              return ref.where("email", "==", email);
            }));
            console.log(this.firestore.collection("Profesores", function (ref) {
              return ref.where("email", "==", email);
            }));
          }
        }, {
          key: "goToReset",
          value: function goToReset(email) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.authService.resetPassword(email).then(function (res) {
                        _this2.failedAlert("Se ha enviado un enlace al correo para restaurar su contraseña: " + email);
                      }, function (error) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          var mensaje, presentarMensaje;
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  mensaje = error.code.split('/')[1];
                                  presentarMensaje = this.mensajeErrorService.AuthErrorCodeSpanish(mensaje);
                                  this.failedAlert(presentarMensaje);

                                case 3:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3, this);
                        }));
                      });

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "presentResetPassword",
          value: function presentResetPassword() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertCtrt.create({
                        cssClass: 'my-custom-class',
                        header: 'Restaurar contraseña',
                        message: 'Ingrese su email:',
                        inputs: [{
                          name: 'email',
                          placeholder: 'email',
                          type: 'email'
                        }],
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Ok',
                          handler: function handler(data) {
                            if (data.email != "") {
                              _this3.goToReset(data.email);
                            } else if (data.email == "") {
                              _this3.failedAlert("El campo email es requerido");
                            }
                          }
                        }]
                      });

                    case 2:
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "failedAlert",
          value: function failedAlert(text) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var alert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.alertCtrt.create({
                        cssClass: 'my-custom-class',
                        header: text,
                        buttons: [{
                          text: 'OK',
                          handler: function handler() {//this.presentResetPassword();
                          }
                        }]
                      });

                    case 2:
                      alert = _context6.sent;
                      _context6.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_7__["UsuarioService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
        }, {
          type: src_app_services_mensaje_error_service__WEBPACK_IMPORTED_MODULE_8__["MensajeErrorService"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/folder/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=folder-login-login-module-es5.js.map