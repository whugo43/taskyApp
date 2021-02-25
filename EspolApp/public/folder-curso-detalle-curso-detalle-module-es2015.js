(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-curso-detalle-curso-detalle-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/curso-detalle/curso-detalle.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/curso-detalle/curso-detalle.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\r\n  <ion-toolbar>\r\n\r\n    <ion-segment color=\"tertiary\" value=\"cursos\" >\r\n\r\n      <!-- <ion-segment-button *ngIf=\"Rol==Ayudante\" value=\"mis-ayudantias\" [routerLink]=\"['/mis-ayudantias']\" routerDirection=\"root\">\r\n        <ion-icon name=\"file-tray-stacked-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Mis Cursos</ion-label>\r\n      </ion-segment-button> -->\r\n\r\n      <ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\r\n        <ion-icon name=\"newspaper-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Publicaciones</ion-label>\r\n      </ion-segment-button>\r\n      \r\n      <ion-segment-button value=\"cursos\" [routerLink]=\"['/cursos']\" routerDirection=\"root\">\r\n        <ion-icon name=\"library-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 14px;\">Cursos</ion-label>\r\n      </ion-segment-button>\r\n    \r\n    \r\n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-icon name=\"person-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\r\n      </ion-segment-button>\r\n\r\n      <ion-segment-button value=\"adopcion\" [routerLink]=\"['/adopcion']\" routerDirection=\"root\">\r\n        <ion-icon name=\"paw-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Adopcion</ion-label>\r\n      </ion-segment-button>\r\n\r\n    </ion-segment>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content>\r\n  <ion-toolbar>\r\n\r\n\r\n  \r\n  <ion-segment color=\"tertiary\" value=\"anuncios\">\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <ion-segment-button value=\"anuncios\" [routerLink]=\"['/curso-detalle',id, nombreCurso]\" routerDirection=\"root\">\r\n      <ion-icon name=\"megaphone-outline\" size=\"large\"></ion-icon> \r\n      <ion-label>Anuncios</ion-label>\r\n    </ion-segment-button>\r\n    \r\n    <ion-segment-button value=\"ayudantes\" [routerLink]=\"['/curso-ayudantes',id, nombreCurso]\" routerDirection=\"root\">\r\n      <ion-icon name=\"people-outline\" size=\"large\"></ion-icon> <ion-label>Ayudantes</ion-label>\r\n    </ion-segment-button>\r\n\r\n    <ion-segment-button value=\"grupos\" [routerLink]=\"['/grupos',id, nombreCurso]\" routerDirection=\"root\">\r\n      <ion-icon name=\"people-circle-outline\" size=\"large\"></ion-icon> <ion-label>Grupos</ion-label>\r\n    </ion-segment-button>\r\n\r\n    \r\n\r\n\r\n   \r\n  </ion-segment>\r\n\r\n</ion-toolbar>\r\n\r\n  <ion-searchbar\r\n    color=\"light\" \r\n    placeholder = \"Buscar anuncio...\"\r\n    animated\r\n    (ionChange)=\"buscar($event)\">\r\n  </ion-searchbar>\r\n\r\n\r\n  <ng-container *ngIf=\"!getDatos()\">\r\n    <ng-container *ngFor=\"let publicacion of publicaciones | filtroAnuncio: textoBuscar\">\r\n      <ion-card *ngIf=\"publicacion.Materia == id\"> \r\n        <ion-card-header>\r\n          <ion-item>\r\n            <ion-card-title  (click)='aumentarVisita(publicacion.id,publicacion)'>{{publicacion.Titulo}}</ion-card-title>\r\n     \r\n            <ion-button fill=\"outline\" slot='end' (click)='aumentarVisita(publicacion.id,publicacion)'><ion-icon name=\"eye-outline\" ></ion-icon><label style=\"font-size: 12;margin-left: 7.5px;\" >{{publicacion.Visitas}}</label></ion-button>\r\n            \r\n            </ion-item>\r\n        </ion-card-header>\r\n        <ion-card-content  (click)='aumentarVisita(publicacion.id,publicacion)'>\r\n          {{publicacion.Descripcion}}\r\n        </ion-card-content>\r\n      \r\n        <ng-container >\r\n          <ion-item>\r\n            <label>{{publicacion.Fecha | date:'yyyy/MM/dd'}}</label>\r\n            <ion-icon *ngIf=\"miId == publicacion.Estudiante\" name=\"create-outline\" slot='end'  (click)=\"redireccionar(publicacion.id)\"></ion-icon>\r\n            <ion-icon *ngIf=\"miId == publicacion.Estudiante\" name=\"trash-outline\" slot='end' color='danger'(click)=\"alert(publicacion.id)\"></ion-icon>\r\n\r\n          </ion-item>\r\n\r\n         \r\n          \r\n        </ng-container>\r\n\r\n        \r\n\r\n      </ion-card>\r\n      \r\n    </ng-container>\r\n   \r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"getDatos()\">\r\n    <br><br><br><br><br><br>\r\n    <div class=\"ion-text-center\">\r\n      <ion-text color=\"medium\">\r\n        <img src=\"https://firebasestorage.googleapis.com/v0/b/taskyapp01.appspot.com/o/iconos%2FcursoDetalle.png?alt=media&token=76e0ec61-732c-48bd-a271-a23c0bb9b2c1\" style=\"width: 55%; height:72%;\" alet=\"foto\">\r\n        <p style=\"font-size: 25px;\">No hay anuncios registrados.</p>\r\n      </ion-text>  \r\n    </div>   \r\n  </ng-container>\r\n\r\n  <ion-fab  *ngIf=\"rol=='Ayudante'\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"validarCurso()\">\r\n      <ion-icon name=\"add-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/folder/curso-detalle/curso-detalle-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/folder/curso-detalle/curso-detalle-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: CursoDetallePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursoDetallePageRoutingModule", function() { return CursoDetallePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _curso_detalle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./curso-detalle.page */ "./src/app/folder/curso-detalle/curso-detalle.page.ts");




const routes = [
    {
        path: '',
        component: _curso_detalle_page__WEBPACK_IMPORTED_MODULE_3__["CursoDetallePage"]
    }
];
let CursoDetallePageRoutingModule = class CursoDetallePageRoutingModule {
};
CursoDetallePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CursoDetallePageRoutingModule);



