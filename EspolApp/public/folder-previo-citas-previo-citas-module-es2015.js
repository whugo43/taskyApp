(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-previo-citas-previo-citas-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/previo-citas/previo-citas.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/previo-citas/previo-citas.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar>\n\n    <ion-segment color=\"tertiary\" value=\"citas\" >\n\n      <ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\n        <ion-icon name=\"newspaper-outline\" size=\"large\"></ion-icon> \n        <ion-label style=\"font-size: 14;\">Publicaciones</ion-label>\n      </ion-segment-button>\n      \n      <ion-segment-button value=\"cursos\" [routerLink]=\"['/cursos']\" routerDirection=\"root\">\n        <ion-icon name=\"library-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 14px;\">Cursos</ion-label>\n      </ion-segment-button>\n    \n    \n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\n        <ion-icon name=\"person-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\n      </ion-segment-button>\n\n      <ion-segment-button value=\"citas\" *ngIf = \"local\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\n        <ion-icon name=\"flame-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Citas</ion-label>\n      </ion-segment-button>\n\n\n    </ion-segment>\n    \n\n  </ion-toolbar>\n\n</ion-header>\n<ion-content>\n\n<form #form=\"ngForm\" (ngSubmit)=\"registrarCita(form)\">\n      <ion-list>  \n        \n        \n      \n      <ion-card style=\"margin-top:15px\">\n        <ion-item>\n          <ion-label>Acerca de ti</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-textarea required placeholder=\"Ingresa tu descripción\" name=\"descripcion\" type='text' ngModel required></ion-textarea>\n        </ion-item>\n\n\n\n      </ion-card>\n      \n      <ion-card style=\"margin-top:15px\">\n        <ion-item>\n          <ion-label>Tu sexo: </ion-label>\n          <ion-select required  name='sexo' ngModel>\n           \n                  <ion-select-option value=\"M\">Chico</ion-select-option>\n                  <ion-select-option value=\"F\">Chica</ion-select-option>\n          \n          </ion-select>\n\n        </ion-item>\n        \n  \n      </ion-card>\n      \n    <ion-card style=\"margin-top:15px\">\n      <ion-item>\n        <ion-label>Buscar: </ion-label>\n        <ion-select required  name='busca' ngModel>\n         \n                <ion-select-option value=\"M\">Chicos</ion-select-option>\n                <ion-select-option value=\"F\">Chicas</ion-select-option>\n        \n        </ion-select>\n\n      </ion-item>\n      \n    </ion-card>\n    \n    <ion-card>\n      <ion-item>\n        <ion-icon name=\"calendar-outline\"></ion-icon>\n        <ion-label style=\"margin-left:7.5px\">Fecha de Nacimiento</ion-label>\n        <ion-datetime value=\"1996-05-15\" name=\"nacimiento\" placeholder=\"Seleccionar\" required ngModel></ion-datetime>\n      </ion-item>\n\n    </ion-card>\n\n    \n\n    <ion-card>\n\n      <ion-item>\n        <ion-icon name=\"image-outline\"></ion-icon> <ion-text style=\"margin-left:7.5px\">Foto de perfil</ion-text>\n      \n        <ion-input type='file' accept=\"image/*\" id=\"myFileInput\" name=\"foto\" (change)=\"readURL($event);\" class=\"fileInput\" ngModel required></ion-input>\n      </ion-item>\n\n    </ion-card>\n\n\n    \n\n      \n      </ion-list>\n\n        <ion-button  style=\"width: 150px;margin:auto;\" type=\"submit\"  [disabled]=\"form.invalid\" expand=\"block\">\n          Guardar\n        </ion-button>\n    </form>\n\n</ion-content>\n<style>\n  #myFileInput{\n    position: absolute;\n    opacity: 0;\n  }\n</style>");

/***/ }),

/***/ "./src/app/folder/previo-citas/previo-citas-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/folder/previo-citas/previo-citas-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: PrevioCitasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrevioCitasPageRoutingModule", function() { return PrevioCitasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _previo_citas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./previo-citas.page */ "./src/app/folder/previo-citas/previo-citas.page.ts");




const routes = [
    {
        path: '',
        component: _previo_citas_page__WEBPACK_IMPORTED_MODULE_3__["PrevioCitasPage"]
    }
];
let PrevioCitasPageRoutingModule = class PrevioCitasPageRoutingModule {
};
PrevioCitasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PrevioCitasPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/previo-citas/previo-citas.module.ts":
/*!************************************************************!*\
  !*** ./src/app/folder/previo-citas/previo-citas.module.ts ***!
  \************************************************************/
/*! exports provided: PrevioCitasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrevioCitasPageModule", function() { return PrevioCitasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _previo_citas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./previo-citas-routing.module */ "./src/app/folder/previo-citas/previo-citas-routing.module.ts");
/* harmony import */ var _previo_citas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./previo-citas.page */ "./src/app/folder/previo-citas/previo-citas.page.ts");







