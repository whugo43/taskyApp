(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-cursos-cursos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/cursos/cursos.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/cursos/cursos.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\r\n  <ion-toolbar>\r\n\r\n    <ion-segment color=\"tertiary\" value=\"cursos\" >\r\n \r\n      <!-- <ion-segment-button *ngIf=\"Rol==Ayudante\" value=\"mis-ayudantias\" [routerLink]=\"['/mis-ayudantias']\" routerDirection=\"root\">\r\n        <ion-icon name=\"file-tray-stacked-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Mis Cursos</ion-label>\r\n      </ion-segment-button> -->\r\n\r\n      <ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\r\n        <ion-icon name=\"newspaper-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Publicaciones</ion-label>\r\n      </ion-segment-button>\r\n      \r\n      <ion-segment-button value=\"cursos\" [routerLink]=\"['/cursos']\" routerDirection=\"root\">\r\n        <ion-icon name=\"library-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 14px;\">Cursos</ion-label>\r\n      </ion-segment-button>\r\n    \r\n    \r\n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-icon name=\"person-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\r\n      </ion-segment-button>\r\n\r\n  \r\n\r\n  \r\n\r\n</ion-segment>\r\n\r\n</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-searchbar\r\n    color=\"light\" \r\n    placeholder = \"Buscar curso...\"\r\n    animated\r\n\r\n    (ionChange)=\"buscar($event)\">\r\n    </ion-searchbar>\r\n\r\n  <ion-card *ngFor=\"let curso of cursos | filtroCurso: textoBuscar\" scrollable class = \"item\">\r\n    <ion-item [routerLink]=\"['/curso-detalle',curso.id, curso.Nombre]\" >\r\n\r\n      <ion-thumbnail slot=\"start\" slot=\"start\">\r\n        <img src=\"{{curso.Imagen}}\" alet=\"foto\">\r\n      </ion-thumbnail>\r\n      <ion-card-title>{{curso.Nombre}}</ion-card-title>\r\n    </ion-item>\r\n  \r\n\r\n  </ion-card>\r\n\r\n  <ion-fab *ngIf=\"rol=='Ayudante'\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"crearCurso()\">\r\n     <ion-icon name=\"add-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  \r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/folder/cursos/cursos-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/folder/cursos/cursos-routing.module.ts ***!
  \********************************************************/
/*! exports provided: CursosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursosPageRoutingModule", function() { return CursosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cursos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cursos.page */ "./src/app/folder/cursos/cursos.page.ts");




const routes = [
    {
        path: '',
        component: _cursos_page__WEBPACK_IMPORTED_MODULE_3__["CursosPage"]
    }
];
let CursosPageRoutingModule = class CursosPageRoutingModule {
};
CursosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CursosPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/cursos/cursos.module.ts":
/*!************************************************!*\
  !*** ./src/app/folder/cursos/cursos.module.ts ***!
  \************************************************/
/*! exports provided: CursosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursosPageModule", function() { return CursosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cursos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cursos-routing.module */ "./src/app/folder/cursos/cursos-routing.module.ts");
/* harmony import */ var _cursos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cursos.page */ "./src/app/folder/cursos/cursos.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








let CursosPageModule = class CursosPageModule {
};
CursosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cursos_routing_module__WEBPACK_IMPORTED_MODULE_5__["CursosPageRoutingModule"]
        ],
        declarations: [_cursos_page__WEBPACK_IMPORTED_MODULE_6__["CursosPage"]]
    })
], CursosPageModule);



/***/ }),

/***/ "./src/app/folder/cursos/cursos.page.scss":
/*!************************************************!*\
  !*** ./src/app/folder/cursos/cursos.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item {\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2N1cnNvcy9jdXJzb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZm9sZGVyL2N1cnNvcy9jdXJzb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0ge1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/folder/cursos/cursos.page.ts":
/*!**********************************************!*\
  !*** ./src/app/folder/cursos/cursos.page.ts ***!
  \**********************************************/
/*! exports provided: CursosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursosPage", function() { return CursosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_cursos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cursos.service */ "./src/app/services/cursos.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_models_materia_solicitud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/materia-solicitud */ "./src/app/models/materia-solicitud.ts");
/* harmony import */ var src_app_services_materia_solicitud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/materia-solicitud.service */ "./src/app/services/materia-solicitud.service.ts");
/* harmony import */ var src_app_models_anuncios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/anuncios */ "./src/app/models/anuncios.ts");
/* harmony import */ var src_app_services_anuncios_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/anuncios.service */ "./src/app/services/anuncios.service.ts");
/* harmony import */ var src_app_models_usuarios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/usuarios */ "./src/app/models/usuarios.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");










