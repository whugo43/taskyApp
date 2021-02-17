(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-grupos-grupos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/grupos/grupos.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/grupos/grupos.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\r\n  <ion-toolbar>\r\n\r\n    <ion-segment color=\"tertiary\" value=\"cursos\" >\r\n \r\n      <!-- <ion-segment-button *ngIf=\"Rol==Ayudante\" value=\"mis-ayudantias\" [routerLink]=\"['/mis-ayudantias']\" routerDirection=\"root\">\r\n        <ion-icon name=\"file-tray-stacked-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Mis Cursos</ion-label>\r\n      </ion-segment-button> -->\r\n\r\n      <ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\r\n        <ion-icon name=\"newspaper-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Publicaciones</ion-label>\r\n      </ion-segment-button>\r\n      \r\n      <ion-segment-button value=\"cursos\" [routerLink]=\"['/cursos']\" routerDirection=\"root\">\r\n        <ion-icon name=\"library-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 14px;\">Cursos</ion-label>\r\n      </ion-segment-button>\r\n    \r\n    \r\n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-icon name=\"person-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\r\n      </ion-segment-button>\r\n\r\n  \r\n\r\n  \r\n\r\n</ion-segment>\r\n\r\n</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-segment color=\"tertiary\" value=\"grupos\">\r\n\r\n    <ion-segment-button value=\"anuncios\" [routerLink]=\"['/curso-detalle',id, nombreCurso]\" routerDirection=\"root\">\r\n      <ion-icon name=\"megaphone-outline\" size=\"large\"></ion-icon> <ion-label>Anuncios</ion-label>\r\n    </ion-segment-button>\r\n    \r\n    <ion-segment-button value=\"ayudantes\" [routerLink]=\"['/curso-ayudantes',id, nombreCurso]\" routerDirection=\"root\">\r\n      <ion-icon name=\"people-outline\" size=\"large\"></ion-icon> <ion-label>Ayudantes</ion-label>\r\n    </ion-segment-button>\r\n\r\n    <ion-segment-button value=\"grupos\" [routerLink]=\"['/curso-ayudantes',id, nombreCurso]\" routerDirection=\"root\">\r\n      <ion-icon name=\"people-circle-outline\" size=\"large\"></ion-icon> <ion-label>Grupos</ion-label>\r\n    </ion-segment-button>\r\n   \r\n  </ion-segment>\r\n\r\n  <ion-searchbar\r\n    color=\"light\" \r\n    placeholder = \"Buscar grupo...\"\r\n    animated\r\n    (ionChange)=\"buscar($event)\">\r\n  </ion-searchbar>\r\n\r\n  <ng-container *ngFor=\"let grupo of grupos | filtroCurso: textoBuscar\">\r\n\r\n\r\n  \r\n\r\n  <ion-card  *ngIf=\"id==grupo.Materia\" scrollable class = \"item\">\r\n    <ion-item >\r\n\r\n      <ion-thumbnail slot=\"start\" slot=\"start\" [routerLink]=\"['/grupos-detalle',grupo.id]\">\r\n        <img src=\"{{grupo.Imagen}}\" alet=\"foto\">\r\n      </ion-thumbnail>\r\n      <ion-card-title [routerLink]=\"['/grupos-detalle',grupo.id]\">{{grupo.Nombre}}</ion-card-title>\r\n\r\n      <ion-icon *ngIf=\"miId == grupo.Usuario\" name=\"create-outline\" slot='end'  (click)=\"redireccionar(grupo.id)\"></ion-icon>\r\n      <ion-icon *ngIf=\"miId ==  grupo.Usuario\" name=\"trash-outline\" slot='end' color='danger'(click)=\"alert(grupo.id)\"></ion-icon>\r\n\r\n    </ion-item>\r\n  \r\n\r\n    </ion-card>\r\n\r\n\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"getDatos()\">\r\n\r\n  <div style=\"margin-top: 50px;\" align='center'> \r\n    <ion-text color=\"medium\">\r\n\r\n      <img src=\"https://firebasestorage.googleapis.com/v0/b/taskyapp01.appspot.com/o/iconos%2Fgrupos.png?alt=media&token=8aa84d63-18b5-424d-9b6a-dfd1075eeb77\" style=\"width: 55%; height:58%;margin:auto;\" alet=\"foto\">\r\n      \r\n      <p style=\"font-size: 21px;margin:auto;margin-top:7.5px\">No hay grupos registrados.</p>\r\n    </ion-text>  \r\n  </div>\r\n</ng-container>\r\n\r\n  <ion-fab *ngIf=\"rol=='Ayudante'\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"validarCurso()\">\r\n     <ion-icon name=\"add-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  \r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/folder/grupos/grupos-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/folder/grupos/grupos-routing.module.ts ***!
  \********************************************************/
/*! exports provided: GruposPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruposPageRoutingModule", function() { return GruposPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _grupos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grupos.page */ "./src/app/folder/grupos/grupos.page.ts");




const routes = [
    {
        path: '',
        component: _grupos_page__WEBPACK_IMPORTED_MODULE_3__["GruposPage"]
    }
];
let GruposPageRoutingModule = class GruposPageRoutingModule {
};
GruposPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GruposPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/grupos/grupos.module.ts":
/*!************************************************!*\
  !*** ./src/app/folder/grupos/grupos.module.ts ***!
  \************************************************/