/***/ }),

/***/ "./src/app/folder/curso-detalle/curso-detalle.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/folder/curso-detalle/curso-detalle.module.ts ***!
  \**************************************************************/
/*! exports provided: CursoDetallePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursoDetallePageModule", function() { return CursoDetallePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _curso_detalle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./curso-detalle-routing.module */ "./src/app/folder/curso-detalle/curso-detalle-routing.module.ts");
/* harmony import */ var _curso_detalle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./curso-detalle.page */ "./src/app/folder/curso-detalle/curso-detalle.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








let CursoDetallePageModule = class CursoDetallePageModule {
};
CursoDetallePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _curso_detalle_routing_module__WEBPACK_IMPORTED_MODULE_5__["CursoDetallePageRoutingModule"]
        ],
        declarations: [_curso_detalle_page__WEBPACK_IMPORTED_MODULE_6__["CursoDetallePage"]]
    })
], CursoDetallePageModule);



/***/ }),

/***/ "./src/app/folder/curso-detalle/curso-detalle.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/folder/curso-detalle/curso-detalle.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9jdXJzby1kZXRhbGxlL2N1cnNvLWRldGFsbGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/folder/curso-detalle/curso-detalle.page.ts":
/*!************************************************************!*\
  !*** ./src/app/folder/curso-detalle/curso-detalle.page.ts ***!
  \************************************************************/
/*! exports provided: CursoDetallePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursoDetallePage", function() { return CursoDetallePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_publicaciones_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/publicaciones.service */ "./src/app/services/publicaciones.service.ts");
/* harmony import */ var src_app_models_usuarios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/usuarios */ "./src/app/models/usuarios.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_ayudantes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ayudantes.service */ "./src/app/services/ayudantes.service.ts");
/* harmony import */ var src_app_services_cursos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/cursos.service */ "./src/app/services/cursos.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");










