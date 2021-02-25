(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-mi-perfil-cita-mi-perfil-cita-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/mi-perfil-cita/mi-perfil-cita.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/mi-perfil-cita/mi-perfil-cita.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar>\n\n    <ion-segment color=\"tertiary\" value=\"perfil\" >\n\n      <!-- <ion-segment-button *ngIf=\"Rol==Ayudante\" value=\"publicaciones\" [routerLink]=\"['/mis-ayudantias']\" routerDirection=\"root\">\n        <ion-icon name=\"file-tray-stacked-outline\" size=\"large\"></ion-icon> \n        <ion-label style=\"font-size: 14;\">Mis Cursos</ion-label>\n      </ion-segment-button> -->\n\n      <ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\n        <ion-icon name=\"newspaper-outline\" size=\"large\"></ion-icon> \n        <ion-label style=\"font-size: 14;\">Publicaciones</ion-label>\n      </ion-segment-button>\n      \n      <ion-segment-button value=\"cursos\" [routerLink]=\"['/cursos']\" routerDirection=\"root\">\n        <ion-icon name=\"library-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 14px;\">Cursos</ion-label>\n      </ion-segment-button>\n    \n    \n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\n        <ion-icon name=\"person-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\n      </ion-segment-button>\n\n      <ion-segment-button value=\"citas\" *ngIf = \"mostrarCita == 'Si'\" [routerLink]=\"['/citas']\" routerDirection=\"root\">\n        <ion-icon name=\"flame-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Biffis</ion-label>\n      </ion-segment-button>\n      \n  \n\n  \n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-segment color=\"tertiary\" value=\"perfil\">\n  \n    <ion-segment-button value=\"buscar\" [routerLink]=\"['/curso-detalle',id, nombreCurso]\" routerDirection=\"root\">\n      <ion-icon name=\"accessibility-outline\" size=\"large\"></ion-icon> <ion-label>Buscar</ion-label>\n    </ion-segment-button>\n    \n    <ion-segment-button value=\"ayudantes\" [routerLink]=\"['/curso-ayudantes',id, nombreCurso]\" routerDirection=\"root\">\n      <ion-icon name=\"chatbubbles-outline\" size=\"large\"></ion-icon> <ion-label>Chats</ion-label>\n    </ion-segment-button>\n\n    <ion-segment-button value=\"perfil\" [routerLink]=\"['/mi-perfil-cita']\" routerDirection=\"root\">\n      <ion-icon name=\"person-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\n    </ion-segment-button>\n\n  </ion-segment>\n  \n  <ion-img class=\"circle-pic\"  src=\"{{user.Foto}}\" ></ion-img>\n\n  <ion-card>\n    <ion-item>\n      <ion-icon name=\"person-outline\" size=\"large\" style=\"margin-right: 8px;\"></ion-icon>\n      <ion-label style=\"font-size: 17px;\">{{user.Nombre}} {{user.Apellido}}</ion-label>\n    </ion-item>\n  \n\n\n\n\n\n\n    <ion-item>\n      <ion-icon routerLink=\"/perfil-update\" name=\"create-outline\" size=\"large\" style=\"margin-right: 8px;\" layout=\"icon-end\" slot=\"end\"></ion-icon>\n\n    </ion-item>\n  \n  </ion-card>\n\n  \n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button routerLink=\"/sugerencias\">\n     <ion-icon name=\"help-circle-outline\" size=\"large\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n<style>\n  .circle-pic {     \n    width: 55%;\n    height: 35%;\n    margin: auto;\n    display: block;\n    margin-bottom: 10px;\n    margin-top: 10px;\n    /* -webkit-border-radius: 50%;\n    border-radius: 50%;\n    border-width: 50px; */\n\n  }\n</style>");

/***/ }),

/***/ "./src/app/folder/mi-perfil-cita/mi-perfil-cita-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/folder/mi-perfil-cita/mi-perfil-cita-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: MiPerfilCitaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiPerfilCitaPageRoutingModule", function() { return MiPerfilCitaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mi_perfil_cita_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mi-perfil-cita.page */ "./src/app/folder/mi-perfil-cita/mi-perfil-cita.page.ts");




const routes = [
    {
        path: '',
        component: _mi_perfil_cita_page__WEBPACK_IMPORTED_MODULE_3__["MiPerfilCitaPage"]
    }
];
let MiPerfilCitaPageRoutingModule = class MiPerfilCitaPageRoutingModule {
};
MiPerfilCitaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MiPerfilCitaPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/mi-perfil-cita/mi-perfil-cita.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/folder/mi-perfil-cita/mi-perfil-cita.module.ts ***!
  \****************************************************************/
