(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-crear-ayudantia-crear-ayudantia-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/crear-ayudantia/crear-ayudantia.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/crear-ayudantia/crear-ayudantia.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\r\n  <ion-toolbar>\r\n\r\n    <ion-segment color=\"tertiary\" value=\"perfil\" >\r\n\r\n      <!-- <ion-segment-button *ngIf=\"Rol==Ayudante\" value=\"mis-ayudantias\" [routerLink]=\"['/mis-ayudantias']\" routerDirection=\"root\">\r\n        <ion-icon name=\"file-tray-stacked-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Mis Cursos</ion-label>\r\n      </ion-segment-button> -->\r\n\r\n      <ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\r\n        <ion-icon name=\"newspaper-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Publicaciones</ion-label>\r\n      </ion-segment-button>\r\n      \r\n      <ion-segment-button value=\"cursos\" [routerLink]=\"['/cursos']\" routerDirection=\"root\">\r\n        <ion-icon name=\"library-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 14px;\">Cursos</ion-label>\r\n      </ion-segment-button>\r\n    \r\n    \r\n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-icon name=\"person-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\r\n      </ion-segment-button>\r\n      \r\n  \r\n\r\n  \r\n\r\n    </ion-segment>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-searchbar\r\n  color=\"light\" \r\n  placeholder = \"Buscar curso...\"\r\n  animated\r\n\r\n  (ionChange)=\"buscar($event)\">\r\n  </ion-searchbar>\r\n\r\n\r\n\r\n  <ng-container *ngFor=\"let curso of nuevosCursos\">\r\n\r\n    <ng-container *ngFor=\"let materia of cursos | filtroCurso: textoBuscar\">\r\n\r\n\r\n\r\n      <ion-item *ngIf=\"curso==materia.id\" style=\"padding: 2.5px;\"  >\r\n        <!-- [routerLink]=\"['/curso-detalle',curso.id, curso.Nombre]\" -->\r\n        <ion-thumbnail slot=\"start\" slot=\"start\">\r\n          <img src=\"{{materia.Imagen}}\" alet=\"foto\">\r\n        </ion-thumbnail>\r\n        <ion-card-title ><label style=\"font-size: 17.2px; font-weight: bold; \">{{materia.Nombre}}</label></ion-card-title>\r\n\r\n        <ion-icon slot=\"end\" name=\"person-add-outline\" (click)=\"crearAyudantia(materia.id)\"></ion-icon>\r\n      </ion-item>\r\n  \r\n\r\n    </ng-container>\r\n  </ng-container>\r\n\r\n   \r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/folder/crear-ayudantia/crear-ayudantia-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/folder/crear-ayudantia/crear-ayudantia-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: CrearAyudantiaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearAyudantiaPageRoutingModule", function() { return CrearAyudantiaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _crear_ayudantia_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crear-ayudantia.page */ "./src/app/folder/crear-ayudantia/crear-ayudantia.page.ts");




const routes = [
    {
        path: '',
        component: _crear_ayudantia_page__WEBPACK_IMPORTED_MODULE_3__["CrearAyudantiaPage"]
    }
];
let CrearAyudantiaPageRoutingModule = class CrearAyudantiaPageRoutingModule {
};
CrearAyudantiaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CrearAyudantiaPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/crear-ayudantia/crear-ayudantia.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/folder/crear-ayudantia/crear-ayudantia.module.ts ***!
  \******************************************************************/
/*! exports provided: CrearAyudantiaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearAyudantiaPageModule", function() { return CrearAyudantiaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _crear_ayudantia_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crear-ayudantia-routing.module */ "./src/app/folder/crear-ayudantia/crear-ayudantia-routing.module.ts");
/* harmony import */ var _crear_ayudantia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crear-ayudantia.page */ "./src/app/folder/crear-ayudantia/crear-ayudantia.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








let CrearAyudantiaPageModule = class CrearAyudantiaPageModule {
};
CrearAyudantiaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _crear_ayudantia_routing_module__WEBPACK_IMPORTED_MODULE_5__["CrearAyudantiaPageRoutingModule"]
        ],
        declarations: [_crear_ayudantia_page__WEBPACK_IMPORTED_MODULE_6__["CrearAyudantiaPage"]]
    })
], CrearAyudantiaPageModule);



/***/ }),

