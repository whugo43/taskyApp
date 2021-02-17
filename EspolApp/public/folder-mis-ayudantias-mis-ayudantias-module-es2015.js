(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-mis-ayudantias-mis-ayudantias-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/mis-ayudantias/mis-ayudantias.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/mis-ayudantias/mis-ayudantias.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\r\n  <ion-toolbar>\r\n\r\n    <ion-segment color=\"tertiary\" value=\"perfil\" >\r\n\r\n      <!-- <ion-segment-button *ngIf=\"Rol==Ayudante\" value=\"mis-ayudantias\" [routerLink]=\"['/mis-ayudantias']\" routerDirection=\"root\">\r\n        <ion-icon name=\"file-tray-stacked-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Mis Cursos</ion-label>\r\n      </ion-segment-button> -->\r\n\r\n      <ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\r\n        <ion-icon name=\"newspaper-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Publicaciones</ion-label>\r\n      </ion-segment-button>\r\n      \r\n      <ion-segment-button value=\"cursos\" [routerLink]=\"['/cursos']\" routerDirection=\"root\">\r\n        <ion-icon name=\"library-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 14px;\">Cursos</ion-label>\r\n      </ion-segment-button>\r\n    \r\n    \r\n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-icon name=\"person-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\r\n      </ion-segment-button>\r\n      \r\n  \r\n\r\n  \r\n\r\n    </ion-segment>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n   <ion-searchbar\r\n    color=\"light\" \r\n    placeholder = \"Buscar curso...\"\r\n    animated\r\n\r\n    (ionChange)=\"buscar($event)\">\r\n    </ion-searchbar>\r\n\r\n  <ng-container *ngFor=\"let ayudante of ayudantias\">\r\n    <ng-container *ngIf=\"ayudante.Usuario == id\">\r\n      <ng-container *ngFor=\"let curso of cursos | filtroCurso: textoBuscar\">\r\n        <ion-card *ngIf=\"ayudante.Materia == curso.id\" scrollable class = \"item\">\r\n          <ion-item >\r\n      \r\n            <ion-thumbnail slot=\"start\" slot=\"start\" [routerLink]=\"['/mis-comentarios', curso.id]\">\r\n              <img src=\"{{curso.Imagen}}\" alet=\"foto\">\r\n            </ion-thumbnail>\r\n            <ion-card-title style=\"font-size: 17.2px;\" [routerLink]=\"['/mis-comentarios', curso.id]\">{{curso.Nombre}}</ion-card-title>\r\n\r\n            \r\n            <ion-button fill=\"outline\" slot='end'><ion-icon name=\"eye-outline\" ></ion-icon><label style=\"font-size: 12;margin-left: 7.5px;\" >{{ayudante.Visitas}}</label></ion-button>\r\n            <ion-icon name=\"trash-outline\" slot='end' color=\"danger\" (click)=\"alert(ayudante.id)\"></ion-icon>\r\n\r\n          </ion-item>\r\n        \r\n      \r\n        </ion-card>\r\n\r\n      </ng-container>\r\n\r\n    </ng-container>\r\n  </ng-container>\r\n\r\n   <ng-container *ngIf=\"getDatos()\">\r\n\r\n    <div style=\"margin-top: 75px;\" align='center'> \r\n      <ion-text color=\"medium\">\r\n\r\n        <img src=\"https://firebasestorage.googleapis.com/v0/b/taskyapp01.appspot.com/o/iconos%2FmisAyudantias.png?alt=media&token=f0b8c2fd-9eae-4188-9000-fb9ed77978f1\" style=\"width: 55%; height:62%;\" alet=\"foto\">\r\n        \r\n        <p style=\"font-size: 21px;\">No hay ayudantías registradas.</p>\r\n      </ion-text>  \r\n    </div>\r\n  </ng-container>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click) = 'validarCurso()'>\r\n     <ion-icon name=\"add-outline\"></ion-icon>\r\n  </ion-fab-button>\r\n\r\n</ion-fab>\r\n  \r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/folder/mis-ayudantias/mis-ayudantias-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/folder/mis-ayudantias/mis-ayudantias-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: MisAyudantiasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisAyudantiasPageRoutingModule", function() { return MisAyudantiasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mis_ayudantias_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mis-ayudantias.page */ "./src/app/folder/mis-ayudantias/mis-ayudantias.page.ts");




const routes = [
    {
        path: '',
        component: _mis_ayudantias_page__WEBPACK_IMPORTED_MODULE_3__["MisAyudantiasPage"]
    }
];
let MisAyudantiasPageRoutingModule = class MisAyudantiasPageRoutingModule {
};
MisAyudantiasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MisAyudantiasPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/mis-ayudantias/mis-ayudantias.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/folder/mis-ayudantias/mis-ayudantias.module.ts ***!
  \****************************************************************/
/*! exports provided: MisAyudantiasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisAyudantiasPageModule", function() { return MisAyudantiasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _mis_ayudantias_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mis-ayudantias-routing.module */ "./src/app/folder/mis-ayudantias/mis-ayudantias-routing.module.ts");
/* harmony import */ var _mis_ayudantias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mis-ayudantias.page */ "./src/app/folder/mis-ayudantias/mis-ayudantias.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








