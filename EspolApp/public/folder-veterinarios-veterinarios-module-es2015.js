(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-veterinarios-veterinarios-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/veterinarios/veterinarios.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/veterinarios/veterinarios.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\r\n  <ion-toolbar>\r\n\r\n    <ion-segment color=\"tertiary\" value=\"adopcion\" >\r\n\r\n\r\n      <ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\r\n        <ion-icon name=\"newspaper-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Publicaciones</ion-label>\r\n      </ion-segment-button>\r\n      \r\n      <ion-segment-button value=\"cursos\" [routerLink]=\"['/cursos']\" routerDirection=\"root\">\r\n        <ion-icon name=\"library-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 14px;\">Cursos</ion-label>\r\n      </ion-segment-button>\r\n    \r\n    \r\n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-icon name=\"person-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\r\n      </ion-segment-button>\r\n\r\n      <ion-segment-button value=\"adopcion\" [routerLink]=\"['/adopcion']\" routerDirection=\"root\">\r\n        <ion-icon name=\"paw-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Adopcion</ion-label>\r\n      </ion-segment-button>\r\n\r\n    </ion-segment>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-toolbar>\r\n\r\n\r\n  \r\n    <ion-segment color=\"tertiary\" value=\"veterinarios\">\r\n\r\n      \r\n      <ion-segment-button value=\"mascotas\" [routerLink]=\"['/adopcion']\" routerDirection=\"root\">\r\n        <ion-icon name=\"fish-outline\" size=\"large\"></ion-icon> <ion-label>Mascotas</ion-label>\r\n      </ion-segment-button>\r\n  \r\n      <ion-segment-button value=\"veterinarios\" [routerLink]=\"['/veterinarios']\" routerDirection=\"root\">\r\n        <ion-icon name=\"heart-circle-outline\" size=\"large\"></ion-icon> <ion-label>Veterinarios</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  \r\n  </ion-toolbar>\r\n\r\n  \r\n  <ion-searchbar\r\n    color=\"light\" \r\n    placeholder = \"Buscar Veterinario...\"\r\n    animated\r\n\r\n    (ionChange)=\"buscar($event)\">\r\n    </ion-searchbar>\r\n\r\n\r\n  <ng-container *ngIf=\"!getDatos()\">     \r\n      <ion-item *ngFor=\"let veterinario of veterinarios | filtroVeterinarios: textoBuscar\" (click)='aumentarVisita(veterinario.id,veterinario)'>\r\n\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"{{veterinario.Foto}}\">\r\n        </ion-avatar>\r\n\r\n        <!-- <ion-thumbnail slot=\"start\" slot=\"start\">\r\n          <img src=\"{{usuario.FotoPerfil}}\" alet=\"foto\">\r\n        </ion-thumbnail> -->\r\n        <ion-card-title>\r\n          {{veterinario.Nombres}} {{veterinario.Apellidos}}\r\n        </ion-card-title>\r\n\r\n          <ion-list fill=\"outline\" slot='end'>\r\n            <ion-item fill=\"outline\">\r\n              <ion-icon name=\"thumbs-up-outline\" ></ion-icon><ion-label style=\"font-size: 12;margin-left: 7.5px;\" >{{veterinario.Like}}</ion-label>\r\n            </ion-item>\r\n            <ion-item fill=\"outline\">\r\n              <ion-icon name=\"thumbs-down-outline\" ></ion-icon><label style=\"font-size: 12;margin-left: 7.5px;\" >{{veterinario.Dislike}}</label>\r\n            </ion-item>\r\n            \r\n          </ion-list>\r\n          <!-- <div slot=\"end\" style=\"align-items: center;justify-content: center;\"><ion-icon name=\"eye-outline\" ></ion-icon><label style=\"font-size: 12;margin-left: 7.5px;\" >{{ayudante.Visitas}}</label></div> -->\r\n          \r\n        \r\n      </ion-item>\r\n\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"getDatos()\">\r\n\r\n    <div style=\"margin-top: 50px;\" align='center'> \r\n      <ion-text color=\"medium\">\r\n\r\n        <img src=\"https://firebasestorage.googleapis.com/v0/b/taskyapp01.appspot.com/o/iconos%2FproxVeterinario.png?alt=media&token=44539886-4de0-4b08-9786-4ee4f7175e2c\" style=\"width: 55%; height:62%;\" alet=\"foto\">\r\n        \r\n        <p style=\"font-size: 25px;\">Próximamente!</p>\r\n      </ion-text>  \r\n    </div>\r\n \r\n  </ng-container>\r\n\r\n\r\n\r\n</ion-content>\r\n\r\n ");

