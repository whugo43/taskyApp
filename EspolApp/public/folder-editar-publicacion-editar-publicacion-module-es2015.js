(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-editar-publicacion-editar-publicacion-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/editar-publicacion/editar-publicacion.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/editar-publicacion/editar-publicacion.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\r\n  <ion-toolbar>\r\n\r\n    <ion-segment color=\"tertiary\" value=\"publicaciones\" >\r\n\r\n      <!-- <ion-segment-button *ngIf=\"Rol==Ayudante\" value=\"mis-ayudantias\" [routerLink]=\"['/mis-ayudantias']\" routerDirection=\"root\">\r\n        <ion-icon name=\"file-tray-stacked-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Mis Cursos</ion-label>\r\n      </ion-segment-button> -->\r\n\r\n      <ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\r\n        <ion-icon name=\"newspaper-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Publicaciones</ion-label>\r\n      </ion-segment-button>\r\n      \r\n      <ion-segment-button value=\"cursos\" [routerLink]=\"['/cursos']\" routerDirection=\"root\">\r\n        <ion-icon name=\"library-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 14px;\">Cursos</ion-label>\r\n      </ion-segment-button>\r\n    \r\n    \r\n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-icon name=\"person-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\r\n      </ion-segment-button>\r\n      \r\n  \r\n\r\n  \r\n\r\n    </ion-segment>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n<form #form=\"ngForm\" (ngSubmit)=\"Actualizar(form)\">\r\n    <ion-list>\r\n      <ion-card>\r\n        <div align=\"center\" style=\"margin-top: 15px;margin-bottom: 5px;\">\r\n     \r\n            <ion-label style=\"font-size: 21px;\">Título del anuncio</ion-label>\r\n       \r\n\r\n        </div>\r\n        \r\n        <ion-item>\r\n          <ion-input required placeholder=\"Titulo\" name=\"titulo\" value=\"{{publicacion.Titulo}}\" type='text' ngModel required></ion-input>\r\n        </ion-item>\r\n\r\n\r\n      </ion-card>   \r\n        \r\n      \r\n      <ion-card style=\"margin-top:15px\">\r\n\r\n        <div align=\"center\" style=\"margin-top: 15px;margin-bottom: 5px;\">\r\n     \r\n          <ion-label style=\"font-size: 21px;\">Descripción del anuncio</ion-label>\r\n     \r\n\r\n      </div>\r\n\r\n      <ion-item>\r\n        <ion-textarea required placeholder=\"Descripcion\" name=\"descripcion\" value=\"{{publicacion.Descripcion}}\" type='text' ngModel required></ion-textarea>\r\n\r\n\r\n      </ion-item>\r\n\r\n\r\n\r\n      </ion-card>\r\n      \r\n      <!-- <ion-item>\r\n        <ion-label position=\"floating\">Descripcion</ion-label>\r\n        \r\n      </ion-item> -->\r\n\r\n      <ion-item style=\"margin-top:7.5px;margin-bottom: 7.5px;\">\r\n        \r\n        <ng-container *ngIf=\"file == null\">\r\n          <ion-img id=\"blah\" [src]=\"publicacion.Foto\" alt=\"your image\" style=\"height: 275px;width: 185px;margin:auto\"></ion-img>\r\n\r\n        </ng-container>\r\n        <ng-container  *ngIf=\"file != null\">\r\n          <ion-img id=\"blah\" [src]=\"imageSrc\" alt=\"your image\" style=\"height: 275px;width: 185px;margin:auto\"></ion-img>\r\n\r\n        </ng-container>\r\n       \r\n      </ion-item>\r\n\r\n\r\n      <ion-card style=\"margin-top:15px\">\r\n        <ion-item>\r\n          <ion-label><ion-icon name=\"cloud-upload-outline\"></ion-icon>  <ion-text style='margin-left:7.5px'>Cambiar foto</ion-text></ion-label>\r\n          <ion-input id=\"myFileInput\" (change)=\"readURL($event);\" accept=\"image/*\" placeholder=\"archivo\" name=\"archivo\" type='file' ngModel value=\"{{file}}\"></ion-input>\r\n        \r\n       \r\n        </ion-item>\r\n        <!-- <ion-item>\r\n        <ng-container *ngIf=\"file != null\">\r\n          <ion-button ion-button icon-left (click)=\"removeFile()\" slot=\"end\" color=\"danger\">\r\n            <ion-icon name=\"trash\"></ion-icon>\r\n          </ion-button>\r\n        </ng-container>\r\n      </ion-item> -->\r\n      </ion-card>\r\n      \r\n      \r\n \r\n    </ion-list>\r\n \r\n    <div class=\"ion-padding\" align='center'>\r\n      <ion-button  shape=\"round\" type=\"submit\"  [disabled]=\"form.invalid\" expand=\"block\" style=\"width: 150px;\">\r\n        Actualizar\r\n      </ion-button>\r\n    </div>\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<style>\r\n  #myFileInput{\r\n    position: absolute;\r\n    opacity: 0;\r\n  }\r\n</style>");

/***/ }),

/***/ "./src/app/folder/editar-publicacion/editar-publicacion-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/folder/editar-publicacion/editar-publicacion-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: EditarPublicacionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarPublicacionPageRoutingModule", function() { return EditarPublicacionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _editar_publicacion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editar-publicacion.page */ "./src/app/folder/editar-publicacion/editar-publicacion.page.ts");




