(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-adopcion-editar-adopcion-editar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/adopcion-editar/adopcion-editar.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/adopcion-editar/adopcion-editar.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\r\n  <ion-toolbar>\r\n\r\n    <ion-segment color=\"tertiary\" value=\"adopcion\" >\r\n\r\n\r\n      <ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\r\n        <ion-icon name=\"newspaper-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Publicaciones</ion-label>\r\n      </ion-segment-button>\r\n      \r\n      <ion-segment-button value=\"cursos\" [routerLink]=\"['/cursos']\" routerDirection=\"root\">\r\n        <ion-icon name=\"library-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 14px;\">Cursos</ion-label>\r\n      </ion-segment-button>\r\n    \r\n    \r\n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-icon name=\"person-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\r\n      </ion-segment-button>\r\n\r\n      <ion-segment-button value=\"adopcion\" [routerLink]=\"['/adopcion']\" routerDirection=\"root\">\r\n        <ion-icon name=\"paw-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Adopcion</ion-label>\r\n      </ion-segment-button>\r\n\r\n    </ion-segment>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n<ion-content>\r\n\r\n<form #form=\"ngForm\" (ngSubmit)=\"crearAdopcion(form)\">\r\n      <ion-list>   \r\n        \r\n        <ion-card style=\"margin-top:15px\">\r\n          <ion-item>\r\n            <ion-label>Título </ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n          \r\n            <ion-input required value=\"{{adopcion.Titulo}}\" name=\"titulo\" type='text' ngModel required></ion-input>\r\n          </ion-item>\r\n\r\n        </ion-card>\r\n\r\n\r\n      <ion-card style=\"margin-top:15px\">\r\n        <ion-item>\r\n          <ion-label>Descripción </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-textarea required value=\"{{adopcion.Descripcion}}\" name=\"descripcion\" type='text' ngModel required></ion-textarea>\r\n        </ion-item>\r\n\r\n\r\n\r\n      </ion-card>\r\n\r\n    <ion-card style=\"margin-top:15px\">\r\n      <ion-item>\r\n\r\n        <ion-item>\r\n          <ion-icon name=\"image-outline\"></ion-icon> <ion-text color=\"\" style=\"margin-left: 7.5px;\">Editar foto 1</ion-text>\r\n      \r\n        <ion-input type='file' accept=\"image/*\" id=\"myFileInput\" name=\"foto1\" (change)=\"readURL1($event);\" class=\"fileInput\" ngModel></ion-input>\r\n\r\n        </ion-item>\r\n\r\n        <ion-item slot='end' *ngIf='adopcion.Foto2==\"\"'>\r\n          <ion-icon name=\"images-outline\"></ion-icon> <ion-text color=\"\" style=\"margin-left: 7.5px;\">Añadir otra foto</ion-text>\r\n      \r\n          <ion-input type='file' accept=\"image/*\" id=\"myFileInput\" name=\"foto2\" (change)=\"readURL2($event);\" class=\"fileInput\" ngModel></ion-input>\r\n\r\n        </ion-item>\r\n\r\n        <ion-item slot='end' *ngIf='adopcion.Foto2!=\"\"'>\r\n          <ion-icon name=\"images-outline\"></ion-icon> <ion-text color=\"\" style=\"margin-left: 7.5px;\">Editar foto 2</ion-text>\r\n      \r\n          <ion-input type='file' accept=\"image/*\" id=\"myFileInput\" name=\"foto2\" (change)=\"readURL2($event);\" class=\"fileInput\" ngModel></ion-input>\r\n\r\n        </ion-item>\r\n        \r\n      \r\n        \r\n\r\n      </ion-item>\r\n\r\n    </ion-card>\r\n    \r\n    <ion-card style=\"margin-top:15px\">\r\n      <ion-item>\r\n\r\n        <ion-img id=\"blah\" [src]=\"image\" alt=\"your image\" style=\"margin-top:5px;margin-bottom: 5px;height: 250px;width: 250px;\"></ion-img>\r\n      \r\n        \r\n        <ng-container *ngIf='image1!=\"\"'>\r\n          <ion-img id=\"blah\" [src]=\"image1\" alt=\"your image\" style=\"margin-left: 5px;margin-top:5px;margin-bottom: 5px;height: 250px;width: 250px;\"></ion-img>\r\n          <ion-icon *ngIf='image1!=\"\"' size=\"large\" color='danger' name=\"trash-outline\" (click)=\"eliminarFoto2()\"></ion-icon>\r\n        </ng-container>\r\n        \r\n\r\n        \r\n      </ion-item>\r\n\r\n    </ion-card>\r\n\r\n\r\n  </ion-list>\r\n  \r\n\r\n    <ion-button  style=\"width: 150px;margin:auto;\" type=\"submit\"  [disabled]=\"form.invalid\" expand=\"block\">\r\n      Actualizar\r\n    </ion-button>\r\n  </form>\r\n\r\n</ion-content>\r\n<style>\r\n#myFileInput{\r\n  position: absolute;\r\n  opacity: 0;\r\n}\r\n</style>\r\n");

