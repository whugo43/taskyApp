(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "./node_modules/@ionic/core/dist/esm/index-e806d1f6.js");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "./node_modules/@ionic/core/dist/esm/index-f49d994d.js");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  if (el.componentOnReady) {
    await el.componentOnReady();
  }
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "./src/app/models/ayudantes.ts":
/*!*************************************!*\
  !*** ./src/app/models/ayudantes.ts ***!
  \*************************************/
/*! exports provided: Ayudantes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ayudantes", function() { return Ayudantes; });
class Ayudantes {
}


/***/ }),

/***/ "./src/app/models/comentarios.ts":
/*!***************************************!*\
  !*** ./src/app/models/comentarios.ts ***!
  \***************************************/
/*! exports provided: Comentarios */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comentarios", function() { return Comentarios; });
class Comentarios {
}


/***/ }),

/***/ "./src/app/models/grupos.ts":
/*!**********************************!*\
  !*** ./src/app/models/grupos.ts ***!
  \**********************************/
/*! exports provided: Grupos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grupos", function() { return Grupos; });
class Grupos {
}


/***/ }),

/***/ "./src/app/models/publicaciones-materia.ts":
/*!*************************************************!*\
  !*** ./src/app/models/publicaciones-materia.ts ***!
  \*************************************************/
/*! exports provided: PublicacionesMateria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicacionesMateria", function() { return PublicacionesMateria; });
class PublicacionesMateria {
}


/***/ }),

/***/ "./src/app/models/publicidad.ts":
/*!**************************************!*\
  !*** ./src/app/models/publicidad.ts ***!
  \**************************************/
/*! exports provided: Publicidad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Publicidad", function() { return Publicidad; });
class Publicidad {
}


/***/ }),

/***/ "./src/app/models/usuarios.ts":
/*!************************************!*\
  !*** ./src/app/models/usuarios.ts ***!
  \************************************/
/*! exports provided: Usuarios */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuarios", function() { return Usuarios; });
class Usuarios {
}


/***/ }),

/***/ "./src/app/pipes/filtro-anuncio.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipes/filtro-anuncio.pipe.ts ***!
  \**********************************************/
/*! exports provided: FiltroAnuncioPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroAnuncioPipe", function() { return FiltroAnuncioPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FiltroAnuncioPipe = class FiltroAnuncioPipe {
    transform(anuncios, texto) {
        if (texto.length === 0) {
            return anuncios;
        }
        texto = texto.toLocaleLowerCase();
        return anuncios.filter(anuncio => {
            return anuncio.Descripcion.toLocaleLowerCase().includes(texto) ||
                anuncio.Titulo.toLocaleLowerCase().includes(texto);
        });
    }
};
FiltroAnuncioPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtroAnuncio'
    })
], FiltroAnuncioPipe);



/***/ }),

/***/ "./src/app/pipes/filtro-comentarios.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/pipes/filtro-comentarios.pipe.ts ***!
  \**************************************************/
/*! exports provided: FiltroComentariosPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroComentariosPipe", function() { return FiltroComentariosPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FiltroComentariosPipe = class FiltroComentariosPipe {
    transform(comentarios, texto) {
        if (texto.length === 0) {
            return comentarios;
        }
        texto = texto.toLocaleLowerCase();
        return comentarios.filter(comentarios => {
            return comentarios.Comentario.toLocaleLowerCase().includes(texto);
        });
    }
};
FiltroComentariosPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtroComentarios'
    })
], FiltroComentariosPipe);



/***/ }),

/***/ "./src/app/pipes/filtro-curso.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/pipes/filtro-curso.pipe.ts ***!
  \********************************************/
/*! exports provided: FiltroCursoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroCursoPipe", function() { return FiltroCursoPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FiltroCursoPipe = class FiltroCursoPipe {
    transform(cursos, texto) {
        if (texto.length === 0) {
            return cursos;
        }
        texto = texto.toLocaleLowerCase();
        return cursos.filter(curso => {
            return curso.Nombre.toLocaleLowerCase().includes(texto);
        });
    }
};
FiltroCursoPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtroCurso'
    })
], FiltroCursoPipe);



/***/ }),

/***/ "./src/app/pipes/filtro-publicacion.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/pipes/filtro-publicacion.pipe.ts ***!
  \**************************************************/
/*! exports provided: FiltroPublicacionPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroPublicacionPipe", function() { return FiltroPublicacionPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FiltroPublicacionPipe = class FiltroPublicacionPipe {
    transform(value, ...args) {
        return null;
    }
};
FiltroPublicacionPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtroPublicacion'
    })
], FiltroPublicacionPipe);



/***/ }),

/***/ "./src/app/pipes/filtro-usuario.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipes/filtro-usuario.pipe.ts ***!
  \**********************************************/
