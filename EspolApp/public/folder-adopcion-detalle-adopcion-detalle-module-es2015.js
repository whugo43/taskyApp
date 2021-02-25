(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-adopcion-detalle-adopcion-detalle-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/adopcion-detalle/adopcion-detalle.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/adopcion-detalle/adopcion-detalle.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\r\n  <ion-toolbar>\r\n\r\n    <ion-segment color=\"tertiary\" value=\"adopcion\" >\r\n\r\n\r\n      <ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\r\n        <ion-icon name=\"newspaper-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Publicaciones</ion-label>\r\n      </ion-segment-button>\r\n      \r\n      <ion-segment-button value=\"cursos\" [routerLink]=\"['/cursos']\" routerDirection=\"root\">\r\n        <ion-icon name=\"library-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 14px;\">Cursos</ion-label>\r\n      </ion-segment-button>\r\n    \r\n    \r\n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-icon name=\"person-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\r\n      </ion-segment-button>\r\n\r\n      <ion-segment-button value=\"adopcion\" [routerLink]=\"['/adopcion']\" routerDirection=\"root\">\r\n        <ion-icon name=\"paw-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Adopcion</ion-label>\r\n      </ion-segment-button>\r\n\r\n    </ion-segment>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <label style=\"margin: auto;display: block;font-size: 27px;font-weight: bold;color:black; align-items: center;text-align: center;\">{{adopcion.Titulo}}</label>\r\n      \r\n    </ion-card-header>\r\n\r\n    <ion-card>\r\n      <ion-item>\r\n        <ion-img src=\"{{adopcion.Foto1}}\" style=\"height: 275px;width: 50%;margin: auto\"></ion-img>\r\n        <ion-img *ngIf='adopcion.Foto2!=\"\"' src=\"{{adopcion.Foto2}}\" style=\"margin-left:7.5px;height: 275px;width: 50%;\"></ion-img>\r\n  \r\n      </ion-item>\r\n\r\n    </ion-card>\r\n\r\n    \r\n\r\n    \r\n\r\n    <ion-card-content style=\"margin: auto;display: block;font-size: 19px;color:black; align-items: center;text-align: center;\">\r\n      {{adopcion.Descripcion}}\r\n     </ion-card-content>\r\n     \r\n     \r\n\r\n     <div align=\"center\" style=\"margin-bottom: 15.5px;\">\r\n      <ion-button  expand=\"full\"  expand=\"full\" href=\"{{adopcion.Foto1}}\" style=\"width: 50px;height: 50px;\" color=\"light\"><ion-icon name=\"expand-outline\" size=\"large\" ></ion-icon> </ion-button>\r\n      <ion-button fill=\"outline\" slot='end'><ion-icon name=\"eye-outline\"></ion-icon><label style=\"font-size: 12;margin-left: 7.5px;\" >{{adopcion.Visitas}}</label></ion-button>\r\n     </div>\r\n    <ng-container >\r\n\r\n      <label style=\"margin: auto;display: block;font-size: 17.5px;font-weight: bold;color:black; align-items: center;text-align: center;margin-top: 7.5px;\">Contacto:</label>\r\n\r\n    \r\n      <ion-item>\r\n        <ion-icon name=\"person-outline\" size=\"large\" style=\"margin-right: 8px;\" color=\"success\"></ion-icon>\r\n        <ion-label style=\"font-size: 17px;\">{{user.Nombre}} {{user.Apellido}}</ion-label>\r\n      </ion-item>\r\n    \r\n    <ion-item>\r\n      <a href= 'https://api.whatsapp.com/send?phone={{user.Telefono}}'><ion-icon name=\"logo-whatsapp\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon></a>\r\n      <ion-label>{{user.Telefono}}</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <a href=\"mailto:{{user.Correo}}\"><ion-icon name=\"mail-outline\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon></a>\r\n      <ion-label>{{user.Correo}}</ion-label>\r\n    </ion-item>   \r\n  </ng-container>\r\n  </ion-card>\r\n");

/***/ }),

