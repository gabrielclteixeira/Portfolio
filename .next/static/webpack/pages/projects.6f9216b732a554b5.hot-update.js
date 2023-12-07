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

/***/ "./src/pages/projects.tsx":
/*!********************************!*\
  !*** ./src/pages/projects.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typewriter-effect */ \"./node_modules/typewriter-effect/dist/react.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/layout */ \"./src/app/layout.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Projects() {\n    _s();\n    const projects = [\n        {\n            imgSrc: \"/images/me.jpg\",\n            duration: \"1 month\",\n            description: \"This was perfect\",\n            summary: \"A brief summary of what was done\",\n            stringRepetitions: [\n                \"I made mistakes\",\n                \"But I learned from them\"\n            ]\n        },\n        {\n            imgSrc: \"/images/me.jpg\",\n            duration: \"1 month\",\n            description: \"This is a cool project.\",\n            summary: \"Another brief summary of what was done\",\n            stringRepetitions: [\n                \"I made mistakes\",\n                \"But I learned from them\"\n            ]\n        }\n    ];\n    // Function to scroll to a specific project\n    const scrollToProject = (index)=>{\n        react_scroll__WEBPACK_IMPORTED_MODULE_2__.scroller.scrollTo(\"project-\".concat(index), {\n            duration: 800,\n            delay: 0,\n            smooth: \"easeInOutQuart\"\n        });\n    };\n    const repeatStrings = (strings, typewriter)=>{\n        strings.forEach((string)=>{\n            typewriter.pauseFor(500).deleteAll().pauseFor(500).typeString('<p class=\"inline-flex \">'.concat(string, \"</p>\"));\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const scrollPosition = window.scrollY;\n            // Find the index of the project currently in view\n            const visibleProjectIndex = projects.findIndex((_, index)=>{\n                var _document_getElementById;\n                const rect = (_document_getElementById = document.getElementById(\"project-\".concat(index))) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.getBoundingClientRect();\n                return rect && rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;\n            });\n            // Scroll to the project in view\n            if (visibleProjectIndex !== -1) {\n                scrollToProject(visibleProjectIndex);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        // Cleanup event listener on component unmount\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    }, [\n        projects\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col overflow-x-hidden\",\n            children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"project-\".concat(index),\n                    className: \"flex h-screen\",\n                    style: {\n                        scrollSnapAlign: \"start\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-1/2 text-gray-200 bg-transparent rounded-tr-3xl flex flex-col items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"p-8 text-3xl font-mono font-black\",\n                                    children: project.duration\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: project.imgSrc,\n                                    alt: \"Project\",\n                                    className: \"opacity-25 rounded-full h-2/3\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"p-8 text-2xl font-mono font-bold\",\n                                    children: project.summary\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-1/2 bg-gray-800 p-4 flex flex-col justify-center items-center text-gray-200 font-mono font-bold text-xl\",\n                            style: {\n                                scrollSnapAlign: \"start\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((typewriter_effect__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                onInit: (typewriter)=>{\n                                    typewriter.changeDelay(50).typeString('<p class=\"inline-flex \">'.concat(project.description, \"</p>\")).pauseFor(500).start().callFunction(()=>{\n                                        if (project.stringRepetitions.length > 0) {\n                                            repeatStrings(project.stringRepetitions, typewriter);\n                                        }\n                                    });\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n            lineNumber: 73,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, this);\n}\n_s(Projects, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7QUFzQ2pCO0dBNUd3QlI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2plY3RzLnRzeD8zOWVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtzY3JvbGxlcn0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcclxuaW1wb3J0IFR5cGV3cml0ZXIsIHsgVHlwZXdyaXRlckNsYXNzIH0gZnJvbSAndHlwZXdyaXRlci1lZmZlY3QnO1xyXG5pbXBvcnQgUm9vdExheW91dCBmcm9tICdAL2FwcC9sYXlvdXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMoKSB7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaW1nU3JjOiAnL2ltYWdlcy9tZS5qcGcnLFxyXG4gICAgICAgIGR1cmF0aW9uOiAnMSBtb250aCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGlzIHdhcyBwZXJmZWN0JyxcclxuICAgICAgICBzdW1tYXJ5OiAnQSBicmllZiBzdW1tYXJ5IG9mIHdoYXQgd2FzIGRvbmUnLFxyXG4gICAgICAgIHN0cmluZ1JlcGV0aXRpb25zOiBbXHJcbiAgICAgICAgICAgIFwiSSBtYWRlIG1pc3Rha2VzXCIsXHJcbiAgICAgICAgICAgIFwiQnV0IEkgbGVhcm5lZCBmcm9tIHRoZW1cIixcclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpbWdTcmM6ICcvaW1hZ2VzL21lLmpwZycsXHJcbiAgICAgICAgZHVyYXRpb246ICcxIG1vbnRoJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSBjb29sIHByb2plY3QuJyxcclxuICAgICAgICBzdW1tYXJ5OiAnQW5vdGhlciBicmllZiBzdW1tYXJ5IG9mIHdoYXQgd2FzIGRvbmUnLFxyXG4gICAgICAgIHN0cmluZ1JlcGV0aXRpb25zOiBbXHJcbiAgICAgICAgICAgIFwiSSBtYWRlIG1pc3Rha2VzXCIsXHJcbiAgICAgICAgICAgIFwiQnV0IEkgbGVhcm5lZCBmcm9tIHRoZW1cIixcclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgLy8gRnVuY3Rpb24gdG8gc2Nyb2xsIHRvIGEgc3BlY2lmaWMgcHJvamVjdFxyXG4gIGNvbnN0IHNjcm9sbFRvUHJvamVjdCA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICBzY3JvbGxlci5zY3JvbGxUbyhgcHJvamVjdC0ke2luZGV4fWAsIHtcclxuICAgICAgZHVyYXRpb246IDgwMCxcclxuICAgICAgZGVsYXk6IDAsXHJcbiAgICAgIHNtb290aDogJ2Vhc2VJbk91dFF1YXJ0JyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlcGVhdFN0cmluZ3MgPSAoc3RyaW5nczogc3RyaW5nW10sIHR5cGV3cml0ZXI6IFR5cGV3cml0ZXJDbGFzcykgPT4ge1xyXG4gICAgc3RyaW5ncy5mb3JFYWNoKChzdHJpbmcpID0+IHtcclxuICAgICAgdHlwZXdyaXRlclxyXG4gICAgICAgIC5wYXVzZUZvcig1MDApXHJcbiAgICAgICAgLmRlbGV0ZUFsbCgpXHJcbiAgICAgICAgLnBhdXNlRm9yKDUwMClcclxuICAgICAgICAudHlwZVN0cmluZyhgPHAgY2xhc3M9XCJpbmxpbmUtZmxleCBcIj4ke3N0cmluZ308L3A+YCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XHJcblxyXG4gICAgICAvLyBGaW5kIHRoZSBpbmRleCBvZiB0aGUgcHJvamVjdCBjdXJyZW50bHkgaW4gdmlld1xyXG4gICAgICBjb25zdCB2aXNpYmxlUHJvamVjdEluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KChfLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvamVjdC0ke2luZGV4fWApPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICByZXR1cm4gcmVjdCAmJiByZWN0LnRvcCA8PSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyICYmIHJlY3QuYm90dG9tID49IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gU2Nyb2xsIHRvIHRoZSBwcm9qZWN0IGluIHZpZXdcclxuICAgICAgaWYgKHZpc2libGVQcm9qZWN0SW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgc2Nyb2xsVG9Qcm9qZWN0KHZpc2libGVQcm9qZWN0SW5kZXgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG5cclxuICAgIC8vIENsZWFudXAgZXZlbnQgbGlzdGVuZXIgb24gY29tcG9uZW50IHVubW91bnRcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICB9LCBbcHJvamVjdHNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSb290TGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgb3ZlcmZsb3cteC1oaWRkZW5cIj5cclxuICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBpZD17YHByb2plY3QtJHtpbmRleH1gfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGgtc2NyZWVuXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBzY3JvbGxTbmFwQWxpZ246ICdzdGFydCcsIC8vIEFsaWduIHRoZSBzdGFydCBvZiB0aGUgZWxlbWVudCB0byB0aGUgc25hcCBjb250YWluZXJcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiB0ZXh0LWdyYXktMjAwIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtdHItM3hsIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicC04IHRleHQtM3hsIGZvbnQtbW9ubyBmb250LWJsYWNrXCI+e3Byb2plY3QuZHVyYXRpb259PC9wPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9qZWN0LmltZ1NyY30gYWx0PVwiUHJvamVjdFwiIGNsYXNzTmFtZT1cIm9wYWNpdHktMjUgcm91bmRlZC1mdWxsIGgtMi8zXCIgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwLTggdGV4dC0yeGwgZm9udC1tb25vIGZvbnQtYm9sZFwiPntwcm9qZWN0LnN1bW1hcnl9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMS8yIGJnLWdyYXktODAwIHAtNCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktMjAwIGZvbnQtbW9ubyBmb250LWJvbGQgdGV4dC14bFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHNjcm9sbFNuYXBBbGlnbjogJ3N0YXJ0JywgLy8gQWxpZ24gdGhlIHN0YXJ0IG9mIHRoZSBlbGVtZW50IHRvIHRoZSBzbmFwIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8VHlwZXdyaXRlclxyXG4gICAgICAgICAgICAgICAgb25Jbml0PXsodHlwZXdyaXRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0eXBld3JpdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgLmNoYW5nZURlbGF5KDUwKVxyXG4gICAgICAgICAgICAgICAgICAgIC50eXBlU3RyaW5nKGA8cCBjbGFzcz1cImlubGluZS1mbGV4IFwiPiR7cHJvamVjdC5kZXNjcmlwdGlvbn08L3A+YClcclxuICAgICAgICAgICAgICAgICAgICAucGF1c2VGb3IoNTAwKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGxGdW5jdGlvbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0LnN0cmluZ1JlcGV0aXRpb25zLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0U3RyaW5ncyhwcm9qZWN0LnN0cmluZ1JlcGV0aXRpb25zLCB0eXBld3JpdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUm9vdExheW91dD5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0Iiwic2Nyb2xsZXIiLCJUeXBld3JpdGVyIiwiUm9vdExheW91dCIsIlByb2plY3RzIiwicHJvamVjdHMiLCJpbWdTcmMiLCJkdXJhdGlvbiIsImRlc2NyaXB0aW9uIiwic3VtbWFyeSIsInN0cmluZ1JlcGV0aXRpb25zIiwic2Nyb2xsVG9Qcm9qZWN0IiwiaW5kZXgiLCJzY3JvbGxUbyIsImRlbGF5Iiwic21vb3RoIiwicmVwZWF0U3RyaW5ncyIsInN0cmluZ3MiLCJ0eXBld3JpdGVyIiwiZm9yRWFjaCIsInN0cmluZyIsInBhdXNlRm9yIiwiZGVsZXRlQWxsIiwidHlwZVN0cmluZyIsImhhbmRsZVNjcm9sbCIsInNjcm9sbFBvc2l0aW9uIiwid2luZG93Iiwic2Nyb2xsWSIsInZpc2libGVQcm9qZWN0SW5kZXgiLCJmaW5kSW5kZXgiLCJfIiwiZG9jdW1lbnQiLCJyZWN0IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJpbm5lckhlaWdodCIsImJvdHRvbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwicHJvamVjdCIsImlkIiwic3R5bGUiLCJzY3JvbGxTbmFwQWxpZ24iLCJwIiwiaW1nIiwic3JjIiwiYWx0Iiwib25Jbml0IiwiY2hhbmdlRGVsYXkiLCJzdGFydCIsImNhbGxGdW5jdGlvbiIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/projects.tsx\n"));

/***/ })

});