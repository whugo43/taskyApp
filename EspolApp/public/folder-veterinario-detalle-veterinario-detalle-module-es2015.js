(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-veterinario-detalle-veterinario-detalle-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/veterinario-detalle/veterinario-detalle.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/veterinario-detalle/veterinario-detalle.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\r\n  <ion-toolbar>\r\n\r\n    <ion-segment color=\"tertiary\" value=\"adopcion\" >\r\n\r\n      <!-- <ion-segment-button *ngIf=\"Rol==Ayudante\" value=\"mis-ayudantias\" [routerLink]=\"['/mis-ayudantias']\" routerDirection=\"root\">\r\n        <ion-icon name=\"file-tray-stacked-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Mis Cursos</ion-label>\r\n      </ion-segment-button> -->\r\n\r\n      <ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\r\n        <ion-icon name=\"newspaper-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Publicaciones</ion-label>\r\n      </ion-segment-button>\r\n      \r\n      <ion-segment-button value=\"cursos\" [routerLink]=\"['/cursos']\" routerDirection=\"root\">\r\n        <ion-icon name=\"library-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 14px;\">Cursos</ion-label>\r\n      </ion-segment-button>\r\n    \r\n    \r\n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-icon name=\"person-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\r\n      </ion-segment-button>\r\n\r\n      <ion-segment-button value=\"adopcion\" [routerLink]=\"['/adopcion']\" routerDirection=\"root\">\r\n        <ion-icon name=\"paw-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Adopcion</ion-label>\r\n      </ion-segment-button>\r\n\r\n  \r\n\r\n    </ion-segment>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-toolbar>\r\n\r\n\r\n    \r\n      <ion-segment color=\"tertiary\" value=\"datos\">\r\n    \r\n        <ion-segment-button value=\"datos\" [routerLink]=\"['/veterinario-detalle', id]\" routerDirection=\"root\">\r\n          <ion-icon name=\"information-circle-outline\" size=\"large\"></ion-icon> \r\n          <ion-label>Datos</ion-label>\r\n        </ion-segment-button>\r\n        \r\n        <ion-segment-button value=\"comentarios\" [routerLink]=\"['/comentario-veterinario', id]\" routerDirection=\"root\">\r\n          <ion-icon name=\"chatbubbles-outline\" size=\"large\"></ion-icon> <ion-label>Comentarios</ion-label>\r\n        </ion-segment-button>\r\n    \r\n    \r\n    \r\n      \r\n      </ion-segment>\r\n    \r\n    </ion-toolbar>\r\n\r\n \r\n\r\n    <!-- <div align='center' style='margin:auto;margin-top:7.5px'>\r\n      <ion-label style='margin:auto; font-weight: bold;font-size:19.2px'>{{usuario.Nombres}} {{usuario.Apellidos}}</ion-label>\r\n\r\n    </div> -->\r\n\r\n  <ion-card>\r\n\r\n    \r\n\r\n    \r\n\r\n    <ion-item>\r\n\r\n      <ion-img id=\"blah\" src=\"{{usuario.Foto}}\" alt=\"your image\" style=\"margin-top:1.5px;margin-bottom: 2.5px;height: 325px;width: 325px;\"></ion-img>\r\n\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <label style='margin:auto;'>{{usuario.Descripcion}}</label>\r\n    </ion-item>\r\n    <!-- <ion-img src=\"{{usuario.FotoPerfil}}\" style=\"margin-top:7.5px;margin-bottom: 7.5px;\"></ion-img> -->\r\n    <!-- <ion-card-header>\r\n      <ion-card-title>Correo: {{usuario.Correo}}</ion-card-title>\r\n    </ion-card-header> -->\r\n\r\n    \r\n    <ion-item style=\"margin-top: 7.5px;\">\r\n      <ion-icon name=\"person-outline\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon>\r\n      <ion-label>{{usuario.Nombres}} {{usuario.Apellidos}}</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <a href= 'https://api.whatsapp.com/send?phone={{usuario.Telefono}}'><ion-icon name=\"logo-whatsapp\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon></a>\r\n      <ion-label>{{usuario.Telefono}}</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <a href=\"{{usuario.RedSocial}}\"><ion-icon name=\"logo-facebook\" size=\"large\" color=\"primary\" style=\"margin-right: 8px;\"></ion-icon></a>\r\n      <ion-label>{{usuario.RedSocial}}</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item style=\"margin-top: 7.5px;\">\r\n      <ion-icon name=\"locate-outline\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon>\r\n      <ion-label>{{usuario.Direccion}}</ion-label>\r\n    </ion-item>\r\n\r\n    <!-- <ion-item>\r\n\r\n      \r\n      <ion-icon name=\"mail-outline\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon>\r\n     \r\n      <a href=\"mailto:adanavarrete15@gmail.com\">Enviar</a>\r\n      <ion-label>Correo: {{usuario.Correo}}</ion-label>\r\n    </ion-item> -->\r\n\r\n    \r\n  </ion-card>\r\n\r\n  <div align=\"center\" *ngIf=\"myId!=id\">\r\n\r\n    <ion-button disabled = \"{{click}}\" color = \"primary\" fill=\"outline\" style=\"height: 45px;\" (click)=\"like()\">\r\n      <ion-icon size=\"large\" name=\"thumbs-up-outline\" ></ion-icon>\r\n    </ion-button>\r\n    <ion-button disabled = \"{{click}}\" color=\"danger\" style=\"margin-left: 5.5px;height: 45px;\" fill=\"outline\"  (click)=\"dislike()\">\r\n      <ion-icon size=\"large\" name=\"thumbs-down-outline\" ></ion-icon>\r\n    </ion-button>\r\n \r\n  </div>\r\n  \r\n</ion-content>\r\n<style>\r\n  ion-img {     \r\n    width: 35%;\r\n    height: 21%;\r\n    margin: auto;\r\n    display: block;\r\n    border-radius: 10px;\r\n    border-color: aquamarine;\r\n  }\r\n</style>\r\n ");

