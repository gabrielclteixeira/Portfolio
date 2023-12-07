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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typewriter-effect */ \"./node_modules/typewriter-effect/dist/react.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/layout */ \"./src/app/layout.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Projects() {\n    _s();\n    const projects = [\n        {\n            imgSrc: \"/images/me.jpg\",\n            duration: \"1 month\",\n            description: \"This was perfect\",\n            summary: \"A brief summary of what was done\",\n            stringRepetitions: [\n                \"I made mistakes\",\n                \"But I learned from them\"\n            ]\n        },\n        {\n            imgSrc: \"/images/me.jpg\",\n            duration: \"1 month\",\n            description: \"This is a cool project.\",\n            summary: \"Another brief summary of what was done\",\n            stringRepetitions: [\n                \"I made mistakes\",\n                \"But I learned from them\"\n            ]\n        }\n    ];\n    const typewriterRefs = projects.map(()=>/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef());\n    // Function to scroll to a specific project\n    const scrollToProject = (index)=>{\n        react_scroll__WEBPACK_IMPORTED_MODULE_2__.scroller.scrollTo(\"project-\".concat(index), {\n            duration: 800,\n            delay: 0,\n            smooth: \"easeInOutQuart\"\n        });\n    };\n    const repeatStrings = async (project, typewriter)=>{\n        for (const string of project.stringRepetitions){\n            console.log(\"Repeating string: \", string);\n            await new Promise((resolve)=>{\n                typewriter.deleteAll().pauseFor(200).typeString('<p class=\"inline-flex \">'.concat(string, \"</p>\")).start().callFunction(()=>{\n                    resolve(null);\n                });\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const observer = new IntersectionObserver((entries)=>{\n            entries.forEach(async (entry)=>{\n                if (entry.isIntersecting) {\n                    const visibleProjectIndex = projects.findIndex((_, index)=>\"project-\".concat(index) === entry.target.id);\n                    if (visibleProjectIndex !== -1) {\n                        const typewriter = typewriterRefs[visibleProjectIndex].current;\n                        if (typewriter) {\n                            if (projects[visibleProjectIndex].stringRepetitions.length > 0) {\n                                await repeatStrings(projects[visibleProjectIndex], typewriter);\n                            }\n                            await new Promise((resolve)=>{\n                                typewriter.deleteAll().typeString('<p class=\"inline-flex \">'.concat(projects[visibleProjectIndex].description, \"</p>\")).start().callFunction(()=>{\n                                    resolve(null);\n                                });\n                            });\n                        }\n                    }\n                }\n            });\n        }, {\n            root: null,\n            rootMargin: \"0px\",\n            threshold: 0.5\n        });\n        // Observe each project\n        projects.forEach((_, index)=>{\n            const project = document.getElementById(\"project-\".concat(index));\n            if (project) {\n                observer.observe(project);\n            }\n        });\n        // Cleanup on component unmount\n        return ()=>{\n            projects.forEach((_, index)=>{\n                const project = document.getElementById(\"project-\".concat(index));\n                if (project) {\n                    observer.unobserve(project);\n                }\n            });\n        };\n    }, [\n        projects\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col overflow-x-hidden\",\n            children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"project-\".concat(index),\n                    className: \"flex h-screen\",\n                    style: {\n                        scrollSnapAlign: \"start\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-1/2 text-gray-200 bg-transparent rounded-tr-3xl flex flex-col items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"p-8 text-3xl font-mono font-black\",\n                                    children: project.duration\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 123,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: project.imgSrc,\n                                    alt: \"Project\",\n                                    className: \"opacity-25 rounded-full h-2/3\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 124,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"p-8 text-2xl font-mono font-bold\",\n                                    children: project.summary\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 125,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-1/2 bg-gray-800 p-4 flex flex-col justify-center items-center text-gray-200 font-mono font-bold text-xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((typewriter_effect__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                onInit: async (typewriter)=>{\n                                    typewriterRefs[index].current = typewriter;\n                                // typewriter\n                                //     .changeDelay(50)\n                                //     .typeString(`<p class=\"inline-flex \">${project.description}</p>`)\n                                //     .pauseFor(500)\n                                //     .start()\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                lineNumber: 130,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                            lineNumber: 127,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n            lineNumber: 112,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n        lineNumber: 111,\n        columnNumber: 5\n    }, this);\n}\n_s(Projects, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WmhELFNBQVNPLEdBQUcsQ0FBQyxDQUFDUSxTQUFTTCxzQkFDdEIsOERBQUNxQztvQkFFQ1YsSUFBSSxXQUFpQixPQUFOM0I7b0JBQ2ZzQyxXQUFVO29CQUNWQyxPQUFPO3dCQUNMQyxpQkFBaUI7b0JBQ25COztzQ0FFQSw4REFBQ0g7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRztvQ0FBRUgsV0FBVTs4Q0FBcUNqQyxRQUFRYixRQUFROzs7Ozs7OENBQ2xFLDhEQUFDa0Q7b0NBQUlDLEtBQUt0QyxRQUFRZCxNQUFNO29DQUFFcUQsS0FBSTtvQ0FBVU4sV0FBVTs7Ozs7OzhDQUNsRCw4REFBQ0c7b0NBQUVILFdBQVU7OENBQW9DakMsUUFBUVgsT0FBTzs7Ozs7Ozs7Ozs7O3NDQUVsRSw4REFBQzJDOzRCQUNDQyxXQUFVO3NDQUVWLDRFQUFDbkQsMERBQVVBO2dDQUNUMEQsUUFBUSxPQUFPdkM7b0NBQ1hWLGNBQWMsQ0FBQ0ksTUFBTSxDQUFDNEIsT0FBTyxHQUFHdEI7Z0NBQ2hDLGFBQWE7Z0NBQ2IsdUJBQXVCO2dDQUN2Qix3RUFBd0U7Z0NBQ3hFLHFCQUFxQjtnQ0FDckIsZUFBZTtnQ0FHbkI7Ozs7Ozs7Ozs7OzttQkF6QkNOOzs7Ozs7Ozs7Ozs7Ozs7QUFpQ2pCO0dBOUl3Qlg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2plY3RzLnRzeD8zOWVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtzY3JvbGxlcn0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcclxuaW1wb3J0IFR5cGV3cml0ZXIsIHsgVHlwZXdyaXRlckNsYXNzIH0gZnJvbSAndHlwZXdyaXRlci1lZmZlY3QnO1xyXG5pbXBvcnQgUm9vdExheW91dCBmcm9tICdAL2FwcC9sYXlvdXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMoKSB7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaW1nU3JjOiAnL2ltYWdlcy9tZS5qcGcnLFxyXG4gICAgICAgIGR1cmF0aW9uOiAnMSBtb250aCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGlzIHdhcyBwZXJmZWN0JyxcclxuICAgICAgICBzdW1tYXJ5OiAnQSBicmllZiBzdW1tYXJ5IG9mIHdoYXQgd2FzIGRvbmUnLFxyXG4gICAgICAgIHN0cmluZ1JlcGV0aXRpb25zOiBbXHJcbiAgICAgICAgICAgIFwiSSBtYWRlIG1pc3Rha2VzXCIsXHJcbiAgICAgICAgICAgIFwiQnV0IEkgbGVhcm5lZCBmcm9tIHRoZW1cIixcclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpbWdTcmM6ICcvaW1hZ2VzL21lLmpwZycsXHJcbiAgICAgICAgZHVyYXRpb246ICcxIG1vbnRoJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSBjb29sIHByb2plY3QuJyxcclxuICAgICAgICBzdW1tYXJ5OiAnQW5vdGhlciBicmllZiBzdW1tYXJ5IG9mIHdoYXQgd2FzIGRvbmUnLFxyXG4gICAgICAgIHN0cmluZ1JlcGV0aXRpb25zOiBbXHJcbiAgICAgICAgICAgIFwiSSBtYWRlIG1pc3Rha2VzXCIsXHJcbiAgICAgICAgICAgIFwiQnV0IEkgbGVhcm5lZCBmcm9tIHRoZW1cIixcclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgdHlwZXdyaXRlclJlZnMgPSBwcm9qZWN0cy5tYXAoKCkgPT4gUmVhY3QuY3JlYXRlUmVmPFR5cGV3cml0ZXJDbGFzcz4oKSkgYXMgUmVhY3QuUmVmT2JqZWN0PFR5cGV3cml0ZXJDbGFzcz5bXSB8IGFueTtcclxuXHJcbiAgLy8gRnVuY3Rpb24gdG8gc2Nyb2xsIHRvIGEgc3BlY2lmaWMgcHJvamVjdFxyXG4gIGNvbnN0IHNjcm9sbFRvUHJvamVjdCA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICBzY3JvbGxlci5zY3JvbGxUbyhgcHJvamVjdC0ke2luZGV4fWAsIHtcclxuICAgICAgZHVyYXRpb246IDgwMCxcclxuICAgICAgZGVsYXk6IDAsXHJcbiAgICAgIHNtb290aDogJ2Vhc2VJbk91dFF1YXJ0JyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlcGVhdFN0cmluZ3MgPSBhc3luYyAocHJvamVjdDogYW55LCB0eXBld3JpdGVyOiBUeXBld3JpdGVyQ2xhc3MpID0+IHtcclxuICAgIGZvciAoY29uc3Qgc3RyaW5nIG9mIHByb2plY3Quc3RyaW5nUmVwZXRpdGlvbnMpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1JlcGVhdGluZyBzdHJpbmc6ICcsIHN0cmluZyk7XHJcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgdHlwZXdyaXRlclxyXG4gICAgICAgICAgLmRlbGV0ZUFsbCgpXHJcbiAgICAgICAgICAucGF1c2VGb3IoMjAwKVxyXG4gICAgICAgICAgLnR5cGVTdHJpbmcoYDxwIGNsYXNzPVwiaW5saW5lLWZsZXggXCI+JHtzdHJpbmd9PC9wPmApXHJcbiAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgLmNhbGxGdW5jdGlvbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcclxuICAgICAgICAoZW50cmllcykgPT4ge1xyXG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goYXN5bmMgKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2aXNpYmxlUHJvamVjdEluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KChfLCBpbmRleCkgPT4gYHByb2plY3QtJHtpbmRleH1gID09PSBlbnRyeS50YXJnZXQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2aXNpYmxlUHJvamVjdEluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBld3JpdGVyID0gdHlwZXdyaXRlclJlZnNbdmlzaWJsZVByb2plY3RJbmRleF0uY3VycmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGV3cml0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0c1t2aXNpYmxlUHJvamVjdEluZGV4XS5zdHJpbmdSZXBldGl0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcmVwZWF0U3RyaW5ncyhwcm9qZWN0c1t2aXNpYmxlUHJvamVjdEluZGV4XSwgdHlwZXdyaXRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZXdyaXRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxldGVBbGwoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50eXBlU3RyaW5nKGA8cCBjbGFzcz1cImlubGluZS1mbGV4IFwiPiR7cHJvamVjdHNbdmlzaWJsZVByb2plY3RJbmRleF0uZGVzY3JpcHRpb259PC9wPmApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbEZ1bmN0aW9uKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvb3Q6IG51bGwsXHJcbiAgICAgICAgICAgIHJvb3RNYXJnaW46ICcwcHgnLFxyXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDAuNSxcclxuICAgICAgICB9XHJcbiAgICApO1xyXG4gIFxyXG4gICAgLy8gT2JzZXJ2ZSBlYWNoIHByb2plY3RcclxuICAgIHByb2plY3RzLmZvckVhY2goKF8sIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvamVjdC0ke2luZGV4fWApO1xyXG4gICAgICBpZiAocHJvamVjdCkge1xyXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUocHJvamVjdCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIFxyXG4gICAgLy8gQ2xlYW51cCBvbiBjb21wb25lbnQgdW5tb3VudFxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgcHJvamVjdHMuZm9yRWFjaCgoXywgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHByb2plY3QtJHtpbmRleH1gKTtcclxuICAgICAgICBpZiAocHJvamVjdCkge1xyXG4gICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKHByb2plY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIH0sIFtwcm9qZWN0c10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJvb3RMYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBvdmVyZmxvdy14LWhpZGRlblwiPlxyXG4gICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIGlkPXtgcHJvamVjdC0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaC1zY3JlZW5cIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHNjcm9sbFNuYXBBbGlnbjogJ3N0YXJ0JywgLy8gQWxpZ24gdGhlIHN0YXJ0IG9mIHRoZSBlbGVtZW50IHRvIHRoZSBzbmFwIGNvbnRhaW5lclxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIHRleHQtZ3JheS0yMDAgYmctdHJhbnNwYXJlbnQgcm91bmRlZC10ci0zeGwgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwLTggdGV4dC0zeGwgZm9udC1tb25vIGZvbnQtYmxhY2tcIj57cHJvamVjdC5kdXJhdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2plY3QuaW1nU3JjfSBhbHQ9XCJQcm9qZWN0XCIgY2xhc3NOYW1lPVwib3BhY2l0eS0yNSByb3VuZGVkLWZ1bGwgaC0yLzNcIiAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAtOCB0ZXh0LTJ4bCBmb250LW1vbm8gZm9udC1ib2xkXCI+e3Byb2plY3Quc3VtbWFyeX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xLzIgYmctZ3JheS04MDAgcC00IGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtZ3JheS0yMDAgZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LXhsXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUeXBld3JpdGVyXHJcbiAgICAgICAgICAgICAgICBvbkluaXQ9e2FzeW5jICh0eXBld3JpdGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZXdyaXRlclJlZnNbaW5kZXhdLmN1cnJlbnQgPSB0eXBld3JpdGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHR5cGV3cml0ZXJcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLmNoYW5nZURlbGF5KDUwKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAudHlwZVN0cmluZyhgPHAgY2xhc3M9XCJpbmxpbmUtZmxleCBcIj4ke3Byb2plY3QuZGVzY3JpcHRpb259PC9wPmApXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC5wYXVzZUZvcig1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC5zdGFydCgpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1Jvb3RMYXlvdXQ+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInNjcm9sbGVyIiwiVHlwZXdyaXRlciIsIlJvb3RMYXlvdXQiLCJQcm9qZWN0cyIsInByb2plY3RzIiwiaW1nU3JjIiwiZHVyYXRpb24iLCJkZXNjcmlwdGlvbiIsInN1bW1hcnkiLCJzdHJpbmdSZXBldGl0aW9ucyIsInR5cGV3cml0ZXJSZWZzIiwibWFwIiwiY3JlYXRlUmVmIiwic2Nyb2xsVG9Qcm9qZWN0IiwiaW5kZXgiLCJzY3JvbGxUbyIsImRlbGF5Iiwic21vb3RoIiwicmVwZWF0U3RyaW5ncyIsInByb2plY3QiLCJ0eXBld3JpdGVyIiwic3RyaW5nIiwiY29uc29sZSIsImxvZyIsIlByb21pc2UiLCJyZXNvbHZlIiwiZGVsZXRlQWxsIiwicGF1c2VGb3IiLCJ0eXBlU3RyaW5nIiwic3RhcnQiLCJjYWxsRnVuY3Rpb24iLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwidmlzaWJsZVByb2plY3RJbmRleCIsImZpbmRJbmRleCIsIl8iLCJ0YXJnZXQiLCJpZCIsImN1cnJlbnQiLCJsZW5ndGgiLCJyb290Iiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvYnNlcnZlIiwidW5vYnNlcnZlIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJzY3JvbGxTbmFwQWxpZ24iLCJwIiwiaW1nIiwic3JjIiwiYWx0Iiwib25Jbml0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/projects.tsx\n"));

/***/ })

});