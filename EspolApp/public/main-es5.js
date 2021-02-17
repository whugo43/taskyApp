(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <!-- <ion-split-pane contentId=\"main-content\">\r\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\r\n        <ion-toolbar color=\"primary\">\r\n    <ion-title>Menú</ion-title>\r\n  </ion-toolbar>\r\n      <ion-content fullscreen>    \r\n        <ion-list>\r\n         <ion-menu-toggle auto-hide=\"false\">\r\n           <ion-item button [routerLink]=\"['/mis-ayudantias']\">\r\n              <ion-icon slot=\"start\" name=\"people\" style=\"color:#8c54fc\"></ion-icon>\r\n              <ion-label> <h3>Mis Ayudantias</h3> </ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item button [routerLink]=\"['/perfil']\" >\r\n            <ion-icon slot=\"start\" name=\"person\" style=\"color:#8c54fc\"></ion-icon>\r\n              <ion-label> <h3>Perfil</h3> </ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item button [routerLink]=\"['/home']\" *ngIf=\"Rol == estudiante\">\r\n              <ion-icon slot=\"start\" name=\"accessibility-outline\" style=\"color:#8c54fc\"></ion-icon>\r\n                <ion-label> <h3>Quiero ser ayudante</h3> </ion-label>\r\n            </ion-item>\r\n\r\n\r\n            <ion-item button [routerLink]=\"['/home']\" >\r\n              <ion-icon slot=\"start\" name=\"home-outline\" style=\"color:#8c54fc\"></ion-icon>\r\n                <ion-label> <h3>Home</h3> </ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item button (click)=\"logOutUser()\">\r\n            <ion-icon slot=\"start\" name=\"power\" style=\"color:#8c54fc\"></ion-icon>\r\n              <ion-label> <h3>Cerrar Sesión</h3> </ion-label>\r\n            </ion-item>\r\n            </ion-menu-toggle>\r\n        </ion-list>\r\n\r\n      </ion-content>\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane> -->\r\n  <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n</ion-app>";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _guards_no_login_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./guards/no-login.guard */
      "./src/app/guards/no-login.guard.ts");
      /* harmony import */


      var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./guards/auth.guard */
      "./src/app/guards/auth.guard.ts");
      /* harmony import */


      var _guards_pendiente_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./guards/pendiente.guard */
      "./src/app/guards/pendiente.guard.ts");

      var routes = [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | folder-login-login-module */
          [__webpack_require__.e("common"), __webpack_require__.e("folder-login-login-module")]).then(__webpack_require__.bind(null,
          /*! ./folder/login/login.module */
          "./src/app/folder/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        },
        canActivate: [_guards_no_login_guard__WEBPACK_IMPORTED_MODULE_3__["NoLoginGuard"]]
      }, {
        path: 'perfil',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | folder-perfil-perfil-module */
          [__webpack_require__.e("common"), __webpack_require__.e("folder-perfil-perfil-module")]).then(__webpack_require__.bind(null,
          /*! ./folder/perfil/perfil.module */
          "./src/app/folder/perfil/perfil.module.ts")).then(function (m) {
            return m.PerfilPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'registro',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | folder-registro-registro-module */
          [__webpack_require__.e("common"), __webpack_require__.e("folder-registro-registro-module")]).then(__webpack_require__.bind(null,
          /*! ./folder/registro/registro.module */
          "./src/app/folder/registro/registro.module.ts")).then(function (m) {
            return m.RegistroPageModule;
          });
        },
        canActivate: [_guards_no_login_guard__WEBPACK_IMPORTED_MODULE_3__["NoLoginGuard"]]
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | folder-home-home-module */
          [__webpack_require__.e("common"), __webpack_require__.e("folder-home-home-module")]).then(__webpack_require__.bind(null,
          /*! ./folder/home/home.module */
          "./src/app/folder/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'cursos',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | folder-cursos-cursos-module */
          [__webpack_require__.e("common"), __webpack_require__.e("folder-cursos-cursos-module")]).then(__webpack_require__.bind(null,
          /*! ./folder/cursos/cursos.module */
          "./src/app/folder/cursos/cursos.module.ts")).then(function (m) {
            return m.CursosPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'curso-detalle/:id/:nombre',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | folder-curso-detalle-curso-detalle-module */
          [__webpack_require__.e("common"), __webpack_require__.e("folder-curso-detalle-curso-detalle-module")]).then(__webpack_require__.bind(null,
          /*! ./folder/curso-detalle/curso-detalle.module */
          "./src/app/folder/curso-detalle/curso-detalle.module.ts")).then(function (m) {
            return m.CursoDetallePageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'publicaciones',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | folder-publicaciones-publicaciones-module */
          [__webpack_require__.e("common"), __webpack_require__.e("folder-publicaciones-publicaciones-module")]).then(__webpack_require__.bind(null,
          /*! ./folder/publicaciones/publicaciones.module */
          "./src/app/folder/publicaciones/publicaciones.module.ts")).then(function (m) {
            return m.PublicacionesPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'usuario-detalle/:idMateria/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | folder-usuario-detalle-usuario-detalle-module */
          [__webpack_require__.e("common"), __webpack_require__.e("folder-usuario-detalle-usuario-detalle-module")]).then(__webpack_require__.bind(null,
          /*! ./folder/usuario-detalle/usuario-detalle.module */
          "./src/app/folder/usuario-detalle/usuario-detalle.module.ts")).then(function (m) {
            return m.UsuarioDetallePageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'publicaciones-materia',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | folder-publicaciones-materia-publicaciones-materia-module */
          "folder-publicaciones-materia-publicaciones-materia-module").then(__webpack_require__.bind(null,
          /*! ./folder/publicaciones-materia/publicaciones-materia.module */
          "./src/app/folder/publicaciones-materia/publicaciones-materia.module.ts")).then(function (m) {
            return m.PublicacionesMateriaPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'perfil-update',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | folder-perfil-update-perfil-update-module */
          [__webpack_require__.e("common"), __webpack_require__.e("folder-perfil-update-perfil-update-module")]).then(__webpack_require__.bind(null,
          /*! ./folder/perfil-update/perfil-update.module */
          "./src/app/folder/perfil-update/perfil-update.module.ts")).then(function (m) {
            return m.PerfilUpdatePageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'crear-publicacion/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | folder-crear-publicacion-crear-publicacion-module */
          [__webpack_require__.e("common"), __webpack_require__.e("folder-crear-publicacion-crear-publicacion-module")]).then(__webpack_require__.bind(null,
          /*! ./folder/crear-publicacion/crear-publicacion.module */
          "./src/app/folder/crear-publicacion/crear-publicacion.module.ts")).then(function (m) {
            return m.CrearPublicacionPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'mis-publicaciones',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | folder-mis-publicaciones-mis-publicaciones-module */
          "folder-mis-publicaciones-mis-publicaciones-module").then(__webpack_require__.bind(null,
          /*! ./folder/mis-publicaciones/mis-publicaciones.module */
          "./src/app/folder/mis-publicaciones/mis-publicaciones.module.ts")).then(function (m) {
            return m.MisPublicacionesPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'curso-ayudantes/:id/:nombre',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | folder-curso-ayudantes-curso-ayudantes-module */
          [__webpack_require__.e("common"), __webpack_require__.e("folder-curso-ayudantes-curso-ayudantes-module")]).then(__webpack_require__.bind(null,
          /*! ./folder/curso-ayudantes/curso-ayudantes.module */
          "./src/app/folder/curso-ayudantes/curso-ayudantes.module.ts")).then(function (m) {
            return m.CursoAyudantesPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'curso-detalle-anuncio/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | folder-curso-detalle-anuncio-curso-detalle-anuncio-module */
          [__webpack_require__.e("common"), __webpack_require__.e("folder-curso-detalle-anuncio-curso-detalle-anuncio-module")]).then(__webpack_require__.bind(null,
          /*! ./folder/curso-detalle-anuncio/curso-detalle-anuncio.module */
          "./src/app/folder/curso-detalle-anuncio/curso-detalle-anuncio.module.ts")).then(function (m) {
            return m.CursoDetalleAnuncioPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'pendiente',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | folder-pendiente-pendiente-module */
          "folder-pendiente-pendiente-module").then(__webpack_require__.bind(null,
          /*! ./folder/pendiente/pendiente.module */
          "./src/app/folder/pendiente/pendiente.module.ts")).then(function (m) {
            return m.PendientePageModule;
          });
        },
        canActivate: [_guards_pendiente_guard__WEBPACK_IMPORTED_MODULE_5__["PendienteGuard"]]
      }, // {
      //   path: 'mis-ayudantias',
      //   loadChildren: () => import('./foler/mis-ayudantias/mis-ayudantias.module').then( m => m.MisAyudantiasPageModule)
      // },
      {
        path: 'mis-ayudantias',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | folder-mis-ayudantias-mis-ayudantias-module */
          [__webpack_require__.e("common"), __webpack_require__.e("folder-mis-ayudantias-mis-ayudantias-module")]).then(__webpack_require__.bind(null,
          /*! ./folder/mis-ayudantias/mis-ayudantias.module */
          "./src/app/folder/mis-ayudantias/mis-ayudantias.module.ts")).then(function (m) {
            return m.MisAyudantiasPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, // {
      //   path: 'mis-ayudantias-anuncios',
      //   loadChildren: () => import('./foler/mis-ayudantias-anuncios/mis-ayudantias-anuncios.module').then( m => m.MisAyudantiasAnunciosPageModule)
      // },
      // {
      //   path: 'crear-ayudantia',
      //   loadChildren: () => import('./foler/crear-ayudantia/crear-ayudantia.module').then( m => m.CrearAyudantiaPageModule)
      // },
      {
        path: 'crear-ayudantia',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | folder-crear-ayudantia-crear-ayudantia-module */
          [__webpack_require__.e("common"), __webpack_require__.e("folder-crear-ayudantia-crear-ayudantia-module")]).then(__webpack_require__.bind(null,
          /*! ./folder/crear-ayudantia/crear-ayudantia.module */
          "./src/app/folder/crear-ayudantia/crear-ayudantia.module.ts")).then(function (m) {
            return m.CrearAyudantiaPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'mis-ayudantias-anuncios',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | folder-mis-ayudantias-anuncios-mis-ayudantias-anuncios-module */
          "folder-mis-ayudantias-anuncios-mis-ayudantias-anuncios-module").then(__webpack_require__.bind(null,
          /*! ./folder/mis-ayudantias-anuncios/mis-ayudantias-anuncios.module */
          "./src/app/folder/mis-ayudantias-anuncios/mis-ayudantias-anuncios.module.ts")).then(function (m) {
            return m.MisAyudantiasAnunciosPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'solicitud-ayudantia',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | folder-solicitud-ayudantia-solicitud-ayudantia-module */
          "folder-solicitud-ayudantia-solicitud-ayudantia-module").then(__webpack_require__.bind(null,
          /*! ./folder/solicitud-ayudantia/solicitud-ayudantia.module */
          "./src/app/folder/solicitud-ayudantia/solicitud-ayudantia.module.ts")).then(function (m) {
            return m.SolicitudAyudantiaPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'solicitud-materia',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | folder-solicitud-materia-solicitud-materia-module */
          "folder-solicitud-materia-solicitud-materia-module").then(__webpack_require__.bind(null,
          /*! ./folder/solicitud-materia/solicitud-materia.module */
          "./src/app/folder/solicitud-materia/solicitud-materia.module.ts")).then(function (m) {
            return m.SolicitudMateriaPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'sugerencias',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | folder-sugerencias-sugerencias-module */
          "folder-sugerencias-sugerencias-module").then(__webpack_require__.bind(null,
          /*! ./folder/sugerencias/sugerencias.module */
          "./src/app/folder/sugerencias/sugerencias.module.ts")).then(function (m) {
            return m.SugerenciasPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'editar-publicacion/:id/:redireccion',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | folder-editar-publicacion-editar-publicacion-module */
          [__webpack_require__.e("common"), __webpack_require__.e("folder-editar-publicacion-editar-publicacion-module")]).then(__webpack_require__.bind(null,
          /*! ./folder/editar-publicacion/editar-publicacion.module */
          "./src/app/folder/editar-publicacion/editar-publicacion.module.ts")).then(function (m) {
            return m.EditarPublicacionPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'grupos/:id/:nombre',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | folder-grupos-grupos-module */
          [__webpack_require__.e("common"), __webpack_require__.e("folder-grupos-grupos-module")]).then(__webpack_require__.bind(null,
          /*! ./folder/grupos/grupos.module */
          "./src/app/folder/grupos/grupos.module.ts")).then(function (m) {
            return m.GruposPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'grupos-detalle/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | folder-grupos-detalle-grupos-detalle-module */
          [__webpack_require__.e("common"), __webpack_require__.e("folder-grupos-detalle-grupos-detalle-module")]).then(__webpack_require__.bind(null,
          /*! ./folder/grupos-detalle/grupos-detalle.module */
          "./src/app/folder/grupos-detalle/grupos-detalle.module.ts")).then(function (m) {
            return m.GruposDetallePageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'crear-grupo/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | folder-crear-grupo-crear-grupo-module */
          [__webpack_require__.e("common"), __webpack_require__.e("folder-crear-grupo-crear-grupo-module")]).then(__webpack_require__.bind(null,
          /*! ./folder/crear-grupo/crear-grupo.module */
          "./src/app/folder/crear-grupo/crear-grupo.module.ts")).then(function (m) {
            return m.CrearGrupoPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'crear-publicacion-todos',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | folder-crear-publicacion-todos-crear-publicacion-todos-module */
          [__webpack_require__.e("common"), __webpack_require__.e("folder-crear-publicacion-todos-crear-publicacion-todos-module")]).then(__webpack_require__.bind(null,
          /*! ./folder/crear-publicacion-todos/crear-publicacion-todos.module */
          "./src/app/folder/crear-publicacion-todos/crear-publicacion-todos.module.ts")).then(function (m) {
            return m.CrearPublicacionTodosPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'comentarios-usuario/:idMateria/:idAyudante',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | folder-comentarios-usuario-comentarios-usuario-module */
          [__webpack_require__.e("common"), __webpack_require__.e("folder-comentarios-usuario-comentarios-usuario-module")]).then(__webpack_require__.bind(null,
          /*! ./folder/comentarios-usuario/comentarios-usuario.module */
          "./src/app/folder/comentarios-usuario/comentarios-usuario.module.ts")).then(function (m) {
            return m.ComentariosUsuarioPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'mis-comentarios/:idMateria',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | folder-mis-comentarios-mis-comentarios-module */
          [__webpack_require__.e("common"), __webpack_require__.e("folder-mis-comentarios-mis-comentarios-module")]).then(__webpack_require__.bind(null,
          /*! ./folder/mis-comentarios/mis-comentarios.module */
          "./src/app/folder/mis-comentarios/mis-comentarios.module.ts")).then(function (m) {
            return m.MisComentariosPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'detalle-publicidad/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | folder-detalle-publicidad-detalle-publicidad-module */
          [__webpack_require__.e("common"), __webpack_require__.e("folder-detalle-publicidad-detalle-publicidad-module")]).then(__webpack_require__.bind(null,
          /*! ./folder/detalle-publicidad/detalle-publicidad.module */
          "./src/app/folder/detalle-publicidad/detalle-publicidad.module.ts")).then(function (m) {
            return m.DetallePublicidadPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'editar-grupo/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | folder-editar-grupo-editar-grupo-module */
          [__webpack_require__.e("common"), __webpack_require__.e("folder-editar-grupo-editar-grupo-module")]).then(__webpack_require__.bind(null,
          /*! ./folder/editar-grupo/editar-grupo.module */
          "./src/app/folder/editar-grupo/editar-grupo.module.ts")).then(function (m) {
            return m.EditarGrupoPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkVBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBOztFQUVFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyREFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxzREFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxzQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQUpGOztBQU9BO0VBQ0UsaUNBQUE7QUFKRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxuICAtLXBhZGRpbmctZW5kOiA4cHg7XHJcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxyXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICBtaW4taGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuXHJcbiAgY29sb3I6ICM3NTc1NzU7XHJcblxyXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XHJcbiAgY29sb3I6ICM2MTZlN2U7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcclxuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xyXG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6ICM3Mzg0OWE7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcclxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbmlvbi1ub3RlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbn1cclxuXHJcbmlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "./src/app/services/auth.service.ts");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(authService, platform, splashScreen, statusBar) {
          _classCallCheck(this, AppComponent);

          this.authService = authService;
          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();

              _this.splashScreen.hide();
            });
          }
        }, {
          key: "logOutUser",
          value: function logOutUser() {
            this.authService.logOutUser();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var angularfire2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angularfire2 */
      "./node_modules/angularfire2/index.js");
      /* harmony import */


      var angularfire2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! angularfire2/firestore */
      "./node_modules/angularfire2/firestore/index.js");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var angularfire2_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! angularfire2/storage */
      "./node_modules/angularfire2/storage/index.js");
      /* harmony import */


      var angularfire2_storage__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var angularfire2_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! angularfire2/auth */
      "./node_modules/angularfire2/auth/index.js");
      /* harmony import */


      var angularfire2_auth__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/service-worker */
      "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), angularfire2__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase), angularfire2_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"], angularfire2_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorageModule"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__["ServiceWorkerModule"].register('ngsw-worker.js', {
          enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production
        })],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/guards/auth.guard.ts":
    /*!**************************************!*\
      !*** ./src/app/guards/auth.guard.ts ***!
      \**************************************/

    /*! exports provided: AuthGuard */

    /***/
    function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
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


      var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angularfire2/auth */
      "./node_modules/angularfire2/auth/index.js");
      /* harmony import */


      var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! util */
      "./node_modules/util/util.js");
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, AFauth) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.AFauth = AFauth;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var _this2 = this;

            return this.AFauth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (auth) {
              if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(auth)) {
                _this2.router.navigateByUrl('/login');

                return false; //redirigir al login
              } else if (localStorage.getItem('Estado') == "P") {
                _this2.router.navigateByUrl('/login');

                return false;
              } else {
                return true; //redirigir al home profesor
              }
            }));
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthGuard);
      /***/
    },

    /***/
    "./src/app/guards/no-login.guard.ts":
    /*!******************************************!*\
      !*** ./src/app/guards/no-login.guard.ts ***!
      \******************************************/

    /*! exports provided: NoLoginGuard */

    /***/
    function srcAppGuardsNoLoginGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoLoginGuard", function () {
        return NoLoginGuard;
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


      var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angularfire2/auth */
      "./node_modules/angularfire2/auth/index.js");
      /* harmony import */


      var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! util */
      "./node_modules/util/util.js");
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);

      var NoLoginGuard = /*#__PURE__*/function () {
        function NoLoginGuard(router, AFauth) {
          _classCallCheck(this, NoLoginGuard);

          this.router = router;
          this.AFauth = AFauth;
        }

        _createClass(NoLoginGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var _this3 = this;

            return this.AFauth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (auth) {
              console.log("estado", localStorage.getItem('Estado'));

              if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(auth)) {
                return true; //redirigir al login
              } else {
                if (localStorage.getItem('Estado') == "A") {
                  _this3.router.navigateByUrl('/publicaciones');
                }

                if (localStorage.getItem('Estado') == "P") {
                  _this3.router.navigateByUrl('/pendiente');
                }

                return false; //redirigir al home profesor
              }
            }));
          }
        }]);

        return NoLoginGuard;
      }();

      NoLoginGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
        }];
      };

      NoLoginGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], NoLoginGuard);
      /***/
    },

    /***/
    "./src/app/guards/pendiente.guard.ts":
    /*!*******************************************!*\
      !*** ./src/app/guards/pendiente.guard.ts ***!
      \*******************************************/

    /*! exports provided: PendienteGuard */

    /***/
    function srcAppGuardsPendienteGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PendienteGuard", function () {
        return PendienteGuard;
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


      var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angularfire2/auth */
      "./node_modules/angularfire2/auth/index.js");
      /* harmony import */


      var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! util */
      "./node_modules/util/util.js");
      /* harmony import */


      var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);

      var PendienteGuard = /*#__PURE__*/function () {
        function PendienteGuard(router, AFauth) {
          _classCallCheck(this, PendienteGuard);

          this.router = router;
          this.AFauth = AFauth;
        }

        _createClass(PendienteGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var _this4 = this;

            return this.AFauth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (auth) {
              if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(auth)) {
                _this4.router.navigateByUrl('/login');

                return false; //redirigir al login
              } else if (localStorage.getItem('Estado') == "A") {
                _this4.router.navigateByUrl('/login');

                return false;
              } else {
                return true; //redirigir al home profesor
              }
            }));
          }
        }]);

        return PendienteGuard;
      }();

      PendienteGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
        }];
      };

      PendienteGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PendienteGuard);
      /***/
    },

    /***/
    "./src/app/services/auth.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
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


      var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! firebase */
      "./node_modules/firebase/dist/index.cjs.js");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./usuario.service */
      "./src/app/services/usuario.service.ts");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(router, firestore, usuarioService) {
          _classCallCheck(this, AuthService);

          this.router = router;
          this.firestore = firestore;
          this.usuarioService = usuarioService;
        }

        _createClass(AuthService, [{
          key: "loginUser",
          value: function loginUser(email, password) {
            var _this5 = this;

            return new Promise(function (resolve, reject) {
              firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().signInWithEmailAndPassword(email, password).then(function (res) {
                localStorage.setItem('email', email);
                localStorage.setItem('userId', res.user.uid);

                _this5.usuarioService.getUsuario(res.user.uid).subscribe(function (res) {
                  localStorage.setItem('Rol', res.Rol);
                  localStorage.setItem('Estado', res.Estado);
                });

                resolve(res);
              })["catch"](function (err) {
                return reject(err);
              });
            });
          }
        }, {
          key: "signupnUser",
          value: function signupnUser(email, password, nombre, apellido, matricula, telefono, fotoPerfil, fotoCarnet) {
            var _this6 = this;

            return new Promise(function (resolve, reject) {
              firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().createUserWithEmailAndPassword(email, password).then(function (res) {
                _this6.firestore.collection('Usuarios').doc(res.user.uid).set({
                  Apellido: apellido,
                  Correo: email,
                  FotoPerfil: fotoPerfil,
                  Foto: fotoCarnet,
                  Matricula: matricula,
                  Nombre: nombre,
                  Premium: false,
                  Publicaciones: 0,
                  Rol: 'Estudiante',
                  Telefono: telefono,
                  Universidad: 'Espol',
                  Anuncio: true,
                  EsperaAyudantia: false,
                  EsperaPremium: false,
                  Cursos: 0,
                  // Verificacion: false,
                  Estado: 'P'
                });

                resolve(res);
              })["catch"](function (err) {
                return reject(err);
              });
            });
          }
        }, {
          key: "resetPassword",
          value: function resetPassword(email) {
            return firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().sendPasswordResetEmail(email);
          }
        }, {
          key: "logOutUser",
          value: function logOutUser() {
            var _this7 = this;

            firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().signOut().then(function () {
              return localStorage.clear(), _this7.router.navigateByUrl("/login");
            });
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    },

    /***/
    "./src/app/services/usuario.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/usuario.service.ts ***!
      \*********************************************/

    /*! exports provided: UsuarioService */

    /***/
    function srcAppServicesUsuarioServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsuarioService", function () {
        return UsuarioService;
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

      var UsuarioService = /*#__PURE__*/function () {
        function UsuarioService(firestore) {
          _classCallCheck(this, UsuarioService);

          this.usuariosCollection = firestore.collection('Usuarios');
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

        _createClass(UsuarioService, [{
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

        return UsuarioService;
      }();

      UsuarioService.ctorParameters = function () {
        return [{
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      UsuarioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], UsuarioService);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        firebase: {
          apiKey: "AIzaSyClFkBgsue70GOP1pmj0jE12KOK7FdoDVM",
          authDomain: "taskyapp01.firebaseapp.com",
          databaseURL: "https://taskyapp01-default-rtdb.firebaseio.com",
          projectId: "taskyapp01",
          storageBucket: "taskyapp01.appspot.com",
          messagingSenderId: "896305111425",
          appId: "1:896305111425:web:7a6e5e66aeacdc0b718880",
          measurementId: "G-5ZKQ3R8JP4"
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\anava\Documents\TaskyApp\taskyApp\EspolApp\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map