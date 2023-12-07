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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typewriter-effect */ \"./node_modules/typewriter-effect/dist/react.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/layout */ \"./src/app/layout.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Projects() {\n    _s();\n    const projects = [\n        {\n            imgSrc: \"/images/me.jpg\",\n            duration: \"1 month\",\n            description: \"This was perfect\",\n            summary: \"A brief summary of what was done\",\n            stringRepetitions: [\n                \"I made mistakes\",\n                \"But I learned from them\"\n            ]\n        },\n        {\n            imgSrc: \"/images/me.jpg\",\n            duration: \"1 month\",\n            description: \"This is a cool project.\",\n            summary: \"Another brief summary of what was done\",\n            stringRepetitions: [\n                \"I made mistakes\",\n                \"But I learned from them\"\n            ]\n        }\n    ];\n    const typewriterRefs = projects.map(()=>/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef());\n    // Function to scroll to a specific project\n    const scrollToProject = (index)=>{\n        react_scroll__WEBPACK_IMPORTED_MODULE_2__.scroller.scrollTo(\"project-\".concat(index), {\n            duration: 800,\n            delay: 0,\n            smooth: \"easeInOutQuart\"\n        });\n    };\n    const repeatStrings = async (strings, typewriter)=>{\n        for (const string of strings){\n            console.log(\"Repeating string: \", string);\n            await new Promise((resolve)=>{\n                typewriter.deleteAll().pauseFor(200).typeString('<p class=\"inline-flex \">'.concat(string, \"</p>\")).start().callFunction(()=>{\n                    resolve(null);\n                });\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const observer = new IntersectionObserver((entries)=>{\n            entries.forEach((entry)=>{\n                if (entry.isIntersecting) {\n                    const visibleProjectIndex = projects.findIndex((_, index)=>\"project-\".concat(index) === entry.target.id);\n                    if (visibleProjectIndex !== -1) {\n                        const typewriter = typewriterRefs[visibleProjectIndex].current;\n                        if (typewriter) {\n                            typewriter.deleteAll().typeString('<p class=\"inline-flex \">'.concat(projects[visibleProjectIndex].description, \"</p>\")).start();\n                        }\n                    }\n                }\n            });\n        }, {\n            root: null,\n            rootMargin: \"0px\",\n            threshold: 0.5\n        });\n        // Observe each project\n        projects.forEach((_, index)=>{\n            const project = document.getElementById(\"project-\".concat(index));\n            if (project) {\n                observer.observe(project);\n            }\n        });\n        // Cleanup on component unmount\n        return ()=>{\n            projects.forEach((_, index)=>{\n                const project = document.getElementById(\"project-\".concat(index));\n                if (project) {\n                    observer.unobserve(project);\n                }\n            });\n        };\n    }, [\n        projects\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col overflow-x-hidden\",\n            children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"project-\".concat(index),\n                    className: \"flex h-screen\",\n                    style: {\n                        scrollSnapAlign: \"start\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-1/2 text-gray-200 bg-transparent rounded-tr-3xl flex flex-col items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"p-8 text-3xl font-mono font-black\",\n                                    children: project.duration\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: project.imgSrc,\n                                    alt: \"Project\",\n                                    className: \"opacity-25 rounded-full h-2/3\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"p-8 text-2xl font-mono font-bold\",\n                                    children: project.summary\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 116,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-1/2 bg-gray-800 p-4 flex flex-col justify-center items-center text-gray-200 font-mono font-bold text-xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((typewriter_effect__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                onInit: async (typewriter)=>{\n                                    typewriterRefs[index].current = typewriter;\n                                    typewriter.changeDelay(50).typeString('<p class=\"inline-flex \">'.concat(project.description, \"</p>\")).pauseFor(500).start();\n                                    if (project.stringRepetitions.length > 0) {\n                                        await repeatStrings(project.stringRepetitions, typewriter);\n                                    }\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                lineNumber: 121,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                    lineNumber: 105,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n            lineNumber: 103,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, this);\n}\n_s(Projects, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bEUsOERBQUNrRDtvQ0FBSUMsS0FBS1gsUUFBUXpDLE1BQU07b0NBQUVxRCxLQUFJO29DQUFVTixXQUFVOzs7Ozs7OENBQ2xELDhEQUFDRztvQ0FBRUgsV0FBVTs4Q0FBb0NOLFFBQVF0QyxPQUFPOzs7Ozs7Ozs7Ozs7c0NBRWxFLDhEQUFDMkM7NEJBQ0NDLFdBQVU7c0NBRVYsNEVBQUNuRCwwREFBVUE7Z0NBQ1QwRCxRQUFRLE9BQU92QztvQ0FDWFYsY0FBYyxDQUFDSSxNQUFNLENBQUM0QixPQUFPLEdBQUd0QjtvQ0FDaENBLFdBQ0t3QyxXQUFXLENBQUMsSUFDWmhDLFVBQVUsQ0FBQywyQkFBK0MsT0FBcEJrQixRQUFRdkMsV0FBVyxFQUFDLFNBQzFEb0IsUUFBUSxDQUFDLEtBQ1RFLEtBQUs7b0NBRVYsSUFBSWlCLFFBQVFyQyxpQkFBaUIsQ0FBQ29ELE1BQU0sR0FBRyxHQUFHO3dDQUN0QyxNQUFNM0MsY0FBYzRCLFFBQVFyQyxpQkFBaUIsRUFBRVc7b0NBQ25EO2dDQUNKOzs7Ozs7Ozs7Ozs7bUJBM0JDTjs7Ozs7Ozs7Ozs7Ozs7O0FBbUNqQjtHQXZJd0JYO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9qZWN0cy50c3g/MzllYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7c2Nyb2xsZXJ9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XHJcbmltcG9ydCBUeXBld3JpdGVyLCB7IFR5cGV3cml0ZXJDbGFzcyB9IGZyb20gJ3R5cGV3cml0ZXItZWZmZWN0JztcclxuaW1wb3J0IFJvb3RMYXlvdXQgZnJvbSAnQC9hcHAvbGF5b3V0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKCkge1xyXG4gIGNvbnN0IHByb2plY3RzID0gW1xyXG4gICAge1xyXG4gICAgICAgIGltZ1NyYzogJy9pbWFnZXMvbWUuanBnJyxcclxuICAgICAgICBkdXJhdGlvbjogJzEgbW9udGgnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyB3YXMgcGVyZmVjdCcsXHJcbiAgICAgICAgc3VtbWFyeTogJ0EgYnJpZWYgc3VtbWFyeSBvZiB3aGF0IHdhcyBkb25lJyxcclxuICAgICAgICBzdHJpbmdSZXBldGl0aW9uczogW1xyXG4gICAgICAgICAgICBcIkkgbWFkZSBtaXN0YWtlc1wiLFxyXG4gICAgICAgICAgICBcIkJ1dCBJIGxlYXJuZWQgZnJvbSB0aGVtXCIsXHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaW1nU3JjOiAnL2ltYWdlcy9tZS5qcGcnLFxyXG4gICAgICAgIGR1cmF0aW9uOiAnMSBtb250aCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIGEgY29vbCBwcm9qZWN0LicsXHJcbiAgICAgICAgc3VtbWFyeTogJ0Fub3RoZXIgYnJpZWYgc3VtbWFyeSBvZiB3aGF0IHdhcyBkb25lJyxcclxuICAgICAgICBzdHJpbmdSZXBldGl0aW9uczogW1xyXG4gICAgICAgICAgICBcIkkgbWFkZSBtaXN0YWtlc1wiLFxyXG4gICAgICAgICAgICBcIkJ1dCBJIGxlYXJuZWQgZnJvbSB0aGVtXCIsXHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHR5cGV3cml0ZXJSZWZzID0gcHJvamVjdHMubWFwKCgpID0+IFJlYWN0LmNyZWF0ZVJlZjxUeXBld3JpdGVyQ2xhc3M+KCkpIGFzIFJlYWN0LlJlZk9iamVjdDxUeXBld3JpdGVyQ2xhc3M+W10gfCBhbnk7XHJcblxyXG4gIC8vIEZ1bmN0aW9uIHRvIHNjcm9sbCB0byBhIHNwZWNpZmljIHByb2plY3RcclxuICBjb25zdCBzY3JvbGxUb1Byb2plY3QgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgc2Nyb2xsZXIuc2Nyb2xsVG8oYHByb2plY3QtJHtpbmRleH1gLCB7XHJcbiAgICAgIGR1cmF0aW9uOiA4MDAsXHJcbiAgICAgIGRlbGF5OiAwLFxyXG4gICAgICBzbW9vdGg6ICdlYXNlSW5PdXRRdWFydCcsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZXBlYXRTdHJpbmdzID0gYXN5bmMgKHN0cmluZ3M6IHN0cmluZ1tdLCB0eXBld3JpdGVyOiBUeXBld3JpdGVyQ2xhc3MpID0+IHtcclxuICAgIGZvciAoY29uc3Qgc3RyaW5nIG9mIHN0cmluZ3MpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1JlcGVhdGluZyBzdHJpbmc6ICcsIHN0cmluZyk7XHJcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgdHlwZXdyaXRlclxyXG4gICAgICAgICAgLmRlbGV0ZUFsbCgpXHJcbiAgICAgICAgICAucGF1c2VGb3IoMjAwKVxyXG4gICAgICAgICAgLnR5cGVTdHJpbmcoYDxwIGNsYXNzPVwiaW5saW5lLWZsZXggXCI+JHtzdHJpbmd9PC9wPmApXHJcbiAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgLmNhbGxGdW5jdGlvbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcclxuICAgICAgICAoZW50cmllcykgPT4ge1xyXG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmlzaWJsZVByb2plY3RJbmRleCA9IHByb2plY3RzLmZpbmRJbmRleCgoXywgaW5kZXgpID0+IGBwcm9qZWN0LSR7aW5kZXh9YCA9PT0gZW50cnkudGFyZ2V0LmlkKTtcclxuICAgICAgICAgICAgICAgIGlmICh2aXNpYmxlUHJvamVjdEluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZXdyaXRlciA9IHR5cGV3cml0ZXJSZWZzW3Zpc2libGVQcm9qZWN0SW5kZXhdLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZXdyaXRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGV3cml0ZXJcclxuICAgICAgICAgICAgICAgICAgICAuZGVsZXRlQWxsKClcclxuICAgICAgICAgICAgICAgICAgICAudHlwZVN0cmluZyhgPHAgY2xhc3M9XCJpbmxpbmUtZmxleCBcIj4ke3Byb2plY3RzW3Zpc2libGVQcm9qZWN0SW5kZXhdLmRlc2NyaXB0aW9ufTwvcD5gKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByb290OiBudWxsLFxyXG4gICAgICAgICAgICByb290TWFyZ2luOiAnMHB4JyxcclxuICAgICAgICAgICAgdGhyZXNob2xkOiAwLjUsXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuICBcclxuICAgIC8vIE9ic2VydmUgZWFjaCBwcm9qZWN0XHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChfLCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHByb2plY3QtJHtpbmRleH1gKTtcclxuICAgICAgaWYgKHByb2plY3QpIHtcclxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHByb2plY3QpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICBcclxuICAgIC8vIENsZWFudXAgb24gY29tcG9uZW50IHVubW91bnRcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHByb2plY3RzLmZvckVhY2goKF8sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcm9qZWN0LSR7aW5kZXh9YCk7XHJcbiAgICAgICAgaWYgKHByb2plY3QpIHtcclxuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShwcm9qZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICB9LCBbcHJvamVjdHNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSb290TGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgb3ZlcmZsb3cteC1oaWRkZW5cIj5cclxuICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBpZD17YHByb2plY3QtJHtpbmRleH1gfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGgtc2NyZWVuXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBzY3JvbGxTbmFwQWxpZ246ICdzdGFydCcsIC8vIEFsaWduIHRoZSBzdGFydCBvZiB0aGUgZWxlbWVudCB0byB0aGUgc25hcCBjb250YWluZXJcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiB0ZXh0LWdyYXktMjAwIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtdHItM3hsIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicC04IHRleHQtM3hsIGZvbnQtbW9ubyBmb250LWJsYWNrXCI+e3Byb2plY3QuZHVyYXRpb259PC9wPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9qZWN0LmltZ1NyY30gYWx0PVwiUHJvamVjdFwiIGNsYXNzTmFtZT1cIm9wYWNpdHktMjUgcm91bmRlZC1mdWxsIGgtMi8zXCIgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwLTggdGV4dC0yeGwgZm9udC1tb25vIGZvbnQtYm9sZFwiPntwcm9qZWN0LnN1bW1hcnl9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMS8yIGJnLWdyYXktODAwIHAtNCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktMjAwIGZvbnQtbW9ubyBmb250LWJvbGQgdGV4dC14bFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8VHlwZXdyaXRlclxyXG4gICAgICAgICAgICAgICAgb25Jbml0PXthc3luYyAodHlwZXdyaXRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGV3cml0ZXJSZWZzW2luZGV4XS5jdXJyZW50ID0gdHlwZXdyaXRlcjtcclxuICAgICAgICAgICAgICAgICAgICB0eXBld3JpdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jaGFuZ2VEZWxheSg1MClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnR5cGVTdHJpbmcoYDxwIGNsYXNzPVwiaW5saW5lLWZsZXggXCI+JHtwcm9qZWN0LmRlc2NyaXB0aW9ufTwvcD5gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucGF1c2VGb3IoNTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdC5zdHJpbmdSZXBldGl0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHJlcGVhdFN0cmluZ3MocHJvamVjdC5zdHJpbmdSZXBldGl0aW9ucywgdHlwZXdyaXRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUm9vdExheW91dD5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0Iiwic2Nyb2xsZXIiLCJUeXBld3JpdGVyIiwiUm9vdExheW91dCIsIlByb2plY3RzIiwicHJvamVjdHMiLCJpbWdTcmMiLCJkdXJhdGlvbiIsImRlc2NyaXB0aW9uIiwic3VtbWFyeSIsInN0cmluZ1JlcGV0aXRpb25zIiwidHlwZXdyaXRlclJlZnMiLCJtYXAiLCJjcmVhdGVSZWYiLCJzY3JvbGxUb1Byb2plY3QiLCJpbmRleCIsInNjcm9sbFRvIiwiZGVsYXkiLCJzbW9vdGgiLCJyZXBlYXRTdHJpbmdzIiwic3RyaW5ncyIsInR5cGV3cml0ZXIiLCJzdHJpbmciLCJjb25zb2xlIiwibG9nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJkZWxldGVBbGwiLCJwYXVzZUZvciIsInR5cGVTdHJpbmciLCJzdGFydCIsImNhbGxGdW5jdGlvbiIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJ2aXNpYmxlUHJvamVjdEluZGV4IiwiZmluZEluZGV4IiwiXyIsInRhcmdldCIsImlkIiwiY3VycmVudCIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwicHJvamVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvYnNlcnZlIiwidW5vYnNlcnZlIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJzY3JvbGxTbmFwQWxpZ24iLCJwIiwiaW1nIiwic3JjIiwiYWx0Iiwib25Jbml0IiwiY2hhbmdlRGVsYXkiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/projects.tsx\n"));

/***/ })

});