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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typewriter-effect */ \"./node_modules/typewriter-effect/dist/react.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/layout */ \"./src/app/layout.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Projects() {\n    _s();\n    const projects = [\n        {\n            imgSrc: \"/images/me.jpg\",\n            duration: \"1 month\",\n            description: \"This was perfect\",\n            summary: \"A brief summary of what was done\",\n            stringRepetitions: [\n                \"I made mistakes\",\n                \"But I learned from them\"\n            ]\n        },\n        {\n            imgSrc: \"/images/me.jpg\",\n            duration: \"1 month\",\n            description: \"This is a cool project.\",\n            summary: \"Another brief summary of what was done\",\n            stringRepetitions: [\n                \"I made mistakes\",\n                \"But I learned from them\"\n            ]\n        }\n    ];\n    // Function to scroll to a specific project\n    const scrollToProject = (index)=>{\n        react_scroll__WEBPACK_IMPORTED_MODULE_2__.scroller.scrollTo(\"project-\".concat(index), {\n            duration: 800,\n            delay: 0,\n            smooth: \"easeInOutQuart\"\n        });\n    };\n    const repeatStrings = async (strings, typewriter)=>{\n        for (const string of strings){\n            console.log(\"Repeating string: \", string);\n            await new Promise((resolve)=>{\n                typewriter.pauseFor(500).deleteAll().pauseFor(500).typeString('<p class=\"inline-flex \">'.concat(string, \"</p>\")).callFunction(()=>{\n                    resolve(null);\n                }).start();\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const scrollPosition = window.scrollY;\n            // Find the index of the project currently in view\n            const visibleProjectIndex = projects.findIndex((_, index)=>{\n                var _document_getElementById;\n                const rect = (_document_getElementById = document.getElementById(\"project-\".concat(index))) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.getBoundingClientRect();\n                return rect && rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;\n            });\n            // Scroll to the project in view\n            if (visibleProjectIndex !== -1) {\n                scrollToProject(visibleProjectIndex);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        // Cleanup event listener on component unmount\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    }, [\n        projects\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col overflow-x-hidden\",\n            children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"project-\".concat(index),\n                    className: \"flex h-screen\",\n                    style: {\n                        scrollSnapAlign: \"start\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-1/2 text-gray-200 bg-transparent rounded-tr-3xl flex flex-col items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"p-8 text-3xl font-mono font-black\",\n                                    children: project.duration\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: project.imgSrc,\n                                    alt: \"Project\",\n                                    className: \"opacity-25 rounded-full h-2/3\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"p-8 text-2xl font-mono font-bold\",\n                                    children: project.summary\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-1/2 bg-gray-800 p-4 flex flex-col justify-center items-center text-gray-200 font-mono font-bold text-xl\",\n                            style: {\n                                scrollSnapAlign: \"start\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((typewriter_effect__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                onInit: (typewriter)=>{\n                                    typewriter.changeDelay(50).typeString('<p class=\"inline-flex \">'.concat(project.description, \"</p>\")).pauseFor(500).start().callFunction((state)=>{\n                                        if (project.stringRepetitions.length > 0) {\n                                            repeatStrings(project.stringRepetitions, typewriter);\n                                        }\n                                    });\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n            lineNumber: 80,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n        lineNumber: 79,\n        columnNumber: 5\n    }, this);\n}\n_s(Projects, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJVixRQUFRdEMsaUJBQWlCLENBQUNpRCxNQUFNLEdBQUcsR0FBRTs0Q0FDckMzQyxjQUFjZ0MsUUFBUXRDLGlCQUFpQixFQUFFUTt3Q0FDN0M7b0NBQ0o7Z0NBQ0o7Ozs7Ozs7Ozs7OzttQkE5QkNOOzs7Ozs7Ozs7Ozs7Ozs7QUFzQ2pCO0dBbkh3QlI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2plY3RzLnRzeD8zOWVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtzY3JvbGxlcn0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcclxuaW1wb3J0IFR5cGV3cml0ZXIsIHsgVHlwZXdyaXRlckNsYXNzIH0gZnJvbSAndHlwZXdyaXRlci1lZmZlY3QnO1xyXG5pbXBvcnQgUm9vdExheW91dCBmcm9tICdAL2FwcC9sYXlvdXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMoKSB7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaW1nU3JjOiAnL2ltYWdlcy9tZS5qcGcnLFxyXG4gICAgICAgIGR1cmF0aW9uOiAnMSBtb250aCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGlzIHdhcyBwZXJmZWN0JyxcclxuICAgICAgICBzdW1tYXJ5OiAnQSBicmllZiBzdW1tYXJ5IG9mIHdoYXQgd2FzIGRvbmUnLFxyXG4gICAgICAgIHN0cmluZ1JlcGV0aXRpb25zOiBbXHJcbiAgICAgICAgICAgIFwiSSBtYWRlIG1pc3Rha2VzXCIsXHJcbiAgICAgICAgICAgIFwiQnV0IEkgbGVhcm5lZCBmcm9tIHRoZW1cIixcclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpbWdTcmM6ICcvaW1hZ2VzL21lLmpwZycsXHJcbiAgICAgICAgZHVyYXRpb246ICcxIG1vbnRoJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSBjb29sIHByb2plY3QuJyxcclxuICAgICAgICBzdW1tYXJ5OiAnQW5vdGhlciBicmllZiBzdW1tYXJ5IG9mIHdoYXQgd2FzIGRvbmUnLFxyXG4gICAgICAgIHN0cmluZ1JlcGV0aXRpb25zOiBbXHJcbiAgICAgICAgICAgIFwiSSBtYWRlIG1pc3Rha2VzXCIsXHJcbiAgICAgICAgICAgIFwiQnV0IEkgbGVhcm5lZCBmcm9tIHRoZW1cIixcclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgLy8gRnVuY3Rpb24gdG8gc2Nyb2xsIHRvIGEgc3BlY2lmaWMgcHJvamVjdFxyXG4gIGNvbnN0IHNjcm9sbFRvUHJvamVjdCA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICBzY3JvbGxlci5zY3JvbGxUbyhgcHJvamVjdC0ke2luZGV4fWAsIHtcclxuICAgICAgZHVyYXRpb246IDgwMCxcclxuICAgICAgZGVsYXk6IDAsXHJcbiAgICAgIHNtb290aDogJ2Vhc2VJbk91dFF1YXJ0JyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlcGVhdFN0cmluZ3MgPSBhc3luYyAoc3RyaW5nczogc3RyaW5nW10sIHR5cGV3cml0ZXI6IFR5cGV3cml0ZXJDbGFzcykgPT4ge1xyXG4gICAgZm9yIChjb25zdCBzdHJpbmcgb2Ygc3RyaW5ncykge1xyXG4gICAgICBjb25zb2xlLmxvZygnUmVwZWF0aW5nIHN0cmluZzogJywgc3RyaW5nKTtcclxuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICB0eXBld3JpdGVyXHJcbiAgICAgICAgICAucGF1c2VGb3IoNTAwKVxyXG4gICAgICAgICAgLmRlbGV0ZUFsbCgpXHJcbiAgICAgICAgICAucGF1c2VGb3IoNTAwKVxyXG4gICAgICAgICAgLnR5cGVTdHJpbmcoYDxwIGNsYXNzPVwiaW5saW5lLWZsZXggXCI+JHtzdHJpbmd9PC9wPmApXHJcbiAgICAgICAgICAuY2FsbEZ1bmN0aW9uKCgpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgY29uc3Qgc2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcclxuXHJcbiAgICAgIC8vIEZpbmQgdGhlIGluZGV4IG9mIHRoZSBwcm9qZWN0IGN1cnJlbnRseSBpbiB2aWV3XHJcbiAgICAgIGNvbnN0IHZpc2libGVQcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoKF8sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcm9qZWN0LSR7aW5kZXh9YCk/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHJldHVybiByZWN0ICYmIHJlY3QudG9wIDw9IHdpbmRvdy5pbm5lckhlaWdodCAvIDIgJiYgcmVjdC5ib3R0b20gPj0gd2luZG93LmlubmVySGVpZ2h0IC8gMjtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBTY3JvbGwgdG8gdGhlIHByb2plY3QgaW4gdmlld1xyXG4gICAgICBpZiAodmlzaWJsZVByb2plY3RJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICBzY3JvbGxUb1Byb2plY3QodmlzaWJsZVByb2plY3RJbmRleCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcblxyXG4gICAgLy8gQ2xlYW51cCBldmVudCBsaXN0ZW5lciBvbiBjb21wb25lbnQgdW5tb3VudFxyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gIH0sIFtwcm9qZWN0c10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJvb3RMYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBvdmVyZmxvdy14LWhpZGRlblwiPlxyXG4gICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIGlkPXtgcHJvamVjdC0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaC1zY3JlZW5cIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHNjcm9sbFNuYXBBbGlnbjogJ3N0YXJ0JywgLy8gQWxpZ24gdGhlIHN0YXJ0IG9mIHRoZSBlbGVtZW50IHRvIHRoZSBzbmFwIGNvbnRhaW5lclxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIHRleHQtZ3JheS0yMDAgYmctdHJhbnNwYXJlbnQgcm91bmRlZC10ci0zeGwgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwLTggdGV4dC0zeGwgZm9udC1tb25vIGZvbnQtYmxhY2tcIj57cHJvamVjdC5kdXJhdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2plY3QuaW1nU3JjfSBhbHQ9XCJQcm9qZWN0XCIgY2xhc3NOYW1lPVwib3BhY2l0eS0yNSByb3VuZGVkLWZ1bGwgaC0yLzNcIiAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAtOCB0ZXh0LTJ4bCBmb250LW1vbm8gZm9udC1ib2xkXCI+e3Byb2plY3Quc3VtbWFyeX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xLzIgYmctZ3JheS04MDAgcC00IGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtZ3JheS0yMDAgZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LXhsXCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsU25hcEFsaWduOiAnc3RhcnQnLCAvLyBBbGlnbiB0aGUgc3RhcnQgb2YgdGhlIGVsZW1lbnQgdG8gdGhlIHNuYXAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUeXBld3JpdGVyXHJcbiAgICAgICAgICAgICAgICBvbkluaXQ9eyh0eXBld3JpdGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGV3cml0ZXJcclxuICAgICAgICAgICAgICAgICAgICAuY2hhbmdlRGVsYXkoNTApXHJcbiAgICAgICAgICAgICAgICAgICAgLnR5cGVTdHJpbmcoYDxwIGNsYXNzPVwiaW5saW5lLWZsZXggXCI+JHtwcm9qZWN0LmRlc2NyaXB0aW9ufTwvcD5gKVxyXG4gICAgICAgICAgICAgICAgICAgIC5wYXVzZUZvcig1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgICAgICAuY2FsbEZ1bmN0aW9uKChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdC5zdHJpbmdSZXBldGl0aW9ucy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdFN0cmluZ3MocHJvamVjdC5zdHJpbmdSZXBldGl0aW9ucywgdHlwZXdyaXRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1Jvb3RMYXlvdXQ+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInNjcm9sbGVyIiwiVHlwZXdyaXRlciIsIlJvb3RMYXlvdXQiLCJQcm9qZWN0cyIsInByb2plY3RzIiwiaW1nU3JjIiwiZHVyYXRpb24iLCJkZXNjcmlwdGlvbiIsInN1bW1hcnkiLCJzdHJpbmdSZXBldGl0aW9ucyIsInNjcm9sbFRvUHJvamVjdCIsImluZGV4Iiwic2Nyb2xsVG8iLCJkZWxheSIsInNtb290aCIsInJlcGVhdFN0cmluZ3MiLCJzdHJpbmdzIiwidHlwZXdyaXRlciIsInN0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJQcm9taXNlIiwicmVzb2x2ZSIsInBhdXNlRm9yIiwiZGVsZXRlQWxsIiwidHlwZVN0cmluZyIsImNhbGxGdW5jdGlvbiIsInN0YXJ0IiwiaGFuZGxlU2Nyb2xsIiwic2Nyb2xsUG9zaXRpb24iLCJ3aW5kb3ciLCJzY3JvbGxZIiwidmlzaWJsZVByb2plY3RJbmRleCIsImZpbmRJbmRleCIsIl8iLCJkb2N1bWVudCIsInJlY3QiLCJnZXRFbGVtZW50QnlJZCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImlubmVySGVpZ2h0IiwiYm90dG9tIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJwcm9qZWN0IiwiaWQiLCJzdHlsZSIsInNjcm9sbFNuYXBBbGlnbiIsInAiLCJpbWciLCJzcmMiLCJhbHQiLCJvbkluaXQiLCJjaGFuZ2VEZWxheSIsInN0YXRlIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/projects.tsx\n"));

/***/ })

});