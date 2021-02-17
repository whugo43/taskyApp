(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-registro-registro-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/registro/registro.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/registro/registro.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Registro</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content padding>\r\n  <ion-card>\r\n    <!-- <ion-list>\r\n      <ion-img src=\"../../assets/log.png\"></ion-img>\r\n    </ion-list> -->\r\n    <div align=\"center\" style=\"margin-top:15px\">\r\n      <label style=\"font-size: 31px;\">Registro</label>\r\n    </div>\r\n\r\n    <form #form=\"ngForm\" (ngSubmit)=\"RegistrarUser(form)\">\r\n      <ion-list>   \r\n          \r\n        <ion-item>\r\n          <ion-label><ion-icon name=\"person-outline\"></ion-icon><ion-text color=\"danger\"></ion-text></ion-label>\r\n          <ion-input required placeholder=\"Nombre\" name=\"nombre\" type='text' ngModel required></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label><ion-icon name=\"person-outline\"></ion-icon><ion-text color=\"danger\"></ion-text></ion-label>\r\n          <ion-input required placeholder=\"Apellido\" name=\"apellido\" type='text' ngModel required></ion-input>\r\n        </ion-item>\r\n        \r\n        <ion-item>\r\n          <ion-label><ion-icon name=\"mail-outline\"></ion-icon><ion-text color=\"danger\"></ion-text></ion-label>\r\n          <ion-input required placeholder=\"Correo\" name=\"email\" type='email' ngModel required></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label><ion-icon name=\"key-outline\"></ion-icon> <ion-text color=\"danger\"></ion-text></ion-label>\r\n          <ion-input placeholder=\"Contraseña\" name=\"password\" type='password' ngModel required></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label><ion-icon name=\"call-outline\"></ion-icon> <ion-text color=\"danger\"></ion-text></ion-label>\r\n          <ion-input placeholder=\"WhatsApp\" name=\"telefono\" type='text' ngModel required></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label><ion-icon name=\"card-outline\"></ion-icon> <ion-text color=\"danger\"></ion-text></ion-label>\r\n          <ion-input placeholder=\"Matricula\" name=\"matricula\" type='text' maxlength = '9' ngModel required></ion-input>\r\n        </ion-item>\r\n\r\n\r\n\r\n        <!-- <ion-item>\r\n\r\n          pattern=\"\\d\" \r\n            <ion-label>Rol</ion-label>\r\n            <ion-select placeholder=\"\" name=\"rol\" ngModel required>   \r\n              <ion-select-option  value=\"profesor\">Profesor </ion-select-option>\r\n              <ion-select-option  value=\"estudiante\">Estudiante </ion-select-option> \r\n            </ion-select>\r\n          </ion-item> -->\r\n        \r\n        \r\n        \r\n        <ion-card>\r\n\r\n          <ion-item>\r\n            <ion-label><ion-icon name=\"image-outline\"></ion-icon> Foto de perfil<ion-text color=\"\"></ion-text></ion-label>\r\n          \r\n            <ion-input type='file' accept=\"image/*\" id=\"myFileInput\" name=\"foto\" (change)=\"readURL($event);\" class=\"fileInput\" ngModel required></ion-input>\r\n          </ion-item>\r\n\r\n\r\n          <!-- <ion-item>\r\n            <ion-label><ion-icon name=\"image-outline\"></ion-icon> Seleccione su foto de perfil <ion-text color=\"\"></ion-text></ion-label>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-input type='file' accept=\"image/*\" id=\"perfilFoto\" name=\"foto\" (change)=\"readURL($event);\" class=\"fileInput\" ngModel required></ion-input>\r\n          </ion-item> -->\r\n          \r\n          \r\n        </ion-card>\r\n\r\n        <ion-card>\r\n          <ion-item>\r\n            <ion-label><ion-icon name=\"image-outline\"></ion-icon> Foto de su carnet <ion-text color=\"\"></ion-text></ion-label>\r\n            <ion-input type='file' accept=\"image/*\" id=\"myFileInput\" name=\"foto\" (change)=\"readURL1($event);\" class=\"fileInput\" ngModel required></ion-input>\r\n          </ion-item>\r\n          <ion-label style=\"margin:auto\">Con esto validaremos que seas un estudiante.</ion-label>\r\n\r\n\r\n        </ion-card>\r\n        \r\n\r\n        <!-- <ion-item *ngIf=\"imageSrc != null\">\r\n        <ion-grid>\r\n          <ion-row> \r\n            <ion-col> </ion-col>\r\n            <ion-col>\r\n            <ion-label class=\"perfil\"><ion-text>Foto de perfil</ion-text></ion-label>\r\n              <br>\r\n              <ion-thumbnail>\r\n                  <ion-img id=\"blah\" *ngIf=\"imageSrc != null\" [src]=\"imageSrc\" alt=\"your image\"></ion-img>\r\n                </ion-thumbnail>\r\n            </ion-col>\r\n            <ion-col></ion-col>\r\n          </ion-row>\r\n        </ion-grid>  \r\n        </ion-item> -->\r\n      </ion-list> \r\n\r\n      <div class=\"ion-padding\" align=\"center\">\r\n        <ion-button type=\"submit\"  style=\"width: 150px;\" [disabled]=\"form.invalid\" expand=\"block\">\r\n          Registrar\r\n        </ion-button>\r\n        <p style=\"font-size: 15px;\" routerLink=\"/login\" routerDirection=\"root\">Ya tengo cuenta</p>\r\n      </div>\r\n    </form>\r\n  </ion-card>\r\n</ion-content>\r\n\r\n<style>\r\n#myFileInput{\r\n  position: absolute;\r\n  opacity: 0;\r\n}\r\n  .perfil {\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 200px;\r\n  }\r\n  .item ion-thumbnail {\r\n    min-width: 10rem;    \r\n    min-height: 10rem;\r\n    /* img {\r\n      max-width: 10rem;    \r\n      min-width: 10rem;\r\n    }   */\r\n  }\r\n  ion-img {     \r\n      width: 60%;\r\n      margin: auto;\r\n      display: block;\r\n  }\r\n</style>");

