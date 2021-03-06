(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-publicaciones-publicaciones-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/publicaciones/publicaciones.page.html":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/publicaciones/publicaciones.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFolderPublicacionesPublicacionesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\r\n  <ion-toolbar>\r\n\r\n    <ion-segment color=\"tertiary\" value=\"publicaciones\" >\r\n\r\n<ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\r\n        <ion-icon name=\"newspaper-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Publicaciones</ion-label>\r\n      </ion-segment-button>\r\n      \r\n      <ion-segment-button value=\"cursos\" [routerLink]=\"['/cursos']\" routerDirection=\"root\">\r\n        <ion-icon name=\"library-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 14px;\">Cursos</ion-label>\r\n      </ion-segment-button>\r\n    \r\n    \r\n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-icon name=\"person-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\r\n      </ion-segment-button>\r\n\r\n      <ion-segment-button value=\"adopcion\" [routerLink]=\"['/adopcion']\" routerDirection=\"root\">\r\n        <ion-icon name=\"paw-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Adopcion</ion-label>\r\n      </ion-segment-button>\r\n\r\n    </ion-segment>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-searchbar\r\n    color=\"light\" \r\n    placeholder = \"Buscar anuncio...\"\r\n    animated\r\n\r\n    (ionChange)=\"buscar($event)\">\r\n    </ion-searchbar>\r\n  \r\n  <ng-container style=\"border-color:yellow;background-color:teal\">\r\n    <ion-card  *ngIf=\"publicidad.Mostrar\" style=\"border-color:yellow;background-color:#FDF897\" (click)='aumentarVisitaPublicidad(publicidad.id,publicidad)'>         \r\n      <ion-card-header>\r\n        <ion-item>\r\n        <ion-card-title >{{publicidad.Titulo}}</ion-card-title>  \r\n      </ion-item>\r\n      </ion-card-header>\r\n      <ion-card-content (click)='aumentarVisitaPublicidad(publicidad.id,publicidad)'>\r\n        {{publicidad.Descripcion}}\r\n      </ion-card-content>\r\n\r\n      <ng-container >\r\n        <ion-item>\r\n          <ion-button fill=\"outline\" slot='end'><ion-icon name=\"eye-outline\" ></ion-icon><label style=\"font-size: 12;margin-left: 7.5px;\" >{{publicidad.Visitas}}</label></ion-button>\r\n         \r\n        </ion-item>\r\n      </ng-container>\r\n    </ion-card>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"!getDatos()\">\r\n    <ng-container *ngFor=\"let publicacion of publicaciones | filtroAnuncio: textoBuscar\">\r\n      <ion-card  *ngIf=\"rol == 'Ayudante'\">         \r\n        <ion-card-header>\r\n          <ion-item>\r\n          <ion-card-title (click)='aumentarVisita(publicacion.id,publicacion)'>{{publicacion.Titulo}}</ion-card-title>  \r\n          <!-- <ion-button fill=\"outline\" slot='end' (click)='aumentarVisita(publicacion.id,publicacion)'><ion-icon name=\"eye-outline\" ></ion-icon><label style=\"font-size: 12;margin-left: 7.5px;\" >{{publicacion.Visitas}}</label></ion-button>\r\n           -->\r\n\r\n           <ion-icon *ngIf=\"miId == publicacion.Estudiante\" name=\"create-outline\" slot='end'  (click)=\"redireccionar(publicacion.id)\"></ion-icon>\r\n           <ion-icon *ngIf=\"miId == publicacion.Estudiante\" name=\"trash-outline\" slot='end' color='danger'(click)=\"alert(publicacion.id)\"></ion-icon>\r\n\r\n\r\n          <!-- <ng-container *ngIf=\"miId == publicacion.Estudiante\">\r\n            <ion-icon name=\"create-outline\" slot='end'  (click)=\"redireccionar(publicacion.id)\"></ion-icon>\r\n            <ion-icon name=\"trash-outline\" slot='end' color='danger'(click)=\"alert(publicacion.id)\"></ion-icon>\r\n          </ng-container> -->\r\n        </ion-item>\r\n        </ion-card-header>\r\n        <ion-card-content (click)='aumentarVisita(publicacion.id,publicacion)'>\r\n          {{publicacion.Descripcion}}\r\n        </ion-card-content>\r\n\r\n        <ng-container >\r\n          <ion-item>\r\n\r\n            <label>{{publicacion.Fecha | date:'yyyy/MM/dd'}}</label>\r\n\r\n            <ion-button fill=\"outline\" slot='end' (click)='aumentarVisita(publicacion.id,publicacion)'><ion-icon name=\"eye-outline\" ></ion-icon><label style=\"font-size: 12;margin-left: 7.5px;\" >{{publicacion.Visitas}}</label></ion-button>\r\n\r\n           \r\n          </ion-item>\r\n\r\n        </ng-container>\r\n\r\n        \r\n        \r\n      </ion-card>\r\n\r\n\r\n\r\n      <ion-card  *ngIf=\"((rol == 'Estudiante') && ('Ayudante' == publicacion.Rol))||(rol == 'Estudiante' && publicacion.Estudiante == miId)\">         \r\n        <ion-card-header>\r\n          <ion-item>\r\n          <ion-card-title (click)='aumentarVisita(publicacion.id,publicacion)'>{{publicacion.Titulo}}</ion-card-title>  \r\n\r\n          <ion-icon *ngIf=\"miId == publicacion.Estudiante\" name=\"create-outline\" slot='end'  (click)=\"redireccionar(publicacion.id)\"></ion-icon>\r\n          <ion-icon *ngIf=\"miId == publicacion.Estudiante\" name=\"trash-outline\" slot='end' color='danger'(click)=\"alert(publicacion.id)\"></ion-icon>\r\n\r\n          <!-- <ng-container *ngIf=\"miId == publicacion.Estudiante\">\r\n            <ion-icon name=\"create-outline\" slot='end'  (click)=\"redireccionar(publicacion.id)\"></ion-icon>\r\n            <ion-icon name=\"trash-outline\" slot='end' color='danger'(click)=\"alert(publicacion.id)\"></ion-icon>\r\n          </ng-container> -->\r\n        </ion-item>\r\n        </ion-card-header>\r\n        <ion-card-content (click)='aumentarVisita(publicacion.id,publicacion)'>\r\n          {{publicacion.Descripcion}}\r\n        </ion-card-content>\r\n\r\n        <ng-container >\r\n          <ion-item>\r\n            \r\n            <label>{{publicacion.Fecha | date:'yyyy/MM/dd'}}</label>\r\n            <ion-button fill=\"outline\" slot='end' (click)='aumentarVisita(publicacion.id,publicacion)'><ion-icon name=\"eye-outline\" (click)='aumentarVisita(publicacion.id,publicacion)'></ion-icon><label style=\"font-size: 12;margin-left: 7.5px;\" >{{publicacion.Visitas}}</label></ion-button>\r\n          \r\n          </ion-item>\r\n\r\n        </ng-container>\r\n        \r\n\r\n        \r\n      </ion-card>\r\n      \r\n      \r\n    </ng-container>\r\n  </ng-container>\r\n\r\n  \r\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click) = 'validarCurso()' routerDirection=\"root\">\r\n     <ion-icon name=\"add-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/folder/publicaciones/publicaciones-routing.module.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/folder/publicaciones/publicaciones-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: PublicacionesPageRoutingModule */

    /***/
    function srcAppFolderPublicacionesPublicacionesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublicacionesPageRoutingModule", function () {
        return PublicacionesPageRoutingModule;
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


      var _publicaciones_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./publicaciones.page */
      "./src/app/folder/publicaciones/publicaciones.page.ts");

      var routes = [{
        path: '',
        component: _publicaciones_page__WEBPACK_IMPORTED_MODULE_3__["PublicacionesPage"]
      }];

      var PublicacionesPageRoutingModule = function PublicacionesPageRoutingModule() {
        _classCallCheck(this, PublicacionesPageRoutingModule);
      };

      PublicacionesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PublicacionesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/folder/publicaciones/publicaciones.module.ts":
    /*!**************************************************************!*\
      !*** ./src/app/folder/publicaciones/publicaciones.module.ts ***!
      \**************************************************************/

    /*! exports provided: PublicacionesPageModule */

    /***/
    function srcAppFolderPublicacionesPublicacionesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublicacionesPageModule", function () {
        return PublicacionesPageModule;
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


      var _publicaciones_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./publicaciones-routing.module */
      "./src/app/folder/publicaciones/publicaciones-routing.module.ts");
      /* harmony import */


      var _publicaciones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./publicaciones.page */
      "./src/app/folder/publicaciones/publicaciones.page.ts");
      /* harmony import */


      var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/pipes/pipes.module */
      "./src/app/pipes/pipes.module.ts");

      var PublicacionesPageModule = function PublicacionesPageModule() {
        _classCallCheck(this, PublicacionesPageModule);
      };

      PublicacionesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _publicaciones_routing_module__WEBPACK_IMPORTED_MODULE_5__["PublicacionesPageRoutingModule"]],
        declarations: [_publicaciones_page__WEBPACK_IMPORTED_MODULE_6__["PublicacionesPage"]]
      })], PublicacionesPageModule);
      /***/
    },

    /***/
    "./src/app/folder/publicaciones/publicaciones.page.scss":
    /*!**************************************************************!*\
      !*** ./src/app/folder/publicaciones/publicaciones.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFolderPublicacionesPublicacionesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9wdWJsaWNhY2lvbmVzL3B1YmxpY2FjaW9uZXMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/folder/publicaciones/publicaciones.page.ts":
    /*!************************************************************!*\
      !*** ./src/app/folder/publicaciones/publicaciones.page.ts ***!
      \************************************************************/

    /*! exports provided: PublicacionesPage */

    /***/
    function srcAppFolderPublicacionesPublicacionesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublicacionesPage", function () {
        return PublicacionesPage;
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


      var src_app_services_publicaciones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/publicaciones.service */
      "./src/app/services/publicaciones.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_models_usuarios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/models/usuarios */
      "./src/app/models/usuarios.ts");
      /* harmony import */


      var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/usuario.service */
      "./src/app/services/usuario.service.ts");
      /* harmony import */


      var src_app_models_publicidad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/models/publicidad */
      "./src/app/models/publicidad.ts");
      /* harmony import */


      var src_app_services_publicidad_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/publicidad.service */
      "./src/app/services/publicidad.service.ts");

      var PublicacionesPage = /*#__PURE__*/function () {
        //probar: PublicacionesMateria[] = [];
        function PublicacionesPage(activateRoute, usuarioService, publicacionesService, alertCtrt, router, publicidadService) {
          _classCallCheck(this, PublicacionesPage);

          this.activateRoute = activateRoute;
          this.usuarioService = usuarioService;
          this.publicacionesService = publicacionesService;
          this.alertCtrt = alertCtrt;
          this.router = router;
          this.publicidadService = publicidadService;
          this.usuario = new src_app_models_usuarios__WEBPACK_IMPORTED_MODULE_5__["Usuarios"]();
          this.publicaciones = [];
          this.textoBuscar = '';
          this.publicidad = new src_app_models_publicidad__WEBPACK_IMPORTED_MODULE_7__["Publicidad"]();
        }

        _createClass(PublicacionesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(function (res) {
              return _this.usuario = res;
            });
            this.miId = localStorage.getItem('userId');
            this.mostrarCita = localStorage.getItem('Citas');
            this.rol = localStorage.getItem('Rol');
            this.publicacionesService.getPublicacionesMateria().subscribe(function (res) {
              return _this.publicaciones = res;
            });
            this.publicidadService.getPublicidad().subscribe(function (res) {
              _this.publicidad = res[0];
            }); //this.publicacionesService.probar().subscribe(res=>this.probar = res);
          }
        }, {
          key: "redireccionar",
          value: function redireccionar(id) {
            this.router.navigate(['/editar-publicacion', id, "Publicacion"]);
          }
        }, {
          key: "getDatos",
          value: function getDatos() {
            for (var i = 0; i < this.publicaciones.length; i++) {
              return false;
            }

            return true;
          }
        }, {
          key: "buscar",
          value: function buscar(event) {
            var texto = event.target.value;
            this.textoBuscar = texto;
          }
        }, {
          key: "aumentarVisita",
          value: function aumentarVisita(id, publicacion) {
            publicacion.Visitas = publicacion.Visitas + 1; //console.log("fff", publicacion.Visitas)
            //[routerLink]="['/curso-detalle-anuncio',publicacion.id]"

            this.publicacionesService.updatePublicacionesMateria(id, publicacion);
            this.router.navigate(['/curso-detalle-anuncio', publicacion.id]);
          }
        }, {
          key: "aumentarVisitaPublicidad",
          value: function aumentarVisitaPublicidad(id, publicidad) {
            publicidad.Visitas = publicidad.Visitas + 1; //console.log("fff", publicidad.Visitas)
            //[routerLink]="['/detalle-publicidad',publicacion.id]"

            this.publicidadService.updatePublicidad(id, publicidad);
            this.router.navigate(['/detalle-publicidad', publicidad.id]);
          }
        }, {
          key: "validarCurso",
          value: function validarCurso() {
            if (this.usuario.Rol == 'Estudiante') {
              this.router.navigate(["/crear-publicacion-todos"]);
            } else if (this.usuario.Premium || this.usuario.Premium == false && this.usuario.Publicaciones < 5) {
              this.router.navigate(["/crear-publicacion-todos"]); // this.mostrarBoton = false;//mostrar mensaje.
              //  [routerLink]="['/crear-grupo',id]"
            } else {
              this.failedAlertPremium();
            }
          }
        }, {
          key: "failedAlertPremium",
          value: function failedAlertPremium() {
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
                        header: "Su cuenta no es premium",
                        message: "Máximo puedes realizar 5 publicaciones",
                        buttons: [{
                          text: 'Cancelar',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {//console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Ser premium',
                          handler: function handler(data) {
                            _this2.serPremium(); //console.log('registrar')

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
          key: "serPremium",
          value: function serPremium() {
            var _this3 = this;

            this.usuario.EsperaPremium = true;
            this.usuarioService.updateUsuario(localStorage.getItem('userId'), this.usuario).then(function (res) {
              _this3.failedAlertPremiunMessage();
            });
          }
        }, {
          key: "failedAlertPremiunMessage",
          value: function failedAlertPremiunMessage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertCtrt.create({
                        cssClass: 'my-custom-class',
                        header: "Genial!",
                        message: 'Pronto estaremos en contacto contigo por whatsapp!',
                        buttons: [{
                          text: 'OK',
                          handler: function handler() {}
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
          key: "alert",
          value: function alert(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this4 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertCtrt.create({
                        cssClass: 'my-custom-class',
                        header: "¿Desea eliminar esta publicación?",
                        buttons: [{
                          text: 'Cancelar',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {//console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Elminar',
                          handler: function handler(data) {
                            _this4.remove(id);
                          }
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
          key: "remove",
          value: function remove(id) {
            this.publicacionesService.removePublicacionesMateria(id);
            this.usuario.Publicaciones = this.usuario.Publicaciones - 1;
            this.usuarioService.updateUsuario(this.miId, this.usuario);
          }
        }]);

        return PublicacionesPage;
      }();

      PublicacionesPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"]
        }, {
          type: src_app_services_publicaciones_service__WEBPACK_IMPORTED_MODULE_2__["PublicacionesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_services_publicidad_service__WEBPACK_IMPORTED_MODULE_8__["PublicidadService"]
        }];
      };

      PublicacionesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-publicaciones',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./publicaciones.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/publicaciones/publicaciones.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./publicaciones.page.scss */
        "./src/app/folder/publicaciones/publicaciones.page.scss"))["default"]]
      })], PublicacionesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=folder-publicaciones-publicaciones-module-es5.js.map