let PrevioCitasPageModule = class PrevioCitasPageModule {
};
PrevioCitasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _previo_citas_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrevioCitasPageRoutingModule"]
        ],
        declarations: [_previo_citas_page__WEBPACK_IMPORTED_MODULE_6__["PrevioCitasPage"]]
    })
], PrevioCitasPageModule);



/***/ }),

/***/ "./src/app/folder/previo-citas/previo-citas.page.scss":
/*!************************************************************!*\
  !*** ./src/app/folder/previo-citas/previo-citas.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9wcmV2aW8tY2l0YXMvcHJldmlvLWNpdGFzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/folder/previo-citas/previo-citas.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/folder/previo-citas/previo-citas.page.ts ***!
  \**********************************************************/
/*! exports provided: PrevioCitasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrevioCitasPage", function() { return PrevioCitasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_citas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/citas.service */ "./src/app/services/citas.service.ts");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_models_citas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/citas */ "./src/app/models/citas.ts");
/* harmony import */ var src_app_models_usuarios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/usuarios */ "./src/app/models/usuarios.ts");









let PrevioCitasPage = class PrevioCitasPage {
    constructor(citasService, usuarioService, loadingController, angularFireStorage, router, alertCtrt) {
        this.citasService = citasService;
        this.usuarioService = usuarioService;
        this.loadingController = loadingController;
        this.angularFireStorage = angularFireStorage;
        this.router = router;
        this.alertCtrt = alertCtrt;
        this.usuario = new src_app_models_usuarios__WEBPACK_IMPORTED_MODULE_8__["Usuarios"]();
        this.cita = new src_app_models_citas__WEBPACK_IMPORTED_MODULE_7__["Citas"]();
    }
    ngOnInit() {
        this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => this.usuario = res);
    }
    readURL(event) {
        if (event.target.files && event.target.files[0]) {
            this.file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = e => this.imageSrc = reader.result;
            reader.readAsDataURL(this.file);
        }
    }
    registrarCita(form) {
        this.presentLoading("Espere por favor...");
        this.cita.Apellido = this.usuario.Apellido;
        this.cita.Nombre = this.usuario.Nombre;
        this.cita.Descripcion = form.value.descripcion;
        this.cita.Nacimiento = form.value.nacimiento;
        this.cita.Busca = form.value.busca;
        this.cita.Sexo = form.value.sexo;
        this.cita.Activa = true;
        this.cita.Usuario = localStorage.getItem('userId');
        console.log(this.cita);
        this.guardarArchivo();
    }
    // crearPublicacion(form){
    //   this.presentLoading("Espere por favor...");
    //   var fechaActual = new Date();
    //   this.publicacion.Titulo = form.value.titulo
    //   this.publicacion.Descripcion = form.value.descripcion
    //   this.publicacion.Estudiante = localStorage.getItem('userId')
    //   this.publicacion.Fecha = fechaActual.toString();
    //   this.publicacion.Visitas = 0;
    //   if(this.rol == 'Ayudante'){
    //   this.publicacion.Materia = form.value.curso;}
    //   if(this.rol == 'Estudiante'){
    //     this.publicacion.Materia = 'Estudiante';}
    //   console.log(form.value.curso)
    //   this.publicacion.Visibilidad = true;
    //   this.publicacion.Rol = localStorage.getItem('Rol')
    //   this.usuario.Publicaciones = this.usuario.Publicaciones + 1;
    //   this.guardarArchivo();
    // }
    guardarArchivo() {
        var storageRef = this.angularFireStorage.storage.ref();
        storageRef.child(this.file.name).put(this.file)
            .then(data => {
            data.ref.getDownloadURL().then(downloadURL => { this.registroCompleto(downloadURL); })
                .catch(err => {
                this.loading.dismiss();
                console.log('error');
            });
        });
    }
    registroCompleto(downloadURL) {
        this.cita.Foto = downloadURL;
        this.citasService.addCita(this.cita, localStorage.getItem('userId')).then(auth => {
            this.loading.dismiss();
            this.usuario.Citas = true;
            this.usuarioService.updateUsuario(localStorage.getItem('userId'), this.usuario);
            this.router.navigate(["/publicaciones"]);
        }).catch((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading.dismiss();
            this.failedAlert("Algo salió mal, inténtelo de nuevo");
        }));
    }
    presentLoading(mensaje) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: mensaje,
            });
            return this.loading.present();
        });
    }
    failedAlert(text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrt.create({
                cssClass: 'my-custom-class',
                header: text,
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
PrevioCitasPage.ctorParameters = () => [
    { type: src_app_services_citas_service__WEBPACK_IMPORTED_MODULE_4__["CitasService"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
PrevioCitasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-previo-citas',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./previo-citas.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/previo-citas/previo-citas.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./previo-citas.page.scss */ "./src/app/folder/previo-citas/previo-citas.page.scss")).default]
    })
], PrevioCitasPage);



/***/ })

}]);
//# sourceMappingURL=folder-previo-citas-previo-citas-module-es2015.js.map