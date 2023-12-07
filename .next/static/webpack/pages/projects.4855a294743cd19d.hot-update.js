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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typewriter-effect */ \"./node_modules/typewriter-effect/dist/react.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/layout */ \"./src/app/layout.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Projects() {\n    _s();\n    const projects = [\n        {\n            imgSrc: \"/images/me.jpg\",\n            duration: \"1 month\",\n            description: \"This was perfect\",\n            summary: \"A brief summary of what was done\",\n            stringRepetitions: [\n                \"I made mistakes\",\n                \"But I learned from them\"\n            ],\n            viewed: false\n        },\n        {\n            imgSrc: \"/images/me.jpg\",\n            duration: \"1 month\",\n            description: \"This is a cool project.\",\n            summary: \"Another brief summary of what was done\",\n            stringRepetitions: [],\n            viewed: false\n        }\n    ];\n    const typewriterRefs = projects.map(()=>/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef());\n    // Function to scroll to a specific project\n    const scrollToProject = (index)=>{\n        react_scroll__WEBPACK_IMPORTED_MODULE_2__.scroller.scrollTo(\"project-\".concat(index), {\n            duration: 800,\n            delay: 0,\n            smooth: \"easeInOutQuart\"\n        });\n    };\n    const repeatStrings = async (project, typewriter)=>{\n        for (const string of project.stringRepetitions){\n            console.log(\"Repeating string: \", string);\n            await new Promise((resolve)=>{\n                typewriter.deleteAll().pauseFor(200).typeString('<p class=\"inline-flex \">'.concat(string, \"</p>\")).start().callFunction(()=>{\n                    resolve(null);\n                });\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const observer = new IntersectionObserver((entries)=>{\n            entries.forEach(async (entry)=>{\n                if (entry.isIntersecting) {\n                    const visibleProjectIndex = projects.findIndex((_, index)=>\"project-\".concat(index) === entry.target.id);\n                    if (visibleProjectIndex !== -1) {\n                        const typewriter = typewriterRefs[visibleProjectIndex].current;\n                        if (typewriter) {\n                            if (projects[visibleProjectIndex].stringRepetitions.length > 0) {\n                                await repeatStrings(projects[visibleProjectIndex], typewriter);\n                            }\n                            await new Promise((resolve)=>{\n                                typewriter.deleteAll().typeString('<p class=\"inline-flex \">'.concat(projects[visibleProjectIndex].description, \"</p>\")).start().callFunction((state)=>{\n                                    state.elements.cursor.style.display = \"none\";\n                                    projects[visibleProjectIndex].viewed = true;\n                                    resolve(null);\n                                });\n                            });\n                        }\n                    }\n                }\n            });\n        }, {\n            root: null,\n            rootMargin: \"0px\",\n            threshold: 0.5\n        });\n        // Observe each project\n        projects.forEach((_, index)=>{\n            const project = document.getElementById(\"project-\".concat(index));\n            if (project) {\n                observer.observe(project);\n            }\n        });\n        // Cleanup on component unmount\n        return ()=>{\n            projects.forEach((_, index)=>{\n                const project = document.getElementById(\"project-\".concat(index));\n                if (project) {\n                    observer.unobserve(project);\n                }\n            });\n        };\n    }, [\n        projects\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col overflow-x-hidden\",\n            children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"project-\".concat(index),\n                    className: \"flex h-screen\",\n                    style: {\n                        scrollSnapAlign: \"start\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-1/2 text-gray-200 bg-transparent rounded-tr-3xl flex flex-col items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"p-8 text-3xl font-mono font-black\",\n                                    children: project.duration\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 127,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: project.imgSrc,\n                                    alt: \"Project\",\n                                    className: \"opacity-25 rounded-full h-2/3\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 128,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"p-8 text-2xl font-mono font-bold\",\n                                    children: project.summary\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 129,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                            lineNumber: 126,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-1/2 bg-gray-800 p-4 flex flex-col justify-center items-center text-gray-200 font-mono font-bold text-xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((typewriter_effect__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                onInit: async (typewriter)=>{\n                                    typewriterRefs[index].current = typewriter;\n                                    typewriter.changeDelay(100);\n                                //     .typeString(`<p class=\"inline-flex \">${project.description}</p>`)\n                                //     .pauseFor(500)\n                                //     .start()\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                lineNumber: 134,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                            lineNumber: 131,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                    lineNumber: 118,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n            lineNumber: 116,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n        lineNumber: 115,\n        columnNumber: 5\n    }, this);\n}\n_s(Projects, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUztvQkFDWFksU0FBU3dCLFNBQVMsQ0FBQ3BDO2dCQUNyQjtZQUNGO1FBQ0Y7SUFDRixHQUFHO1FBQUNoQjtLQUFTO0lBRWIscUJBQ0UsOERBQUNGLG1EQUFVQTtrQkFDVCw0RUFBQ3VEO1lBQUlDLFdBQVU7c0JBQ1p0RCxTQUFTUSxHQUFHLENBQUMsQ0FBQ1EsU0FBU0wsc0JBQ3RCLDhEQUFDMEM7b0JBRUNmLElBQUksV0FBaUIsT0FBTjNCO29CQUNmMkMsV0FBVTtvQkFDVlYsT0FBTzt3QkFDTFcsaUJBQWlCO29CQUNuQjs7c0NBRUEsOERBQUNGOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0U7b0NBQUVGLFdBQVU7OENBQXFDdEMsUUFBUWQsUUFBUTs7Ozs7OzhDQUNsRSw4REFBQ3VEO29DQUFJQyxLQUFLMUMsUUFBUWYsTUFBTTtvQ0FBRTBELEtBQUk7b0NBQVVMLFdBQVU7Ozs7Ozs4Q0FDbEQsOERBQUNFO29DQUFFRixXQUFVOzhDQUFvQ3RDLFFBQVFaLE9BQU87Ozs7Ozs7Ozs7OztzQ0FFbEUsOERBQUNpRDs0QkFDQ0MsV0FBVTtzQ0FFViw0RUFBQ3pELDBEQUFVQTtnQ0FDVCtELFFBQVEsT0FBTzNDO29DQUNYVixjQUFjLENBQUNJLE1BQU0sQ0FBQzRCLE9BQU8sR0FBR3RCO29DQUNoQ0EsV0FDSzRDLFdBQVcsQ0FBQztnQ0FDakIsd0VBQXdFO2dDQUN4RSxxQkFBcUI7Z0NBQ3JCLGVBQWU7Z0NBR25COzs7Ozs7Ozs7Ozs7bUJBekJDbEQ7Ozs7Ozs7Ozs7Ozs7OztBQWlDakI7R0FsSndCWjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvamVjdHMudHN4PzM5ZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3Njcm9sbGVyfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xyXG5pbXBvcnQgVHlwZXdyaXRlciwgeyBUeXBld3JpdGVyQ2xhc3MsIFR5cGV3cml0ZXJTdGF0ZSB9IGZyb20gJ3R5cGV3cml0ZXItZWZmZWN0JztcclxuaW1wb3J0IFJvb3RMYXlvdXQgZnJvbSAnQC9hcHAvbGF5b3V0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKCkge1xyXG4gIGNvbnN0IHByb2plY3RzID0gW1xyXG4gICAge1xyXG4gICAgICAgIGltZ1NyYzogJy9pbWFnZXMvbWUuanBnJyxcclxuICAgICAgICBkdXJhdGlvbjogJzEgbW9udGgnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyB3YXMgcGVyZmVjdCcsXHJcbiAgICAgICAgc3VtbWFyeTogJ0EgYnJpZWYgc3VtbWFyeSBvZiB3aGF0IHdhcyBkb25lJyxcclxuICAgICAgICBzdHJpbmdSZXBldGl0aW9uczogW1xyXG4gICAgICAgICAgICBcIkkgbWFkZSBtaXN0YWtlc1wiLFxyXG4gICAgICAgICAgICBcIkJ1dCBJIGxlYXJuZWQgZnJvbSB0aGVtXCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgICB2aWV3ZWQ6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaW1nU3JjOiAnL2ltYWdlcy9tZS5qcGcnLFxyXG4gICAgICAgIGR1cmF0aW9uOiAnMSBtb250aCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIGEgY29vbCBwcm9qZWN0LicsXHJcbiAgICAgICAgc3VtbWFyeTogJ0Fub3RoZXIgYnJpZWYgc3VtbWFyeSBvZiB3aGF0IHdhcyBkb25lJyxcclxuICAgICAgICBzdHJpbmdSZXBldGl0aW9uczogW1xyXG4gICAgICAgICAgICAvLyBcIkkgbWFkZSBtaXN0YWtlc1wiLFxyXG4gICAgICAgICAgICAvLyBcIkJ1dCBJIGxlYXJuZWQgZnJvbSB0aGVtXCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgICB2aWV3ZWQ6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHR5cGV3cml0ZXJSZWZzID0gcHJvamVjdHMubWFwKCgpID0+IFJlYWN0LmNyZWF0ZVJlZjxUeXBld3JpdGVyQ2xhc3M+KCkpIGFzIFJlYWN0LlJlZk9iamVjdDxUeXBld3JpdGVyQ2xhc3M+W10gfCBhbnk7XHJcblxyXG4gIC8vIEZ1bmN0aW9uIHRvIHNjcm9sbCB0byBhIHNwZWNpZmljIHByb2plY3RcclxuICBjb25zdCBzY3JvbGxUb1Byb2plY3QgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgc2Nyb2xsZXIuc2Nyb2xsVG8oYHByb2plY3QtJHtpbmRleH1gLCB7XHJcbiAgICAgIGR1cmF0aW9uOiA4MDAsXHJcbiAgICAgIGRlbGF5OiAwLFxyXG4gICAgICBzbW9vdGg6ICdlYXNlSW5PdXRRdWFydCcsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZXBlYXRTdHJpbmdzID0gYXN5bmMgKHByb2plY3Q6IGFueSwgdHlwZXdyaXRlcjogVHlwZXdyaXRlckNsYXNzKSA9PiB7XHJcbiAgICBmb3IgKGNvbnN0IHN0cmluZyBvZiBwcm9qZWN0LnN0cmluZ1JlcGV0aXRpb25zKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdSZXBlYXRpbmcgc3RyaW5nOiAnLCBzdHJpbmcpO1xyXG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIHR5cGV3cml0ZXJcclxuICAgICAgICAgIC5kZWxldGVBbGwoKVxyXG4gICAgICAgICAgLnBhdXNlRm9yKDIwMClcclxuICAgICAgICAgIC50eXBlU3RyaW5nKGA8cCBjbGFzcz1cImlubGluZS1mbGV4IFwiPiR7c3RyaW5nfTwvcD5gKVxyXG4gICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgIC5jYWxsRnVuY3Rpb24oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXHJcbiAgICAgICAgKGVudHJpZXMpID0+IHtcclxuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGFzeW5jIChlbnRyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmlzaWJsZVByb2plY3RJbmRleCA9IHByb2plY3RzLmZpbmRJbmRleCgoXywgaW5kZXgpID0+IGBwcm9qZWN0LSR7aW5kZXh9YCA9PT0gZW50cnkudGFyZ2V0LmlkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmlzaWJsZVByb2plY3RJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZXdyaXRlciA9IHR5cGV3cml0ZXJSZWZzW3Zpc2libGVQcm9qZWN0SW5kZXhdLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBld3JpdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdHNbdmlzaWJsZVByb2plY3RJbmRleF0uc3RyaW5nUmVwZXRpdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHJlcGVhdFN0cmluZ3MocHJvamVjdHNbdmlzaWJsZVByb2plY3RJbmRleF0sIHR5cGV3cml0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGV3cml0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGVsZXRlQWxsKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHlwZVN0cmluZyhgPHAgY2xhc3M9XCJpbmxpbmUtZmxleCBcIj4ke3Byb2plY3RzW3Zpc2libGVQcm9qZWN0SW5kZXhdLmRlc2NyaXB0aW9ufTwvcD5gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGxGdW5jdGlvbigoc3RhdGU6IFR5cGV3cml0ZXJTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5lbGVtZW50cy5jdXJzb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNbdmlzaWJsZVByb2plY3RJbmRleF0udmlld2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvb3Q6IG51bGwsXHJcbiAgICAgICAgICAgIHJvb3RNYXJnaW46ICcwcHgnLFxyXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDAuNSxcclxuICAgICAgICB9XHJcbiAgICApO1xyXG4gIFxyXG4gICAgLy8gT2JzZXJ2ZSBlYWNoIHByb2plY3RcclxuICAgIHByb2plY3RzLmZvckVhY2goKF8sIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvamVjdC0ke2luZGV4fWApO1xyXG4gICAgICBpZiAocHJvamVjdCkge1xyXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUocHJvamVjdCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIFxyXG4gICAgLy8gQ2xlYW51cCBvbiBjb21wb25lbnQgdW5tb3VudFxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgcHJvamVjdHMuZm9yRWFjaCgoXywgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHByb2plY3QtJHtpbmRleH1gKTtcclxuICAgICAgICBpZiAocHJvamVjdCkge1xyXG4gICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKHByb2plY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIH0sIFtwcm9qZWN0c10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJvb3RMYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBvdmVyZmxvdy14LWhpZGRlblwiPlxyXG4gICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIGlkPXtgcHJvamVjdC0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaC1zY3JlZW5cIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHNjcm9sbFNuYXBBbGlnbjogJ3N0YXJ0JywgLy8gQWxpZ24gdGhlIHN0YXJ0IG9mIHRoZSBlbGVtZW50IHRvIHRoZSBzbmFwIGNvbnRhaW5lclxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIHRleHQtZ3JheS0yMDAgYmctdHJhbnNwYXJlbnQgcm91bmRlZC10ci0zeGwgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwLTggdGV4dC0zeGwgZm9udC1tb25vIGZvbnQtYmxhY2tcIj57cHJvamVjdC5kdXJhdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2plY3QuaW1nU3JjfSBhbHQ9XCJQcm9qZWN0XCIgY2xhc3NOYW1lPVwib3BhY2l0eS0yNSByb3VuZGVkLWZ1bGwgaC0yLzNcIiAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAtOCB0ZXh0LTJ4bCBmb250LW1vbm8gZm9udC1ib2xkXCI+e3Byb2plY3Quc3VtbWFyeX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xLzIgYmctZ3JheS04MDAgcC00IGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtZ3JheS0yMDAgZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LXhsXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUeXBld3JpdGVyXHJcbiAgICAgICAgICAgICAgICBvbkluaXQ9e2FzeW5jICh0eXBld3JpdGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZXdyaXRlclJlZnNbaW5kZXhdLmN1cnJlbnQgPSB0eXBld3JpdGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGV3cml0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNoYW5nZURlbGF5KDEwMClcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLnR5cGVTdHJpbmcoYDxwIGNsYXNzPVwiaW5saW5lLWZsZXggXCI+JHtwcm9qZWN0LmRlc2NyaXB0aW9ufTwvcD5gKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAucGF1c2VGb3IoNTAwKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAuc3RhcnQoKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Sb290TGF5b3V0PlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJzY3JvbGxlciIsIlR5cGV3cml0ZXIiLCJSb290TGF5b3V0IiwiUHJvamVjdHMiLCJwcm9qZWN0cyIsImltZ1NyYyIsImR1cmF0aW9uIiwiZGVzY3JpcHRpb24iLCJzdW1tYXJ5Iiwic3RyaW5nUmVwZXRpdGlvbnMiLCJ2aWV3ZWQiLCJ0eXBld3JpdGVyUmVmcyIsIm1hcCIsImNyZWF0ZVJlZiIsInNjcm9sbFRvUHJvamVjdCIsImluZGV4Iiwic2Nyb2xsVG8iLCJkZWxheSIsInNtb290aCIsInJlcGVhdFN0cmluZ3MiLCJwcm9qZWN0IiwidHlwZXdyaXRlciIsInN0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJQcm9taXNlIiwicmVzb2x2ZSIsImRlbGV0ZUFsbCIsInBhdXNlRm9yIiwidHlwZVN0cmluZyIsInN0YXJ0IiwiY2FsbEZ1bmN0aW9uIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInZpc2libGVQcm9qZWN0SW5kZXgiLCJmaW5kSW5kZXgiLCJfIiwidGFyZ2V0IiwiaWQiLCJjdXJyZW50IiwibGVuZ3RoIiwic3RhdGUiLCJlbGVtZW50cyIsImN1cnNvciIsInN0eWxlIiwiZGlzcGxheSIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9ic2VydmUiLCJ1bm9ic2VydmUiLCJkaXYiLCJjbGFzc05hbWUiLCJzY3JvbGxTbmFwQWxpZ24iLCJwIiwiaW1nIiwic3JjIiwiYWx0Iiwib25Jbml0IiwiY2hhbmdlRGVsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/projects.tsx\n"));

/***/ })

});