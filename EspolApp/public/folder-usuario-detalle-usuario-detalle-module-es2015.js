(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-usuario-detalle-usuario-detalle-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/usuario-detalle/usuario-detalle.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/usuario-detalle/usuario-detalle.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\r\n  <ion-toolbar>\r\n\r\n    <ion-segment color=\"tertiary\" value=\"cursos\" >\r\n\r\n      <!-- <ion-segment-button *ngIf=\"Rol==Ayudante\" value=\"mis-ayudantias\" [routerLink]=\"['/mis-ayudantias']\" routerDirection=\"root\">\r\n        <ion-icon name=\"file-tray-stacked-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Mis Cursos</ion-label>\r\n      </ion-segment-button> -->\r\n\r\n      <ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\r\n        <ion-icon name=\"newspaper-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Publicaciones</ion-label>\r\n      </ion-segment-button>\r\n      \r\n      <ion-segment-button value=\"cursos\" [routerLink]=\"['/cursos']\" routerDirection=\"root\">\r\n        <ion-icon name=\"library-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 14px;\">Cursos</ion-label>\r\n      </ion-segment-button>\r\n    \r\n    \r\n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-icon name=\"person-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\r\n      </ion-segment-button>\r\n\r\n      <ion-segment-button value=\"adopcion\" [routerLink]=\"['/adopcion']\" routerDirection=\"root\">\r\n        <ion-icon name=\"paw-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Adopcion</ion-label>\r\n      </ion-segment-button>\r\n\r\n  \r\n\r\n    </ion-segment>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-toolbar>\r\n\r\n\r\n    \r\n      <ion-segment color=\"tertiary\" value=\"datos\">\r\n    \r\n    \r\n    \r\n     \r\n    \r\n    \r\n        <ion-segment-button value=\"datos\" [routerLink]=\"['/usuario-detalle',idMateria, id]\" routerDirection=\"root\">\r\n          <ion-icon name=\"information-circle-outline\" size=\"large\"></ion-icon> \r\n          <ion-label>Datos</ion-label>\r\n        </ion-segment-button>\r\n        \r\n        <ion-segment-button value=\"comentarios\" [routerLink]=\"['/comentarios-usuario', idMateria, id]\" routerDirection=\"root\">\r\n          <ion-icon name=\"chatbubbles-outline\" size=\"large\"></ion-icon> <ion-label>Comentarios</ion-label>\r\n        </ion-segment-button>\r\n    \r\n    \r\n    \r\n      \r\n      </ion-segment>\r\n    \r\n    </ion-toolbar>\r\n\r\n  <!-- <ion-segment color=\"tertiary\" value=\"anuncio\">\r\n\r\n    <ion-segment-button value=\"anuncios\" layout=\"icon-start\" [routerLink]=\"['/curso-detalle',id, nombreCurso]\" routerDirection=\"root\">\r\n      <ion-icon name=\"megaphone-outline\" size=\"large\"></ion-icon> <ion-label>Anuncios</ion-label>\r\n    </ion-segment-button>\r\n    \r\n    <ion-segment-button value=\"ayudantes\" layout=\"icon-start\"  [routerLink]=\"['/curso-ayudantes',id, nombreCurso]\" routerDirection=\"root\">\r\n      <ion-icon name=\"people-outline\" size=\"large\"></ion-icon> <ion-label>Ayudantes</ion-label>\r\n    </ion-segment-button>\r\n\r\n   \r\n  </ion-segment> -->\r\n\r\n\r\n  <ion-card>\r\n\r\n    <ion-item>\r\n\r\n      <ion-img id=\"blah\" src=\"{{usuario.FotoPerfil}}\" alt=\"your image\" style=\"margin-top:2.5px;margin-bottom: 2.5px;height: 325px;width: 325px;\"></ion-img>\r\n\r\n    </ion-item>\r\n    <!-- <ion-img src=\"{{usuario.FotoPerfil}}\" style=\"margin-top:7.5px;margin-bottom: 7.5px;\"></ion-img> -->\r\n    <!-- <ion-card-header>\r\n      <ion-card-title>Correo: {{usuario.Correo}}</ion-card-title>\r\n    </ion-card-header> -->\r\n\r\n    \r\n    <ion-item style=\"margin-top: 7.5px;\">\r\n      <ion-icon name=\"person-outline\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon>\r\n      <ion-label>{{usuario.Nombre}} {{usuario.Apellido}}</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <a href= 'https://api.whatsapp.com/send?phone={{usuario.Telefono}}'><ion-icon name=\"logo-whatsapp\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon></a>\r\n      <ion-label>{{usuario.Telefono}}</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <a href=\"mailto:{{usuario.Correo}}\"><ion-icon name=\"mail-outline\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon></a>\r\n      <ion-label>{{usuario.Correo}}</ion-label>\r\n    </ion-item>\r\n\r\n    <!-- <ion-item>\r\n\r\n      \r\n      <ion-icon name=\"mail-outline\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon>\r\n     \r\n      <a href=\"mailto:adanavarrete15@gmail.com\">Enviar</a>\r\n      <ion-label>Correo: {{usuario.Correo}}</ion-label>\r\n    </ion-item> -->\r\n\r\n    \r\n  </ion-card>\r\n\r\n  <div align=\"center\" *ngIf=\"myId!=id\">\r\n\r\n    <ion-button disabled = \"{{click}}\" color = \"primary\" fill=\"outline\" style=\"height: 45px;\" (click)=\"like()\">\r\n      <ion-icon size=\"large\" name=\"thumbs-up-outline\" ></ion-icon>\r\n    </ion-button>\r\n    <ion-button disabled = \"{{click}}\" color=\"danger\" style=\"margin-left: 5.5px;height: 45px;\" fill=\"outline\"  (click)=\"dislike()\">\r\n      <ion-icon size=\"large\" name=\"thumbs-down-outline\" ></ion-icon>\r\n    </ion-button>\r\n\r\n  </div>\r\n  \r\n</ion-content>\r\n<style>\r\n  ion-img {     \r\n    width: 35%;\r\n    height: 21%;\r\n    margin: auto;\r\n    display: block;\r\n    border-radius: 10px;\r\n    border-color: aquamarine;\r\n  }\r\n</style>");

