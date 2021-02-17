(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-editar-publicacion-editar-publicacion-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/editar-publicacion/editar-publicacion.page.html":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/editar-publicacion/editar-publicacion.page.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFolderEditarPublicacionEditarPublicacionPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\r\n  <ion-toolbar>\r\n\r\n    <ion-segment color=\"tertiary\" value=\"publicaciones\" >\r\n\r\n      <!-- <ion-segment-button *ngIf=\"Rol==Ayudante\" value=\"mis-ayudantias\" [routerLink]=\"['/mis-ayudantias']\" routerDirection=\"root\">\r\n        <ion-icon name=\"file-tray-stacked-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Mis Cursos</ion-label>\r\n      </ion-segment-button> -->\r\n\r\n      <ion-segment-button value=\"publicaciones\" [routerLink]=\"['/publicaciones']\" routerDirection=\"root\">\r\n        <ion-icon name=\"newspaper-outline\" size=\"large\"></ion-icon> \r\n        <ion-label style=\"font-size: 14;\">Publicaciones</ion-label>\r\n      </ion-segment-button>\r\n      \r\n      <ion-segment-button value=\"cursos\" [routerLink]=\"['/cursos']\" routerDirection=\"root\">\r\n        <ion-icon name=\"library-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 14px;\">Cursos</ion-label>\r\n      </ion-segment-button>\r\n    \r\n    \r\n      <ion-segment-button value=\"perfil\" [routerLink]=\"['/perfil']\" routerDirection=\"root\">\r\n        <ion-icon name=\"person-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 12px;\">Perfil</ion-label>\r\n      </ion-segment-button>\r\n      \r\n  \r\n\r\n  \r\n\r\n    </ion-segment>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n<form #form=\"ngForm\" (ngSubmit)=\"Actualizar(form)\">\r\n    <ion-list>\r\n      <ion-card>\r\n        <div align=\"center\" style=\"margin-top: 15px;margin-bottom: 5px;\">\r\n     \r\n            <ion-label style=\"font-size: 21px;\">Título del anuncio</ion-label>\r\n       \r\n\r\n        </div>\r\n        \r\n        <ion-item>\r\n          <ion-input required placeholder=\"Titulo\" name=\"titulo\" value=\"{{publicacion.Titulo}}\" type='text' ngModel required></ion-input>\r\n        </ion-item>\r\n\r\n\r\n      </ion-card>   \r\n        \r\n      \r\n      <ion-card style=\"margin-top:15px\">\r\n\r\n        <div align=\"center\" style=\"margin-top: 15px;margin-bottom: 5px;\">\r\n     \r\n          <ion-label style=\"font-size: 21px;\">Descripción del anuncio</ion-label>\r\n     \r\n\r\n      </div>\r\n\r\n      <ion-item>\r\n        <ion-textarea required placeholder=\"Descripcion\" name=\"descripcion\" value=\"{{publicacion.Descripcion}}\" type='text' ngModel required></ion-textarea>\r\n\r\n\r\n      </ion-item>\r\n\r\n\r\n\r\n      </ion-card>\r\n      \r\n      <!-- <ion-item>\r\n        <ion-label position=\"floating\">Descripcion</ion-label>\r\n        \r\n      </ion-item> -->\r\n\r\n      <ion-item style=\"margin-top:7.5px;margin-bottom: 7.5px;\">\r\n        \r\n        <ng-container *ngIf=\"file == null\">\r\n          <ion-img id=\"blah\" [src]=\"publicacion.Foto\" alt=\"your image\" style=\"height: 275px;width: 185px;margin:auto\"></ion-img>\r\n\r\n        </ng-container>\r\n        <ng-container  *ngIf=\"file != null\">\r\n          <ion-img id=\"blah\" [src]=\"imageSrc\" alt=\"your image\" style=\"height: 275px;width: 185px;margin:auto\"></ion-img>\r\n\r\n        </ng-container>\r\n       \r\n      </ion-item>\r\n\r\n\r\n      <ion-card style=\"margin-top:15px\">\r\n        <ion-item>\r\n          <ion-label><ion-icon name=\"cloud-upload-outline\"></ion-icon>  <ion-text style='margin-left:7.5px'>Cambiar foto</ion-text></ion-label>\r\n          <ion-input id=\"myFileInput\" (change)=\"readURL($event);\" accept=\"image/*\" placeholder=\"archivo\" name=\"archivo\" type='file' ngModel value=\"{{file}}\"></ion-input>\r\n        \r\n       \r\n        </ion-item>\r\n        <!-- <ion-item>\r\n        <ng-container *ngIf=\"file != null\">\r\n          <ion-button ion-button icon-left (click)=\"removeFile()\" slot=\"end\" color=\"danger\">\r\n            <ion-icon name=\"trash\"></ion-icon>\r\n          </ion-button>\r\n        </ng-container>\r\n      </ion-item> -->\r\n      </ion-card>\r\n      \r\n      \r\n \r\n    </ion-list>\r\n \r\n    <div class=\"ion-padding\" align='center'>\r\n      <ion-button  shape=\"round\" type=\"submit\"  [disabled]=\"form.invalid\" expand=\"block\" style=\"width: 150px;\">\r\n        Actualizar\r\n      </ion-button>\r\n    </div>\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<style>\r\n  #myFileInput{\r\n    position: absolute;\r\n    opacity: 0;\r\n  }\r\n</style>";
      /***/
    },

    /***/
    "./src/app/folder/editar-publicacion/editar-publicacion-routing.module.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/folder/editar-publicacion/editar-publicacion-routing.module.ts ***!
      \********************************************************************************/

    /*! exports provided: EditarPublicacionPageRoutingModule */

    /***/
    function srcAppFolderEditarPublicacionEditarPublicacionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditarPublicacionPageRoutingModule", function () {
        return EditarPublicacionPageRoutingModule;
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


      var _editar_publicacion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./editar-publicacion.page */
      "./src/app/folder/editar-publicacion/editar-publicacion.page.ts");

      var routes = [{
        path: '',
        component: _editar_publicacion_page__WEBPACK_IMPORTED_MODULE_3__["EditarPublicacionPage"]
      }];

      var EditarPublicacionPageRoutingModule = function EditarPublicacionPageRoutingModule() {
        _classCallCheck(this, EditarPublicacionPageRoutingModule);
      };

      EditarPublicacionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditarPublicacionPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/folder/editar-publicacion/editar-publicacion.module.ts":
    /*!************************************************************************!*\
      !*** ./src/app/folder/editar-publicacion/editar-publicacion.module.ts ***!
      \************************************************************************/

    /*! exports provided: EditarPublicacionPageModule */

    /***/
    function srcAppFolderEditarPublicacionEditarPublicacionModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditarPublicacionPageModule", function () {
        return EditarPublicacionPageModule;
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


      var _editar_publicacion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./editar-publicacion-routing.module */
      "./src/app/folder/editar-publicacion/editar-publicacion-routing.module.ts");
      /* harmony import */


      var _editar_publicacion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./editar-publicacion.page */
      "./src/app/folder/editar-publicacion/editar-publicacion.page.ts");

      var EditarPublicacionPageModule = function EditarPublicacionPageModule() {
        _classCallCheck(this, EditarPublicacionPageModule);
      };

      EditarPublicacionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _editar_publicacion_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditarPublicacionPageRoutingModule"]],
        declarations: [_editar_publicacion_page__WEBPACK_IMPORTED_MODULE_6__["EditarPublicacionPage"]]
      })], EditarPublicacionPageModule);
      /***/
    },

    /***/
    "./src/app/folder/editar-publicacion/editar-publicacion.page.scss":
    /*!************************************************************************!*\
      !*** ./src/app/folder/editar-publicacion/editar-publicacion.page.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFolderEditarPublicacionEditarPublicacionPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9lZGl0YXItcHVibGljYWNpb24vZWRpdGFyLXB1YmxpY2FjaW9uLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/folder/editar-publicacion/editar-publicacion.page.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/folder/editar-publicacion/editar-publicacion.page.ts ***!
      \**********************************************************************/

    /*! exports provided: EditarPublicacionPage */

    /***/
    function srcAppFolderEditarPublicacionEditarPublicacionPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditarPublicacionPage", function () {
        return EditarPublicacionPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angularfire2/storage */
      "./node_modules/angularfire2/storage/index.js");
      /* harmony import */


      var angularfire2_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var src_app_models_publicaciones_materia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/models/publicaciones-materia */
      "./src/app/models/publicaciones-materia.ts");
      /* harmony import */


      var src_app_services_publicaciones_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/publicaciones.service */
      "./src/app/services/publicaciones.service.ts");

      var EditarPublicacionPage = /*#__PURE__*/function () {
        function EditarPublicacionPage(router, angularFireStorage, activateRoute, alertCtrt, loadingController, publicacionesService) {
          _classCallCheck(this, EditarPublicacionPage);

          this.router = router;
          this.angularFireStorage = angularFireStorage;
          this.activateRoute = activateRoute;
          this.alertCtrt = alertCtrt;
          this.loadingController = loadingController;
          this.publicacionesService = publicacionesService;
          this.publicacion = new src_app_models_publicaciones_materia__WEBPACK_IMPORTED_MODULE_5__["PublicacionesMateria"]();
        }

        _createClass(EditarPublicacionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.activateRoute.paramMap.subscribe(function (paramMap) {
              var id = paramMap.get('id');
              _this.redireccion = paramMap.get('redireccion');
              _this.id = id;

              _this.publicacionesService.getPublicacionMateria(id).subscribe(function (res) {
                _this.publicacion = res;
                _this.image = res.Foto;
              });
            });
          }
        }, {
          key: "failedAlert",
          value: function failedAlert(text) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrt.create({
                        cssClass: 'my-custom-class',
                        header: text,
                        buttons: [{
                          text: 'OK',
                          handler: function handler() {}
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
          key: "removeFile",
          value: function removeFile() {
            this.file = null;
          }
        }, {
          key: "presentLoading",
          value: function presentLoading(mensaje) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: mensaje
                      });

                    case 2:
                      this.loading = _context2.sent;
                      return _context2.abrupt("return", this.loading.present());

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "Actualizar",
          value: function Actualizar(form) {
            this.presentLoading("Espere por favor...");
            this.guardarArchivo(form.value.titulo, form.value.descripcion);
          }
        }, {
          key: "guardarArchivo",
          value: function guardarArchivo(titulo, descripcion) {
            var _this3 = this;

            if (this.file != null) {
              var storageRef = this.angularFireStorage.storage.ref();
              storageRef.child(this.file.name).put(this.file).then(function (data) {
                data.ref.getDownloadURL().then(function (downloadURL) {
                  return _this3.RegistroCompleto(titulo, descripcion, downloadURL);
                });
              })["catch"](function (err) {
                _this3.loading.dismiss();

                _this3.failedAlert("Error al cargar el archivo, intentelo de nuevo");
              });
            } else {
              this.RegistroCompleto(titulo, descripcion, null);
            }
          }
        }, {
          key: "RegistroCompleto",
          value: function RegistroCompleto(titulo, descripcion, downloadURL) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.publicacion.Titulo = titulo;
                      this.publicacion.Descripcion = descripcion;

                      if (this.file != null) {
                        this.publicacion.Foto = downloadURL;
                      }

                      this.publicacionesService.updatePublicacionesMateria(this.id, this.publicacion).then(function (auth) {
                        _this4.loading.dismiss();

                        if (_this4.redireccion == 'Publicacion') {
                          _this4.router.navigate(['/publicaciones']);
                        }

                        if (_this4.redireccion == 'Curso') {
                          _this4.router.navigate(['/curso-detalle', _this4.publicacion.Materia, _this4.publicacion.Titulo]);
                        }
                      })["catch"](function (error) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  this.loading.dismiss();
                                  this.failedAlert("Algo salio mal, intentelo de nuevo");

                                case 2:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3, this);
                        }));
                      });

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return EditarPublicacionPage;
      }();

      EditarPublicacionPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: src_app_services_publicaciones_service__WEBPACK_IMPORTED_MODULE_6__["PublicacionesService"]
        }];
      };

      EditarPublicacionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editar-publicacion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./editar-publicacion.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/editar-publicacion/editar-publicacion.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./editar-publicacion.page.scss */
        "./src/app/folder/editar-publicacion/editar-publicacion.page.scss"))["default"]]
      })], EditarPublicacionPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=folder-editar-publicacion-editar-publicacion-module-es5.js.map