/***/ }),

/***/ "./src/app/folder/veterinario-detalle/veterinario-detalle-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/folder/veterinario-detalle/veterinario-detalle-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: VeterinarioDetallePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VeterinarioDetallePageRoutingModule", function() { return VeterinarioDetallePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _veterinario_detalle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./veterinario-detalle.page */ "./src/app/folder/veterinario-detalle/veterinario-detalle.page.ts");




const routes = [
    {
        path: '',
        component: _veterinario_detalle_page__WEBPACK_IMPORTED_MODULE_3__["VeterinarioDetallePage"]
    }
];
let VeterinarioDetallePageRoutingModule = class VeterinarioDetallePageRoutingModule {
};
VeterinarioDetallePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VeterinarioDetallePageRoutingModule);



/***/ }),

/***/ "./src/app/folder/veterinario-detalle/veterinario-detalle.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/folder/veterinario-detalle/veterinario-detalle.module.ts ***!
  \**************************************************************************/
/*! exports provided: VeterinarioDetallePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VeterinarioDetallePageModule", function() { return VeterinarioDetallePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _veterinario_detalle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./veterinario-detalle-routing.module */ "./src/app/folder/veterinario-detalle/veterinario-detalle-routing.module.ts");
/* harmony import */ var _veterinario_detalle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./veterinario-detalle.page */ "./src/app/folder/veterinario-detalle/veterinario-detalle.page.ts");







let VeterinarioDetallePageModule = class VeterinarioDetallePageModule {
};
VeterinarioDetallePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _veterinario_detalle_routing_module__WEBPACK_IMPORTED_MODULE_5__["VeterinarioDetallePageRoutingModule"]
        ],
        declarations: [_veterinario_detalle_page__WEBPACK_IMPORTED_MODULE_6__["VeterinarioDetallePage"]]
    })
], VeterinarioDetallePageModule);



/***/ }),

/***/ "./src/app/folder/veterinario-detalle/veterinario-detalle.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/folder/veterinario-detalle/veterinario-detalle.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci92ZXRlcmluYXJpby1kZXRhbGxlL3ZldGVyaW5hcmlvLWRldGFsbGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/folder/veterinario-detalle/veterinario-detalle.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/folder/veterinario-detalle/veterinario-detalle.page.ts ***!
  \************************************************************************/
/*! exports provided: VeterinarioDetallePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VeterinarioDetallePage", function() { return VeterinarioDetallePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_veterinarios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/veterinarios */ "./src/app/models/veterinarios.ts");
/* harmony import */ var src_app_services_veterinarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/veterinarios.service */ "./src/app/services/veterinarios.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_models_calificacionesVeterinarios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/calificacionesVeterinarios */ "./src/app/models/calificacionesVeterinarios.ts");
/* harmony import */ var src_app_services_calificaciones_veterinarios_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/calificaciones-veterinarios.service */ "./src/app/services/calificaciones-veterinarios.service.ts");








