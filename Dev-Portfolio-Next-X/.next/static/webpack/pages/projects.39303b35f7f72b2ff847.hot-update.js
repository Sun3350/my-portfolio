webpackHotUpdate_N_E("pages/projects",{

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
  image_path: "/images/de.png",
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
  //github_url: "https://github.com/Dey-Sumit/color-classification",,
  category: ["express"],
  description: "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
  key_techs: ["Express", "TensorFlow.js", "Vanilla js"]
}, {
  name: "YouTube using YouTube ",
  image_path: "/images/web.png",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS50cyJdLCJuYW1lcyI6WyJzZXJ2aWNlcyIsIkljb24iLCJSaUNvbXB1dGVyTGluZSIsInRpdGxlIiwiYWJvdXQiLCJGYVNlcnZlciIsIk1kRGV2ZWxvcGVyTW9kZSIsIkFpT3V0bGluZUFudERlc2lnbiIsImxhbmd1YWdlcyIsIkJzQ2lyY2xlRmlsbCIsIm5hbWUiLCJsZXZlbCIsInRvb2xzIiwicHJvamVjdHMiLCJkZXNjcmlwdGlvbiIsImltYWdlX3BhdGgiLCJkZXBsb3llZF91cmwiLCJjYXRlZ29yeSIsImtleV90ZWNocyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVPLElBQU1BLFFBQW1CLEdBQUcsQ0FDakM7QUFDRUMsTUFBSSxFQUFFQyw2REFEUjtBQUVFQyxPQUFLLEVBQUUsc0JBRlQ7QUFHRUMsT0FBSyxFQUNIO0FBSkosQ0FEaUMsRUFPakM7QUFDRUgsTUFBSSxFQUFFSSx1REFEUjtBQUVFRixPQUFLLEVBQUUsc0JBRlQ7QUFHRUMsT0FBSyxFQUNIO0FBSkosQ0FQaUMsRUFlakM7QUFDRUgsTUFBSSxFQUFFSyw4REFEUjtBQUVFSCxPQUFLLEVBQUUsd0JBRlQ7QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FmaUMsRUFvQmpDO0FBQ0VILE1BQUksRUFBRU0saUVBRFI7QUFFRUosT0FBSyxFQUFFLGdCQUZUO0FBR0VDLE9BQUssRUFDSDtBQUpKLENBcEJpQyxDQUE1QjtBQTZCQSxJQUFNSSxTQUFrQixHQUFHLENBQ2hDO0FBQ0VQLE1BQUksRUFBRVEsMkRBRFI7QUFFRUMsTUFBSSxFQUFFLFFBRlI7QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FEZ0MsRUFNaEM7QUFDRVYsTUFBSSxFQUFFUSwyREFEUjtBQUVFQyxNQUFJLEVBQUUsYUFGUjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxD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QUFELEVBQVcsT0FBWCxDQUxaO0FBTUVILGFBQVcsRUFDVCx5RkFQSjtBQVFFSSxXQUFTLEVBQUUsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixpQkFBcEI7QUFSYixDQXBEa0MsRUErRGxDO0FBQ0VSLE1BQUksRUFBRSxrQ0FEUjtBQUVFSyxZQUFVLEVBQUUsbUJBRmQ7QUFHRUMsY0FBWSxFQUFFLElBSGhCO0FBSUU7QUFDQUMsVUFBUSxFQUFFLENBQUMsU0FBRCxDQUxaO0FBTUVILGFBQVcsRUFDVCxrRkFQSjtBQVFFSSxXQUFTLEVBQUUsQ0FBQyxTQUFELEVBQVksZUFBWixFQUE2QixZQUE3QjtBQVJiLENBL0RrQyxFQXlFbEM7QUFDRVIsTUFBSSxFQUFFLHdCQURSO0FBRUVLLFlBQVUsRUFBRSxpQkFGZDtBQUdFQyxjQUFZLEVBQUUsNEJBSGhCO0FBSUU7QUFDQUMsVUFBUSxFQUFFLENBQUMsU0FBRCxDQUxaO0FBTUVILGFBQVcsRUFDVCx1S0FQSjtBQVFFSSxXQUFTLEVBQUUsQ0FDVCxPQURTLEVBRVQsT0FGUyxFQUdULGVBSFMsRUFJVCxhQUpTLEVBS1QsTUFMUyxFQU1ULFdBTlM7QUFSYixDQXpFa0MsRUEwRmxDO0FBQ0VSLE1BQUksRUFBRSxjQURSO0FBRUVLLFlBQVUsRUFBRSxzQkFGZDtBQUdFQyxjQUFZLEVBQUUsNEJBSGhCO0FBSUU7QUFDQUMsVUFBUSxFQUFFLENBQUMsT0FBRCxDQUxaO0FBTUVILGFBQVcsRUFDVCxrS0FQSjtBQVFFSSxXQUFTLEVBQUUsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixlQUFuQixFQUFvQyxLQUFwQyxFQUEyQyxNQUEzQyxFQUFtRCxXQUFuRDtBQVJiLENBMUZrQyxDQUE3QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy4zOTMwM2IzNWY3ZjcyYjJmZjg0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmlDb21wdXRlckxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcclxuaW1wb3J0IHsgRmFTZXJ2ZXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IHsgQWlPdXRsaW5lQW50RGVzaWduLCBBaU91dGxpbmVBcGkgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcclxuaW1wb3J0IHsgTWREZXZlbG9wZXJNb2RlIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcbmltcG9ydCB7IElQcm9qZWN0LCBTZXJ2aWNlLCBTa2lsbCB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5pbXBvcnQgeyBCc0NpcmNsZUZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXJ2aWNlczogU2VydmljZVtdID0gW1xyXG4gIHtcclxuICAgIEljb246IFJpQ29tcHV0ZXJMaW5lLFxyXG4gICAgdGl0bGU6IFwiRnJvbnRlbmQgRGV2ZWxvcG1lbnRcIixcclxuICAgIGFib3V0OlxyXG4gICAgICBcIkkgY2FuIGJ1aWxkIGEgYmVhdXRpZnVsIGFuZCBzY2FsYWJsZSBTUEEgdXNpbmcgPGI+IEhUTUw8L2I+LDxiPkNTUzwvYj4sPGI+UmVhY3QuanM8L2I+LDxiPk5leHQuanM8L2I+IGFuZCBvdGhlciBDU1MgZnJhbWV3b3JrIFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogRmFTZXJ2ZXIsXHJcbiAgICB0aXRsZTogXCJCYWNrZW5kICBEZXZlbG9wbWVudFwiLFxyXG4gICAgYWJvdXQ6XHJcbiAgICAgIFwiQSBsaXR0bGUgS25vd2xlZGdlIG9mIGhhbmRsaW5nIGRhdGFiYXNlLCBzZXJ2ZXIsIGFwaSB1c2luZyA8Yj5FeHByZXNzanM8L2I+LDxiPk15c3FsPC9iPiw8Yj5Nb25nb0RCPC9iPiBhbmQgPGI+RmlyZWJhc2U8L2I+XCIsXHJcbiAgfSxcclxuICBcclxuICBcclxuICB7XHJcbiAgICBJY29uOiBNZERldmVsb3Blck1vZGUsXHJcbiAgICB0aXRsZTogXCJNb2JpbGUgQXBwIERldmVsb3BtZW50XCIsXHJcbiAgICBhYm91dDogXCJkZXNpZ25pbmcgYW5kIGltcGxlbWVudGF0aW9uIG9mIGEgZmVhdHVyZS1yaWNoIG1vYmlsZSBhcHAgdXNpbmcgPGI+UmVhY3QgTmF0aXZlPC9iPiwgZGVsaXZlcmluZyBjcm9zcy1wbGF0Zm9ybSBjb21wYXRpYmlsaXR5IGFuZCByZWR1Y2luZyBkZXZlbG9wbWVudCB0aW1lLCBUaGUgYXBwJ3MgdXNlci1mcmllbmRseSBpbnRlcmZhY2UgYW5kIHNlYW1sZXNzIHBlcmZvcm1hbmNlIGFuZCBpbmNyZWFzZSBpbiB1c2VyIGRvd25sb2FkcyBhbmQgcG9zaXRpdmUgYXBwIHN0b3JlIHJhdGluZ3MuIFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQWlPdXRsaW5lQW50RGVzaWduLFxyXG4gICAgdGl0bGU6IFwiVUkvVVggZGVzaWduZXJcIixcclxuICAgIGFib3V0OlxyXG4gICAgICBcInN0dW5uaW5nIHVzZXIgaW50ZXJmYWNlIGRlc2lnbmVyIHVzaW5nIDxiPkZpZ21hPC9iPiAgYW5kICA8Yj5GcmFtZXI8L2I+IFwiLFxyXG4gIH0sXHJcbiAgXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgbGFuZ3VhZ2VzOiBTa2lsbFtdID0gW1xyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiTmV4dGpzXCIsXHJcbiAgICBsZXZlbDogXCI0NVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJKYXZhIFNjcmlwdFwiLFxyXG4gICAgbGV2ZWw6IFwiOTBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiUmVhY3QgTmF0aXZlXCIsXHJcbiAgICBsZXZlbDogXCI4MFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJSZWFjdFwiLFxyXG4gICAgbGV2ZWw6IFwiNzBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiTm9kZWpzXCIsXHJcbiAgICBsZXZlbDogXCI4MFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJCb290c3RyYXBcIixcclxuICAgIGxldmVsOiBcIjgwXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCB0b29sczogU2tpbGxbXSA9IFtcclxuICB7XHJcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXHJcbiAgICBuYW1lOiBcIlRhaWxXaW5kY3NzXCIsXHJcbiAgICBsZXZlbDogXCI4NVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJNeXNxbFwiLFxyXG4gICAgbGV2ZWw6IFwiNDVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiZ2l0XCIsXHJcbiAgICBsZXZlbDogXCI2MFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJXb3JkcHJlc3NcIixcclxuICAgIGxldmVsOiBcIjc1XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXHJcbiAgICBuYW1lOiBcIkhUTUxcIixcclxuICAgIGxldmVsOiBcIjk1XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXHJcbiAgICBuYW1lOiBcIkNTU1wiLFxyXG4gICAgbGV2ZWw6IFwiODVcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RzOiBJUHJvamVjdFtdID0gW1xyXG4gIHsgXHJcbiAgICBuYW1lOiBcIkNPVklEIFRyYWNrZXJcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlRoaXMgYXBwIHNob3dzIGEgc3RhdGlzdGljYWwgdmlldyBhYm91dCBjb3JvbmEgdmlydXMgb3ZlciB0aGUgd29ybGRcIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy9jb3ZpZC5qcGdcIixcclxuICAgIGRlcGxveWVkX3VybDogXCJodHRwczovL2NvdmlkLTE5LXRyYWNrZXItYnktc3VtaXQud2ViLmFwcC9cIixcclxuICAgIC8vZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vRGV5LVN1bWl0L2NvdmlkLTE5LXRyYWNrZXJcIixcclxuICAgIGNhdGVnb3J5OiBbXCJyZWFjdFwiXSxcclxuICAgIGtleV90ZWNoczogW1wiUmVhY3RcIiwgXCJDaGFydC5qc1wiLCBcIk1hdGVyaWFsIFVJXCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJBbGdvcml0aG0gVmlzdWFsaXplclwiLFxyXG4gICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL0xvZ29zLnBuZ1wiLFxyXG4gICAgZGVwbG95ZWRfdXJsOiBcImh0dHBzOi8vdmlzdWFsLWFsZ29yaXRobS53ZWIuYXBwL1wiLFxyXG4gICAgLy9naXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9EZXktU3VtaXQvYWxnb3JpdGhtLXZpc3VhbGl6ZXJcIixcclxuICAgIGNhdGVnb3J5OiBbXCJyZWFjdFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkFuIHdlYiBhcHAgd2hpY2ggc2hvd3MgaG93IGFuIGFsZ29yaXRobSAocGF0aCBmaW5kaW5nIG9yIHNvcnRpbmcpIHdvcmtzIHdpdGggY29vbCBhbmltYXRpb25cIixcclxuICAgIGtleV90ZWNoczogW1wiUmVhY3RcIiwgXCJmaXJlYmFzZVwiLCBcIkZyYW1lciBNb3Rpb25cIl0sXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgbmFtZTogXCJEZXYgVGFsa3NcIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy9kZS5wbmdcIixcclxuICAgIGRlcGxveWVkX3VybDogXCJodHRwczovL2Rldi10YWxrcy5oZXJva3VhcHAuY29tL1wiLFxyXG4gICAgLy9naXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9EZXktU3VtaXQvRGV2LXRhbGtzXCIsXHJcbiAgICBjYXRlZ29yeTogW1wibm9kZVwiLCBcIm1vbmdvXCIsIFwicmVhY3RcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJTb2NpYWwgTWVkaWEgYXBwIGZvciBkZXZlbG9wZXJzIHdobyBjYW4gc2hhcmUgcHJvamVjdCxjcmVhdGUgcG9zdHMsZXRjLi4uXCIsXHJcbiAgICBrZXlfdGVjaHM6IFtcclxuICAgICAgXCJSZWFjdFwiLFxyXG4gICAgICBcIlJlZHV4XCIsXHJcbiAgICAgIFwiTm9kZVwiLFxyXG4gICAgICBcIkV4cHJlc3NcIixcclxuICAgICAgXCJNb25nb1wiLFxyXG4gICAgICBcIlJFU1QgQVBJXCIsXHJcbiAgICAgIFwiQm9vdHN0cmFwXCIsXHJcbiAgICBdLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIG5hbWU6IFwiUmVhbHRpbWUgQ2hhdCBBcHBcIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy9jaGF0YXBwLmpwZ1wiLFxyXG4gICAgZGVwbG95ZWRfdXJsOiBcImh0dHBzOi8vc3VtaXQtY2hhdC5uZXRsaWZ5LmFwcC9cIixcclxuICAgIC8vZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vRGV5LVN1bWl0L2NoYXQtYXBwLXNvY2tldC5pby1yZWFjdC1ub2RlXCIsXHJcbiAgICBjYXRlZ29yeTogW1wibm9kZVwiLCBcInJlYWN0XCJdLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiQmFzaWMgUmVhbHRpbWUgQ2hhdCBBcHAgd2hlcmUgb25lIGNhbiBjcmVhdGUgYSByb29tIGNhbiB0YWxrIHRvIGVhY2ggb3RoZXJcIixcclxuICAgIGtleV90ZWNoczogW1wiUmVhY3RcIiwgXCJOb2RlXCIsIFwiRXhwcmVzc1wiLCBcIlNvY2tldFwiLCBcIkJvb3RzdHJhcFwiXSxcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBuYW1lOiBcIlR3ZWV0ZXIgQ2xvbmVcIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy90d2VldG1lLmpwZ1wiLFxyXG4gICAgZGVwbG95ZWRfdXJsOiBcImh0dHA6Ly9zdW1heHR3ZWV0bWUucHl0aG9uYW55d2hlcmUuY29tL1wiLFxyXG4gICAgLy9naXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9EZXktU3VtaXQvdHdlZXRtZVwiLFxyXG4gICAgY2F0ZWdvcnk6IFtcImRqYW5nb1wiLCBcInJlYWN0XCJdLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiRmlyc3QgRGphbmdvIFByb2plY3QgOikgfCBUeXBpY2FsIFNvY2lhbCBNZWRpYSBBcHAgd2hlcmUgb25lIGNhbiBwb3N0LGxpa2UgLGNvbW1lbnQgZXRjXCIsXHJcbiAgICBrZXlfdGVjaHM6IFtcIlJlYWN0XCIsIFwiRGphbmdvXCIsIFwiRGphbmdvIFJFU1QgQVBJXCJdLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIG5hbWU6IFwiQ29sb3IgQ2xhc3NpZmljYXRpb24gdXNpbmcgdGYuanNcIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy9jb2xvci5qcGdcIixcclxuICAgIGRlcGxveWVkX3VybDogXCIhI1wiLFxyXG4gICAgLy9naXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9EZXktU3VtaXQvY29sb3ItY2xhc3NpZmljYXRpb25cIiwsXHJcbiAgICBjYXRlZ29yeTogW1wiZXhwcmVzc1wiXSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlRyaWVkIE1MIHdpdGggSlMgOikgfCB0aGlzIGFwcCBjbGFzc2lmaWVzIGEgY29sb3IgdXNpbmcgQ05OIGFsZ29yaXRobSBpbiBicm93c2VyXCIsXHJcbiAgICBrZXlfdGVjaHM6IFtcIkV4cHJlc3NcIiwgXCJUZW5zb3JGbG93LmpzXCIsIFwiVmFuaWxsYSBqc1wiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiWW91VHViZSB1c2luZyBZb3VUdWJlIFwiLFxyXG4gICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL3dlYi5wbmdcIixcclxuICAgIGRlcGxveWVkX3VybDogXCJodHRwczovL25vdC11dHViZS53ZWIuYXBwL1wiLFxyXG4gICAgLy9naXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9EZXktU3VtaXQveW91dHViZS1jbG9uZS10dXRvcmlhbC11cFwiLFxyXG4gICAgY2F0ZWdvcnk6IFtcImV4cHJlc3NcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0Z1bGwoYWxtb3N0KSBGdW5jdGlvbmFsIFlvdVR1YmUgcmVwbGljYSB3aGVyZSBvbmUgY2FuIGxvZ2luIHdpdGggaGlzL2hlciB5b3V0dWJlIGFjY291bnQgdG8gZW5qb3kgXCJub3QtWW91VHViZVwiLlVzZXIgY2FuIGxpa2UgYSB2aWRlbyxjb21tZW50IG9uIGEgdmlkZW8gJiBNdWNoIE1vcmUgJyxcclxuICAgIGtleV90ZWNoczogW1xyXG4gICAgICBcIlJlYWN0XCIsXHJcbiAgICAgIFwiUmVkdXhcIixcclxuICAgICAgXCJGaXJlYmFzZSBBdXRoXCIsXHJcbiAgICAgIFwiWW91VHViZSBBUElcIixcclxuICAgICAgXCJTYXNzXCIsXHJcbiAgICAgIFwiQm9vdHN0cmFwXCIsXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJGb290YmFsbCBBcHBcIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy9mb290YmFsbC5wbmdcIixcclxuICAgIGRlcGxveWVkX3VybDogXCJodHRwczovL28tbXktZ29hbC53ZWIuYXBwL1wiLFxyXG4gICAgLy9naXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9EZXktU3VtaXQvZm9vdGJhbGwtYXBwXCIsXHJcbiAgICBjYXRlZ29yeTogW1wicmVhY3RcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJvIG15IGdvYWwgcmVwbGljYSB3aGVyZSBhbiB1c2VyIGNhbiBrZWVwIGFuIGV5ZSBvbiBoaXMgZmF2b3JpdGUgY2x1Yi5UaGlzIGFwcCB3aWxsIGtlZXAgcHJvdmlkaW5nIFxcbiBhbGwgdGhlIHN0YXRpc3RpY3Mgb2YgdGhhdCBjbHViLmFsbCB0aGUgZmFucyBjYW4gYWxzbyBjaGF0IFwiLFxyXG4gICAga2V5X3RlY2hzOiBbXCJSZWFjdFwiLCBcIlJlZHV4XCIsIFwiRmlyZWJhc2UgQXV0aFwiLCBcIkFQSVwiLCBcIlNhc3NcIiwgXCJCb290c3RyYXBcIl0sXHJcbiAgfSxcclxuXTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==