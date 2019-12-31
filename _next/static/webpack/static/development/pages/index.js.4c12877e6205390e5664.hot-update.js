webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/three/Lights.js":
/*!****************************************!*\
  !*** ./src/components/three/Lights.js ***!
  \****************************************/
/*! exports provided: Lights */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lights", function() { return Lights; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-three-fiber */ "./node_modules/react-three-fiber/web.js");
var _jsxFileName = "/Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/elentari.github.io/src/components/three/Lights.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Lights(_ref) {
  var _ref$d = _ref.d,
      d = _ref$d === void 0 ? 8.25 : _ref$d;

  var _useThree = Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_2__["useThree"])(),
      scene = _useThree.scene;

  var hemisphereLightRef = Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_2__["useUpdate"])(function (light1) {
    var hemisphereLightHelper = new three__WEBPACK_IMPORTED_MODULE_0__["HemisphereLightHelper"](light1, 5, 0xff0000); // scene.add(hemisphereLightHelper);
  }, []);
  var directionalLightRef = Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_2__["useUpdate"])(function (light) {
    var directionalLightHelper = new three__WEBPACK_IMPORTED_MODULE_0__["DirectionalLightHelper"](light, 5, 0xff0000); // scene.add(directionalLightHelper);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("hemisphereLight", {
    ref: hemisphereLightRef,
    position: [0, 50, 0],
    skyColor: 0xffffff,
    groundColor: 0xffffff,
    intensity: 0.61,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("directionalLight", {
    ref: directionalLightRef,
    position: [-8, 12, 8],
    color: 0xffffff,
    intensity: 0.54,
    castShadow: true,
    "shadow-mapSize-width": 2048,
    "shadow-mapSize-height": 2048,
    "shadow-camera-near": 0.1,
    "shadow-camera-far": 1500,
    "shadow-camera-left": d * -1,
    "shadow-camera-right": d,
    "shadow-camera-top": d,
    "shadow-camera-bottom": d * -1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.4c12877e6205390e5664.hot-update.js.map