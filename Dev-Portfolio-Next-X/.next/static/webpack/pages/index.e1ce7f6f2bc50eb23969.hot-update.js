webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ServiceCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ServiceCard */ "./components/ServiceCard.tsx");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ "./data.ts");


var _jsxFileName = "C:\\Users\\HP\\my-portfolio\\Dev-Portfolio-Next-X\\pages\\index.tsx",
    _this = undefined;




var About = function About() {
  // console.log(services);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex flex-col flex-grow px-6 pt-1 ",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
      className: "my-3 text-base font-medium",
      children: "I am a passionate frontend web and mobile app developer with over 4 years of experience, committed to creating visually stunning and user-friendly websites and applications. With expertise in HTML, CSS, JavaScript, Reactjs, Nextjs and React Native, I deliver high-quality results by staying updated with the latest design trends and technologies. I collaborate closely with designers, ensuring aesthetic alignment, accessibility, and seamless user experiences. My focus on clean and maintainable code, rigorous testing, and optimization guarantees top-notch performance on various devices and platforms. My goal is to create exceptional digital solutions that cater to clients and end-users alike."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 ",
      style: {
        marginLeft: "-1.5rem",
        marginRight: "-1.5rem"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        className: "my-3 text-xl font-semibold tracking-wide",
        children: "What I am doing"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "grid gap-6 my-3 md:grid-cols-2",
        children: _data__WEBPACK_IMPORTED_MODULE_2__["services"].map(function (service) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 ",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ServiceCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
              service: service
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, _this)
          }, service.title, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
}; //!called every time  the page refreshed
// export const getServerSideProps: GetServerSideProps = async (
//    context: GetServerSidePropsContext
// ) => {
//    const res = await fetch('http://localhost:3000/api/services')
//    const data = await res.json()
//    console.log(data)
//    return { props: { services: data.services } }
// }
//!called only during the build of the project
//? make sure the server(localhost:3000)[this will receive the request during build] is running on a terminal during the build
//? also need to change the localhost during the deployment | see the todo
// https://aude53.medium.com/set-environment-variables-with-next-js-and-vercel-e544c0460a48
// export const getStaticProps: GetStaticProps = async (
//    context: GetStaticPropsContext
// ) => {
//    // console.log(context);
//    const res = await fetch('http://localhost:3000/api/services')
//    const { services } = await res.json()
//    console.log({ services })
//    return { props: { services: services } }
// }


_c = About;
/* harmony default export */ __webpack_exports__["default"] = (About);

var _c;

