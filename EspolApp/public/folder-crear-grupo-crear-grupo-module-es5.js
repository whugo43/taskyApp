(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-crear-grupo-crear-grupo-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/crear-grupo/crear-grupo.page.html":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/crear-grupo/crear-grupo.page.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFolderCrearGrupoCrearGrupoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\r\n  <ion-toolbar>\r\n\r\n    <ion-segment color=\"tertiary\" value=\"cursos\" >\r\n \r\n      <ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\r\n        <ion-icon name=\"newspaper-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Publicaciones</ion-label>\r\n      </ion-segment-button>\r\n      \r\n      <ion-segment-button value=\"cursos\" [routerLink]=\"['/cursos']\" routerDirection=\"root\">\r\n        <ion-icon name=\"library-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 14px;\">Cursos</ion-label>\r\n      </ion-segment-button>\r\n    \r\n    \r\n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-icon name=\"person-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\r\n      </ion-segment-button>\r\n\r\n  \r\n\r\n  \r\n\r\n</ion-segment>\r\n\r\n</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form #form=\"ngForm\" (ngSubmit)=\"crearGrupo(form)\">\r\n      <ion-list>\r\n        <ion-card>\r\n          <ion-item>\r\n            <ion-label style=\"font-size: 21px;\">Nombre del grupo</ion-label>\r\n          </ion-item>\r\n       \r\n              \r\n         \r\n  \r\n          \r\n          \r\n          <ion-item>\r\n            <ion-input required placeholder=\"Ingrese el nombre del grupo\" name=\"nombre\" value=\"nombreGrupo\" type='text' ngModel required></ion-input>\r\n          </ion-item>\r\n  \r\n  \r\n        </ion-card>   \r\n          \r\n        \r\n        <ion-card style=\"margin-top:15px\">\r\n  \r\n          <ion-item>\r\n            <ion-label style=\"font-size: 21px;\">Descripción del grupo</ion-label>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-input required placeholder=\"Ingrese la descripción del grupo\" name=\"descripcion\"  type='text' ngModel required></ion-input>\r\n          </ion-item>\r\n\r\n  \r\n        </ion-card>\r\n\r\n        <ion-card style=\"margin-top:15px\">\r\n  \r\n          <ion-item>\r\n            <ion-label style=\"font-size: 21px;\">Link de whatsapp del grupo</ion-label>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-input required placeholder=\"Ingrese el link\" name=\"link\" type='text' ngModel required></ion-input>\r\n          </ion-item>\r\n          \r\n  \r\n        </ion-card>\r\n\r\n        <ion-card>\r\n          <ion-item>\r\n            <ion-label><ion-icon name=\"image-outline\"></ion-icon> Foto del grupo<ion-text color=\"\"></ion-text></ion-label>\r\n          \r\n            <ion-input type='file' accept=\"image/*\" id=\"fotoGrupo\" name=\"foto\" (change)=\"readURL($event);\" class=\"fileInput\" ngModel required></ion-input>\r\n          </ion-item>\r\n\r\n        </ion-card>\r\n             \r\n      </ion-list>\r\n   \r\n      <div class=\"ion-padding\" align='center'>\r\n        <ion-button  type=\"submit\"  [disabled]=\"form.invalid\" expand=\"block\" style=\"width: 150px;\">\r\n          Guardar\r\n        </ion-button>\r\n      </div>\r\n    </form>\r\n  \r\n  </ion-content>\r\n  <style>\r\n    #fotoGrupo{\r\n      position: absolute;\r\n      opacity: 0;\r\n    }\r\n  </style>";
      /***/
    },

    /***/
    "./src/app/folder/crear-grupo/crear-grupo-routing.module.ts":
    /*!******************************************************************!*\
      !*** ./src/app/folder/crear-grupo/crear-grupo-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: CrearGrupoPageRoutingModule */

    /***/
    function srcAppFolderCrearGrupoCrearGrupoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CrearGrupoPageRoutingModule", function () {
        return CrearGrupoPageRoutingModule;
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


      var _crear_grupo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./crear-grupo.page */
      "./src/app/folder/crear-grupo/crear-grupo.page.ts");

      var routes = [{
        path: '',
        component: _crear_grupo_page__WEBPACK_IMPORTED_MODULE_3__["CrearGrupoPage"]
      }];

      var CrearGrupoPageRoutingModule = function CrearGrupoPageRoutingModule() {
        _classCallCheck(this, CrearGrupoPageRoutingModule);
      };

      CrearGrupoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CrearGrupoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/folder/crear-grupo/crear-grupo.module.ts":
    /*!**********************************************************!*\
      !*** ./src/app/folder/crear-grupo/crear-grupo.module.ts ***!
      \**********************************************************/

    /*! exports provided: CrearGrupoPageModule */

    /***/
    function srcAppFolderCrearGrupoCrearGrupoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CrearGrupoPageModule", function () {
        return CrearGrupoPageModule;
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


      var _crear_grupo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./crear-grupo-routing.module */
      "./src/app/folder/crear-grupo/crear-grupo-routing.module.ts");
      /* harmony import */


      var _crear_grupo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./crear-grupo.page */
      "./src/app/folder/crear-grupo/crear-grupo.page.ts");

      var CrearGrupoPageModule = function CrearGrupoPageModule() {
        _classCallCheck(this, CrearGrupoPageModule);
      };

      CrearGrupoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _crear_grupo_routing_module__WEBPACK_IMPORTED_MODULE_5__["CrearGrupoPageRoutingModule"]],
        declarations: [_crear_grupo_page__WEBPACK_IMPORTED_MODULE_6__["CrearGrupoPage"]]
      })], CrearGrupoPageModule);
      /***/
    },

    /***/
    "./src/app/folder/crear-grupo/crear-grupo.page.scss":
    /*!**********************************************************!*\
      !*** ./src/app/folder/crear-grupo/crear-grupo.page.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFolderCrearGrupoCrearGrupoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9jcmVhci1ncnVwby9jcmVhci1ncnVwby5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/folder/crear-grupo/crear-grupo.page.ts":
    /*!********************************************************!*\
      !*** ./src/app/folder/crear-grupo/crear-grupo.page.ts ***!
      \********************************************************/

    /*! exports provided: CrearGrupoPage */

    /***/
    function srcAppFolderCrearGrupoCrearGrupoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CrearGrupoPage", function () {
        return CrearGrupoPage;
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


      var src_app_models_grupos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/grupos */
      "./src/app/models/grupos.ts");
      /* harmony import */


      var angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angularfire2/storage */
      "./node_modules/angularfire2/storage/index.js");
      /* harmony import */


      var angularfire2_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var src_app_services_grupos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/grupos.service */
      "./src/app/services/grupos.service.ts");

      var CrearGrupoPage = /*#__PURE__*/function () {
        function CrearGrupoPage(activateRoute, grupoService, angularFireStorage, router) {
          _classCallCheck(this, CrearGrupoPage);

          this.activateRoute = activateRoute;
          this.grupoService = grupoService;
          this.angularFireStorage = angularFireStorage;
          this.router = router;
          this.grupo = new src_app_models_grupos__WEBPACK_IMPORTED_MODULE_3__["Grupos"]();
        }

        _createClass(CrearGrupoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.myId = localStorage.getItem('userId');
            this.activateRoute.paramMap.subscribe(function (paramMap) {
              var idMateria1 = paramMap.get('id'); //const idU = paramMap.get('idUser')

              _this.idMateria = idMateria1;
              _this.idUser = localStorage.getItem('userId'); //this.grupoService.getGrupo(idGrupo).subscribe(res => {this.grupo = res;});
              // this.actividadService.getActividad(idActividad).subscribe(res => this.actividad =res);
            });
          }
        }, {
          key: "readURL",
          value: function readURL(event) {
            var _this2 = this;

            if (event.target.files && event.target.files[0]) {
              this.file = event.target.files[0];
              var reader = new FileReader();

              reader.onload = function (e) {
                return _this2.imageSrc = reader.result;
              };

              reader.readAsDataURL(this.file);
            }
          }
        }, {
          key: "crearGrupo",
          value: function crearGrupo(form) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      //this.presentLoading("Espere por favor...");
                      this.guardarArchivo(form.value.nombre, form.value.descripcion, form.value.link);

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "guardarArchivo",
          value: function guardarArchivo(nombre, descripcion, link) {
            var _this3 = this;

            var storageRef = this.angularFireStorage.storage.ref();
            storageRef.child(this.file.name).put(this.file).then(function (data) {
              data.ref.getDownloadURL().then(function (downloadURL) {
                _this3.registroCompleto(nombre, descripcion, link, downloadURL);
              })["catch"](function (err) {
                console.log('error');
              });
            });
          }
        }, {
          key: "registroCompleto",
          value: function registroCompleto(nombre, descripcion, link, downloadURL) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.grupo.Nombre = nombre;
                      this.grupo.Descripcion = descripcion;
                      this.grupo.Link = link;
                      this.grupo.Imagen = downloadURL;
                      this.grupo.Materia = this.idMateria;
                      this.grupo.Usuario = this.myId;
                      this.grupoService.addGrupo(this.grupo).then(function (auth) {
                        // this.loading.dismiss();
                        _this4.router.navigate(["/grupos", _this4.idMateria, '']);
                      })["catch"](function (error) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          var mensaje;
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  // this.loading.dismiss();
                                  mensaje = error.code.split('/')[1];
                                  console.log('error'); // const presentarMensaje = this.mensajeErrorService.AuthErrorCodeSpanish(mensaje);
                                  // this.failedAlert(presentarMensaje)

                                case 2:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2);
                        }));
                      });

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return CrearGrupoPage;
      }();

      CrearGrupoPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_services_grupos_service__WEBPACK_IMPORTED_MODULE_5__["GruposService"]
        }, {
          type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      CrearGrupoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crear-grupo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./crear-grupo.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/crear-grupo/crear-grupo.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./crear-grupo.page.scss */
        "./src/app/folder/crear-grupo/crear-grupo.page.scss"))["default"]]
      })], CrearGrupoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=folder-crear-grupo-crear-grupo-module-es5.js.map