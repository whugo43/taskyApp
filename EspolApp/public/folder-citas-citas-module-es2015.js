(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-citas-citas-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/citas/citas.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/citas/citas.page.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar>\n\n    <ion-segment color=\"tertiary\" value=\"citas\" >\n\n      <ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\n        <ion-icon name=\"newspaper-outline\" size=\"large\"></ion-icon> \n        <ion-label style=\"font-size: 14;\">Publicaciones</ion-label>\n      </ion-segment-button>\n      \n      <ion-segment-button value=\"cursos\" [routerLink]=\"['/cursos']\" routerDirection=\"root\">\n        <ion-icon name=\"library-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 14px;\">Cursos</ion-label>\n      </ion-segment-button>\n    \n    \n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\n        <ion-icon name=\"person-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\n      </ion-segment-button>\n\n      <ion-segment-button value=\"citas\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\n        <ion-icon name=\"flame-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Biffis</ion-label>\n      </ion-segment-button>\n\n\n    </ion-segment>\n    \n\n  </ion-toolbar>\n\n</ion-header>\n<ion-content>\n\n\n\n    <ion-segment color=\"tertiary\" value=\"buscar\">\n  \n      <ion-segment-button value=\"buscar\" [routerLink]=\"['/curso-detalle',id, nombreCurso]\" routerDirection=\"root\">\n        <ion-icon name=\"accessibility-outline\" size=\"large\"></ion-icon> <ion-label>Buscar</ion-label>\n      </ion-segment-button>\n      \n      <ion-segment-button value=\"ayudantes\" [routerLink]=\"['/curso-ayudantes',id, nombreCurso]\" routerDirection=\"root\">\n        <ion-icon name=\"chatbubbles-outline\" size=\"large\"></ion-icon> <ion-label>Chats</ion-label>\n      </ion-segment-button>\n  \n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/mi-perfil-cita']\" routerDirection=\"root\">\n        <ion-icon name=\"person-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\n      </ion-segment-button>\n  \n    </ion-segment>\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/folder/citas/citas-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/folder/citas/citas-routing.module.ts ***!
  \******************************************************/
/*! exports provided: CitasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitasPageRoutingModule", function() { return CitasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _citas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./citas.page */ "./src/app/folder/citas/citas.page.ts");




const routes = [
    {
        path: '',
        component: _citas_page__WEBPACK_IMPORTED_MODULE_3__["CitasPage"]
    }
];
let CitasPageRoutingModule = class CitasPageRoutingModule {
};
CitasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CitasPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/citas/citas.module.ts":
/*!**********************************************!*\
  !*** ./src/app/folder/citas/citas.module.ts ***!
  \**********************************************/
/*! exports provided: CitasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitasPageModule", function() { return CitasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _citas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./citas-routing.module */ "./src/app/folder/citas/citas-routing.module.ts");
/* harmony import */ var _citas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./citas.page */ "./src/app/folder/citas/citas.page.ts");







let CitasPageModule = class CitasPageModule {
};
CitasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _citas_routing_module__WEBPACK_IMPORTED_MODULE_5__["CitasPageRoutingModule"]
        ],
        declarations: [_citas_page__WEBPACK_IMPORTED_MODULE_6__["CitasPage"]]
    })
], CitasPageModule);



/***/ }),

/***/ "./src/app/folder/citas/citas.page.scss":
/*!**********************************************!*\
  !*** ./src/app/folder/citas/citas.page.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9jaXRhcy9jaXRhcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/folder/citas/citas.page.ts":
/*!********************************************!*\
  !*** ./src/app/folder/citas/citas.page.ts ***!
  \********************************************/
/*! exports provided: CitasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitasPage", function() { return CitasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CitasPage = class CitasPage {
    constructor() { }
    ngOnInit() {
    }
};
CitasPage.ctorParameters = () => [];
CitasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-citas',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./citas.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/citas/citas.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./citas.page.scss */ "./src/app/folder/citas/citas.page.scss")).default]
    })
], CitasPage);



/***/ })

}]);
//# sourceMappingURL=folder-citas-citas-module-es2015.js.map