/***/ }),

/***/ "./src/app/folder/usuario-detalle/usuario-detalle-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/folder/usuario-detalle/usuario-detalle-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: UsuarioDetallePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioDetallePageRoutingModule", function() { return UsuarioDetallePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _usuario_detalle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuario-detalle.page */ "./src/app/folder/usuario-detalle/usuario-detalle.page.ts");




const routes = [
    {
        path: '',
        component: _usuario_detalle_page__WEBPACK_IMPORTED_MODULE_3__["UsuarioDetallePage"]
    }
];
let UsuarioDetallePageRoutingModule = class UsuarioDetallePageRoutingModule {
};
UsuarioDetallePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UsuarioDetallePageRoutingModule);



/***/ }),

/***/ "./src/app/folder/usuario-detalle/usuario-detalle.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/folder/usuario-detalle/usuario-detalle.module.ts ***!
  \******************************************************************/
/*! exports provided: UsuarioDetallePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioDetallePageModule", function() { return UsuarioDetallePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _usuario_detalle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuario-detalle-routing.module */ "./src/app/folder/usuario-detalle/usuario-detalle-routing.module.ts");
/* harmony import */ var _usuario_detalle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usuario-detalle.page */ "./src/app/folder/usuario-detalle/usuario-detalle.page.ts");







let UsuarioDetallePageModule = class UsuarioDetallePageModule {
};
UsuarioDetallePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _usuario_detalle_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsuarioDetallePageRoutingModule"]
        ],
        declarations: [_usuario_detalle_page__WEBPACK_IMPORTED_MODULE_6__["UsuarioDetallePage"]]
    })
], UsuarioDetallePageModule);



/***/ }),

/***/ "./src/app/folder/usuario-detalle/usuario-detalle.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/folder/usuario-detalle/usuario-detalle.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci91c3VhcmlvLWRldGFsbGUvdXN1YXJpby1kZXRhbGxlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/folder/usuario-detalle/usuario-detalle.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/folder/usuario-detalle/usuario-detalle.page.ts ***!
  \****************************************************************/
/*! exports provided: UsuarioDetallePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioDetallePage", function() { return UsuarioDetallePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_usuarios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/usuarios */ "./src/app/models/usuarios.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_models_ayudantes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/ayudantes */ "./src/app/models/ayudantes.ts");
/* harmony import */ var src_app_models_calificaciones__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/calificaciones */ "./src/app/models/calificaciones.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var src_app_services_ayudantes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/ayudantes.service */ "./src/app/services/ayudantes.service.ts");
/* harmony import */ var src_app_services_calificaciones_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/calificaciones.service */ "./src/app/services/calificaciones.service.ts");









