webpackHotUpdate_N_E("pages/projects",{

/***/ "./components/ProjectCard.tsx":
/*!************************************!*\
  !*** ./components/ProjectCard.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\HP\\my-portfolio\\Dev-Portfolio-Next-X\\components\\ProjectCard.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var ProjectCard = function ProjectCard(_ref) {
  _s();

  var _ref$project = _ref.project,
      name = _ref$project.name,
      image_path = _ref$project.image_path,
      category = _ref$project.category,
      deployed_url = _ref$project.deployed_url,
      description = _ref$project.description,
      github_url = _ref$project.github_url,
      key_techs = _ref$project.key_techs;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showDetail = _useState[0],
      setShowDetail = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
      src: image_path,
      alt: name,
      className: "cursor-pointer",
      onClick: function onClick() {
        return setShowDetail(true);
      },
      layout: "responsive",
      height: "150",
      width: "300"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "my-2 text-center",
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this), showDetail && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
          src: image_path,
          alt: name,
          layout: "responsive",
          height: "150",
          width: "300"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex justify-center my-4 space-x-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: deployed_url,
            className: "flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__["AiFillProject"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 17
            }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Project"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 35
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "mb-3 text-xl font-medium md:text-2xl",
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "mb-3 font-medium",
          children: description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-wrap mt-5 space-x-2 text-sm tracking-wider",
          children: key_techs.map(function (tech) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm",
              children: tech
            }, tech, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function onClick() {
          return setShowDetail(false);
        },
        className: "absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdClose"], {
          size: 30
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, _this);
};

_s(ProjectCard, "MxWusfjpFENPY3G8IHM7Kyqf1uI=");

_c = ProjectCard;
/* harmony default export */ __webpack_exports__["default"] = (ProjectCard);

var _c;

$RefreshReg$(_c, "ProjectCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC50c3giXSwibmFtZXMiOlsiUHJvamVjdENhcmQiLCJwcm9qZWN0IiwibmFtZSIsImltYWdlX3BhdGgiLCJjYXRlZ29yeSIsImRlcGxveWVkX3VybCIsImRlc2NyaXB0aW9uIiwiZ2l0aHViX3VybCIsImtleV90ZWNocyIsInVzZVN0YXRlIiwic2hvd0RldGFpbCIsInNldFNob3dEZXRhaWwiLCJtYXAiLCJ0ZWNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7O0FBRUEsSUFBTUEsV0FFSixHQUFHLFNBRkNBLFdBRUQsT0FVQztBQUFBOztBQUFBLDBCQVRKQyxPQVNJO0FBQUEsTUFSRkMsSUFRRSxnQkFSRkEsSUFRRTtBQUFBLE1BUEZDLFVBT0UsZ0JBUEZBLFVBT0U7QUFBQSxNQU5GQyxRQU1FLGdCQU5GQSxRQU1FO0FBQUEsTUFMRkMsWUFLRSxnQkFMRkEsWUFLRTtBQUFBLE1BSkZDLFdBSUUsZ0JBSkZBLFdBSUU7QUFBQSxNQUhGQyxVQUdFLGdCQUhGQSxVQUdFO0FBQUEsTUFGRkMsU0FFRSxnQkFGRkEsU0FFRTs7QUFBQSxrQkFDZ0NDLHNEQUFRLENBQUMsS0FBRCxDQUR4QztBQUFBLE1BQ0dDLFVBREg7QUFBQSxNQUNlQyxhQURmOztBQUdKLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsaURBQUQ7QUFDRSxTQUFHLEVBQUVSLFVBRFA7QUFFRSxTQUFHLEVBQUVELElBRlA7QUFHRSxlQUFTLEVBQUMsZ0JBSFo7QUFJRSxhQUFPLEVBQUU7QUFBQSxlQUFNUyxhQUFhLENBQUMsSUFBRCxDQUFuQjtBQUFBLE9BSlg7QUFLRSxZQUFNLEVBQUMsWUFMVDtBQU1FLFlBQU0sRUFBQyxLQU5UO0FBT0UsV0FBSyxFQUFDO0FBUFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBZ0JFO0FBQUcsZUFBUyxFQUFDLGtCQUFiO0FBQUEsZ0JBQWlDVDtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJGLEVBa0JHUSxVQUFVLGlCQUNUO0FBQUssZUFBUyxFQUFDLG1JQUFmO0FBQUEsOEJBQ0U7QUFBQSxnQ0FHRSxxRUFBQyxpREFBRDtBQUNFLGFBQUcsRUFBRVAsVUFEUDtBQUVFLGFBQUcsRUFBRUQsSUFGUDtBQUdFLGdCQUFNLEVBQUMsWUFIVDtBQUlFLGdCQUFNLEVBQUMsS0FKVDtBQUtFLGVBQUssRUFBQztBQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFVRTtBQUFLLG1CQUFTLEVBQUMsb0NBQWY7QUFBQSxpQ0FFRTtBQUNFLGdCQUFJLEVBQUVHLFlBRFI7QUFFRSxxQkFBUyxFQUFDLDRFQUZaO0FBQUEsb0NBSUUscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRixvQkFJb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFzQkU7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUMsc0NBQWQ7QUFBQSxvQkFBc0RIO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFJLG1CQUFTLEVBQUMsa0JBQWQ7QUFBQSxvQkFBa0NJO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFJRTtBQUFLLG1CQUFTLEVBQUMsc0RBQWY7QUFBQSxvQkFDR0UsU0FBUyxDQUFDSSxHQUFWLENBQWMsVUFBQ0MsSUFBRDtBQUFBLGdDQUNiO0FBRUUsdUJBQVMsRUFBQyx1REFGWjtBQUFBLHdCQUlHQTtBQUpILGVBQ09BLElBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEYTtBQUFBLFdBQWQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRCRixlQXNDRTtBQUNFLGVBQU8sRUFBRTtBQUFBLGlCQUFNRixhQUFhLENBQUMsS0FBRCxDQUFuQjtBQUFBLFNBRFg7QUFFRSxpQkFBUyxFQUFDLHlGQUZaO0FBQUEsK0JBSUUscUVBQUMsc0RBQUQ7QUFBUyxjQUFJLEVBQUU7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvRUQsQ0FuRkQ7O0dBQU1YLFc7O0tBQUFBLFc7QUFxRlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzLjcwOTQyYjM5ZDNkMDhlZmY4MTAyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGdW5jdGlvbkNvbXBvbmVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQWlGaWxsR2l0aHViLCBBaUZpbGxQcm9qZWN0IH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcbmltcG9ydCB7IE1kQ2xvc2UgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuaW1wb3J0IHsgSVByb2plY3QgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuY29uc3QgUHJvamVjdENhcmQ6IEZ1bmN0aW9uQ29tcG9uZW50PHtcclxuICBwcm9qZWN0OiBJUHJvamVjdDtcclxufT4gPSAoe1xyXG4gIHByb2plY3Q6IHtcclxuICAgIG5hbWUsXHJcbiAgICBpbWFnZV9wYXRoLFxyXG4gICAgY2F0ZWdvcnksXHJcbiAgICBkZXBsb3llZF91cmwsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIGdpdGh1Yl91cmwsXHJcbiAgICBrZXlfdGVjaHMsXHJcbiAgfSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtzaG93RGV0YWlsLCBzZXRTaG93RGV0YWlsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxJbWFnZVxyXG4gICAgICAgIHNyYz17aW1hZ2VfcGF0aH1cclxuICAgICAgICBhbHQ9e25hbWV9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dEZXRhaWwodHJ1ZSl9XHJcbiAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMTUwXCJcclxuICAgICAgICB3aWR0aD1cIjMwMFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIHsvKiA8aW1nXHJcbiAgICAgICAgc3JjPXtpbWFnZV9wYXRofVxyXG4gICAgICAgIGFsdD17bmFtZX1cclxuICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0RldGFpbCh0cnVlKX1cclxuICAgICAgLz4gKi99XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTIgdGV4dC1jZW50ZXJcIj57bmFtZX08L3A+XHJcblxyXG4gICAgICB7c2hvd0RldGFpbCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgei0xMCBncmlkIHctZnVsbCBoLWF1dG8gcC0yIHRleHQtYmxhY2sgYmctZ3JheS0xMDAgbWQ6Z3JpZC1jb2xzLTIgZ2FwLXgtMTIgZGFyazp0ZXh0LXdoaXRlIGRhcms6YmctZGFyay0xMDBcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17aW1hZ2VfcGF0aH0gYWx0PXtuYW1lfSAvPiAqL31cclxuXHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17aW1hZ2VfcGF0aH1cclxuICAgICAgICAgICAgICBhbHQ9e25hbWV9XHJcbiAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTUwXCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjMwMFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBteS00IHNwYWNlLXgtM1wiPlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9e2RlcGxveWVkX3VybH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHB4LTQgcHktMiBzcGFjZS14LTMgdGV4dC1sZyBiZy1ncmF5LTIwMCBkYXJrOmJnLWRhcmstMjAwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QWlGaWxsUHJvamVjdCAvPiA8c3Bhbj5Qcm9qZWN0PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItMyB0ZXh0LXhsIGZvbnQtbWVkaXVtIG1kOnRleHQtMnhsXCI+e25hbWV9PC9oMj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTMgZm9udC1tZWRpdW1cIj57ZGVzY3JpcHRpb259PC9oMz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgbXQtNSBzcGFjZS14LTIgdGV4dC1zbSB0cmFja2luZy13aWRlclwiPlxyXG4gICAgICAgICAgICAgIHtrZXlfdGVjaHMubWFwKCh0ZWNoKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICBrZXk9e3RlY2h9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTIgcHktMSBteS0xIGJnLWdyYXktMjAwIGRhcms6YmctZGFyay0yMDAgcm91bmRlLXNtXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3RlY2h9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93RGV0YWlsKGZhbHNlKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcC0xIGJnLWdyYXktMjAwIHJvdW5kZWQtZnVsbCB0b3AtMyByaWdodC0zIGZvY3VzOm91dGxpbmUtbm9uZSBkYXJrOmJnLWRhcmstMjAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE1kQ2xvc2Ugc2l6ZT17MzB9IC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0Q2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==