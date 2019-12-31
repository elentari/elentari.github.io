webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/three/Avatar.js":
/*!****************************************!*\
  !*** ./src/components/three/Avatar.js ***!
  \****************************************/
/*! exports provided: Avatar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return Avatar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-three-fiber */ "./node_modules/react-three-fiber/web.js");
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ "./node_modules/three/examples/jsm/loaders/GLTFLoader.js");
var _jsxFileName = "/Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/elentari.github.io/src/components/three/Avatar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

function Avatar(_ref) {
  var url = _ref.url;
  // const gltf = useLoader(GLTFLoader, url, loader => {
  //   const dracoLoader = new DRACOLoader();
  //   dracoLoader.setDecoderPath('/draco-gltf/');
  //   loader.setDRACOLoader(dracoLoader);
  // });
  var gltf = Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_1__["useLoader"])(three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__["GLTFLoader"], url);

  if (!gltf) {
    return null;
  }

  var scene = gltf.scene;
  scene.traverse(function (object) {
    if (object.isMesh) {
      object.castShadow = true;
      object.receiveShadow = true;
    }
  });
  scene.scale.set(7, 7, 7);
  scene.position.y = -11;
  return __jsx("primitive", {
    object: gltf.scene,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  });
}

/***/ })

})
//# sourceMappingURL=index.js.50da5cc007ef6798decd.hot-update.js.map