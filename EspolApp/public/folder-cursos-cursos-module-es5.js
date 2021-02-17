(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-cursos-cursos-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/cursos/cursos.page.html":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/cursos/cursos.page.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFolderCursosCursosPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\r\n  <ion-toolbar>\r\n\r\n    <ion-segment color=\"tertiary\" value=\"cursos\" >\r\n \r\n      <!-- <ion-segment-button *ngIf=\"Rol==Ayudante\" value=\"mis-ayudantias\" [routerLink]=\"['/mis-ayudantias']\" routerDirection=\"root\">\r\n        <ion-icon name=\"file-tray-stacked-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Mis Cursos</ion-label>\r\n      </ion-segment-button> -->\r\n\r\n      <ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\r\n        <ion-icon name=\"newspaper-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Publicaciones</ion-label>\r\n      </ion-segment-button>\r\n      \r\n      <ion-segment-button value=\"cursos\" [routerLink]=\"['/cursos']\" routerDirection=\"root\">\r\n        <ion-icon name=\"library-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 14px;\">Cursos</ion-label>\r\n      </ion-segment-button>\r\n    \r\n    \r\n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-icon name=\"person-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\r\n      </ion-segment-button>\r\n\r\n  \r\n\r\n  \r\n\r\n</ion-segment>\r\n\r\n</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-searchbar\r\n    color=\"light\" \r\n    placeholder = \"Buscar curso...\"\r\n    animated\r\n\r\n    (ionChange)=\"buscar($event)\">\r\n    </ion-searchbar>\r\n\r\n  <ion-card *ngFor=\"let curso of cursos | filtroCurso: textoBuscar\" scrollable class = \"item\">\r\n    <ion-item [routerLink]=\"['/curso-detalle',curso.id, curso.Nombre]\" >\r\n\r\n      <ion-thumbnail slot=\"start\" slot=\"start\">\r\n        <img src=\"{{curso.Imagen}}\" alet=\"foto\">\r\n      </ion-thumbnail>\r\n      <ion-card-title>{{curso.Nombre}}</ion-card-title>\r\n    </ion-item>\r\n  \r\n\r\n  </ion-card>\r\n\r\n  <ion-fab *ngIf=\"rol=='Ayudante'\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"crearCurso()\">\r\n     <ion-icon name=\"add-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  \r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/folder/cursos/cursos-routing.module.ts":
    /*!********************************************************!*\
      !*** ./src/app/folder/cursos/cursos-routing.module.ts ***!
      \********************************************************/

    /*! exports provided: CursosPageRoutingModule */

    /***/
    function srcAppFolderCursosCursosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CursosPageRoutingModule", function () {
        return CursosPageRoutingModule;
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


      var _cursos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cursos.page */
      "./src/app/folder/cursos/cursos.page.ts");

      var routes = [{
        path: '',
        component: _cursos_page__WEBPACK_IMPORTED_MODULE_3__["CursosPage"]
      }];

      var CursosPageRoutingModule = function CursosPageRoutingModule() {
        _classCallCheck(this, CursosPageRoutingModule);
      };

      CursosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CursosPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/folder/cursos/cursos.module.ts":
    /*!************************************************!*\
      !*** ./src/app/folder/cursos/cursos.module.ts ***!
      \************************************************/

    /*! exports provided: CursosPageModule */

    /***/
    function srcAppFolderCursosCursosModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CursosPageModule", function () {
        return CursosPageModule;
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


      var _cursos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cursos-routing.module */
      "./src/app/folder/cursos/cursos-routing.module.ts");
      /* harmony import */


      var _cursos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cursos.page */
      "./src/app/folder/cursos/cursos.page.ts");
      /* harmony import */


      var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/pipes/pipes.module */
      "./src/app/pipes/pipes.module.ts");

      var CursosPageModule = function CursosPageModule() {
        _classCallCheck(this, CursosPageModule);
      };

      CursosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cursos_routing_module__WEBPACK_IMPORTED_MODULE_5__["CursosPageRoutingModule"]],
        declarations: [_cursos_page__WEBPACK_IMPORTED_MODULE_6__["CursosPage"]]
      })], CursosPageModule);
      /***/
    },

    /***/
    "./src/app/folder/cursos/cursos.page.scss":
    /*!************************************************!*\
      !*** ./src/app/folder/cursos/cursos.page.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFolderCursosCursosPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".item {\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2N1cnNvcy9jdXJzb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZm9sZGVyL2N1cnNvcy9jdXJzb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0ge1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/folder/cursos/cursos.page.ts":
    /*!**********************************************!*\
      !*** ./src/app/folder/cursos/cursos.page.ts ***!
      \**********************************************/

    /*! exports provided: CursosPage */

    /***/
    function srcAppFolderCursosCursosPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CursosPage", function () {
        return CursosPage;
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


      var src_app_services_cursos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/cursos.service */
      "./src/app/services/cursos.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_models_materia_solicitud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/models/materia-solicitud */
      "./src/app/models/materia-solicitud.ts");
      /* harmony import */


      var src_app_services_materia_solicitud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/materia-solicitud.service */
      "./src/app/services/materia-solicitud.service.ts");
      /* harmony import */


      var src_app_models_anuncios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/models/anuncios */
      "./src/app/models/anuncios.ts");
      /* harmony import */


      var src_app_services_anuncios_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/anuncios.service */
      "./src/app/services/anuncios.service.ts");
      /* harmony import */


      var src_app_models_usuarios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/models/usuarios */
      "./src/app/models/usuarios.ts");
      /* harmony import */


      var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/usuario.service */
      "./src/app/services/usuario.service.ts");

      var CursosPage = /*#__PURE__*/function () {
        function CursosPage(cursoService, usuarioService, materiaService, anuncioService, alertCtrt) {
          _classCallCheck(this, CursosPage);

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

        _createClass(CursosPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.cursoService.getCursos().subscribe(function (res) {
              return _this.cursos = res;
            });
            this.userId = localStorage.getItem('userId');
            this.rol = localStorage.getItem('Rol');
            this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(function (res) {
              _this.user = res;

              _this.getAnuncio();
            });
          }
        }, {
          key: "getAnuncio",
          value: function getAnuncio() {
            var _this2 = this;

            this.anuncioService.getAnuncios().subscribe(function (res) {
              _this2.anuncios = res;

              _this2.validarPublicacion();
            });
          }
        }, {
          key: "validarPublicacion",
          value: function validarPublicacion() {
            var valor = this.anuncios[0].Mostrar;
            this.anuncio = this.anuncios[0];
            console.log('valor:', valor);
            console.log(this.user.Anuncio);

            if (this.anuncios[0].Mostrar && this.user.Anuncio) {
              this.failedAlert();
            }
          }
        }, {
          key: "buscar",
          value: function buscar(event) {
            var texto = event.target.value;
            this.textoBuscar = texto;
            console.log(this.anuncios[0].Titulo);
          }
        }, {
          key: "crearCurso",
          value: function crearCurso() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrt.create({
                        cssClass: 'my-custom-class',
                        header: 'Sugerir curso:',
                        // message: 'Nombre del curso:',
                        inputs: [{
                          name: 'curso',
                          placeholder: 'Nombre del curso',
                          type: 'text'
                        }],
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {// console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Ok',
                          handler: function handler(data) {
                            if (data.curso != "") {
                              _this3.agregarSolitiud(data.curso);
                            } else if (data.curso == "") {//this.failedAlert("El campo email es requerido");
                            }
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
        }, {
          key: "agregarSolitiud",
          value: function agregarSolitiud(curso) {
            this.materia.Estado = true;
            this.materia.NombreMateria = curso;
            this.materia.Usuario = this.userId;
            this.materiaService.addMateria(this.materia);
          }
        }, {
          key: "aumentarAnuncio",
          value: function aumentarAnuncio() {
            this.anuncio.Visitas = this.anuncio.Visitas + 1;
            this.anuncioService.updateAnuncio(this.anuncio.id, this.anuncio);
            this.user.Anuncio = false;
            this.usuarioService.updateUsuario(localStorage.getItem('userId'), this.user);
          }
        }, {
          key: "failedAlert",
          value: function failedAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertCtrt.create({
                        cssClass: 'my-custom-class',
                        header: this.anuncios[0].Titulo,
                        message: this.anuncios[0].Descripcion,
                        buttons: [{
                          text: 'Ok',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            _this4.aumentarAnuncio();

                            console.log(blah);
                          }
                        } // , {
                        //   text: 'Registrar materia',
                        //   handler: (data) => {
                        //     //this.router.navigate(['/crear-ayudantia']);
                        //     console.log('registrar')
                        //   }
                        // }
                        ]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "alert",
          value: function alert(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertCtrt.create({
                        cssClass: 'my-custom-class',
                        header: "¿Desea eliminar esta publicación?",
                        buttons: [{
                          text: 'Cancelar',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Elminar',
                          handler: function handler(data) {//this.remove(id)                  
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return CursosPage;
      }();

      CursosPage.ctorParameters = function () {
        return [{
          type: src_app_services_cursos_service__WEBPACK_IMPORTED_MODULE_2__["CursosService"]
        }, {
          type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioService"]
        }, {
          type: src_app_services_materia_solicitud_service__WEBPACK_IMPORTED_MODULE_5__["MateriaSolicitudService"]
        }, {
          type: src_app_services_anuncios_service__WEBPACK_IMPORTED_MODULE_7__["AnunciosService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      CursosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cursos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./cursos.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/cursos/cursos.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./cursos.page.scss */
        "./src/app/folder/cursos/cursos.page.scss"))["default"]]
      })], CursosPage);
      /***/
    },

    /***/
    "./src/app/models/anuncios.ts":
    /*!************************************!*\
      !*** ./src/app/models/anuncios.ts ***!
      \************************************/

    /*! exports provided: Anuncios */

    /***/
    function srcAppModelsAnunciosTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Anuncios", function () {
        return Anuncios;
      });

      var Anuncios = function Anuncios() {
        _classCallCheck(this, Anuncios);
      };
      /***/

    },

    /***/
    "./src/app/models/materia-solicitud.ts":
    /*!*********************************************!*\
      !*** ./src/app/models/materia-solicitud.ts ***!
      \*********************************************/

    /*! exports provided: MateriaSolicitud */

    /***/
    function srcAppModelsMateriaSolicitudTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MateriaSolicitud", function () {
        return MateriaSolicitud;
      });

      var MateriaSolicitud = function MateriaSolicitud() {
        _classCallCheck(this, MateriaSolicitud);
      };
      /***/

    },

    /***/
    "./src/app/services/anuncios.service.ts":
    /*!**********************************************!*\
      !*** ./src/app/services/anuncios.service.ts ***!
      \**********************************************/

    /*! exports provided: AnunciosService */

    /***/
    function srcAppServicesAnunciosServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnunciosService", function () {
        return AnunciosService;
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


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angularfire2/firestore */
      "./node_modules/angularfire2/firestore/index.js");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js"); // import firebase from 'firebase/app';
      // import 'firebase/firestore';


      var AnunciosService = /*#__PURE__*/function () {
        function AnunciosService(firestore) {
          _classCallCheck(this, AnunciosService);

          this.firestore = firestore;
          this.anunciosCollection = firestore.collection('Anuncios');
          this.anuncios = this.anunciosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          }));
        }

        _createClass(AnunciosService, [{
          key: "getAnuncios",
          value: function getAnuncios() {
            return this.anuncios;
          } // getAyudante(id:string){
          //   return this.ayudantesCollection.doc<Ayudantes>(id).valueChanges();
          // }
          // addAyudante(Ayudantes:Ayudantes){
          //   return this.ayudantesCollection.add({...Ayudantes});
          // }

        }, {
          key: "updateAnuncio",
          value: function updateAnuncio(id, Anuncios) {
            return this.anunciosCollection.doc(id).update(Object.assign({}, Anuncios));
          }
        }]);

        return AnunciosService;
      }();

      AnunciosService.ctorParameters = function () {
        return [{
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      AnunciosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AnunciosService);
      /***/
    },

    /***/
    "./src/app/services/materia-solicitud.service.ts":
    /*!*******************************************************!*\
      !*** ./src/app/services/materia-solicitud.service.ts ***!
      \*******************************************************/

    /*! exports provided: MateriaSolicitudService */

    /***/
    function srcAppServicesMateriaSolicitudServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MateriaSolicitudService", function () {
        return MateriaSolicitudService;
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


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angularfire2/firestore */
      "./node_modules/angularfire2/firestore/index.js");
      /* harmony import */


      var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);

      var MateriaSolicitudService = /*#__PURE__*/function () {
        function MateriaSolicitudService(firestore) {
          _classCallCheck(this, MateriaSolicitudService);

          this.materiasCollection = firestore.collection('MateriasSolicitud');
        }

        _createClass(MateriaSolicitudService, [{
          key: "addMateria",
          value: function addMateria(MateriaSolicitud) {
            return this.materiasCollection.add(Object.assign({}, MateriaSolicitud));
          }
        }]);

        return MateriaSolicitudService;
      }();

      MateriaSolicitudService.ctorParameters = function () {
        return [{
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      MateriaSolicitudService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], MateriaSolicitudService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=folder-cursos-cursos-module-es5.js.map