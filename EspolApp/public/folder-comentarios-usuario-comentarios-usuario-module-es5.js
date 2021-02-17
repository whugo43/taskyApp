(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-comentarios-usuario-comentarios-usuario-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/comentarios-usuario/comentarios-usuario.page.html":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/comentarios-usuario/comentarios-usuario.page.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFolderComentariosUsuarioComentariosUsuarioPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\r\n  <ion-toolbar>\r\n\r\n    <ion-segment color=\"tertiary\" value=\"cursos\" >\r\n\r\n      <!-- <ion-segment-button *ngIf=\"Rol==Ayudante\" value=\"mis-ayudantias\" [routerLink]=\"['/mis-ayudantias']\" routerDirection=\"root\">\r\n        <ion-icon name=\"file-tray-stacked-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Mis Cursos</ion-label>\r\n      </ion-segment-button> -->\r\n\r\n      <ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\r\n        <ion-icon name=\"newspaper-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Publicaciones</ion-label>\r\n      </ion-segment-button>\r\n      \r\n      <ion-segment-button value=\"cursos\" [routerLink]=\"['/cursos']\" routerDirection=\"root\">\r\n        <ion-icon name=\"library-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 14px;\">Cursos</ion-label>\r\n      </ion-segment-button>\r\n    \r\n    \r\n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-icon name=\"person-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\r\n      </ion-segment-button>\r\n\r\n  \r\n\r\n    </ion-segment>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-toolbar>\r\n\r\n    <ion-segment color=\"tertiary\" value=\"comentarios\">\r\n    \r\n      <ion-segment-button value=\"datos\" [routerLink]=\"['/usuario-detalle',idMateria, id]\" routerDirection=\"root\">\r\n        <ion-icon name=\"information-circle-outline\" size=\"large\"></ion-icon> \r\n        <ion-label>Datos</ion-label>\r\n        </ion-segment-button>\r\n        \r\n        <ion-segment-button value=\"comentarios\" [routerLink]=\"['/comentarios-usuario', idMateria, id]\" routerDirection=\"root\">\r\n          <ion-icon name=\"chatbubbles-outline\" size=\"large\"></ion-icon> <ion-label>Comentarios</ion-label>\r\n        </ion-segment-button>\r\n        \r\n      </ion-segment>\r\n    \r\n    </ion-toolbar>\r\n    <ion-searchbar\r\n    color=\"light\" \r\n    placeholder = \"Buscar comentario...\"\r\n    animated\r\n\r\n    (ionChange)=\"buscar($event)\">\r\n    </ion-searchbar>\r\n\r\n\r\n  <ng-container *ngFor=\"let comentario of comentarios  | filtroComentarios: textoBuscar\" >\r\n    <ng-container *ngIf=\"comentario.Materia == idMateria && comentario.Ayudante == id\">\r\n      <ng-container *ngFor=\"let usuario of usuarios\">\r\n\r\n        <ion-card *ngIf=\"usuario.id == comentario.Estudiante\">\r\n          <ion-card-header>\r\n            <ion-item>\r\n              <ion-avatar>\r\n                <img src=\"{{usuario.FotoPerfil}}\">\r\n              </ion-avatar>\r\n              \r\n              <ion-label style=\"margin-left: 7.5px;\">{{usuario.Nombre}} {{usuario.Apellido}}</ion-label>\r\n              \r\n  \r\n              <ion-icon name=\"trash-outline\" slot=\"end\" color='danger' *ngIf=\"comentario.Estudiante == miID\" (click)=\"alert(comentario.id)\"></ion-icon>\r\n            </ion-item>\r\n\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n     \r\n              <ion-label>{{comentario.Comentario}}</ion-label>\r\n\r\n       \r\n          </ion-card-content>\r\n          <ion-item>\r\n            {{comentario.Fecha | date:'yyyy/MM/dd'}}\r\n          </ion-item>\r\n          \r\n          \r\n             \r\n        </ion-card>\r\n\r\n      </ng-container>\r\n    </ng-container>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"getDatos()\">\r\n\r\n    <div style=\"margin-top: 50px;\" align='center'> \r\n      <ion-text color=\"medium\">\r\n\r\n        <img src=\"https://firebasestorage.googleapis.com/v0/b/taskyapp01.appspot.com/o/iconos%2FcomentariosUsuarios.png?alt=media&token=438decd8-4f88-4ae3-928e-11e7ff1f6a9b\" style=\"width: 55%; height:62%;\" alet=\"foto\">\r\n        \r\n        <p style=\"font-size: 21px;\">No hay comentarios registrados.</p>\r\n      </ion-text>  \r\n    </div>\r\n  </ng-container>\r\n\r\n  <ion-fab *ngIf=\"id != miID\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"crearComentario()\">\r\n     <ion-icon name=\"add-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  \r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/folder/comentarios-usuario/comentarios-usuario-routing.module.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/folder/comentarios-usuario/comentarios-usuario-routing.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: ComentariosUsuarioPageRoutingModule */

    /***/
    function srcAppFolderComentariosUsuarioComentariosUsuarioRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComentariosUsuarioPageRoutingModule", function () {
        return ComentariosUsuarioPageRoutingModule;
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


      var _comentarios_usuario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./comentarios-usuario.page */
      "./src/app/folder/comentarios-usuario/comentarios-usuario.page.ts");

      var routes = [{
        path: '',
        component: _comentarios_usuario_page__WEBPACK_IMPORTED_MODULE_3__["ComentariosUsuarioPage"]
      }];

      var ComentariosUsuarioPageRoutingModule = function ComentariosUsuarioPageRoutingModule() {
        _classCallCheck(this, ComentariosUsuarioPageRoutingModule);
      };

      ComentariosUsuarioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComentariosUsuarioPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/folder/comentarios-usuario/comentarios-usuario.module.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/folder/comentarios-usuario/comentarios-usuario.module.ts ***!
      \**************************************************************************/

    /*! exports provided: ComentariosUsuarioPageModule */

    /***/
    function srcAppFolderComentariosUsuarioComentariosUsuarioModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComentariosUsuarioPageModule", function () {
        return ComentariosUsuarioPageModule;
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


      var _comentarios_usuario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./comentarios-usuario-routing.module */
      "./src/app/folder/comentarios-usuario/comentarios-usuario-routing.module.ts");
      /* harmony import */


      var _comentarios_usuario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./comentarios-usuario.page */
      "./src/app/folder/comentarios-usuario/comentarios-usuario.page.ts");
      /* harmony import */


      var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/pipes/pipes.module */
      "./src/app/pipes/pipes.module.ts");

      var ComentariosUsuarioPageModule = function ComentariosUsuarioPageModule() {
        _classCallCheck(this, ComentariosUsuarioPageModule);
      };

      ComentariosUsuarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _comentarios_usuario_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComentariosUsuarioPageRoutingModule"]],
        declarations: [_comentarios_usuario_page__WEBPACK_IMPORTED_MODULE_6__["ComentariosUsuarioPage"]]
      })], ComentariosUsuarioPageModule);
      /***/
    },

    /***/
    "./src/app/folder/comentarios-usuario/comentarios-usuario.page.scss":
    /*!**************************************************************************!*\
      !*** ./src/app/folder/comentarios-usuario/comentarios-usuario.page.scss ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFolderComentariosUsuarioComentariosUsuarioPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9jb21lbnRhcmlvcy11c3VhcmlvL2NvbWVudGFyaW9zLXVzdWFyaW8ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/folder/comentarios-usuario/comentarios-usuario.page.ts":
    /*!************************************************************************!*\
      !*** ./src/app/folder/comentarios-usuario/comentarios-usuario.page.ts ***!
      \************************************************************************/

    /*! exports provided: ComentariosUsuarioPage */

    /***/
    function srcAppFolderComentariosUsuarioComentariosUsuarioPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComentariosUsuarioPage", function () {
        return ComentariosUsuarioPage;
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


      var src_app_models_comentarios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/comentarios */
      "./src/app/models/comentarios.ts");
      /* harmony import */


      var src_app_services_comentarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/comentarios.service */
      "./src/app/services/comentarios.service.ts");
      /* harmony import */


      var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/usuario.service */
      "./src/app/services/usuario.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var ComentariosUsuarioPage = /*#__PURE__*/function () {
        function ComentariosUsuarioPage(activateRoute, comentariosService, usuarioService, alertCtrt) {
          _classCallCheck(this, ComentariosUsuarioPage);

          this.activateRoute = activateRoute;
          this.comentariosService = comentariosService;
          this.usuarioService = usuarioService;
          this.alertCtrt = alertCtrt;
          this.comentarios = [];
          this.comentario = new src_app_models_comentarios__WEBPACK_IMPORTED_MODULE_2__["Comentarios"]();
          this.textoBuscar = '';
          this.usuarios = [];
        }

        _createClass(ComentariosUsuarioPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.miID = localStorage.getItem('userId');
            this.activateRoute.paramMap.subscribe(function (paramMap) {
              _this.idMateria = paramMap.get('idMateria');
              _this.id = paramMap.get('idAyudante');
            });
            this.usuarioService.getUsuarios().subscribe(function (res) {
              return _this.usuarios = res;
            });
            this.comentariosService.getComentarios().subscribe(function (res) {
              return _this.comentarios = res;
            });
          }
        }, {
          key: "getDatos",
          value: function getDatos() {
            for (var i = 0; i < this.comentarios.length; i++) {
              if (this.comentarios[i].Materia == this.idMateria && this.comentarios[i].Ayudante == this.id) {
                return false;
              }
            }

            return true;
          }
        }, {
          key: "alert",
          value: function alert(id) {
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
                        header: "¿Desea eliminar este comentario?",
                        buttons: [{
                          text: 'Cancelar',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {//console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Elminar',
                          handler: function handler(data) {
                            _this2.remove(id);
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
        }, {
          key: "remove",
          value: function remove(id) {
            this.comentariosService.removeComentario(id);
          }
        }, {
          key: "crearComentario",
          value: function crearComentario() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertCtrt.create({
                        cssClass: 'my-custom-class',
                        header: 'Agregar comentario:',
                        // message: 'Nombre del curso:',
                        inputs: [{
                          name: 'curso',
                          placeholder: 'Comentario...',
                          type: 'text'
                        }],
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {// console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Ok',
                          handler: function handler(data) {
                            if (data.curso != "") {
                              _this3.agregarSolitiud(data.curso);
                            } else if (data.curso == "") {//this.failedAlert("El campo email es requerido");
                            }
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "agregarSolitiud",
          value: function agregarSolitiud(comentario) {
            var fechaActual = new Date();
            this.comentario.Ayudante = this.id;
            this.comentario.Estudiante = this.miID;
            this.comentario.Materia = this.idMateria;
            this.comentario.Fecha = fechaActual.toString();
            this.comentario.Comentario = comentario;
            this.comentariosService.addComentario(this.comentario);
          }
        }, {
          key: "buscar",
          value: function buscar(event) {
            var texto = event.target.value;
            this.textoBuscar = texto;
          }
        }]);

        return ComentariosUsuarioPage;
      }();

      ComentariosUsuarioPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: src_app_services_comentarios_service__WEBPACK_IMPORTED_MODULE_3__["ComentariosService"]
        }, {
          type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }];
      };

      ComentariosUsuarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comentarios-usuario',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./comentarios-usuario.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/comentarios-usuario/comentarios-usuario.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./comentarios-usuario.page.scss */
        "./src/app/folder/comentarios-usuario/comentarios-usuario.page.scss"))["default"]]
      })], ComentariosUsuarioPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=folder-comentarios-usuario-comentarios-usuario-module-es5.js.map