$RefreshReg$(_c, "About");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkFib3V0IiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0Iiwic2VydmljZXMiLCJtYXAiLCJzZXJ2aWNlIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7QUFDQTs7QUFHQSxJQUFNQSxLQUFlLEdBQUcsU0FBbEJBLEtBQWtCLEdBQU07QUFDNUI7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxvQ0FBZjtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLDRCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRTtBQUNFLGVBQVMsRUFBQyxrREFEWjtBQUVFLFdBQUssRUFBRTtBQUFFQyxrQkFBVSxFQUFFLFNBQWQ7QUFBeUJDLG1CQUFXLEVBQUU7QUFBdEMsT0FGVDtBQUFBLDhCQUlFO0FBQUksaUJBQVMsRUFBQywwQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBUUU7QUFBSyxpQkFBUyxFQUFDLGdDQUFmO0FBQUEsa0JBRUdDLDhDQUFRLENBQUNDLEdBQVQsQ0FBYSxVQUFDQyxPQUFEO0FBQUEsOEJBQ1o7QUFDRSxxQkFBUyxFQUFDLHVFQURaO0FBQUEsbUNBSUUscUVBQUMsK0RBQUQ7QUFBYSxxQkFBTyxFQUFFQTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkYsYUFFT0EsT0FBTyxDQUFDQyxLQUZmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFk7QUFBQSxTQUFiO0FBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkJELENBOUJELEMsQ0FnQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztLQXhETU4sSztBQTBEU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTFjZTdmNmYyYmM1MGViMjM5NjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgR2V0U2VydmVyU2lkZVByb3BzLFxyXG4gIEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHQsXHJcbiAgR2V0U3RhdGljUHJvcHMsXHJcbiAgR2V0U3RhdGljUHJvcHNDb250ZXh0LFxyXG4gIE5leHRQYWdlLFxyXG59IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBTZXJ2aWNlQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZXJ2aWNlQ2FyZFwiO1xyXG5pbXBvcnQgeyBzZXJ2aWNlcyB9IGZyb20gXCIuLi9kYXRhXCI7XHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuXHJcbmNvbnN0IEFib3V0OiBOZXh0UGFnZSA9ICgpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhzZXJ2aWNlcyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZmxleC1ncm93IHB4LTYgcHQtMSBcIj5cclxuICAgICAgPGg2IGNsYXNzTmFtZT1cIm15LTMgdGV4dC1iYXNlIGZvbnQtbWVkaXVtXCI+XHJcbiAgICAgIEkgYW0gYSBwYXNzaW9uYXRlIGZyb250ZW5kIHdlYiBhbmQgbW9iaWxlIGFwcCBkZXZlbG9wZXIgd2l0aCBvdmVyIDQgeWVhcnMgb2YgZXhwZXJpZW5jZSwgY29tbWl0dGVkIHRvIGNyZWF0aW5nIHZpc3VhbGx5IHN0dW5uaW5nIGFuZCB1c2VyLWZyaWVuZGx5IHdlYnNpdGVzIGFuZCBhcHBsaWNhdGlvbnMuIFdpdGggZXhwZXJ0aXNlIGluIEhUTUwsIENTUywgSmF2YVNjcmlwdCwgUmVhY3RqcywgTmV4dGpzIGFuZCBSZWFjdCBOYXRpdmUsIEkgZGVsaXZlciBoaWdoLXF1YWxpdHkgcmVzdWx0cyBieSBzdGF5aW5nIHVwZGF0ZWQgd2l0aCB0aGUgbGF0ZXN0IGRlc2lnbiB0cmVuZHMgYW5kIHRlY2hub2xvZ2llcy4gSSBjb2xsYWJvcmF0ZSBjbG9zZWx5IHdpdGggZGVzaWduZXJzLCBlbnN1cmluZyBhZXN0aGV0aWMgYWxpZ25tZW50LCBhY2Nlc3NpYmlsaXR5LCBhbmQgc2VhbWxlc3MgdXNlciBleHBlcmllbmNlcy4gTXkgZm9jdXMgb24gY2xlYW4gYW5kIG1haW50YWluYWJsZSBjb2RlLCByaWdvcm91cyB0ZXN0aW5nLCBhbmQgb3B0aW1pemF0aW9uIGd1YXJhbnRlZXMgdG9wLW5vdGNoIHBlcmZvcm1hbmNlIG9uIHZhcmlvdXMgZGV2aWNlcyBhbmQgcGxhdGZvcm1zLiBNeSBnb2FsIGlzIHRvIGNyZWF0ZSBleGNlcHRpb25hbCBkaWdpdGFsIHNvbHV0aW9ucyB0aGF0IGNhdGVyIHRvIGNsaWVudHMgYW5kIGVuZC11c2VycyBhbGlrZS5cclxuICAgICAgPC9oNj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBwLTQgbXQtNSBiZy1ncmF5LTQwMCBkYXJrOmJnLWRhcmstMTAwIFwiXHJcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCItMS41cmVtXCIsIG1hcmdpblJpZ2h0OiBcIi0xLjVyZW1cIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm15LTMgdGV4dC14bCBmb250LXNlbWlib2xkIHRyYWNraW5nLXdpZGVcIj5cclxuICAgICAgICAgIFdoYXQgSSBhbSBkb2luZ1xyXG4gICAgICAgIDwvaDQ+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNiBteS0zIG1kOmdyaWQtY29scy0yXCI+XHJcbiAgICAgICAgICB7LyogY2hpbGRyZW4ncyBpbml0aWFsIGFuZCBhbmltYXRlIHByb3BlcnR5IHNob3VsZCBiZSBzYW1lIGFzIHRoZSBwYXJlbnQgZHVyaW5nIGEgc3RhZ2dlciBlZmZlY3QgICovfVxyXG4gICAgICAgICAge3NlcnZpY2VzLm1hcCgoc2VydmljZSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBwLTIgYmctZ3JheS0yMDAgcm91bmRlZC1sZyBkYXJrOmJnLWRhcmstMjAwIG1kOmNvbC1zcGFuLTEgXCJcclxuICAgICAgICAgICAgICBrZXk9e3NlcnZpY2UudGl0bGV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8U2VydmljZUNhcmQgc2VydmljZT17c2VydmljZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuLy8hY2FsbGVkIGV2ZXJ5IHRpbWUgIHRoZSBwYWdlIHJlZnJlc2hlZFxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoXHJcbi8vICAgIGNvbnRleHQ6IEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHRcclxuLy8gKSA9PiB7XHJcbi8vICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3NlcnZpY2VzJylcclxuLy8gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuLy8gICAgY29uc29sZS5sb2coZGF0YSlcclxuLy8gICAgcmV0dXJuIHsgcHJvcHM6IHsgc2VydmljZXM6IGRhdGEuc2VydmljZXMgfSB9XHJcbi8vIH1cclxuXHJcbi8vIWNhbGxlZCBvbmx5IGR1cmluZyB0aGUgYnVpbGQgb2YgdGhlIHByb2plY3RcclxuLy8/IG1ha2Ugc3VyZSB0aGUgc2VydmVyKGxvY2FsaG9zdDozMDAwKVt0aGlzIHdpbGwgcmVjZWl2ZSB0aGUgcmVxdWVzdCBkdXJpbmcgYnVpbGRdIGlzIHJ1bm5pbmcgb24gYSB0ZXJtaW5hbCBkdXJpbmcgdGhlIGJ1aWxkXHJcbi8vPyBhbHNvIG5lZWQgdG8gY2hhbmdlIHRoZSBsb2NhbGhvc3QgZHVyaW5nIHRoZSBkZXBsb3ltZW50IHwgc2VlIHRoZSB0b2RvXHJcbi8vIGh0dHBzOi8vYXVkZTUzLm1lZGl1bS5jb20vc2V0LWVudmlyb25tZW50LXZhcmlhYmxlcy13aXRoLW5leHQtanMtYW5kLXZlcmNlbC1lNTQ0YzA0NjBhNDhcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoXHJcbi8vICAgIGNvbnRleHQ6IEdldFN0YXRpY1Byb3BzQ29udGV4dFxyXG4vLyApID0+IHtcclxuLy8gICAgLy8gY29uc29sZS5sb2coY29udGV4dCk7XHJcblxyXG4vLyAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zZXJ2aWNlcycpXHJcbi8vICAgIGNvbnN0IHsgc2VydmljZXMgfSA9IGF3YWl0IHJlcy5qc29uKClcclxuLy8gICAgY29uc29sZS5sb2coeyBzZXJ2aWNlcyB9KVxyXG4vLyAgICByZXR1cm4geyBwcm9wczogeyBzZXJ2aWNlczogc2VydmljZXMgfSB9XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9