let VeterinarioDetallePage = class VeterinarioDetallePage {
    constructor(activateRoute, veterinariosService, calificacionesVeterinariosService, alertCtrt, router) {
        this.activateRoute = activateRoute;
        this.veterinariosService = veterinariosService;
        this.calificacionesVeterinariosService = calificacionesVeterinariosService;
        this.alertCtrt = alertCtrt;
        this.router = router;
        this.usuario = new src_app_models_veterinarios__WEBPACK_IMPORTED_MODULE_2__["Veterinarios"]();
        this.calificaciones = [];
        this.veterinarios = [];
    }
    ngOnInit() {
        this.myId = localStorage.getItem('userId');
        this.activateRoute.paramMap.subscribe(paramMap => {
            const idUsuario = paramMap.get('id');
            this.id = idUsuario;
            this.veterinariosService.getUsuario(idUsuario).subscribe(res => { this.usuario = res; });
        });
        this.veterinariosService.getUsuarios().subscribe(res => { this.veterinarios = res; });
        this.calificacionesVeterinariosService.getCalificaciones().subscribe(res => { this.calificaciones = res; this.controlar(); });
    }
    like() {
        let veterinario = new src_app_models_veterinarios__WEBPACK_IMPORTED_MODULE_2__["Veterinarios"]();
        for (let index = 0; index < this.veterinarios.length; index++) {
            if ((this.veterinarios[index].id == this.id)) {
                veterinario = this.veterinarios[index];
                veterinario.Like = veterinario.Like + 1;
                this.veterinariosService.updateUsuario(veterinario.id, veterinario);
                let calificacion = new src_app_models_calificacionesVeterinarios__WEBPACK_IMPORTED_MODULE_6__["CalificacionesVeterninarios"]();
                calificacion.Veterinario = this.id;
                calificacion.usuario = this.myId;
                this.calificacionesVeterinariosService.addCalificacion(calificacion);
            }
        }
        this.click = true;
    }
    dislike() {
        let veterinario = new src_app_models_veterinarios__WEBPACK_IMPORTED_MODULE_2__["Veterinarios"]();
        for (let index = 0; index < this.veterinarios.length; index++) {
            if ((this.veterinarios[index].id == this.id)) {
                veterinario = this.veterinarios[index];
                veterinario.Dislike = veterinario.Dislike + 1;
                this.veterinariosService.updateUsuario(veterinario.id, veterinario);
                let calificacion = new src_app_models_calificacionesVeterinarios__WEBPACK_IMPORTED_MODULE_6__["CalificacionesVeterninarios"]();
                calificacion.Veterinario = this.id;
                calificacion.usuario = this.myId;
                this.calificacionesVeterinariosService.addCalificacion(calificacion);
            }
        }
        this.click = true;
    }
    controlar() {
        let validar = true;
        for (let index = 0; index < this.calificaciones.length; index++) {
            if ((this.calificaciones[index].Veterinario == this.id) && (this.calificaciones[index].usuario == this.myId)) {
                this.click = true;
                validar = false;
            }
        }
        if (validar) {
            this.click = false;
        }
    }
};
VeterinarioDetallePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_veterinarios_service__WEBPACK_IMPORTED_MODULE_3__["VeterinariosService"] },
    { type: src_app_services_calificaciones_veterinarios_service__WEBPACK_IMPORTED_MODULE_7__["CalificacionesVeterinariosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
VeterinarioDetallePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-veterinario-detalle',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./veterinario-detalle.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/veterinario-detalle/veterinario-detalle.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./veterinario-detalle.page.scss */ "./src/app/folder/veterinario-detalle/veterinario-detalle.page.scss")).default]
    })
], VeterinarioDetallePage);



/***/ }),

/***/ "./src/app/models/calificacionesVeterinarios.ts":
/*!******************************************************!*\
  !*** ./src/app/models/calificacionesVeterinarios.ts ***!
  \******************************************************/
/*! exports provided: CalificacionesVeterninarios */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalificacionesVeterninarios", function() { return CalificacionesVeterninarios; });
class CalificacionesVeterninarios {
}


/***/ }),

/***/ "./src/app/models/veterinarios.ts":
/*!****************************************!*\
  !*** ./src/app/models/veterinarios.ts ***!
  \****************************************/
/*! exports provided: Veterinarios */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Veterinarios", function() { return Veterinarios; });
class Veterinarios {
}


/***/ }),

/***/ "./src/app/services/calificaciones-veterinarios.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/calificaciones-veterinarios.service.ts ***!
  \*****************************************************************/
/*! exports provided: CalificacionesVeterinariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalificacionesVeterinariosService", function() { return CalificacionesVeterinariosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let CalificacionesVeterinariosService = class CalificacionesVeterinariosService {
    constructor(firestore) {
        this.firestore = firestore;
        this.calificacionesCollection = firestore.collection('CalificacionesVeterinarios');
        this.calificaciones = this.calificacionesCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getCalificaciones() {
        return this.calificaciones;
    }
    getCalificacion(id) {
        return this.calificacionesCollection.doc(id).valueChanges();
    }
    addCalificacion(Calificaciones) {
        return this.calificacionesCollection.add(Object.assign({}, Calificaciones));
    }
};
CalificacionesVeterinariosService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
CalificacionesVeterinariosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CalificacionesVeterinariosService);



/***/ })

}]);
//# sourceMappingURL=folder-veterinario-detalle-veterinario-detalle-module-es2015.js.map