/*! exports provided: GruposPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruposPageModule", function() { return GruposPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _grupos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grupos-routing.module */ "./src/app/folder/grupos/grupos-routing.module.ts");
/* harmony import */ var _grupos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grupos.page */ "./src/app/folder/grupos/grupos.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








let GruposPageModule = class GruposPageModule {
};
GruposPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _grupos_routing_module__WEBPACK_IMPORTED_MODULE_5__["GruposPageRoutingModule"]
        ],
        declarations: [_grupos_page__WEBPACK_IMPORTED_MODULE_6__["GruposPage"]]
    })
], GruposPageModule);



/***/ }),

/***/ "./src/app/folder/grupos/grupos.page.scss":
/*!************************************************!*\
  !*** ./src/app/folder/grupos/grupos.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9ncnVwb3MvZ3J1cG9zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/folder/grupos/grupos.page.ts":
/*!**********************************************!*\
  !*** ./src/app/folder/grupos/grupos.page.ts ***!
  \**********************************************/
/*! exports provided: GruposPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruposPage", function() { return GruposPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_grupos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/grupos.service */ "./src/app/services/grupos.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_ayudantes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ayudantes.service */ "./src/app/services/ayudantes.service.ts");
/* harmony import */ var src_app_models_usuarios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/usuarios */ "./src/app/models/usuarios.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");









let GruposPage = class GruposPage {
    constructor(grupoService, alertCtrt, activateRoute, ayudanteService, router, usuarioService) {
        this.grupoService = grupoService;
        this.alertCtrt = alertCtrt;
        this.activateRoute = activateRoute;
        this.ayudanteService = ayudanteService;
        this.router = router;
        this.usuarioService = usuarioService;
        this.grupos = [];
        this.textoBuscar = '';
        this.ayudantias = [];
        this.cursosMisAyudantias = [];
        this.user = new src_app_models_usuarios__WEBPACK_IMPORTED_MODULE_6__["Usuarios"]();
    }
    ngOnInit() {
        this.activateRoute.paramMap.subscribe(paramMap => {
            console.log(paramMap);
            const idCurso = paramMap.get('id');
            const nombreCurso = paramMap.get('nombre');
            this.nombreCurso = nombreCurso;
            // const nombreCurso = paramMap.get('Nombre');
            this.id = idCurso;
            // this.nombre = nombreCurso;
            //this.actividadService.getActividad(idActividad).subscribe(res => this.actividad =res);
        });
        this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => { this.user = res; });
        this.grupoService.getGrupos().subscribe(res => this.grupos = res);
        this.ayudanteService.getAyudantes().subscribe(res => { this.ayudantias = res; this.listaCursos(); });
        this.miId = localStorage.getItem('userId');
        this.rol = localStorage.getItem('Rol');
    }
    getDatos() {
        for (let i = 0; i < this.grupos.length; i++) {
            if (this.grupos[i].Materia == this.id) {
                return false;
            }
        }
        return true;
    }
    listaCursos() {
        console.log('id: ', this.id);
        for (let index = 0; index < this.ayudantias.length; index++) {
            if (this.ayudantias[index].Usuario == this.miId) {
                this.cursosMisAyudantias.push(this.ayudantias[index].Materia);
            }
        }
    }
    redireccionar(id) {
        this.router.navigate(["/editar-grupo", id]);
    }
    buscar(event) {
        const texto = event.target.value;
        this.textoBuscar = texto;
    }
    validarCurso() {
        if (this.user.Premium) {
            if (this.cursosMisAyudantias.includes(this.id)) {
                // this.mostrarBoton = false;//mostrar mensaje.
                //  [routerLink]="['/crear-grupo',id]"
                this.router.navigate(["/crear-grupo", this.id]);
            }
            else {
                this.failedAlert();
                // this.router.navigate(['/crear-ayudantia'])
                // this.mostrarBoton = true;//redireccionar a la pagina
            }
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
                message: "No puede agregar cursos",
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
    serPremium() {
        this.user.EsperaPremium = true;
        this.usuarioService.updateUsuario(localStorage.getItem('userId'), this.user)
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
    failedAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrt.create({
                cssClass: 'my-custom-class',
                header: "No estas registrado como ayudante en esta materia",
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Registrar materia',
                        handler: (data) => {
                            this.router.navigate(['/crear-ayudantia']);
                            console.log('registrar');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    alert(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrt.create({
                cssClass: 'my-custom-class',
                header: "¿Desea eliminar este grupo?",
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    },
                    {
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
        this.grupoService.removeGrupo(id);
    }
};
GruposPage.ctorParameters = () => [
    { type: src_app_services_grupos_service__WEBPACK_IMPORTED_MODULE_2__["GruposService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_ayudantes_service__WEBPACK_IMPORTED_MODULE_5__["AyudantesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_7__["UsuarioService"] }
];
GruposPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grupos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./grupos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/grupos/grupos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./grupos.page.scss */ "./src/app/folder/grupos/grupos.page.scss")).default]
    })
], GruposPage);



/***/ })

}]);
//# sourceMappingURL=folder-grupos-grupos-module-es2015.js.map