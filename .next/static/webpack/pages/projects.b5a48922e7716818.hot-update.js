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

/***/ "./src/components/menu.tsx":
/*!*********************************!*\
  !*** ./src/components/menu.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Menu: function() { return /* binding */ Menu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../public/styles.css */ \"./public/styles.css\");\n/* harmony import */ var _public_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_FaCode_FaHome_FaUser_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=FaCode,FaHome,FaUser!=!react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n// import { Link } from 'react-router-dom';\n\n// Assume you have some icons available (you can use your own or find icons online)\n\n(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(_s(()=>{\n    _s();\n    const [scrollProgress1, setScrollProgress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleScroll = ()=>{\n        const totalHeight = document.body.scrollHeight - window.innerHeight;\n        const scrollPosition = window.scrollY;\n        if (totalHeight === 0) {\n            setScrollProgress(0);\n        } else {\n            setScrollProgress(scrollPosition / totalHeight * 100);\n        }\n    };\n    window.addEventListener(\"scroll\", handleScroll);\n    return ()=>{\n        window.removeEventListener(\"scroll\", handleScroll);\n    };\n}, \"cSHXGJ2d7ZHVlzyHxc5OTuM5ZlE=\"), []);\nconst Menu = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"bg-gray-800 p-4 flex flex-1 fixed w-full -z-10 overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container flex justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"flex space-x-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/\",\n                                    className: \"text-white hover:text-gray-300 flex items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaCode_FaHome_FaUser_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaHome, {\n                                            className: \"mr-2\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\components\\\\menu.tsx\",\n                                            lineNumber: 38,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        \"Home\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\components\\\\menu.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\components\\\\menu.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/about\",\n                                    className: \"text-white hover:text-gray-300 flex items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaCode_FaHome_FaUser_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaUser, {\n                                            className: \"mr-2\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\components\\\\menu.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        \"About\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\components\\\\menu.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\components\\\\menu.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"/projects\",\n                                    className: \"text-white hover:text-gray-300 flex items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaCode_FaHome_FaUser_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaCode, {\n                                            className: \"mr-2\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\components\\\\menu.tsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        \"Projects\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\components\\\\menu.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\components\\\\menu.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\components\\\\menu.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/\",\n                        className: \"text-white text-lg font-bold italic\",\n                        children: \"Your Logo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\components\\\\menu.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\components\\\\menu.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute top-0 left-0 h-1 bg-blue-500\",\n                    style: {\n                        width: \"\".concat(scrollProgress, \"%\")\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\components\\\\menu.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\components\\\\menu.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\components\\\\menu.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Menu;\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tZW51LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDakQsMkNBQTJDO0FBQ1Q7QUFFbEMsbUZBQW1GO0FBQzNCO0FBR3hEQyxnREFBU0EsSUFBQzs7SUFDVixNQUFNLENBQUNLLGlCQUFnQkMsa0JBQWtCLEdBQUdMLCtDQUFRQSxDQUFDO0lBRW5ELE1BQU1NLGVBQWU7UUFDbkIsTUFBTUMsY0FBY0MsU0FBU0MsSUFBSSxDQUFDQyxZQUFZLEdBQUdDLE9BQU9DLFdBQVc7UUFDbkUsTUFBTUMsaUJBQWlCRixPQUFPRyxPQUFPO1FBRXJDLElBQUlQLGdCQUFnQixHQUFHO1lBQ3JCRixrQkFBa0I7UUFDcEIsT0FBTztZQUNMQSxrQkFBa0IsaUJBQWtCRSxjQUFlO1FBQ3JEO0lBQ0Y7SUFFQUksT0FBT0ksZ0JBQWdCLENBQUMsVUFBVVQ7SUFFbEMsT0FBTztRQUNMSyxPQUFPSyxtQkFBbUIsQ0FBQyxVQUFVVjtJQUN2QztBQUNGLG9DQUFHLEVBQUU7QUFFRSxNQUFNVyxPQUFpQjtJQUM1QixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FFYiw4REFBQ0U7d0JBQUdGLFdBQVU7OzBDQUNaLDhEQUFDRzswQ0FDQyw0RUFBQ0M7b0NBQUVDLE1BQUs7b0NBQUlMLFdBQVU7O3NEQUNwQiw4REFBQ2xCLDhGQUFNQTs0Q0FBQ2tCLFdBQVU7Ozs7Ozt3Q0FBUzs7Ozs7Ozs7Ozs7OzBDQUkvQiw4REFBQ0c7MENBQ0MsNEVBQUNDO29DQUFFQyxNQUFLO29DQUFTTCxXQUFVOztzREFDekIsOERBQUNqQiw4RkFBTUE7NENBQUNpQixXQUFVOzs7Ozs7d0NBQVM7Ozs7Ozs7Ozs7OzswQ0FJL0IsOERBQUNHOzBDQUNDLDRFQUFDQztvQ0FBRUMsTUFBSztvQ0FBWUwsV0FBVTs7c0RBQzVCLDhEQUFDaEIsOEZBQU1BOzRDQUFDZ0IsV0FBVTs7Ozs7O3dDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTS9CLDhEQUFDSTt3QkFBRUMsTUFBSzt3QkFBSUwsV0FBVTtrQ0FBc0M7Ozs7Ozs7Ozs7OzswQkFJaEUsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNmLDRFQUFDQztvQkFDQ0QsV0FBVTtvQkFDVk0sT0FBTzt3QkFBRUMsT0FBTyxHQUFrQixPQUFmdEIsZ0JBQWU7b0JBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTdDLEVBQUU7S0F2Q1dhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL21lbnUudHN4P2UxMDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCAnLi8uLi8uLi9wdWJsaWMvc3R5bGVzLmNzcydcclxuXHJcbi8vIEFzc3VtZSB5b3UgaGF2ZSBzb21lIGljb25zIGF2YWlsYWJsZSAoeW91IGNhbiB1c2UgeW91ciBvd24gb3IgZmluZCBpY29ucyBvbmxpbmUpXHJcbmltcG9ydCB7IEZhSG9tZSwgRmFVc2VyLCBGYUNvZGUgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcblxyXG5cclxudXNlRWZmZWN0KCgpID0+IHtcclxuY29uc3QgW3Njcm9sbFByb2dyZXNzLCBzZXRTY3JvbGxQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdG90YWxIZWlnaHQgPSBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XHJcblxyXG4gICAgaWYgKHRvdGFsSGVpZ2h0ID09PSAwKSB7XHJcbiAgICAgIHNldFNjcm9sbFByb2dyZXNzKDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2Nyb2xsUHJvZ3Jlc3MoKHNjcm9sbFBvc2l0aW9uIC8gdG90YWxIZWlnaHQpICogMTAwKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuXHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gIH07XHJcbn0sIFtdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBNZW51OiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMCBwLTQgZmxleCBmbGV4LTEgZml4ZWQgdy1mdWxsIC16LTEwIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICB7LyogTmF2aWdhdGlvbiBMaW5rcyAqL31cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTRcIj5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGhvdmVyOnRleHQtZ3JheS0zMDAgZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8RmFIb21lIGNsYXNzTmFtZT1cIm1yLTJcIiAvPlxyXG4gICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9hYm91dFwiIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgaG92ZXI6dGV4dC1ncmF5LTMwMCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxGYVVzZXIgY2xhc3NOYW1lPVwibXItMlwiIC8+XHJcbiAgICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9wcm9qZWN0c1wiIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgaG92ZXI6dGV4dC1ncmF5LTMwMCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxGYUNvZGUgY2xhc3NOYW1lPVwibXItMlwiIC8+XHJcbiAgICAgICAgICAgICAgUHJvamVjdHNcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIHsvKiBBZGQgbW9yZSBsaW5rcyBhcyBuZWVkZWQgKi99XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtYm9sZCBpdGFsaWNcIj5cclxuICAgICAgICAgICAgWW91ciBMb2dvXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgaC0xIGJnLWJsdWUtNTAwXCJcclxuICAgICAgICBzdHlsZT17eyB3aWR0aDogYCR7c2Nyb2xsUHJvZ3Jlc3N9JWAgfX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgICBcclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZhSG9tZSIsIkZhVXNlciIsIkZhQ29kZSIsInNjcm9sbFByb2dyZXNzIiwic2V0U2Nyb2xsUHJvZ3Jlc3MiLCJoYW5kbGVTY3JvbGwiLCJ0b3RhbEhlaWdodCIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbEhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwic2Nyb2xsUG9zaXRpb24iLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJNZW51IiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwidWwiLCJsaSIsImEiLCJocmVmIiwic3R5bGUiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/menu.tsx\n"));

/***/ })

});