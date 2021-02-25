(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-adopcion-adopcion-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/adopcion/adopcion.page.html":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/adopcion/adopcion.page.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFolderAdopcionAdopcionPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\r\n  <ion-toolbar>\r\n\r\n    <ion-segment color=\"tertiary\" value=\"adopcion\" >\r\n\r\n\r\n      <ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\r\n        <ion-icon name=\"newspaper-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Publicaciones</ion-label>\r\n      </ion-segment-button>\r\n      \r\n      <ion-segment-button value=\"cursos\" [routerLink]=\"['/cursos']\" routerDirection=\"root\">\r\n        <ion-icon name=\"library-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 14px;\">Cursos</ion-label>\r\n      </ion-segment-button>\r\n    \r\n    \r\n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-icon name=\"person-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\r\n      </ion-segment-button>\r\n\r\n      <ion-segment-button value=\"adopcion\" [routerLink]=\"['/adopcion']\" routerDirection=\"root\">\r\n        <ion-icon name=\"paw-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Adopcion</ion-label>\r\n      </ion-segment-button>\r\n\r\n    </ion-segment>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-toolbar>\r\n\r\n\r\n  \r\n    <ion-segment color=\"tertiary\" value=\"mascotas\">\r\n\r\n      \r\n      <ion-segment-button value=\"mascotas\" [routerLink]=\"['/adopcion']\" routerDirection=\"root\">\r\n        <ion-icon name=\"fish-outline\" size=\"large\"></ion-icon> <ion-label>Mascotas</ion-label>\r\n      </ion-segment-button>\r\n  \r\n      <ion-segment-button value=\"veterinarios\" [routerLink]=\"['/veterinarios']\" routerDirection=\"root\">\r\n        <ion-icon name=\"heart-circle-outline\" size=\"large\"></ion-icon> <ion-label>Veterinarios</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  \r\n  </ion-toolbar>\r\n\r\n\r\n  <ion-searchbar\r\n    color=\"light\" \r\n    placeholder = \"Buscar mascota...\"\r\n    animated\r\n\r\n    (ionChange)=\"buscar($event)\">\r\n    </ion-searchbar>\r\n\r\n    <ion-item>\r\n      <ion-label>Filtrar por:</ion-label> \r\n      <ion-select #filtro value= '' placeholder='Seleccione ' (ionChange)='onChange(filtro.value)'>\r\n        <ion-select-option selected value=''>Todos</ion-select-option>\r\n        <ion-select-option value='A'>Aves</ion-select-option>\r\n        <ion-select-option value='G'>Gatos</ion-select-option>\r\n        <ion-select-option value='P'>Perros</ion-select-option>\r\n        <ion-select-option value='O'>Otros</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n  \r\n  <ng-container *ngIf=\"!getDatos()\">\r\n    <ng-container *ngFor=\"let adopcion of adopciones | filtroAdopcion: textoBuscar\">\r\n      \r\n      <ion-card *ngIf=\"adopcion.Tipo == opcionfiltro ||  false== opcionfiltro\" style=\"padding: 5px;\">\r\n        <ion-item  (click)='aumentarVisita(adopcion.id,adopcion)'>\r\n         \r\n          <ion-avatar style=\"height: 50px;width: 50px;margin-right: 7.5px;\">\r\n            <img  src=\"{{adopcion.Foto1}}\">\r\n          </ion-avatar>\r\n\r\n\r\n          <ion-card-title>{{adopcion.Titulo}}</ion-card-title>  \r\n\r\n          \r\n          \r\n            <img *ngIf=\"adopcion.Tipo == 'P'\" slot='end' style = 'width: 45px;height: 45px;' src=\"https://firebasestorage.googleapis.com/v0/b/taskyapp01.appspot.com/o/Animales%2Fdog.png?alt=media&token=181088e4-85a4-4f4a-a31b-a5e561bd3c23\">\r\n          \r\n\r\n          \r\n          <img *ngIf=\"adopcion.Tipo == 'G'\" slot='end' style = 'width: 45px;height: 45px;' src=\"https://firebasestorage.googleapis.com/v0/b/taskyapp01.appspot.com/o/Animales%2Fcat.png?alt=media&token=add2efa5-39bc-4fd1-8f33-e245f216ffc1\">\r\n          \r\n\r\n          \r\n          <img  *ngIf=\"adopcion.Tipo == 'A'\" slot='end' style = 'width: 45px;height: 45px;' src=\"https://firebasestorage.googleapis.com/v0/b/taskyapp01.appspot.com/o/Animales%2Fbird.png?alt=media&token=ab0cbd77-b221-4b10-b315-7fa48777adef\">\r\n          \r\n          \r\n          <img slot='end' style = 'width: 45px;height: 45px;' *ngIf=\"adopcion.Tipo == 'O'\" src=\"https://firebasestorage.googleapis.com/v0/b/taskyapp01.appspot.com/o/Animales%2Fother.png?alt=media&token=349e8158-88d9-442d-a164-32f0c78627ba\">\r\n\r\n\r\n        </ion-item>       \r\n        \r\n        \r\n          \r\n\r\n          \r\n       \r\n     \r\n        <!-- <ion-card-content (click)='aumentarVisita(adopcion.id,adopcion)'>\r\n          {{adopcion.Descripcion}}\r\n        </ion-card-content>\r\n\r\n        <ng-container > -->\r\n          <ion-item *ngIf=\"miId == adopcion.Usuario\">\r\n            \r\n            <!-- <label>{{adopcion.Fecha | date:'yyyy/MM/dd'}}</label> -->\r\n            \r\n            <ion-icon  name=\"create-outline\" slot='end'  [routerLink]=\"['/adopcion-editar',adopcion.id]\"></ion-icon>\r\n            <ion-icon name=\"trash-outline\" slot='end' color='danger'(click)=\"alert(adopcion.id)\"></ion-icon>\r\n            <ion-button fill=\"outline\" slot='end' (click)='aumentarVisita(adopcion.id,adopcion)'><ion-icon name=\"eye-outline\"></ion-icon><label style=\"font-size: 12;margin-left: 7.5px;\" >{{adopcion.Visitas}}</label></ion-button>\r\n          </ion-item>\r\n\r\n       \r\n        \r\n\r\n        \r\n      </ion-card>\r\n      \r\n      \r\n    </ng-container>\r\n  </ng-container>\r\n\r\n  \r\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button [routerLink]=\"['/adopcion-crear']\" routerDirection=\"root\">\r\n     <ion-icon name=\"add-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n</ion-content>\r\n\r\n ";
      /***/
    },

    /***/
    "./src/app/folder/adopcion/adopcion-routing.module.ts":
    /*!************************************************************!*\
      !*** ./src/app/folder/adopcion/adopcion-routing.module.ts ***!
      \************************************************************/

    /*! exports provided: AdopcionPageRoutingModule */

    /***/
    function srcAppFolderAdopcionAdopcionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdopcionPageRoutingModule", function () {
        return AdopcionPageRoutingModule;
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


      var _adopcion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./adopcion.page */
      "./src/app/folder/adopcion/adopcion.page.ts");

      var routes = [{
        path: '',
        component: _adopcion_page__WEBPACK_IMPORTED_MODULE_3__["AdopcionPage"]
      }];

      var AdopcionPageRoutingModule = function AdopcionPageRoutingModule() {
        _classCallCheck(this, AdopcionPageRoutingModule);
      };

      AdopcionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AdopcionPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/folder/adopcion/adopcion.module.ts":
    /*!****************************************************!*\
      !*** ./src/app/folder/adopcion/adopcion.module.ts ***!
      \****************************************************/

    /*! exports provided: AdopcionPageModule */

    /***/
    function srcAppFolderAdopcionAdopcionModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdopcionPageModule", function () {
        return AdopcionPageModule;
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


      var _adopcion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./adopcion-routing.module */
      "./src/app/folder/adopcion/adopcion-routing.module.ts");
      /* harmony import */


      var _adopcion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./adopcion.page */
      "./src/app/folder/adopcion/adopcion.page.ts");
      /* harmony import */


      var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/pipes/pipes.module */
      "./src/app/pipes/pipes.module.ts");

      var AdopcionPageModule = function AdopcionPageModule() {
        _classCallCheck(this, AdopcionPageModule);
      };

      AdopcionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _adopcion_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdopcionPageRoutingModule"]],
        declarations: [_adopcion_page__WEBPACK_IMPORTED_MODULE_6__["AdopcionPage"]]
      })], AdopcionPageModule);
      /***/
    },

    /***/
    "./src/app/folder/adopcion/adopcion.page.scss":
    /*!****************************************************!*\
      !*** ./src/app/folder/adopcion/adopcion.page.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFolderAdopcionAdopcionPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9hZG9wY2lvbi9hZG9wY2lvbi5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/folder/adopcion/adopcion.page.ts":
    /*!**************************************************!*\
      !*** ./src/app/folder/adopcion/adopcion.page.ts ***!
      \**************************************************/

    /*! exports provided: AdopcionPage */

    /***/
    function srcAppFolderAdopcionAdopcionPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdopcionPage", function () {
        return AdopcionPage;
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


      var src_app_services_adopcion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/adopcion.service */
      "./src/app/services/adopcion.service.ts");

      var AdopcionPage = /*#__PURE__*/function () {
        function AdopcionPage(activateRoute, adopcionService, alertCtrt, router) {
          _classCallCheck(this, AdopcionPage);

          this.activateRoute = activateRoute;
          this.adopcionService = adopcionService;
          this.alertCtrt = alertCtrt;
          this.router = router;
          this.adopciones = [];
          this.textoBuscar = '';
          this.opcionfiltro = '';
        }

        _createClass(AdopcionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.miId = localStorage.getItem('userId');
            this.adopcionService.getAdopciones().subscribe(function (res) {
              return _this.adopciones = res;
            });
          }
        }, {
          key: "getDatos",
          value: function getDatos() {
            for (var i = 0; i < this.adopciones.length; i++) {
              return false;
            }

            return true;
          }
        }, {
          key: "onChange",
          value: function onChange(filtro) {
            this.opcionfiltro = filtro;
          }
        }, {
          key: "aumentarVisita",
          value: function aumentarVisita(id, adopcion) {
            adopcion.Visitas = adopcion.Visitas + 1; //console.log("fff", publicacion.Visitas)
            //[routerLink]="['/curso-detalle-anuncio',publicacion.id]"

            this.adopcionService.updateAdopcion(id, adopcion);
            this.router.navigate(['/adopcion-detalle', adopcion.id, adopcion.Usuario]);
          }
        }, {
          key: "buscar",
          value: function buscar(event) {
            var texto = event.target.value;
            this.textoBuscar = texto;
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
            this.adopcionService.removeAdopcion(id);
          }
        }]);

        return AdopcionPage;
      }();

      AdopcionPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_services_adopcion_service__WEBPACK_IMPORTED_MODULE_4__["AdopcionService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AdopcionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adopcion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./adopcion.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/adopcion/adopcion.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./adopcion.page.scss */
        "./src/app/folder/adopcion/adopcion.page.scss"))["default"]]
      })], AdopcionPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=folder-adopcion-adopcion-module-es5.js.map