let MisAyudantiasPageModule = class MisAyudantiasPageModule {
};
MisAyudantiasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mis_ayudantias_routing_module__WEBPACK_IMPORTED_MODULE_5__["MisAyudantiasPageRoutingModule"]
        ],
        declarations: [_mis_ayudantias_page__WEBPACK_IMPORTED_MODULE_6__["MisAyudantiasPage"]]
    })
], MisAyudantiasPageModule);



/***/ }),

/***/ "./src/app/folder/mis-ayudantias/mis-ayudantias.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/folder/mis-ayudantias/mis-ayudantias.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9taXMtYXl1ZGFudGlhcy9taXMtYXl1ZGFudGlhcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/folder/mis-ayudantias/mis-ayudantias.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/folder/mis-ayudantias/mis-ayudantias.page.ts ***!
  \**************************************************************/
/*! exports provided: MisAyudantiasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisAyudantiasPage", function() { return MisAyudantiasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_ayudantes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ayudantes.service */ "./src/app/services/ayudantes.service.ts");
/* harmony import */ var src_app_services_cursos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cursos.service */ "./src/app/services/cursos.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_models_usuarios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/usuarios */ "./src/app/models/usuarios.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








let MisAyudantiasPage = class MisAyudantiasPage {
    constructor(ayudanteService, alertCtrt, usuarioService, router, cursosService) {
        this.ayudanteService = ayudanteService;
        this.alertCtrt = alertCtrt;
        this.usuarioService = usuarioService;
        this.router = router;
        this.cursosService = cursosService;
        this.ayudantias = [];
        this.usuario = new src_app_models_usuarios__WEBPACK_IMPORTED_MODULE_5__["Usuarios"]();
        this.cursos = [];
        this.textoBuscar = '';
    }
    ngOnInit() {
        this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => this.usuario = res);
        console.log(localStorage.getItem("userId"));
        this.id = localStorage.getItem("userId");
        this.ayudanteService.getAyudantes().subscribe(res => this.ayudantias = res);
        this.cursosService.getCursos().subscribe(res => this.cursos = res);
    }
    buscar(event) {
        const texto = event.target.value;
        this.textoBuscar = texto;
    }
    alert(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrt.create({
                cssClass: 'my-custom-class',
                header: "¿Desea eliminar esta materia de sus ayudantias?",
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Elminar',
                        handler: (data) => {
                            this.remove(id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    remove(id) {
        this.ayudanteService.removeAyudante(id);
        this.usuario.Cursos = this.usuario.Cursos - 1;
        this.usuarioService.updateUsuario(this.id, this.usuario);
    }
    validarCurso() {
        if ((this.usuario.Premium) || (this.usuario.Premium == false && this.usuario.Cursos < 2)) {
            this.router.navigate(["/crear-ayudantia"]);
            // this.mostrarBoton = false;//mostrar mensaje.
            //  [routerLink]="['/crear-grupo',id]"
        }
        else {
            this.failedAlertPremium();
        }
    }
    failedAlertPremium() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrt.create({
                cssClass: 'my-custom-class',
                header: "Su cuenta no es premium",
                message: "Máximo puedes registrarte en 2 cursos.",
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Ser premium',
                        handler: (data) => {
                            this.serPremium();
                            console.log('registrar');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    getDatos() {
        for (let i = 0; i < this.ayudantias.length; i++) {
            if (this.ayudantias[i].Usuario == this.id) {
                return false;
            }
        }
        return true;
    }
    serPremium() {
        this.usuario.EsperaPremium = true;
        this.usuarioService.updateUsuario(localStorage.getItem('userId'), this.usuario)
            .then(res => {
            this.failedAlertPremiunMessage();
        });
    }
    failedAlertPremiunMessage() {
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
MisAyudantiasPage.ctorParameters = () => [
    { type: src_app_services_ayudantes_service__WEBPACK_IMPORTED_MODULE_2__["AyudantesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: src_app_services_cursos_service__WEBPACK_IMPORTED_MODULE_3__["CursosService"] }
];
MisAyudantiasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mis-ayudantias',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mis-ayudantias.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/mis-ayudantias/mis-ayudantias.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mis-ayudantias.page.scss */ "./src/app/folder/mis-ayudantias/mis-ayudantias.page.scss")).default]
    })
], MisAyudantiasPage);



/***/ })

}]);
//# sourceMappingURL=folder-mis-ayudantias-mis-ayudantias-module-es2015.js.map