/***/ "./src/app/folder/adopcion-detalle/adopcion-detalle-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/folder/adopcion-detalle/adopcion-detalle-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: AdopcionDetallePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdopcionDetallePageRoutingModule", function() { return AdopcionDetallePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _adopcion_detalle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adopcion-detalle.page */ "./src/app/folder/adopcion-detalle/adopcion-detalle.page.ts");




const routes = [
    {
        path: '',
        component: _adopcion_detalle_page__WEBPACK_IMPORTED_MODULE_3__["AdopcionDetallePage"]
    }
];
let AdopcionDetallePageRoutingModule = class AdopcionDetallePageRoutingModule {
};
AdopcionDetallePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdopcionDetallePageRoutingModule);



/***/ }),

/***/ "./src/app/folder/adopcion-detalle/adopcion-detalle.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/folder/adopcion-detalle/adopcion-detalle.module.ts ***!
  \********************************************************************/
/*! exports provided: AdopcionDetallePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdopcionDetallePageModule", function() { return AdopcionDetallePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _adopcion_detalle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adopcion-detalle-routing.module */ "./src/app/folder/adopcion-detalle/adopcion-detalle-routing.module.ts");
/* harmony import */ var _adopcion_detalle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adopcion-detalle.page */ "./src/app/folder/adopcion-detalle/adopcion-detalle.page.ts");







let AdopcionDetallePageModule = class AdopcionDetallePageModule {
};
AdopcionDetallePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _adopcion_detalle_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdopcionDetallePageRoutingModule"]
        ],
        declarations: [_adopcion_detalle_page__WEBPACK_IMPORTED_MODULE_6__["AdopcionDetallePage"]]
    })
], AdopcionDetallePageModule);



/***/ }),

/***/ "./src/app/folder/adopcion-detalle/adopcion-detalle.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/folder/adopcion-detalle/adopcion-detalle.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9hZG9wY2lvbi1kZXRhbGxlL2Fkb3BjaW9uLWRldGFsbGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/folder/adopcion-detalle/adopcion-detalle.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/folder/adopcion-detalle/adopcion-detalle.page.ts ***!
  \******************************************************************/
/*! exports provided: AdopcionDetallePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdopcionDetallePage", function() { return AdopcionDetallePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_models_adopcion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/adopcion */ "./src/app/models/adopcion.ts");
/* harmony import */ var src_app_models_usuarios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/usuarios */ "./src/app/models/usuarios.ts");
/* harmony import */ var src_app_services_adopcion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/adopcion.service */ "./src/app/services/adopcion.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");







let AdopcionDetallePage = class AdopcionDetallePage {
    constructor(activateRoute, adopcionService, usuarioService) {
        this.activateRoute = activateRoute;
        this.adopcionService = adopcionService;
        this.usuarioService = usuarioService;
        this.user = new src_app_models_usuarios__WEBPACK_IMPORTED_MODULE_4__["Usuarios"]();
        this.adopcion = new src_app_models_adopcion__WEBPACK_IMPORTED_MODULE_3__["Adopcion"]();
    }
    ngOnInit() {
        this.activateRoute.paramMap.subscribe(paramMap => {
            const idUser = paramMap.get('idUsuario');
            const id = paramMap.get('id');
            this.adopcionService.getAdopcion(id).subscribe(res => this.adopcion = res);
            this.usuarioService.getUsuario(idUser).subscribe(res => this.user = res);
        });
    }
};
AdopcionDetallePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_adopcion_service__WEBPACK_IMPORTED_MODULE_5__["AdopcionService"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"] }
];
AdopcionDetallePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adopcion-detalle',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./adopcion-detalle.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/adopcion-detalle/adopcion-detalle.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./adopcion-detalle.page.scss */ "./src/app/folder/adopcion-detalle/adopcion-detalle.page.scss")).default]
    })
], AdopcionDetallePage);



/***/ })

}]);
//# sourceMappingURL=folder-adopcion-detalle-adopcion-detalle-module-es2015.js.map