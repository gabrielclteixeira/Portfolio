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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typewriter-effect */ \"./node_modules/typewriter-effect/dist/react.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/layout */ \"./src/app/layout.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Projects() {\n    _s();\n    const projects = [\n        {\n            imgSrc: \"/images/me.jpg\",\n            duration: \"Tech stack\",\n            monthFrom: \"2020-01\",\n            monthTo: \"2020-02\",\n            description: \"My portfolio.\",\n            summary: \"\",\n            stringRepetitions: [\n                \"My experience,\",\n                \"My journey,\"\n            ],\n            viewed: false,\n            techStack: [\n                \"TypeScript/JavaScript\",\n                \"Node.js\",\n                \"React (Next.js)\",\n                \"PHP\",\n                \"Symfony\",\n                \"MySQL\",\n                \"C#\",\n                \"Blazor\"\n            ]\n        },\n        {\n            imgSrc: \"/images/me.jpg\",\n            duration: \"1 month\",\n            monthFrom: \"2020-01\",\n            monthTo: \"2020-02\",\n            description: \"This is a cool project.\",\n            summary: \"Another brief summary of what was done\",\n            stringRepetitions: [],\n            viewed: false,\n            techStack: [\n                \"TypeScript/JavaScript\",\n                \"Node.js\"\n            ]\n        }\n    ];\n    const typewriterRefs = projects.map(()=>/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef());\n    // Function to scroll to a specific project\n    const scrollToProject = (index)=>{\n        react_scroll__WEBPACK_IMPORTED_MODULE_2__.scroller.scrollTo(\"project-\".concat(index), {\n            duration: 800,\n            delay: 0,\n            smooth: \"easeInOutQuart\"\n        });\n    };\n    const repeatStrings = async (project, typewriter)=>{\n        for (const string of project.stringRepetitions){\n            console.log(\"Repeating string: \", string);\n            await new Promise((resolve)=>{\n                typewriter.pauseFor(1000)// .deleteAll()\n                .typeString('<p class=\"inline break-words\">'.concat(string, \"</p><br>\")).start().callFunction(()=>{\n                    resolve(null);\n                });\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const observer = new IntersectionObserver((entries)=>{\n            entries.forEach(async (entry)=>{\n                if (entry.isIntersecting) {\n                    const visibleProjectIndex = projects.findIndex((_, index)=>\"project-\".concat(index) === entry.target.id);\n                    if (visibleProjectIndex !== -1) {\n                        scrollToProject(visibleProjectIndex);\n                        if (!projects[visibleProjectIndex].viewed) {\n                            projects[visibleProjectIndex].viewed = true;\n                            const typewriter = typewriterRefs[visibleProjectIndex].current;\n                            if (typewriter) {\n                                if (projects[visibleProjectIndex].stringRepetitions.length > 0) {\n                                    await repeatStrings(projects[visibleProjectIndex], typewriter);\n                                }\n                                await new Promise((resolve)=>{\n                                    typewriter.pauseFor(1000)// .deleteAll()\n                                    .typeString('<p class=\"inline\">'.concat(projects[visibleProjectIndex].description, \"</p>\")).start().callFunction((state)=>{\n                                        state.elements.cursor.style.display = \"none\";\n                                        resolve(null);\n                                    });\n                                });\n                            }\n                        }\n                    }\n                }\n            });\n        }, {\n            root: null,\n            rootMargin: \"0px\",\n            threshold: 0.5\n        });\n        // Observe each project\n        projects.forEach((_, index)=>{\n            const project = document.getElementById(\"project-\".concat(index));\n            if (project) {\n                observer.observe(project);\n            }\n        });\n        // Cleanup on component unmount\n        return ()=>{\n            projects.forEach((_, index)=>{\n                const project = document.getElementById(\"project-\".concat(index));\n                if (project) {\n                    observer.unobserve(project);\n                }\n            });\n        };\n    }, [\n        projects\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col scroll-smooth\",\n            children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"project-\".concat(index),\n                    className: \"flex flex-col md:flex-row h-screen from-transparent to-gray-700 opacity-80 animate-gradient-expand pt-16 pb-16 first-of-type:mt-16 last-of-type:pb-0\",\n                    style: {\n                        scrollSnapAlign: \"start\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full lg:h-full sm:h-1/2 text-gray-200 linear rounded-tr-3xl flex flex-col justify-center relative z-10\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-4 text-3xl font-mono font-black w-full justify-center align-middle\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"m-1 px-2 py-1 bg-orange-300 text-white rounded-md \",\n                                        children: project.duration\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                        lineNumber: 151,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 150,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-4 text-3xl font-mono font-black w-full justify-center align-middle\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"m-1 px-2 py-1 bg-blue-300 text-white rounded-md \",\n                                        children: [\n                                            project.monthFrom,\n                                            \" - \",\n                                            project.monthTo\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                        lineNumber: 156,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 155,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: project.imgSrc,\n                                    alt: \"Project\",\n                                    className: \"absolute top-0 left-0 bottom-0 right-0 opacity-25 object-cover lg:h-full w-full lg:rounded-full lg:rounded-tl-none lg:rounded-bl-none md:rounded-none lg:w-3/4 sm:rounded-none \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 160,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-8 flex flex-wrap w-3/4\",\n                                    children: project.techStack.map((tech, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"m-1 px-2 py-1 bg-blue-500 text-white rounded-md text-sm\",\n                                            children: tech\n                                        }, i, false, {\n                                            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                            lineNumber: 167,\n                                            columnNumber: 17\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 165,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"p-8 text-2xl font-mono font-bold w-3/4\",\n                                    children: project.summary\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 172,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                            lineNumber: 149,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full h-full md:w-1/2 lg:h-full p-4 flex flex-col justify-center items-center text-gray-100 font-mono font-bold text-xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((typewriter_effect__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                onInit: async (typewriter)=>{\n                                    typewriterRefs[index].current = typewriter;\n                                    typewriter.changeDelay(50);\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                lineNumber: 177,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                            lineNumber: 174,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                    lineNumber: 141,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n            lineNumber: 139,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n        lineNumber: 138,\n        columnNumber: 5\n    }, this);\n}\n_s(Projects, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RVIsV0FBVTs4Q0FBMENyQyxRQUFRYixPQUFPOzs7Ozs7Ozs7Ozs7c0NBRXRFLDhEQUFDaUQ7NEJBQ0NDLFdBQVk7c0NBRVosNEVBQUMzRCwwREFBVUE7Z0NBQ1RvRSxRQUFRLE9BQU83QztvQ0FDYlYsY0FBYyxDQUFDSSxNQUFNLENBQUMyQixPQUFPLEdBQUdyQjtvQ0FDaENBLFdBQ0c4QyxXQUFXLENBQUM7Z0NBQ2pCOzs7Ozs7Ozs7Ozs7bUJBeENDcEQ7Ozs7Ozs7Ozs7Ozs7OztBQWdEakI7R0F4THdCZjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvamVjdHMudHN4PzM5ZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7c2Nyb2xsZXJ9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XHJcbmltcG9ydCBUeXBld3JpdGVyLCB7IFR5cGV3cml0ZXJDbGFzcywgVHlwZXdyaXRlclN0YXRlIH0gZnJvbSAndHlwZXdyaXRlci1lZmZlY3QnO1xyXG5pbXBvcnQgUm9vdExheW91dCBmcm9tICdAL2FwcC9sYXlvdXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMoKSB7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaW1nU3JjOiAnL2ltYWdlcy9tZS5qcGcnLFxyXG4gICAgICAgIGR1cmF0aW9uOiAnVGVjaCBzdGFjaycsXHJcbiAgICAgICAgbW9udGhGcm9tOiAnMjAyMC0wMScsXHJcbiAgICAgICAgbW9udGhUbzogJzIwMjAtMDInLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTXkgcG9ydGZvbGlvLicsXHJcbiAgICAgICAgc3VtbWFyeTogJycsXHJcbiAgICAgICAgc3RyaW5nUmVwZXRpdGlvbnM6IFtcclxuICAgICAgICAgICAgXCJNeSBleHBlcmllbmNlLFwiLFxyXG4gICAgICAgICAgICBcIk15IGpvdXJuZXksXCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgICB2aWV3ZWQ6IGZhbHNlLFxyXG4gICAgICAgIHRlY2hTdGFjazogW1xyXG4gICAgICAgICAgICBcIlR5cGVTY3JpcHQvSmF2YVNjcmlwdFwiLFxyXG4gICAgICAgICAgICBcIk5vZGUuanNcIixcclxuICAgICAgICAgICAgXCJSZWFjdCAoTmV4dC5qcylcIixcclxuICAgICAgICAgICAgXCJQSFBcIixcclxuICAgICAgICAgICAgXCJTeW1mb255XCIsXHJcbiAgICAgICAgICAgIFwiTXlTUUxcIixcclxuICAgICAgICAgICAgXCJDI1wiLFxyXG4gICAgICAgICAgICBcIkJsYXpvclwiXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGltZ1NyYzogJy9pbWFnZXMvbWUuanBnJyxcclxuICAgICAgICBkdXJhdGlvbjogJzEgbW9udGgnLFxyXG4gICAgICAgIG1vbnRoRnJvbTogJzIwMjAtMDEnLFxyXG4gICAgICAgIG1vbnRoVG86ICcyMDIwLTAyJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSBjb29sIHByb2plY3QuJyxcclxuICAgICAgICBzdW1tYXJ5OiAnQW5vdGhlciBicmllZiBzdW1tYXJ5IG9mIHdoYXQgd2FzIGRvbmUnLFxyXG4gICAgICAgIHN0cmluZ1JlcGV0aXRpb25zOiBbXHJcbiAgICAgICAgICAgIC8vIFwiSSBtYWRlIG1pc3Rha2VzXCIsXHJcbiAgICAgICAgICAgIC8vIFwiQnV0IEkgbGVhcm5lZCBmcm9tIHRoZW1cIixcclxuICAgICAgICBdLFxyXG4gICAgICAgIHZpZXdlZDogZmFsc2UsXHJcbiAgICAgICAgdGVjaFN0YWNrOiBbXHJcbiAgICAgICAgICAgIFwiVHlwZVNjcmlwdC9KYXZhU2NyaXB0XCIsXHJcbiAgICAgICAgICAgIFwiTm9kZS5qc1wiLFxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICBdO1xyXG5cclxuICBcclxuXHJcbiAgY29uc3QgdHlwZXdyaXRlclJlZnMgPSBwcm9qZWN0cy5tYXAoKCkgPT4gUmVhY3QuY3JlYXRlUmVmPFR5cGV3cml0ZXJDbGFzcz4oKSkgYXMgUmVhY3QuUmVmT2JqZWN0PFR5cGV3cml0ZXJDbGFzcz5bXSB8IGFueTtcclxuXHJcbiAgLy8gRnVuY3Rpb24gdG8gc2Nyb2xsIHRvIGEgc3BlY2lmaWMgcHJvamVjdFxyXG4gIGNvbnN0IHNjcm9sbFRvUHJvamVjdCA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICBzY3JvbGxlci5zY3JvbGxUbyhgcHJvamVjdC0ke2luZGV4fWAsIHtcclxuICAgICAgZHVyYXRpb246IDgwMCxcclxuICAgICAgZGVsYXk6IDAsXHJcbiAgICAgIHNtb290aDogJ2Vhc2VJbk91dFF1YXJ0JyxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gICAgY29uc3QgcmVwZWF0U3RyaW5ncyA9IGFzeW5jIChwcm9qZWN0OiBhbnksIHR5cGV3cml0ZXI6IFR5cGV3cml0ZXJDbGFzcykgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3Qgc3RyaW5nIG9mIHByb2plY3Quc3RyaW5nUmVwZXRpdGlvbnMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlcGVhdGluZyBzdHJpbmc6ICcsIHN0cmluZyk7XHJcbiAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0eXBld3JpdGVyXHJcbiAgICAgICAgICAgICAgICAucGF1c2VGb3IoMTAwMClcclxuICAgICAgICAgICAgICAgIC8vIC5kZWxldGVBbGwoKVxyXG4gICAgICAgICAgICAgICAgLnR5cGVTdHJpbmcoYDxwIGNsYXNzPVwiaW5saW5lIGJyZWFrLXdvcmRzXCI+JHtzdHJpbmd9PC9wPjxicj5gKVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIC5jYWxsRnVuY3Rpb24oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcclxuICAgICAgICAoZW50cmllcykgPT4ge1xyXG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goYXN5bmMgKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2aXNpYmxlUHJvamVjdEluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KChfLCBpbmRleCkgPT4gYHByb2plY3QtJHtpbmRleH1gID09PSBlbnRyeS50YXJnZXQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2aXNpYmxlUHJvamVjdEluZGV4ICE9PSAtMSkgeyAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb1Byb2plY3QodmlzaWJsZVByb2plY3RJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcHJvamVjdHNbdmlzaWJsZVByb2plY3RJbmRleF0udmlld2VkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzW3Zpc2libGVQcm9qZWN0SW5kZXhdLnZpZXdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBld3JpdGVyID0gdHlwZXdyaXRlclJlZnNbdmlzaWJsZVByb2plY3RJbmRleF0uY3VycmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBld3JpdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2plY3RzW3Zpc2libGVQcm9qZWN0SW5kZXhdLnN0cmluZ1JlcGV0aXRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcmVwZWF0U3RyaW5ncyhwcm9qZWN0c1t2aXNpYmxlUHJvamVjdEluZGV4XSwgdHlwZXdyaXRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGV3cml0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wYXVzZUZvcigxMDAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gLmRlbGV0ZUFsbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHlwZVN0cmluZyhgPHAgY2xhc3M9XCJpbmxpbmVcIj4ke3Byb2plY3RzW3Zpc2libGVQcm9qZWN0SW5kZXhdLmRlc2NyaXB0aW9ufTwvcD5gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsRnVuY3Rpb24oKHN0YXRlOiBUeXBld3JpdGVyU3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5lbGVtZW50cy5jdXJzb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvb3Q6IG51bGwsXHJcbiAgICAgICAgICAgIHJvb3RNYXJnaW46ICcwcHgnLFxyXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDAuNSxcclxuICAgICAgICB9XHJcbiAgICApO1xyXG4gIFxyXG4gICAgLy8gT2JzZXJ2ZSBlYWNoIHByb2plY3RcclxuICAgIHByb2plY3RzLmZvckVhY2goKF8sIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvamVjdC0ke2luZGV4fWApO1xyXG4gICAgICBpZiAocHJvamVjdCkge1xyXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUocHJvamVjdCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIFxyXG4gICAgLy8gQ2xlYW51cCBvbiBjb21wb25lbnQgdW5tb3VudFxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgcHJvamVjdHMuZm9yRWFjaCgoXywgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHByb2plY3QtJHtpbmRleH1gKTtcclxuICAgICAgICBpZiAocHJvamVjdCkge1xyXG4gICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKHByb2plY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIH0sIFtwcm9qZWN0c10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJvb3RMYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzY3JvbGwtc21vb3RoXCI+XHJcbiAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgaWQ9e2Bwcm9qZWN0LSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBoLXNjcmVlbiBmcm9tLXRyYW5zcGFyZW50IHRvLWdyYXktNzAwIG9wYWNpdHktODAgYW5pbWF0ZS1ncmFkaWVudC1leHBhbmQgcHQtMTYgcGItMTYgZmlyc3Qtb2YtdHlwZTptdC0xNiBsYXN0LW9mLXR5cGU6cGItMFwiIFxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHNjcm9sbFNuYXBBbGlnbjogJ3N0YXJ0JywgLy8gQWxpZ24gdGhlIHN0YXJ0IG9mIHRoZSBlbGVtZW50IHRvIHRoZSBzbmFwIGNvbnRhaW5lclxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzpoLWZ1bGwgc206aC0xLzIgdGV4dC1ncmF5LTIwMCBsaW5lYXIgcm91bmRlZC10ci0zeGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciByZWxhdGl2ZSB6LTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncC00IHRleHQtM3hsIGZvbnQtbW9ubyBmb250LWJsYWNrIHctZnVsbCBqdXN0aWZ5LWNlbnRlciBhbGlnbi1taWRkbGUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm0tMSBweC0yIHB5LTEgYmctb3JhbmdlLTMwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LmR1cmF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3AtNCB0ZXh0LTN4bCBmb250LW1vbm8gZm9udC1ibGFjayB3LWZ1bGwganVzdGlmeS1jZW50ZXIgYWxpZ24tbWlkZGxlJz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtLTEgcHgtMiBweS0xIGJnLWJsdWUtMzAwIHRleHQtd2hpdGUgcm91bmRlZC1tZCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QubW9udGhGcm9tfSAtIHtwcm9qZWN0Lm1vbnRoVG99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtwcm9qZWN0LmltZ1NyY31cclxuICAgICAgICAgICAgICAgIGFsdD1cIlByb2plY3RcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGJvdHRvbS0wIHJpZ2h0LTAgb3BhY2l0eS0yNSBvYmplY3QtY292ZXIgbGc6aC1mdWxsIHctZnVsbCBsZzpyb3VuZGVkLWZ1bGwgbGc6cm91bmRlZC10bC1ub25lIGxnOnJvdW5kZWQtYmwtbm9uZSBtZDpyb3VuZGVkLW5vbmUgbGc6dy0zLzQgc206cm91bmRlZC1ub25lIFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTggZmxleCBmbGV4LXdyYXAgdy0zLzRcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9qZWN0LnRlY2hTdGFjay5tYXAoKHRlY2gsIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aX0gY2xhc3NOYW1lPVwibS0xIHB4LTIgcHktMSBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0ZWNofVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAtOCB0ZXh0LTJ4bCBmb250LW1vbm8gZm9udC1ib2xkIHctMy80XCI+e3Byb2plY3Quc3VtbWFyeX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIGgtZnVsbCBtZDp3LTEvMiBsZzpoLWZ1bGwgcC00IGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtZ3JheS0xMDAgZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LXhsYH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUeXBld3JpdGVyXHJcbiAgICAgICAgICAgICAgICBvbkluaXQ9e2FzeW5jICh0eXBld3JpdGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGV3cml0ZXJSZWZzW2luZGV4XS5jdXJyZW50ID0gdHlwZXdyaXRlcjtcclxuICAgICAgICAgICAgICAgICAgdHlwZXdyaXRlclxyXG4gICAgICAgICAgICAgICAgICAgIC5jaGFuZ2VEZWxheSg1MClcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1Jvb3RMYXlvdXQ+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInNjcm9sbGVyIiwiVHlwZXdyaXRlciIsIlJvb3RMYXlvdXQiLCJQcm9qZWN0cyIsInByb2plY3RzIiwiaW1nU3JjIiwiZHVyYXRpb24iLCJtb250aEZyb20iLCJtb250aFRvIiwiZGVzY3JpcHRpb24iLCJzdW1tYXJ5Iiwic3RyaW5nUmVwZXRpdGlvbnMiLCJ2aWV3ZWQiLCJ0ZWNoU3RhY2siLCJ0eXBld3JpdGVyUmVmcyIsIm1hcCIsImNyZWF0ZVJlZiIsInNjcm9sbFRvUHJvamVjdCIsImluZGV4Iiwic2Nyb2xsVG8iLCJkZWxheSIsInNtb290aCIsInJlcGVhdFN0cmluZ3MiLCJwcm9qZWN0IiwidHlwZXdyaXRlciIsInN0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJQcm9taXNlIiwicmVzb2x2ZSIsInBhdXNlRm9yIiwidHlwZVN0cmluZyIsInN0YXJ0IiwiY2FsbEZ1bmN0aW9uIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInZpc2libGVQcm9qZWN0SW5kZXgiLCJmaW5kSW5kZXgiLCJfIiwidGFyZ2V0IiwiaWQiLCJjdXJyZW50IiwibGVuZ3RoIiwic3RhdGUiLCJlbGVtZW50cyIsImN1cnNvciIsInN0eWxlIiwiZGlzcGxheSIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9ic2VydmUiLCJ1bm9ic2VydmUiLCJkaXYiLCJjbGFzc05hbWUiLCJzY3JvbGxTbmFwQWxpZ24iLCJzcGFuIiwiaW1nIiwic3JjIiwiYWx0IiwidGVjaCIsImkiLCJwIiwib25Jbml0IiwiY2hhbmdlRGVsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/projects.tsx\n"));

/***/ })

});