webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducer */ \"./pages/reducer.ts\");\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nanoid */ \"./node_modules/nanoid/index.browser.js\");\n/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aws-amplify */ \"./node_modules/aws-amplify/lib-esm/index.js\");\n/* harmony import */ var _src_aws_exports__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/aws-exports */ \"./src/aws-exports.js\");\n/* harmony import */ var _src_graphql_mutations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/graphql/mutations */ \"./src/graphql/mutations.js\");\n/* harmony import */ var _src_graphql_subscriptions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/graphql/subscriptions */ \"./src/graphql/subscriptions.js\");\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/rozar/Documents/nextjs-amplified/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"];\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\naws_amplify__WEBPACK_IMPORTED_MODULE_7__[\"API\"].configure(_src_aws_exports__WEBPACK_IMPORTED_MODULE_8__[\"default\"]); // Should be a device id or a cognito user id but this will do\n\nvar MY_ID = Object(nanoid__WEBPACK_IMPORTED_MODULE_6__[\"nanoid\"])();\n\nvar App = function App(_ref) {\n  _s();\n\n  var todos = _ref.todos;\n\n  // The reducer defined before\n  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_4__[\"useReducer\"](_reducer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    currentTodo: \"\",\n    todos: todos\n  }),\n      _React$useReducer2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useReducer, 2),\n      state = _React$useReducer2[0],\n      dispatch = _React$useReducer2[1];\n\n  react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"](function () {\n    var listener = aws_amplify__WEBPACK_IMPORTED_MODULE_7__[\"API\"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_7__[\"graphqlOperation\"])(_src_graphql_subscriptions__WEBPACK_IMPORTED_MODULE_10__[\"onCreateTodo\"]));\n    var subscription = listener.subscribe(function (v) {\n      dispatch({\n        type: \"add\",\n        payload: v.value.data.onCreateTodo\n      });\n    });\n    return function () {\n      subscription.unsubscribe();\n    };\n  }, []);\n\n  var add = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var todo;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              todo = {\n                id: Object(nanoid__WEBPACK_IMPORTED_MODULE_6__[\"nanoid\"])(),\n                name: state.currentTodo\n              };\n              dispatch({\n                type: \"add\",\n                payload: todo\n              }); // Optimistic update\n\n              dispatch({\n                type: \"set-current\",\n                payload: \"\"\n              });\n              _context.prev = 3;\n              _context.next = 6;\n              return aws_amplify__WEBPACK_IMPORTED_MODULE_7__[\"API\"].graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_7__[\"graphqlOperation\"])(_src_graphql_mutations__WEBPACK_IMPORTED_MODULE_9__[\"createTodo\"], {\n                input: _objectSpread({}, todo)\n              }));\n\n            case 6:\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](3);\n              // With revert on error\n              dispatch({\n                type: \"set-current\",\n                payload: todo.name\n              });\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[3, 8]]);\n    }));\n\n    return function add() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var edit = function edit(todo\n  /*:Todo*/\n  ) {\n    dispatch({\n      type: \"update\",\n      payload: todo\n    });\n  };\n\n  var del = function del(todo\n  /*:Todo*/\n  ) {\n    dispatch({\n      type: \"delete\",\n      payload: todo\n    });\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_4__[\"Fragment\"], null, __jsx(\"header\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }, \"To Do List\")), __jsx(\"main\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }\n  }, __jsx(\"form\", {\n    onSubmit: function onSubmit(event) {\n      event.preventDefault();\n      add(state.currentTodo);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    value: state.currentTodo,\n    onChange: function onChange(event) {\n      dispatch({\n        type: \"set-current\",\n        payload: event.target.value\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  }), __jsx(\"button\", {\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 11\n    }\n  }, \"Add\")), __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }, state.todos.map(function (todo) {\n    return __jsx(\"li\", {\n      key: todo.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 15\n      }\n    }, __jsx(\"input\", {\n      type: \"text\",\n      value: todo.name,\n      onChange: function onChange(event) {\n        edit(_objectSpread(_objectSpread({}, todo), {}, {\n          name: event.target.value\n        }));\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 17\n      }\n    }), __jsx(\"button\", {\n      onClick: function onClick() {\n        del(todo);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 17\n      }\n    }, \"Delete\"));\n  }))));\n};\n\n_s(App, \"tpqFKrQaX6UYy0gUDBok6g3s5wc=\");\n\n_c = App;\n;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkFQSSIsImNvbmZpZ3VyZSIsImNvbmZpZyIsIk1ZX0lEIiwibmFub2lkIiwiQXBwIiwidG9kb3MiLCJSZWFjdCIsInJlZHVjZXIiLCJjdXJyZW50VG9kbyIsInN0YXRlIiwiZGlzcGF0Y2giLCJsaXN0ZW5lciIsImdyYXBocWwiLCJncmFwaHFsT3BlcmF0aW9uIiwib25DcmVhdGVUb2RvIiwic3Vic2NyaXB0aW9uIiwic3Vic2NyaWJlIiwidiIsInR5cGUiLCJwYXlsb2FkIiwidmFsdWUiLCJkYXRhIiwidW5zdWJzY3JpYmUiLCJhZGQiLCJ0b2RvIiwiaWQiLCJuYW1lIiwiY3JlYXRlVG9kbyIsImlucHV0IiwiZWRpdCIsImRlbCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUFBLCtDQUFHLENBQUNDLFNBQUosQ0FBY0Msd0RBQWQsRSxDQUNBOztBQUNBLElBQU1DLEtBQUssR0FBR0MscURBQU0sRUFBcEI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBYTtBQUFBOztBQUFBLE1BQVhDLEtBQVcsUUFBWEEsS0FBVzs7QUFDdkI7QUFEdUIsMEJBRUdDLGdEQUFBLENBQWlCQyxnREFBakIsRUFBMEI7QUFDbERDLGVBQVcsRUFBRSxFQURxQztBQUVsREgsU0FBSyxFQUFMQTtBQUZrRCxHQUExQixDQUZIO0FBQUE7QUFBQSxNQUVoQkksS0FGZ0I7QUFBQSxNQUVUQyxRQUZTOztBQU12QkosaURBQUEsQ0FBZ0IsWUFBTTtBQUNwQixRQUFNSyxRQUFRLEdBQUdaLCtDQUFHLENBQUNhLE9BQUosQ0FBWUMsb0VBQWdCLENBQUNDLHdFQUFELENBQTVCLENBQWpCO0FBQ0EsUUFBTUMsWUFBWSxHQUFH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QUksRUFBSTtBQUN2QixXQUNFO0FBQUksU0FBRyxFQUFFQSxJQUFJLENBQUNDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFFLE1BRFI7QUFFRSxXQUFLLEVBQUVELElBQUksQ0FBQ0UsSUFGZDtBQUdFLGNBQVEsRUFBRSxrQkFBQUssS0FBSyxFQUFJO0FBQ2pCRixZQUFJLGlDQUFNTCxJQUFOO0FBQVlFLGNBQUksRUFBRUssS0FBSyxDQUFDRSxNQUFOLENBQWFiO0FBQS9CLFdBQUo7QUFDRCxPQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQVFFO0FBQ0UsYUFBTyxFQUFFLG1CQUFNO0FBQ2JVLFdBQUcsQ0FBQ04sSUFBRCxDQUFIO0FBQ0QsT0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGLENBREY7QUFrQkQsR0FuQkEsQ0FESCxDQWhCRixDQUpGLENBREY7QUE4Q0QsQ0F6RkQ7O0dBQU1wQixHOztLQUFBQSxHO0FBMkdMOztBQUVjQSxrRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInXG5pbXBvcnQgeyBuYW5vaWQgfSBmcm9tICduYW5vaWQnXG5pbXBvcnQgeyBBUEksIGdyYXBocWxPcGVyYXRpb24gfSBmcm9tIFwiYXdzLWFtcGxpZnlcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uL3NyYy9hd3MtZXhwb3J0c1wiO1xuaW1wb3J0IHsgY3JlYXRlVG9kbyB9IGZyb20gXCIuLi9zcmMvZ3JhcGhxbC9tdXRhdGlvbnNcIjtcbmltcG9ydCB7IGxpc3RUb2RvcyB9IGZyb20gXCIuLi9zcmMvZ3JhcGhxbC9xdWVyaWVzXCI7XG5pbXBvcnQgeyBvbkNyZWF0ZVRvZG8gfSBmcm9tIFwiLi4vc3JjL2dyYXBocWwvc3Vic2NyaXB0aW9uc1wiO1xuXG5BUEkuY29uZmlndXJlKGNvbmZpZyk7XG4vLyBTaG91bGQgYmUgYSBkZXZpY2UgaWQgb3IgYSBjb2duaXRvIHVzZXIgaWQgYnV0IHRoaXMgd2lsbCBkb1xuY29uc3QgTVlfSUQgPSBuYW5vaWQoKTtcblxuY29uc3QgQXBwID0gKHt0b2Rvc30pID0+IHtcbiAgLy8gVGhlIHJlZHVjZXIgZGVmaW5lZCBiZWZvcmVcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKHJlZHVjZXIsIHtcbiAgICBjdXJyZW50VG9kbzogXCJcIixcbiAgICB0b2Rvc1xuICB9KTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IEFQSS5ncmFwaHFsKGdyYXBocWxPcGVyYXRpb24ob25DcmVhdGVUb2RvKSk7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gbGlzdGVuZXIuc3Vic2NyaWJlKHYgPT4ge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcImFkZFwiLCBwYXlsb2FkOiB2LnZhbHVlLmRhdGEub25DcmVhdGVUb2RvIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIGNvbnN0IGFkZCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB0b2RvID0ge1xuICAgICAgaWQ6IG5hbm9pZCgpLFxuICAgICAgbmFtZTogc3RhdGUuY3VycmVudFRvZG9cbiAgICB9O1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFwiYWRkXCIsXG4gICAgICBwYXlsb2FkOiB0b2RvXG4gICAgfSk7XG4gICAgLy8gT3B0aW1pc3RpYyB1cGRhdGVcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwic2V0LWN1cnJlbnRcIiwgcGF5bG9hZDogXCJcIiB9KTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgQVBJLmdyYXBocWwoXG4gICAgICAgIGdyYXBocWxPcGVyYXRpb24oY3JlYXRlVG9kbywge1xuICAgICAgICAgIGlucHV0OiB7IC4uLnRvZG8gfVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIFdpdGggcmV2ZXJ0IG9uIGVycm9yXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwic2V0LWN1cnJlbnRcIiwgcGF5bG9hZDogdG9kby5uYW1lIH0pO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZWRpdCA9ICh0b2RvIC8qOlRvZG8qLykgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJ1cGRhdGVcIiwgcGF5bG9hZDogdG9kbyB9KTtcbiAgfTtcbiAgY29uc3QgZGVsID0gKHRvZG8gLyo6VG9kbyovKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcImRlbGV0ZVwiLCBwYXlsb2FkOiB0b2RvIH0pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8aDI+VG8gRG8gTGlzdDwvaDI+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxtYWluPlxuICAgICAgICA8Zm9ybVxuICAgICAgICAgIG9uU3VibWl0PXtldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYWRkKHN0YXRlLmN1cnJlbnRUb2RvKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17c3RhdGUuY3VycmVudFRvZG99XG4gICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwic2V0LWN1cnJlbnRcIiwgcGF5bG9hZDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7c3RhdGUudG9kb3MubWFwKHRvZG8gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpIGtleT17dG9kby5pZH0+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPXtcInRleHRcIn1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0b2RvLm5hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlZGl0KHsgLi4udG9kbywgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGVsKHRvZG8pO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBsZXQgcmVzdWx0O1xuICB0cnkge1xuICAgIC8vIEZldGNoIG91ciBsaXN0IGZyb20gdGhlIHNlcnZlclxuICAgIHJlc3VsdCA9IGF3YWl0IEFQSS5ncmFwaHFsKGdyYXBocWxPcGVyYXRpb24obGlzdFRvZG9zKSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUud2FybignRVJSJywgZXJyKTtcbiAgICByZXR1cm4geyBwcm9wczogeyB0b2RvczogW10gfX07XG4gIH1cbiAgaWYgKHJlc3VsdC5lcnJvcnMpIHtcbiAgICBjb25zb2xlLndhcm4oXCJGYWlsZWQgdG8gZmV0Y2ggbGlzdFRvZG9zLiBcIiwgcmVzdWx0LmVycm9ycyk7XG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgdG9kb3M6IFtdIH19O1xuICB9XG4gIGlmIChyZXN1bHQuZGF0YS5nZXRUb2RvTGlzdCAhPT0gbnVsbCkge1xuICAgIHJldHVybiB7IHByb3BzOiB7IHRvZG9zOiByZXN1bHQuZGF0YS5saXN0VG9kb3MuaXRlbXMgfX07XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})