"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./src/components/terminal.tsx":
/*!*************************************!*\
  !*** ./src/components/terminal.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Terminal: function() { return /* binding */ Terminal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typewriter-effect */ \"./node_modules/typewriter-effect/dist/react.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Terminal = (param)=>{\n    let { project, index, typewriterRefs, delay = 10 } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"terminal flex w-full h-2/3 max-h-96 pb-4 flex-col first:p-0 z-10 lg:max-h-full lg:h-3/4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"terminal-title-bar z-20 flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"terminal-tab\",\n                        children: [\n                            project.title,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"terminal-tab-close\",\n                                children: \"x\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\components\\\\terminal.tsx\",\n                                lineNumber: 12,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\components\\\\terminal.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"terminal-button minimize\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\components\\\\terminal.tsx\",\n                                lineNumber: 15,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"terminal-button maximize\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\components\\\\terminal.tsx\",\n                                lineNumber: 16,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"terminal-button close\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\components\\\\terminal.tsx\",\n                                lineNumber: 17,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\components\\\\terminal.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\components\\\\terminal.tsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 terminal-body\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((typewriter_effect__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    onInit: async (typewriter)=>{\n                        typewriterRefs[index].current = typewriter;\n                        typewriter.changeDelay(delay);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\components\\\\terminal.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\components\\\\terminal.tsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\components\\\\terminal.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Terminal;\nvar _c;\n$RefreshReg$(_c, \"Terminal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90ZXJtaW5hbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUNpQjtBQUdwQyxNQUFNRSxXQUE0RjtRQUFDLEVBQUNDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxjQUFjLEVBQUVDLFFBQVEsRUFBRSxFQUFDO0lBRXRKLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTs7NEJBQ1ZMLFFBQVFNLEtBQUs7MENBQ2QsOERBQUNGO2dDQUFJQyxXQUFVOzBDQUFxQjs7Ozs7Ozs7Ozs7O2tDQUV4Qyw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRDtnQ0FBSUMsV0FBVTs7Ozs7OzBDQUNmLDhEQUFDRDtnQ0FBSUMsV0FBVTs7Ozs7OzBDQUNmLDhEQUFDRDtnQ0FBSUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUd2Qiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNQLDBEQUFVQTtvQkFDUFMsUUFBUSxPQUFPQzt3QkFDWE4sY0FBYyxDQUFDRCxNQUFNLENBQUNRLE9BQU8sR0FBR0Q7d0JBQ2hDQSxXQUNDRSxXQUFXLENBQUNQO29CQUNqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEIsRUFBQztLQTFCWUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVybWluYWwudHN4P2JiNTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFR5cGV3cml0ZXIgZnJvbSAndHlwZXdyaXRlci1lZmZlY3QnO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuLi90eXBlcy9wcm9qZWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBUZXJtaW5hbDogUmVhY3QuRkM8e3Byb2plY3Q6IFByb2plY3QsIGluZGV4OiBudW1iZXIsIHR5cGV3cml0ZXJSZWZzOiBhbnksIGRlbGF5OiBudW1iZXJ9PiA9ICh7cHJvamVjdCwgaW5kZXgsIHR5cGV3cml0ZXJSZWZzLCBkZWxheSA9IDEwfSkgPT4ge1xyXG5cclxucmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXJtaW5hbCBmbGV4IHctZnVsbCBoLTIvMyBtYXgtaC05NiBwYi00IGZsZXgtY29sIGZpcnN0OnAtMCB6LTEwIGxnOm1heC1oLWZ1bGwgbGc6aC0zLzQnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVybWluYWwtdGl0bGUtYmFyIHotMjAgZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlcm1pbmFsLXRhYlwiPlxyXG4gICAgICAgICAgICAgICAge3Byb2plY3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlcm1pbmFsLXRhYi1jbG9zZVwiPng8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93ICc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlcm1pbmFsLWJ1dHRvbiBtaW5pbWl6ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlcm1pbmFsLWJ1dHRvbiBtYXhpbWl6ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlcm1pbmFsLWJ1dHRvbiBjbG9zZVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTQgdGVybWluYWwtYm9keSc+XHJcbiAgICAgICAgICAgIDxUeXBld3JpdGVyXHJcbiAgICAgICAgICAgICAgICBvbkluaXQ9e2FzeW5jICh0eXBld3JpdGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZXdyaXRlclJlZnNbaW5kZXhdLmN1cnJlbnQgPSB0eXBld3JpdGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGV3cml0ZXJcclxuICAgICAgICAgICAgICAgICAgICAuY2hhbmdlRGVsYXkoZGVsYXkpXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJUeXBld3JpdGVyIiwiVGVybWluYWwiLCJwcm9qZWN0IiwiaW5kZXgiLCJ0eXBld3JpdGVyUmVmcyIsImRlbGF5IiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJvbkluaXQiLCJ0eXBld3JpdGVyIiwiY3VycmVudCIsImNoYW5nZURlbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/terminal.tsx\n"));

/***/ })

});