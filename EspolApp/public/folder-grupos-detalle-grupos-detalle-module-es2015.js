(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-grupos-detalle-grupos-detalle-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/grupos-detalle/grupos-detalle.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/grupos-detalle/grupos-detalle.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\r\n  <ion-toolbar>\r\n\r\n    <ion-segment color=\"tertiary\" value=\"cursos\" >\r\n \r\n      <!-- <ion-segment-button *ngIf=\"Rol==Ayudante\" value=\"mis-ayudantias\" [routerLink]=\"['/mis-ayudantias']\" routerDirection=\"root\">\r\n        <ion-icon name=\"file-tray-stacked-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Mis Cursos</ion-label>\r\n      </ion-segment-button> -->\r\n\r\n      <ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\r\n        <ion-icon name=\"newspaper-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Publicaciones</ion-label>\r\n      </ion-segment-button>\r\n      \r\n      <ion-segment-button value=\"cursos\" [routerLink]=\"['/cursos']\" routerDirection=\"root\">\r\n        <ion-icon name=\"library-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 14px;\">Cursos</ion-label>\r\n      </ion-segment-button>\r\n    \r\n    \r\n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-icon name=\"person-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\r\n      </ion-segment-button>\r\n\r\n  \r\n\r\n  \r\n\r\n</ion-segment>\r\n\r\n</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <!-- <ion-segment color=\"tertiary\" value=\"anuncio\">\r\n\r\n    <ion-segment-button value=\"anuncios\" layout=\"icon-start\" [routerLink]=\"['/curso-detalle',id, nombreCurso]\" routerDirection=\"root\">\r\n      <ion-icon name=\"megaphone-outline\" size=\"large\"></ion-icon> <ion-label>Anuncios</ion-label>\r\n    </ion-segment-button>\r\n    \r\n    <ion-segment-button value=\"ayudantes\" layout=\"icon-start\"  [routerLink]=\"['/curso-ayudantes',id, nombreCurso]\" routerDirection=\"root\">\r\n      <ion-icon name=\"people-outline\" size=\"large\"></ion-icon> <ion-label>Ayudantes</ion-label>\r\n    </ion-segment-button>\r\n\r\n   \r\n  </ion-segment> -->\r\n\r\n\r\n  <ion-card>\r\n\r\n    <div align='center' style=\"margin-top: 7.5px;margin-bottom: 7.5px;\">\r\n     \r\n      \r\n        <ion-label style=\"font-size: 23.5px;font-weight: bold;\">{{grupo.Nombre}}</ion-label>\r\n     \r\n\r\n    </div>\r\n\r\n    \r\n\r\n    <ion-item>\r\n\r\n      <ion-img id=\"blah\" src=\"{{grupo.Imagen}}\" alt=\"your image\" style=\"margin-top:2.5px;margin-bottom: 3.5px;height: 250px;width: 250px;margin:auto;\"></ion-img>\r\n\r\n    </ion-item>\r\n    <!-- <ion-img src=\"{{usuario.FotoPerfil}}\" style=\"margin-top:7.5px;margin-bottom: 7.5px;\"></ion-img> -->\r\n    <!-- <ion-card-header>\r\n      <ion-card-title>Correo: {{usuario.Correo}}</ion-card-title>\r\n    </ion-card-header> -->\r\n\r\n    \r\n    \r\n    <ion-item>\r\n      \r\n      <ion-label style=\"font-size: 15px;\">{{grupo.Descripcion}}</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <a href= '{{grupo.Link}}'><ion-icon name=\"person-add-outline\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon></a>\r\n      <ion-label>Link grupo</ion-label>\r\n    </ion-item>\r\n    \r\n\r\n   \r\n\r\n    <!-- <ion-item>\r\n\r\n      \r\n      <ion-icon name=\"mail-outline\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon>\r\n     \r\n      <a href=\"mailto:adanavarrete15@gmail.com\">Enviar</a>\r\n      <ion-label>Correo: {{usuario.Correo}}</ion-label>\r\n    </ion-item> -->\r\n\r\n    \r\n  </ion-card>\r\n\r\n \r\n  \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/folder/grupos-detalle/grupos-detalle-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/folder/grupos-detalle/grupos-detalle-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: GruposDetallePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruposDetallePageRoutingModule", function() { return GruposDetallePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _grupos_detalle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grupos-detalle.page */ "./src/app/folder/grupos-detalle/grupos-detalle.page.ts");




const routes = [
    {
        path: '',
        component: _grupos_detalle_page__WEBPACK_IMPORTED_MODULE_3__["GruposDetallePage"]
    }
];
let GruposDetallePageRoutingModule = class GruposDetallePageRoutingModule {
};
GruposDetallePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GruposDetallePageRoutingModule);



/***/ }),

/***/ "./src/app/folder/grupos-detalle/grupos-detalle.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/folder/grupos-detalle/grupos-detalle.module.ts ***!
  \****************************************************************/
/*! exports provided: GruposDetallePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruposDetallePageModule", function() { return GruposDetallePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _grupos_detalle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grupos-detalle-routing.module */ "./src/app/folder/grupos-detalle/grupos-detalle-routing.module.ts");
/* harmony import */ var _grupos_detalle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grupos-detalle.page */ "./src/app/folder/grupos-detalle/grupos-detalle.page.ts");







let GruposDetallePageModule = class GruposDetallePageModule {
};
GruposDetallePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _grupos_detalle_routing_module__WEBPACK_IMPORTED_MODULE_5__["GruposDetallePageRoutingModule"]
        ],
        declarations: [_grupos_detalle_page__WEBPACK_IMPORTED_MODULE_6__["GruposDetallePage"]]
    })
], GruposDetallePageModule);



/***/ }),

/***/ "./src/app/folder/grupos-detalle/grupos-detalle.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/folder/grupos-detalle/grupos-detalle.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9ncnVwb3MtZGV0YWxsZS9ncnVwb3MtZGV0YWxsZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/folder/grupos-detalle/grupos-detalle.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/folder/grupos-detalle/grupos-detalle.page.ts ***!
  \**************************************************************/
/*! exports provided: GruposDetallePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruposDetallePage", function() { return GruposDetallePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_models_grupos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/grupos */ "./src/app/models/grupos.ts");
/* harmony import */ var src_app_services_grupos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/grupos.service */ "./src/app/services/grupos.service.ts");





let GruposDetallePage = class GruposDetallePage {
    constructor(activateRoute, grupoService) {
        this.activateRoute = activateRoute;
        this.grupoService = grupoService;
        this.grupo = new src_app_models_grupos__WEBPACK_IMPORTED_MODULE_3__["Grupos"]();
        this.grupos = [];
    }
    ngOnInit() {
        this.myId = localStorage.getItem('userId');
        this.activateRoute.paramMap.subscribe(paramMap => {
            const idGrupo = paramMap.get('id');
            this.id = idGrupo;
            this.grupoService.getGrupo(idGrupo).subscribe(res => { this.grupo = res; });
            // this.actividadService.getActividad(idActividad).subscribe(res => this.actividad =res);
        });
    }
};
GruposDetallePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_grupos_service__WEBPACK_IMPORTED_MODULE_4__["GruposService"] }
];
GruposDetallePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grupos-detalle',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./grupos-detalle.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/grupos-detalle/grupos-detalle.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./grupos-detalle.page.scss */ "./src/app/folder/grupos-detalle/grupos-detalle.page.scss")).default]
    })
], GruposDetallePage);



/***/ })

}]);
//# sourceMappingURL=folder-grupos-detalle-grupos-detalle-module-es2015.js.map