/***/ }),

/***/ "./src/app/folder/adopcion-editar/adopcion-editar-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/folder/adopcion-editar/adopcion-editar-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: AdopcionEditarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdopcionEditarPageRoutingModule", function() { return AdopcionEditarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _adopcion_editar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adopcion-editar.page */ "./src/app/folder/adopcion-editar/adopcion-editar.page.ts");




const routes = [
    {
        path: '',
        component: _adopcion_editar_page__WEBPACK_IMPORTED_MODULE_3__["AdopcionEditarPage"]
    }
];
let AdopcionEditarPageRoutingModule = class AdopcionEditarPageRoutingModule {
};
AdopcionEditarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdopcionEditarPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/adopcion-editar/adopcion-editar.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/folder/adopcion-editar/adopcion-editar.module.ts ***!
  \******************************************************************/
/*! exports provided: AdopcionEditarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdopcionEditarPageModule", function() { return AdopcionEditarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _adopcion_editar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adopcion-editar-routing.module */ "./src/app/folder/adopcion-editar/adopcion-editar-routing.module.ts");
/* harmony import */ var _adopcion_editar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adopcion-editar.page */ "./src/app/folder/adopcion-editar/adopcion-editar.page.ts");







let AdopcionEditarPageModule = class AdopcionEditarPageModule {
};
AdopcionEditarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _adopcion_editar_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdopcionEditarPageRoutingModule"]
        ],
        declarations: [_adopcion_editar_page__WEBPACK_IMPORTED_MODULE_6__["AdopcionEditarPage"]]
    })
], AdopcionEditarPageModule);



/***/ }),

/***/ "./src/app/folder/adopcion-editar/adopcion-editar.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/folder/adopcion-editar/adopcion-editar.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9hZG9wY2lvbi1lZGl0YXIvYWRvcGNpb24tZWRpdGFyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/folder/adopcion-editar/adopcion-editar.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/folder/adopcion-editar/adopcion-editar.page.ts ***!
  \****************************************************************/
/*! exports provided: AdopcionEditarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdopcionEditarPage", function() { return AdopcionEditarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_models_adopcion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/adopcion */ "./src/app/models/adopcion.ts");
/* harmony import */ var src_app_services_adopcion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/adopcion.service */ "./src/app/services/adopcion.service.ts");







