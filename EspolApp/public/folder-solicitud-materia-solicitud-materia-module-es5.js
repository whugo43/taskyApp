(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-solicitud-materia-solicitud-materia-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/solicitud-materia/solicitud-materia.page.html":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/solicitud-materia/solicitud-materia.page.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFolderSolicitudMateriaSolicitudMateriaPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>solicitud-materia</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/folder/solicitud-materia/solicitud-materia-routing.module.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/folder/solicitud-materia/solicitud-materia-routing.module.ts ***!
      \******************************************************************************/

    /*! exports provided: SolicitudMateriaPageRoutingModule */

    /***/
    function srcAppFolderSolicitudMateriaSolicitudMateriaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SolicitudMateriaPageRoutingModule", function () {
        return SolicitudMateriaPageRoutingModule;
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


      var _solicitud_materia_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./solicitud-materia.page */
      "./src/app/folder/solicitud-materia/solicitud-materia.page.ts");

      var routes = [{
        path: '',
        component: _solicitud_materia_page__WEBPACK_IMPORTED_MODULE_3__["SolicitudMateriaPage"]
      }];

      var SolicitudMateriaPageRoutingModule = function SolicitudMateriaPageRoutingModule() {
        _classCallCheck(this, SolicitudMateriaPageRoutingModule);
      };

      SolicitudMateriaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SolicitudMateriaPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/folder/solicitud-materia/solicitud-materia.module.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/folder/solicitud-materia/solicitud-materia.module.ts ***!
      \**********************************************************************/

    /*! exports provided: SolicitudMateriaPageModule */

    /***/
    function srcAppFolderSolicitudMateriaSolicitudMateriaModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SolicitudMateriaPageModule", function () {
        return SolicitudMateriaPageModule;
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


      var _solicitud_materia_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./solicitud-materia-routing.module */
      "./src/app/folder/solicitud-materia/solicitud-materia-routing.module.ts");
      /* harmony import */


      var _solicitud_materia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./solicitud-materia.page */
      "./src/app/folder/solicitud-materia/solicitud-materia.page.ts");

      var SolicitudMateriaPageModule = function SolicitudMateriaPageModule() {
        _classCallCheck(this, SolicitudMateriaPageModule);
      };

      SolicitudMateriaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _solicitud_materia_routing_module__WEBPACK_IMPORTED_MODULE_5__["SolicitudMateriaPageRoutingModule"]],
        declarations: [_solicitud_materia_page__WEBPACK_IMPORTED_MODULE_6__["SolicitudMateriaPage"]]
      })], SolicitudMateriaPageModule);
      /***/
    },

    /***/
    "./src/app/folder/solicitud-materia/solicitud-materia.page.scss":
    /*!**********************************************************************!*\
      !*** ./src/app/folder/solicitud-materia/solicitud-materia.page.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFolderSolicitudMateriaSolicitudMateriaPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9zb2xpY2l0dWQtbWF0ZXJpYS9zb2xpY2l0dWQtbWF0ZXJpYS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/folder/solicitud-materia/solicitud-materia.page.ts":
    /*!********************************************************************!*\
      !*** ./src/app/folder/solicitud-materia/solicitud-materia.page.ts ***!
      \********************************************************************/

    /*! exports provided: SolicitudMateriaPage */

    /***/
    function srcAppFolderSolicitudMateriaSolicitudMateriaPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SolicitudMateriaPage", function () {
        return SolicitudMateriaPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SolicitudMateriaPage = /*#__PURE__*/function () {
        function SolicitudMateriaPage() {
          _classCallCheck(this, SolicitudMateriaPage);
        }

        _createClass(SolicitudMateriaPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SolicitudMateriaPage;
      }();

      SolicitudMateriaPage.ctorParameters = function () {
        return [];
      };

      SolicitudMateriaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-solicitud-materia',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./solicitud-materia.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/solicitud-materia/solicitud-materia.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./solicitud-materia.page.scss */
        "./src/app/folder/solicitud-materia/solicitud-materia.page.scss"))["default"]]
      })], SolicitudMateriaPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=folder-solicitud-materia-solicitud-materia-module-es5.js.map