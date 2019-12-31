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
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-three-fiber */ "./node_modules/react-three-fiber/web.js");
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ "./node_modules/three/examples/jsm/loaders/GLTFLoader.js");
var _jsxFileName = "/Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/elentari.github.io/src/components/three/Avatar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 // import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

function Avatar(_ref) {
  var url = _ref.url;
  var gltf = Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_2__["useLoader"])(three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_3__["GLTFLoader"], url);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(function () {
    return new three__WEBPACK_IMPORTED_MODULE_0__["AnimationMixer"]();
  }),
      mixer = _useState[0];

  Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_2__["useFrame"])(function (state, delta) {
    return mixer.update(delta);
  });
  var scene = gltf.scene,
      animations = gltf.animations;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var neck;
    var waist;
    scene.traverse(function (object) {
      if (object.isBone && object.name === 'arissaNeck') {
        neck = object;
      }

      if (object.isBone && object.name === 'arissaSpine') {
        waist = object;
      }

      if (object.isMesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });
    scene.scale.set(7, 7, 7);
    scene.position.y = -11;
    var idleAnimationClip = three__WEBPACK_IMPORTED_MODULE_0__["AnimationClip"].findByName(animations, 'idle');
    idleAnimationClip.tracks.splice(3, 3);
    idleAnimationClip.tracks.splice(9, 3);
    var animationAction = mixer.clipAction(idleAnimationClip, scene);
    animationAction.play();
    return function () {
      return mixer.uncacheClip(idleAnimationClip);
    };
  }, [scene, animations]);
  return __jsx("primitive", {
    object: gltf.scene,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  });
}

/***/ })

})
//# sourceMappingURL=index.js.741d3455972c108ab956.hot-update.js.map