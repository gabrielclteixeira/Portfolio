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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typewriter-effect */ \"./node_modules/typewriter-effect/dist/react.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/layout */ \"./src/app/layout.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Projects() {\n    _s();\n    const projects = [\n        {\n            imgSrc: \"/images/me.jpg\",\n            duration: \"1 month\",\n            description: \"This was perfect\",\n            summary: \"A brief summary of what was done\",\n            stringRepetitions: [\n                \"I made mistakes\",\n                \"But I learned from them\"\n            ],\n            viewed: false\n        },\n        {\n            imgSrc: \"/images/me.jpg\",\n            duration: \"1 month\",\n            description: \"This is a cool project.\",\n            summary: \"Another brief summary of what was done\",\n            stringRepetitions: [],\n            viewed: false\n        }\n    ];\n    const typewriterRefs = projects.map(()=>/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef());\n    // Function to scroll to a specific project\n    const scrollToProject = (index)=>{\n        react_scroll__WEBPACK_IMPORTED_MODULE_2__.scroller.scrollTo(\"project-\".concat(index), {\n            duration: 800,\n            delay: 0,\n            smooth: \"easeInOutQuart\"\n        });\n    };\n    const repeatStrings = async (project, typewriter)=>{\n        for (const string of project.stringRepetitions){\n            console.log(\"Repeating string: \", string);\n            await new Promise((resolve)=>{\n                typewriter.pauseFor(1000).deleteAll().typeString('<p class=\"inline-flex \">'.concat(string, \"</p>\")).start().callFunction(()=>{\n                    resolve(null);\n                });\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const observer = new IntersectionObserver((entries)=>{\n            entries.forEach(async (entry)=>{\n                if (entry.isIntersecting) {\n                    const visibleProjectIndex = projects.findIndex((_, index)=>\"project-\".concat(index) === entry.target.id);\n                    if (visibleProjectIndex !== -1) {\n                        scrollToProject(visibleProjectIndex);\n                        if (!projects[visibleProjectIndex].viewed) {\n                            projects[visibleProjectIndex].viewed = true;\n                            const typewriter = typewriterRefs[visibleProjectIndex].current;\n                            if (typewriter) {\n                                if (projects[visibleProjectIndex].stringRepetitions.length > 0) {\n                                    await repeatStrings(projects[visibleProjectIndex], typewriter);\n                                }\n                                await new Promise((resolve)=>{\n                                    typewriter.pauseFor(1000).deleteAll().typeString('<p class=\"inline-flex \">'.concat(projects[visibleProjectIndex].description, \"</p>\")).start().callFunction((state)=>{\n                                        state.elements.cursor.style.display = \"none\";\n                                        resolve(null);\n                                    });\n                                });\n                            }\n                        }\n                    }\n                }\n            });\n        }, {\n            root: null,\n            rootMargin: \"0px\",\n            threshold: 0.5\n        });\n        // Observe each project\n        projects.forEach((_, index)=>{\n            const project = document.getElementById(\"project-\".concat(index));\n            if (project) {\n                observer.observe(project);\n            }\n        });\n        // Cleanup on component unmount\n        return ()=>{\n            projects.forEach((_, index)=>{\n                const project = document.getElementById(\"project-\".concat(index));\n                if (project) {\n                    observer.unobserve(project);\n                }\n            });\n        };\n    }, [\n        projects\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col scroll-smooth\",\n            children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"project-\".concat(index),\n                    className: \"flex h-screen focus-visible: outline-none \",\n                    style: {\n                        scrollSnapAlign: \"start\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-1/2 text-gray-200 linear rounded-tr-3xl flex flex-col justify-center relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"p-8 text-3xl font-mono font-black absolute top-16\",\n                                    children: project.duration\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 132,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: project.imgSrc,\n                                    alt: \"Project\",\n                                    className: \"absolute top-0 left-0 bottom-0 right-0 opacity-25 object-cover h-full w-3/4 rounded-full rounded-tl-none rounded-bl-none\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 133,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"p-8 text-2xl font-mono font-bold\",\n                                    children: project.summary\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 138,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                            lineNumber: 131,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-1/2 p-4 flex flex-col justify-center items-center text-gray-100 font-mono font-bold text-xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((typewriter_effect__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                onInit: async (typewriter)=>{\n                                    typewriterRefs[index].current = typewriter;\n                                    typewriter.changeDelay(50);\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                lineNumber: 143,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                            lineNumber: 140,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                    lineNumber: 123,\n                    columnNumber: 17\n                }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n            lineNumber: 121,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n        lineNumber: 120,\n        columnNumber: 5\n    }, this);\n}\n_s(Projects, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTK0IsT0FBTyxDQUFDLENBQUNLLEdBQUd6QjtnQkFDbkIsTUFBTUssVUFBVWlDLFNBQVNDLGNBQWMsQ0FBQyxXQUFpQixPQUFOdkM7Z0JBQ25ELElBQUlLLFNBQVM7b0JBQ1hZLFNBQVN3QixTQUFTLENBQUNwQztnQkFDckI7WUFDRjtRQUNGO0lBQ0YsR0FBRztRQUFDaEI7S0FBUztJQUViLHFCQUNFLDhEQUFDRixtREFBVUE7a0JBQ1QsNEVBQUN1RDtZQUFJQyxXQUFVO3NCQUNSdEQsU0FBU1EsR0FBRyxDQUFDLENBQUNRLFNBQVNMLHNCQUNwQiw4REFBQzBDO29CQUVHZixJQUFJLFdBQWlCLE9BQU4zQjtvQkFDZjJDLFdBQVU7b0JBQ1ZWLE9BQU87d0JBQ1BXLGlCQUFpQjtvQkFDakI7O3NDQUVBLDhEQUFDRjs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNFO29DQUFFRixXQUFVOzhDQUFxRHRDLFFBQVFkLFFBQVE7Ozs7Ozs4Q0FDbEYsOERBQUN1RDtvQ0FDR0MsS0FBSzFDLFFBQVFmLE1BQU07b0NBQ25CMEQsS0FBSTtvQ0FDSkwsV0FBVTs7Ozs7OzhDQUVkLDhEQUFDRTtvQ0FBRUYsV0FBVTs4Q0FBb0N0QyxRQUFRWixPQUFPOzs7Ozs7Ozs7Ozs7c0NBRXBFLDhEQUFDaUQ7NEJBQ0dDLFdBQVk7c0NBRVosNEVBQUN6RCwwREFBVUE7Z0NBQ1ArRCxRQUFRLE9BQU8zQztvQ0FDWFYsY0FBYyxDQUFDSSxNQUFNLENBQUM0QixPQUFPLEdBQUd0QjtvQ0FDaENBLFdBQ0s0QyxXQUFXLENBQUM7Z0NBQ3JCOzs7Ozs7Ozs7Ozs7bUJBeEJIbEQ7Ozs7Ozs7Ozs7Ozs7OztBQWdDekI7R0F0SndCWjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvamVjdHMudHN4PzM5ZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7c2Nyb2xsZXJ9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XHJcbmltcG9ydCBUeXBld3JpdGVyLCB7IFR5cGV3cml0ZXJDbGFzcywgVHlwZXdyaXRlclN0YXRlIH0gZnJvbSAndHlwZXdyaXRlci1lZmZlY3QnO1xyXG5pbXBvcnQgUm9vdExheW91dCBmcm9tICdAL2FwcC9sYXlvdXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMoKSB7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaW1nU3JjOiAnL2ltYWdlcy9tZS5qcGcnLFxyXG4gICAgICAgIGR1cmF0aW9uOiAnMSBtb250aCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGlzIHdhcyBwZXJmZWN0JyxcclxuICAgICAgICBzdW1tYXJ5OiAnQSBicmllZiBzdW1tYXJ5IG9mIHdoYXQgd2FzIGRvbmUnLFxyXG4gICAgICAgIHN0cmluZ1JlcGV0aXRpb25zOiBbXHJcbiAgICAgICAgICAgIFwiSSBtYWRlIG1pc3Rha2VzXCIsXHJcbiAgICAgICAgICAgIFwiQnV0IEkgbGVhcm5lZCBmcm9tIHRoZW1cIixcclxuICAgICAgICBdLFxyXG4gICAgICAgIHZpZXdlZDogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpbWdTcmM6ICcvaW1hZ2VzL21lLmpwZycsXHJcbiAgICAgICAgZHVyYXRpb246ICcxIG1vbnRoJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSBjb29sIHByb2plY3QuJyxcclxuICAgICAgICBzdW1tYXJ5OiAnQW5vdGhlciBicmllZiBzdW1tYXJ5IG9mIHdoYXQgd2FzIGRvbmUnLFxyXG4gICAgICAgIHN0cmluZ1JlcGV0aXRpb25zOiBbXHJcbiAgICAgICAgICAgIC8vIFwiSSBtYWRlIG1pc3Rha2VzXCIsXHJcbiAgICAgICAgICAgIC8vIFwiQnV0IEkgbGVhcm5lZCBmcm9tIHRoZW1cIixcclxuICAgICAgICBdLFxyXG4gICAgICAgIHZpZXdlZDogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgXHJcblxyXG4gIGNvbnN0IHR5cGV3cml0ZXJSZWZzID0gcHJvamVjdHMubWFwKCgpID0+IFJlYWN0LmNyZWF0ZVJlZjxUeXBld3JpdGVyQ2xhc3M+KCkpIGFzIFJlYWN0LlJlZk9iamVjdDxUeXBld3JpdGVyQ2xhc3M+W10gfCBhbnk7XHJcblxyXG4gIC8vIEZ1bmN0aW9uIHRvIHNjcm9sbCB0byBhIHNwZWNpZmljIHByb2plY3RcclxuICBjb25zdCBzY3JvbGxUb1Byb2plY3QgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgc2Nyb2xsZXIuc2Nyb2xsVG8oYHByb2plY3QtJHtpbmRleH1gLCB7XHJcbiAgICAgIGR1cmF0aW9uOiA4MDAsXHJcbiAgICAgIGRlbGF5OiAwLFxyXG4gICAgICBzbW9vdGg6ICdlYXNlSW5PdXRRdWFydCcsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAgIGNvbnN0IHJlcGVhdFN0cmluZ3MgPSBhc3luYyAocHJvamVjdDogYW55LCB0eXBld3JpdGVyOiBUeXBld3JpdGVyQ2xhc3MpID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IHN0cmluZyBvZiBwcm9qZWN0LnN0cmluZ1JlcGV0aXRpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXBlYXRpbmcgc3RyaW5nOiAnLCBzdHJpbmcpO1xyXG4gICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHlwZXdyaXRlclxyXG4gICAgICAgICAgICAgICAgLnBhdXNlRm9yKDEwMDApXHJcbiAgICAgICAgICAgICAgICAuZGVsZXRlQWxsKClcclxuICAgICAgICAgICAgICAgIC50eXBlU3RyaW5nKGA8cCBjbGFzcz1cImlubGluZS1mbGV4IFwiPiR7c3RyaW5nfTwvcD5gKVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIC5jYWxsRnVuY3Rpb24oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcclxuICAgICAgICAoZW50cmllcykgPT4ge1xyXG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goYXN5bmMgKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2aXNpYmxlUHJvamVjdEluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KChfLCBpbmRleCkgPT4gYHByb2plY3QtJHtpbmRleH1gID09PSBlbnRyeS50YXJnZXQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2aXNpYmxlUHJvamVjdEluZGV4ICE9PSAtMSkgeyAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb1Byb2plY3QodmlzaWJsZVByb2plY3RJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcHJvamVjdHNbdmlzaWJsZVByb2plY3RJbmRleF0udmlld2VkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzW3Zpc2libGVQcm9qZWN0SW5kZXhdLnZpZXdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBld3JpdGVyID0gdHlwZXdyaXRlclJlZnNbdmlzaWJsZVByb2plY3RJbmRleF0uY3VycmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBld3JpdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2plY3RzW3Zpc2libGVQcm9qZWN0SW5kZXhdLnN0cmluZ1JlcGV0aXRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcmVwZWF0U3RyaW5ncyhwcm9qZWN0c1t2aXNpYmxlUHJvamVjdEluZGV4XSwgdHlwZXdyaXRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGV3cml0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wYXVzZUZvcigxMDAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRlbGV0ZUFsbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHlwZVN0cmluZyhgPHAgY2xhc3M9XCJpbmxpbmUtZmxleCBcIj4ke3Byb2plY3RzW3Zpc2libGVQcm9qZWN0SW5kZXhdLmRlc2NyaXB0aW9ufTwvcD5gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsRnVuY3Rpb24oKHN0YXRlOiBUeXBld3JpdGVyU3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5lbGVtZW50cy5jdXJzb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvb3Q6IG51bGwsXHJcbiAgICAgICAgICAgIHJvb3RNYXJnaW46ICcwcHgnLFxyXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDAuNSxcclxuICAgICAgICB9XHJcbiAgICApO1xyXG4gIFxyXG4gICAgLy8gT2JzZXJ2ZSBlYWNoIHByb2plY3RcclxuICAgIHByb2plY3RzLmZvckVhY2goKF8sIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvamVjdC0ke2luZGV4fWApO1xyXG4gICAgICBpZiAocHJvamVjdCkge1xyXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUocHJvamVjdCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIFxyXG4gICAgLy8gQ2xlYW51cCBvbiBjb21wb25lbnQgdW5tb3VudFxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgcHJvamVjdHMuZm9yRWFjaCgoXywgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHByb2plY3QtJHtpbmRleH1gKTtcclxuICAgICAgICBpZiAocHJvamVjdCkge1xyXG4gICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKHByb2plY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIH0sIFtwcm9qZWN0c10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJvb3RMYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzY3JvbGwtc21vb3RoXCI+XHJcbiAgICAgICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICBpZD17YHByb2plY3QtJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaC1zY3JlZW4gZm9jdXMtdmlzaWJsZTogb3V0bGluZS1ub25lIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxTbmFwQWxpZ246ICdzdGFydCcsIC8vIEFsaWduIHRoZSBzdGFydCBvZiB0aGUgZWxlbWVudCB0byB0aGUgc25hcCBjb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzIgdGV4dC1ncmF5LTIwMCBsaW5lYXIgcm91bmRlZC10ci0zeGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwLTggdGV4dC0zeGwgZm9udC1tb25vIGZvbnQtYmxhY2sgYWJzb2x1dGUgdG9wLTE2XCI+e3Byb2plY3QuZHVyYXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2plY3QuaW1nU3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiUHJvamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgYm90dG9tLTAgcmlnaHQtMCBvcGFjaXR5LTI1IG9iamVjdC1jb3ZlciBoLWZ1bGwgdy0zLzQgcm91bmRlZC1mdWxsIHJvdW5kZWQtdGwtbm9uZSByb3VuZGVkLWJsLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwLTggdGV4dC0yeGwgZm9udC1tb25vIGZvbnQtYm9sZFwiPntwcm9qZWN0LnN1bW1hcnl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy0xLzIgcC00IGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtZ3JheS0xMDAgZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LXhsYH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBld3JpdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkluaXQ9e2FzeW5jICh0eXBld3JpdGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZXdyaXRlclJlZnNbaW5kZXhdLmN1cnJlbnQgPSB0eXBld3JpdGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGV3cml0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNoYW5nZURlbGF5KDUwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1Jvb3RMYXlvdXQ+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInNjcm9sbGVyIiwiVHlwZXdyaXRlciIsIlJvb3RMYXlvdXQiLCJQcm9qZWN0cyIsInByb2plY3RzIiwiaW1nU3JjIiwiZHVyYXRpb24iLCJkZXNjcmlwdGlvbiIsInN1bW1hcnkiLCJzdHJpbmdSZXBldGl0aW9ucyIsInZpZXdlZCIsInR5cGV3cml0ZXJSZWZzIiwibWFwIiwiY3JlYXRlUmVmIiwic2Nyb2xsVG9Qcm9qZWN0IiwiaW5kZXgiLCJzY3JvbGxUbyIsImRlbGF5Iiwic21vb3RoIiwicmVwZWF0U3RyaW5ncyIsInByb2plY3QiLCJ0eXBld3JpdGVyIiwic3RyaW5nIiwiY29uc29sZSIsImxvZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicGF1c2VGb3IiLCJkZWxldGVBbGwiLCJ0eXBlU3RyaW5nIiwic3RhcnQiLCJjYWxsRnVuY3Rpb24iLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwidmlzaWJsZVByb2plY3RJbmRleCIsImZpbmRJbmRleCIsIl8iLCJ0YXJnZXQiLCJpZCIsImN1cnJlbnQiLCJsZW5ndGgiLCJzdGF0ZSIsImVsZW1lbnRzIiwiY3Vyc29yIiwic3R5bGUiLCJkaXNwbGF5Iiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib2JzZXJ2ZSIsInVub2JzZXJ2ZSIsImRpdiIsImNsYXNzTmFtZSIsInNjcm9sbFNuYXBBbGlnbiIsInAiLCJpbWciLCJzcmMiLCJhbHQiLCJvbkluaXQiLCJjaGFuZ2VEZWxheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/projects.tsx\n"));

/***/ })

});