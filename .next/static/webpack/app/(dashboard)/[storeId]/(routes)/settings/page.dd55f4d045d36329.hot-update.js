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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SettingsForm: function() { return /* binding */ SettingsForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! zod */ \"(app-pages-browser)/./node_modules/zod/lib/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Trash!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/trash.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var _components_ui_heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/heading */ \"(app-pages-browser)/./components/ui/heading.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _components_ui_separator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/separator */ \"(app-pages-browser)/./components/ui/separator.tsx\");\n/* harmony import */ var _components_ui_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/form */ \"(app-pages-browser)/./components/ui/form.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* __next_internal_client_entry_do_not_use__ SettingsForm auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst formSchema = zod__WEBPACK_IMPORTED_MODULE_8__.object({\n    name: zod__WEBPACK_IMPORTED_MODULE_8__.string().min(1)\n});\nconst SettingsForm = (param)=>{\n    let { initialData } = param;\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__.zodResolver)(formSchema),\n        defaultValues: initialData\n    });\n    const onSubmit = async (data)=>{\n        console.log(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_heading__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                        title: \"Settings\",\n                        description: \"Manage Store preference\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ACER\\\\OneDrive\\\\Desktop\\\\creation\\\\ecommerce-admin\\\\app\\\\(dashboard)\\\\[storeId]\\\\(routes)\\\\settings\\\\components\\\\settings-form.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        variant: \"destructive\",\n                        size: \"icon\",\n                        onClick: ()=>{},\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            className: \"h-4 w-4\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ACER\\\\OneDrive\\\\Desktop\\\\creation\\\\ecommerce-admin\\\\app\\\\(dashboard)\\\\[storeId]\\\\(routes)\\\\settings\\\\components\\\\settings-form.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ACER\\\\OneDrive\\\\Desktop\\\\creation\\\\ecommerce-admin\\\\app\\\\(dashboard)\\\\[storeId]\\\\(routes)\\\\settings\\\\components\\\\settings-form.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ACER\\\\OneDrive\\\\Desktop\\\\creation\\\\ecommerce-admin\\\\app\\\\(dashboard)\\\\[storeId]\\\\(routes)\\\\settings\\\\components\\\\settings-form.tsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_separator__WEBPACK_IMPORTED_MODULE_5__.Separator, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ACER\\\\OneDrive\\\\Desktop\\\\creation\\\\ecommerce-admin\\\\app\\\\(dashboard)\\\\[storeId]\\\\(routes)\\\\settings\\\\components\\\\settings-form.tsx\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                ...form,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: form.handleSubmit(onSubmit),\n                    className: \"space-y-8 w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-3 gap-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_6__.FormField, {\n                            control: form.control,\n                            name: \"name\",\n                            render: (param)=>/*#__PURE__*/ {\n                                let { field } = param;\n                                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_6__.FormItem, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_6__.FormLabel, {\n                                            children: \"Name\"\n                                        }, void 0, false, void 0, void 0),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_6__.FormControl, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                                disabled: loading,\n                                                placeholder: \"Store name\"\n                                            }, void 0, false, void 0, void 0)\n                                        }, void 0, false, void 0, void 0)\n                                    ]\n                                }, void 0, true, void 0, void 0);\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ACER\\\\OneDrive\\\\Desktop\\\\creation\\\\ecommerce-admin\\\\app\\\\(dashboard)\\\\[storeId]\\\\(routes)\\\\settings\\\\components\\\\settings-form.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ACER\\\\OneDrive\\\\Desktop\\\\creation\\\\ecommerce-admin\\\\app\\\\(dashboard)\\\\[storeId]\\\\(routes)\\\\settings\\\\components\\\\settings-form.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ACER\\\\OneDrive\\\\Desktop\\\\creation\\\\ecommerce-admin\\\\app\\\\(dashboard)\\\\[storeId]\\\\(routes)\\\\settings\\\\components\\\\settings-form.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ACER\\\\OneDrive\\\\Desktop\\\\creation\\\\ecommerce-admin\\\\app\\\\(dashboard)\\\\[storeId]\\\\(routes)\\\\settings\\\\components\\\\settings-form.tsx\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(SettingsForm, \"PggdlqfITXzHkwVeA7rcv3NYPtc=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm\n    ];\n});\n_c = SettingsForm;\nvar _c;\n$RefreshReg$(_c, \"SettingsForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oZGFzaGJvYXJkKS9bc3RvcmVJZF0vKHJvdXRlcykvc2V0dGluZ3MvY29tcG9uZW50cy9zZXR0aW5ncy1mb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeUI7QUFDUTtBQUNJO0FBQ0s7QUFFWTtBQUdKO0FBQ0Y7QUFDTTtBQU94QjtBQUNnQjtBQVE5QyxNQUFNYyxhQUFhZCx1Q0FBUSxDQUFDO0lBQ3hCZ0IsTUFBTWhCLHVDQUFRLEdBQUdrQixHQUFHLENBQUM7QUFDekI7QUFJTyxNQUFNQyxlQUE0QztRQUFDLEVBQ3REQyxXQUFXLEVBQ2Q7O0lBRUcsTUFBTSxDQUFDQyxNQUFNQyxRQUFTLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUNsQyxNQUFNLENBQUNzQixTQUFTQyxXQUFZLEdBQUd2QiwrQ0FBUUEsQ0FBQztJQUV4QyxNQUFNd0IsT0FBT3RCLHdEQUFPQSxDQUFxQjtRQUNyQ3VCLFVBQVV0QixvRUFBV0EsQ0FBQ1U7UUFDdEJhLGVBQWVQO0lBQ25CO0lBRUEsTUFBTVEsV0FBVyxPQUFPQztRQUNwQkMsUUFBUUMsR0FBRyxDQUFDRjtJQUNoQjtJQUVBLHFCQUNJOzswQkFDSSw4REFBQ0c7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDNUIsMkRBQU9BO3dCQUNSNkIsT0FBTTt3QkFDTkMsYUFBYTs7Ozs7O2tDQUViLDhEQUFDN0IseURBQU1BO3dCQUNIOEIsU0FBVTt3QkFDVkMsTUFBSzt3QkFDTEMsU0FBUyxLQUFLO2tDQUVkLDRFQUFDcEMsa0ZBQUtBOzRCQUFDK0IsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3pCLDhEQUFDMUIsK0RBQVNBOzs7OzswQkFDViw4REFBQ0MscURBQUlBO2dCQUFFLEdBQUdpQixJQUFJOzBCQUNWLDRFQUFDQTtvQkFBS0csVUFBVUgsS0FBS2MsWUFBWSxDQUFDWDtvQkFBV0ssV0FBVTs4QkFDbkQsNEVBQUNEO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDdkIsMERBQVNBOzRCQUNWOEIsU0FBU2YsS0FBS2UsT0FBTzs0QkFDckJ4QixNQUFLOzRCQUNMeUIsUUFBUTtvQ0FBQyxFQUFFQyxLQUFLLEVBQUU7dUNBQ2QsOERBQUMvQix5REFBUUE7O3NEQUNMLDhEQUFDQywwREFBU0E7c0RBQUM7O3NEQUNYLDhEQUFDSCw0REFBV0E7c0RBQ1IsNEVBQUNJLHVEQUFLQTtnREFBQzhCLFVBQVVwQjtnREFBU3FCLGFBQVk7Ozs7OzRCQUVwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdEMsRUFBRTtHQXBEV3pCOztRQU9JaEIsb0RBQU9BOzs7S0FQWGdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8oZGFzaGJvYXJkKS9bc3RvcmVJZF0vKHJvdXRlcykvc2V0dGluZ3MvY29tcG9uZW50cy9zZXR0aW5ncy1mb3JtLnRzeD9lOTdmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0ICogYXMgeiBmcm9tIFwiem9kXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRyYXNoIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5pbXBvcnQgeyB6b2RSZXNvbHZlciB9IGZyb20gXCJAaG9va2Zvcm0vcmVzb2x2ZXJzL3pvZFwiO1xyXG5cclxuXHJcbmltcG9ydCB7IEhlYWRpbmcgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2hlYWRpbmdcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcclxuaW1wb3J0IHsgU2VwYXJhdG9yIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9zZXBhcmF0b3JcIjtcclxuaW1wb3J0IHsgXHJcbiAgICBGb3JtLCBcclxuICAgIEZvcm1Db250cm9sLCBcclxuICAgIEZvcm1GaWVsZCwgXHJcbiAgICBGb3JtSXRlbSwgXHJcbiAgICBGb3JtTGFiZWwgXHJcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9mb3JtXCI7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xyXG5cclxuXHJcblxyXG5pbnRlcmZhY2UgU2V0dGluZ3NGb3JtUHJvcHMge1xyXG4gICAgaW5pdGlhbERhdGE6IFN0b3JlO1xyXG59XHJcblxyXG5jb25zdCBmb3JtU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gICAgbmFtZTogei5zdHJpbmcoKS5taW4oMSksXHJcbn0pO1xyXG5cclxudHlwZSBTZXR0aW5nc0Zvcm1WYWx1ZXMgPSB6LmluZmVyPHR5cGVvZiBmb3JtU2NoZW1hPjtcclxuXHJcbmV4cG9ydCBjb25zdCBTZXR0aW5nc0Zvcm06IFJlYWN0LkZDPFNldHRpbmdzRm9ybVByb3BzPiA9ICh7XHJcbiAgICBpbml0aWFsRGF0YVxyXG59KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW4gXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgZm9ybSA9IHVzZUZvcm08U2V0dGluZ3NGb3JtVmFsdWVzPih7XHJcbiAgICAgICAgcmVzb2x2ZXI6IHpvZFJlc29sdmVyKGZvcm1TY2hlbWEpLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZXM6IGluaXRpYWxEYXRhXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChkYXRhOiBTZXR0aW5nc0Zvcm1WYWx1ZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRpbmdcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiU2V0dGluZ3NcIlxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249IFwiTWFuYWdlIFN0b3JlIHByZWZlcmVuY2VcIiBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudCA9IFwiZGVzdHJ1Y3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJpY29uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+e319XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmFzaCBjbGFzc05hbWU9XCJoLTQgdy00XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8U2VwYXJhdG9yIC8+XHJcbiAgICAgICAgICAgIDxGb3JtIHsuLi5mb3JtfT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtLmhhbmRsZVN1Ym1pdChvblN1Ym1pdCl9IGNsYXNzTmFtZT1cInNwYWNlLXktOCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Zm9ybS5jb250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+TmFtZTwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGRpc2FibGVkPXtsb2FkaW5nfSBwbGFjZWhvbGRlcj1cIlN0b3JlIG5hbWVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07Il0sIm5hbWVzIjpbInoiLCJ1c2VTdGF0ZSIsIlRyYXNoIiwidXNlRm9ybSIsInpvZFJlc29sdmVyIiwiSGVhZGluZyIsIkJ1dHRvbiIsIlNlcGFyYXRvciIsIkZvcm0iLCJGb3JtQ29udHJvbCIsIkZvcm1GaWVsZCIsIkZvcm1JdGVtIiwiRm9ybUxhYmVsIiwiSW5wdXQiLCJmb3JtU2NoZW1hIiwib2JqZWN0IiwibmFtZSIsInN0cmluZyIsIm1pbiIsIlNldHRpbmdzRm9ybSIsImluaXRpYWxEYXRhIiwib3BlbiIsInNldE9wZW4iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZvcm0iLCJyZXNvbHZlciIsImRlZmF1bHRWYWx1ZXMiLCJvblN1Ym1pdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInZhcmlhbnQiLCJzaXplIiwib25DbGljayIsImhhbmRsZVN1Ym1pdCIsImNvbnRyb2wiLCJyZW5kZXIiLCJmaWVsZCIsImRpc2FibGVkIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(dashboard)/[storeId]/(routes)/settings/components/settings-form.tsx\n"));

/***/ })

});