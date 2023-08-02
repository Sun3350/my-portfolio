module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ServiceCard.tsx":
/*!************************************!*\
  !*** ./components/ServiceCard.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\HP\\my-portfolio\\Dev-Portfolio-Next-X\\components\\ServiceCard.tsx";

// import { motion } from 'framer-motion'
const ServiceCard = ({
  service: {
    Icon,
    title,
    about
  }
}) => {
  //XSS attack :( on our portfolio btw, as an alternate use npm i dom purify
  function createMarkup() {
    return {
      __html: about
    };
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex items-center p-2 space-x-4 ",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
      className: "w-12 h-12 text-green"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 10
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
        className: "font-bold",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        dangerouslySetInnerHTML: createMarkup()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 10
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 7
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ServiceCard);

/***/ }),

/***/ "./data.ts":
/*!*****************!*\
  !*** ./data.ts ***!
  \*****************/
/*! exports provided: services, languages, tools, projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "languages", function() { return languages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tools", function() { return tools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projects", function() { return projects; });
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-icons/ri */ "react-icons/ri");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ "react-icons/bs");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__);





const services = [{
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
const languages = [{
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
const tools = [{
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
const projects = [{
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
  github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
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

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ServiceCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ServiceCard */ "./components/ServiceCard.tsx");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ "./data.ts");

var _jsxFileName = "C:\\Users\\HP\\my-portfolio\\Dev-Portfolio-Next-X\\pages\\index.tsx";



const About = () => {
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
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "grid gap-6 my-3 md:grid-cols-2",
        children: _data__WEBPACK_IMPORTED_MODULE_2__["services"].map(service => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 ",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ServiceCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
            service: service
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 15
          }, undefined)
        }, service.title, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
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


/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "react-icons/bs":
/*!*********************************!*\
  !*** external "react-icons/bs" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/bs");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "react-icons/ri":
/*!*********************************!*\
  !*** external "react-icons/ri" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ri");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZXJ2aWNlQ2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvYWlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9ic1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2ZhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvbWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9yaVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlNlcnZpY2VDYXJkIiwic2VydmljZSIsIkljb24iLCJ0aXRsZSIsImFib3V0IiwiY3JlYXRlTWFya3VwIiwiX19odG1sIiwic2VydmljZXMiLCJSaUNvbXB1dGVyTGluZSIsIkZhU2VydmVyIiwiTWREZXZlbG9wZXJNb2RlIiwiQWlPdXRsaW5lQW50RGVzaWduIiwibGFuZ3VhZ2VzIiwiQnNDaXJjbGVGaWxsIiwibmFtZSIsImxldmVsIiwidG9vbHMiLCJwcm9qZWN0cyIsImRlc2NyaXB0aW9uIiwiaW1hZ2VfcGF0aCIsImRlcGxveWVkX3VybCIsImdpdGh1Yl91cmwiLCJjYXRlZ29yeSIsImtleV90ZWNocyIsIkFib3V0IiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwibWFwIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FB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LDBDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBUUU7QUFBSyxpQkFBUyxFQUFDLGdDQUFmO0FBQUEsa0JBRUduQiw4Q0FBUSxDQUFDb0IsR0FBVCxDQUFjMUIsT0FBRCxpQkFDWjtBQUNFLG1CQUFTLEVBQUMsdUVBRFo7QUFBQSxpQ0FJRSxxRUFBQywrREFBRDtBQUFhLG1CQUFPLEVBQUVBO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRixXQUVPQSxPQUFPLENBQUNFLEtBRmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERDtBQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBMkJELENBOUJELEMsQ0FnQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVlcUIsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUNyRUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICcuLi90eXBlcydcclxuLy8gaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuXHJcbmNvbnN0IFNlcnZpY2VDYXJkOiBGdW5jdGlvbkNvbXBvbmVudDx7IHNlcnZpY2U6IFNlcnZpY2UgfT4gPSAoe1xyXG4gICBzZXJ2aWNlOiB7IEljb24sIHRpdGxlLCBhYm91dCB9LFxyXG59KSA9PiB7XHJcbiAgIC8vWFNTIGF0dGFjayA6KCBvbiBvdXIgcG9ydGZvbGlvIGJ0dywgYXMgYW4gYWx0ZXJuYXRlIHVzZSBucG0gaSBkb20gcHVyaWZ5XHJcbiAgIGZ1bmN0aW9uIGNyZWF0ZU1hcmt1cCgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgX19odG1sOiBhYm91dCxcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgcC0yIHNwYWNlLXgtNCAnPlxyXG4gICAgICAgICA8SWNvbiBjbGFzc05hbWU9J3ctMTIgaC0xMiB0ZXh0LWdyZWVuJyAvPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nJz5cclxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT0nZm9udC1ib2xkJz57dGl0bGV9PC9oNj5cclxuICAgICAgICAgICAgPHAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e2NyZWF0ZU1hcmt1cCgpfSAvPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VydmljZUNhcmRcclxuIiwiaW1wb3J0IHsgUmlDb21wdXRlckxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcclxuaW1wb3J0IHsgRmFTZXJ2ZXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IHsgQWlPdXRsaW5lQW50RGVzaWduLCBBaU91dGxpbmVBcGkgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcclxuaW1wb3J0IHsgTWREZXZlbG9wZXJNb2RlIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcbmltcG9ydCB7IElQcm9qZWN0LCBTZXJ2aWNlLCBTa2lsbCB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5pbXBvcnQgeyBCc0NpcmNsZUZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXJ2aWNlczogU2VydmljZVtdID0gW1xyXG4gIHtcclxuICAgIEljb246IFJpQ29tcHV0ZXJMaW5lLFxyXG4gICAgdGl0bGU6IFwiRnJvbnRlbmQgRGV2ZWxvcG1lbnRcIixcclxuICAgIGFib3V0OlxyXG4gICAgICBcIkkgY2FuIGJ1aWxkIGEgYmVhdXRpZnVsIGFuZCBzY2FsYWJsZSBTUEEgdXNpbmcgPGI+IEhUTUw8L2I+LDxiPkNTUzwvYj4sPGI+UmVhY3QuanM8L2I+LDxiPk5leHQuanM8L2I+IGFuZCBvdGhlciBDU1MgZnJhbWV3b3JrIFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogRmFTZXJ2ZXIsXHJcbiAgICB0aXRsZTogXCJCYWNrZW5kICBEZXZlbG9wbWVudFwiLFxyXG4gICAgYWJvdXQ6XHJcbiAgICAgIFwiQSBsaXR0bGUgS25vd2xlZGdlIG9mIGhhbmRsaW5nIGRhdGFiYXNlLCBzZXJ2ZXIsIGFwaSB1c2luZyA8Yj5FeHByZXNzanM8L2I+LDxiPk15c3FsPC9iPiw8Yj5Nb25nb0RCPC9iPiBhbmQgPGI+RmlyZWJhc2U8L2I+XCIsXHJcbiAgfSxcclxuICBcclxuICBcclxuICB7XHJcbiAgICBJY29uOiBNZERldmVsb3Blck1vZGUsXHJcbiAgICB0aXRsZTogXCJNb2JpbGUgQXBwIERldmVsb3BtZW50XCIsXHJcbiAgICBhYm91dDogXCJkZXNpZ25pbmcgYW5kIGltcGxlbWVudGF0aW9uIG9mIGEgZmVhdHVyZS1yaWNoIG1vYmlsZSBhcHAgdXNpbmcgPGI+UmVhY3QgTmF0aXZlPC9iPiwgZGVsaXZlcmluZyBjcm9zcy1wbGF0Zm9ybSBjb21wYXRpYmlsaXR5IGFuZCByZWR1Y2luZyBkZXZlbG9wbWVudCB0aW1lLCBUaGUgYXBwJ3MgdXNlci1mcmllbmRseSBpbnRlcmZhY2UgYW5kIHNlYW1sZXNzIHBlcmZvcm1hbmNlIGFuZCBpbmNyZWFzZSBpbiB1c2VyIGRvd25sb2FkcyBhbmQgcG9zaXRpdmUgYXBwIHN0b3JlIHJhdGluZ3MuIFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQWlPdXRsaW5lQW50RGVzaWduLFxyXG4gICAgdGl0bGU6IFwiVUkvVVggZGVzaWduZXJcIixcclxuICAgIGFib3V0OlxyXG4gICAgICBcInN0dW5uaW5nIHVzZXIgaW50ZXJmYWNlIGRlc2lnbmVyIHVzaW5nIDxiPkZpZ21hPC9iPiAgYW5kICA8Yj5GcmFtZXI8L2I+IFwiLFxyXG4gIH0sXHJcbiAgXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgbGFuZ3VhZ2VzOiBTa2lsbFtdID0gW1xyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiTmV4dGpzXCIsXHJcbiAgICBsZXZlbDogXCI0NVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJKYXZhIFNjcmlwdFwiLFxyXG4gICAgbGV2ZWw6IFwiOTBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiUmVhY3QgTmF0aXZlXCIsXHJcbiAgICBsZXZlbDogXCI4MFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJSZWFjdFwiLFxyXG4gICAgbGV2ZWw6IFwiNzBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiTm9kZWpzXCIsXHJcbiAgICBsZXZlbDogXCI4MFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJCb290c3RyYXBcIixcclxuICAgIGxldmVsOiBcIjgwXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCB0b29sczogU2tpbGxbXSA9IFtcclxuICB7XHJcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXHJcbiAgICBuYW1lOiBcIlRhaWxXaW5kY3NzXCIsXHJcbiAgICBsZXZlbDogXCI4NVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJNeXNxbFwiLFxyXG4gICAgbGV2ZWw6IFwiNDVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiZ2l0XCIsXHJcbiAgICBsZXZlbDogXCI2MFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJXb3JkcHJlc3NcIixcclxuICAgIGxldmVsOiBcIjc1XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXHJcbiAgICBuYW1lOiBcIkhUTUxcIixcclxuICAgIGxldmVsOiBcIjk1XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXHJcbiAgICBuYW1lOiBcIkNTU1wiLFxyXG4gICAgbGV2ZWw6IFwiODVcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RzOiBJUHJvamVjdFtdID0gW1xyXG4gIHsgXHJcbiAgICBuYW1lOiBcIkNPVklEIFRyYWNrZXJcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlRoaXMgYXBwIHNob3dzIGEgc3RhdGlzdGljYWwgdmlldyBhYm91dCBjb3JvbmEgdmlydXMgb3ZlciB0aGUgd29ybGRcIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy9jb3ZpZC5qcGdcIixcclxuICAgIGRlcGxveWVkX3VybDogXCJodHRwczovL2NvdmlkLTE5LXRyYWNrZXItYnktc3VtaXQud2ViLmFwcC9cIixcclxuICAgIGdpdGh1Yl91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0RleS1TdW1pdC9jb3ZpZC0xOS10cmFja2VyXCIsXHJcbiAgICBjYXRlZ29yeTogW1wicmVhY3RcIl0sXHJcbiAgICBrZXlfdGVjaHM6IFtcIlJlYWN0XCIsIFwiQ2hhcnQuanNcIiwgXCJNYXRlcmlhbCBVSVwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQWxnb3JpdGhtIFZpc3VhbGl6ZXJcIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy9hbGdvVmlzdWFsLnBuZ1wiLFxyXG4gICAgZGVwbG95ZWRfdXJsOiBcImh0dHBzOi8vdmlzdWFsLWFsZ29yaXRobS53ZWIuYXBwL1wiLFxyXG4gICAgZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vRGV5LVN1bWl0L2FsZ29yaXRobS12aXN1YWxpemVyXCIsXHJcbiAgICBjYXRlZ29yeTogW1wicmVhY3RcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJBbiB3ZWIgYXBwIHdoaWNoIHNob3dzIGhvdyBhbiBhbGdvcml0aG0gKHBhdGggZmluZGluZyBvciBzb3J0aW5nKSB3b3JrcyB3aXRoIGNvb2wgYW5pbWF0aW9uXCIsXHJcbiAgICBrZXlfdGVjaHM6IFtcIlJlYWN0XCIsIFwiZmlyZWJhc2VcIiwgXCJGcmFtZXIgTW90aW9uXCJdLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIG5hbWU6IFwiRGV2IFRhbGtzXCIsXHJcbiAgICBpbWFnZV9wYXRoOiBcIi9pbWFnZXMvZGV2LmpwZ1wiLFxyXG4gICAgZGVwbG95ZWRfdXJsOiBcImh0dHBzOi8vZGV2LXRhbGtzLmhlcm9rdWFwcC5jb20vXCIsXHJcbiAgICBnaXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9EZXktU3VtaXQvRGV2LXRhbGtzXCIsXHJcbiAgICBjYXRlZ29yeTogW1wibm9kZVwiLCBcIm1vbmdvXCIsIFwicmVhY3RcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJTb2NpYWwgTWVkaWEgYXBwIGZvciBkZXZlbG9wZXJzIHdobyBjYW4gc2hhcmUgcHJvamVjdCxjcmVhdGUgcG9zdHMsZXRjLi4uXCIsXHJcbiAgICBrZXlfdGVjaHM6IFtcclxuICAgICAgXCJSZWFjdFwiLFxyXG4gICAgICBcIlJlZHV4XCIsXHJcbiAgICAgIFwiTm9kZVwiLFxyXG4gICAgICBcIkV4cHJlc3NcIixcclxuICAgICAgXCJNb25nb1wiLFxyXG4gICAgICBcIlJFU1QgQVBJXCIsXHJcbiAgICAgIFwiQm9vdHN0cmFwXCIsXHJcbiAgICBdLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIG5hbWU6IFwiUmVhbHRpbWUgQ2hhdCBBcHBcIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy9jaGF0YXBwLmpwZ1wiLFxyXG4gICAgZGVwbG95ZWRfdXJsOiBcImh0dHBzOi8vc3VtaXQtY2hhdC5uZXRsaWZ5LmFwcC9cIixcclxuICAgIGdpdGh1Yl91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0RleS1TdW1pdC9jaGF0LWFwcC1zb2NrZXQuaW8tcmVhY3Qtbm9kZVwiLFxyXG4gICAgY2F0ZWdvcnk6IFtcIm5vZGVcIiwgXCJyZWFjdFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkJhc2ljIFJlYWx0aW1lIENoYXQgQXBwIHdoZXJlIG9uZSBjYW4gY3JlYXRlIGEgcm9vbSBjYW4gdGFsayB0byBlYWNoIG90aGVyXCIsXHJcbiAgICBrZXlfdGVjaHM6IFtcIlJlYWN0XCIsIFwiTm9kZVwiLCBcIkV4cHJlc3NcIiwgXCJTb2NrZXRcIiwgXCJCb290c3RyYXBcIl0sXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgbmFtZTogXCJUd2VldGVyIENsb25lXCIsXHJcbiAgICBpbWFnZV9wYXRoOiBcIi9pbWFnZXMvdHdlZXRtZS5qcGdcIixcclxuICAgIGRlcGxveWVkX3VybDogXCJodHRwOi8vc3VtYXh0d2VldG1lLnB5dGhvbmFueXdoZXJlLmNvbS9cIixcclxuICAgIGdpdGh1Yl91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0RleS1TdW1pdC90d2VldG1lXCIsXHJcbiAgICBjYXRlZ29yeTogW1wiZGphbmdvXCIsIFwicmVhY3RcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJGaXJzdCBEamFuZ28gUHJvamVjdCA6KSB8IFR5cGljYWwgU29jaWFsIE1lZGlhIEFwcCB3aGVyZSBvbmUgY2FuIHBvc3QsbGlrZSAsY29tbWVudCBldGNcIixcclxuICAgIGtleV90ZWNoczogW1wiUmVhY3RcIiwgXCJEamFuZ29cIiwgXCJEamFuZ28gUkVTVCBBUElcIl0sXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgbmFtZTogXCJDb2xvciBDbGFzc2lmaWNhdGlvbiB1c2luZyB0Zi5qc1wiLFxyXG4gICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL2NvbG9yLmpwZ1wiLFxyXG4gICAgZGVwbG95ZWRfdXJsOiBcIiEjXCIsXHJcbiAgICBnaXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9EZXktU3VtaXQvY29sb3ItY2xhc3NpZmljYXRpb25cIixcclxuICAgIGNhdGVnb3J5OiBbXCJleHByZXNzXCJdLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiVHJpZWQgTUwgd2l0aCBKUyA6KSB8IHRoaXMgYXBwIGNsYXNzaWZpZXMgYSBjb2xvciB1c2luZyBDTk4gYWxnb3JpdGhtIGluIGJyb3dzZXJcIixcclxuICAgIGtleV90ZWNoczogW1wiRXhwcmVzc1wiLCBcIlRlbnNvckZsb3cuanNcIiwgXCJWYW5pbGxhIGpzXCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJZb3VUdWJlIHVzaW5nIFlvdVR1YmUgXCIsXHJcbiAgICBpbWFnZV9wYXRoOiBcIi9pbWFnZXMveW91dHViZUNsb25lLnBuZ1wiLFxyXG4gICAgZGVwbG95ZWRfdXJsOiBcImh0dHBzOi8vbm90LXV0dWJlLndlYi5hcHAvXCIsXHJcbiAgICBnaXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9EZXktU3VtaXQveW91dHViZS1jbG9uZS10dXRvcmlhbC11cFwiLFxyXG4gICAgY2F0ZWdvcnk6IFtcImV4cHJlc3NcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0Z1bGwoYWxtb3N0KSBGdW5jdGlvbmFsIFlvdVR1YmUgcmVwbGljYSB3aGVyZSBvbmUgY2FuIGxvZ2luIHdpdGggaGlzL2hlciB5b3V0dWJlIGFjY291bnQgdG8gZW5qb3kgXCJub3QtWW91VHViZVwiLlVzZXIgY2FuIGxpa2UgYSB2aWRlbyxjb21tZW50IG9uIGEgdmlkZW8gJiBNdWNoIE1vcmUgJyxcclxuICAgIGtleV90ZWNoczogW1xyXG4gICAgICBcIlJlYWN0XCIsXHJcbiAgICAgIFwiUmVkdXhcIixcclxuICAgICAgXCJGaXJlYmFzZSBBdXRoXCIsXHJcbiAgICAgIFwiWW91VHViZSBBUElcIixcclxuICAgICAgXCJTYXNzXCIsXHJcbiAgICAgIFwiQm9vdHN0cmFwXCIsXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJGb290YmFsbCBBcHBcIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy9mb290YmFsbC5wbmdcIixcclxuICAgIGRlcGxveWVkX3VybDogXCJodHRwczovL28tbXktZ29hbC53ZWIuYXBwL1wiLFxyXG4gICAgZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vRGV5LVN1bWl0L2Zvb3RiYWxsLWFwcFwiLFxyXG4gICAgY2F0ZWdvcnk6IFtcInJlYWN0XCJdLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwibyBteSBnb2FsIHJlcGxpY2Egd2hlcmUgYW4gdXNlciBjYW4ga2VlcCBhbiBleWUgb24gaGlzIGZhdm9yaXRlIGNsdWIuVGhpcyBhcHAgd2lsbCBrZWVwIHByb3ZpZGluZyBcXG4gYWxsIHRoZSBzdGF0aXN0aWNzIG9mIHRoYXQgY2x1Yi5hbGwgdGhlIGZhbnMgY2FuIGFsc28gY2hhdCBcIixcclxuICAgIGtleV90ZWNoczogW1wiUmVhY3RcIiwgXCJSZWR1eFwiLCBcIkZpcmViYXNlIEF1dGhcIiwgXCJBUElcIiwgXCJTYXNzXCIsIFwiQm9vdHN0cmFwXCJdLFxyXG4gIH0sXHJcbl07XHJcbiIsImltcG9ydCB7XHJcbiAgR2V0U2VydmVyU2lkZVByb3BzLFxyXG4gIEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHQsXHJcbiAgR2V0U3RhdGljUHJvcHMsXHJcbiAgR2V0U3RhdGljUHJvcHNDb250ZXh0LFxyXG4gIE5leHRQYWdlLFxyXG59IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBTZXJ2aWNlQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZXJ2aWNlQ2FyZFwiO1xyXG5pbXBvcnQgeyBzZXJ2aWNlcyB9IGZyb20gXCIuLi9kYXRhXCI7XHJcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuXHJcbmNvbnN0IEFib3V0OiBOZXh0UGFnZSA9ICgpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhzZXJ2aWNlcyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZmxleC1ncm93IHB4LTYgcHQtMSBcIj5cclxuICAgICAgPGg2IGNsYXNzTmFtZT1cIm15LTMgdGV4dC1iYXNlIGZvbnQtbWVkaXVtXCI+XHJcbiAgICAgIEkgYW0gYSBwYXNzaW9uYXRlIGZyb250ZW5kIHdlYiBhbmQgbW9iaWxlIGFwcCBkZXZlbG9wZXIgd2l0aCBvdmVyIDQgeWVhcnMgb2YgZXhwZXJpZW5jZSwgY29tbWl0dGVkIHRvIGNyZWF0aW5nIHZpc3VhbGx5IHN0dW5uaW5nIGFuZCB1c2VyLWZyaWVuZGx5IHdlYnNpdGVzIGFuZCBhcHBsaWNhdGlvbnMuIFdpdGggZXhwZXJ0aXNlIGluIEhUTUwsIENTUywgSmF2YVNjcmlwdCwgUmVhY3RqcywgTmV4dGpzIGFuZCBSZWFjdCBOYXRpdmUsIEkgZGVsaXZlciBoaWdoLXF1YWxpdHkgcmVzdWx0cyBieSBzdGF5aW5nIHVwZGF0ZWQgd2l0aCB0aGUgbGF0ZXN0IGRlc2lnbiB0cmVuZHMgYW5kIHRlY2hub2xvZ2llcy4gSSBjb2xsYWJvcmF0ZSBjbG9zZWx5IHdpdGggZGVzaWduZXJzLCBlbnN1cmluZyBhZXN0aGV0aWMgYWxpZ25tZW50LCBhY2Nlc3NpYmlsaXR5LCBhbmQgc2VhbWxlc3MgdXNlciBleHBlcmllbmNlcy4gTXkgZm9jdXMgb24gY2xlYW4gYW5kIG1haW50YWluYWJsZSBjb2RlLCByaWdvcm91cyB0ZXN0aW5nLCBhbmQgb3B0aW1pemF0aW9uIGd1YXJhbnRlZXMgdG9wLW5vdGNoIHBlcmZvcm1hbmNlIG9uIHZhcmlvdXMgZGV2aWNlcyBhbmQgcGxhdGZvcm1zLiBNeSBnb2FsIGlzIHRvIGNyZWF0ZSBleGNlcHRpb25hbCBkaWdpdGFsIHNvbHV0aW9ucyB0aGF0IGNhdGVyIHRvIGNsaWVudHMgYW5kIGVuZC11c2VycyBhbGlrZS5cclxuICAgICAgPC9oNj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBwLTQgbXQtNSBiZy1ncmF5LTQwMCBkYXJrOmJnLWRhcmstMTAwIFwiXHJcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCItMS41cmVtXCIsIG1hcmdpblJpZ2h0OiBcIi0xLjVyZW1cIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm15LTMgdGV4dC14bCBmb250LXNlbWlib2xkIHRyYWNraW5nLXdpZGVcIj5cclxuICAgICAgICAgIFdoYXQgSSBhbSBkb2luZ1xyXG4gICAgICAgIDwvaDQ+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNiBteS0zIG1kOmdyaWQtY29scy0yXCI+XHJcbiAgICAgICAgICB7LyogY2hpbGRyZW4ncyBpbml0aWFsIGFuZCBhbmltYXRlIHByb3BlcnR5IHNob3VsZCBiZSBzYW1lIGFzIHRoZSBwYXJlbnQgZHVyaW5nIGEgc3RhZ2dlciBlZmZlY3QgICovfVxyXG4gICAgICAgICAge3NlcnZpY2VzLm1hcCgoc2VydmljZSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBwLTIgYmctZ3JheS0yMDAgcm91bmRlZC1sZyBkYXJrOmJnLWRhcmstMjAwIG1kOmNvbC1zcGFuLTEgXCJcclxuICAgICAgICAgICAgICBrZXk9e3NlcnZpY2UudGl0bGV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8U2VydmljZUNhcmQgc2VydmljZT17c2VydmljZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuLy8hY2FsbGVkIGV2ZXJ5IHRpbWUgIHRoZSBwYWdlIHJlZnJlc2hlZFxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoXHJcbi8vICAgIGNvbnRleHQ6IEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHRcclxuLy8gKSA9PiB7XHJcbi8vICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3NlcnZpY2VzJylcclxuLy8gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuLy8gICAgY29uc29sZS5sb2coZGF0YSlcclxuLy8gICAgcmV0dXJuIHsgcHJvcHM6IHsgc2VydmljZXM6IGRhdGEuc2VydmljZXMgfSB9XHJcbi8vIH1cclxuXHJcbi8vIWNhbGxlZCBvbmx5IGR1cmluZyB0aGUgYnVpbGQgb2YgdGhlIHByb2plY3RcclxuLy8/IG1ha2Ugc3VyZSB0aGUgc2VydmVyKGxvY2FsaG9zdDozMDAwKVt0aGlzIHdpbGwgcmVjZWl2ZSB0aGUgcmVxdWVzdCBkdXJpbmcgYnVpbGRdIGlzIHJ1bm5pbmcgb24gYSB0ZXJtaW5hbCBkdXJpbmcgdGhlIGJ1aWxkXHJcbi8vPyBhbHNvIG5lZWQgdG8gY2hhbmdlIHRoZSBsb2NhbGhvc3QgZHVyaW5nIHRoZSBkZXBsb3ltZW50IHwgc2VlIHRoZSB0b2RvXHJcbi8vIGh0dHBzOi8vYXVkZTUzLm1lZGl1bS5jb20vc2V0LWVudmlyb25tZW50LXZhcmlhYmxlcy13aXRoLW5leHQtanMtYW5kLXZlcmNlbC1lNTQ0YzA0NjBhNDhcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoXHJcbi8vICAgIGNvbnRleHQ6IEdldFN0YXRpY1Byb3BzQ29udGV4dFxyXG4vLyApID0+IHtcclxuLy8gICAgLy8gY29uc29sZS5sb2coY29udGV4dCk7XHJcblxyXG4vLyAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zZXJ2aWNlcycpXHJcbi8vICAgIGNvbnN0IHsgc2VydmljZXMgfSA9IGF3YWl0IHJlcy5qc29uKClcclxuLy8gICAgY29uc29sZS5sb2coeyBzZXJ2aWNlcyB9KVxyXG4vLyAgICByZXR1cm4geyBwcm9wczogeyBzZXJ2aWNlczogc2VydmljZXMgfSB9XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9haVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9ic1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9tZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9yaVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==