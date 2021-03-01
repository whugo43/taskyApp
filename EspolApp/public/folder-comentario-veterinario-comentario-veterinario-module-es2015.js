(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-comentario-veterinario-comentario-veterinario-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/comentario-veterinario/comentario-veterinario.page.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/comentario-veterinario/comentario-veterinario.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\r\n  <ion-toolbar>\r\n\r\n    <ion-segment color=\"tertiary\" value=\"adopcion\" >\r\n\r\n      <!-- <ion-segment-button *ngIf=\"Rol==Ayudante\" value=\"mis-ayudantias\" [routerLink]=\"['/mis-ayudantias']\" routerDirection=\"root\">\r\n        <ion-icon name=\"file-tray-stacked-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Mis Cursos</ion-label>\r\n      </ion-segment-button> -->\r\n\r\n      <ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\r\n        <ion-icon name=\"newspaper-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Publicaciones</ion-label>\r\n      </ion-segment-button>\r\n      \r\n      <ion-segment-button value=\"cursos\" [routerLink]=\"['/cursos']\" routerDirection=\"root\">\r\n        <ion-icon name=\"library-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 14px;\">Cursos</ion-label>\r\n      </ion-segment-button>\r\n    \r\n    \r\n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-icon name=\"person-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\r\n      </ion-segment-button>\r\n\r\n      <ion-segment-button value=\"adopcion\" [routerLink]=\"['/adopcion']\" routerDirection=\"root\">\r\n        <ion-icon name=\"paw-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Adopcion</ion-label>\r\n      </ion-segment-button>\r\n\r\n  \r\n\r\n    </ion-segment>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-toolbar>\r\n\r\n    <ion-segment color=\"tertiary\" value=\"comentarios\">\r\n    \r\n     <ion-segment-button value=\"datos\" [routerLink]=\"['/veterinario-detalle', id]\" routerDirection=\"root\">\r\n          <ion-icon name=\"information-circle-outline\" size=\"large\"></ion-icon> \r\n          <ion-label>Datos</ion-label>\r\n        </ion-segment-button>\r\n        \r\n        <ion-segment-button value=\"comentarios\" [routerLink]=\"['/comentario-veterinario', id]\" routerDirection=\"root\">\r\n          <ion-icon name=\"chatbubbles-outline\" size=\"large\"></ion-icon> <ion-label>Comentarios</ion-label>\r\n        </ion-segment-button>\r\n            \r\n      </ion-segment>\r\n    \r\n    </ion-toolbar>\r\n    <ion-searchbar\r\n    color=\"light\" \r\n    placeholder = \"Buscar comentario...\"\r\n    animated\r\n\r\n    (ionChange)=\"buscar($event)\">\r\n    </ion-searchbar>\r\n\r\n \r\n  <ng-container *ngFor=\"let comentario of comentarios  | filtroComentarios: textoBuscar\" >\r\n     <ng-container *ngFor=\"let usuario of usuarios\">\r\n\r\n        <ion-card *ngIf=\"comentario.Veterinario == id && usuario.id == comentario.usuario\">\r\n          <ion-card-header>\r\n            <ion-item>\r\n              <ion-avatar>\r\n                <img src=\"{{usuario.FotoPerfil}}\">\r\n              </ion-avatar>\r\n              \r\n              <ion-label style=\"margin-left: 7.5px;\">{{usuario.Nombre}} {{usuario.Apellido}}</ion-label>\r\n              \r\n  \r\n              <ion-icon name=\"trash-outline\" slot=\"end\" color='danger' *ngIf=\"comentario.usuario == miID\" (click)=\"alert(comentario.id)\"></ion-icon>\r\n            </ion-item>\r\n\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n     \r\n              <ion-label>{{comentario.Comentario}}</ion-label>\r\n\r\n       \r\n          </ion-card-content>\r\n          <ion-item>\r\n            {{comentario.Fecha | date:'yyyy/MM/dd'}}\r\n          </ion-item>\r\n          \r\n          \r\n             \r\n        </ion-card>\r\n\r\n      </ng-container>\r\n    \r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"getDatos()\">\r\n\r\n    <div style=\"margin-top: 50px;\" align='center'> \r\n      <ion-text color=\"medium\">\r\n\r\n        <img src=\"https://firebasestorage.googleapis.com/v0/b/taskyapp01.appspot.com/o/iconos%2FcomentariosUsuarios.png?alt=media&token=438decd8-4f88-4ae3-928e-11e7ff1f6a9b\" style=\"width: 55%; height:62%;\" alet=\"foto\">\r\n        \r\n        <p style=\"font-size: 21px;\">No hay comentarios registrados.</p>\r\n      </ion-text>  \r\n    </div>\r\n  </ng-container>\r\n\r\n  <ion-fab *ngIf=\"id != miID\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"crearComentario()\">\r\n     <ion-icon name=\"add-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  \r\n</ion-content>");

