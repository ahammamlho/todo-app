"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"92c3b535e60f\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2ZhZTQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI5MmMzYjUzNWU2MGZcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/context/store.tsx":
/*!*******************************!*\
  !*** ./app/context/store.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GlobalContextProvider: function() { return /* binding */ GlobalContextProvider; },\n/* harmony export */   useGlobalContext: function() { return /* binding */ useGlobalContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ GlobalContextProvider,useGlobalContext auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nconst GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    todos: [],\n    setTodos: ()=>{}\n});\nconst GlobalContextProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {\n        value: {\n            todos,\n            setTodos\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/ahammam/Desktop/todo-app/frontend/app/context/store.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(GlobalContextProvider, \"4w2FR3x+JAhc2MKl4V8naiLXs70=\");\n_c = GlobalContextProvider;\nconst useGlobalContext = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(GlobalContext);\n};\n_s1(useGlobalContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"GlobalContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb250ZXh0L3N0b3JlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBUWU7QUFPZixNQUFNSSw4QkFBZ0JKLG9EQUFhQSxDQUFlO0lBQ2hESyxPQUFPLEVBQUU7SUFDVEMsVUFBVSxLQUFPO0FBQ25CO0FBRU8sTUFBTUMsd0JBQXdCO1FBQUMsRUFDcENDLFFBQVEsRUFHVDs7SUFDQyxNQUFNLENBQUNILE9BQU9DLFNBQVMsR0FBR0gsK0NBQVFBLENBQWlCLEVBQUU7SUFFckRELGdEQUFTQSxDQUFDLEtBQU8sR0FBRyxFQUFFO0lBQ3RCLHFCQUNFLDhEQUFDRSxjQUFjSyxRQUFRO1FBQ3JCQyxPQUFPO1lBQ0xMO1lBQ0FDO1FBQ0Y7a0JBRUNFOzs7Ozs7QUFHUCxFQUFFO0dBbEJXRDtLQUFBQTtBQW9CTixNQUFNSSxtQkFBbUI7O0lBQU1WLE9BQUFBLGlEQUFVQSxDQUFDRztBQUFhLEVBQUU7SUFBbkRPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb250ZXh0L3N0b3JlLnRzeD9jY2U3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCB7XG4gIERpc3BhdGNoLFxuICBTZXRTdGF0ZUFjdGlvbixcbiAgY3JlYXRlQ29udGV4dCxcbiAgdXNlQ29udGV4dCxcbiAgdXNlRWZmZWN0LFxuICB1c2VTdGF0ZSxcbn0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgQ29udGV4dFByb3BzIHtcbiAgdG9kb3M6IFRvZG9EdG9bXSB8IFtdO1xuICBzZXRUb2RvczogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248VG9kb0R0b1tdPj47XG59XG5cbmNvbnN0IEdsb2JhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0PENvbnRleHRQcm9wcz4oe1xuICB0b2RvczogW10sXG4gIHNldFRvZG9zOiAoKSA9PiB7fSxcbn0pO1xuXG5leHBvcnQgY29uc3QgR2xvYmFsQ29udGV4dFByb3ZpZGVyID0gKHtcbiAgY2hpbGRyZW4sXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59KSA9PiB7XG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGU8VG9kb0R0b1tdIHwgW10+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge30sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8R2xvYmFsQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgdG9kb3MsXG4gICAgICAgIHNldFRvZG9zLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUdsb2JhbENvbnRleHQgPSAoKSA9PiB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJHbG9iYWxDb250ZXh0IiwidG9kb3MiLCJzZXRUb2RvcyIsIkdsb2JhbENvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUdsb2JhbENvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/context/store.tsx\n"));

/***/ })

});