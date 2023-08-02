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
  //github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
  category: ["react"],
  key_techs: ["React", "Chart.js", "Material UI"]
}, {
  name: "Algorithm Visualizer",
  image_path: "/images/Logos.png",
  deployed_url: "https://visual-algorithm.web.app/",
  //github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
  category: ["react"],
  description: "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
  key_techs: ["React", "firebase", "Framer Motion"]
}, {
  name: "Dev Talks",
  image_path: "/images/dev.jpg",
  deployed_url: "https://dev-talks.herokuapp.com/",
  //github_url: "https://github.com/Dey-Sumit/Dev-talks",
  category: ["node", "mongo", "react"],
  description: "Social Media app for developers who can share project,create posts,etc...",
  key_techs: ["React", "Redux", "Node", "Express", "Mongo", "REST API", "Bootstrap"]
}, {
  name: "Realtime Chat App",
  image_path: "/images/chatapp.jpg",
  deployed_url: "https://sumit-chat.netlify.app/",
  //github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
  category: ["node", "react"],
  description: "Basic Realtime Chat App where one can create a room can talk to each other",
  key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"]
}, {
  name: "Tweeter Clone",
  image_path: "/images/tweetme.jpg",
  deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
  //github_url: "https://github.com/Dey-Sumit/tweetme",
  category: ["django", "react"],
  description: "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
  key_techs: ["React", "Django", "Django REST API"]
}, {
  name: "Color Classification using tf.js",
  image_path: "/images/color.jpg",
  deployed_url: "!#",
  //github_url: "https://github.com/Dey-Sumit/color-classification",
  category: ["express"],
  description: "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
  key_techs: ["Express", "TensorFlow.js", "Vanilla js"]
}, {
  name: "YouTube using YouTube ",
  image_path: "/images/youtubeClone.png",
  deployed_url: "https://not-utube.web.app/",
  //github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
  category: ["express"],
  description: 'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
  key_techs: ["React", "Redux", "Firebase Auth", "YouTube API", "Sass", "Bootstrap"]
}, {
  name: "Football App",
  image_path: "/images/football.png",
  deployed_url: "https://o-my-goal.web.app/",
  //github_url: "https://github.com/Dey-Sumit/football-app",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS50cyJdLCJuYW1lcyI6WyJzZXJ2aWNlcyIsIkljb24iLCJSaUNvbXB1dGVyTGluZSIsInRpdGxlIiwiYWJvdXQiLCJGYVNlcnZlciIsIk1kRGV2ZWxvcGVyTW9kZSIsIkFpT3V0bGluZUFudERlc2lnbiIsImxhbmd1YWdlcyIsIkJzQ2lyY2xlRmlsbCIsIm5hbWUiLCJsZXZlbCIsInRvb2xzIiwicHJvamVjdHMiLCJkZXNjcmlwdGlvbiIsImltYWdlX3BhdGgiLCJkZXBsb3llZF91cmwiLCJjYXRlZ29yeSIsImtleV90ZWNocyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVPLElBQU1BLFFBQW1CLEdBQUcsQ0FDakM7QUFDRUMsTUFBSSxFQUFFQyw2REFEUjtBQUVFQyxPQUFLLEVBQUUsc0JBRlQ7QUFHRUMsT0FBSyxFQUNIO0FBSkosQ0FEaUMsRUFPakM7QUFDRUgsTUFBSSxFQUFFSSx1REFEUjtBQUVFRixPQUFLLEVBQUUsc0JBRlQ7QUFHRUMsT0FBSyxFQUNIO0FBSkosQ0FQaUMsRUFlakM7QUFDRUgsTUFBSSxFQUFFSyw4REFEUjtBQUVFSCxPQUFLLEVBQUUsd0JBRlQ7QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FmaUMsRUFvQmpDO0FBQ0VILE1BQUksRUFBRU0saUVBRFI7QUFFRUosT0FBSyxFQUFFLGdCQUZUO0FBR0VDLE9BQUssRUFDSDtBQUpKLENBcEJpQyxDQUE1QjtBQTZCQSxJQUFNSSxTQUFrQixHQUFHLENBQ2hDO0FBQ0VQLE1BQUksRUFBRVEsMkRBRFI7QUFFRUMsTUFBSSxFQUFFLFFBRlI7QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FEZ0MsRUFNaEM7QUFDRVYsTUFBSSxFQUFFUSwyREFEUjtBQUVFQyxNQUFJLEVBQUUsYUFGUjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxD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QUFELEVBQVcsT0FBWCxDQUxaO0FBTUVILGFBQVcsRUFDVCx5RkFQSjtBQVFFSSxXQUFTLEVBQUUsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixpQkFBcEI7QUFSYixDQXBEa0MsRUErRGxDO0FBQ0VSLE1BQUksRUFBRSxrQ0FEUjtBQUVFSyxZQUFVLEVBQUUsbUJBRmQ7QUFHRUMsY0FBWSxFQUFFLElBSGhCO0FBSUU7QUFDQUMsVUFBUSxFQUFFLENBQUMsU0FBRCxDQUxaO0FBTUVILGFBQVcsRUFDVCxrRkFQSjtBQVFFSSxXQUFTLEVBQUUsQ0FBQyxTQUFELEVBQVksZUFBWixFQUE2QixZQUE3QjtBQVJiLENBL0RrQyxFQXlFbEM7QUFDRVIsTUFBSSxFQUFFLHdCQURSO0FBRUVLLFlBQVUsRUFBRSwwQkFGZDtBQUdFQyxjQUFZLEVBQUUsNEJBSGhCO0FBSUU7QUFDQUMsVUFBUSxFQUFFLENBQUMsU0FBRCxDQUxaO0FBTUVILGFBQVcsRUFDVCx1S0FQSjtBQVFFSSxXQUFTLEVBQUUsQ0FDVCxPQURTLEVBRVQsT0FGUyxFQUdULGVBSFMsRUFJVCxhQUpTLEVBS1QsTUFMUyxFQU1ULFdBTlM7QUFSYixDQXpFa0MsRUEwRmxDO0FBQ0VSLE1BQUksRUFBRSxjQURSO0FBRUVLLFlBQVUsRUFBRSxzQkFGZDtBQUdFQyxjQUFZLEVBQUUsNEJBSGhCO0FBSUU7QUFDQUMsVUFBUSxFQUFFLENBQUMsT0FBRCxDQUxaO0FBTUVILGFBQVcsRUFDVCxrS0FQSjtBQVFFSSxXQUFTLEVBQUUsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixlQUFuQixFQUFvQyxLQUFwQyxFQUEyQyxNQUEzQyxFQUFtRCxXQUFuRDtBQVJiLENBMUZrQyxDQUE3QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXN1bWUuM2RiMTIxNzc2N2FiNmM0NjkxNGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJpQ29tcHV0ZXJMaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL3JpXCI7XHJcbmltcG9ydCB7IEZhU2VydmVyIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IEFpT3V0bGluZUFudERlc2lnbiwgQWlPdXRsaW5lQXBpIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcbmltcG9ydCB7IE1kRGV2ZWxvcGVyTW9kZSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5pbXBvcnQgeyBJUHJvamVjdCwgU2VydmljZSwgU2tpbGwgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuaW1wb3J0IHsgQnNDaXJjbGVGaWxsIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VydmljZXM6IFNlcnZpY2VbXSA9IFtcclxuICB7XHJcbiAgICBJY29uOiBSaUNvbXB1dGVyTGluZSxcclxuICAgIHRpdGxlOiBcIkZyb250ZW5kIERldmVsb3BtZW50XCIsXHJcbiAgICBhYm91dDpcclxuICAgICAgXCJJIGNhbiBidWlsZCBhIGJlYXV0aWZ1bCBhbmQgc2NhbGFibGUgU1BBIHVzaW5nIDxiPiBIVE1MPC9iPiw8Yj5DU1M8L2I+LDxiPlJlYWN0LmpzPC9iPiw8Yj5OZXh0LmpzPC9iPiBhbmQgb3RoZXIgQ1NTIGZyYW1ld29yayBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEZhU2VydmVyLFxyXG4gICAgdGl0bGU6IFwiQmFja2VuZCAgRGV2ZWxvcG1lbnRcIixcclxuICAgIGFib3V0OlxyXG4gICAgICBcIkEgbGl0dGxlIEtub3dsZWRnZSBvZiBoYW5kbGluZyBkYXRhYmFzZSwgc2VydmVyLCBhcGkgdXNpbmcgPGI+RXhwcmVzc2pzPC9iPiw8Yj5NeXNxbDwvYj4sPGI+TW9uZ29EQjwvYj4gYW5kIDxiPkZpcmViYXNlPC9iPlwiLFxyXG4gIH0sXHJcbiAgXHJcbiAgXHJcbiAge1xyXG4gICAgSWNvbjogTWREZXZlbG9wZXJNb2RlLFxyXG4gICAgdGl0bGU6IFwiTW9iaWxlIEFwcCBEZXZlbG9wbWVudFwiLFxyXG4gICAgYWJvdXQ6IFwiZGVzaWduaW5nIGFuZCBpbXBsZW1lbnRhdGlvbiBvZiBhIGZlYXR1cmUtcmljaCBtb2JpbGUgYXBwIHVzaW5nIDxiPlJlYWN0IE5hdGl2ZTwvYj4sIGRlbGl2ZXJpbmcgY3Jvc3MtcGxhdGZvcm0gY29tcGF0aWJpbGl0eSBhbmQgcmVkdWNpbmcgZGV2ZWxvcG1lbnQgdGltZSwgVGhlIGFwcCdzIHVzZXItZnJpZW5kbHkgaW50ZXJmYWNlIGFuZCBzZWFtbGVzcyBwZXJmb3JtYW5jZSBhbmQgaW5jcmVhc2UgaW4gdXNlciBkb3dubG9hZHMgYW5kIHBvc2l0aXZlIGFwcCBzdG9yZSByYXRpbmdzLiBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEFpT3V0bGluZUFudERlc2lnbixcclxuICAgIHRpdGxlOiBcIlVJL1VYIGRlc2lnbmVyXCIsXHJcbiAgICBhYm91dDpcclxuICAgICAgXCJzdHVubmluZyB1c2VyIGludGVyZmFjZSBkZXNpZ25lciB1c2luZyA8Yj5GaWdtYTwvYj4gIGFuZCAgPGI+RnJhbWVyPC9iPiBcIixcclxuICB9LFxyXG4gIFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxhbmd1YWdlczogU2tpbGxbXSA9IFtcclxuICB7XHJcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXHJcbiAgICBuYW1lOiBcIk5leHRqc1wiLFxyXG4gICAgbGV2ZWw6IFwiNDVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiSmF2YSBTY3JpcHRcIixcclxuICAgIGxldmVsOiBcIjkwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXHJcbiAgICBuYW1lOiBcIlJlYWN0IE5hdGl2ZVwiLFxyXG4gICAgbGV2ZWw6IFwiODBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiUmVhY3RcIixcclxuICAgIGxldmVsOiBcIjcwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXHJcbiAgICBuYW1lOiBcIk5vZGVqc1wiLFxyXG4gICAgbGV2ZWw6IFwiODBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiQm9vdHN0cmFwXCIsXHJcbiAgICBsZXZlbDogXCI4MFwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgdG9vbHM6IFNraWxsW10gPSBbXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJUYWlsV2luZGNzc1wiLFxyXG4gICAgbGV2ZWw6IFwiODVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiTXlzcWxcIixcclxuICAgIGxldmVsOiBcIjQ1XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXHJcbiAgICBuYW1lOiBcImdpdFwiLFxyXG4gICAgbGV2ZWw6IFwiNjBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiV29yZHByZXNzXCIsXHJcbiAgICBsZXZlbDogXCI3NVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJIVE1MXCIsXHJcbiAgICBsZXZlbDogXCI5NVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJDU1NcIixcclxuICAgIGxldmVsOiBcIjg1XCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0czogSVByb2plY3RbXSA9IFtcclxuICB7IFxyXG4gICAgbmFtZTogXCJDT1ZJRCBUcmFja2VyXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJUaGlzIGFwcCBzaG93cyBhIHN0YXRpc3RpY2FsIHZpZXcgYWJvdXQgY29yb25hIHZpcnVzIG92ZXIgdGhlIHdvcmxkXCIsXHJcbiAgICBpbWFnZV9wYXRoOiBcIi9pbWFnZXMvY292aWQuanBnXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9jb3ZpZC0xOS10cmFja2VyLWJ5LXN1bWl0LndlYi5hcHAvXCIsXHJcbiAgICAvL2dpdGh1Yl91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0RleS1TdW1pdC9jb3ZpZC0xOS10cmFja2VyXCIsXHJcbiAgICBjYXRlZ29yeTogW1wicmVhY3RcIl0sXHJcbiAgICBrZXlfdGVjaHM6IFtcIlJlYWN0XCIsIFwiQ2hhcnQuanNcIiwgXCJNYXRlcmlhbCBVSVwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQWxnb3JpdGhtIFZpc3VhbGl6ZXJcIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy9Mb2dvcy5wbmdcIixcclxuICAgIGRlcGxveWVkX3VybDogXCJodHRwczovL3Zpc3VhbC1hbGdvcml0aG0ud2ViLmFwcC9cIixcclxuICAgIC8vZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vRGV5LVN1bWl0L2FsZ29yaXRobS12aXN1YWxpemVyXCIsXHJcbiAgICBjYXRlZ29yeTogW1wicmVhY3RcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJBbiB3ZWIgYXBwIHdoaWNoIHNob3dzIGhvdyBhbiBhbGdvcml0aG0gKHBhdGggZmluZGluZyBvciBzb3J0aW5nKSB3b3JrcyB3aXRoIGNvb2wgYW5pbWF0aW9uXCIsXHJcbiAgICBrZXlfdGVjaHM6IFtcIlJlYWN0XCIsIFwiZmlyZWJhc2VcIiwgXCJGcmFtZXIgTW90aW9uXCJdLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIG5hbWU6IFwiRGV2IFRhbGtzXCIsXHJcbiAgICBpbWFnZV9wYXRoOiBcIi9pbWFnZXMvZGV2LmpwZ1wiLFxyXG4gICAgZGVwbG95ZWRfdXJsOiBcImh0dHBzOi8vZGV2LXRhbGtzLmhlcm9rdWFwcC5jb20vXCIsXHJcbiAgICAvL2dpdGh1Yl91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0RleS1TdW1pdC9EZXYtdGFsa3NcIixcclxuICAgIGNhdGVnb3J5OiBbXCJub2RlXCIsIFwibW9uZ29cIiwgXCJyZWFjdFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlNvY2lhbCBNZWRpYSBhcHAgZm9yIGRldmVsb3BlcnMgd2hvIGNhbiBzaGFyZSBwcm9qZWN0LGNyZWF0ZSBwb3N0cyxldGMuLi5cIixcclxuICAgIGtleV90ZWNoczogW1xyXG4gICAgICBcIlJlYWN0XCIsXHJcbiAgICAgIFwiUmVkdXhcIixcclxuICAgICAgXCJOb2RlXCIsXHJcbiAgICAgIFwiRXhwcmVzc1wiLFxyXG4gICAgICBcIk1vbmdvXCIsXHJcbiAgICAgIFwiUkVTVCBBUElcIixcclxuICAgICAgXCJCb290c3RyYXBcIixcclxuICAgIF0sXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgbmFtZTogXCJSZWFsdGltZSBDaGF0IEFwcFwiLFxyXG4gICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL2NoYXRhcHAuanBnXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9zdW1pdC1jaGF0Lm5ldGxpZnkuYXBwL1wiLFxyXG4gICAgLy9naXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9EZXktU3VtaXQvY2hhdC1hcHAtc29ja2V0LmlvLXJlYWN0LW5vZGVcIixcclxuICAgIGNhdGVnb3J5OiBbXCJub2RlXCIsIFwicmVhY3RcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJCYXNpYyBSZWFsdGltZSBDaGF0IEFwcCB3aGVyZSBvbmUgY2FuIGNyZWF0ZSBhIHJvb20gY2FuIHRhbGsgdG8gZWFjaCBvdGhlclwiLFxyXG4gICAga2V5X3RlY2hzOiBbXCJSZWFjdFwiLCBcIk5vZGVcIiwgXCJFeHByZXNzXCIsIFwiU29ja2V0XCIsIFwiQm9vdHN0cmFwXCJdLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIG5hbWU6IFwiVHdlZXRlciBDbG9uZVwiLFxyXG4gICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL3R3ZWV0bWUuanBnXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cDovL3N1bWF4dHdlZXRtZS5weXRob25hbnl3aGVyZS5jb20vXCIsXHJcbiAgICAvL2dpdGh1Yl91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0RleS1TdW1pdC90d2VldG1lXCIsXHJcbiAgICBjYXRlZ29yeTogW1wiZGphbmdvXCIsIFwicmVhY3RcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJGaXJzdCBEamFuZ28gUHJvamVjdCA6KSB8IFR5cGljYWwgU29jaWFsIE1lZGlhIEFwcCB3aGVyZSBvbmUgY2FuIHBvc3QsbGlrZSAsY29tbWVudCBldGNcIixcclxuICAgIGtleV90ZWNoczogW1wiUmVhY3RcIiwgXCJEamFuZ29cIiwgXCJEamFuZ28gUkVTVCBBUElcIl0sXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgbmFtZTogXCJDb2xvciBDbGFzc2lmaWNhdGlvbiB1c2luZyB0Zi5qc1wiLFxyXG4gICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL2NvbG9yLmpwZ1wiLFxyXG4gICAgZGVwbG95ZWRfdXJsOiBcIiEjXCIsXHJcbiAgICAvL2dpdGh1Yl91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0RleS1TdW1pdC9jb2xvci1jbGFzc2lmaWNhdGlvblwiLFxyXG4gICAgY2F0ZWdvcnk6IFtcImV4cHJlc3NcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJUcmllZCBNTCB3aXRoIEpTIDopIHwgdGhpcyBhcHAgY2xhc3NpZmllcyBhIGNvbG9yIHVzaW5nIENOTiBhbGdvcml0aG0gaW4gYnJvd3NlclwiLFxyXG4gICAga2V5X3RlY2hzOiBbXCJFeHByZXNzXCIsIFwiVGVuc29yRmxvdy5qc1wiLCBcIlZhbmlsbGEganNcIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIllvdVR1YmUgdXNpbmcgWW91VHViZSBcIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy95b3V0dWJlQ2xvbmUucG5nXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9ub3QtdXR1YmUud2ViLmFwcC9cIixcclxuICAgIC8vZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vRGV5LVN1bWl0L3lvdXR1YmUtY2xvbmUtdHV0b3JpYWwtdXBcIixcclxuICAgIGNhdGVnb3J5OiBbXCJleHByZXNzXCJdLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdGdWxsKGFsbW9zdCkgRnVuY3Rpb25hbCBZb3VUdWJlIHJlcGxpY2Egd2hlcmUgb25lIGNhbiBsb2dpbiB3aXRoIGhpcy9oZXIgeW91dHViZSBhY2NvdW50IHRvIGVuam95IFwibm90LVlvdVR1YmVcIi5Vc2VyIGNhbiBsaWtlIGEgdmlkZW8sY29tbWVudCBvbiBhIHZpZGVvICYgTXVjaCBNb3JlICcsXHJcbiAgICBrZXlfdGVjaHM6IFtcclxuICAgICAgXCJSZWFjdFwiLFxyXG4gICAgICBcIlJlZHV4XCIsXHJcbiAgICAgIFwiRmlyZWJhc2UgQXV0aFwiLFxyXG4gICAgICBcIllvdVR1YmUgQVBJXCIsXHJcbiAgICAgIFwiU2Fzc1wiLFxyXG4gICAgICBcIkJvb3RzdHJhcFwiLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiRm9vdGJhbGwgQXBwXCIsXHJcbiAgICBpbWFnZV9wYXRoOiBcIi9pbWFnZXMvZm9vdGJhbGwucG5nXCIsXHJcbiAgICBkZXBsb3llZF91cmw6IFwiaHR0cHM6Ly9vLW15LWdvYWwud2ViLmFwcC9cIixcclxuICAgIC8vZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vRGV5LVN1bWl0L2Zvb3RiYWxsLWFwcFwiLFxyXG4gICAgY2F0ZWdvcnk6IFtcInJlYWN0XCJdLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwibyBteSBnb2FsIHJlcGxpY2Egd2hlcmUgYW4gdXNlciBjYW4ga2VlcCBhbiBleWUgb24gaGlzIGZhdm9yaXRlIGNsdWIuVGhpcyBhcHAgd2lsbCBrZWVwIHByb3ZpZGluZyBcXG4gYWxsIHRoZSBzdGF0aXN0aWNzIG9mIHRoYXQgY2x1Yi5hbGwgdGhlIGZhbnMgY2FuIGFsc28gY2hhdCBcIixcclxuICAgIGtleV90ZWNoczogW1wiUmVhY3RcIiwgXCJSZWR1eFwiLCBcIkZpcmViYXNlIEF1dGhcIiwgXCJBUElcIiwgXCJTYXNzXCIsIFwiQm9vdHN0cmFwXCJdLFxyXG4gIH0sXHJcbl07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=