(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-perfil-perfil-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/perfil/perfil.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/perfil/perfil.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\r\n  <ion-toolbar>\r\n\r\n    <ion-segment color=\"tertiary\" value=\"perfil\" >\r\n<ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\r\n        <ion-icon name=\"newspaper-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Publicaciones</ion-label>\r\n      </ion-segment-button>\r\n      \r\n      <ion-segment-button value=\"cursos\" [routerLink]=\"['/cursos']\" routerDirection=\"root\">\r\n        <ion-icon name=\"library-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 14px;\">Cursos</ion-label>\r\n      </ion-segment-button>\r\n    \r\n    \r\n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-icon name=\"person-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\r\n      </ion-segment-button>\r\n\r\n      <ion-segment-button value=\"adopcion\" [routerLink]=\"['/adopcion']\" routerDirection=\"root\">\r\n        <ion-icon name=\"paw-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Adopcion</ion-label>\r\n      </ion-segment-button>\r\n  \r\n\r\n  \r\n\r\n    </ion-segment>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  \r\n  <ion-img class=\"circle-pic\"  src=\"{{user.FotoPerfil}}\" ></ion-img>\r\n\r\n  <ion-card>\r\n    <ion-item>\r\n      <ion-icon name=\"person-outline\" size=\"large\" style=\"margin-right: 8px;\"></ion-icon>\r\n      <ion-label style=\"font-size: 17px;\">{{user.Nombre}} {{user.Apellido}}</ion-label>\r\n    </ion-item>\r\n  \r\n    <ion-item>\r\n      <ion-icon name=\"mail-outline\" size=\"large\" style=\"margin-right: 8px;\"></ion-icon>\r\n      <ion-label style=\"font-size: 17px;\">{{user.Correo}}</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-icon name=\"call-outline\" size=\"large\" style=\"margin-right: 8px;\"></ion-icon>\r\n      <ion-label style=\"font-size: 17px;\">{{user.Telefono}}</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-icon name=\"megaphone-outline\" size=\"large\" style=\"margin-right: 8px;\"></ion-icon>\r\n      <ion-label style=\"font-size: 17px;\">{{user.Publicaciones}}</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-icon name=\"paw-outline\" size=\"large\" style=\"margin-right: 8px;\"></ion-icon>\r\n      <ion-label style=\"font-size: 17px;\">{{user.Rol}}</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-icon routerLink=\"/perfil-update\" name=\"create-outline\" size=\"large\" style=\"margin-right: 8px;\" layout=\"icon-end\" slot=\"end\"></ion-icon>\r\n\r\n    </ion-item>\r\n  \r\n  </ion-card>\r\n\r\n  <div align=\"center\" style=\"align-items: center;justify-content: center;align-content: center;margin-top:15.5px;margin-bottom: 7.5px;\">\r\n\r\n    \r\n    <ion-item *ngIf=\"user.Rol == 'Ayudante'\" style=\"margin-top: 5px;\">\r\n      <ion-button  style=\"width: 250px;height: 45px;margin:auto;\" [routerLink]=\"['/mis-ayudantias']\">\r\n        <ion-icon name=\"file-tray-stacked-outline\" size=\"large\" style=\"margin-right: 8px;\"></ion-icon>\r\n        <ion-label style=\"font-size: 17px;\">Mis Cursos</ion-label>\r\n      </ion-button>\r\n\r\n    </ion-item>\r\n\r\n    <ion-item *ngIf=\"user.Rol == 'Estudiante'\" style=\"margin-top: 5px;\">\r\n      <ion-button  style=\"width: 250px;height: 45px;margin:auto;\" (click)=\"serAyudante()\" color=\"success\">\r\n        <ion-icon name=\"school-outline\" size=\"large\" style=\"margin-right: 8px;\"></ion-icon>\r\n        <ion-label style=\"font-size: 17px;\">Ser ayudante</ion-label>\r\n      </ion-button>\r\n\r\n    </ion-item>\r\n    \r\n\r\n    \r\n    <ion-item *ngIf=\"user.Rol == 'Ayudante' && user.Premium==false\" style=\"margin-top: 5px;\">\r\n      <ion-button  style=\"width: 250px;height: 45px;margin:auto;\" (click)=\"serPremium()\" color=\"success\">\r\n        <ion-icon name=\"school-outline\" size=\"large\" style=\"margin-right: 8px;\"></ion-icon>\r\n        <ion-label style=\"font-size: 17px;\">Ser premium</ion-label>\r\n      </ion-button>\r\n\r\n    </ion-item>\r\n\r\n    <!-- <ion-item *ngIf=\"user.Citas == false\" style=\"margin-top: 5px;\">\r\n      <ion-button  style=\"width: 250px;height: 45px;margin:auto;\" [routerLink]=\"['/previo-citas']\" color=\"success\">\r\n        <ion-icon name=\"people-outline\" size=\"large\" style=\"margin-right: 8px;\"></ion-icon>\r\n        <ion-label style=\"font-size: 17px;\">App Citas</ion-label>\r\n      </ion-button>\r\n\r\n    </ion-item> -->\r\n    \r\n\r\n    <ion-item style=\"margin-top: 5px;margin-bottom: 10px;\">\r\n      <ion-button style=\"width: 250px;height: 45px;margin-top:12.5px;margin:auto;\" color=\"danger\" (click)=\"logOutUser()\">\r\n        <ion-icon name=\"log-out-outline\" size=\"large\" style=\"margin-right: 8px;\"></ion-icon>\r\n        <ion-label style=\"font-size: 17px;\">Cerrar Sesión</ion-label>\r\n      </ion-button>\r\n\r\n    </ion-item>\r\n\r\n    \r\n\r\n\r\n  \r\n  \r\n</div>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button routerLink=\"/sugerencias\">\r\n     <ion-icon name=\"help-circle-outline\" size=\"large\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n</ion-content>\r\n<style>\r\n  .circle-pic {     \r\n    width: 55%;\r\n    height: 35%;\r\n    margin: auto;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n    margin-top: 10px;\r\n    /* -webkit-border-radius: 50%;\r\n    border-radius: 50%;\r\n    border-width: 50px; */\r\n\r\n  }\r\n</style>");

