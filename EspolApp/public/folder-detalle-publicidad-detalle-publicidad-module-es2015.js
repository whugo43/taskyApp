(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-detalle-publicidad-detalle-publicidad-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/detalle-publicidad/detalle-publicidad.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/detalle-publicidad/detalle-publicidad.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\r\n  <ion-toolbar>\r\n\r\n    <ion-segment color=\"tertiary\" value=\"publicaciones\" >\r\n\r\n      <!-- <ion-segment-button *ngIf=\"Rol==Ayudante\" value=\"mis-ayudantias\" [routerLink]=\"['/mis-ayudantias']\" routerDirection=\"root\">\r\n        <ion-icon name=\"file-tray-stacked-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Mis Cursos</ion-label>\r\n      </ion-segment-button> -->\r\n\r\n      <ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\r\n        <ion-icon name=\"newspaper-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Publicaciones</ion-label>\r\n      </ion-segment-button>\r\n      \r\n      <ion-segment-button value=\"cursos\" [routerLink]=\"['/cursos']\" routerDirection=\"root\">\r\n        <ion-icon name=\"library-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 14px;\">Cursos</ion-label>\r\n      </ion-segment-button>\r\n    \r\n    \r\n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-icon name=\"person-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\r\n      </ion-segment-button>\r\n\r\n      <ion-segment-button value=\"citas\" *ngIf = \"mostrarCita == 'Si'\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-icon name=\"flame-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Citas</ion-label>\r\n      </ion-segment-button>\r\n\r\n  \r\n\r\n    </ion-segment>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <label style=\"margin: auto;display: block;font-size: 27px;font-weight: bold;color:black; align-items: center;text-align: center;\">{{detalle.Titulo}}</label>\r\n    </ion-card-header>\r\n    <ion-card-content style=\"margin: auto;display: block;font-size: 19px;color:black; align-items: center;text-align: center;\">\r\n      {{detalle.Descripcion}}\r\n     </ion-card-content>\r\n     \r\n     \r\n     \r\n     <ion-img src=\"{{detalle.Foto}}\" style=\"height: 275px;width: 250px;margin: auto;display: block;margin-top: 7.5px;\"></ion-img>\r\n\r\n     <div align=\"center\" style=\"margin-bottom: 15.5px;\">\r\n      <ion-button  expand=\"full\"  expand=\"full\" href=\"{{detalle.Foto}}\" style=\"width: 50px;height: 50px;\" color=\"light\"><ion-icon name=\"expand-outline\" size=\"large\" ></ion-icon> </ion-button>\r\n     </div>\r\n   \r\n\r\n        \r\n\r\n    \r\n\r\n\r\n    \r\n    <ng-container >\r\n\r\n      <label style=\"margin: auto;display: block;font-size: 17.5px;font-weight: bold;color:black; align-items: center;text-align: center;margin-top: 7.5px;\">Contacto:</label>\r\n\r\n    \r\n      <ion-item>\r\n        <ion-icon name=\"person-outline\" size=\"large\" style=\"margin-right: 8px;\" color=\"success\"></ion-icon>\r\n        <ion-label style=\"font-size: 17px;\">{{detalle.Empresa}}</ion-label>\r\n      </ion-item>\r\n\r\n    \r\n\r\n    <ion-item>\r\n      <a href= 'https://api.whatsapp.com/send?phone={{detalle.Telefono}}'><ion-icon name=\"logo-whatsapp\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon></a>\r\n      <ion-label>{{detalle.Telefono}}</ion-label>\r\n    </ion-item>\r\n\r\n    \r\n\r\n   \r\n  </ng-container>\r\n\r\n  \r\n\r\n\r\n\r\n    \r\n\r\n\r\n    \r\n\r\n  </ion-card>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/folder/detalle-publicidad/detalle-publicidad-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/folder/detalle-publicidad/detalle-publicidad-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: DetallePublicidadPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallePublicidadPageRoutingModule", function() { return DetallePublicidadPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _detalle_publicidad_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalle-publicidad.page */ "./src/app/folder/detalle-publicidad/detalle-publicidad.page.ts");




const routes = [
    {
        path: '',
        component: _detalle_publicidad_page__WEBPACK_IMPORTED_MODULE_3__["DetallePublicidadPage"]
    }
];
let DetallePublicidadPageRoutingModule = class DetallePublicidadPageRoutingModule {
};
DetallePublicidadPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetallePublicidadPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/detalle-publicidad/detalle-publicidad.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/folder/detalle-publicidad/detalle-publicidad.module.ts ***!
  \************************************************************************/
/*! exports provided: DetallePublicidadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallePublicidadPageModule", function() { return DetallePublicidadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _detalle_publicidad_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detalle-publicidad-routing.module */ "./src/app/folder/detalle-publicidad/detalle-publicidad-routing.module.ts");
/* harmony import */ var _detalle_publicidad_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalle-publicidad.page */ "./src/app/folder/detalle-publicidad/detalle-publicidad.page.ts");







let DetallePublicidadPageModule = class DetallePublicidadPageModule {
};
DetallePublicidadPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detalle_publicidad_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetallePublicidadPageRoutingModule"]
        ],
        declarations: [_detalle_publicidad_page__WEBPACK_IMPORTED_MODULE_6__["DetallePublicidadPage"]]
    })
], DetallePublicidadPageModule);



/***/ }),

/***/ "./src/app/folder/detalle-publicidad/detalle-publicidad.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/folder/detalle-publicidad/detalle-publicidad.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9kZXRhbGxlLXB1YmxpY2lkYWQvZGV0YWxsZS1wdWJsaWNpZGFkLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/folder/detalle-publicidad/detalle-publicidad.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/folder/detalle-publicidad/detalle-publicidad.page.ts ***!
  \**********************************************************************/
/*! exports provided: DetallePublicidadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallePublicidadPage", function() { return DetallePublicidadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_models_publicidad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/publicidad */ "./src/app/models/publicidad.ts");
/* harmony import */ var src_app_services_publicidad_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/publicidad.service */ "./src/app/services/publicidad.service.ts");





let DetallePublicidadPage = class DetallePublicidadPage {
    constructor(activateRoute, publicidadService) {
        this.activateRoute = activateRoute;
        this.publicidadService = publicidadService;
        this.detalle = new src_app_models_publicidad__WEBPACK_IMPORTED_MODULE_3__["Publicidad"]();
    }
    ngOnInit() {
        this.activateRoute.paramMap.subscribe(paramMap => {
            const idPublicidad = paramMap.get('id');
            this.id = idPublicidad;
            this.publicidadService.getPublicidadId(idPublicidad).subscribe(res => { this.detalle = res; });
        });
        //*ngIf="getUsuario(publicacion.Estudiante)"
        //this.actividadService.getActividad(idActividad).subscribe(res => this.actividad =res);
    }
};
DetallePublicidadPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_publicidad_service__WEBPACK_IMPORTED_MODULE_4__["PublicidadService"] }
];
DetallePublicidadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalle-publicidad',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detalle-publicidad.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/detalle-publicidad/detalle-publicidad.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detalle-publicidad.page.scss */ "./src/app/folder/detalle-publicidad/detalle-publicidad.page.scss")).default]
    })
], DetallePublicidadPage);



/***/ })

}]);
//# sourceMappingURL=folder-detalle-publicidad-detalle-publicidad-module-es2015.js.map