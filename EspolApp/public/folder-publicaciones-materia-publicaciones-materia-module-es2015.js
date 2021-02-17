(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-publicaciones-materia-publicaciones-materia-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/publicaciones-materia/publicaciones-materia.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/publicaciones-materia/publicaciones-materia.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>publicaciones-materia</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/folder/publicaciones-materia/publicaciones-materia-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/folder/publicaciones-materia/publicaciones-materia-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: PublicacionesMateriaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicacionesMateriaPageRoutingModule", function() { return PublicacionesMateriaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _publicaciones_materia_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./publicaciones-materia.page */ "./src/app/folder/publicaciones-materia/publicaciones-materia.page.ts");




const routes = [
    {
        path: '',
        component: _publicaciones_materia_page__WEBPACK_IMPORTED_MODULE_3__["PublicacionesMateriaPage"]
    }
];
let PublicacionesMateriaPageRoutingModule = class PublicacionesMateriaPageRoutingModule {
};
PublicacionesMateriaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PublicacionesMateriaPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/publicaciones-materia/publicaciones-materia.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/folder/publicaciones-materia/publicaciones-materia.module.ts ***!
  \******************************************************************************/
/*! exports provided: PublicacionesMateriaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicacionesMateriaPageModule", function() { return PublicacionesMateriaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _publicaciones_materia_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./publicaciones-materia-routing.module */ "./src/app/folder/publicaciones-materia/publicaciones-materia-routing.module.ts");
/* harmony import */ var _publicaciones_materia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./publicaciones-materia.page */ "./src/app/folder/publicaciones-materia/publicaciones-materia.page.ts");







let PublicacionesMateriaPageModule = class PublicacionesMateriaPageModule {
};
PublicacionesMateriaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _publicaciones_materia_routing_module__WEBPACK_IMPORTED_MODULE_5__["PublicacionesMateriaPageRoutingModule"]
        ],
        declarations: [_publicaciones_materia_page__WEBPACK_IMPORTED_MODULE_6__["PublicacionesMateriaPage"]]
    })
], PublicacionesMateriaPageModule);



/***/ }),

/***/ "./src/app/folder/publicaciones-materia/publicaciones-materia.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/folder/publicaciones-materia/publicaciones-materia.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9wdWJsaWNhY2lvbmVzLW1hdGVyaWEvcHVibGljYWNpb25lcy1tYXRlcmlhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/folder/publicaciones-materia/publicaciones-materia.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/folder/publicaciones-materia/publicaciones-materia.page.ts ***!
  \****************************************************************************/
/*! exports provided: PublicacionesMateriaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicacionesMateriaPage", function() { return PublicacionesMateriaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PublicacionesMateriaPage = class PublicacionesMateriaPage {
    constructor() { }
    ngOnInit() {
    }
};
PublicacionesMateriaPage.ctorParameters = () => [];
PublicacionesMateriaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-publicaciones-materia',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./publicaciones-materia.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/publicaciones-materia/publicaciones-materia.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./publicaciones-materia.page.scss */ "./src/app/folder/publicaciones-materia/publicaciones-materia.page.scss")).default]
    })
], PublicacionesMateriaPage);



/***/ })

}]);
//# sourceMappingURL=folder-publicaciones-materia-publicaciones-materia-module-es2015.js.map