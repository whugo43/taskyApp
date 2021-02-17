(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-curso-ayudantes-curso-ayudantes-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/curso-ayudantes/curso-ayudantes.page.html":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/curso-ayudantes/curso-ayudantes.page.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFolderCursoAyudantesCursoAyudantesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\r\n  <ion-toolbar>\r\n\r\n    <ion-segment color=\"tertiary\" value=\"cursos\" >\r\n\r\n      <ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\r\n        <ion-icon name=\"newspaper-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Publicaciones</ion-label>\r\n      </ion-segment-button>\r\n      \r\n      <ion-segment-button value=\"cursos\" [routerLink]=\"['/cursos']\" routerDirection=\"root\">\r\n        <ion-icon name=\"library-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 14px;\">Cursos</ion-label>\r\n      </ion-segment-button>\r\n    \r\n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-icon name=\"person-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\r\n      </ion-segment-button>\r\n\r\n    </ion-segment>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-segment color=\"tertiary\" value=\"ayudantes\">\r\n\r\n    <ion-segment-button value=\"anuncios\" [routerLink]=\"['/curso-detalle',id, nombreCurso]\" routerDirection=\"root\">\r\n      <ion-icon name=\"megaphone-outline\" size=\"large\"></ion-icon> <ion-label>Anuncios</ion-label>\r\n    </ion-segment-button>\r\n    \r\n    <ion-segment-button value=\"ayudantes\" [routerLink]=\"['/curso-ayudantes',id, nombreCurso]\" routerDirection=\"root\">\r\n      <ion-icon name=\"people-outline\" size=\"large\"></ion-icon> <ion-label>Ayudantes</ion-label>\r\n    </ion-segment-button>\r\n\r\n    <ion-segment-button value=\"grupos\" [routerLink]=\"['/grupos',id, nombreCurso]\" routerDirection=\"root\">\r\n      <ion-icon name=\"people-circle-outline\" size=\"large\"></ion-icon> <ion-label>Grupos</ion-label>\r\n    </ion-segment-button>\r\n\r\n  </ion-segment>\r\n\r\n\r\n  <ion-searchbar\r\n    color=\"light\" \r\n    placeholder = \"Buscar ayudante...\"\r\n    animated\r\n\r\n    (ionChange)=\"buscar($event)\">\r\n    </ion-searchbar>\r\n\r\n\r\n  <ng-container *ngIf=\"!getDatos()\">\r\n    <ng-container *ngFor=\"let ayudante of ayudantes\">\r\n    <ng-container *ngIf=\"ayudante.Materia == id\">\r\n    <ng-container *ngFor=\"let usuario of usuarios | filtroUsuario: textoBuscar\">\r\n      \r\n      <ion-item *ngIf=\"usuario.id == ayudante.Usuario\" (click)='aumentarVisita(ayudante.id,ayudante)'>\r\n\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"{{usuario.FotoPerfil}}\">\r\n        </ion-avatar>\r\n\r\n        <!-- <ion-thumbnail slot=\"start\" slot=\"start\">\r\n          <img src=\"{{usuario.FotoPerfil}}\" alet=\"foto\">\r\n        </ion-thumbnail> -->\r\n        <ion-card-title>\r\n          {{usuario.Nombre}} {{usuario.Apellido}}\r\n        </ion-card-title>\r\n\r\n          <ion-list fill=\"outline\" slot='end'>\r\n            <ion-item fill=\"outline\">\r\n              <ion-icon name=\"thumbs-up-outline\" ></ion-icon><ion-label style=\"font-size: 12;margin-left: 7.5px;\" >{{ayudante.Like}}</ion-label>\r\n            </ion-item>\r\n            <ion-item fill=\"outline\">\r\n              <ion-icon name=\"thumbs-down-outline\" ></ion-icon><label style=\"font-size: 12;margin-left: 7.5px;\" >{{ayudante.Dislike}}</label>\r\n            </ion-item>\r\n            \r\n          </ion-list>\r\n          <!-- <div slot=\"end\" style=\"align-items: center;justify-content: center;\"><ion-icon name=\"eye-outline\" ></ion-icon><label style=\"font-size: 12;margin-left: 7.5px;\" >{{ayudante.Visitas}}</label></div> -->\r\n          \r\n        \r\n      </ion-item>\r\n    \r\n    </ng-container>\r\n    </ng-container>\r\n    </ng-container>\r\n\r\n  \r\n \r\n\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"getDatos()\">\r\n\r\n    <div style=\"margin-top: 50px;\" align='center'> \r\n      <ion-text color=\"medium\">\r\n\r\n        <img src=\"https://firebasestorage.googleapis.com/v0/b/taskyapp01.appspot.com/o/iconos%2FcursoAyudante.png?alt=media&token=69d9b897-88db-4e19-9501-acb670c58d3a\" style=\"width: 55%; height:62%;\" alet=\"foto\">\r\n        \r\n        <p style=\"font-size: 25px;\">No hay ayudantes registrados.</p>\r\n      </ion-text>  \r\n    </div>\r\n\r\n    <!-- <ion-fab  *ngIf=\"rol=='Ayudante'\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n      <ion-fab-button (click)=\"validarCurso()\">\r\n        <ion-icon name=\"add-outline\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab> -->\r\n  </ng-container>\r\n\r\n  <ion-fab  *ngIf=\"rol=='Ayudante'\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button disabled=\"{{desabilitar}}\" (click)=\"failedAlert()\">\r\n      <ion-icon name=\"person-add-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/folder/curso-ayudantes/curso-ayudantes-routing.module.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/folder/curso-ayudantes/curso-ayudantes-routing.module.ts ***!
      \**************************************************************************/

    /*! exports provided: CursoAyudantesPageRoutingModule */

    /***/
    function srcAppFolderCursoAyudantesCursoAyudantesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CursoAyudantesPageRoutingModule", function () {
        return CursoAyudantesPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _curso_ayudantes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./curso-ayudantes.page */
      "./src/app/folder/curso-ayudantes/curso-ayudantes.page.ts");

      var routes = [{
        path: '',
        component: _curso_ayudantes_page__WEBPACK_IMPORTED_MODULE_3__["CursoAyudantesPage"]
      }];

      var CursoAyudantesPageRoutingModule = function CursoAyudantesPageRoutingModule() {
        _classCallCheck(this, CursoAyudantesPageRoutingModule);
      };

      CursoAyudantesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CursoAyudantesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/folder/curso-ayudantes/curso-ayudantes.module.ts":
    /*!******************************************************************!*\
      !*** ./src/app/folder/curso-ayudantes/curso-ayudantes.module.ts ***!
      \******************************************************************/

    /*! exports provided: CursoAyudantesPageModule */

    /***/
    function srcAppFolderCursoAyudantesCursoAyudantesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CursoAyudantesPageModule", function () {
        return CursoAyudantesPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _curso_ayudantes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./curso-ayudantes-routing.module */
      "./src/app/folder/curso-ayudantes/curso-ayudantes-routing.module.ts");
      /* harmony import */


      var _curso_ayudantes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./curso-ayudantes.page */
      "./src/app/folder/curso-ayudantes/curso-ayudantes.page.ts");
      /* harmony import */


      var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/pipes/pipes.module */
      "./src/app/pipes/pipes.module.ts");

      var CursoAyudantesPageModule = function CursoAyudantesPageModule() {
        _classCallCheck(this, CursoAyudantesPageModule);
      };

      CursoAyudantesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _curso_ayudantes_routing_module__WEBPACK_IMPORTED_MODULE_5__["CursoAyudantesPageRoutingModule"]],
        declarations: [_curso_ayudantes_page__WEBPACK_IMPORTED_MODULE_6__["CursoAyudantesPage"]]
      })], CursoAyudantesPageModule);
      /***/
    },

    /***/
    "./src/app/folder/curso-ayudantes/curso-ayudantes.page.scss":
    /*!******************************************************************!*\
      !*** ./src/app/folder/curso-ayudantes/curso-ayudantes.page.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFolderCursoAyudantesCursoAyudantesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9jdXJzby1heXVkYW50ZXMvY3Vyc28tYXl1ZGFudGVzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/folder/curso-ayudantes/curso-ayudantes.page.ts":
    /*!****************************************************************!*\
      !*** ./src/app/folder/curso-ayudantes/curso-ayudantes.page.ts ***!
      \****************************************************************/

    /*! exports provided: CursoAyudantesPage */

    /***/
    function srcAppFolderCursoAyudantesCursoAyudantesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CursoAyudantesPage", function () {
        return CursoAyudantesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_ayudantes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/ayudantes.service */
      "./src/app/services/ayudantes.service.ts");
      /* harmony import */


      var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/usuario.service */
      "./src/app/services/usuario.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var CursoAyudantesPage = /*#__PURE__*/function () {
        function CursoAyudantesPage(activateRoute, ayudanteService, usuarioService, alertCtrt, router) {
          _classCallCheck(this, CursoAyudantesPage);

          this.activateRoute = activateRoute;
          this.ayudanteService = ayudanteService;
          this.usuarioService = usuarioService;
          this.alertCtrt = alertCtrt;
          this.router = router;
          this.usuarios = [];
          this.ayudantes = [];
          this.ayudantias = [];
          this.cursosMisAyudantias = [];
          this.desabilitar = false;
          this.resultado = [];
          this.textoBuscar = '';
        }

        _createClass(CursoAyudantesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.activateRoute.paramMap.subscribe(function (paramMap) {
              //console.log(paramMap)
              _this.rol = localStorage.getItem('Rol');
              _this.miId = localStorage.getItem('userId');
              var idCurso = paramMap.get('id');
              var nombreCurso = paramMap.get('nombre');
              _this.nombreCurso = nombreCurso; // const nombreCurso = paramMap.get('Nombre');

              _this.id = idCurso; //console.log('rol: ',this.rol)
              // this.nombre = nombreCurso;
              //this.actividadService.getActividad(idActividad).subscribe(res => this.actividad =res);
            });
            this.ayudanteService.getAyudantes().subscribe(function (res) {
              _this.ayudantes = res;

              _this.shuffle(_this.ayudantes);

              _this.validarCurso();
            });
            this.usuarioService.getUsuarios().subscribe(function (res) {
              return _this.usuarios = res;
            });
          }
        }, {
          key: "getDatos",
          value: function getDatos() {
            // this.ayudanteService.getAyudanteMateria(this.id).subscribe(res=> this.ayudantes = res);
            // console.log(this.ayudantes)
            for (var i = 0; i < this.ayudantes.length; i++) {
              if (this.ayudantes[i].Materia == this.id) {
                for (var j = 0; j < this.usuarios.length; j++) {
                  if (this.usuarios[j].id == this.ayudantes[i].Usuario) {
                    return false;
                  }
                }
              }
            }

            return true;
          }
        }, {
          key: "aumentarVisita",
          value: function aumentarVisita(id, ayudante) {
            ayudante.Visitas = ayudante.Visitas + 1; //console.log("fff", publicacion.Visitas)
            //[routerLink]="['/curso-detalle-anuncio',publicacion.id]"

            this.ayudanteService.updateAyudante(id, ayudante);
            this.router.navigate(['/usuario-detalle', this.id, ayudante.Usuario]);
          }
        }, {
          key: "buscar",
          value: function buscar(event) {
            var texto = event.target.value;
            this.textoBuscar = texto;
          }
        }, {
          key: "listaCursos",
          value: function listaCursos() {
            for (var index = 0; index < this.ayudantias.length; index++) {
              if (this.ayudantias[index].Usuario == this.miId) {
                this.cursosMisAyudantias.push(this.ayudantias[index].Materia);
              }
            }
          }
        }, {
          key: "shuffle",
          value: function shuffle(array) {
            var currentIndex = array.length,
                temporaryValue,
                randomIndex; // While there remain elements to shuffle...

            while (0 !== currentIndex) {
              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1; // And swap it with the current element.

              temporaryValue = array[currentIndex];
              array[currentIndex] = array[randomIndex];
              array[randomIndex] = temporaryValue;
            }

            return array;
          }
        }, {
          key: "validarCurso",
          value: function validarCurso() {
            var numero = 0;

            for (var index = 0; index < this.ayudantes.length; index++) {
              if (this.ayudantes[index].Usuario == this.miId && this.id == this.ayudantes[index].Materia) {
                numero = numero + 1; // return true
                // break;
              }
            }

            if (numero == 0) {
              this.desabilitar = false;
            } else {
              this.desabilitar = true;
            } //this.failedAlert();
            // console.log("no existo")
            // return false;

          }
        }, {
          key: "agregarCurso",
          value: function agregarCurso() {}
        }, {
          key: "failedAlert",
          value: function failedAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrt.create({
                        cssClass: 'my-custom-class',
                        header: "No estas registrado como ayudante en esta materia",
                        buttons: [{
                          text: 'Cancelar',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {//console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Registrar materia',
                          handler: function handler(data) {
                            _this2.router.navigate(['/crear-ayudantia']); //console.log('registrar')

                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return CursoAyudantesPage;
      }();

      CursoAyudantesPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_services_ayudantes_service__WEBPACK_IMPORTED_MODULE_3__["AyudantesService"]
        }, {
          type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      CursoAyudantesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-curso-ayudantes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./curso-ayudantes.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/curso-ayudantes/curso-ayudantes.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./curso-ayudantes.page.scss */
        "./src/app/folder/curso-ayudantes/curso-ayudantes.page.scss"))["default"]]
      })], CursoAyudantesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=folder-curso-ayudantes-curso-ayudantes-module-es5.js.map