let CursosPage = class CursosPage {
    constructor(cursoService, usuarioService, materiaService, anuncioService, alertCtrt) {
        this.cursoService = cursoService;
        this.usuarioService = usuarioService;
        this.materiaService = materiaService;
        this.anuncioService = anuncioService;
        this.alertCtrt = alertCtrt;
        this.cursos = [];
        this.user = new src_app_models_usuarios__WEBPACK_IMPORTED_MODULE_8__["Usuarios"]();
        this.textoBuscar = '';
        this.materia = new src_app_models_materia_solicitud__WEBPACK_IMPORTED_MODULE_4__["MateriaSolicitud"]();
        this.anuncios = [];
        this.anuncio = new src_app_models_anuncios__WEBPACK_IMPORTED_MODULE_6__["Anuncios"]();
    }
    ngOnInit() {
        this.cursoService.getCursos().subscribe(res => this.cursos = res);
        this.userId = localStorage.getItem('userId');
        this.rol = localStorage.getItem('Rol');
        this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => { this.user = res; this.getAnuncio(); });
    }
    getAnuncio() {
        this.anuncioService.getAnuncios().subscribe(res => { this.anuncios = res; this.validarPublicacion(); });
    }
    validarPublicacion() {
        const valor = this.anuncios[0].Mostrar;
        this.anuncio = this.anuncios[0];
        //console.log('valor:',valor)
        //console.log(this.user.Anuncio)
        if (this.anuncios[0].Mostrar && this.user.Anuncio) {
            this.failedAlert();
        }
    }
    buscar(event) {
        const texto = event.target.value;
        this.textoBuscar = texto;
        //console.log(this.anuncios[0].Titulo)
    }
    crearCurso() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrt.create({
                cssClass: 'my-custom-class',
                header: 'Sugerir curso:',
                // message: 'Nombre del curso:',
                inputs: [
                    {
                        name: 'curso',
                        placeholder: 'Nombre del curso',
                        type: 'text'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            // console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Ok',
                        handler: (data) => {
                            if (data.curso != "") {
                                this.agregarSolitiud(data.curso);
                            }
                            else if (data.curso == "") {
                                //this.failedAlert("El campo email es requerido");
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    agregarSolitiud(curso) {
        this.materia.Estado = true;
        this.materia.NombreMateria = curso;
        this.materia.Usuario = this.userId;
        this.materiaService.addMateria(this.materia);
    }
    aumentarAnuncio() {
        this.anuncio.Visitas = this.anuncio.Visitas + 1;
        this.anuncioService.updateAnuncio(this.anuncio.id, this.anuncio);
        this.user.Anuncio = false;
        this.usuarioService.updateUsuario(localStorage.getItem('userId'), this.user);
    }
    failedAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrt.create({
                cssClass: 'my-custom-class',
                header: this.anuncios[0].Titulo,
                message: this.anuncios[0].Descripcion,
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            this.aumentarAnuncio();
                            //console.log(blah)
                        }
                    }
                    // , {
                    //   text: 'Registrar materia',
                    //   handler: (data) => {
                    //     //this.router.navigate(['/crear-ayudantia']);
                    //     console.log('registrar')
                    //   }
                    // }
                ]
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
                    },
                    {
                        text: 'Elminar',
                        handler: (data) => {
                            //this.remove(id)                  
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
CursosPage.ctorParameters = () => [
    { type: src_app_services_cursos_service__WEBPACK_IMPORTED_MODULE_2__["CursosService"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioService"] },
    { type: src_app_services_materia_solicitud_service__WEBPACK_IMPORTED_MODULE_5__["MateriaSolicitudService"] },
    { type: src_app_services_anuncios_service__WEBPACK_IMPORTED_MODULE_7__["AnunciosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
CursosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cursos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cursos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/cursos/cursos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cursos.page.scss */ "./src/app/folder/cursos/cursos.page.scss")).default]
    })
], CursosPage);



/***/ }),

/***/ "./src/app/models/anuncios.ts":
/*!************************************!*\
  !*** ./src/app/models/anuncios.ts ***!
  \************************************/
/*! exports provided: Anuncios */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Anuncios", function() { return Anuncios; });
class Anuncios {
}


/***/ }),

/***/ "./src/app/models/materia-solicitud.ts":
/*!*********************************************!*\
  !*** ./src/app/models/materia-solicitud.ts ***!
  \*********************************************/
/*! exports provided: MateriaSolicitud */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MateriaSolicitud", function() { return MateriaSolicitud; });
class MateriaSolicitud {
}


/***/ }),

/***/ "./src/app/services/anuncios.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/anuncios.service.ts ***!
  \**********************************************/
/*! exports provided: AnunciosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnunciosService", function() { return AnunciosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




// import firebase from 'firebase/app';
// import 'firebase/firestore';
let AnunciosService = class AnunciosService {
    constructor(firestore) {
        this.firestore = firestore;
        this.anunciosCollection = firestore.collection('Anuncios');
        this.anuncios = this.anunciosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getAnuncios() {
        return this.anuncios;
    }
    // getAyudante(id:string){
    //   return this.ayudantesCollection.doc<Ayudantes>(id).valueChanges();
    // }
    // addAyudante(Ayudantes:Ayudantes){
    //   return this.ayudantesCollection.add({...Ayudantes});
    // }
    updateAnuncio(id, Anuncios) {
        return this.anunciosCollection.doc(id).update(Object.assign({}, Anuncios));
    }
};
AnunciosService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
AnunciosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AnunciosService);



/***/ }),

/***/ "./src/app/services/materia-solicitud.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/materia-solicitud.service.ts ***!
  \*******************************************************/
/*! exports provided: MateriaSolicitudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MateriaSolicitudService", function() { return MateriaSolicitudService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);



let MateriaSolicitudService = class MateriaSolicitudService {
    constructor(firestore) {
        this.materiasCollection = firestore.collection('MateriasSolicitud');
    }
    addMateria(MateriaSolicitud) {
        return this.materiasCollection.add(Object.assign({}, MateriaSolicitud));
    }
};
MateriaSolicitudService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
MateriaSolicitudService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MateriaSolicitudService);



/***/ })

}]);
//# sourceMappingURL=folder-cursos-cursos-module-es2015.js.map