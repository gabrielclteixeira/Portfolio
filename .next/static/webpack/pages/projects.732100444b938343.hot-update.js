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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typewriter-effect */ \"./node_modules/typewriter-effect/dist/react.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/layout */ \"./src/app/layout.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Projects() {\n    _s();\n    const projects = [\n        {\n            imgSrc: \"/images/me.jpg\",\n            duration: \"Tech stack\",\n            description: \"My portfolio.\",\n            summary: \"\",\n            stringRepetitions: [\n                \"My experience\",\n                \"My journey\"\n            ],\n            viewed: false,\n            techStack: [\n                \"TypeScript/JavaScript\",\n                \"Node.js\",\n                \"React (Next.js)\",\n                \"PHP\",\n                \"Symfony\",\n                \"MySQL\",\n                \"C#\",\n                \"Blazor\"\n            ]\n        },\n        {\n            imgSrc: \"/images/me.jpg\",\n            duration: \"1 month\",\n            description: \"This is a cool project.\",\n            summary: \"Another brief summary of what was done\",\n            stringRepetitions: [],\n            viewed: false,\n            techStack: [\n                \"TypeScript/JavaScript\",\n                \"Node.js\"\n            ]\n        }\n    ];\n    const typewriterRefs = projects.map(()=>/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef());\n    // Function to scroll to a specific project\n    const scrollToProject = (index)=>{\n        react_scroll__WEBPACK_IMPORTED_MODULE_2__.scroller.scrollTo(\"project-\".concat(index), {\n            duration: 800,\n            delay: 0,\n            smooth: \"easeInOutQuart\"\n        });\n    };\n    const repeatStrings = async (project, typewriter)=>{\n        for (const string of project.stringRepetitions){\n            console.log(\"Repeating string: \", string);\n            await new Promise((resolve)=>{\n                typewriter.pauseFor(1000).deleteAll().typeString('<p class=\"inline-flex \">'.concat(string, \"</p>\")).start().callFunction(()=>{\n                    resolve(null);\n                });\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const observer = new IntersectionObserver((entries)=>{\n            entries.forEach(async (entry)=>{\n                if (entry.isIntersecting) {\n                    const visibleProjectIndex = projects.findIndex((_, index)=>\"project-\".concat(index) === entry.target.id);\n                    if (visibleProjectIndex !== -1) {\n                        scrollToProject(visibleProjectIndex);\n                        if (!projects[visibleProjectIndex].viewed) {\n                            projects[visibleProjectIndex].viewed = true;\n                            const typewriter = typewriterRefs[visibleProjectIndex].current;\n                            if (typewriter) {\n                                if (projects[visibleProjectIndex].stringRepetitions.length > 0) {\n                                    await repeatStrings(projects[visibleProjectIndex], typewriter);\n                                }\n                                await new Promise((resolve)=>{\n                                    typewriter.pauseFor(1000).deleteAll().typeString('<p class=\"inline-flex \">'.concat(projects[visibleProjectIndex].description, \"</p>\")).start().callFunction((state)=>{\n                                        state.elements.cursor.style.display = \"none\";\n                                        resolve(null);\n                                    });\n                                });\n                            }\n                        }\n                    }\n                }\n            });\n        }, {\n            root: null,\n            rootMargin: \"0px\",\n            threshold: 0.5\n        });\n        // Observe each project\n        projects.forEach((_, index)=>{\n            const project = document.getElementById(\"project-\".concat(index));\n            if (project) {\n                observer.observe(project);\n            }\n        });\n        // Cleanup on component unmount\n        return ()=>{\n            projects.forEach((_, index)=>{\n                const project = document.getElementById(\"project-\".concat(index));\n                if (project) {\n                    observer.unobserve(project);\n                }\n            });\n        };\n    }, [\n        projects\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col scroll-smooth\",\n            children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"project-\".concat(index),\n                    className: \"flex flex-col md:flex-row h-screen from-transparent to-gray-700 opacity-80 animate-gradient-expand pt-16 pb-16 first-of-type:mt-16 last-of-type:pb-0\",\n                    style: {\n                        scrollSnapAlign: \"start\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full lg:h-full sm:h-1/2 text-gray-200 linear rounded-tr-3xl flex flex-col justify-center relative z-10\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"m-1 px-2 py-1 bg-orange-300 text-white rounded-md p-8 text-3xl font-mono font-black w-11/12 lg:justify-center lg:align-middle lg:w-1/4\",\n                                    children: project.duration\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 146,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: project.imgSrc,\n                                    alt: \"Project\",\n                                    className: \"absolute top-0 left-0 bottom-0 right-0 opacity-25 object-cover lg:h-full w-full lg:rounded-full lg:rounded-tl-none lg:rounded-bl-none md:rounded-none lg:w-3/4 sm:rounded-none \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 149,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-8 flex flex-wrap w-3/4\",\n                                    children: project.techStack.map((tech, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"m-1 px-2 py-1 bg-blue-500 text-white rounded-md text-sm\",\n                                            children: tech\n                                        }, i, false, {\n                                            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                            lineNumber: 156,\n                                            columnNumber: 17\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 154,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"p-8 text-2xl font-mono font-bold w-3/4\",\n                                    children: project.summary\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 161,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                            lineNumber: 145,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full h-full md:w-1/2 lg:h-full p-4 flex flex-col justify-center items-center text-gray-100 font-mono font-bold text-xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((typewriter_effect__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                onInit: async (typewriter)=>{\n                                    typewriterRefs[index].current = typewriter;\n                                    typewriter.changeDelay(50);\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                lineNumber: 166,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                            lineNumber: 163,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                    lineNumber: 137,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n            lineNumber: 135,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n        lineNumber: 134,\n        columnNumber: 5\n    }, this);\n}\n_s(Projects, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7O21CQWpDQ3JEOzs7Ozs7Ozs7Ozs7Ozs7QUF5Q2pCO0dBN0t3QmI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2plY3RzLnRzeD8zOWVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3Njcm9sbGVyfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xyXG5pbXBvcnQgVHlwZXdyaXRlciwgeyBUeXBld3JpdGVyQ2xhc3MsIFR5cGV3cml0ZXJTdGF0ZSB9IGZyb20gJ3R5cGV3cml0ZXItZWZmZWN0JztcclxuaW1wb3J0IFJvb3RMYXlvdXQgZnJvbSAnQC9hcHAvbGF5b3V0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKCkge1xyXG4gIGNvbnN0IHByb2plY3RzID0gW1xyXG4gICAge1xyXG4gICAgICAgIGltZ1NyYzogJy9pbWFnZXMvbWUuanBnJyxcclxuICAgICAgICBkdXJhdGlvbjogJ1RlY2ggc3RhY2snLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTXkgcG9ydGZvbGlvLicsXHJcbiAgICAgICAgc3VtbWFyeTogJycsXHJcbiAgICAgICAgc3RyaW5nUmVwZXRpdGlvbnM6IFtcclxuICAgICAgICAgICAgXCJNeSBleHBlcmllbmNlXCIsXHJcbiAgICAgICAgICAgIFwiTXkgam91cm5leVwiLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdmlld2VkOiBmYWxzZSxcclxuICAgICAgICB0ZWNoU3RhY2s6IFtcclxuICAgICAgICAgICAgXCJUeXBlU2NyaXB0L0phdmFTY3JpcHRcIixcclxuICAgICAgICAgICAgXCJOb2RlLmpzXCIsXHJcbiAgICAgICAgICAgIFwiUmVhY3QgKE5leHQuanMpXCIsXHJcbiAgICAgICAgICAgIFwiUEhQXCIsXHJcbiAgICAgICAgICAgIFwiU3ltZm9ueVwiLFxyXG4gICAgICAgICAgICBcIk15U1FMXCIsXHJcbiAgICAgICAgICAgIFwiQyNcIixcclxuICAgICAgICAgICAgXCJCbGF6b3JcIlxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGltZ1NyYzogJy9pbWFnZXMvbWUuanBnJyxcclxuICAgICAgICBkdXJhdGlvbjogJzEgbW9udGgnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBhIGNvb2wgcHJvamVjdC4nLFxyXG4gICAgICAgIHN1bW1hcnk6ICdBbm90aGVyIGJyaWVmIHN1bW1hcnkgb2Ygd2hhdCB3YXMgZG9uZScsXHJcbiAgICAgICAgc3RyaW5nUmVwZXRpdGlvbnM6IFtcclxuICAgICAgICAgICAgLy8gXCJJIG1hZGUgbWlzdGFrZXNcIixcclxuICAgICAgICAgICAgLy8gXCJCdXQgSSBsZWFybmVkIGZyb20gdGhlbVwiLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdmlld2VkOiBmYWxzZSxcclxuICAgICAgICB0ZWNoU3RhY2s6IFtcclxuICAgICAgICAgICAgXCJUeXBlU2NyaXB0L0phdmFTY3JpcHRcIixcclxuICAgICAgICAgICAgXCJOb2RlLmpzXCIsXHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gIF07XHJcblxyXG4gIFxyXG5cclxuICBjb25zdCB0eXBld3JpdGVyUmVmcyA9IHByb2plY3RzLm1hcCgoKSA9PiBSZWFjdC5jcmVhdGVSZWY8VHlwZXdyaXRlckNsYXNzPigpKSBhcyBSZWFjdC5SZWZPYmplY3Q8VHlwZXdyaXRlckNsYXNzPltdIHwgYW55O1xyXG5cclxuICAvLyBGdW5jdGlvbiB0byBzY3JvbGwgdG8gYSBzcGVjaWZpYyBwcm9qZWN0XHJcbiAgY29uc3Qgc2Nyb2xsVG9Qcm9qZWN0ID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgIHNjcm9sbGVyLnNjcm9sbFRvKGBwcm9qZWN0LSR7aW5kZXh9YCwge1xyXG4gICAgICBkdXJhdGlvbjogODAwLFxyXG4gICAgICBkZWxheTogMCxcclxuICAgICAgc21vb3RoOiAnZWFzZUluT3V0UXVhcnQnLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgICBjb25zdCByZXBlYXRTdHJpbmdzID0gYXN5bmMgKHByb2plY3Q6IGFueSwgdHlwZXdyaXRlcjogVHlwZXdyaXRlckNsYXNzKSA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBzdHJpbmcgb2YgcHJvamVjdC5zdHJpbmdSZXBldGl0aW9ucykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVwZWF0aW5nIHN0cmluZzogJywgc3RyaW5nKTtcclxuICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgIHR5cGV3cml0ZXJcclxuICAgICAgICAgICAgICAgIC5wYXVzZUZvcigxMDAwKVxyXG4gICAgICAgICAgICAgICAgLmRlbGV0ZUFsbCgpXHJcbiAgICAgICAgICAgICAgICAudHlwZVN0cmluZyhgPHAgY2xhc3M9XCJpbmxpbmUtZmxleCBcIj4ke3N0cmluZ308L3A+YClcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICAuY2FsbEZ1bmN0aW9uKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXHJcbiAgICAgICAgKGVudHJpZXMpID0+IHtcclxuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGFzeW5jIChlbnRyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmlzaWJsZVByb2plY3RJbmRleCA9IHByb2plY3RzLmZpbmRJbmRleCgoXywgaW5kZXgpID0+IGBwcm9qZWN0LSR7aW5kZXh9YCA9PT0gZW50cnkudGFyZ2V0LmlkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmlzaWJsZVByb2plY3RJbmRleCAhPT0gLTEpIHsgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9Qcm9qZWN0KHZpc2libGVQcm9qZWN0SW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXByb2plY3RzW3Zpc2libGVQcm9qZWN0SW5kZXhdLnZpZXdlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c1t2aXNpYmxlUHJvamVjdEluZGV4XS52aWV3ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZXdyaXRlciA9IHR5cGV3cml0ZXJSZWZzW3Zpc2libGVQcm9qZWN0SW5kZXhdLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZXdyaXRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0c1t2aXNpYmxlUHJvamVjdEluZGV4XS5zdHJpbmdSZXBldGl0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHJlcGVhdFN0cmluZ3MocHJvamVjdHNbdmlzaWJsZVByb2plY3RJbmRleF0sIHR5cGV3cml0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBld3JpdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGF1c2VGb3IoMTAwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxldGVBbGwoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnR5cGVTdHJpbmcoYDxwIGNsYXNzPVwiaW5saW5lLWZsZXggXCI+JHtwcm9qZWN0c1t2aXNpYmxlUHJvamVjdEluZGV4XS5kZXNjcmlwdGlvbn08L3A+YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbEZ1bmN0aW9uKChzdGF0ZTogVHlwZXdyaXRlclN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuZWxlbWVudHMuY3Vyc29yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByb290OiBudWxsLFxyXG4gICAgICAgICAgICByb290TWFyZ2luOiAnMHB4JyxcclxuICAgICAgICAgICAgdGhyZXNob2xkOiAwLjUsXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuICBcclxuICAgIC8vIE9ic2VydmUgZWFjaCBwcm9qZWN0XHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChfLCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHByb2plY3QtJHtpbmRleH1gKTtcclxuICAgICAgaWYgKHByb2plY3QpIHtcclxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHByb2plY3QpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICBcclxuICAgIC8vIENsZWFudXAgb24gY29tcG9uZW50IHVubW91bnRcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHByb2plY3RzLmZvckVhY2goKF8sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcm9qZWN0LSR7aW5kZXh9YCk7XHJcbiAgICAgICAgaWYgKHByb2plY3QpIHtcclxuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShwcm9qZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICB9LCBbcHJvamVjdHNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSb290TGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc2Nyb2xsLXNtb290aFwiPlxyXG4gICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIGlkPXtgcHJvamVjdC0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgaC1zY3JlZW4gZnJvbS10cmFuc3BhcmVudCB0by1ncmF5LTcwMCBvcGFjaXR5LTgwIGFuaW1hdGUtZ3JhZGllbnQtZXhwYW5kIHB0LTE2IHBiLTE2IGZpcnN0LW9mLXR5cGU6bXQtMTYgbGFzdC1vZi10eXBlOnBiLTBcIiBcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBzY3JvbGxTbmFwQWxpZ246ICdzdGFydCcsIC8vIEFsaWduIHRoZSBzdGFydCBvZiB0aGUgZWxlbWVudCB0byB0aGUgc25hcCBjb250YWluZXJcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6aC1mdWxsIHNtOmgtMS8yIHRleHQtZ3JheS0yMDAgbGluZWFyIHJvdW5kZWQtdHItM3hsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgcmVsYXRpdmUgei0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibS0xIHB4LTIgcHktMSBiZy1vcmFuZ2UtMzAwIHRleHQtd2hpdGUgcm91bmRlZC1tZCBwLTggdGV4dC0zeGwgZm9udC1tb25vIGZvbnQtYmxhY2sgdy0xMS8xMiBsZzpqdXN0aWZ5LWNlbnRlciBsZzphbGlnbi1taWRkbGUgbGc6dy0xLzRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC5kdXJhdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e3Byb2plY3QuaW1nU3JjfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiUHJvamVjdFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgYm90dG9tLTAgcmlnaHQtMCBvcGFjaXR5LTI1IG9iamVjdC1jb3ZlciBsZzpoLWZ1bGwgdy1mdWxsIGxnOnJvdW5kZWQtZnVsbCBsZzpyb3VuZGVkLXRsLW5vbmUgbGc6cm91bmRlZC1ibC1ub25lIG1kOnJvdW5kZWQtbm9uZSBsZzp3LTMvNCBzbTpyb3VuZGVkLW5vbmUgXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtOCBmbGV4IGZsZXgtd3JhcCB3LTMvNFwiPlxyXG4gICAgICAgICAgICAgICAge3Byb2plY3QudGVjaFN0YWNrLm1hcCgodGVjaCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpfSBjbGFzc05hbWU9XCJtLTEgcHgtMiBweS0xIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZC1tZCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RlY2h9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicC04IHRleHQtMnhsIGZvbnQtbW9ubyBmb250LWJvbGQgdy0zLzRcIj57cHJvamVjdC5zdW1tYXJ5fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgaC1mdWxsIG1kOnctMS8yIGxnOmgtZnVsbCBwLTQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTEwMCBmb250LW1vbm8gZm9udC1ib2xkIHRleHQteGxgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFR5cGV3cml0ZXJcclxuICAgICAgICAgICAgICAgIG9uSW5pdD17YXN5bmMgKHR5cGV3cml0ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgdHlwZXdyaXRlclJlZnNbaW5kZXhdLmN1cnJlbnQgPSB0eXBld3JpdGVyO1xyXG4gICAgICAgICAgICAgICAgICB0eXBld3JpdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgLmNoYW5nZURlbGF5KDUwKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUm9vdExheW91dD5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0Iiwic2Nyb2xsZXIiLCJUeXBld3JpdGVyIiwiUm9vdExheW91dCIsIlByb2plY3RzIiwicHJvamVjdHMiLCJpbWdTcmMiLCJkdXJhdGlvbiIsImRlc2NyaXB0aW9uIiwic3VtbWFyeSIsInN0cmluZ1JlcGV0aXRpb25zIiwidmlld2VkIiwidGVjaFN0YWNrIiwidHlwZXdyaXRlclJlZnMiLCJtYXAiLCJjcmVhdGVSZWYiLCJzY3JvbGxUb1Byb2plY3QiLCJpbmRleCIsInNjcm9sbFRvIiwiZGVsYXkiLCJzbW9vdGgiLCJyZXBlYXRTdHJpbmdzIiwicHJvamVjdCIsInR5cGV3cml0ZXIiLCJzdHJpbmciLCJjb25zb2xlIiwibG9nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJwYXVzZUZvciIsImRlbGV0ZUFsbCIsInR5cGVTdHJpbmciLCJzdGFydCIsImNhbGxGdW5jdGlvbiIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJ2aXNpYmxlUHJvamVjdEluZGV4IiwiZmluZEluZGV4IiwiXyIsInRhcmdldCIsImlkIiwiY3VycmVudCIsImxlbmd0aCIsInN0YXRlIiwiZWxlbWVudHMiLCJjdXJzb3IiLCJzdHlsZSIsImRpc3BsYXkiLCJyb290Iiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvYnNlcnZlIiwidW5vYnNlcnZlIiwiZGl2IiwiY2xhc3NOYW1lIiwic2Nyb2xsU25hcEFsaWduIiwic3BhbiIsImltZyIsInNyYyIsImFsdCIsInRlY2giLCJpIiwicCIsIm9uSW5pdCIsImNoYW5nZURlbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/projects.tsx\n"));

/***/ })

});