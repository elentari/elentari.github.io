webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-three-fiber */ "./node_modules/react-three-fiber/web.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_PageLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PageLayout */ "./src/components/PageLayout.js");
/* harmony import */ var _components_three_Cube__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/three/Cube */ "./src/components/three/Cube.js");
/* harmony import */ var _components_three_Lights__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/three/Lights */ "./src/components/three/Lights.js");
/* harmony import */ var _components_three_Floor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/three/Floor */ "./src/components/three/Floor.js");
/* harmony import */ var _components_three_BackgroundCircle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/three/BackgroundCircle */ "./src/components/three/BackgroundCircle.js");
/* harmony import */ var _components_three_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/three/Avatar */ "./src/components/three/Avatar.js");
var _jsxFileName = "/Users/ivicabatinic/Documents/projects/DEV_PLAYGROUND/elentari.github.io/src/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










function IndexPage() {
  return __jsx(_components_PageLayout__WEBPACK_IMPORTED_MODULE_3__["PageLayout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__["NextSeo"], {
    title: "Home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx(react_three_fiber__WEBPACK_IMPORTED_MODULE_1__["Canvas"], {
    camera: {
      position: [0, -3, 50],
      fov: 20,
      near: 0.1,
      far: 1000
    },
    gl: {
      antialias: true,
      shadowMap: {
        enabled: true
      }
    },
    shadowMap: true,
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_components_three_Lights__WEBPACK_IMPORTED_MODULE_5__["Lights"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx(_components_three_BackgroundCircle__WEBPACK_IMPORTED_MODULE_7__["BackgroundCircle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: __jsx(_components_three_Cube__WEBPACK_IMPORTED_MODULE_4__["Cube"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_components_three_Avatar__WEBPACK_IMPORTED_MODULE_8__["Avatar"], {
    url: "/avatar.glb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), __jsx(_components_three_Floor__WEBPACK_IMPORTED_MODULE_6__["Floor"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.52edb29ecae928b627bf.hot-update.js.map