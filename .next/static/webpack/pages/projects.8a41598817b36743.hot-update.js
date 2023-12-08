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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"./node_modules/react-scroll/modules/index.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typewriter-effect */ \"./node_modules/typewriter-effect/dist/react.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/layout */ \"./src/app/layout.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Projects() {\n    _s();\n    const projects = [\n        {\n            imgSrc: \"/images/me.jpg\",\n            duration: \"Tech stack\",\n            monthFrom: \"2020-01\",\n            monthTo: \"2020-02\",\n            description: \"My portfolio.\",\n            summary: \"\",\n            stringRepetitions: [\n                \"My experience,\",\n                \"My journey,\"\n            ],\n            viewed: false,\n            techStack: [\n                \"TypeScript/JavaScript\",\n                \"Node.js\",\n                \"React (Next.js)\",\n                \"PHP\",\n                \"Symfony\",\n                \"MySQL\",\n                \"C#\",\n                \"Blazor\"\n            ]\n        },\n        {\n            imgSrc: \"/images/me.jpg\",\n            duration: \"1 month\",\n            monthFrom: \"2020-01\",\n            monthTo: \"2020-02\",\n            description: \"This is a cool project.\",\n            summary: \"Another brief summary of what was done\",\n            stringRepetitions: [],\n            viewed: false,\n            techStack: [\n                \"TypeScript/JavaScript\",\n                \"Node.js\"\n            ]\n        },\n        {\n            imgSrc: \"/images/me.jpg\",\n            duration: \"1 month\",\n            monthFrom: \"2020-01\",\n            monthTo: \"2020-02\",\n            description: \"This is a cool project.\",\n            summary: \"Another brief summary of what was done\",\n            stringRepetitions: [],\n            viewed: false,\n            techStack: [\n                \"TypeScript/JavaScript\",\n                \"Node.js\"\n            ]\n        }\n    ];\n    const typewriterRefs = projects.map(()=>/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef());\n    // Function to scroll to a specific project\n    const scrollToProject = (index)=>{\n        react_scroll__WEBPACK_IMPORTED_MODULE_2__.scroller.scrollTo(\"project-\".concat(index), {\n            duration: 800,\n            delay: 0,\n            smooth: \"easeInOutQuart\"\n        });\n    };\n    const repeatStrings = async (project, typewriter)=>{\n        for (const string of project.stringRepetitions){\n            console.log(\"Repeating string: \", string);\n            await new Promise((resolve)=>{\n                typewriter.pauseFor(1000)// .deleteAll()\n                .typeString('<p class=\"inline break-words\">'.concat(string, \"</p><br>\")).start().callFunction(()=>{\n                    resolve(null);\n                });\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const observer = new IntersectionObserver((entries)=>{\n            entries.forEach(async (entry)=>{\n                if (entry.isIntersecting) {\n                    const visibleProjectIndex = projects.findIndex((_, index)=>\"project-\".concat(index) === entry.target.id);\n                    if (visibleProjectIndex !== -1) {\n                        scrollToProject(visibleProjectIndex);\n                        if (!projects[visibleProjectIndex].viewed) {\n                            projects[visibleProjectIndex].viewed = true;\n                            const typewriter = typewriterRefs[visibleProjectIndex].current;\n                            if (typewriter) {\n                                if (projects[visibleProjectIndex].stringRepetitions.length > 0) {\n                                    await repeatStrings(projects[visibleProjectIndex], typewriter);\n                                }\n                                await new Promise((resolve)=>{\n                                    typewriter.pauseFor(1000)// .deleteAll()\n                                    .typeString('<p class=\"inline\">'.concat(projects[visibleProjectIndex].description, \"</p>\")).start().callFunction((state)=>{\n                                        state.elements.cursor.style.display = \"none\";\n                                        resolve(null);\n                                    });\n                                });\n                            }\n                        }\n                    }\n                }\n            });\n        }, {\n            root: null,\n            rootMargin: \"0px\",\n            threshold: 0.5\n        });\n        // Observe each project\n        projects.forEach((_, index)=>{\n            const project = document.getElementById(\"project-\".concat(index));\n            if (project) {\n                observer.observe(project);\n            }\n        });\n        // Cleanup on component unmount\n        return ()=>{\n            projects.forEach((_, index)=>{\n                const project = document.getElementById(\"project-\".concat(index));\n                if (project) {\n                    observer.unobserve(project);\n                }\n            });\n        };\n    }, [\n        projects\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col scroll-smooth\",\n            children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"project-\".concat(index),\n                    className: \"flex flex-row even:flex-row-reverse md:flex-row h-screen from-transparent to-gray-700 opacity-90 animate-gradient-expand pt-16 pb-16 first-of-type:mt-4 last-of-type:mb-4\",\n                    style: {\n                        scrollSnapAlign: \"start\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full lg:h-full sm:h-1/2 text-gray-200 linear rounded-tr-3xl flex flex-col justify-center relative z-10\",\n                            children: [\n                                index % 2 === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: project.imgSrc,\n                                    alt: \"Project\",\n                                    className: \"absolute top-0 bottom-0 right-0 opacity-25 object-cover lg:h-full h-full w-full lg:rounded-full lg:rounded-tl-none lg:rounded-bl-none md:rounded-none lg:w-3/4 sm:rounded-none even:items-end odd:left-0 even:right-0\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 178,\n                                    columnNumber: 17\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: project.imgSrc,\n                                    alt: \"Project\",\n                                    className: \"absolute top-0 bottom-0 left-0 opacity-25 object-cover lg:h-full h-full w-full lg:rounded-full lg:rounded-tr-none lg:rounded-br-none md:rounded-none lg:w-3/4 sm:rounded-none even:items-start odd:right-0 even:left-0\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 184,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-8 flex flex-wrap w-3/4\",\n                                    children: project.techStack.map((tech, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"m-1 px-2 py-1 bg-blue-500 text-white rounded-md text-sm\",\n                                            children: tech\n                                        }, i, false, {\n                                            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                            lineNumber: 192,\n                                            columnNumber: 17\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 190,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"p-8 text-2xl font-mono font-bold w-3/4\",\n                                    children: project.summary\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                    lineNumber: 197,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                            lineNumber: 166,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full h-full md:w-1/2 lg:h-full p-4 flex flex-col justify-center items-center text-gray-100 font-mono font-bold lg:text-xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((typewriter_effect__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                onInit: async (typewriter)=>{\n                                    typewriterRefs[index].current = typewriter;\n                                    typewriter.changeDelay(50);\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                                lineNumber: 202,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                            lineNumber: 199,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n                    lineNumber: 158,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n            lineNumber: 156,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Gabriel Teixeira\\\\Documents\\\\Portfolio\\\\src\\\\pages\\\\projects.tsx\",\n        lineNumber: 155,\n        columnNumber: 5\n    }, this);\n}\n_s(Projects, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FETUM7Ozs7Ozs7Ozs7OENBS2YsOERBQUNFO29DQUFFUixXQUFVOzhDQUEwQ3JDLFFBQVFiLE9BQU87Ozs7Ozs7Ozs7OztzQ0FFdEUsOERBQUNpRDs0QkFDQ0MsV0FBWTtzQ0FFWiw0RUFBQzNELDBEQUFVQTtnQ0FDVG9FLFFBQVEsT0FBTzdDO29DQUNiVixjQUFjLENBQUNJLE1BQU0sQ0FBQzJCLE9BQU8sR0FBR3JCO29DQUNoQ0EsV0FDRzhDLFdBQVcsQ0FBQztnQ0FDakI7Ozs7Ozs7Ozs7OzttQkFoRENwRDs7Ozs7Ozs7Ozs7Ozs7O0FBd0RqQjtHQWpOd0JmO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9qZWN0cy50c3g/MzllYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtzY3JvbGxlcn0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcclxuaW1wb3J0IFR5cGV3cml0ZXIsIHsgVHlwZXdyaXRlckNsYXNzLCBUeXBld3JpdGVyU3RhdGUgfSBmcm9tICd0eXBld3JpdGVyLWVmZmVjdCc7XHJcbmltcG9ydCBSb290TGF5b3V0IGZyb20gJ0AvYXBwL2xheW91dCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0cygpIHtcclxuICBjb25zdCBwcm9qZWN0cyA9IFtcclxuICAgIHtcclxuICAgICAgICBpbWdTcmM6ICcvaW1hZ2VzL21lLmpwZycsXHJcbiAgICAgICAgZHVyYXRpb246ICdUZWNoIHN0YWNrJyxcclxuICAgICAgICBtb250aEZyb206ICcyMDIwLTAxJyxcclxuICAgICAgICBtb250aFRvOiAnMjAyMC0wMicsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdNeSBwb3J0Zm9saW8uJyxcclxuICAgICAgICBzdW1tYXJ5OiAnJyxcclxuICAgICAgICBzdHJpbmdSZXBldGl0aW9uczogW1xyXG4gICAgICAgICAgICBcIk15IGV4cGVyaWVuY2UsXCIsXHJcbiAgICAgICAgICAgIFwiTXkgam91cm5leSxcIixcclxuICAgICAgICBdLFxyXG4gICAgICAgIHZpZXdlZDogZmFsc2UsXHJcbiAgICAgICAgdGVjaFN0YWNrOiBbXHJcbiAgICAgICAgICAgIFwiVHlwZVNjcmlwdC9KYXZhU2NyaXB0XCIsXHJcbiAgICAgICAgICAgIFwiTm9kZS5qc1wiLFxyXG4gICAgICAgICAgICBcIlJlYWN0IChOZXh0LmpzKVwiLFxyXG4gICAgICAgICAgICBcIlBIUFwiLFxyXG4gICAgICAgICAgICBcIlN5bWZvbnlcIixcclxuICAgICAgICAgICAgXCJNeVNRTFwiLFxyXG4gICAgICAgICAgICBcIkMjXCIsXHJcbiAgICAgICAgICAgIFwiQmxhem9yXCJcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaW1nU3JjOiAnL2ltYWdlcy9tZS5qcGcnLFxyXG4gICAgICAgIGR1cmF0aW9uOiAnMSBtb250aCcsXHJcbiAgICAgICAgbW9udGhGcm9tOiAnMjAyMC0wMScsXHJcbiAgICAgICAgbW9udGhUbzogJzIwMjAtMDInLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBhIGNvb2wgcHJvamVjdC4nLFxyXG4gICAgICAgIHN1bW1hcnk6ICdBbm90aGVyIGJyaWVmIHN1bW1hcnkgb2Ygd2hhdCB3YXMgZG9uZScsXHJcbiAgICAgICAgc3RyaW5nUmVwZXRpdGlvbnM6IFtcclxuICAgICAgICAgICAgLy8gXCJJIG1hZGUgbWlzdGFrZXNcIixcclxuICAgICAgICAgICAgLy8gXCJCdXQgSSBsZWFybmVkIGZyb20gdGhlbVwiLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdmlld2VkOiBmYWxzZSxcclxuICAgICAgICB0ZWNoU3RhY2s6IFtcclxuICAgICAgICAgICAgXCJUeXBlU2NyaXB0L0phdmFTY3JpcHRcIixcclxuICAgICAgICAgICAgXCJOb2RlLmpzXCIsXHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaW1nU3JjOiAnL2ltYWdlcy9tZS5qcGcnLFxyXG4gICAgICAgIGR1cmF0aW9uOiAnMSBtb250aCcsXHJcbiAgICAgICAgbW9udGhGcm9tOiAnMjAyMC0wMScsXHJcbiAgICAgICAgbW9udGhUbzogJzIwMjAtMDInLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBhIGNvb2wgcHJvamVjdC4nLFxyXG4gICAgICAgIHN1bW1hcnk6ICdBbm90aGVyIGJyaWVmIHN1bW1hcnkgb2Ygd2hhdCB3YXMgZG9uZScsXHJcbiAgICAgICAgc3RyaW5nUmVwZXRpdGlvbnM6IFtcclxuICAgICAgICAgICAgLy8gXCJJIG1hZGUgbWlzdGFrZXNcIixcclxuICAgICAgICAgICAgLy8gXCJCdXQgSSBsZWFybmVkIGZyb20gdGhlbVwiLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdmlld2VkOiBmYWxzZSxcclxuICAgICAgICB0ZWNoU3RhY2s6IFtcclxuICAgICAgICAgICAgXCJUeXBlU2NyaXB0L0phdmFTY3JpcHRcIixcclxuICAgICAgICAgICAgXCJOb2RlLmpzXCIsXHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gIF07XHJcblxyXG4gIFxyXG5cclxuICBjb25zdCB0eXBld3JpdGVyUmVmcyA9IHByb2plY3RzLm1hcCgoKSA9PiBSZWFjdC5jcmVhdGVSZWY8VHlwZXdyaXRlckNsYXNzPigpKSBhcyBSZWFjdC5SZWZPYmplY3Q8VHlwZXdyaXRlckNsYXNzPltdIHwgYW55O1xyXG5cclxuICAvLyBGdW5jdGlvbiB0byBzY3JvbGwgdG8gYSBzcGVjaWZpYyBwcm9qZWN0XHJcbiAgY29uc3Qgc2Nyb2xsVG9Qcm9qZWN0ID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgIHNjcm9sbGVyLnNjcm9sbFRvKGBwcm9qZWN0LSR7aW5kZXh9YCwge1xyXG4gICAgICBkdXJhdGlvbjogODAwLFxyXG4gICAgICBkZWxheTogMCxcclxuICAgICAgc21vb3RoOiAnZWFzZUluT3V0UXVhcnQnLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgICBjb25zdCByZXBlYXRTdHJpbmdzID0gYXN5bmMgKHByb2plY3Q6IGFueSwgdHlwZXdyaXRlcjogVHlwZXdyaXRlckNsYXNzKSA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBzdHJpbmcgb2YgcHJvamVjdC5zdHJpbmdSZXBldGl0aW9ucykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVwZWF0aW5nIHN0cmluZzogJywgc3RyaW5nKTtcclxuICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgIHR5cGV3cml0ZXJcclxuICAgICAgICAgICAgICAgIC5wYXVzZUZvcigxMDAwKVxyXG4gICAgICAgICAgICAgICAgLy8gLmRlbGV0ZUFsbCgpXHJcbiAgICAgICAgICAgICAgICAudHlwZVN0cmluZyhgPHAgY2xhc3M9XCJpbmxpbmUgYnJlYWstd29yZHNcIj4ke3N0cmluZ308L3A+PGJyPmApXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgLmNhbGxGdW5jdGlvbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxyXG4gICAgICAgIChlbnRyaWVzKSA9PiB7XHJcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChhc3luYyAoZW50cnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpc2libGVQcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoKF8sIGluZGV4KSA9PiBgcHJvamVjdC0ke2luZGV4fWAgPT09IGVudHJ5LnRhcmdldC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZpc2libGVQcm9qZWN0SW5kZXggIT09IC0xKSB7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvUHJvamVjdCh2aXNpYmxlUHJvamVjdEluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwcm9qZWN0c1t2aXNpYmxlUHJvamVjdEluZGV4XS52aWV3ZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNbdmlzaWJsZVByb2plY3RJbmRleF0udmlld2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGV3cml0ZXIgPSB0eXBld3JpdGVyUmVmc1t2aXNpYmxlUHJvamVjdEluZGV4XS5jdXJyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGV3cml0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdHNbdmlzaWJsZVByb2plY3RJbmRleF0uc3RyaW5nUmVwZXRpdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCByZXBlYXRTdHJpbmdzKHByb2plY3RzW3Zpc2libGVQcm9qZWN0SW5kZXhdLCB0eXBld3JpdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZXdyaXRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBhdXNlRm9yKDEwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAuZGVsZXRlQWxsKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50eXBlU3RyaW5nKGA8cCBjbGFzcz1cImlubGluZVwiPiR7cHJvamVjdHNbdmlzaWJsZVByb2plY3RJbmRleF0uZGVzY3JpcHRpb259PC9wPmApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGxGdW5jdGlvbigoc3RhdGU6IFR5cGV3cml0ZXJTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmVsZW1lbnRzLmN1cnNvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcm9vdDogbnVsbCxcclxuICAgICAgICAgICAgcm9vdE1hcmdpbjogJzBweCcsXHJcbiAgICAgICAgICAgIHRocmVzaG9sZDogMC41LFxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgXHJcbiAgICAvLyBPYnNlcnZlIGVhY2ggcHJvamVjdFxyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgoXywgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcm9qZWN0LSR7aW5kZXh9YCk7XHJcbiAgICAgIGlmIChwcm9qZWN0KSB7XHJcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShwcm9qZWN0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgXHJcbiAgICAvLyBDbGVhbnVwIG9uIGNvbXBvbmVudCB1bm1vdW50XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBwcm9qZWN0cy5mb3JFYWNoKChfLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvamVjdC0ke2luZGV4fWApO1xyXG4gICAgICAgIGlmIChwcm9qZWN0KSB7XHJcbiAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUocHJvamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgfSwgW3Byb2plY3RzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Um9vdExheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNjcm9sbC1zbW9vdGhcIj5cclxuICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBpZD17YHByb2plY3QtJHtpbmRleH1gfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGV2ZW46ZmxleC1yb3ctcmV2ZXJzZSBtZDpmbGV4LXJvdyBoLXNjcmVlbiBmcm9tLXRyYW5zcGFyZW50IHRvLWdyYXktNzAwIG9wYWNpdHktOTAgYW5pbWF0ZS1ncmFkaWVudC1leHBhbmQgcHQtMTYgcGItMTYgZmlyc3Qtb2YtdHlwZTptdC00IGxhc3Qtb2YtdHlwZTptYi00XCIgXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgc2Nyb2xsU25hcEFsaWduOiAnc3RhcnQnLCAvLyBBbGlnbiB0aGUgc3RhcnQgb2YgdGhlIGVsZW1lbnQgdG8gdGhlIHNuYXAgY29udGFpbmVyXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOmgtZnVsbCBzbTpoLTEvMiB0ZXh0LWdyYXktMjAwIGxpbmVhciByb3VuZGVkLXRyLTN4bCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHJlbGF0aXZlIHotMTBcIj5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0ncC00IHRleHQtM3hsIGZvbnQtbW9ubyBmb250LWJsYWNrIHctZnVsbCBqdXN0aWZ5LWNlbnRlciBhbGlnbi1taWRkbGUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm0tMSBweC0yIHB5LTEgYmctb3JhbmdlLTMwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LmR1cmF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3AtNCB0ZXh0LTN4bCBmb250LW1vbm8gZm9udC1ibGFjayB3LWZ1bGwganVzdGlmeS1jZW50ZXIgYWxpZ24tbWlkZGxlJz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtLTEgcHgtMiBweS0xIGJnLWJsdWUtMzAwIHRleHQtd2hpdGUgcm91bmRlZC1tZCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QubW9udGhGcm9tfSAtIHtwcm9qZWN0Lm1vbnRoVG99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgIHtpbmRleCAlIDIgPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17cHJvamVjdC5pbWdTcmN9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlByb2plY3RcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBib3R0b20tMCByaWdodC0wIG9wYWNpdHktMjUgb2JqZWN0LWNvdmVyIGxnOmgtZnVsbCBoLWZ1bGwgdy1mdWxsIGxnOnJvdW5kZWQtZnVsbCBsZzpyb3VuZGVkLXRsLW5vbmUgbGc6cm91bmRlZC1ibC1ub25lIG1kOnJvdW5kZWQtbm9uZSBsZzp3LTMvNCBzbTpyb3VuZGVkLW5vbmUgZXZlbjppdGVtcy1lbmQgb2RkOmxlZnQtMCBldmVuOnJpZ2h0LTBcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9e3Byb2plY3QuaW1nU3JjfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJQcm9qZWN0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgYm90dG9tLTAgbGVmdC0wIG9wYWNpdHktMjUgb2JqZWN0LWNvdmVyIGxnOmgtZnVsbCBoLWZ1bGwgdy1mdWxsIGxnOnJvdW5kZWQtZnVsbCBsZzpyb3VuZGVkLXRyLW5vbmUgbGc6cm91bmRlZC1ici1ub25lIG1kOnJvdW5kZWQtbm9uZSBsZzp3LTMvNCBzbTpyb3VuZGVkLW5vbmUgZXZlbjppdGVtcy1zdGFydCBvZGQ6cmlnaHQtMCBldmVuOmxlZnQtMFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC04IGZsZXggZmxleC13cmFwIHctMy80XCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvamVjdC50ZWNoU3RhY2subWFwKCh0ZWNoLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2l9IGNsYXNzTmFtZT1cIm0tMSBweC0yIHB5LTEgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLW1kIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGVjaH1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwLTggdGV4dC0yeGwgZm9udC1tb25vIGZvbnQtYm9sZCB3LTMvNFwiPntwcm9qZWN0LnN1bW1hcnl9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBoLWZ1bGwgbWQ6dy0xLzIgbGc6aC1mdWxsIHAtNCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktMTAwIGZvbnQtbW9ubyBmb250LWJvbGQgbGc6dGV4dC14bGB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8VHlwZXdyaXRlclxyXG4gICAgICAgICAgICAgICAgb25Jbml0PXthc3luYyAodHlwZXdyaXRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0eXBld3JpdGVyUmVmc1tpbmRleF0uY3VycmVudCA9IHR5cGV3cml0ZXI7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGV3cml0ZXJcclxuICAgICAgICAgICAgICAgICAgICAuY2hhbmdlRGVsYXkoNTApXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Sb290TGF5b3V0PlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJzY3JvbGxlciIsIlR5cGV3cml0ZXIiLCJSb290TGF5b3V0IiwiUHJvamVjdHMiLCJwcm9qZWN0cyIsImltZ1NyYyIsImR1cmF0aW9uIiwibW9udGhGcm9tIiwibW9udGhUbyIsImRlc2NyaXB0aW9uIiwic3VtbWFyeSIsInN0cmluZ1JlcGV0aXRpb25zIiwidmlld2VkIiwidGVjaFN0YWNrIiwidHlwZXdyaXRlclJlZnMiLCJtYXAiLCJjcmVhdGVSZWYiLCJzY3JvbGxUb1Byb2plY3QiLCJpbmRleCIsInNjcm9sbFRvIiwiZGVsYXkiLCJzbW9vdGgiLCJyZXBlYXRTdHJpbmdzIiwicHJvamVjdCIsInR5cGV3cml0ZXIiLCJzdHJpbmciLCJjb25zb2xlIiwibG9nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJwYXVzZUZvciIsInR5cGVTdHJpbmciLCJzdGFydCIsImNhbGxGdW5jdGlvbiIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJ2aXNpYmxlUHJvamVjdEluZGV4IiwiZmluZEluZGV4IiwiXyIsInRhcmdldCIsImlkIiwiY3VycmVudCIsImxlbmd0aCIsInN0YXRlIiwiZWxlbWVudHMiLCJjdXJzb3IiLCJzdHlsZSIsImRpc3BsYXkiLCJyb290Iiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvYnNlcnZlIiwidW5vYnNlcnZlIiwiZGl2IiwiY2xhc3NOYW1lIiwic2Nyb2xsU25hcEFsaWduIiwiaW1nIiwic3JjIiwiYWx0IiwidGVjaCIsImkiLCJzcGFuIiwicCIsIm9uSW5pdCIsImNoYW5nZURlbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/projects.tsx\n"));

/***/ })

});