(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-detalle-veterinarios-detalle-veterinarios-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/detalle-veterinarios/detalle-veterinarios.page.html":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/detalle-veterinarios/detalle-veterinarios.page.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFolderDetalleVeterinariosDetalleVeterinariosPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>detalle-veterinarios</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/folder/detalle-veterinarios/detalle-veterinarios-routing.module.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/folder/detalle-veterinarios/detalle-veterinarios-routing.module.ts ***!
      \************************************************************************************/

    /*! exports provided: DetalleVeterinariosPageRoutingModule */

    /***/
    function srcAppFolderDetalleVeterinariosDetalleVeterinariosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetalleVeterinariosPageRoutingModule", function () {
        return DetalleVeterinariosPageRoutingModule;
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


      var _detalle_veterinarios_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./detalle-veterinarios.page */
      "./src/app/folder/detalle-veterinarios/detalle-veterinarios.page.ts");

      var routes = [{
        path: '',
        component: _detalle_veterinarios_page__WEBPACK_IMPORTED_MODULE_3__["DetalleVeterinariosPage"]
      }];

      var DetalleVeterinariosPageRoutingModule = function DetalleVeterinariosPageRoutingModule() {
        _classCallCheck(this, DetalleVeterinariosPageRoutingModule);
      };

      DetalleVeterinariosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DetalleVeterinariosPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/folder/detalle-veterinarios/detalle-veterinarios.module.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/folder/detalle-veterinarios/detalle-veterinarios.module.ts ***!
      \****************************************************************************/

    /*! exports provided: DetalleVeterinariosPageModule */

    /***/
    function srcAppFolderDetalleVeterinariosDetalleVeterinariosModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetalleVeterinariosPageModule", function () {
        return DetalleVeterinariosPageModule;
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


      var _detalle_veterinarios_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./detalle-veterinarios-routing.module */
      "./src/app/folder/detalle-veterinarios/detalle-veterinarios-routing.module.ts");
      /* harmony import */


      var _detalle_veterinarios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./detalle-veterinarios.page */
      "./src/app/folder/detalle-veterinarios/detalle-veterinarios.page.ts");

      var DetalleVeterinariosPageModule = function DetalleVeterinariosPageModule() {
        _classCallCheck(this, DetalleVeterinariosPageModule);
      };

      DetalleVeterinariosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _detalle_veterinarios_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetalleVeterinariosPageRoutingModule"]],
        declarations: [_detalle_veterinarios_page__WEBPACK_IMPORTED_MODULE_6__["DetalleVeterinariosPage"]]
      })], DetalleVeterinariosPageModule);
      /***/
    },

    /***/
    "./src/app/folder/detalle-veterinarios/detalle-veterinarios.page.scss":
    /*!****************************************************************************!*\
      !*** ./src/app/folder/detalle-veterinarios/detalle-veterinarios.page.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFolderDetalleVeterinariosDetalleVeterinariosPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9kZXRhbGxlLXZldGVyaW5hcmlvcy9kZXRhbGxlLXZldGVyaW5hcmlvcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/folder/detalle-veterinarios/detalle-veterinarios.page.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/folder/detalle-veterinarios/detalle-veterinarios.page.ts ***!
      \**************************************************************************/

    /*! exports provided: DetalleVeterinariosPage */

    /***/
    function srcAppFolderDetalleVeterinariosDetalleVeterinariosPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetalleVeterinariosPage", function () {
        return DetalleVeterinariosPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DetalleVeterinariosPage = /*#__PURE__*/function () {
        function DetalleVeterinariosPage() {
          _classCallCheck(this, DetalleVeterinariosPage);
        }

        _createClass(DetalleVeterinariosPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DetalleVeterinariosPage;
      }();

      DetalleVeterinariosPage.ctorParameters = function () {
        return [];
      };

      DetalleVeterinariosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalle-veterinarios',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./detalle-veterinarios.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/detalle-veterinarios/detalle-veterinarios.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./detalle-veterinarios.page.scss */
        "./src/app/folder/detalle-veterinarios/detalle-veterinarios.page.scss"))["default"]]
      })], DetalleVeterinariosPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=folder-detalle-veterinarios-detalle-veterinarios-module-es5.js.map