(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-crear-publicacion-todos-crear-publicacion-todos-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/crear-publicacion-todos/crear-publicacion-todos.page.html":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/crear-publicacion-todos/crear-publicacion-todos.page.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFolderCrearPublicacionTodosCrearPublicacionTodosPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\r\n  <ion-toolbar>\r\n\r\n    <ion-segment color=\"tertiary\" value=\"publicaciones\" >\r\n\r\n      <ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\r\n        <ion-icon name=\"newspaper-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Publicaciones</ion-label>\r\n      </ion-segment-button>\r\n      \r\n      <ion-segment-button value=\"cursos\" [routerLink]=\"['/cursos']\" routerDirection=\"root\">\r\n        <ion-icon name=\"library-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 14px;\">Cursos</ion-label>\r\n      </ion-segment-button>\r\n    \r\n    \r\n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-icon name=\"person-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\r\n      </ion-segment-button>\r\n\r\n    </ion-segment>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n<ion-content>\r\n\r\n<form #form=\"ngForm\" (ngSubmit)=\"crearPublicacion(form)\">\r\n      <ion-list>   \r\n        \r\n        <ion-card style=\"margin-top:15px\">\r\n          <ion-item>\r\n            <ion-label>Título </ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n          \r\n            <ion-input required placeholder=\"Ingrese el título\" name=\"titulo\" type='text' ngModel required></ion-input>\r\n          </ion-item>\r\n\r\n        </ion-card>\r\n\r\n\r\n      <ion-card style=\"margin-top:15px\">\r\n        <ion-item>\r\n          <ion-label>Descripción </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-textarea required placeholder=\"Ingrese la descripción\" name=\"descripcion\" type='text' ngModel required></ion-textarea>\r\n        </ion-item>\r\n\r\n\r\n\r\n      </ion-card>\r\n\r\n    <ion-card>\r\n      <ion-item *ngIf=\"rol == 'Ayudante'\">\r\n        <ion-label>Seleccione un curso: </ion-label>\r\n        <ion-select required  name='curso' ngModel>\r\n          <ng-container  *ngFor=\"let ayudante of ayudantias\">\r\n            <ng-container *ngFor=\"let curso of cursos\">\r\n              <ng-container *ngIf=\"(ayudante.Usuario == miId) && (ayudante.Materia == curso.id)\">\r\n                <ion-select-option value=\"{{curso.id}}\">{{curso.Nombre}}</ion-select-option>\r\n              </ng-container>\r\n            </ng-container>\r\n          </ng-container>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n\r\n    </ion-card>\r\n\r\n    \r\n\r\n    <ion-card style=\"margin-top:15px\">\r\n      <ion-item>\r\n        <ion-label><ion-icon name=\"image-outline\"></ion-icon> <ion-text color=\"\" style=\"margin-left: 7.5px;\">Seleccionar foto</ion-text></ion-label>\r\n      \r\n        <ion-input type='file' accept=\"image/*\" id=\"myFileInput\" name=\"foto\" (change)=\"readURL($event);\" class=\"fileInput\" ngModel required></ion-input>\r\n      </ion-item>\r\n\r\n    </ion-card>\r\n\r\n\r\n  </ion-list>\r\n  \r\n\r\n    <ion-button  style=\"width: 150px;margin:auto;\" shtype=\"submit\"  [disabled]=\"form.invalid\" expand=\"block\">\r\n      Guardar\r\n    </ion-button>\r\n  </form>\r\n\r\n</ion-content>\r\n<style>\r\n#myFileInput{\r\n  position: absolute;\r\n  opacity: 0;\r\n}\r\n</style>";
      /***/
    },

    /***/
    "./src/app/folder/crear-publicacion-todos/crear-publicacion-todos-routing.module.ts":
    /*!******************************************************************************************!*\
      !*** ./src/app/folder/crear-publicacion-todos/crear-publicacion-todos-routing.module.ts ***!
      \******************************************************************************************/

    /*! exports provided: CrearPublicacionTodosPageRoutingModule */

    /***/
    function srcAppFolderCrearPublicacionTodosCrearPublicacionTodosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CrearPublicacionTodosPageRoutingModule", function () {
        return CrearPublicacionTodosPageRoutingModule;
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


      var _crear_publicacion_todos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./crear-publicacion-todos.page */
      "./src/app/folder/crear-publicacion-todos/crear-publicacion-todos.page.ts");

      var routes = [{
        path: '',
        component: _crear_publicacion_todos_page__WEBPACK_IMPORTED_MODULE_3__["CrearPublicacionTodosPage"]
      }];

      var CrearPublicacionTodosPageRoutingModule = function CrearPublicacionTodosPageRoutingModule() {
        _classCallCheck(this, CrearPublicacionTodosPageRoutingModule);
      };

      CrearPublicacionTodosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CrearPublicacionTodosPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/folder/crear-publicacion-todos/crear-publicacion-todos.module.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/folder/crear-publicacion-todos/crear-publicacion-todos.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: CrearPublicacionTodosPageModule */

    /***/
    function srcAppFolderCrearPublicacionTodosCrearPublicacionTodosModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CrearPublicacionTodosPageModule", function () {
        return CrearPublicacionTodosPageModule;
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


      var _crear_publicacion_todos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./crear-publicacion-todos-routing.module */
      "./src/app/folder/crear-publicacion-todos/crear-publicacion-todos-routing.module.ts");
      /* harmony import */


      var _crear_publicacion_todos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./crear-publicacion-todos.page */
      "./src/app/folder/crear-publicacion-todos/crear-publicacion-todos.page.ts");

      var CrearPublicacionTodosPageModule = function CrearPublicacionTodosPageModule() {
        _classCallCheck(this, CrearPublicacionTodosPageModule);
      };

      CrearPublicacionTodosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _crear_publicacion_todos_routing_module__WEBPACK_IMPORTED_MODULE_5__["CrearPublicacionTodosPageRoutingModule"]],
        declarations: [_crear_publicacion_todos_page__WEBPACK_IMPORTED_MODULE_6__["CrearPublicacionTodosPage"]]
      })], CrearPublicacionTodosPageModule);
      /***/
    },

    /***/
    "./src/app/folder/crear-publicacion-todos/crear-publicacion-todos.page.scss":
    /*!**********************************************************************************!*\
      !*** ./src/app/folder/crear-publicacion-todos/crear-publicacion-todos.page.scss ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFolderCrearPublicacionTodosCrearPublicacionTodosPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9jcmVhci1wdWJsaWNhY2lvbi10b2Rvcy9jcmVhci1wdWJsaWNhY2lvbi10b2Rvcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/folder/crear-publicacion-todos/crear-publicacion-todos.page.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/folder/crear-publicacion-todos/crear-publicacion-todos.page.ts ***!
      \********************************************************************************/

    /*! exports provided: CrearPublicacionTodosPage */

    /***/
    function srcAppFolderCrearPublicacionTodosCrearPublicacionTodosPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CrearPublicacionTodosPage", function () {
        return CrearPublicacionTodosPage;
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


      var src_app_models_usuarios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/models/usuarios */
      "./src/app/models/usuarios.ts");
      /* harmony import */


      var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/usuario.service */
      "./src/app/services/usuario.service.ts");
      /* harmony import */


      var src_app_models_publicaciones_materia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/models/publicaciones-materia */
      "./src/app/models/publicaciones-materia.ts");
      /* harmony import */


      var src_app_services_publicaciones_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/publicaciones.service */
      "./src/app/services/publicaciones.service.ts");
      /* harmony import */


      var angularfire2_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angularfire2/storage */
      "./node_modules/angularfire2/storage/index.js");
      /* harmony import */


      var angularfire2_storage__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var src_app_services_ayudantes_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/ayudantes.service */
      "./src/app/services/ayudantes.service.ts");
      /* harmony import */


      var src_app_services_cursos_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/cursos.service */
      "./src/app/services/cursos.service.ts");

      var CrearPublicacionTodosPage = /*#__PURE__*/function () {
        function CrearPublicacionTodosPage(ayudanteService, cursosService, angularFireStorage, router, usuarioService, alertCtrt, activateRoute, loadingController, publicacionesService) {
          _classCallCheck(this, CrearPublicacionTodosPage);

          this.ayudanteService = ayudanteService;
          this.cursosService = cursosService;
          this.angularFireStorage = angularFireStorage;
          this.router = router;
          this.usuarioService = usuarioService;
          this.alertCtrt = alertCtrt;
          this.activateRoute = activateRoute;
          this.loadingController = loadingController;
          this.publicacionesService = publicacionesService;
          this.publicacion = new src_app_models_publicaciones_materia__WEBPACK_IMPORTED_MODULE_6__["PublicacionesMateria"]();
          this.usuario = new src_app_models_usuarios__WEBPACK_IMPORTED_MODULE_4__["Usuarios"]();
          this.ayudantias = [];
          this.cursos = [];
        }

        _createClass(CrearPublicacionTodosPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.rol = localStorage.getItem('Rol');
            this.ayudanteService.getAyudantes().subscribe(function (res) {
              return _this.ayudantias = res;
            });
            this.cursosService.getCursos().subscribe(function (res) {
              return _this.cursos = res;
            });
            this.miId = localStorage.getItem('userId');
            this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(function (res) {
              return _this.usuario = res;
            });
          }
        }, {
          key: "readURL",
          value: function readURL(event) {
            var _this2 = this;

            if (event.target.files && event.target.files[0]) {
              this.file = event.target.files[0];
              var reader = new FileReader();

              reader.onload = function (e) {
                return _this2.imageSrc = reader.result;
              };

              reader.readAsDataURL(this.file);
            }
          }
        }, {
          key: "crearPublicacion",
          value: function crearPublicacion(form) {
            this.presentLoading("Espere por favor...");
            var fechaActual = new Date();
            this.publicacion.Titulo = form.value.titulo;
            this.publicacion.Descripcion = form.value.descripcion;
            this.publicacion.Estudiante = localStorage.getItem('userId');
            this.publicacion.Fecha = fechaActual.toString();
            this.publicacion.Visitas = 0;

            if (this.rol == 'Ayudante') {
              this.publicacion.Materia = form.value.curso;
            }

            if (this.rol == 'Estudiante') {
              this.publicacion.Materia = 'Estudiante';
            }

            console.log(form.value.curso);
            this.publicacion.Visibilidad = true;
            this.publicacion.Rol = localStorage.getItem('Rol');
            this.usuario.Publicaciones = this.usuario.Publicaciones + 1;
            this.guardarArchivo();
          }
        }, {
          key: "guardarArchivo",
          value: function guardarArchivo() {
            var _this3 = this;

            var storageRef = this.angularFireStorage.storage.ref();
            storageRef.child(this.file.name).put(this.file).then(function (data) {
              data.ref.getDownloadURL().then(function (downloadURL) {
                _this3.registroCompleto(downloadURL);
              })["catch"](function (err) {
                _this3.loading.dismiss();

                console.log('error');
              });
            });
          }
        }, {
          key: "registroCompleto",
          value: function registroCompleto(downloadURL) {
            var _this4 = this;

            this.publicacion.Foto = downloadURL;
            this.usuarioService.updateUsuario(this.miId, this.usuario);
            this.publicacionesService.addPublicacionesMateria(this.publicacion).then(function (auth) {
              _this4.loading.dismiss();

              _this4.router.navigate(["/publicaciones"]);
            })["catch"](function (error) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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

        return CrearPublicacionTodosPage;
      }();

      CrearPublicacionTodosPage.ctorParameters = function () {
        return [{
          type: src_app_services_ayudantes_service__WEBPACK_IMPORTED_MODULE_9__["AyudantesService"]
        }, {
          type: src_app_services_cursos_service__WEBPACK_IMPORTED_MODULE_10__["CursosService"]
        }, {
          type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: src_app_services_publicaciones_service__WEBPACK_IMPORTED_MODULE_7__["PublicacionesService"]
        }];
      };

      CrearPublicacionTodosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crear-publicacion-todos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./crear-publicacion-todos.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/crear-publicacion-todos/crear-publicacion-todos.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./crear-publicacion-todos.page.scss */
        "./src/app/folder/crear-publicacion-todos/crear-publicacion-todos.page.scss"))["default"]]
      })], CrearPublicacionTodosPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=folder-crear-publicacion-todos-crear-publicacion-todos-module-es5.js.map