(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-pendiente-pendiente-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/pendiente/pendiente.page.html":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/pendiente/pendiente.page.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFolderPendientePendientePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n\r\n<ion-content>\r\n\r\n<div align='center' style=\"margin-bottom: 25px;margin-top: 35%;width: 85%;margin-left: 7.5%;\">\r\n \r\n    <ion-label style=\"font-size:21px;text-align: center;margin:auto\">Sus datos están siendo verificados! En las siguientes horas le activaremos su cuenta :)</ion-label>\r\n\r\n\r\n</div>\r\n\r\n<ion-img style=\"margin:auto;width: 62%;margin-top:15px;\" src=\"../../assets/image1.png\" alt=\"hola\"></ion-img>\r\n\r\n<div align=\"center\" style=\"margin-top:31px\">\r\n  <ion-button style=\"margin:auto;\" (click)=\"logOutUser()\">Volver</ion-button>\r\n</div>\r\n\r\n\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/folder/pendiente/pendiente-routing.module.ts":
    /*!**************************************************************!*\
      !*** ./src/app/folder/pendiente/pendiente-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: PendientePageRoutingModule */

    /***/
    function srcAppFolderPendientePendienteRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PendientePageRoutingModule", function () {
        return PendientePageRoutingModule;
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


      var _pendiente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pendiente.page */
      "./src/app/folder/pendiente/pendiente.page.ts");

      var routes = [{
        path: '',
        component: _pendiente_page__WEBPACK_IMPORTED_MODULE_3__["PendientePage"]
      }];

      var PendientePageRoutingModule = function PendientePageRoutingModule() {
        _classCallCheck(this, PendientePageRoutingModule);
      };

      PendientePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PendientePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/folder/pendiente/pendiente.module.ts":
    /*!******************************************************!*\
      !*** ./src/app/folder/pendiente/pendiente.module.ts ***!
      \******************************************************/

    /*! exports provided: PendientePageModule */

    /***/
    function srcAppFolderPendientePendienteModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PendientePageModule", function () {
        return PendientePageModule;
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


      var _pendiente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pendiente-routing.module */
      "./src/app/folder/pendiente/pendiente-routing.module.ts");
      /* harmony import */


      var _pendiente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pendiente.page */
      "./src/app/folder/pendiente/pendiente.page.ts");

      var PendientePageModule = function PendientePageModule() {
        _classCallCheck(this, PendientePageModule);
      };

      PendientePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pendiente_routing_module__WEBPACK_IMPORTED_MODULE_5__["PendientePageRoutingModule"]],
        declarations: [_pendiente_page__WEBPACK_IMPORTED_MODULE_6__["PendientePage"]]
      })], PendientePageModule);
      /***/
    },

    /***/
    "./src/app/folder/pendiente/pendiente.page.scss":
    /*!******************************************************!*\
      !*** ./src/app/folder/pendiente/pendiente.page.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFolderPendientePendientePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9wZW5kaWVudGUvcGVuZGllbnRlLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/folder/pendiente/pendiente.page.ts":
    /*!****************************************************!*\
      !*** ./src/app/folder/pendiente/pendiente.page.ts ***!
      \****************************************************/

    /*! exports provided: PendientePage */

    /***/
    function srcAppFolderPendientePendientePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PendientePage", function () {
        return PendientePage;
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


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "./src/app/services/auth.service.ts");

      var PendientePage = /*#__PURE__*/function () {
        function PendientePage(authService) {
          _classCallCheck(this, PendientePage);

          this.authService = authService;
        }

        _createClass(PendientePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logOutUser",
          value: function logOutUser() {
            this.authService.logOutUser();
          }
        }]);

        return PendientePage;
      }();

      PendientePage.ctorParameters = function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      };

      PendientePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pendiente',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./pendiente.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/pendiente/pendiente.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./pendiente.page.scss */
        "./src/app/folder/pendiente/pendiente.page.scss"))["default"]]
      })], PendientePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=folder-pendiente-pendiente-module-es5.js.map