/*! exports provided: MiPerfilCitaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiPerfilCitaPageModule", function() { return MiPerfilCitaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _mi_perfil_cita_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mi-perfil-cita-routing.module */ "./src/app/folder/mi-perfil-cita/mi-perfil-cita-routing.module.ts");
/* harmony import */ var _mi_perfil_cita_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mi-perfil-cita.page */ "./src/app/folder/mi-perfil-cita/mi-perfil-cita.page.ts");







let MiPerfilCitaPageModule = class MiPerfilCitaPageModule {
};
MiPerfilCitaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mi_perfil_cita_routing_module__WEBPACK_IMPORTED_MODULE_5__["MiPerfilCitaPageRoutingModule"]
        ],
        declarations: [_mi_perfil_cita_page__WEBPACK_IMPORTED_MODULE_6__["MiPerfilCitaPage"]]
    })
], MiPerfilCitaPageModule);



/***/ }),

/***/ "./src/app/folder/mi-perfil-cita/mi-perfil-cita.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/folder/mi-perfil-cita/mi-perfil-cita.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9taS1wZXJmaWwtY2l0YS9taS1wZXJmaWwtY2l0YS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/folder/mi-perfil-cita/mi-perfil-cita.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/folder/mi-perfil-cita/mi-perfil-cita.page.ts ***!
  \**************************************************************/
/*! exports provided: MiPerfilCitaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiPerfilCitaPage", function() { return MiPerfilCitaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_models_citas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/citas */ "./src/app/models/citas.ts");
/* harmony import */ var src_app_services_citas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/citas.service */ "./src/app/services/citas.service.ts");
/* harmony import */ var src_app_services_mensaje_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/mensaje-error.service */ "./src/app/services/mensaje-error.service.ts");







let MiPerfilCitaPage = class MiPerfilCitaPage {
    constructor(usuarioService, angularFireStorage, loadingController, alertCtrt, mensajeErrorService) {
        this.usuarioService = usuarioService;
        this.angularFireStorage = angularFireStorage;
        this.loadingController = loadingController;
        this.alertCtrt = alertCtrt;
        this.mensajeErrorService = mensajeErrorService;
        this.user = new src_app_models_citas__WEBPACK_IMPORTED_MODULE_4__["Citas"]();
    }
    ngOnInit() {
        this.usuarioService.getCita(localStorage.getItem('userId')).subscribe(res => { this.user = res; });
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
    readURL(event) {
        if (event.target.files && event.target.files[0]) {
            this.file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = e => this.image = reader.result;
            reader.readAsDataURL(this.file);
        }
    }
    UpdateUser(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.presentLoading("Espere por favor...");
            this.presentLoading("Espere por favor...");
            var telefono = form.value.telefono;
            if (telefono.length == 10) {
                telefono = '+593' + telefono.slice(1, telefono.length);
            }
            // if(this.file!='null'){
            //   this.guardarArchivo(telefono);
            // }
            // else{
            this.UpdateUserCompleto(telefono, this.image);
            // }
        });
    }
    guardarArchivo(telefono) {
        //this.presentLoading("Espere por favor...");
        var storageRef = this.angularFireStorage.storage.ref();
        storageRef.child(this.file.name).put(this.file)
            .then(data => {
            data.ref.getDownloadURL().then(downloadURL => {
                this.UpdateUserCompleto(telefono, downloadURL);
            }).catch(err => { this.loading.dismiss(), this.failedAlert("Error al cargar la foto de perfil, intentelo de nuevo"); });
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
    UpdateUserCompleto(telefono, downloadURL) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //  this.user.Telefono = telefono;
            //  this.user.FotoPerfil = downloadURL;
            //  var userId = localStorage.getItem('userId')
            //  this.usuarioService.updateUsuario(userId, this.user).
            //  then(
            //    auth=>{
            //      this.loading.dismiss();
            //      
            //      this.router.navigateByUrl("/perfil")     
            //  }  
            //  ).catch(async error => {
            //    this.loading.dismiss();
            //    var mensaje=error.code.split('/')[1];
            //    const presentarMensaje = this.mensajeErrorService.AuthErrorCodeSpanish(mensaje);
            //    this.failedAlert(presentarMensaje)
            //  })
        });
    }
};
MiPerfilCitaPage.ctorParameters = () => [
    { type: src_app_services_citas_service__WEBPACK_IMPORTED_MODULE_5__["CitasService"] },
    { type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_mensaje_error_service__WEBPACK_IMPORTED_MODULE_6__["MensajeErrorService"] }
];
MiPerfilCitaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mi-perfil-cita',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mi-perfil-cita.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/mi-perfil-cita/mi-perfil-cita.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mi-perfil-cita.page.scss */ "./src/app/folder/mi-perfil-cita/mi-perfil-cita.page.scss")).default]
    })
], MiPerfilCitaPage);



/***/ })

}]);
//# sourceMappingURL=folder-mi-perfil-cita-mi-perfil-cita-module-es2015.js.map