/***/ "./src/app/folder/crear-ayudantia/crear-ayudantia.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/folder/crear-ayudantia/crear-ayudantia.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9jcmVhci1heXVkYW50aWEvY3JlYXItYXl1ZGFudGlhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/folder/crear-ayudantia/crear-ayudantia.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/folder/crear-ayudantia/crear-ayudantia.page.ts ***!
  \****************************************************************/
/*! exports provided: CrearAyudantiaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearAyudantiaPage", function() { return CrearAyudantiaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_cursos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cursos.service */ "./src/app/services/cursos.service.ts");
/* harmony import */ var src_app_models_ayudantes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/ayudantes */ "./src/app/models/ayudantes.ts");
/* harmony import */ var src_app_services_ayudantes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ayudantes.service */ "./src/app/services/ayudantes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_models_usuarios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/usuarios */ "./src/app/models/usuarios.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");








let CrearAyudantiaPage = class CrearAyudantiaPage {
    constructor(ayudanteService, cursoService, usuarioService, router) {
        this.ayudanteService = ayudanteService;
        this.cursoService = cursoService;
        this.usuarioService = usuarioService;
        this.router = router;
        this.cursos = [];
        this.ayudantias = [];
        this.cursosMisAyudantias = [];
        this.todosCursos = [];
        this.nuevosCursos = [];
        this.usuario = new src_app_models_usuarios__WEBPACK_IMPORTED_MODULE_6__["Usuarios"]();
        this.textoBuscar = '';
        this.nuevoAyudante = new src_app_models_ayudantes__WEBPACK_IMPORTED_MODULE_3__["Ayudantes"]();
    }
    ngOnInit() {
        this.miId = localStorage.getItem('userId');
        this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => this.usuario = res);
        this.ayudanteService.getAyudantes().subscribe(res => { this.ayudantias = res; this.listaCursos(); this.getCursos(); });
    }
    getCursos() {
        this.cursoService.getCursos().subscribe(res => { this.cursos = res; this.llenarCursos(); this.nuevos(); });
    }
    llenarCursos() {
        for (let index = 0; index < this.cursos.length; index++) {
            this.todosCursos.push(this.cursos[index].id);
        }
    }
    buscar(event) {
        const texto = event.target.value;
        this.textoBuscar = texto;
    }
    nuevos() {
        for (let index = 0; index < this.todosCursos.length; index++) {
            if (this.cursosMisAyudantias.includes(this.todosCursos[index])) {
            }
            else {
                this.nuevosCursos.push(this.todosCursos[index]);
            }
        }
        console.log('hola', this.nuevosCursos);
    }
    listaCursos() {
        for (let index = 0; index < this.ayudantias.length; index++) {
            if (this.ayudantias[index].Usuario == this.miId) {
                this.cursosMisAyudantias.push(this.ayudantias[index].Materia);
            }
        }
    }
    crearAyudantia(idAyudantia) {
        let data = { Visitas: 0, Materia: idAyudantia, Usuario: this.miId };
        this.nuevoAyudante.Visitas = 0;
        this.nuevoAyudante.Materia = idAyudantia;
        this.nuevoAyudante.Usuario = this.miId;
        this.nuevoAyudante.Like = 0;
        this.nuevoAyudante.Dislike = 0;
        this.usuario.Cursos = this.usuario.Cursos + 1;
        this.usuarioService.updateUsuario(this.miId, this.usuario);
        this.ayudanteService.addAyudante(this.nuevoAyudante).then(auth => {
            //this.loading.dismiss();
            this.router.navigateByUrl("/mis-ayudantias");
        }).catch((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.loading.dismiss();
            //this.failedAlert("Algo salió mal, inténtelo de nuevo");
        }));
    }
};
CrearAyudantiaPage.ctorParameters = () => [
    { type: src_app_services_ayudantes_service__WEBPACK_IMPORTED_MODULE_4__["AyudantesService"] },
    { type: src_app_services_cursos_service__WEBPACK_IMPORTED_MODULE_2__["CursosService"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_7__["UsuarioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
CrearAyudantiaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crear-ayudantia',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./crear-ayudantia.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/crear-ayudantia/crear-ayudantia.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./crear-ayudantia.page.scss */ "./src/app/folder/crear-ayudantia/crear-ayudantia.page.scss")).default]
    })
], CrearAyudantiaPage);



/***/ })

}]);
//# sourceMappingURL=folder-crear-ayudantia-crear-ayudantia-module-es2015.js.map