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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typewriter-effect */ \"./node_modules/typewriter-effect/dist/react.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/layout */ \"./src/app/layout.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Projects() {\n    _s();\n    const projects = [\n        {\n            imgSrc: \"/images/me.jpg\",\n            duration: \"1 month\",\n            description: \"This was perfect\",\n            summary: \"A brief summary of what was done\",\n            stringRepetitions: [\n                \"I made mistakes\",\n                \"But I learned from them\"\n            ],\n            viewed: false\n        },\n        {\n            imgSrc: \"/images/me.jpg\",\n            duration: \"1 month\",\n            description: \"This is a cool project.\",\n            summary: \"Another brief summary of what was done\",\n            stringRepetitions: [],\n            viewed: false\n        }\n    ];\n    const typewriterRefs = projects.map(()=>/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef());\n    // Function to scroll to a specific project\n    const scrollToProject = (index)=>{\n        react_scroll__WEBPACK_IMPORTED_MODULE_2__.scroller.scrollTo(\"project-\".concat(index), {\n            duration: 800,\n            delay: 0,\n            smooth: \"easeInOutQuart\"\n        });\n    };\n    const repeatStrings = async (project, typewriter)=>{\n        for (const string of project.stringRepetitions){\n            console.log(\"Repeating string: \", string);\n            await new Promise((resolve)=>{\n                typewriter.pauseFor(1000).deleteAll().typeString('<p class=\"inline-flex \">'.concat(string, \"</p>\")).start().callFunction(()=>{\n                    resolve(null);\n                });\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const observer = new IntersectionObserver((entries)=>{\n            entries.forEach(async (entry)=>{\n                if (entry.isIntersecting) {\n                    const visibleProjectIndex = projects.findIndex((_, index)=>\"project-\".concat(index) === entry.target.id);\n                    if (visibleProjectIndex !== -1) {\n                        scrollToProject(visibleProjectIndex);\n                        if (!projects[visibleProjectIndex].viewed) {\n                            projects[visibleProjectIndex].viewed = true;\n                            const typewriter = typewriterRefs[visibleProjectIndex].current;\n                            if (typewriter) {\n                                if (projects[visibleProjectIndex].stringRepetitions.length > 0) {\n                                    await repeatStrings(projects[visibleProjectIndex], typewriter);\n                                }\n                                await new Promise((resolve)=>{\n                                    typewriter.pauseFor(1000).deleteAll().typeString('<p class=\"inline-flex \">'.concat(projects[visibleProjectIndex].description, \"</p>\")).start().callFunction((state)=>{\n                                        state.elements.cursor.style.display = \"none\";\n                                        resolve(null);\n                                    });\n                                });\n                            }\n                        }\n                    }\n                }\n            });\n        }, {\n            root: null,\n            rootMargin: \"0px\",\n            threshold: 0.5\n        });\n        // Observe each project\n        projects.forEach((_, index)=>{\n            const project = document.getElementById(\"project-\".concat(index));\n            if (project) {\n                observer.observe(project);\n            }\n        });\n        // Cleanup on component unmount\n        return ()=>{\n            projects.forEach((_, index)=>{\n                const project = document.getElementById(\"project-\".concat(index));\n                if (project) {\n                    observer.unobserve(project);\n                }\n            });\n        };\n    }, [\n        projects\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col scroll-smooth\",\n            children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"project-\".concat(index),\n                    className: \"flex flex-col md:flex-row h-screen from-transparent to-gray-700 opacity-80 animate-gradient-expand\",\n                    style: {\n                        scrollSnapAlign: \"start\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full md:h-1/2 md:rounded-none text-gray-200 linear rounded-tr-3xl flex flex-col justify-center relative z-10\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"p-8 text-3xl font-mono font-black absolute top-16 w-3/4\",\n                                    children: project.duration\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 132,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: project.imgSrc,\n                                    alt: \"Project\",\n                                    className: \"absolute top-0 left-0 bottom-0 right-0 opacity-25 object-cover h-full w-3/4 rounded-full rounded-tl-none rounded-bl-none\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 133,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"p-8 text-2xl font-mono font-bold w-3/4\",\n                                    children: project.summary\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 138,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"absolute p-8 text-2xl font-mono font-bold bottom-0 w-3/4\",\n                                    children: \"Get JSON\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 139,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                            lineNumber: 131,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full md:w-1/2 p-4 flex flex-col justify-center items-center text-gray-100 font-mono font-bold text-xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((typewriter_effect__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                onInit: async (typewriter)=>{\n                                    typewriterRefs[index].current = typewriter;\n                                    typewriter.changeDelay(50);\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                lineNumber: 144,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                            lineNumber: 141,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                    lineNumber: 123,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n            lineNumber: 121,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n        lineNumber: 120,\n        columnNumber: 5\n    }, this);\n}\n_s(Projects, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTK0IsT0FBTyxDQUFDLENBQUNLLEdBQUd6QjtnQkFDbkIsTUFBTUssVUFBVWlDLFNBQVNDLGNBQWMsQ0FBQyxXQUFpQixPQUFOdkM7Z0JBQ25ELElBQUlLLFNBQVM7b0JBQ1hZLFNBQVN3QixTQUFTLENBQUNwQztnQkFDckI7WUFDRjtRQUNGO0lBQ0YsR0FBRztRQUFDaEI7S0FBUztJQUViLHFCQUNFLDhEQUFDRixtREFBVUE7a0JBQ1QsNEVBQUN1RDtZQUFJQyxXQUFVO3NCQUNadEQsU0FBU1EsR0FBRyxDQUFDLENBQUNRLFNBQVNMLHNCQUN0Qiw4REFBQzBDO29CQUVDZixJQUFJLFdBQWlCLE9BQU4zQjtvQkFDZjJDLFdBQVU7b0JBQ1ZWLE9BQU87d0JBQ0xXLGlCQUFpQjtvQkFDbkI7O3NDQUVBLDhEQUFDRjs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNFO29DQUFFRixXQUFVOzhDQUEyRHRDLFFBQVFkLFFBQVE7Ozs7Ozs4Q0FDeEYsOERBQUN1RDtvQ0FDQ0MsS0FBSzFDLFFBQVFmLE1BQU07b0NBQ25CMEQsS0FBSTtvQ0FDSkwsV0FBVTs7Ozs7OzhDQUVaLDhEQUFDRTtvQ0FBRUYsV0FBVTs4Q0FBMEN0QyxRQUFRWixPQUFPOzs7Ozs7OENBQ3RFLDhEQUFDb0Q7b0NBQUVGLFdBQVU7OENBQTJEOzs7Ozs7Ozs7Ozs7c0NBRTFFLDhEQUFDRDs0QkFDQ0MsV0FBWTtzQ0FFWiw0RUFBQ3pELDBEQUFVQTtnQ0FDVCtELFFBQVEsT0FBTzNDO29DQUNiVixjQUFjLENBQUNJLE1BQU0sQ0FBQzRCLE9BQU8sR0FBR3RCO29DQUNoQ0EsV0FDRzRDLFdBQVcsQ0FBQztnQ0FDakI7Ozs7Ozs7Ozs7OzttQkF6QkNsRDs7Ozs7Ozs7Ozs7Ozs7O0FBaUNqQjtHQXZKd0JaO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9qZWN0cy50c3g/MzllYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtzY3JvbGxlcn0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcclxuaW1wb3J0IFR5cGV3cml0ZXIsIHsgVHlwZXdyaXRlckNsYXNzLCBUeXBld3JpdGVyU3RhdGUgfSBmcm9tICd0eXBld3JpdGVyLWVmZmVjdCc7XHJcbmltcG9ydCBSb290TGF5b3V0IGZyb20gJ0AvYXBwL2xheW91dCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0cygpIHtcclxuICBjb25zdCBwcm9qZWN0cyA9IFtcclxuICAgIHtcclxuICAgICAgICBpbWdTcmM6ICcvaW1hZ2VzL21lLmpwZycsXHJcbiAgICAgICAgZHVyYXRpb246ICcxIG1vbnRoJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgd2FzIHBlcmZlY3QnLFxyXG4gICAgICAgIHN1bW1hcnk6ICdBIGJyaWVmIHN1bW1hcnkgb2Ygd2hhdCB3YXMgZG9uZScsXHJcbiAgICAgICAgc3RyaW5nUmVwZXRpdGlvbnM6IFtcclxuICAgICAgICAgICAgXCJJIG1hZGUgbWlzdGFrZXNcIixcclxuICAgICAgICAgICAgXCJCdXQgSSBsZWFybmVkIGZyb20gdGhlbVwiLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdmlld2VkOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGltZ1NyYzogJy9pbWFnZXMvbWUuanBnJyxcclxuICAgICAgICBkdXJhdGlvbjogJzEgbW9udGgnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBhIGNvb2wgcHJvamVjdC4nLFxyXG4gICAgICAgIHN1bW1hcnk6ICdBbm90aGVyIGJyaWVmIHN1bW1hcnkgb2Ygd2hhdCB3YXMgZG9uZScsXHJcbiAgICAgICAgc3RyaW5nUmVwZXRpdGlvbnM6IFtcclxuICAgICAgICAgICAgLy8gXCJJIG1hZGUgbWlzdGFrZXNcIixcclxuICAgICAgICAgICAgLy8gXCJCdXQgSSBsZWFybmVkIGZyb20gdGhlbVwiLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdmlld2VkOiBmYWxzZSxcclxuICAgICAgfSxcclxuICBdO1xyXG5cclxuICBcclxuXHJcbiAgY29uc3QgdHlwZXdyaXRlclJlZnMgPSBwcm9qZWN0cy5tYXAoKCkgPT4gUmVhY3QuY3JlYXRlUmVmPFR5cGV3cml0ZXJDbGFzcz4oKSkgYXMgUmVhY3QuUmVmT2JqZWN0PFR5cGV3cml0ZXJDbGFzcz5bXSB8IGFueTtcclxuXHJcbiAgLy8gRnVuY3Rpb24gdG8gc2Nyb2xsIHRvIGEgc3BlY2lmaWMgcHJvamVjdFxyXG4gIGNvbnN0IHNjcm9sbFRvUHJvamVjdCA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICBzY3JvbGxlci5zY3JvbGxUbyhgcHJvamVjdC0ke2luZGV4fWAsIHtcclxuICAgICAgZHVyYXRpb246IDgwMCxcclxuICAgICAgZGVsYXk6IDAsXHJcbiAgICAgIHNtb290aDogJ2Vhc2VJbk91dFF1YXJ0JyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gICAgY29uc3QgcmVwZWF0U3RyaW5ncyA9IGFzeW5jIChwcm9qZWN0OiBhbnksIHR5cGV3cml0ZXI6IFR5cGV3cml0ZXJDbGFzcykgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3Qgc3RyaW5nIG9mIHByb2plY3Quc3RyaW5nUmVwZXRpdGlvbnMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlcGVhdGluZyBzdHJpbmc6ICcsIHN0cmluZyk7XHJcbiAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0eXBld3JpdGVyXHJcbiAgICAgICAgICAgICAgICAucGF1c2VGb3IoMTAwMClcclxuICAgICAgICAgICAgICAgIC5kZWxldGVBbGwoKVxyXG4gICAgICAgICAgICAgICAgLnR5cGVTdHJpbmcoYDxwIGNsYXNzPVwiaW5saW5lLWZsZXggXCI+JHtzdHJpbmd9PC9wPmApXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgLmNhbGxGdW5jdGlvbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxyXG4gICAgICAgIChlbnRyaWVzKSA9PiB7XHJcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChhc3luYyAoZW50cnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpc2libGVQcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoKF8sIGluZGV4KSA9PiBgcHJvamVjdC0ke2luZGV4fWAgPT09IGVudHJ5LnRhcmdldC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZpc2libGVQcm9qZWN0SW5kZXggIT09IC0xKSB7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvUHJvamVjdCh2aXNpYmxlUHJvamVjdEluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwcm9qZWN0c1t2aXNpYmxlUHJvamVjdEluZGV4XS52aWV3ZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNbdmlzaWJsZVByb2plY3RJbmRleF0udmlld2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGV3cml0ZXIgPSB0eXBld3JpdGVyUmVmc1t2aXNpYmxlUHJvamVjdEluZGV4XS5jdXJyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGV3cml0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdHNbdmlzaWJsZVByb2plY3RJbmRleF0uc3RyaW5nUmVwZXRpdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCByZXBlYXRTdHJpbmdzKHByb2plY3RzW3Zpc2libGVQcm9qZWN0SW5kZXhdLCB0eXBld3JpdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZXdyaXRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBhdXNlRm9yKDEwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGVsZXRlQWxsKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50eXBlU3RyaW5nKGA8cCBjbGFzcz1cImlubGluZS1mbGV4IFwiPiR7cHJvamVjdHNbdmlzaWJsZVByb2plY3RJbmRleF0uZGVzY3JpcHRpb259PC9wPmApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGxGdW5jdGlvbigoc3RhdGU6IFR5cGV3cml0ZXJTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmVsZW1lbnRzLmN1cnNvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcm9vdDogbnVsbCxcclxuICAgICAgICAgICAgcm9vdE1hcmdpbjogJzBweCcsXHJcbiAgICAgICAgICAgIHRocmVzaG9sZDogMC41LFxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgXHJcbiAgICAvLyBPYnNlcnZlIGVhY2ggcHJvamVjdFxyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgoXywgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcm9qZWN0LSR7aW5kZXh9YCk7XHJcbiAgICAgIGlmIChwcm9qZWN0KSB7XHJcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShwcm9qZWN0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgXHJcbiAgICAvLyBDbGVhbnVwIG9uIGNvbXBvbmVudCB1bm1vdW50XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBwcm9qZWN0cy5mb3JFYWNoKChfLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvamVjdC0ke2luZGV4fWApO1xyXG4gICAgICAgIGlmIChwcm9qZWN0KSB7XHJcbiAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUocHJvamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgfSwgW3Byb2plY3RzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Um9vdExheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNjcm9sbC1zbW9vdGhcIj5cclxuICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBpZD17YHByb2plY3QtJHtpbmRleH1gfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGgtc2NyZWVuIGZyb20tdHJhbnNwYXJlbnQgdG8tZ3JheS03MDAgb3BhY2l0eS04MCBhbmltYXRlLWdyYWRpZW50LWV4cGFuZFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgc2Nyb2xsU25hcEFsaWduOiAnc3RhcnQnLCAvLyBBbGlnbiB0aGUgc3RhcnQgb2YgdGhlIGVsZW1lbnQgdG8gdGhlIHNuYXAgY29udGFpbmVyXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOmgtMS8yIG1kOnJvdW5kZWQtbm9uZSB0ZXh0LWdyYXktMjAwIGxpbmVhciByb3VuZGVkLXRyLTN4bCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHJlbGF0aXZlIHotMTBcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwLTggdGV4dC0zeGwgZm9udC1tb25vIGZvbnQtYmxhY2sgYWJzb2x1dGUgdG9wLTE2IHctMy80XCI+e3Byb2plY3QuZHVyYXRpb259PC9wPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17cHJvamVjdC5pbWdTcmN9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJQcm9qZWN0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCBib3R0b20tMCByaWdodC0wIG9wYWNpdHktMjUgb2JqZWN0LWNvdmVyIGgtZnVsbCB3LTMvNCByb3VuZGVkLWZ1bGwgcm91bmRlZC10bC1ub25lIHJvdW5kZWQtYmwtbm9uZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwLTggdGV4dC0yeGwgZm9udC1tb25vIGZvbnQtYm9sZCB3LTMvNFwiPntwcm9qZWN0LnN1bW1hcnl9PC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFic29sdXRlIHAtOCB0ZXh0LTJ4bCBmb250LW1vbm8gZm9udC1ib2xkIGJvdHRvbS0wIHctMy80XCI+R2V0IEpTT048L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIG1kOnctMS8yIHAtNCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktMTAwIGZvbnQtbW9ubyBmb250LWJvbGQgdGV4dC14bGB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8VHlwZXdyaXRlclxyXG4gICAgICAgICAgICAgICAgb25Jbml0PXthc3luYyAodHlwZXdyaXRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0eXBld3JpdGVyUmVmc1tpbmRleF0uY3VycmVudCA9IHR5cGV3cml0ZXI7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGV3cml0ZXJcclxuICAgICAgICAgICAgICAgICAgICAuY2hhbmdlRGVsYXkoNTApXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Sb290TGF5b3V0PlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJzY3JvbGxlciIsIlR5cGV3cml0ZXIiLCJSb290TGF5b3V0IiwiUHJvamVjdHMiLCJwcm9qZWN0cyIsImltZ1NyYyIsImR1cmF0aW9uIiwiZGVzY3JpcHRpb24iLCJzdW1tYXJ5Iiwic3RyaW5nUmVwZXRpdGlvbnMiLCJ2aWV3ZWQiLCJ0eXBld3JpdGVyUmVmcyIsIm1hcCIsImNyZWF0ZVJlZiIsInNjcm9sbFRvUHJvamVjdCIsImluZGV4Iiwic2Nyb2xsVG8iLCJkZWxheSIsInNtb290aCIsInJlcGVhdFN0cmluZ3MiLCJwcm9qZWN0IiwidHlwZXdyaXRlciIsInN0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJQcm9taXNlIiwicmVzb2x2ZSIsInBhdXNlRm9yIiwiZGVsZXRlQWxsIiwidHlwZVN0cmluZyIsInN0YXJ0IiwiY2FsbEZ1bmN0aW9uIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInZpc2libGVQcm9qZWN0SW5kZXgiLCJmaW5kSW5kZXgiLCJfIiwidGFyZ2V0IiwiaWQiLCJjdXJyZW50IiwibGVuZ3RoIiwic3RhdGUiLCJlbGVtZW50cyIsImN1cnNvciIsInN0eWxlIiwiZGlzcGxheSIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9ic2VydmUiLCJ1bm9ic2VydmUiLCJkaXYiLCJjbGFzc05hbWUiLCJzY3JvbGxTbmFwQWxpZ24iLCJwIiwiaW1nIiwic3JjIiwiYWx0Iiwib25Jbml0IiwiY2hhbmdlRGVsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/projects.tsx\n"));

/***/ })

});