/***/ }),

/***/ "./src/app/folder/registro/registro-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/folder/registro/registro-routing.module.ts ***!
  \************************************************************/
/*! exports provided: RegistroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageRoutingModule", function() { return RegistroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registro.page */ "./src/app/folder/registro/registro.page.ts");




const routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_3__["RegistroPage"]
    }
];
let RegistroPageRoutingModule = class RegistroPageRoutingModule {
};
RegistroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistroPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/registro/registro.module.ts":
/*!****************************************************!*\
  !*** ./src/app/folder/registro/registro.module.ts ***!
  \****************************************************/
/*! exports provided: RegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function() { return RegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registro-routing.module */ "./src/app/folder/registro/registro-routing.module.ts");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro.page */ "./src/app/folder/registro/registro.page.ts");







let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroPageRoutingModule"]
        ],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]]
    })
], RegistroPageModule);



/***/ }),

/***/ "./src/app/folder/registro/registro.page.scss":
/*!****************************************************!*\
  !*** ./src/app/folder/registro/registro.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9yZWdpc3Ryby9yZWdpc3Ryby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/folder/registro/registro.page.ts":
/*!**************************************************!*\
  !*** ./src/app/folder/registro/registro.page.ts ***!
  \**************************************************/
/*! exports provided: RegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPage", function() { return RegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_mensaje_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/mensaje-error.service */ "./src/app/services/mensaje-error.service.ts");








let RegistroPage = class RegistroPage {
    constructor(angularFireStorage, authService, router, mensajeErrorService, alertCtrt, loadingController) {
        this.angularFireStorage = angularFireStorage;
        this.authService = authService;
        this.router = router;
        this.mensajeErrorService = mensajeErrorService;
        this.alertCtrt = alertCtrt;
        this.loadingController = loadingController;
    }
    ngOnInit() {
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
            reader.onload = e => this.imageSrc = reader.result;
            reader.readAsDataURL(this.file);
        }
    }
    readURL1(event) {
        if (event.target.files && event.target.files[0]) {
            this.file1 = event.target.files[0];
            const reader = new FileReader();
            reader.onload = e => this.imageSrc = reader.result;
            reader.readAsDataURL(this.file1);
        }
    }
    RegistrarUser(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.presentLoading("Espere por favor...");
            var telefono = form.value.telefono;
            var primeros = telefono.slice(0, 3);
            if (telefono.slice(0, 1) == 0) {
                telefono = '+593' + telefono.slice(1, telefono.length);
            }
            else if (primeros == '+593') {
                telefono = telefono;
            }
            console.log(telefono);
            this.guardarArchivo(form.value.email, form.value.password, form.value.nombre, form.value.apellido, form.value.matricula, telefono);
        });
    }
    guardarArchivo(email, password, nombre, apellido, matricula, telefono) {
        var storageRef = this.angularFireStorage.storage.ref();
        var storageRef1 = this.angularFireStorage.storage.ref();
        storageRef.child(this.file.name).put(this.file)
            .then(data => {
            data.ref.getDownloadURL().then(downloadURL => {
                storageRef1.child(this.file1.name).put(this.file1)
                    .then(data => {
                    data.ref.getDownloadURL().then(downloadURL1 => this.RegistrarUserCompleto(email, password, nombre, apellido, matricula, telefono, downloadURL, downloadURL1));
                }).catch(err => { this.loading.dismiss(), this.failedAlert("Error al cargar la foto del carnet, intentelo de nuevo"); });
            }).catch(err => { this.loading.dismiss(), this.failedAlert("Error al cargar la foto de perfil, intentelo de nuevo"); });
        });
    }
    RegistrarUserCompleto(email, password, nombre, apellido, matricula, telefono, downloadURL, downloadURL1) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.authService.signupnUser(email, password, nombre, apellido, matricula, telefono, downloadURL, downloadURL1).
                then(auth => {
                this.loading.dismiss();
                this.router.navigateByUrl("/pendiente");
            }).catch((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.loading.dismiss();
                var mensaje = error.code.split('/')[1];
                const presentarMensaje = this.mensajeErrorService.AuthErrorCodeSpanish(mensaje);
                this.failedAlert(presentarMensaje);
            }));
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
RegistroPage.ctorParameters = () => [
    { type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_mensaje_error_service__WEBPACK_IMPORTED_MODULE_6__["MensajeErrorService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
RegistroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registro',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./registro.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/registro/registro.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./registro.page.scss */ "./src/app/folder/registro/registro.page.scss")).default]
    })
], RegistroPage);



/***/ })

}]);
//# sourceMappingURL=folder-registro-registro-module-es2015.js.map