let CursoDetallePage = class CursoDetallePage {
    constructor(activateRoute, publicacionesService, usuarioService, alertCtrt, ayudanteService, cursoService, router) {
        this.activateRoute = activateRoute;
        this.publicacionesService = publicacionesService;
        this.usuarioService = usuarioService;
        this.alertCtrt = alertCtrt;
        this.ayudanteService = ayudanteService;
        this.cursoService = cursoService;
        this.router = router;
        this.usuarios = [];
        this.usuario = new src_app_models_usuarios__WEBPACK_IMPORTED_MODULE_4__["Usuarios"]();
        this.publicaciones = [];
        this.cursos = [];
        this.textoBuscar = '';
        this.ayudantias = [];
        this.cursosMisAyudantias = [];
        this.todosCursos = [];
        this.resultado = [];
    }
    ngOnInit() {
        this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => this.usuario = res);
        this.miId = localStorage.getItem('userId');
        this.rol = localStorage.getItem('Rol');
        this.mostrarCita = localStorage.getItem('Citas');
        this.activateRoute.paramMap.subscribe(paramMap => {
            const idCurso = paramMap.get('id');
            const nombreCurso = paramMap.get('nombre');
            this.nombreCurso = nombreCurso;
            // const nombreCurso = paramMap.get('Nombre');
            this.id = idCurso;
            // this.nombre = nombreCurso;
            //this.actividadService.getActividad(idActividad).subscribe(res => this.actividad =res);
        });
        this.rol = localStorage.getItem('Rol');
        this.ayudanteService.getAyudantes().subscribe(res => { this.ayudantias = res; this.listaCursos(); });
        this.publicacionesService.getPublicacionesMateria().subscribe(res => this.publicaciones = res);
        this.usuarioService.getUsuarios().subscribe(res => this.usuarios = res);
    }
    listaCursos() {
        for (let index = 0; index < this.ayudantias.length; index++) {
            if (this.ayudantias[index].Usuario == this.miId) {
                this.cursosMisAyudantias.push(this.ayudantias[index].Materia);
            }
        }
    }
    validarCurso() {
        if ((this.usuario.Premium) || (this.usuario.Premium == false && this.usuario.Publicaciones < 5)) {
            if (this.cursosMisAyudantias.includes(this.id)) {
                // this.mostrarBoton = false;//mostrar mensaje.
                //  [routerLink]="['/crear-grupo',id]"
                this.router.navigate(["/crear-publicacion", this.id]);
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
                            //console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Registrar materia',
                        handler: (data) => {
                            this.router.navigate(['/crear-ayudantia']);
                            //console.log('registrar')
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    getDatos() {
        for (let i = 0; i < this.publicaciones.length; i++) {
            if (this.publicaciones[i].Materia == this.id) {
                return false;
            }
        }
        return true;
    }
    aumentarVisita(id, publicacion) {
        publicacion.Visitas = publicacion.Visitas + 1;
        //console.log("fff", publicacion.Visitas)
        //[routerLink]="['/curso-detalle-anuncio',publicacion.id]"
        this.publicacionesService.updatePublicacionesMateria(id, publicacion);
        this.router.navigate(['/curso-detalle-anuncio', publicacion.id]);
        //console.log("ingreso")   
    }
    buscar(event) {
        const texto = event.target.value;
        this.textoBuscar = texto;
    }
    redireccionar(id) {
        this.router.navigate(['/editar-publicacion', id, "Curso"]);
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
        this.publicacionesService.removePublicacionesMateria(id);
        this.usuario.Publicaciones = this.usuario.Publicaciones - 1;
        this.usuarioService.updateUsuario(this.miId, this.usuario);
    }
};
CursoDetallePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_publicaciones_service__WEBPACK_IMPORTED_MODULE_3__["PublicacionesService"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: src_app_services_ayudantes_service__WEBPACK_IMPORTED_MODULE_6__["AyudantesService"] },
    { type: src_app_services_cursos_service__WEBPACK_IMPORTED_MODULE_7__["CursosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CursoDetallePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-curso-detalle',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./curso-detalle.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/curso-detalle/curso-detalle.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./curso-detalle.page.scss */ "./src/app/folder/curso-detalle/curso-detalle.page.scss")).default]
    })
], CursoDetallePage);



/***/ })

}]);
//# sourceMappingURL=folder-curso-detalle-curso-detalle-module-es2015.js.map