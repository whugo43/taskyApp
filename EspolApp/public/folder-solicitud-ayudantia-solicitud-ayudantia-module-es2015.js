(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-solicitud-ayudantia-solicitud-ayudantia-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/solicitud-ayudantia/solicitud-ayudantia.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/solicitud-ayudantia/solicitud-ayudantia.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Ser Ayudante</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n<label>Para convertirte en ayudante se necesita abonar $5 </label>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/folder/solicitud-ayudantia/solicitud-ayudantia-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/folder/solicitud-ayudantia/solicitud-ayudantia-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: SolicitudAyudantiaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudAyudantiaPageRoutingModule", function() { return SolicitudAyudantiaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _solicitud_ayudantia_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solicitud-ayudantia.page */ "./src/app/folder/solicitud-ayudantia/solicitud-ayudantia.page.ts");




const routes = [
    {
        path: '',
        component: _solicitud_ayudantia_page__WEBPACK_IMPORTED_MODULE_3__["SolicitudAyudantiaPage"]
    }
];
let SolicitudAyudantiaPageRoutingModule = class SolicitudAyudantiaPageRoutingModule {
};
SolicitudAyudantiaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SolicitudAyudantiaPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/solicitud-ayudantia/solicitud-ayudantia.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/folder/solicitud-ayudantia/solicitud-ayudantia.module.ts ***!
  \**************************************************************************/
/*! exports provided: SolicitudAyudantiaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudAyudantiaPageModule", function() { return SolicitudAyudantiaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _solicitud_ayudantia_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./solicitud-ayudantia-routing.module */ "./src/app/folder/solicitud-ayudantia/solicitud-ayudantia-routing.module.ts");
/* harmony import */ var _solicitud_ayudantia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./solicitud-ayudantia.page */ "./src/app/folder/solicitud-ayudantia/solicitud-ayudantia.page.ts");







let SolicitudAyudantiaPageModule = class SolicitudAyudantiaPageModule {
};
SolicitudAyudantiaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _solicitud_ayudantia_routing_module__WEBPACK_IMPORTED_MODULE_5__["SolicitudAyudantiaPageRoutingModule"]
        ],
        declarations: [_solicitud_ayudantia_page__WEBPACK_IMPORTED_MODULE_6__["SolicitudAyudantiaPage"]]
    })
], SolicitudAyudantiaPageModule);



/***/ }),

/***/ "./src/app/folder/solicitud-ayudantia/solicitud-ayudantia.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/folder/solicitud-ayudantia/solicitud-ayudantia.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9zb2xpY2l0dWQtYXl1ZGFudGlhL3NvbGljaXR1ZC1heXVkYW50aWEucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/folder/solicitud-ayudantia/solicitud-ayudantia.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/folder/solicitud-ayudantia/solicitud-ayudantia.page.ts ***!
  \************************************************************************/
/*! exports provided: SolicitudAyudantiaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudAyudantiaPage", function() { return SolicitudAyudantiaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SolicitudAyudantiaPage = class SolicitudAyudantiaPage {
    constructor() { }
    ngOnInit() {
    }
};
SolicitudAyudantiaPage.ctorParameters = () => [];
SolicitudAyudantiaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-solicitud-ayudantia',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./solicitud-ayudantia.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/solicitud-ayudantia/solicitud-ayudantia.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./solicitud-ayudantia.page.scss */ "./src/app/folder/solicitud-ayudantia/solicitud-ayudantia.page.scss")).default]
    })
], SolicitudAyudantiaPage);



/***/ })

}]);
//# sourceMappingURL=folder-solicitud-ayudantia-solicitud-ayudantia-module-es2015.js.map