/*! exports provided: FiltroUsuarioPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroUsuarioPipe", function() { return FiltroUsuarioPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FiltroUsuarioPipe = class FiltroUsuarioPipe {
    transform(usuarios, texto) {
        if (texto.length === 0) {
            return usuarios;
        }
        texto = texto.toLocaleLowerCase();
        return usuarios.filter(usuarios => {
            let usuarioCompleto = usuarios.Nombre + " " + usuarios.Apellido;
            return usuarioCompleto.toLocaleLowerCase().includes(texto);
        });
    }
};
FiltroUsuarioPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtroUsuario'
    })
], FiltroUsuarioPipe);



/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _filtro_curso_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filtro-curso.pipe */ "./src/app/pipes/filtro-curso.pipe.ts");
/* harmony import */ var _filtro_usuario_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filtro-usuario.pipe */ "./src/app/pipes/filtro-usuario.pipe.ts");
/* harmony import */ var _filtro_publicacion_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filtro-publicacion.pipe */ "./src/app/pipes/filtro-publicacion.pipe.ts");
/* harmony import */ var _filtro_anuncio_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filtro-anuncio.pipe */ "./src/app/pipes/filtro-anuncio.pipe.ts");
/* harmony import */ var _filtro_comentarios_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filtro-comentarios.pipe */ "./src/app/pipes/filtro-comentarios.pipe.ts");







let PipesModule = class PipesModule {
};
PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_filtro_curso_pipe__WEBPACK_IMPORTED_MODULE_2__["FiltroCursoPipe"], _filtro_usuario_pipe__WEBPACK_IMPORTED_MODULE_3__["FiltroUsuarioPipe"], _filtro_publicacion_pipe__WEBPACK_IMPORTED_MODULE_4__["FiltroPublicacionPipe"], _filtro_anuncio_pipe__WEBPACK_IMPORTED_MODULE_5__["FiltroAnuncioPipe"], _filtro_comentarios_pipe__WEBPACK_IMPORTED_MODULE_6__["FiltroComentariosPipe"]],
        exports: [_filtro_curso_pipe__WEBPACK_IMPORTED_MODULE_2__["FiltroCursoPipe"], _filtro_usuario_pipe__WEBPACK_IMPORTED_MODULE_3__["FiltroUsuarioPipe"], _filtro_publicacion_pipe__WEBPACK_IMPORTED_MODULE_4__["FiltroPublicacionPipe"], _filtro_anuncio_pipe__WEBPACK_IMPORTED_MODULE_5__["FiltroAnuncioPipe"], _filtro_comentarios_pipe__WEBPACK_IMPORTED_MODULE_6__["FiltroComentariosPipe"]]
    })
], PipesModule);



/***/ }),

/***/ "./src/app/services/ayudantes.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/ayudantes.service.ts ***!
  \***********************************************/
/*! exports provided: AyudantesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AyudantesService", function() { return AyudantesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




// import firebase from 'firebase/app';
// import 'firebase/firestore';
let AyudantesService = class AyudantesService {
    constructor(firestore) {
        this.firestore = firestore;
        this.ayudantesCollection = firestore.collection('Ayudantes');
        this.ayudantes = this.ayudantesCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getAyudantes() {
        return this.ayudantes;
    }
    getAyudante(id) {
        return this.ayudantesCollection.doc(id).valueChanges();
    }
    addAyudante(Ayudantes) {
        return this.ayudantesCollection.add(Object.assign({}, Ayudantes));
    }
    updateAyudante(id, Ayudantes) {
        return this.ayudantesCollection.doc(id).update(Object.assign({}, Ayudantes));
    }
    removeAyudante(id) {
        return this.ayudantesCollection.doc(id).delete();
    }
};
AyudantesService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
AyudantesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AyudantesService);



/***/ }),

/***/ "./src/app/services/comentarios.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/comentarios.service.ts ***!
  \*************************************************/
/*! exports provided: ComentariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentariosService", function() { return ComentariosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let ComentariosService = class ComentariosService {
    constructor(firestore) {
        this.ComentariosCollection = firestore.collection('Comentarios', ref => ref.orderBy("Fecha", "desc"));
        this.Comentarios = this.ComentariosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getComentarios() {
        return this.Comentarios;
    }
    getComentario(id) {
        return this.ComentariosCollection.doc(id).valueChanges();
    }
    addComentario(Comentarios) {
        return this.ComentariosCollection.add(Object.assign({}, Comentarios));
    }
    removeComentario(id) {
        return this.ComentariosCollection.doc(id).delete();
    }
};
ComentariosService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
ComentariosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ComentariosService);



/***/ }),

/***/ "./src/app/services/cursos.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/cursos.service.ts ***!
  \********************************************/
/*! exports provided: CursosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursosService", function() { return CursosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let CursosService = class CursosService {
    constructor(firestore) {
        this.cursosCollection = firestore.collection('Materias', ref => ref.orderBy("Nombre", "asc"));
        this.cursos = this.cursosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getCursos() {
        return this.cursos;
    }
    getCurso(id) {
        return this.cursosCollection.doc(id).valueChanges();
    }
};
CursosService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
CursosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CursosService);



/***/ }),

/***/ "./src/app/services/grupos.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/grupos.service.ts ***!
  \********************************************/
