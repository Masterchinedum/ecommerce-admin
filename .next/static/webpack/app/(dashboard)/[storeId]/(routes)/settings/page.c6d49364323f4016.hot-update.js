"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dashboard)/[storeId]/(routes)/settings/page",{

/***/ "(app-pages-browser)/./app/(dashboard)/[storeId]/(routes)/settings/components/settings-form.tsx":
/*!**********************************************************************************!*\
  !*** ./app/(dashboard)/[storeId]/(routes)/settings/components/settings-form.tsx ***!
  \**********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SettingsForm: function() { return /* binding */ SettingsForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! zod */ \"(app-pages-browser)/./node_modules/zod/lib/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Trash!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/trash.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var _components_ui_heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/heading */ \"(app-pages-browser)/./components/ui/heading.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _components_ui_separator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/separator */ \"(app-pages-browser)/./components/ui/separator.tsx\");\n/* __next_internal_client_entry_do_not_use__ SettingsForm auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst formSchema = zod__WEBPACK_IMPORTED_MODULE_6__.object({\n    name: zod__WEBPACK_IMPORTED_MODULE_6__.string().min(1)\n});\nconst SettingsForm = (param)=>{\n    let { initialData } = param;\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__.zodResolver)(formSchema),\n        defaultValues: initialData\n    });\n    const onSubmit = async (date)=>{\n        console.log(values);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_heading__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                        title: \"Settings\",\n                        description: \"Manage Store preference\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ACER\\\\OneDrive\\\\Desktop\\\\creation\\\\ecommerce-admin\\\\app\\\\(dashboard)\\\\[storeId]\\\\(routes)\\\\settings\\\\components\\\\settings-form.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        variant: \"destructive\",\n                        size: \"icon\",\n                        onClick: ()=>{},\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            className: \"h-4 w-4\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ACER\\\\OneDrive\\\\Desktop\\\\creation\\\\ecommerce-admin\\\\app\\\\(dashboard)\\\\[storeId]\\\\(routes)\\\\settings\\\\components\\\\settings-form.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ACER\\\\OneDrive\\\\Desktop\\\\creation\\\\ecommerce-admin\\\\app\\\\(dashboard)\\\\[storeId]\\\\(routes)\\\\settings\\\\components\\\\settings-form.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ACER\\\\OneDrive\\\\Desktop\\\\creation\\\\ecommerce-admin\\\\app\\\\(dashboard)\\\\[storeId]\\\\(routes)\\\\settings\\\\components\\\\settings-form.tsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_separator__WEBPACK_IMPORTED_MODULE_5__.Separator, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ACER\\\\OneDrive\\\\Desktop\\\\creation\\\\ecommerce-admin\\\\app\\\\(dashboard)\\\\[storeId]\\\\(routes)\\\\settings\\\\components\\\\settings-form.tsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(SettingsForm, \"PggdlqfITXzHkwVeA7rcv3NYPtc=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm\n    ];\n});\n_c = SettingsForm;\nvar _c;\n$RefreshReg$(_c, \"SettingsForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oZGFzaGJvYXJkKS9bc3RvcmVJZF0vKHJvdXRlcykvc2V0dGluZ3MvY29tcG9uZW50cy9zZXR0aW5ncy1mb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRXlCO0FBQ1E7QUFDSTtBQUNLO0FBRVk7QUFHSjtBQUNGO0FBQ007QUFRdEQsTUFBTVEsYUFBYVIsdUNBQVEsQ0FBQztJQUN4QlUsTUFBTVYsdUNBQVEsR0FBR1ksR0FBRyxDQUFDO0FBQ3pCO0FBSU8sTUFBTUMsZUFBNEM7UUFBQyxFQUN0REMsV0FBVyxFQUNkOztJQUVHLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUNsQyxNQUFNLENBQUNnQixTQUFTQyxXQUFZLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUV4QyxNQUFNa0IsT0FBT2hCLHdEQUFPQSxDQUFxQjtRQUNyQ2lCLFVBQVVoQixvRUFBV0EsQ0FBQ0k7UUFDdEJhLGVBQWVQO0lBQ25CO0lBRUEsTUFBTVEsV0FBVyxPQUFPQztRQUNwQkMsUUFBUUMsR0FBRyxDQUFDQztJQUNoQjtJQUVBLHFCQUNJOzswQkFDSSw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDdkIsMkRBQU9BO3dCQUNSd0IsT0FBTTt3QkFDTkMsYUFBYTs7Ozs7O2tDQUViLDhEQUFDeEIseURBQU1BO3dCQUNIeUIsU0FBVTt3QkFDVkMsTUFBSzt3QkFDTEMsU0FBUyxLQUFLO2tDQUVkLDRFQUFDL0IsaUZBQUtBOzRCQUFDMEIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3pCLDhEQUFDckIsK0RBQVNBOzs7Ozs7O0FBR3RCLEVBQUU7R0FsQ1dNOztRQU9JVixvREFBT0E7OztLQVBYVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKGRhc2hib2FyZCkvW3N0b3JlSWRdLyhyb3V0ZXMpL3NldHRpbmdzL2NvbXBvbmVudHMvc2V0dGluZ3MtZm9ybS50c3g/ZTk3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCAqIGFzIHogZnJvbSBcInpvZFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUcmFzaCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IHsgem9kUmVzb2x2ZXIgfSBmcm9tIFwiQGhvb2tmb3JtL3Jlc29sdmVycy96b2RcIjtcclxuXHJcblxyXG5pbXBvcnQgeyBIZWFkaW5nIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9oZWFkaW5nXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XHJcbmltcG9ydCB7IFNlcGFyYXRvciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvc2VwYXJhdG9yXCI7XHJcblxyXG5cclxuXHJcbmludGVyZmFjZSBTZXR0aW5nc0Zvcm1Qcm9wcyB7XHJcbiAgICBpbml0aWFsRGF0YTogU3RvcmU7XHJcbn1cclxuXHJcbmNvbnN0IGZvcm1TY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgICBuYW1lOiB6LnN0cmluZygpLm1pbigxKSxcclxufSk7XHJcblxyXG50eXBlIFNldHRpbmdzRm9ybVZhbHVlcyA9IHouaW5mZXI8dHlwZW9mIGZvcm1TY2hlbWE+O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNldHRpbmdzRm9ybTogUmVhY3QuRkM8U2V0dGluZ3NGb3JtUHJvcHM+ID0gKHtcclxuICAgIGluaXRpYWxEYXRhXHJcbn0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3BlbiBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBmb3JtID0gdXNlRm9ybTxTZXR0aW5nc0Zvcm1WYWx1ZXM+KHtcclxuICAgICAgICByZXNvbHZlcjogem9kUmVzb2x2ZXIoZm9ybVNjaGVtYSksXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlczogaW5pdGlhbERhdGFcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGRhdGU6IFNldHRpbmdzRm9ybVZhbHVlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlcylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZ1xyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJTZXR0aW5nc1wiXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj0gXCJNYW5hZ2UgU3RvcmUgcHJlZmVyZW5jZVwiIFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50ID0gXCJkZXN0cnVjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57fX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYXNoIGNsYXNzTmFtZT1cImgtNCB3LTRcIi8+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxTZXBhcmF0b3IgLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07Il0sIm5hbWVzIjpbInoiLCJ1c2VTdGF0ZSIsIlRyYXNoIiwidXNlRm9ybSIsInpvZFJlc29sdmVyIiwiSGVhZGluZyIsIkJ1dHRvbiIsIlNlcGFyYXRvciIsImZvcm1TY2hlbWEiLCJvYmplY3QiLCJuYW1lIiwic3RyaW5nIiwibWluIiwiU2V0dGluZ3NGb3JtIiwiaW5pdGlhbERhdGEiLCJvcGVuIiwic2V0T3BlbiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZm9ybSIsInJlc29sdmVyIiwiZGVmYXVsdFZhbHVlcyIsIm9uU3VibWl0IiwiZGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidmFyaWFudCIsInNpemUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(dashboard)/[storeId]/(routes)/settings/components/settings-form.tsx\n"));

/***/ })

});