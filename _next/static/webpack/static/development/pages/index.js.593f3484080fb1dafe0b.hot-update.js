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

function getMousePos(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}

function moveJoint(mouse, joint, degreeLimit) {
  var degrees = getMouseDegrees(mouse.x, mouse.y, degreeLimit);
  joint.rotation.y = three__WEBPACK_IMPORTED_MODULE_0__["Math"].degToRad(degrees.x);
  joint.rotation.x = three__WEBPACK_IMPORTED_MODULE_0__["Math"].degToRad(degrees.y);
}

function getMouseDegrees(x, y, degreeLimit) {
  var dx = 0,
      dy = 0,
      xdiff,
      xPercentage,
      ydiff,
      yPercentage;
  var w = {
    x: window.innerWidth,
    y: window.innerHeight
  }; // Left (Rotates neck left between 0 and -degreeLimit)
  // 1. If cursor is in the left half of screen

  if (x <= w.x / 2) {
    // 2. Get the difference between middle of screen and cursor position
    xdiff = w.x / 2 - x; // 3. Find the percentage of that difference (percentage toward edge of screen)

    xPercentage = xdiff / (w.x / 2) * 100; // 4. Convert that to a percentage of the maximum rotation we allow for the neck

    dx = degreeLimit * xPercentage / 100 * -1;
  } // Right (Rotates neck right between 0 and degreeLimit)


  if (x >= w.x / 2) {
    xdiff = x - w.x / 2;
    xPercentage = xdiff / (w.x / 2) * 100;
    dx = degreeLimit * xPercentage / 100;
  } // Up (Rotates neck up between 0 and -degreeLimit)


  if (y <= w.y / 2) {
    ydiff = w.y / 2 - y;
    yPercentage = ydiff / (w.y / 2) * 100; // Note that I cut degreeLimit in half when she looks up

    dy = degreeLimit * 0.5 * yPercentage / 100 * -1;
  } // Down (Rotates neck down between 0 and degreeLimit)


  if (y >= w.y / 2) {
    ydiff = y - w.y / 2;
    yPercentage = ydiff / (w.y / 2) * 100;
    dy = degreeLimit * yPercentage / 100;
  }

  return {
    x: dx,
    y: dy
  };
}

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
    document.addEventListener('mousemove', function (e) {
      var mousecoords = getMousePos(e);

      if (neck && waist) {
        moveJoint(mousecoords, neck, 50);
        moveJoint(mousecoords, waist, 30);
      }
    });
    return function () {
      return mixer.uncacheClip(idleAnimationClip);
    };
  }, [scene, animations]);
  return __jsx("primitive", {
    object: gltf.scene,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  });
}

/***/ })

})
//# sourceMappingURL=index.js.593f3484080fb1dafe0b.hot-update.js.map