//import {EmailComposer, EmailComposerOptions} from "@ionic-native/email-composer/ngx";
let UsuarioDetallePage = class UsuarioDetallePage {
    constructor(activateRoute, usuarioService, ayudantesService, calificacionesService) {
        this.activateRoute = activateRoute;
        this.usuarioService = usuarioService;
        this.ayudantesService = ayudantesService;
        this.calificacionesService = calificacionesService;
        this.usuario = new src_app_models_usuarios__WEBPACK_IMPORTED_MODULE_2__["Usuarios"]();
        this.ayudantes = [];
        this.calificaciones = [];
    }
    ngOnInit() {
        this.myId = localStorage.getItem('userId');
        this.activateRoute.paramMap.subscribe(paramMap => {
            const idUsuario = paramMap.get('id');
            const idMateria = paramMap.get('idMateria');
            this.idMateria = idMateria;
            this.id = idUsuario;
            this.usuarioService.getUsuario(idUsuario).subscribe(res => { this.usuario = res; });
            // this.actividadService.getActividad(idActividad).subscribe(res => this.actividad =res);
        });
        this.ayudantesService.getAyudantes().subscribe(res => { this.ayudantes = res; });
        this.calificacionesService.getCalificaciones().subscribe(res => { this.calificaciones = res; this.controlar(); });
    }
    like() {
        let ayudante = new src_app_models_ayudantes__WEBPACK_IMPORTED_MODULE_4__["Ayudantes"]();
        for (let index = 0; index < this.ayudantes.length; index++) {
            if ((this.ayudantes[index].Materia == this.idMateria) && (this.ayudantes[index].Usuario == this.id)) {
                ayudante = this.ayudantes[index];
                ayudante.Like = ayudante.Like + 1;
                this.ayudantesService.updateAyudante(ayudante.id, ayudante);
                let calificacion = new src_app_models_calificaciones__WEBPACK_IMPORTED_MODULE_5__["Calificaciones"]();
                calificacion.Ayudante = this.id;
                calificacion.Materia = this.idMateria;
                calificacion.Estudiante = this.myId;
                this.calificacionesService.addCalificacion(calificacion);
            }
        }
        this.click = true;
        //this.controlar();
    }
    dislike() {
        let ayudante = new src_app_models_ayudantes__WEBPACK_IMPORTED_MODULE_4__["Ayudantes"]();
        for (let index = 0; index < this.ayudantes.length; index++) {
            if ((this.ayudantes[index].Materia == this.idMateria) && (this.ayudantes[index].Usuario == this.id)) {
                ayudante = this.ayudantes[index];
                ayudante.Dislike = ayudante.Dislike + 1;
                this.ayudantesService.updateAyudante(ayudante.id, ayudante);
                let calificacion = new src_app_models_calificaciones__WEBPACK_IMPORTED_MODULE_5__["Calificaciones"]();
                calificacion.Ayudante = this.id;
                calificacion.Materia = this.idMateria;
                calificacion.Estudiante = this.myId;
                this.calificacionesService.addCalificacion(calificacion);
            }
        }
        this.click = true;
        //this.controlar();
    }
    controlar() {
        let validar = true;
        for (let index = 0; index < this.calificaciones.length; index++) {
            if ((this.calificaciones[index].Materia == this.idMateria) && (this.calificaciones[index].Ayudante == this.id) && (this.calificaciones[index].Estudiante == this.myId)) {
                this.click = true;
                validar = false;
            }
        }
        if (validar) {
            this.click = false;
        }
        // if (validar= false){
        //   this.click= true;
        //   if(num ==0){this.like()}
        //   if(num ==1){this.dislike()}
        // }
    }
};
UsuarioDetallePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"] },
    { type: src_app_services_ayudantes_service__WEBPACK_IMPORTED_MODULE_7__["AyudantesService"] },
    { type: src_app_services_calificaciones_service__WEBPACK_IMPORTED_MODULE_8__["CalificacionesService"] }
];
UsuarioDetallePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-usuario-detalle',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./usuario-detalle.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/usuario-detalle/usuario-detalle.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./usuario-detalle.page.scss */ "./src/app/folder/usuario-detalle/usuario-detalle.page.scss")).default]
    })
], UsuarioDetallePage);



/***/ }),

/***/ "./src/app/models/calificaciones.ts":
/*!******************************************!*\
  !*** ./src/app/models/calificaciones.ts ***!
  \******************************************/
/*! exports provided: Calificaciones */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calificaciones", function() { return Calificaciones; });
class Calificaciones {
}


/***/ }),

/***/ "./src/app/services/calificaciones.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/calificaciones.service.ts ***!
  \****************************************************/
/*! exports provided: CalificacionesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalificacionesService", function() { return CalificacionesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




// import firebase from 'firebase/app';
// import 'firebase/firestore';
let CalificacionesService = class CalificacionesService {
    constructor(firestore) {
        this.firestore = firestore;
        this.calificacionesCollection = firestore.collection('Calificaciones');
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
CalificacionesService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
CalificacionesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CalificacionesService);



/***/ })

}]);
//# sourceMappingURL=folder-usuario-detalle-usuario-detalle-module-es2015.js.map