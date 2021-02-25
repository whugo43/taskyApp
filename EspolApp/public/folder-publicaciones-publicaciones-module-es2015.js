(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-publicaciones-publicaciones-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/publicaciones/publicaciones.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/publicaciones/publicaciones.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\r\n  <ion-toolbar>\r\n\r\n    <ion-segment color=\"tertiary\" value=\"publicaciones\" >\r\n\r\n<ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\r\n        <ion-icon name=\"newspaper-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Publicaciones</ion-label>\r\n      </ion-segment-button>\r\n      \r\n      <ion-segment-button value=\"cursos\" [routerLink]=\"['/cursos']\" routerDirection=\"root\">\r\n        <ion-icon name=\"library-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 14px;\">Cursos</ion-label>\r\n      </ion-segment-button>\r\n    \r\n    \r\n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-icon name=\"person-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\r\n      </ion-segment-button>\r\n\r\n      <ion-segment-button value=\"adopcion\" [routerLink]=\"['/adopcion']\" routerDirection=\"root\">\r\n        <ion-icon name=\"paw-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Adopcion</ion-label>\r\n      </ion-segment-button>\r\n\r\n    </ion-segment>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-searchbar\r\n    color=\"light\" \r\n    placeholder = \"Buscar anuncio...\"\r\n    animated\r\n\r\n    (ionChange)=\"buscar($event)\">\r\n    </ion-searchbar>\r\n  \r\n  <ng-container style=\"border-color:yellow;background-color:teal\">\r\n    <ion-card  *ngIf=\"publicidad.Mostrar\" style=\"border-color:yellow;background-color:#FDF897\" (click)='aumentarVisitaPublicidad(publicidad.id,publicidad)'>         \r\n      <ion-card-header>\r\n        <ion-item>\r\n        <ion-card-title >{{publicidad.Titulo}}</ion-card-title>  \r\n      </ion-item>\r\n      </ion-card-header>\r\n      <ion-card-content (click)='aumentarVisitaPublicidad(publicidad.id,publicidad)'>\r\n        {{publicidad.Descripcion}}\r\n      </ion-card-content>\r\n\r\n      <ng-container >\r\n        <ion-item>\r\n          <ion-button fill=\"outline\" slot='end'><ion-icon name=\"eye-outline\" ></ion-icon><label style=\"font-size: 12;margin-left: 7.5px;\" >{{publicidad.Visitas}}</label></ion-button>\r\n         \r\n        </ion-item>\r\n      </ng-container>\r\n    </ion-card>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"!getDatos()\">\r\n    <ng-container *ngFor=\"let publicacion of publicaciones | filtroAnuncio: textoBuscar\">\r\n      <ion-card  *ngIf=\"rol == 'Ayudante'\">         \r\n        <ion-card-header>\r\n          <ion-item>\r\n          <ion-card-title (click)='aumentarVisita(publicacion.id,publicacion)'>{{publicacion.Titulo}}</ion-card-title>  \r\n          <!-- <ion-button fill=\"outline\" slot='end' (click)='aumentarVisita(publicacion.id,publicacion)'><ion-icon name=\"eye-outline\" ></ion-icon><label style=\"font-size: 12;margin-left: 7.5px;\" >{{publicacion.Visitas}}</label></ion-button>\r\n           -->\r\n\r\n           <ion-icon *ngIf=\"miId == publicacion.Estudiante\" name=\"create-outline\" slot='end'  (click)=\"redireccionar(publicacion.id)\"></ion-icon>\r\n           <ion-icon *ngIf=\"miId == publicacion.Estudiante\" name=\"trash-outline\" slot='end' color='danger'(click)=\"alert(publicacion.id)\"></ion-icon>\r\n\r\n\r\n          <!-- <ng-container *ngIf=\"miId == publicacion.Estudiante\">\r\n            <ion-icon name=\"create-outline\" slot='end'  (click)=\"redireccionar(publicacion.id)\"></ion-icon>\r\n            <ion-icon name=\"trash-outline\" slot='end' color='danger'(click)=\"alert(publicacion.id)\"></ion-icon>\r\n          </ng-container> -->\r\n        </ion-item>\r\n        </ion-card-header>\r\n        <ion-card-content (click)='aumentarVisita(publicacion.id,publicacion)'>\r\n          {{publicacion.Descripcion}}\r\n        </ion-card-content>\r\n\r\n        <ng-container >\r\n          <ion-item>\r\n\r\n            <label>{{publicacion.Fecha | date:'yyyy/MM/dd'}}</label>\r\n\r\n            <ion-button fill=\"outline\" slot='end' (click)='aumentarVisita(publicacion.id,publicacion)'><ion-icon name=\"eye-outline\" ></ion-icon><label style=\"font-size: 12;margin-left: 7.5px;\" >{{publicacion.Visitas}}</label></ion-button>\r\n\r\n           \r\n          </ion-item>\r\n\r\n        </ng-container>\r\n\r\n        \r\n        \r\n      </ion-card>\r\n\r\n\r\n\r\n      <ion-card  *ngIf=\"((rol == 'Estudiante') && ('Ayudante' == publicacion.Rol))||(rol == 'Estudiante' && publicacion.Estudiante == miId)\">         \r\n        <ion-card-header>\r\n          <ion-item>\r\n          <ion-card-title (click)='aumentarVisita(publicacion.id,publicacion)'>{{publicacion.Titulo}}</ion-card-title>  \r\n\r\n          <ion-icon *ngIf=\"miId == publicacion.Estudiante\" name=\"create-outline\" slot='end'  (click)=\"redireccionar(publicacion.id)\"></ion-icon>\r\n          <ion-icon *ngIf=\"miId == publicacion.Estudiante\" name=\"trash-outline\" slot='end' color='danger'(click)=\"alert(publicacion.id)\"></ion-icon>\r\n\r\n          <!-- <ng-container *ngIf=\"miId == publicacion.Estudiante\">\r\n            <ion-icon name=\"create-outline\" slot='end'  (click)=\"redireccionar(publicacion.id)\"></ion-icon>\r\n            <ion-icon name=\"trash-outline\" slot='end' color='danger'(click)=\"alert(publicacion.id)\"></ion-icon>\r\n          </ng-container> -->\r\n        </ion-item>\r\n        </ion-card-header>\r\n        <ion-card-content (click)='aumentarVisita(publicacion.id,publicacion)'>\r\n          {{publicacion.Descripcion}}\r\n        </ion-card-content>\r\n\r\n        <ng-container >\r\n          <ion-item>\r\n            \r\n            <label>{{publicacion.Fecha | date:'yyyy/MM/dd'}}</label>\r\n            <ion-button fill=\"outline\" slot='end' (click)='aumentarVisita(publicacion.id,publicacion)'><ion-icon name=\"eye-outline\" (click)='aumentarVisita(publicacion.id,publicacion)'></ion-icon><label style=\"font-size: 12;margin-left: 7.5px;\" >{{publicacion.Visitas}}</label></ion-button>\r\n          \r\n          </ion-item>\r\n\r\n        </ng-container>\r\n        \r\n\r\n        \r\n      </ion-card>\r\n      \r\n      \r\n    </ng-container>\r\n  </ng-container>\r\n\r\n  \r\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click) = 'validarCurso()' routerDirection=\"root\">\r\n     <ion-icon name=\"add-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/folder/publicaciones/publicaciones-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/folder/publicaciones/publicaciones-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: PublicacionesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicacionesPageRoutingModule", function() { return PublicacionesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _publicaciones_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./publicaciones.page */ "./src/app/folder/publicaciones/publicaciones.page.ts");




const routes = [
    {
        path: '',
        component: _publicaciones_page__WEBPACK_IMPORTED_MODULE_3__["PublicacionesPage"]
    }
];
let PublicacionesPageRoutingModule = class PublicacionesPageRoutingModule {
};
PublicacionesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PublicacionesPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/publicaciones/publicaciones.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/folder/publicaciones/publicaciones.module.ts ***!
  \**************************************************************/
/*! exports provided: PublicacionesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicacionesPageModule", function() { return PublicacionesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _publicaciones_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./publicaciones-routing.module */ "./src/app/folder/publicaciones/publicaciones-routing.module.ts");
/* harmony import */ var _publicaciones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./publicaciones.page */ "./src/app/folder/publicaciones/publicaciones.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








