(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-veterinarios-veterinarios-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/veterinarios/veterinarios.page.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/veterinarios/veterinarios.page.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFolderVeterinariosVeterinariosPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar>\n\n    <ion-segment color=\"tertiary\" value=\"adopcion\" >\n\n\n      <ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\n        <ion-icon name=\"newspaper-outline\" size=\"large\"></ion-icon> \n        <ion-label style=\"font-size: 14;\">Publicaciones</ion-label>\n      </ion-segment-button>\n      \n      <ion-segment-button value=\"cursos\" [routerLink]=\"['/cursos']\" routerDirection=\"root\">\n        <ion-icon name=\"library-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 14px;\">Cursos</ion-label>\n      </ion-segment-button>\n    \n    \n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\n        <ion-icon name=\"person-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\n      </ion-segment-button>\n\n      <ion-segment-button value=\"adopcion\" [routerLink]=\"['/adopcion']\" routerDirection=\"root\">\n        <ion-icon name=\"paw-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Adopcion</ion-label>\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-toolbar>\n\n\n  \n    <ion-segment color=\"tertiary\" value=\"veterinarios\">\n\n      \n      <ion-segment-button value=\"mascotas\" [routerLink]=\"['/adopcion']\" routerDirection=\"root\">\n        <ion-icon name=\"fish-outline\" size=\"large\"></ion-icon> <ion-label>Mascotas</ion-label>\n      </ion-segment-button>\n  \n      <ion-segment-button value=\"veterinarios\" [routerLink]=\"['/veterinarios']\" routerDirection=\"root\">\n        <ion-icon name=\"heart-circle-outline\" size=\"large\"></ion-icon> <ion-label>Veterinarios</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  \n  </ion-toolbar>\n\n  <ng-container>\n\n    <div style=\"margin-top: 50px;\" align='center'> \n      <ion-text color=\"medium\">\n\n        <img src=\"https://firebasestorage.googleapis.com/v0/b/taskyapp01.appspot.com/o/iconos%2FproxVeterinario.png?alt=media&token=44539886-4de0-4b08-9786-4ee4f7175e2c\" style=\"width: 55%; height:62%;\" alet=\"foto\">\n        \n        <p style=\"font-size: 25px;\">Próximamente!</p>\n      </ion-text>  \n    </div>\n\n  </ng-container>\n\n\n\n</ion-content>\n\n ";
      /***/
    },

    /***/
    "./src/app/folder/veterinarios/veterinarios-routing.module.ts":
    /*!********************************************************************!*\
      !*** ./src/app/folder/veterinarios/veterinarios-routing.module.ts ***!
      \********************************************************************/

    /*! exports provided: VeterinariosPageRoutingModule */

    /***/
    function srcAppFolderVeterinariosVeterinariosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VeterinariosPageRoutingModule", function () {
        return VeterinariosPageRoutingModule;
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


      var _veterinarios_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./veterinarios.page */
      "./src/app/folder/veterinarios/veterinarios.page.ts");

      var routes = [{
        path: '',
        component: _veterinarios_page__WEBPACK_IMPORTED_MODULE_3__["VeterinariosPage"]
      }];

      var VeterinariosPageRoutingModule = function VeterinariosPageRoutingModule() {
        _classCallCheck(this, VeterinariosPageRoutingModule);
      };

      VeterinariosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VeterinariosPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/folder/veterinarios/veterinarios.module.ts":
    /*!************************************************************!*\
      !*** ./src/app/folder/veterinarios/veterinarios.module.ts ***!
      \************************************************************/

    /*! exports provided: VeterinariosPageModule */

    /***/
    function srcAppFolderVeterinariosVeterinariosModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VeterinariosPageModule", function () {
        return VeterinariosPageModule;
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


      var _veterinarios_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./veterinarios-routing.module */
      "./src/app/folder/veterinarios/veterinarios-routing.module.ts");
      /* harmony import */


      var _veterinarios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./veterinarios.page */
      "./src/app/folder/veterinarios/veterinarios.page.ts");

      var VeterinariosPageModule = function VeterinariosPageModule() {
        _classCallCheck(this, VeterinariosPageModule);
      };

      VeterinariosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _veterinarios_routing_module__WEBPACK_IMPORTED_MODULE_5__["VeterinariosPageRoutingModule"]],
        declarations: [_veterinarios_page__WEBPACK_IMPORTED_MODULE_6__["VeterinariosPage"]]
      })], VeterinariosPageModule);
      /***/
    },

    /***/
    "./src/app/folder/veterinarios/veterinarios.page.scss":
    /*!************************************************************!*\
      !*** ./src/app/folder/veterinarios/veterinarios.page.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFolderVeterinariosVeterinariosPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci92ZXRlcmluYXJpb3MvdmV0ZXJpbmFyaW9zLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/folder/veterinarios/veterinarios.page.ts":
    /*!**********************************************************!*\
      !*** ./src/app/folder/veterinarios/veterinarios.page.ts ***!
      \**********************************************************/

    /*! exports provided: VeterinariosPage */

    /***/
    function srcAppFolderVeterinariosVeterinariosPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VeterinariosPage", function () {
        return VeterinariosPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var VeterinariosPage = /*#__PURE__*/function () {
        function VeterinariosPage() {
          _classCallCheck(this, VeterinariosPage);
        }

        _createClass(VeterinariosPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return VeterinariosPage;
      }();

      VeterinariosPage.ctorParameters = function () {
        return [];
      };

      VeterinariosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-veterinarios',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./veterinarios.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/veterinarios/veterinarios.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./veterinarios.page.scss */
        "./src/app/folder/veterinarios/veterinarios.page.scss"))["default"]]
      })], VeterinariosPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=folder-veterinarios-veterinarios-module-es5.js.map