/***/ }),

/***/ "./src/app/folder/comentario-veterinario/comentario-veterinario-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/folder/comentario-veterinario/comentario-veterinario-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ComentarioVeterinarioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentarioVeterinarioPageRoutingModule", function() { return ComentarioVeterinarioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _comentario_veterinario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comentario-veterinario.page */ "./src/app/folder/comentario-veterinario/comentario-veterinario.page.ts");




const routes = [
    {
        path: '',
        component: _comentario_veterinario_page__WEBPACK_IMPORTED_MODULE_3__["ComentarioVeterinarioPage"]
    }
];
let ComentarioVeterinarioPageRoutingModule = class ComentarioVeterinarioPageRoutingModule {
};
ComentarioVeterinarioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComentarioVeterinarioPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/comentario-veterinario/comentario-veterinario.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/folder/comentario-veterinario/comentario-veterinario.module.ts ***!
  \********************************************************************************/
/*! exports provided: ComentarioVeterinarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentarioVeterinarioPageModule", function() { return ComentarioVeterinarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _comentario_veterinario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comentario-veterinario-routing.module */ "./src/app/folder/comentario-veterinario/comentario-veterinario-routing.module.ts");
/* harmony import */ var _comentario_veterinario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comentario-veterinario.page */ "./src/app/folder/comentario-veterinario/comentario-veterinario.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








let ComentarioVeterinarioPageModule = class ComentarioVeterinarioPageModule {
};
ComentarioVeterinarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _comentario_veterinario_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComentarioVeterinarioPageRoutingModule"]
        ],
        declarations: [_comentario_veterinario_page__WEBPACK_IMPORTED_MODULE_6__["ComentarioVeterinarioPage"]]
    })
], ComentarioVeterinarioPageModule);



/***/ }),

/***/ "./src/app/folder/comentario-veterinario/comentario-veterinario.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/folder/comentario-veterinario/comentario-veterinario.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9jb21lbnRhcmlvLXZldGVyaW5hcmlvL2NvbWVudGFyaW8tdmV0ZXJpbmFyaW8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/folder/comentario-veterinario/comentario-veterinario.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/folder/comentario-veterinario/comentario-veterinario.page.ts ***!
  \******************************************************************************/
/*! exports provided: ComentarioVeterinarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentarioVeterinarioPage", function() { return ComentarioVeterinarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_models_comentariosVeterinario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/comentariosVeterinario */ "./src/app/models/comentariosVeterinario.ts");
/* harmony import */ var src_app_services_comentarios_veterinarios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/comentarios-veterinarios.service */ "./src/app/services/comentarios-veterinarios.service.ts");