/*! exports provided: GruposService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruposService", function() { return GruposService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let GruposService = class GruposService {
    constructor(firestore) {
        this.gruposCollection = firestore.collection('Grupos');
        this.grupos = this.gruposCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getGrupos() {
        return this.grupos;
    }
    getGrupo(id) {
        return this.gruposCollection.doc(id).valueChanges();
    }
    addGrupo(Grupos) {
        return this.gruposCollection.add(Object.assign({}, Grupos));
    }
    updateGrupo(id, Grupos) {
        return this.gruposCollection.doc(id).update(Object.assign({}, Grupos));
    }
    removeGrupo(id) {
        return this.gruposCollection.doc(id).delete();
    }
};
GruposService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
GruposService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GruposService);



/***/ }),

/***/ "./src/app/services/mensaje-error.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/mensaje-error.service.ts ***!
  \***************************************************/
/*! exports provided: MensajeErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensajeErrorService", function() { return MensajeErrorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MensajeErrorService = class MensajeErrorService {
    constructor() { }
    AuthErrorCodeSpanish(description) {
        if (description == "email-already-in-use") {
            return "Este correo ya está siendo usado por otro usuario";
        }
        else if (description == "user-disabled") {
            return "Este usuario ha sido deshabilitado";
        }
        else if (description == "operation-not-allowed") {
            return "Operación no permitida";
        }
        else if (description == "invalid-email") {
            return "Correo electrónico no válido";
        }
        else if (description == "wrong-password") {
            return "Contraseña incorrecta";
        }
        else if (description == "user-not-found") {
            return "No se encontró cuenta del usuario con el correo especificado";
        }
        else if (description == "network-request-failed") {
            return "Promblema al intentar conectar al servidor";
        }
        else if (description == "weak-password") {
            return "Contraseña muy débil o no válida";
        }
        else if (description == "missing-email") {
            return "Hace falta registrar un correo electrónico";
        }
        else if (description == "internal-error") {
            return "Error interno";
        }
        else if (description == "invalid-custom-token") {
            return "Token personalizado invalido";
        }
        else if (description == "too-many-requests") {
            return "Ya se han enviado muchas solicitudes al servidor";
        }
        else {
            return "Algo salio mal, intentelo de nuevo";
        }
    }
};
MensajeErrorService.ctorParameters = () => [];
MensajeErrorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MensajeErrorService);



/***/ }),

/***/ "./src/app/services/publicaciones.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/publicaciones.service.ts ***!
  \***************************************************/
/*! exports provided: PublicacionesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicacionesService", function() { return PublicacionesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let PublicacionesService = class PublicacionesService {
    //private probar1: AngularFirestore <PublicacionesMateria>;
    constructor(firestore) {
        this.publicacionesCollection = firestore.collection('PublicacionesGenerales');
        //this.probar1 = firestore.collection('Publicaciones'.where("Visibilidad", "==", true).get();
        this.publicaciones = this.publicacionesCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
        this.publicacionesMateriaCollection = firestore.collection('Publicaciones', ref => ref.orderBy("Fecha", "desc"));
        this.publicacionesMateria = this.publicacionesMateriaCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getPublicaciones() {
        return this.publicaciones;
    }
    getPublicacion(id) {
        return this.publicacionesCollection.doc(id).valueChanges();
    }
    addPublicaciones(Usuarios) {
        return this.publicacionesCollection.add(Object.assign({}, Usuarios));
    }
    updatePublicaciones(id, Usuarios) {
        return this.publicacionesCollection.doc(id).update(Object.assign({}, Usuarios));
    }
    removePublicaciones(id) {
        return this.publicacionesCollection.doc(id).delete();
    }
    // probar(){
    //   return this.probar1;
    // }
    getPublicacionesMateria() {
        return this.publicacionesMateria;
    }
    getPublicacionMateria(id) {
        return this.publicacionesMateriaCollection.doc(id).valueChanges();
    }
    addPublicacionesMateria(PublicacionesMateria) {
        return this.publicacionesMateriaCollection.add(Object.assign({}, PublicacionesMateria));
    }
    updatePublicacionesMateria(id, PublicacionesMateria) {
        return this.publicacionesMateriaCollection.doc(id).update(Object.assign({}, PublicacionesMateria));
    }
    removePublicacionesMateria(id) {
        return this.publicacionesMateriaCollection.doc(id).delete();
    }
};
PublicacionesService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
PublicacionesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PublicacionesService);



/***/ }),

/***/ "./src/app/services/publicidad.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/publicidad.service.ts ***!
  \************************************************/
/*! exports provided: PublicidadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicidadService", function() { return PublicidadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let PublicidadService = class PublicidadService {
    //private probar1: AngularFirestore <PublicacionesMateria>;
    constructor(firestore) {
        this.publicidadCollection = firestore.collection('Publicidad');
        //this.probar1 = firestore.collection('Publicaciones'.where("Visibilidad", "==", true).get();
        this.publicidad = this.publicidadCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getPublicidad() {
        return this.publicidad;
    }
    getPublicidadId(id) {
        return this.publicidadCollection.doc(id).valueChanges();
    }
    updatePublicidad(id, Publicidad) {
        return this.publicidadCollection.doc(id).update(Object.assign({}, Publicidad));
    }
};
PublicidadService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
PublicidadService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PublicidadService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map