let PublicacionesPageModule = class PublicacionesPageModule {
};
PublicacionesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _publicaciones_routing_module__WEBPACK_IMPORTED_MODULE_5__["PublicacionesPageRoutingModule"]
        ],
        declarations: [_publicaciones_page__WEBPACK_IMPORTED_MODULE_6__["PublicacionesPage"]]
    })
], PublicacionesPageModule);



/***/ }),

/***/ "./src/app/folder/publicaciones/publicaciones.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/folder/publicaciones/publicaciones.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9wdWJsaWNhY2lvbmVzL3B1YmxpY2FjaW9uZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/folder/publicaciones/publicaciones.page.ts":
/*!************************************************************!*\
  !*** ./src/app/folder/publicaciones/publicaciones.page.ts ***!
  \************************************************************/
/*! exports provided: PublicacionesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicacionesPage", function() { return PublicacionesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_publicaciones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/publicaciones.service */ "./src/app/services/publicaciones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_models_usuarios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/usuarios */ "./src/app/models/usuarios.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_models_publicidad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/publicidad */ "./src/app/models/publicidad.ts");
/* harmony import */ var src_app_services_publicidad_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/publicidad.service */ "./src/app/services/publicidad.service.ts");










let PublicacionesPage = class PublicacionesPage {
    //probar: PublicacionesMateria[] = [];
    constructor(activateRoute, usuarioService, publicacionesService, alertCtrt, router, publicidadService) {
        this.activateRoute = activateRoute;
        this.usuarioService = usuarioService;
        this.publicacionesService = publicacionesService;
        this.alertCtrt = alertCtrt;
        this.router = router;
        this.publicidadService = publicidadService;
        this.usuario = new src_app_models_usuarios__WEBPACK_IMPORTED_MODULE_5__["Usuarios"]();
        this.publicaciones = [];
        this.textoBuscar = '';
        this.publicidad = new src_app_models_publicidad__WEBPACK_IMPORTED_MODULE_7__["Publicidad"]();
    }
    ngOnInit() {
        this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => this.usuario = res);
        this.miId = localStorage.getItem('userId');
        this.mostrarCita = localStorage.getItem('Citas');
        this.rol = localStorage.getItem('Rol');
        this.publicacionesService.getPublicacionesMateria().subscribe(res => this.publicaciones = res);
        this.publicidadService.getPublicidad().subscribe(res => { this.publicidad = res[0]; });
        //this.publicacionesService.probar().subscribe(res=>this.probar = res);
    }
    redireccionar(id) {
        this.router.navigate(['/editar-publicacion', id, "Publicacion"]);
    }
    getDatos() {
        for (let i = 0; i < this.publicaciones.length; i++) {
            return false;
        }
        return true;
    }
    buscar(event) {
        const texto = event.target.value;
        this.textoBuscar = texto;
    }
    aumentarVisita(id, publicacion) {
        publicacion.Visitas = publicacion.Visitas + 1;
        //console.log("fff", publicacion.Visitas)
        //[routerLink]="['/curso-detalle-anuncio',publicacion.id]"
        this.publicacionesService.updatePublicacionesMateria(id, publicacion);
        this.router.navigate(['/curso-detalle-anuncio', publicacion.id]);
    }
    aumentarVisitaPublicidad(id, publicidad) {
        publicidad.Visitas = publicidad.Visitas + 1;
        //console.log("fff", publicidad.Visitas)
        //[routerLink]="['/detalle-publicidad',publicacion.id]"
        this.publicidadService.updatePublicidad(id, publicidad);
        this.router.navigate(['/detalle-publicidad', publicidad.id]);
    }
    validarCurso() {
        if (this.usuario.Rol == 'Estudiante') {
            this.router.navigate(["/crear-publicacion-todos"]);
        }
        else if ((this.usuario.Premium) || (this.usuario.Premium == false && this.usuario.Publicaciones < 5)) {
            this.router.navigate(["/crear-publicacion-todos"]);
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
                message: "Máximo puedes realizar 5 publicaciones",
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            //console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Ser premium',
                        handler: (data) => {
                            this.serPremium();
                            //console.log('registrar')
                        }
                    }
                ]
            });
            yield alert.present();
        });
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
    alert(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrt.create({
                cssClass: 'my-custom-class',
                header: "¿Desea eliminar esta publicación?",
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            //console.log('Confirm Cancel: blah');
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
        this.publicacionesService.removePublicacionesMateria(id);
        this.usuario.Publicaciones = this.usuario.Publicaciones - 1;
        this.usuarioService.updateUsuario(this.miId, this.usuario);
    }
};
PublicacionesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"] },
    { type: src_app_services_publicaciones_service__WEBPACK_IMPORTED_MODULE_2__["PublicacionesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_publicidad_service__WEBPACK_IMPORTED_MODULE_8__["PublicidadService"] }
];
PublicacionesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-publicaciones',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./publicaciones.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/publicaciones/publicaciones.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./publicaciones.page.scss */ "./src/app/folder/publicaciones/publicaciones.page.scss")).default]
    })
], PublicacionesPage);



/***/ })

}]);
//# sourceMappingURL=folder-publicaciones-publicaciones-module-es2015.js.map