(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-curso-detalle-anuncio-curso-detalle-anuncio-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/curso-detalle-anuncio/curso-detalle-anuncio.page.html":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/curso-detalle-anuncio/curso-detalle-anuncio.page.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFolderCursoDetalleAnuncioCursoDetalleAnuncioPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\r\n  <ion-toolbar>\r\n\r\n    <ion-segment color=\"tertiary\" value=\"cursos\" >\r\n\r\n      <!-- <ion-segment-button *ngIf=\"Rol==Ayudante\" value=\"mis-ayudantias\" [routerLink]=\"['/mis-ayudantias']\" routerDirection=\"root\">\r\n        <ion-icon name=\"file-tray-stacked-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Mis Cursos</ion-label>\r\n      </ion-segment-button> -->\r\n\r\n      <ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\r\n        <ion-icon name=\"newspaper-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Publicaciones</ion-label>\r\n      </ion-segment-button>\r\n      \r\n      <ion-segment-button value=\"cursos\" [routerLink]=\"['/cursos']\" routerDirection=\"root\">\r\n        <ion-icon name=\"library-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 14px;\">Cursos</ion-label>\r\n      </ion-segment-button>\r\n    \r\n    \r\n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-icon name=\"person-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\r\n      </ion-segment-button>\r\n\r\n      <ion-segment-button value=\"adopcion\" [routerLink]=\"['/adopcion']\" routerDirection=\"root\">\r\n        <ion-icon name=\"paw-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Adopcion</ion-label>\r\n      </ion-segment-button>\r\n\r\n      <!-- <ion-segment-button value=\"citas\" *ngIf = \"mostrarCita == 'Si'\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-icon name=\"flame-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Citas</ion-label>\r\n      </ion-segment-button> -->\r\n\r\n  \r\n\r\n    </ion-segment>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <label style=\"margin: auto;display: block;font-size: 27px;font-weight: bold;color:black; align-items: center;text-align: center;\">{{publicacion.Titulo}}</label>\r\n    </ion-card-header>\r\n    <ion-card-content style=\"margin: auto;display: block;font-size: 19px;color:black; align-items: center;text-align: center;\">\r\n      {{publicacion.Descripcion}}\r\n     </ion-card-content>\r\n     \r\n     \r\n     \r\n     <ion-img src=\"{{publicacion.Foto}}\" style=\"height: 275px;width: 250px;margin: auto;display: block;margin-top: 7.5px;\"></ion-img>\r\n\r\n     <div align=\"center\" style=\"margin-bottom: 15.5px;\">\r\n      <ion-button  expand=\"full\"  expand=\"full\" href=\"{{publicacion.Foto}}\" style=\"width: 50px;height: 50px;\" color=\"light\"><ion-icon name=\"expand-outline\" size=\"large\" ></ion-icon> </ion-button>\r\n     </div>\r\n   \r\n\r\n        \r\n\r\n    \r\n\r\n\r\n    \r\n    <ng-container >\r\n\r\n      <label style=\"margin: auto;display: block;font-size: 17.5px;font-weight: bold;color:black; align-items: center;text-align: center;margin-top: 7.5px;\">Contacto:</label>\r\n\r\n    \r\n      <ion-item>\r\n        <ion-icon name=\"person-outline\" size=\"large\" style=\"margin-right: 8px;\" color=\"success\"></ion-icon>\r\n        <ion-label style=\"font-size: 17px;\">{{user.Nombre}} {{user.Apellido}}</ion-label>\r\n      </ion-item>\r\n\r\n    \r\n\r\n    <ion-item>\r\n      <a href= 'https://api.whatsapp.com/send?phone={{user.Telefono}}'><ion-icon name=\"logo-whatsapp\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon></a>\r\n      <ion-label>{{user.Telefono}}</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <a href=\"mailto:{{user.Correo}}\"><ion-icon name=\"mail-outline\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon></a>\r\n      <ion-label>{{user.Correo}}</ion-label>\r\n    </ion-item>\r\n\r\n   \r\n  </ng-container>\r\n\r\n  \r\n\r\n\r\n\r\n    \r\n\r\n\r\n    \r\n\r\n  </ion-card>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/folder/curso-detalle-anuncio/curso-detalle-anuncio-routing.module.ts":
    /*!**************************************************************************************!*\
      !*** ./src/app/folder/curso-detalle-anuncio/curso-detalle-anuncio-routing.module.ts ***!
      \**************************************************************************************/

    /*! exports provided: CursoDetalleAnuncioPageRoutingModule */

    /***/
    function srcAppFolderCursoDetalleAnuncioCursoDetalleAnuncioRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CursoDetalleAnuncioPageRoutingModule", function () {
        return CursoDetalleAnuncioPageRoutingModule;
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


      var _curso_detalle_anuncio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./curso-detalle-anuncio.page */
      "./src/app/folder/curso-detalle-anuncio/curso-detalle-anuncio.page.ts");

      var routes = [{
        path: '',
        component: _curso_detalle_anuncio_page__WEBPACK_IMPORTED_MODULE_3__["CursoDetalleAnuncioPage"]
      }];

      var CursoDetalleAnuncioPageRoutingModule = function CursoDetalleAnuncioPageRoutingModule() {
        _classCallCheck(this, CursoDetalleAnuncioPageRoutingModule);
      };

      CursoDetalleAnuncioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CursoDetalleAnuncioPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/folder/curso-detalle-anuncio/curso-detalle-anuncio.module.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/folder/curso-detalle-anuncio/curso-detalle-anuncio.module.ts ***!
      \******************************************************************************/

    /*! exports provided: CursoDetalleAnuncioPageModule */

    /***/
    function srcAppFolderCursoDetalleAnuncioCursoDetalleAnuncioModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CursoDetalleAnuncioPageModule", function () {
        return CursoDetalleAnuncioPageModule;
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


      var _curso_detalle_anuncio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./curso-detalle-anuncio-routing.module */
      "./src/app/folder/curso-detalle-anuncio/curso-detalle-anuncio-routing.module.ts");
      /* harmony import */


      var _curso_detalle_anuncio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./curso-detalle-anuncio.page */
      "./src/app/folder/curso-detalle-anuncio/curso-detalle-anuncio.page.ts");

      var CursoDetalleAnuncioPageModule = function CursoDetalleAnuncioPageModule() {
        _classCallCheck(this, CursoDetalleAnuncioPageModule);
      };

      CursoDetalleAnuncioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _curso_detalle_anuncio_routing_module__WEBPACK_IMPORTED_MODULE_5__["CursoDetalleAnuncioPageRoutingModule"]],
        declarations: [_curso_detalle_anuncio_page__WEBPACK_IMPORTED_MODULE_6__["CursoDetalleAnuncioPage"]]
      })], CursoDetalleAnuncioPageModule);
      /***/
    },

    /***/
    "./src/app/folder/curso-detalle-anuncio/curso-detalle-anuncio.page.scss":
    /*!******************************************************************************!*\
      !*** ./src/app/folder/curso-detalle-anuncio/curso-detalle-anuncio.page.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFolderCursoDetalleAnuncioCursoDetalleAnuncioPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9jdXJzby1kZXRhbGxlLWFudW5jaW8vY3Vyc28tZGV0YWxsZS1hbnVuY2lvLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/folder/curso-detalle-anuncio/curso-detalle-anuncio.page.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/folder/curso-detalle-anuncio/curso-detalle-anuncio.page.ts ***!
      \****************************************************************************/

    /*! exports provided: CursoDetalleAnuncioPage */

    /***/
    function srcAppFolderCursoDetalleAnuncioCursoDetalleAnuncioPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CursoDetalleAnuncioPage", function () {
        return CursoDetalleAnuncioPage;
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


      var src_app_models_publicaciones_materia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/publicaciones-materia */
      "./src/app/models/publicaciones-materia.ts");
      /* harmony import */


      var src_app_services_publicaciones_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/publicaciones.service */
      "./src/app/services/publicaciones.service.ts");
      /* harmony import */


      var src_app_models_usuarios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/models/usuarios */
      "./src/app/models/usuarios.ts");
      /* harmony import */


      var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/usuario.service */
      "./src/app/services/usuario.service.ts");
      /* harmony import */


      var src_app_services_ayudantes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/ayudantes.service */
      "./src/app/services/ayudantes.service.ts");

      var CursoDetalleAnuncioPage = /*#__PURE__*/function () {
        function CursoDetalleAnuncioPage(activateRoute, publicacionesService, usuarioService, AyudantesService) {
          _classCallCheck(this, CursoDetalleAnuncioPage);

          this.activateRoute = activateRoute;
          this.publicacionesService = publicacionesService;
          this.usuarioService = usuarioService;
          this.AyudantesService = AyudantesService;
          this.user = new src_app_models_usuarios__WEBPACK_IMPORTED_MODULE_5__["Usuarios"]();
          this.publicacion = new src_app_models_publicaciones_materia__WEBPACK_IMPORTED_MODULE_3__["PublicacionesMateria"]();
        }

        _createClass(CursoDetalleAnuncioPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.activateRoute.paramMap.subscribe(function (paramMap) {
              var idAnuncio = paramMap.get('id');
              _this.id = idAnuncio;

              _this.publicacionesService.getPublicacionMateria(idAnuncio).subscribe(function (res) {
                _this.publicacion = res;

                _this.usuarioService.getUsuario(res.Estudiante).subscribe(function (res) {
                  return _this.user = res;
                });
              }); //*ngIf="getUsuario(publicacion.Estudiante)"
              //this.actividadService.getActividad(idActividad).subscribe(res => this.actividad =res);

            });
          }
        }]);

        return CursoDetalleAnuncioPage;
      }();

      CursoDetalleAnuncioPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_services_publicaciones_service__WEBPACK_IMPORTED_MODULE_4__["PublicacionesService"]
        }, {
          type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"]
        }, {
          type: src_app_services_ayudantes_service__WEBPACK_IMPORTED_MODULE_7__["AyudantesService"]
        }];
      };

      CursoDetalleAnuncioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-curso-detalle-anuncio',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./curso-detalle-anuncio.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/curso-detalle-anuncio/curso-detalle-anuncio.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./curso-detalle-anuncio.page.scss */
        "./src/app/folder/curso-detalle-anuncio/curso-detalle-anuncio.page.scss"))["default"]]
      })], CursoDetalleAnuncioPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=folder-curso-detalle-anuncio-curso-detalle-anuncio-module-es5.js.map