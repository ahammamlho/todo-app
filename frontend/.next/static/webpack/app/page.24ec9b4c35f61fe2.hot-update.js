"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/displayTodos.tsx":
/*!*****************************************!*\
  !*** ./app/components/displayTodos.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_MdDelete_react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=MdDelete!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _api_changeStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/changeStatus */ \"(app-pages-browser)/./app/api/changeStatus.ts\");\n/* harmony import */ var _api_delete_todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/delete-todo */ \"(app-pages-browser)/./app/api/delete-todo.ts\");\n/* harmony import */ var _context_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/store */ \"(app-pages-browser)/./app/context/store.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst DisplayTodos = ()=>{\n    _s();\n    const { todos } = (0,_context_store__WEBPACK_IMPORTED_MODULE_4__.useGlobalContext)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" w-[50%] rounded-md bg-white mt-3 flex flex-col py-3 \",\n        children: todos.map((todo, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex  justify-between mx-2 mt-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[90%] flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: todo.isDone,\n                                onChange: ()=>{\n                                    (0,_api_changeStatus__WEBPACK_IMPORTED_MODULE_2__.changeStatus)(todo.id);\n                                    setTodos((prevTodos)=>{\n                                        return prevTodos.map((td)=>td.id === todo.id ? {\n                                                ...td,\n                                                isDone: !td.isDone\n                                            } : td);\n                                    });\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ahammam/Desktop/todo-app/frontend/app/components/displayTodos.tsx\",\n                                lineNumber: 18,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-black ml-2  \",\n                                children: todo.todo\n                            }, void 0, false, {\n                                fileName: \"/Users/ahammam/Desktop/todo-app/frontend/app/components/displayTodos.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ahammam/Desktop/todo-app/frontend/app/components/displayTodos.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdDelete_react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdDelete, {\n                        className: \"text-[20px] cursor-pointer text-red-500 hover:text-red-400\",\n                        onClick: ()=>{\n                            (0,_api_delete_todo__WEBPACK_IMPORTED_MODULE_3__.deleteTodo)(todo.id);\n                            setTodos((prevTodos)=>{\n                                return prevTodos.filter((td)=>td.id !== todo.id);\n                            });\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/ahammam/Desktop/todo-app/frontend/app/components/displayTodos.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, index, true, {\n                fileName: \"/Users/ahammam/Desktop/todo-app/frontend/app/components/displayTodos.tsx\",\n                lineNumber: 16,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/ahammam/Desktop/todo-app/frontend/app/components/displayTodos.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DisplayTodos, \"ZDzanZS6ZDzEd3ZGrHcy66EJYhE=\", false, function() {\n    return [\n        _context_store__WEBPACK_IMPORTED_MODULE_4__.useGlobalContext\n    ];\n});\n_c = DisplayTodos;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DisplayTodos);\nvar _c;\n$RefreshReg$(_c, \"DisplayTodos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2Rpc3BsYXlUb2Rvcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNtRDtBQUNUO0FBRVM7QUFDSDtBQUNJO0FBRXBELE1BQU1LLGVBQWU7O0lBQ25CLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdGLGdFQUFnQkE7SUFFbEMscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7a0JBQ1pGLE1BQU1HLEdBQUcsQ0FBQyxDQUFDQyxNQUFXQztZQUNyQixxQkFDRSw4REFBQ0o7Z0JBQWdCQyxXQUFVOztrQ0FDekIsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0k7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLFNBQVNKLEtBQUtLLE1BQU07Z0NBQ3BCQyxVQUFVO29DQUNSZCwrREFBWUEsQ0FBQ1EsS0FBS08sRUFBRTtvQ0FDcEJDLFNBQVMsQ0FBQ0M7d0NBQ1IsT0FBT0EsVUFBVVYsR0FBRyxDQUFDLENBQUNXLEtBQ3BCQSxHQUFHSCxFQUFFLEtBQUtQLEtBQUtPLEVBQUUsR0FBRztnREFBRSxHQUFHRyxFQUFFO2dEQUFFTCxRQUFRLENBQUNLLEdBQUdMLE1BQU07NENBQUMsSUFBSUs7b0NBRXhEO2dDQUNGOzs7Ozs7MENBRUYsOERBQUNDO2dDQUFFYixXQUFVOzBDQUFxQkUsS0FBS0EsSUFBSTs7Ozs7Ozs7Ozs7O2tDQUU3Qyw4REFBQ1Qsb0ZBQVFBO3dCQUNQTyxXQUFVO3dCQUNWYyxTQUFTOzRCQUNQbkIsNERBQVVBLENBQUNPLEtBQUtPLEVBQUU7NEJBQ2xCQyxTQUFTLENBQUNDO2dDQUNSLE9BQU9BLFVBQVVJLE1BQU0sQ0FBQyxDQUFDSCxLQUFZQSxHQUFHSCxFQUFFLEtBQUtQLEtBQUtPLEVBQUU7NEJBQ3hEO3dCQUNGOzs7Ozs7O2VBdkJNTjs7Ozs7UUEyQmQ7Ozs7OztBQUdOO0dBckNNTjs7UUFDY0QsNERBQWdCQTs7O0tBRDlCQztBQXVDTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9kaXNwbGF5VG9kb3MudHN4PzNjMDYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNZERlbGV0ZSB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcbmltcG9ydCB7IGZldGNoRGF0YSB9IGZyb20gJy4uL2FwaS9mZXRjaC10b2Rvcyc7XG5pbXBvcnQgeyBjaGFuZ2VTdGF0dXMgfSBmcm9tICcuLi9hcGkvY2hhbmdlU3RhdHVzJztcbmltcG9ydCB7IGRlbGV0ZVRvZG8gfSBmcm9tICcuLi9hcGkvZGVsZXRlLXRvZG8nO1xuaW1wb3J0IHsgdXNlR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvc3RvcmUnO1xuXG5jb25zdCBEaXNwbGF5VG9kb3MgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdG9kb3MgfSA9IHVzZUdsb2JhbENvbnRleHQoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctWzUwJV0gcm91bmRlZC1tZCBiZy13aGl0ZSBtdC0zIGZsZXggZmxleC1jb2wgcHktMyBcIj5cbiAgICAgIHt0b2Rvcy5tYXAoKHRvZG86IGFueSwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZsZXggIGp1c3RpZnktYmV0d2VlbiBteC0yIG10LTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bOTAlXSBmbGV4XCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dG9kby5pc0RvbmV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNoYW5nZVN0YXR1cyh0b2RvLmlkKTtcbiAgICAgICAgICAgICAgICAgIHNldFRvZG9zKChwcmV2VG9kb3M6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldlRvZG9zLm1hcCgodGQ6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICB0ZC5pZCA9PT0gdG9kby5pZCA/IHsgLi4udGQsIGlzRG9uZTogIXRkLmlzRG9uZSB9IDogdGQsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIG1sLTIgIFwiPnt0b2RvLnRvZG99PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8TWREZWxldGVcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1bMjBweF0gY3Vyc29yLXBvaW50ZXIgdGV4dC1yZWQtNTAwIGhvdmVyOnRleHQtcmVkLTQwMFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBkZWxldGVUb2RvKHRvZG8uaWQpO1xuICAgICAgICAgICAgICAgIHNldFRvZG9zKChwcmV2VG9kb3M6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXZUb2Rvcy5maWx0ZXIoKHRkOiBhbnkpID0+IHRkLmlkICE9PSB0b2RvLmlkKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERpc3BsYXlUb2RvcztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk1kRGVsZXRlIiwiY2hhbmdlU3RhdHVzIiwiZGVsZXRlVG9kbyIsInVzZUdsb2JhbENvbnRleHQiLCJEaXNwbGF5VG9kb3MiLCJ0b2RvcyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInRvZG8iLCJpbmRleCIsImlucHV0IiwidHlwZSIsImNoZWNrZWQiLCJpc0RvbmUiLCJvbkNoYW5nZSIsImlkIiwic2V0VG9kb3MiLCJwcmV2VG9kb3MiLCJ0ZCIsInAiLCJvbkNsaWNrIiwiZmlsdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/displayTodos.tsx\n"));

/***/ })

});