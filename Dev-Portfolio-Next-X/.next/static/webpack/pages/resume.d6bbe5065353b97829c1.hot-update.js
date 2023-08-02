webpackHotUpdate_N_E("pages/resume",{

/***/ "./data.ts":
/*!*****************!*\
  !*** ./data.ts ***!
  \*****************/
/*! exports provided: services, languages, tools, projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "languages", function() { return languages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tools", function() { return tools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projects", function() { return projects; });
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");





var services = [{
  Icon: react_icons_ri__WEBPACK_IMPORTED_MODULE_0__["RiComputerLine"],
  title: "Frontend Development",
  about: "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>,<b>React.js</b>,<b>Next.js</b> and other CSS framework "
}, {
  Icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaServer"],
  title: "Backend  Development",
  about: "A little Knowledge of handling database, server, api using <b>Expressjs</b>,<b>Mysql</b>,<b>MongoDB</b> and <b>Firebase</b>"
}, {
  Icon: react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdDeveloperMode"],
  title: "Mobile App Development",
  about: "designing and implementation of a feature-rich mobile app using <b>React Native</b>, delivering cross-platform compatibility and reducing development time, The app's user-friendly interface and seamless performance and increase in user downloads and positive app store ratings. "
}, {
  Icon: react_icons_ai__WEBPACK_IMPORTED_MODULE_2__["AiOutlineAntDesign"],
  title: "UI/UX designer",
  about: "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> "
}];
var languages = [{
  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCircleFill"],
  name: "Nextjs",
  level: "45"
}, {
  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCircleFill"],
  name: "Java Script",
  level: "90"
}, {
  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCircleFill"],
  name: "React Native",
  level: "80"
}, {
  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCircleFill"],
  name: "React",
  level: "70"
}, {
  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCircleFill"],
  name: "Nodejs",
  level: "80"
}, {
  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCircleFill"],
  name: "Bootstrap",
  level: "80"
}];
var tools = [{
  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCircleFill"],
  name: "TailWindcss",
  level: "85"
}, {
  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCircleFill"],
  name: "Mysql",
  level: "45"
}, {
  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCircleFill"],
  name: "git",
  level: "60"
}, {
  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCircleFill"],
  name: "Wordpress",
  level: "75"
}, {
  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCircleFill"],
  name: "HTML",
  level: "95"
}, {
  Icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCircleFill"],
  name: "CSS",
  level: "85"
}];
var projects = [{
  name: "COVID Tracker",
  description: "This app shows a statistical view about corona virus over the world",
  image_path: "/images/covid.jpg",
  deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
  github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
  category: ["react"],
  key_techs: ["React", "Chart.js", "Material UI"]
}, {
  name: "Algorithm Visualizer",
  image_path: "/images/algoVisual.png",
  deployed_url: "https://visual-algorithm.web.app/",
  github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
  category: ["react"],
  description: "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
  key_techs: ["React", "firebase", "Framer Motion"]
}, {
  name: "Dev Talks",
  image_path: "/images/dev.jpg",
  deployed_url: "https://dev-talks.herokuapp.com/",
  github_url: "https://github.com/Dey-Sumit/Dev-talks",
  category: ["node", "mongo", "react"],
  description: "Social Media app for developers who can share project,create posts,etc...",
  key_techs: ["React", "Redux", "Node", "Express", "Mongo", "REST API", "Bootstrap"]
}, {
  name: "Realtime Chat App",
  image_path: "/images/chatapp.jpg",
  deployed_url: "https://sumit-chat.netlify.app/",
  category: ["node", "react"],
  description: "Basic Realtime Chat App where one can create a room can talk to each other",
  key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"]
}, {
  name: "Tweeter Clone",
  image_path: "/images/tweetme.jpg",
  deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
  github_url: "https://github.com/Dey-Sumit/tweetme",
  category: ["django", "react"],
  description: "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
  key_techs: ["React", "Django", "Django REST API"]
}, {
  name: "Color Classification using tf.js",
  image_path: "/images/color.jpg",
  deployed_url: "!#",
  github_url: "https://github.com/Dey-Sumit/color-classification",
  category: ["express"],
  description: "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
  key_techs: ["Express", "TensorFlow.js", "Vanilla js"]
}, {
  name: "YouTube using YouTube ",
  image_path: "/images/youtubeClone.png",
  deployed_url: "https://not-utube.web.app/",
  github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
  category: ["express"],
  description: 'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
  key_techs: ["React", "Redux", "Firebase Auth", "YouTube API", "Sass", "Bootstrap"]
}, {
  name: "Football App",
  image_path: "/images/football.png",
  deployed_url: "https://o-my-goal.web.app/",
  github_url: "https://github.com/Dey-Sumit/football-app",
  category: ["react"],
  description: "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
  key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"]
}];

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS50cyJdLCJuYW1lcyI6WyJzZXJ2aWNlcyIsIkljb24iLCJSaUNvbXB1dGVyTGluZSIsInRpdGxlIiwiYWJvdXQiLCJGYVNlcnZlciIsIk1kRGV2ZWxvcGVyTW9kZSIsIkFpT3V0bGluZUFudERlc2lnbiIsImxhbmd1YWdlcyIsIkJzQ2lyY2xlRmlsbCIsIm5hbWUiLCJsZXZlbCIsInRvb2xzIiwicHJvamVjdHMiLCJkZXNjcmlwdGlvbiIsImltYWdlX3BhdGgiLCJkZXBsb3llZF91cmwiLCJnaXRodWJfdXJsIiwiY2F0ZWdvcnkiLCJrZXlfdGVjaHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFTyxJQUFNQSxRQUFtQixHQUFHLENBQ2pDO0FBQ0VDLE1BQUksRUFBRUMsNkRBRFI7QUFFRUMsT0FBSyxFQUFFLHNCQUZUO0FBR0VDLE9BQUssRUFDSDtBQUpKLENBRGlDLEVBT2pDO0FBQ0VILE1BQUksRUFBRUksdURBRFI7QUFFRUYsT0FBSyxFQUFFLHNCQUZUO0FBR0VDLE9BQUssRUFDSDtBQUpKLENBUGlDLEVBZWpDO0FBQ0VILE1BQUksRUFBRUssOERBRFI7QUFFRUgsT0FBSyxFQUFFLHdCQUZUO0FBR0VDLE9BQUssRUFBRTtBQUhULENBZmlDLEVBb0JqQztBQUNFSCxNQUFJLEVBQUVNLGlFQURSO0FBRUVKLE9BQUssRUFBRSxnQkFGVDtBQUdFQyxPQUFLLEVBQ0g7QUFKSixDQXBCaUMsQ0FBNUI7QUE2QkEsSUFBTUksU0FBa0IsR0FBRyxDQUNoQztBQUNFUCxNQUFJLEVBQUVRLDJEQURSO0FBRUVDLE1BQUksRUFBRSxRQUZSO0FBR0VDLE9BQUssRUFBRTtBQUhULENBRGdDLEVBTWhDO0FBQ0VWLE1BQUksRUFBRVEsMkRBRFI7QUFFRUMsTUFBSSxFQUFFLGFBRlI7QUFHRUMsT0FB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ZXMvcmVzdW1lLmQ2YmJlNTA2NTM1M2I5NzgyOWMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSaUNvbXB1dGVyTGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9yaVwiO1xyXG5pbXBvcnQgeyBGYVNlcnZlciB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVBbnREZXNpZ24sIEFpT3V0bGluZUFwaSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5pbXBvcnQgeyBNZERldmVsb3Blck1vZGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuaW1wb3J0IHsgSVByb2plY3QsIFNlcnZpY2UsIFNraWxsIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuXHJcbmltcG9ydCB7IEJzQ2lyY2xlRmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZpY2VzOiBTZXJ2aWNlW10gPSBbXHJcbiAge1xyXG4gICAgSWNvbjogUmlDb21wdXRlckxpbmUsXHJcbiAgICB0aXRsZTogXCJGcm9udGVuZCBEZXZlbG9wbWVudFwiLFxyXG4gICAgYWJvdXQ6XHJcbiAgICAgIFwiSSBjYW4gYnVpbGQgYSBiZWF1dGlmdWwgYW5kIHNjYWxhYmxlIFNQQSB1c2luZyA8Yj4gSFRNTDwvYj4sPGI+Q1NTPC9iPiw8Yj5SZWFjdC5qczwvYj4sPGI+TmV4dC5qczwvYj4gYW5kIG90aGVyIENTUyBmcmFtZXdvcmsgXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBGYVNlcnZlcixcclxuICAgIHRpdGxlOiBcIkJhY2tlbmQgIERldmVsb3BtZW50XCIsXHJcbiAgICBhYm91dDpcclxuICAgICAgXCJBIGxpdHRsZSBLbm93bGVkZ2Ugb2YgaGFuZGxpbmcgZGF0YWJhc2UsIHNlcnZlciwgYXBpIHVzaW5nIDxiPkV4cHJlc3NqczwvYj4sPGI+TXlzcWw8L2I+LDxiPk1vbmdvREI8L2I+IGFuZCA8Yj5GaXJlYmFzZTwvYj5cIixcclxuICB9LFxyXG4gIFxyXG4gIFxyXG4gIHtcclxuICAgIEljb246IE1kRGV2ZWxvcGVyTW9kZSxcclxuICAgIHRpdGxlOiBcIk1vYmlsZSBBcHAgRGV2ZWxvcG1lbnRcIixcclxuICAgIGFib3V0OiBcImRlc2lnbmluZyBhbmQgaW1wbGVtZW50YXRpb24gb2YgYSBmZWF0dXJlLXJpY2ggbW9iaWxlIGFwcCB1c2luZyA8Yj5SZWFjdCBOYXRpdmU8L2I+LCBkZWxpdmVyaW5nIGNyb3NzLXBsYXRmb3JtIGNvbXBhdGliaWxpdHkgYW5kIHJlZHVjaW5nIGRldmVsb3BtZW50IHRpbWUsIFRoZSBhcHAncyB1c2VyLWZyaWVuZGx5IGludGVyZmFjZSBhbmQgc2VhbWxlc3MgcGVyZm9ybWFuY2UgYW5kIGluY3JlYXNlIGluIHVzZXIgZG93bmxvYWRzIGFuZCBwb3NpdGl2ZSBhcHAgc3RvcmUgcmF0aW5ncy4gXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBBaU91dGxpbmVBbnREZXNpZ24sXHJcbiAgICB0aXRsZTogXCJVSS9VWCBkZXNpZ25lclwiLFxyXG4gICAgYWJvdXQ6XHJcbiAgICAgIFwic3R1bm5pbmcgdXNlciBpbnRlcmZhY2UgZGVzaWduZXIgdXNpbmcgPGI+RmlnbWE8L2I+ICBhbmQgIDxiPkZyYW1lcjwvYj4gXCIsXHJcbiAgfSxcclxuICBcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBsYW5ndWFnZXM6IFNraWxsW10gPSBbXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJOZXh0anNcIixcclxuICAgIGxldmVsOiBcIjQ1XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXHJcbiAgICBuYW1lOiBcIkphdmEgU2NyaXB0XCIsXHJcbiAgICBsZXZlbDogXCI5MFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJSZWFjdCBOYXRpdmVcIixcclxuICAgIGxldmVsOiBcIjgwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXHJcbiAgICBuYW1lOiBcIlJlYWN0XCIsXHJcbiAgICBsZXZlbDogXCI3MFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJOb2RlanNcIixcclxuICAgIGxldmVsOiBcIjgwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXHJcbiAgICBuYW1lOiBcIkJvb3RzdHJhcFwiLFxyXG4gICAgbGV2ZWw6IFwiODBcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRvb2xzOiBTa2lsbFtdID0gW1xyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiVGFpbFdpbmRjc3NcIixcclxuICAgIGxldmVsOiBcIjg1XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXHJcbiAgICBuYW1lOiBcIk15c3FsXCIsXHJcbiAgICBsZXZlbDogXCI0NVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJnaXRcIixcclxuICAgIGxldmVsOiBcIjYwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXHJcbiAgICBuYW1lOiBcIldvcmRwcmVzc1wiLFxyXG4gICAgbGV2ZWw6IFwiNzVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiSFRNTFwiLFxyXG4gICAgbGV2ZWw6IFwiOTVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiQ1NTXCIsXHJcbiAgICBsZXZlbDogXCI4NVwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdHM6IElQcm9qZWN0W10gPSBbXHJcbiAgeyBcclxuICAgIG5hbWU6IFwiQ09WSUQgVHJhY2tlclwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiVGhpcyBhcHAgc2hvd3MgYSBzdGF0aXN0aWNhbCB2aWV3IGFib3V0IGNvcm9uYSB2aXJ1cyBvdmVyIHRoZSB3b3JsZFwiLFxyXG4gICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL2NvdmlkLmpwZ1wiLFxyXG4gICAgZGVwbG95ZWRfdXJsOiBcImh0dHBzOi8vY292aWQtMTktdHJhY2tlci1ieS1zdW1pdC53ZWIuYXBwL1wiLFxyXG4gICAgZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vRGV5LVN1bWl0L2NvdmlkLTE5LXRyYWNrZXJcIixcclxuICAgIGNhdGVnb3J5OiBbXCJyZWFjdFwiXSxcclxuICAgIGtleV90ZWNoczogW1wiUmVhY3RcIiwgXCJDaGFydC5qc1wiLCBcIk1hdGVyaWFsIFVJXCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJBbGdvcml0aG0gVmlzdWFsaXplclwiLFxyXG4gICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL2FsZ29WaXN1YWwucG5nXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly92aXN1YWwtYWxnb3JpdGhtLndlYi5hcHAvXCIsXHJcbiAgICBnaXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9EZXktU3VtaXQvYWxnb3JpdGhtLXZpc3VhbGl6ZXJcIixcclxuICAgIGNhdGVnb3J5OiBbXCJyZWFjdFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkFuIHdlYiBhcHAgd2hpY2ggc2hvd3MgaG93IGFuIGFsZ29yaXRobSAocGF0aCBmaW5kaW5nIG9yIHNvcnRpbmcpIHdvcmtzIHdpdGggY29vbCBhbmltYXRpb25cIixcclxuICAgIGtleV90ZWNoczogW1wiUmVhY3RcIiwgXCJmaXJlYmFzZVwiLCBcIkZyYW1lciBNb3Rpb25cIl0sXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgbmFtZTogXCJEZXYgVGFsa3NcIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy9kZXYuanBnXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9kZXYtdGFsa3MuaGVyb2t1YXBwLmNvbS9cIixcclxuICAgIGdpdGh1Yl91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0RleS1TdW1pdC9EZXYtdGFsa3NcIixcclxuICAgIGNhdGVnb3J5OiBbXCJub2RlXCIsIFwibW9uZ29cIiwgXCJyZWFjdFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlNvY2lhbCBNZWRpYSBhcHAgZm9yIGRldmVsb3BlcnMgd2hvIGNhbiBzaGFyZSBwcm9qZWN0LGNyZWF0ZSBwb3N0cyxldGMuLi5cIixcclxuICAgIGtleV90ZWNoczogW1xyXG4gICAgICBcIlJlYWN0XCIsXHJcbiAgICAgIFwiUmVkdXhcIixcclxuICAgICAgXCJOb2RlXCIsXHJcbiAgICAgIFwiRXhwcmVzc1wiLFxyXG4gICAgICBcIk1vbmdvXCIsXHJcbiAgICAgIFwiUkVTVCBBUElcIixcclxuICAgICAgXCJCb290c3RyYXBcIixcclxuICAgIF0sXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgbmFtZTogXCJSZWFsdGltZSBDaGF0IEFwcFwiLFxyXG4gICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL2NoYXRhcHAuanBnXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9zdW1pdC1jaGF0Lm5ldGxpZnkuYXBwL1wiLFxyXG4gICBcclxuICAgIGNhdGVnb3J5OiBbXCJub2RlXCIsIFwicmVhY3RcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJCYXNpYyBSZWFsdGltZSBDaGF0IEFwcCB3aGVyZSBvbmUgY2FuIGNyZWF0ZSBhIHJvb20gY2FuIHRhbGsgdG8gZWFjaCBvdGhlclwiLFxyXG4gICAga2V5X3RlY2hzOiBbXCJSZWFjdFwiLCBcIk5vZGVcIiwgXCJFeHByZXNzXCIsIFwiU29ja2V0XCIsIFwiQm9vdHN0cmFwXCJdLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIG5hbWU6IFwiVHdlZXRlciBDbG9uZVwiLFxyXG4gICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL3R3ZWV0bWUuanBnXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cDovL3N1bWF4dHdlZXRtZS5weXRob25hbnl3aGVyZS5jb20vXCIsXHJcbiAgICBnaXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9EZXktU3VtaXQvdHdlZXRtZVwiLFxyXG4gICAgY2F0ZWdvcnk6IFtcImRqYW5nb1wiLCBcInJlYWN0XCJdLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiRmlyc3QgRGphbmdvIFByb2plY3QgOikgfCBUeXBpY2FsIFNvY2lhbCBNZWRpYSBBcHAgd2hlcmUgb25lIGNhbiBwb3N0LGxpa2UgLGNvbW1lbnQgZXRjXCIsXHJcbiAgICBrZXlfdGVjaHM6IFtcIlJlYWN0XCIsIFwiRGphbmdvXCIsIFwiRGphbmdvIFJFU1QgQVBJXCJdLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIG5hbWU6IFwiQ29sb3IgQ2xhc3NpZmljYXRpb24gdXNpbmcgdGYuanNcIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy9jb2xvci5qcGdcIixcclxuICAgIGRlcGxveWVkX3VybDogXCIhI1wiLFxyXG4gICAgZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vRGV5LVN1bWl0L2NvbG9yLWNsYXNzaWZpY2F0aW9uXCIsXHJcbiAgICBjYXRlZ29yeTogW1wiZXhwcmVzc1wiXSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlRyaWVkIE1MIHdpdGggSlMgOikgfCB0aGlzIGFwcCBjbGFzc2lmaWVzIGEgY29sb3IgdXNpbmcgQ05OIGFsZ29yaXRobSBpbiBicm93c2VyXCIsXHJcbiAgICBrZXlfdGVjaHM6IFtcIkV4cHJlc3NcIiwgXCJUZW5zb3JGbG93LmpzXCIsIFwiVmFuaWxsYSBqc1wiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiWW91VHViZSB1c2luZyBZb3VUdWJlIFwiLFxyXG4gICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL3lvdXR1YmVDbG9uZS5wbmdcIixcclxuICAgIGRlcGxveWVkX3VybDogXCJodHRwczovL25vdC11dHViZS53ZWIuYXBwL1wiLFxyXG4gICAgZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vRGV5LVN1bWl0L3lvdXR1YmUtY2xvbmUtdHV0b3JpYWwtdXBcIixcclxuICAgIGNhdGVnb3J5OiBbXCJleHByZXNzXCJdLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdGdWxsKGFsbW9zdCkgRnVuY3Rpb25hbCBZb3VUdWJlIHJlcGxpY2Egd2hlcmUgb25lIGNhbiBsb2dpbiB3aXRoIGhpcy9oZXIgeW91dHViZSBhY2NvdW50IHRvIGVuam95IFwibm90LVlvdVR1YmVcIi5Vc2VyIGNhbiBsaWtlIGEgdmlkZW8sY29tbWVudCBvbiBhIHZpZGVvICYgTXVjaCBNb3JlICcsXHJcbiAgICBrZXlfdGVjaHM6IFtcclxuICAgICAgXCJSZWFjdFwiLFxyXG4gICAgICBcIlJlZHV4XCIsXHJcbiAgICAgIFwiRmlyZWJhc2UgQXV0aFwiLFxyXG4gICAgICBcIllvdVR1YmUgQVBJXCIsXHJcbiAgICAgIFwiU2Fzc1wiLFxyXG4gICAgICBcIkJvb3RzdHJhcFwiLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiRm9vdGJhbGwgQXBwXCIsXHJcbiAgICBpbWFnZV9wYXRoOiBcIi9pbWFnZXMvZm9vdGJhbGwucG5nXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9vLW15LWdvYWwud2ViLmFwcC9cIixcclxuICAgIGdpdGh1Yl91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0RleS1TdW1pdC9mb290YmFsbC1hcHBcIixcclxuICAgIGNhdGVnb3J5OiBbXCJyZWFjdFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIm8gbXkgZ29hbCByZXBsaWNhIHdoZXJlIGFuIHVzZXIgY2FuIGtlZXAgYW4gZXllIG9uIGhpcyBmYXZvcml0ZSBjbHViLlRoaXMgYXBwIHdpbGwga2VlcCBwcm92aWRpbmcgXFxuIGFsbCB0aGUgc3RhdGlzdGljcyBvZiB0aGF0IGNsdWIuYWxsIHRoZSBmYW5zIGNhbiBhbHNvIGNoYXQgXCIsXHJcbiAgICBrZXlfdGVjaHM6IFtcIlJlYWN0XCIsIFwiUmVkdXhcIiwgXCJGaXJlYmFzZSBBdXRoXCIsIFwiQVBJXCIsIFwiU2Fzc1wiLCBcIkJvb3RzdHJhcFwiXSxcclxuICB9LFxyXG5dO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9