let ComentarioVeterinarioPage = class ComentarioVeterinarioPage {
    constructor(activateRoute, usuarioService, comentariosVeterinariosService, alertCtrt, router) {
        this.activateRoute = activateRoute;
        this.usuarioService = usuarioService;
        this.comentariosVeterinariosService = comentariosVeterinariosService;
        this.alertCtrt = alertCtrt;
        this.router = router;
        this.usuarios = [];
        this.comentarios = [];
        this.comentario = new src_app_models_comentariosVeterinario__WEBPACK_IMPORTED_MODULE_5__["ComentariosVeterinarios"]();
        this.textoBuscar = '';
    }
    ngOnInit() {
        this.miID = localStorage.getItem('userId');
        this.activateRoute.paramMap.subscribe(paramMap => {
            const idUsuario = paramMap.get('id');
            this.id = idUsuario;
        });
        this.usuarioService.getUsuarios().subscribe(res => this.usuarios = res);
        this.comentariosVeterinariosService.getComentarios().subscribe(res => this.comentarios = res);
    }
    getDatos() {
        for (let i = 0; i < this.comentarios.length; i++) {
            if (this.comentarios[i].Veterinario == this.id) {
                return false;
            }
        }
        return true;
    }
    alert(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrt.create({
                cssClass: 'my-custom-class',
                header: "¿Desea eliminar este comentario?",
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
        this.comentariosVeterinariosService.removeComentario(id);
    }
    crearComentario() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrt.create({
                cssClass: 'my-custom-class',
                header: 'Agregar comentario:',
                // message: 'Nombre del curso:',
                inputs: [
                    {
                        name: 'curso',
                        placeholder: 'Comentario...',
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
    agregarSolitiud(comentario) {
        var fechaActual = new Date();
        this.comentario.Veterinario = this.id;
        this.comentario.usuario = this.miID;
        this.comentario.Fecha = fechaActual.toString();
        this.comentario.Comentario = comentario;
        this.comentariosVeterinariosService.addComentario(this.comentario);
    }
    buscar(event) {
        const texto = event.target.value;
        this.textoBuscar = texto;
    }
};
ComentarioVeterinarioPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"] },
    { type: src_app_services_comentarios_veterinarios_service__WEBPACK_IMPORTED_MODULE_6__["ComentariosVeterinariosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ComentarioVeterinarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comentario-veterinario',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comentario-veterinario.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/comentario-veterinario/comentario-veterinario.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comentario-veterinario.page.scss */ "./src/app/folder/comentario-veterinario/comentario-veterinario.page.scss")).default]
    })
], ComentarioVeterinarioPage);



/***/ }),

/***/ "./src/app/models/comentariosVeterinario.ts":
/*!**************************************************!*\
  !*** ./src/app/models/comentariosVeterinario.ts ***!
  \**************************************************/
/*! exports provided: ComentariosVeterinarios */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentariosVeterinarios", function() { return ComentariosVeterinarios; });
class ComentariosVeterinarios {
}


/***/ }),

/***/ "./src/app/services/comentarios-veterinarios.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/comentarios-veterinarios.service.ts ***!
  \**************************************************************/
/*! exports provided: ComentariosVeterinariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentariosVeterinariosService", function() { return ComentariosVeterinariosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let ComentariosVeterinariosService = class ComentariosVeterinariosService {
    constructor(firestore) {
        this.ComentariosCollection = firestore.collection('ComentariosVeterinarios', ref => ref.orderBy("Fecha", "desc"));
        this.Comentarios = this.ComentariosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getComentarios() {
        return this.Comentarios;
    }
    getComentario(id) {
        return this.ComentariosCollection.doc(id).valueChanges();
    }
    addComentario(Comentarios) {
        return this.ComentariosCollection.add(Object.assign({}, Comentarios));
    }
    removeComentario(id) {
        return this.ComentariosCollection.doc(id).delete();
    }
};
ComentariosVeterinariosService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
ComentariosVeterinariosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ComentariosVeterinariosService);



/***/ })

}]);
//# sourceMappingURL=folder-comentario-veterinario-comentario-veterinario-module-es2015.js.map