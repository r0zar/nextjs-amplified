webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/graphql/subscriptions.js":
/*!**************************************!*\
  !*** ./src/graphql/subscriptions.js ***!
  \**************************************/
/*! exports provided: onCreateTodo, onUpdateTodo, onDeleteTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onCreateTodo\", function() { return onCreateTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onUpdateTodo\", function() { return onUpdateTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onDeleteTodo\", function() { return onDeleteTodo; });\n/* eslint-disable */\n// this is an auto generated file. This will be overwritten\nvar onCreateTodo =\n/* GraphQL */\n\"\\n  subscription OnCreateTodo {\\n    onCreateTodo {\\n      id\\n      name\\n    }\\n  }\\n\";\nvar onUpdateTodo =\n/* GraphQL */\n\"\\n  subscription OnUpdateTodo {\\n    onUpdateTodo {\\n      id\\n      name\\n    }\\n  }\\n\";\nvar onDeleteTodo =\n/* GraphQL */\n\"\\n  subscription OnDeleteTodo {\\n    onDeleteTodo {\\n      id\\n      name\\n    }\\n  }\\n\";\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhxbC9zdWJzY3JpcHRpb25zLmpzPzcwYTMiXSwibmFtZXMiOlsib25DcmVhdGVUb2RvIiwib25VcGRhdGVUb2RvIiwib25EZWxldGVUb2RvIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxJQUFNQSxZQUFZO0FBQUc7QUFBSCx5RkFBbEI7QUFRQSxJQUFNQyxZQUFZO0FBQUc7QUFBSCx5RkFBbEI7QUFRQSxJQUFNQyxZQUFZO0FBQUc7QUFBSCx5RkFBbEIiLCJmaWxlIjoiLi9zcmMvZ3JhcGhxbC9zdWJzY3JpcHRpb25zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIHRoaXMgaXMgYW4gYXV0byBnZW5lcmF0ZWQgZmlsZS4gVGhpcyB3aWxsIGJlIG92ZXJ3cml0dGVuXG5cbmV4cG9ydCBjb25zdCBvbkNyZWF0ZVRvZG8gPSAvKiBHcmFwaFFMICovIGBcbiAgc3Vic2NyaXB0aW9uIE9uQ3JlYXRlVG9kbyB7XG4gICAgb25DcmVhdGVUb2RvIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgfVxuICB9XG5gO1xuZXhwb3J0IGNvbnN0IG9uVXBkYXRlVG9kbyA9IC8qIEdyYXBoUUwgKi8gYFxuICBzdWJzY3JpcHRpb24gT25VcGRhdGVUb2RvIHtcbiAgICBvblVwZGF0ZVRvZG8ge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICB9XG4gIH1cbmA7XG5leHBvcnQgY29uc3Qgb25EZWxldGVUb2RvID0gLyogR3JhcGhRTCAqLyBgXG4gIHN1YnNjcmlwdGlvbiBPbkRlbGV0ZVRvZG8ge1xuICAgIG9uRGVsZXRlVG9kbyB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgIH1cbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/graphql/subscriptions.js\n");

/***/ })

})