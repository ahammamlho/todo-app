/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%2FUsers%2Fahammam%2FDesktop%2Ftodo-app%2Ffrontend%2Fapp%2Fcomponents%2FaddTodo.tsx&modules=%2FUsers%2Fahammam%2FDesktop%2Ftodo-app%2Ffrontend%2Fapp%2Fcomponents%2FdisplayTodos.tsx&server=false!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%2FUsers%2Fahammam%2FDesktop%2Ftodo-app%2Ffrontend%2Fapp%2Fcomponents%2FaddTodo.tsx&modules=%2FUsers%2Fahammam%2FDesktop%2Ftodo-app%2Ffrontend%2Fapp%2Fcomponents%2FdisplayTodos.tsx&server=false! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/components/addTodo.tsx */ \"(app-pages-browser)/./app/components/addTodo.tsx\"));\nPromise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/components/displayTodos.tsx */ \"(app-pages-browser)/./app/components/displayTodos.tsx\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtZmxpZ2h0LWNsaWVudC1lbnRyeS1sb2FkZXIuanM/bW9kdWxlcz0lMkZVc2VycyUyRmFoYW1tYW0lMkZEZXNrdG9wJTJGdG9kby1hcHAlMkZmcm9udGVuZCUyRmFwcCUyRmNvbXBvbmVudHMlMkZhZGRUb2RvLnRzeCZtb2R1bGVzPSUyRlVzZXJzJTJGYWhhbW1hbSUyRkRlc2t0b3AlMkZ0b2RvLWFwcCUyRmZyb250ZW5kJTJGYXBwJTJGY29tcG9uZW50cyUyRmRpc3BsYXlUb2Rvcy50c3gmc2VydmVyPWZhbHNlISIsIm1hcHBpbmdzIjoiQUFBQSxrTEFBd0c7QUFDeEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz8zY2QxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovIFwiL1VzZXJzL2FoYW1tYW0vRGVza3RvcC90b2RvLWFwcC9mcm9udGVuZC9hcHAvY29tcG9uZW50cy9hZGRUb2RvLnRzeFwiKTtcbmltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovIFwiL1VzZXJzL2FoYW1tYW0vRGVza3RvcC90b2RvLWFwcC9mcm9udGVuZC9hcHAvY29tcG9uZW50cy9kaXNwbGF5VG9kb3MudHN4XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%2FUsers%2Fahammam%2FDesktop%2Ftodo-app%2Ffrontend%2Fapp%2Fcomponents%2FaddTodo.tsx&modules=%2FUsers%2Fahammam%2FDesktop%2Ftodo-app%2Ffrontend%2Fapp%2Fcomponents%2FdisplayTodos.tsx&server=false!\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/api/create-todo.ts":
/*!********************************!*\
  !*** ./app/api/create-todo.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodo: function() { return /* binding */ createTodo; }\n/* harmony export */ });\nasync function createTodo(todo) {\n    await fetch(\"\".concat(\"http://localhost:3000\", \"/todo/create\"), {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(todo)\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hcGkvY3JlYXRlLXRvZG8udHMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLGVBQWVBLFdBQVdDLElBQXNCO0lBQ3JELE1BQU1DLE1BQU0sR0FBZ0MsT0FBN0JDLHVCQUE0QixFQUFDLGlCQUFlO1FBQ3pERyxRQUFRO1FBQ1JDLFNBQVM7WUFDUCxnQkFBZ0I7UUFDbEI7UUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDVDtJQUN2QjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9hcGkvY3JlYXRlLXRvZG8udHM/NWUyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVG9kbyh0b2RvOiB7IHRvZG86IHN0cmluZyB9KSB7XG4gIGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBQ0t9L3RvZG8vY3JlYXRlYCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0b2RvKSxcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlVG9kbyIsInRvZG8iLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19CQUNLIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/api/create-todo.ts\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/addTodo.tsx":
/*!************************************!*\
  !*** ./app/components/addTodo.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_create_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/create-todo */ \"(app-pages-browser)/./app/api/create-todo.ts\");\n/* harmony import */ var _context_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/store */ \"(app-pages-browser)/./app/context/store.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst AddTodo = ()=>{\n    _s();\n    const [todo, setTodo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { setTodos } = (0,_context_store__WEBPACK_IMPORTED_MODULE_3__.useGlobalContext)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-[7rem] w-[50%] rounded-md bg-white mt-3 flex flex-col items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex bg-[#F6F7FA] border rounded-[10px]   md:w-[50%]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: \"bg-[#F6F7FA] m-1 p-1 flex flex-grow   text-black placeholder-gray-600 text-sm outline-none\",\n                    type: \"text\",\n                    placeholder: \"What would you like to do?\",\n                    value: todo,\n                    onChange: (e)=>{\n                        setTodo(e.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/ahammam/Desktop/todo-app/frontend/app/components/addTodo.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ahammam/Desktop/todo-app/frontend/app/components/addTodo.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-green-600 hover:bg-green-500 px-7 rounded-md mt-4 cursor-pointer\",\n                onClick: ()=>{\n                    if (todo.length !== 0) {\n                        (0,_api_create_todo__WEBPACK_IMPORTED_MODULE_2__.createTodo)({\n                            todo: todo\n                        });\n                        setTodo(\"\");\n                    }\n                },\n                children: \"Add\"\n            }, void 0, false, {\n                fileName: \"/Users/ahammam/Desktop/todo-app/frontend/app/components/addTodo.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ahammam/Desktop/todo-app/frontend/app/components/addTodo.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddTodo, \"8AAb+EB/XFXc5/m20cBs75VZVyM=\", false, function() {\n    return [\n        _context_store__WEBPACK_IMPORTED_MODULE_3__.useGlobalContext\n    ];\n});\n_c = AddTodo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddTodo);\nvar _c;\n$RefreshReg$(_c, \"AddTodo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2FkZFRvZG8udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ3dDO0FBQ1E7QUFDSTtBQUVwRCxNQUFNSSxVQUFVOztJQUNkLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLEVBQUVNLFFBQVEsRUFBRSxHQUFHSixnRUFBZ0JBO0lBQ3JDLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNDO29CQUNDRCxXQUFVO29CQUVWRSxNQUFLO29CQUNMQyxhQUFZO29CQUNaQyxPQUFPUjtvQkFDUFMsVUFBVSxDQUFDQzt3QkFDVFQsUUFBUVMsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO29CQUN4Qjs7Ozs7Ozs7Ozs7MEJBR0osOERBQUNMO2dCQUNDQyxXQUFVO2dCQUNWUSxTQUFTO29CQUNQLElBQUlaLEtBQUthLE1BQU0sS0FBSyxHQUFHO3dCQUNyQmhCLDREQUFVQSxDQUFDOzRCQUFFRyxNQUFNQTt3QkFBSzt3QkFDeEJDLFFBQVE7b0JBQ1Y7Z0JBQ0Y7MEJBQ0Q7Ozs7Ozs7Ozs7OztBQUtQO0dBOUJNRjs7UUFFaUJELDREQUFnQkE7OztLQUZqQ0M7QUFnQ04sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvYWRkVG9kby50c3g/ZGUyYiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVUb2RvIH0gZnJvbSAnLi4vYXBpL2NyZWF0ZS10b2RvJztcbmltcG9ydCB7IHVzZUdsb2JhbENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L3N0b3JlJztcblxuY29uc3QgQWRkVG9kbyA9ICgpID0+IHtcbiAgY29uc3QgW3RvZG8sIHNldFRvZG9dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCB7IHNldFRvZG9zIH0gPSB1c2VHbG9iYWxDb250ZXh0KCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLVs3cmVtXSB3LVs1MCVdIHJvdW5kZWQtbWQgYmctd2hpdGUgbXQtMyBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGJnLVsjRjZGN0ZBXSBib3JkZXIgcm91bmRlZC1bMTBweF0gICBtZDp3LVs1MCVdXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVsjRjZGN0ZBXSBtLTEgcC0xIGZsZXggZmxleC1ncm93ICBcbiAgICAgICAgICAgICAgICB0ZXh0LWJsYWNrIHBsYWNlaG9sZGVyLWdyYXktNjAwIHRleHQtc20gb3V0bGluZS1ub25lXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IHdvdWxkIHlvdSBsaWtlIHRvIGRvP1wiXG4gICAgICAgICAgdmFsdWU9e3RvZG99XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBzZXRUb2RvKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+PC9pbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmVlbi02MDAgaG92ZXI6YmctZ3JlZW4tNTAwIHB4LTcgcm91bmRlZC1tZCBtdC00IGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGlmICh0b2RvLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgY3JlYXRlVG9kbyh7IHRvZG86IHRvZG8gfSk7XG4gICAgICAgICAgICBzZXRUb2RvKCcnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIEFkZFxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRUb2RvO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjcmVhdGVUb2RvIiwidXNlR2xvYmFsQ29udGV4dCIsIkFkZFRvZG8iLCJ0b2RvIiwic2V0VG9kbyIsInNldFRvZG9zIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9uQ2xpY2siLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/addTodo.tsx\n"));

/***/ })

});