let AdopcionEditarPage = class AdopcionEditarPage {
    constructor(angularFireStorage, router, adopcionService, alertCtrt, activateRoute, loadingController) {
        this.angularFireStorage = angularFireStorage;
        this.router = router;
        this.adopcionService = adopcionService;
        this.alertCtrt = alertCtrt;
        this.activateRoute = activateRoute;
        this.loadingController = loadingController;
        this.adopcion = new src_app_models_adopcion__WEBPACK_IMPORTED_MODULE_5__["Adopcion"]();
    }
    ngOnInit() {
        this.activateRoute.paramMap.subscribe(paramMap => {
            const id = paramMap.get('id');
            this.id = id;
            this.adopcionService.getAdopcion(id).subscribe(res => { this.adopcion = res; this.image = res.Foto1; this.image1 = res.Foto2; });
        });
    }
    readURL1(event) {
        if (event.target.files && event.target.files[0]) {
            this.file1 = event.target.files[0];
            const reader = new FileReader();
            reader.onload = e => this.imageSrc = reader.result;
            reader.readAsDataURL(this.file1);
            this.guardarunarchivo(this.file1, 1);
        }
    }
    eliminarFoto2() {
        this.image1 = '';
        this.adopcion.Foto2 = '';
    }
    eliminarFoto1() {
        this.image = '';
        this.adopcion.Foto1 = '';
    }
    readURL2(event) {
        if (event.target.files && event.target.files[0]) {
            this.file2 = event.target.files[0];
            const reader = new FileReader();
            reader.onload = e => this.imageSrc2 = reader.result;
            reader.readAsDataURL(this.file2);
            this.guardarunarchivo(this.file2, 2);
        }
    }
    crearAdopcion(form) {
        this.presentLoading("Espere por favor...");
        this.adopcion.Titulo = form.value.titulo;
        this.adopcion.Descripcion = form.value.descripcion;
        if (this.file1 != null && this.file2 != null) {
            this.guardarArchivo();
        }
        else if (this.file1 != null) {
            this.guardarunarchivo(this.file1, 1);
            this.registroCompleto();
        }
        else if (this.file2 != null) {
            this.guardarunarchivo(this.file2, 2);
            this.registroCompleto();
        }
        else {
            this.registroCompleto();
        }
    }
    guardarunarchivo(file, num) {
        var storageRef = this.angularFireStorage.storage.ref();
        storageRef.child(file.name).put(file)
            .then(data => {
            data.ref.getDownloadURL().then(downloadURL => {
                if (num == 1) {
                    this.adopcion.Foto1 = downloadURL;
                    this.image = downloadURL;
                }
                else if (num == 2) {
                    this.adopcion.Foto2 = downloadURL;
                    this.image1 = downloadURL;
                }
            })
                .catch(err => {
                this.loading.dismiss();
                console.log('error');
            });
        });
    }
    guardarArchivo() {
        var storageRef = this.angularFireStorage.storage.ref();
        storageRef.child(this.file1.name).put(this.file1)
            .then(data => {
            data.ref.getDownloadURL().then(downloadURL => {
                this.adopcion.Foto1 = downloadURL;
                var storageRef = this.angularFireStorage.storage.ref();
                storageRef.child(this.file2.name).put(this.file2)
                    .then(data => {
                    data.ref.getDownloadURL().then(downloadURL => {
                        this.adopcion.Foto2 = downloadURL;
                        this.registroCompleto();
                    })
                        .catch(err => {
                        this.loading.dismiss();
                        console.log('error');
                    });
                });
            })
                .catch(err => {
                this.loading.dismiss();
                console.log('error');
            });
        });
    }
    registroCompleto() {
        this.adopcionService.updateAdopcion(this.id, this.adopcion).then(auth => {
            this.loading.dismiss();
            this.router.navigate(["/adopcion"]);
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
AdopcionEditarPage.ctorParameters = () => [
    { type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_adopcion_service__WEBPACK_IMPORTED_MODULE_6__["AdopcionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
AdopcionEditarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adopcion-editar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./adopcion-editar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/adopcion-editar/adopcion-editar.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./adopcion-editar.page.scss */ "./src/app/folder/adopcion-editar/adopcion-editar.page.scss")).default]
    })
], AdopcionEditarPage);



/***/ })

}]);
//# sourceMappingURL=folder-adopcion-editar-adopcion-editar-module-es2015.js.map