/***/ }),

/***/ "./src/app/folder/perfil/perfil-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/folder/perfil/perfil-routing.module.ts ***!
  \********************************************************/
/*! exports provided: PerfilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageRoutingModule", function() { return PerfilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil.page */ "./src/app/folder/perfil/perfil.page.ts");




const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_3__["PerfilPage"]
    }
];
let PerfilPageRoutingModule = class PerfilPageRoutingModule {
};
PerfilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PerfilPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/perfil/perfil.module.ts":
/*!************************************************!*\
  !*** ./src/app/folder/perfil/perfil.module.ts ***!
  \************************************************/
/*! exports provided: PerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfil-routing.module */ "./src/app/folder/perfil/perfil-routing.module.ts");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil.page */ "./src/app/folder/perfil/perfil.page.ts");







let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilPageRoutingModule"]
        ],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]]
    })
], PerfilPageModule);



/***/ }),

/***/ "./src/app/folder/perfil/perfil.page.scss":
/*!************************************************!*\
  !*** ./src/app/folder/perfil/perfil.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9wZXJmaWwvcGVyZmlsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/folder/perfil/perfil.page.ts":
/*!**********************************************!*\
  !*** ./src/app/folder/perfil/perfil.page.ts ***!
  \**********************************************/
/*! exports provided: PerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPage", function() { return PerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_models_usuarios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/usuarios */ "./src/app/models/usuarios.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");






let PerfilPage = class PerfilPage {
    constructor(usuarioService, alertCtrt, authService) {
        this.usuarioService = usuarioService;
        this.alertCtrt = alertCtrt;
        this.authService = authService;
        this.user = new src_app_models_usuarios__WEBPACK_IMPORTED_MODULE_3__["Usuarios"]();
    }
    ngOnInit() {
        this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => { this.user = res; });
        this.mostrarCita = localStorage.getItem('Citas');
        console.log('citas: ', this.mostrarCita);
    }
    logOutUser() {
        this.authService.logOutUser();
    }
    serAyudante() {
        this.user.EsperaAyudantia = true;
        this.usuarioService.updateUsuario(localStorage.getItem('userId'), this.user)
            .then(res => {
            this.failedAlert();
        });
    }
    serPremium() {
        this.user.EsperaPremium = true;
        this.usuarioService.updateUsuario(localStorage.getItem('userId'), this.user)
            .then(res => {
            this.failedAlert();
        });
    }
    failedAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrt.create({
                cssClass: 'my-custom-class',
                header: "Genial!",
                message: 'Pronto estaremos en contacto contigo por whatsapp!',
                buttons: [{
                        text: 'OK',
                        handler: () => {
                        }
                    }]
            });
            yield alert.present();
        });
    }
};
PerfilPage.ctorParameters = () => [
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
PerfilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-perfil',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./perfil.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/perfil/perfil.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./perfil.page.scss */ "./src/app/folder/perfil/perfil.page.scss")).default]
    })
], PerfilPage);



/***/ })

}]);
//# sourceMappingURL=folder-perfil-perfil-module-es2015.js.map