const routes = [
    {
        path: '',
        component: _editar_publicacion_page__WEBPACK_IMPORTED_MODULE_3__["EditarPublicacionPage"]
    }
];
let EditarPublicacionPageRoutingModule = class EditarPublicacionPageRoutingModule {
};
EditarPublicacionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditarPublicacionPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/editar-publicacion/editar-publicacion.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/folder/editar-publicacion/editar-publicacion.module.ts ***!
  \************************************************************************/
/*! exports provided: EditarPublicacionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarPublicacionPageModule", function() { return EditarPublicacionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _editar_publicacion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editar-publicacion-routing.module */ "./src/app/folder/editar-publicacion/editar-publicacion-routing.module.ts");
/* harmony import */ var _editar_publicacion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editar-publicacion.page */ "./src/app/folder/editar-publicacion/editar-publicacion.page.ts");







let EditarPublicacionPageModule = class EditarPublicacionPageModule {
};
EditarPublicacionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _editar_publicacion_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditarPublicacionPageRoutingModule"]
        ],
        declarations: [_editar_publicacion_page__WEBPACK_IMPORTED_MODULE_6__["EditarPublicacionPage"]]
    })
], EditarPublicacionPageModule);



/***/ }),

/***/ "./src/app/folder/editar-publicacion/editar-publicacion.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/folder/editar-publicacion/editar-publicacion.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9lZGl0YXItcHVibGljYWNpb24vZWRpdGFyLXB1YmxpY2FjaW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/folder/editar-publicacion/editar-publicacion.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/folder/editar-publicacion/editar-publicacion.page.ts ***!
  \**********************************************************************/
/*! exports provided: EditarPublicacionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarPublicacionPage", function() { return EditarPublicacionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_models_publicaciones_materia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/publicaciones-materia */ "./src/app/models/publicaciones-materia.ts");
/* harmony import */ var src_app_services_publicaciones_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/publicaciones.service */ "./src/app/services/publicaciones.service.ts");







let EditarPublicacionPage = class EditarPublicacionPage {
    constructor(router, angularFireStorage, activateRoute, alertCtrt, loadingController, publicacionesService) {
        this.router = router;
        this.angularFireStorage = angularFireStorage;
        this.activateRoute = activateRoute;
        this.alertCtrt = alertCtrt;
        this.loadingController = loadingController;
        this.publicacionesService = publicacionesService;
        this.publicacion = new src_app_models_publicaciones_materia__WEBPACK_IMPORTED_MODULE_5__["PublicacionesMateria"]();
    }
    ngOnInit() {
        this.activateRoute.paramMap.subscribe(paramMap => {
            const id = paramMap.get('id');
            this.redireccion = paramMap.get('redireccion');
            this.id = id;
            this.publicacionesService.getPublicacionMateria(id).subscribe(res => { this.publicacion = res; this.image = res.Foto; });
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
    readURL(event) {
        if (event.target.files && event.target.files[0]) {
            this.file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = e => this.imageSrc = reader.result;
            reader.readAsDataURL(this.file);
        }
    }
    removeFile() {
        this.file = null;
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
    Actualizar(form) {
        this.presentLoading("Espere por favor...");
        this.guardarArchivo(form.value.titulo, form.value.descripcion);
    }
    guardarArchivo(titulo, descripcion) {
        if (this.file != null) {
            var storageRef = this.angularFireStorage.storage.ref();
            storageRef.child(this.file.name).put(this.file)
                .then(data => {
                data.ref.getDownloadURL().then(downloadURL => this.RegistroCompleto(titulo, descripcion, downloadURL));
            }).catch(err => {
                this.loading.dismiss();
                this.failedAlert("Error al cargar el archivo, intentelo de nuevo");
            });
        }
        else {
            this.RegistroCompleto(titulo, descripcion, null);
        }
    }
    RegistroCompleto(titulo, descripcion, downloadURL) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.publicacion.Titulo = titulo;
            this.publicacion.Descripcion = descripcion;
            if (this.file != null) {
                this.publicacion.Foto = downloadURL;
            }
            this.publicacionesService.updatePublicacionesMateria(this.id, this.publicacion).
                then(auth => {
                this.loading.dismiss();
                if (this.redireccion == 'Publicacion') {
                    this.router.navigate(['/publicaciones']);
                }
                if (this.redireccion == 'Curso') {
                    this.router.navigate(['/curso-detalle', this.publicacion.Materia, this.publicacion.Titulo]);
                }
            }).catch((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.loading.dismiss();
                this.failedAlert("Algo salio mal, intentelo de nuevo");
            }));
        });
    }
};
EditarPublicacionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: src_app_services_publicaciones_service__WEBPACK_IMPORTED_MODULE_6__["PublicacionesService"] }
];
EditarPublicacionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editar-publicacion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./editar-publicacion.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/editar-publicacion/editar-publicacion.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./editar-publicacion.page.scss */ "./src/app/folder/editar-publicacion/editar-publicacion.page.scss")).default]
    })
], EditarPublicacionPage);



/***/ })

}]);
//# sourceMappingURL=folder-editar-publicacion-editar-publicacion-module-es2015.js.map