/***/ }),

/***/ "./src/app/folder/veterinarios/veterinarios-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/folder/veterinarios/veterinarios-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: VeterinariosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VeterinariosPageRoutingModule", function() { return VeterinariosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _veterinarios_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./veterinarios.page */ "./src/app/folder/veterinarios/veterinarios.page.ts");




const routes = [
    {
        path: '',
        component: _veterinarios_page__WEBPACK_IMPORTED_MODULE_3__["VeterinariosPage"]
    }
];
let VeterinariosPageRoutingModule = class VeterinariosPageRoutingModule {
};
VeterinariosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VeterinariosPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/veterinarios/veterinarios.module.ts":
/*!************************************************************!*\
  !*** ./src/app/folder/veterinarios/veterinarios.module.ts ***!
  \************************************************************/
/*! exports provided: VeterinariosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VeterinariosPageModule", function() { return VeterinariosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _veterinarios_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./veterinarios-routing.module */ "./src/app/folder/veterinarios/veterinarios-routing.module.ts");
/* harmony import */ var _veterinarios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./veterinarios.page */ "./src/app/folder/veterinarios/veterinarios.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








let VeterinariosPageModule = class VeterinariosPageModule {
};
VeterinariosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _veterinarios_routing_module__WEBPACK_IMPORTED_MODULE_5__["VeterinariosPageRoutingModule"]
        ],
        declarations: [_veterinarios_page__WEBPACK_IMPORTED_MODULE_6__["VeterinariosPage"]]
    })
], VeterinariosPageModule);



/***/ }),

/***/ "./src/app/folder/veterinarios/veterinarios.page.scss":
/*!************************************************************!*\
  !*** ./src/app/folder/veterinarios/veterinarios.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci92ZXRlcmluYXJpb3MvdmV0ZXJpbmFyaW9zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/folder/veterinarios/veterinarios.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/folder/veterinarios/veterinarios.page.ts ***!
  \**********************************************************/
/*! exports provided: VeterinariosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VeterinariosPage", function() { return VeterinariosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_veterinarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/veterinarios.service */ "./src/app/services/veterinarios.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");







let VeterinariosPage = class VeterinariosPage {
    constructor(activateRoute, veterinariosService, usuarioService, alertCtrt, router) {
        this.activateRoute = activateRoute;
        this.veterinariosService = veterinariosService;
        this.usuarioService = usuarioService;
        this.alertCtrt = alertCtrt;
        this.router = router;
        this.usuarios = [];
        this.veterinarios = [];
        this.desabilitar = false;
        this.resultado = [];
        this.textoBuscar = '';
    }
    ngOnInit() {
        this.rol = localStorage.getItem('Rol');
        this.miId = localStorage.getItem('userId');
        this.veterinariosService.getUsuarios().subscribe(res => this.veterinarios = res);
        this.usuarioService.getUsuarios().subscribe(res => this.usuarios = res);
    }
    getDatos() {
        // this.ayudanteService.getAyudanteMateria(this.id).subscribe(res=> this.ayudantes = res);
        // console.log(this.ayudantes)
        for (let i = 0; i < this.veterinarios.length; i++) {
            return false;
        }
        return true;
    }
    aumentarVisita(id, veterinario) {
        veterinario.Visitas = veterinario.Visitas + 1;
        //console.log("fff", publicacion.Visitas)
        //[routerLink]="['/curso-detalle-anuncio',publicacion.id]"
        this.veterinariosService.updateUsuario(id, veterinario);
        this.router.navigate(['/veterinario-detalle', id]);
    }
    buscar(event) {
        const texto = event.target.value;
        this.textoBuscar = texto;
    }
};
VeterinariosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_veterinarios_service__WEBPACK_IMPORTED_MODULE_3__["VeterinariosService"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
VeterinariosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-veterinarios',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./veterinarios.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/veterinarios/veterinarios.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./veterinarios.page.scss */ "./src/app/folder/veterinarios/veterinarios.page.scss")).default]
    })
], VeterinariosPage);



/***/ })

}]);
//# sourceMappingURL=folder-veterinarios-veterinarios-module-es2015.js.map