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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/resume.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Bar.tsx":
/*!****************************!*\
  !*** ./components/Bar.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\HP\\my-portfolio\\Dev-Portfolio-Next-X\\components\\Bar.tsx";

const Bar = ({
  value: {
    Icon,
    level,
    name
  }
}) => {
  const bar_width = `${level}%`;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300 dark:bg-black-500",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex items-center px-4 py-1 rounded-full bg-green to-blue-500",
      style: {
        width: bar_width
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
        className: "mr-3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), " ", name]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Bar);

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
  //github_url: "https://github.com/Dey-Sumit/color-classification",
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

/***/ }),

/***/ "./pages/resume.tsx":
/*!**************************!*\
  !*** ./pages/resume.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Bar */ "./components/Bar.tsx");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ "./data.ts");

var _jsxFileName = "C:\\Users\\HP\\my-portfolio\\Dev-Portfolio-Next-X\\pages\\resume.tsx";



const Resume = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "px-6 py-2 overflow-y-scroll",
    style: {
      height: "65vh"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid gap-6 md:grid-cols-1",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          className: "my-3 text-2xl font-bold",
          children: "Education"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            className: "my-2 text-xl font-bold",
            children: "BTech in  Physics(Telecommunication)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "font-semibold",
            children: "Federal University of Technology Minna (2016-2021)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          className: "my-3 text-2xl font-bold",
          children: "Experience"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            className: "my-2 text-xl font-bold",
            children: "Web Developer Senior."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "font-semibold",
            children: "NestGeeks"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "my-3",
            children: "Led the development of visually stunning and intuitive websites using Reactjs resulting in elevated user experiences and positive client feedback. Stayed at the forefront of design trends and user experience best practices, integrating them into webApp, which garnered praise for their modern and user-friendly interfaces. Collaborated seamlessly with the design team, ensuring websites aligned perfectly with the brand's aesthetics, bolstering brand consistency and customer loyalty. Demonstrated a strong commitment to accessibility, creating inclusive digital products that adhere to industry standards and provide a positive experience for all users. Meticulously optimized code and conducted thorough testing, resulting in exceptional performance on various devices and platforms, improving overall user satisfaction."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            className: "my-2 text-xl font-bold",
            children: "Web Developer (Intern)."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "font-semibold",
            children: "Techon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "my-3",
            children: "partnered in the redesign of the company's main website, implementing a responsive design approach and optimizing performances. Played a key role in the development of a dynamic e-commerce platform, utilizing Reactjs , Nextjs and integrating with backend APIs. The project led to a 30% rise in online sales , contributing significantly to the company's revenue growth and market competitiveness. Collaborated closely with the marketing team to implement effective A/B tests and user behavior tracking, resulting in data-driven improvements to the website's user interface and user experience. Championed the adoption of modern front-end tools and techniques, such as Webpack and CSS pre-processors, across the development team. This initiative increased development efficiency , leading to faster project deliveries and enhanced code maintainability. Received recognition for actively participating in knowledge sharing sessions, conducting workshops, and mentoring junior developers. My efforts contributed to a more cohesive and skilled development team, fostering a collaborative and innovative work environment."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            className: "my-2 text-xl font-bold",
            children: "Mobile App Developer Jr."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "font-semibold",
            children: "Digi Telecommunication"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "my-3",
            children: "Received accolades for delivering clean and maintainable code, adhering to industry best practices, leading to reduced bug fixes and improved code maintainability. Contributed significantly to the successful launch of a high-profile mobile app that garnered 2000+ number of downloads within the first month, receiving acclaim for its design and usability. Implemented performance optimization strategies, resulting in a 20% decrease in loading times and a marked improvement in user satisfaction for both web and mobile applications."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            className: "my-2 text-xl font-bold",
            children: "Web App Developer Senior."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "font-semibold",
            children: "Tecabari"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "my-3",
            children: "Led the development of a responsive and intuitive user interface for the blog application, resulting in an 30% increase in user engagement and longer average session durations. The user-friendly design received positive feedback from users and contributed to increased site traffic. Implemented dynamic content loading and optimized performance by leveraging modern frontend technologies such as Reactjs and lazy loading. These improvements led to a 40% decrease in page load times, enhancing the overall user experience and SEO rankings. Collaborated closely with the backend development team to integrate robust APIs for user authentication, blog post creation, and comment functionalities. Actively monitored user behavior and analyzed user feedback to identify pain points and opportunities for improvement. By conducting usability tests and making data-driven design changes, Demonstrated a strong commitment to accessibility, ensuring the blog application complied with web accessibility guidelines ( WCAG) . This initiative enabled users of all abilities to access and interact with the platform, promoting inclusivity and positive user experiences."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            className: "my-2 text-xl font-bold",
            children: "Mbile App Developer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "font-semibold",
            children: "COMERIVER"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "my-3",
            children: "Led the design and implementation of a feature-rich mobile app using React Native, delivering cross-platform compatibility and reducing development time, The app's user-friendly interface and seamless performance and increase in user downloads and positive app store ratings. Collaborated closely with the backend development team to optimize API calls and data synchronization, decrease in loading times and improved overall app responsiveness. These improvements significantly enhanced the user experience, leading to higher user retention rates. Implemented real-time push notifications and in-app messaging functionality, engaging users with personalized updates and enhancing user engagement . This feature proved instrumental in increasing user interactions and fostering user loyalty. Proactively integrated secure authentication and data encryption protocols to safeguard user data and protect against potential security threats. The app's enhanced security measures earned positive reviews and established trust among users, contributing to higher user adoption rates. Demonstrated a strong commitment to continuous improvement by staying updated with the latest mobile app development trends and emerging technologies. These efforts resulted in the timely adoption of new features and optimizations, keeping the app competitive in the market."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "grid gap-9 md:grid-cols-2",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          className: "my-3 text-2xl font-bold",
          children: "Language & Framework"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "my-2",
          children: _data__WEBPACK_IMPORTED_MODULE_2__["languages"].map((language, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Bar__WEBPACK_IMPORTED_MODULE_1__["default"], {
            value: language
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 15
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "my-10",
          children: _data__WEBPACK_IMPORTED_MODULE_2__["tools"].map((tool, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Bar__WEBPACK_IMPORTED_MODULE_1__["default"], {
            value: tool
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 15
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Resume);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CYXIudHN4Iiwid2VicGFjazovLy8uL2RhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmVzdW1lLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9haVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZmFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9tZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL3JpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQmFyIiwidmFsdWUiLCJJY29uIiwibGV2ZWwiLCJuYW1lIiwiYmFyX3dpZHRoIiwid2lkdGgiLCJzZXJ2aWNlcyIsIlJpQ29tcHV0ZXJMaW5lIiwidGl0bGUiLCJhYm91dCIsIkZhU2VydmVyIiwiTWREZXZlbG9wZXJNb2RlIiwiQWlPdXRsaW5lQW50RGVzaWduIiwibGFuZ3VhZ2VzIiwiQnNDaXJjbGVGaWxsIiwidG9vbHMiLCJwcm9qZWN0cyIsImRlc2NyaXB0aW9uIiwiaW1hZ2VfcGF0aCIsImRlcGxveWVkX3VybCIsImNhdGVnb3J5Iiwia2V5X3RlY2hzIiwiUmVzdW1lIiwiaGVpZ2h0IiwibWFwIiwibGFuZ3VhZ2UiLCJpIiwidG9vbCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FB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UyxFQUFDLE9BQWY7QUFBQSxvQkFDR1gsMkNBQUssQ0FBQ1MsR0FBTixDQUFVLENBQUNHLElBQUQsRUFBT0QsQ0FBUCxrQkFDVCxxRUFBQyx1REFBRDtBQUFLLGlCQUFLLEVBQUVDO0FBQVosYUFBdUJELENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBMURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBZ0ZELENBakZEOztBQW1GZUoscUVBQWYsRTs7Ozs7Ozs7Ozs7QUN0RkEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvcmVzdW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9yZXN1bWUudHN4XCIpO1xuIiwiaW1wb3J0IHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IFNraWxsIH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcblxyXG5jb25zdCBCYXI6IEZ1bmN0aW9uQ29tcG9uZW50PHsgdmFsdWU6IFNraWxsIH0+ID0gKHtcclxuICB2YWx1ZTogeyBJY29uLCBsZXZlbCwgbmFtZSB9LFxyXG59KSA9PiB7XHJcbiAgY29uc3QgYmFyX3dpZHRoID0gYCR7bGV2ZWx9JWA7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMiB0ZXh0LXdoaXRlIGJnLWdyYXktMzAwIHJvdW5kZWQtZnVsbCBkYXJrOmJnLWRhcmstMzAwIGRhcms6YmctYmxhY2stNTAwXCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBweC00IHB5LTEgcm91bmRlZC1mdWxsIGJnLWdyZWVuIHRvLWJsdWUtNTAwXCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgd2lkdGg6IGJhcl93aWR0aCxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEljb24gY2xhc3NOYW1lPVwibXItM1wiIC8+IHtuYW1lfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEJhcjtcclxuIiwiaW1wb3J0IHsgUmlDb21wdXRlckxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcclxuaW1wb3J0IHsgRmFTZXJ2ZXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IHsgQWlPdXRsaW5lQW50RGVzaWduLCBBaU91dGxpbmVBcGkgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcclxuaW1wb3J0IHsgTWREZXZlbG9wZXJNb2RlIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcbmltcG9ydCB7IElQcm9qZWN0LCBTZXJ2aWNlLCBTa2lsbCB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5pbXBvcnQgeyBCc0NpcmNsZUZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXJ2aWNlczogU2VydmljZVtdID0gW1xyXG4gIHtcclxuICAgIEljb246IFJpQ29tcHV0ZXJMaW5lLFxyXG4gICAgdGl0bGU6IFwiRnJvbnRlbmQgRGV2ZWxvcG1lbnRcIixcclxuICAgIGFib3V0OlxyXG4gICAgICBcIkkgY2FuIGJ1aWxkIGEgYmVhdXRpZnVsIGFuZCBzY2FsYWJsZSBTUEEgdXNpbmcgPGI+IEhUTUw8L2I+LDxiPkNTUzwvYj4sPGI+UmVhY3QuanM8L2I+LDxiPk5leHQuanM8L2I+IGFuZCBvdGhlciBDU1MgZnJhbWV3b3JrIFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogRmFTZXJ2ZXIsXHJcbiAgICB0aXRsZTogXCJCYWNrZW5kICBEZXZlbG9wbWVudFwiLFxyXG4gICAgYWJvdXQ6XHJcbiAgICAgIFwiQSBsaXR0bGUgS25vd2xlZGdlIG9mIGhhbmRsaW5nIGRhdGFiYXNlLCBzZXJ2ZXIsIGFwaSB1c2luZyA8Yj5FeHByZXNzanM8L2I+LDxiPk15c3FsPC9iPiw8Yj5Nb25nb0RCPC9iPiBhbmQgPGI+RmlyZWJhc2U8L2I+XCIsXHJcbiAgfSxcclxuICBcclxuICBcclxuICB7XHJcbiAgICBJY29uOiBNZERldmVsb3Blck1vZGUsXHJcbiAgICB0aXRsZTogXCJNb2JpbGUgQXBwIERldmVsb3BtZW50XCIsXHJcbiAgICBhYm91dDogXCJkZXNpZ25pbmcgYW5kIGltcGxlbWVudGF0aW9uIG9mIGEgZmVhdHVyZS1yaWNoIG1vYmlsZSBhcHAgdXNpbmcgPGI+UmVhY3QgTmF0aXZlPC9iPiwgZGVsaXZlcmluZyBjcm9zcy1wbGF0Zm9ybSBjb21wYXRpYmlsaXR5IGFuZCByZWR1Y2luZyBkZXZlbG9wbWVudCB0aW1lLCBUaGUgYXBwJ3MgdXNlci1mcmllbmRseSBpbnRlcmZhY2UgYW5kIHNlYW1sZXNzIHBlcmZvcm1hbmNlIGFuZCBpbmNyZWFzZSBpbiB1c2VyIGRvd25sb2FkcyBhbmQgcG9zaXRpdmUgYXBwIHN0b3JlIHJhdGluZ3MuIFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQWlPdXRsaW5lQW50RGVzaWduLFxyXG4gICAgdGl0bGU6IFwiVUkvVVggZGVzaWduZXJcIixcclxuICAgIGFib3V0OlxyXG4gICAgICBcInN0dW5uaW5nIHVzZXIgaW50ZXJmYWNlIGRlc2lnbmVyIHVzaW5nIDxiPkZpZ21hPC9iPiAgYW5kICA8Yj5GcmFtZXI8L2I+IFwiLFxyXG4gIH0sXHJcbiAgXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgbGFuZ3VhZ2VzOiBTa2lsbFtdID0gW1xyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiTmV4dGpzXCIsXHJcbiAgICBsZXZlbDogXCI0NVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJKYXZhIFNjcmlwdFwiLFxyXG4gICAgbGV2ZWw6IFwiOTBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiUmVhY3QgTmF0aXZlXCIsXHJcbiAgICBsZXZlbDogXCI4MFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJSZWFjdFwiLFxyXG4gICAgbGV2ZWw6IFwiNzBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiTm9kZWpzXCIsXHJcbiAgICBsZXZlbDogXCI4MFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJCb290c3RyYXBcIixcclxuICAgIGxldmVsOiBcIjgwXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCB0b29sczogU2tpbGxbXSA9IFtcclxuICB7XHJcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXHJcbiAgICBuYW1lOiBcIlRhaWxXaW5kY3NzXCIsXHJcbiAgICBsZXZlbDogXCI4NVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJNeXNxbFwiLFxyXG4gICAgbGV2ZWw6IFwiNDVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIEljb246IEJzQ2lyY2xlRmlsbCxcclxuICAgIG5hbWU6IFwiZ2l0XCIsXHJcbiAgICBsZXZlbDogXCI2MFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgSWNvbjogQnNDaXJjbGVGaWxsLFxyXG4gICAgbmFtZTogXCJXb3JkcHJlc3NcIixcclxuICAgIGxldmVsOiBcIjc1XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXHJcbiAgICBuYW1lOiBcIkhUTUxcIixcclxuICAgIGxldmVsOiBcIjk1XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBJY29uOiBCc0NpcmNsZUZpbGwsXHJcbiAgICBuYW1lOiBcIkNTU1wiLFxyXG4gICAgbGV2ZWw6IFwiODVcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RzOiBJUHJvamVjdFtdID0gW1xyXG4gIHsgXHJcbiAgICBuYW1lOiBcIkNPVklEIFRyYWNrZXJcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlRoaXMgYXBwIHNob3dzIGEgc3RhdGlzdGljYWwgdmlldyBhYm91dCBjb3JvbmEgdmlydXMgb3ZlciB0aGUgd29ybGRcIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy9jb3ZpZC5qcGdcIixcclxuICAgIGRlcGxveWVkX3VybDogXCJodHRwczovL2NvdmlkLTE5LXRyYWNrZXItYnktc3VtaXQud2ViLmFwcC9cIixcclxuICAgIC8vZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vRGV5LVN1bWl0L2NvdmlkLTE5LXRyYWNrZXJcIixcclxuICAgIGNhdGVnb3J5OiBbXCJyZWFjdFwiXSxcclxuICAgIGtleV90ZWNoczogW1wiUmVhY3RcIiwgXCJDaGFydC5qc1wiLCBcIk1hdGVyaWFsIFVJXCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJBbGdvcml0aG0gVmlzdWFsaXplclwiLFxyXG4gICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL0xvZ29zLnBuZ1wiLFxyXG4gICAgZGVwbG95ZWRfdXJsOiBcImh0dHBzOi8vdmlzdWFsLWFsZ29yaXRobS53ZWIuYXBwL1wiLFxyXG4gICAgLy9naXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9EZXktU3VtaXQvYWxnb3JpdGhtLXZpc3VhbGl6ZXJcIixcclxuICAgIGNhdGVnb3J5OiBbXCJyZWFjdFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkFuIHdlYiBhcHAgd2hpY2ggc2hvd3MgaG93IGFuIGFsZ29yaXRobSAocGF0aCBmaW5kaW5nIG9yIHNvcnRpbmcpIHdvcmtzIHdpdGggY29vbCBhbmltYXRpb25cIixcclxuICAgIGtleV90ZWNoczogW1wiUmVhY3RcIiwgXCJmaXJlYmFzZVwiLCBcIkZyYW1lciBNb3Rpb25cIl0sXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgbmFtZTogXCJEZXYgVGFsa3NcIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy9kZS5wbmdcIixcclxuICAgIGRlcGxveWVkX3VybDogXCJodHRwczovL2Rldi10YWxrcy5oZXJva3VhcHAuY29tL1wiLFxyXG4gICAgLy9naXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9EZXktU3VtaXQvRGV2LXRhbGtzXCIsXHJcbiAgICBjYXRlZ29yeTogW1wibm9kZVwiLCBcIm1vbmdvXCIsIFwicmVhY3RcIl0sXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJTb2NpYWwgTWVkaWEgYXBwIGZvciBkZXZlbG9wZXJzIHdobyBjYW4gc2hhcmUgcHJvamVjdCxjcmVhdGUgcG9zdHMsZXRjLi4uXCIsXHJcbiAgICBrZXlfdGVjaHM6IFtcclxuICAgICAgXCJSZWFjdFwiLFxyXG4gICAgICBcIlJlZHV4XCIsXHJcbiAgICAgIFwiTm9kZVwiLFxyXG4gICAgICBcIkV4cHJlc3NcIixcclxuICAgICAgXCJNb25nb1wiLFxyXG4gICAgICBcIlJFU1QgQVBJXCIsXHJcbiAgICAgIFwiQm9vdHN0cmFwXCIsXHJcbiAgICBdLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIG5hbWU6IFwiUmVhbHRpbWUgQ2hhdCBBcHBcIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy9jaGF0YXBwLmpwZ1wiLFxyXG4gICAgZGVwbG95ZWRfdXJsOiBcImh0dHBzOi8vc3VtaXQtY2hhdC5uZXRsaWZ5LmFwcC9cIixcclxuICAgIC8vZ2l0aHViX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vRGV5LVN1bWl0L2NoYXQtYXBwLXNvY2tldC5pby1yZWFjdC1ub2RlXCIsXHJcbiAgICBjYXRlZ29yeTogW1wibm9kZVwiLCBcInJlYWN0XCJdLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiQmFzaWMgUmVhbHRpbWUgQ2hhdCBBcHAgd2hlcmUgb25lIGNhbiBjcmVhdGUgYSByb29tIGNhbiB0YWxrIHRvIGVhY2ggb3RoZXJcIixcclxuICAgIGtleV90ZWNoczogW1wiUmVhY3RcIiwgXCJOb2RlXCIsIFwiRXhwcmVzc1wiLCBcIlNvY2tldFwiLCBcIkJvb3RzdHJhcFwiXSxcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBuYW1lOiBcIlR3ZWV0ZXIgQ2xvbmVcIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy90d2VldG1lLmpwZ1wiLFxyXG4gICAgZGVwbG95ZWRfdXJsOiBcImh0dHA6Ly9zdW1heHR3ZWV0bWUucHl0aG9uYW55d2hlcmUuY29tL1wiLFxyXG4gICAgLy9naXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9EZXktU3VtaXQvdHdlZXRtZVwiLFxyXG4gICAgY2F0ZWdvcnk6IFtcImRqYW5nb1wiLCBcInJlYWN0XCJdLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiRmlyc3QgRGphbmdvIFByb2plY3QgOikgfCBUeXBpY2FsIFNvY2lhbCBNZWRpYSBBcHAgd2hlcmUgb25lIGNhbiBwb3N0LGxpa2UgLGNvbW1lbnQgZXRjXCIsXHJcbiAgICBrZXlfdGVjaHM6IFtcIlJlYWN0XCIsIFwiRGphbmdvXCIsIFwiRGphbmdvIFJFU1QgQVBJXCJdLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIG5hbWU6IFwiQ29sb3IgQ2xhc3NpZmljYXRpb24gdXNpbmcgdGYuanNcIixcclxuICAgIGltYWdlX3BhdGg6IFwiL2ltYWdlcy9jb2xvci5qcGdcIixcclxuICAgIGRlcGxveWVkX3VybDogXCIhI1wiLFxyXG4gICAgLy9naXRodWJfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9EZXktU3VtaXQvY29sb3ItY2xhc3NpZmljYXRpb25cIixcclxuICAgIGNhdGVnb3J5OiBbXCJleHByZXNzXCJdLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiVHJpZWQgTUwgd2l0aCBKUyA6KSB8IHRoaXMgYXBwIGNsYXNzaWZpZXMgYSBjb2xvciB1c2luZyBDTk4gYWxnb3JpdGhtIGluIGJyb3dzZXJcIixcclxuICAgIGtleV90ZWNoczogW1wiRXhwcmVzc1wiLCBcIlRlbnNvckZsb3cuanNcIiwgXCJWYW5pbGxhIGpzXCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJZb3VUdWJlIHVzaW5nIFlvdVR1YmUgXCIsXHJcbiAgICBpbWFnZV9wYXRoOiBcIi9pbWFnZXMvd2ViLnBuZ1wiLFxyXG4gICAgZGVwbG95ZWRfdXJsOiBcImh0dHBzOi8vbm90LXV0dWJlLndlYi5hcHAvXCIsXHJcbiAgICAvL2dpdGh1Yl91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0RleS1TdW1pdC95b3V0dWJlLWNsb25lLXR1dG9yaWFsLXVwXCIsXHJcbiAgICBjYXRlZ29yeTogW1wiZXhwcmVzc1wiXSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnRnVsbChhbG1vc3QpIEZ1bmN0aW9uYWwgWW91VHViZSByZXBsaWNhIHdoZXJlIG9uZSBjYW4gbG9naW4gd2l0aCBoaXMvaGVyIHlvdXR1YmUgYWNjb3VudCB0byBlbmpveSBcIm5vdC1Zb3VUdWJlXCIuVXNlciBjYW4gbGlrZSBhIHZpZGVvLGNvbW1lbnQgb24gYSB2aWRlbyAmIE11Y2ggTW9yZSAnLFxyXG4gICAga2V5X3RlY2hzOiBbXHJcbiAgICAgIFwiUmVhY3RcIixcclxuICAgICAgXCJSZWR1eFwiLFxyXG4gICAgICBcIkZpcmViYXNlIEF1dGhcIixcclxuICAgICAgXCJZb3VUdWJlIEFQSVwiLFxyXG4gICAgICBcIlNhc3NcIixcclxuICAgICAgXCJCb290c3RyYXBcIixcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkZvb3RiYWxsIEFwcFwiLFxyXG4gICAgaW1hZ2VfcGF0aDogXCIvaW1hZ2VzL2Zvb3RiYWxsLnBuZ1wiLFxyXG4gICAgZGVwbG95ZWRfdXJsOiBcImh0dHBzOi8vby1teS1nb2FsLndlYi5hcHAvXCIsXHJcbiAgICAvL2dpdGh1Yl91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0RleS1TdW1pdC9mb290YmFsbC1hcHBcIixcclxuICAgIGNhdGVnb3J5OiBbXCJyZWFjdFwiXSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIm8gbXkgZ29hbCByZXBsaWNhIHdoZXJlIGFuIHVzZXIgY2FuIGtlZXAgYW4gZXllIG9uIGhpcyBmYXZvcml0ZSBjbHViLlRoaXMgYXBwIHdpbGwga2VlcCBwcm92aWRpbmcgXFxuIGFsbCB0aGUgc3RhdGlzdGljcyBvZiB0aGF0IGNsdWIuYWxsIHRoZSBmYW5zIGNhbiBhbHNvIGNoYXQgXCIsXHJcbiAgICBrZXlfdGVjaHM6IFtcIlJlYWN0XCIsIFwiUmVkdXhcIiwgXCJGaXJlYmFzZSBBdXRoXCIsIFwiQVBJXCIsIFwiU2Fzc1wiLCBcIkJvb3RzdHJhcFwiXSxcclxuICB9LFxyXG5dO1xyXG4iLCJpbXBvcnQgQmFyIGZyb20gXCIuLi9jb21wb25lbnRzL0JhclwiO1xyXG5pbXBvcnQgeyBsYW5ndWFnZXMsIHRvb2xzIH0gZnJvbSBcIi4uL2RhdGFcIjtcclxuXHJcbmNvbnN0IFJlc3VtZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweC02IHB5LTIgb3ZlcmZsb3cteS1zY3JvbGxcIiAgc3R5bGU9e3sgaGVpZ2h0OiBcIjY1dmhcIiB9fT5cclxuICAgICAgey8qIC8vISBFZHVjYXRpb24gJiBFeHBlcmllbmNlICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTYgbWQ6Z3JpZC1jb2xzLTFcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm15LTMgdGV4dC0yeGwgZm9udC1ib2xkXCI+RWR1Y2F0aW9uPC9oNT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJteS0yIHRleHQteGwgZm9udC1ib2xkXCI+XHJcbiAgICAgICAgICAgIEJUZWNoIGluICBQaHlzaWNzKFRlbGVjb21tdW5pY2F0aW9uKVxyXG4gICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+RmVkZXJhbCBVbml2ZXJzaXR5IG9mIFRlY2hub2xvZ3kgTWlubmEgKDIwMTYtMjAyMSk8L3A+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJteS0zIHRleHQtMnhsIGZvbnQtYm9sZFwiPkV4cGVyaWVuY2U8L2g1PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm15LTIgdGV4dC14bCBmb250LWJvbGRcIj5XZWIgRGV2ZWxvcGVyIFNlbmlvci48L2g1PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+TmVzdEdlZWtzPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS0zXCI+TGVkIHRoZSBkZXZlbG9wbWVudCBvZiB2aXN1YWxseSBzdHVubmluZyBhbmQgaW50dWl0aXZlXHJcbiAgICAgICAgICAgICB3ZWJzaXRlcyB1c2luZyBSZWFjdGpzIHJlc3VsdGluZyBpbiBlbGV2YXRlZCB1c2VyIGV4cGVyaWVuY2VzIGFuZCBwb3NpdGl2ZSBjbGllbnQgZmVlZGJhY2suIFN0YXllZCBhdCB0aGUgZm9yZWZyb250IG9mIGRlc2lnbiB0cmVuZHMgYW5kIHVzZXIgZXhwZXJpZW5jZSBiZXN0IHByYWN0aWNlcywgaW50ZWdyYXRpbmcgdGhlbSBpbnRvIHdlYkFwcCwgd2hpY2ggZ2FybmVyZWQgcHJhaXNlIGZvciB0aGVpciBtb2Rlcm4gYW5kIHVzZXItZnJpZW5kbHkgaW50ZXJmYWNlcy4gQ29sbGFib3JhdGVkIHNlYW1sZXNzbHkgd2l0aCB0aGUgZGVzaWduIHRlYW0sIGVuc3VyaW5nIHdlYnNpdGVzIGFsaWduZWQgcGVyZmVjdGx5IHdpdGggdGhlIGJyYW5kJ3MgYWVzdGhldGljcywgYm9sc3RlcmluZyBicmFuZCBjb25zaXN0ZW5jeSBhbmQgY3VzdG9tZXIgbG95YWx0eS4gRGVtb25zdHJhdGVkIGEgc3Ryb25nIGNvbW1pdG1lbnQgdG8gYWNjZXNzaWJpbGl0eSwgY3JlYXRpbmcgaW5jbHVzaXZlIGRpZ2l0YWwgcHJvZHVjdHMgdGhhdCBhZGhlcmUgdG8gaW5kdXN0cnkgc3RhbmRhcmRzIGFuZCBwcm92aWRlIGEgcG9zaXRpdmUgZXhwZXJpZW5jZSBmb3IgYWxsIHVzZXJzLiBNZXRpY3Vsb3VzbHkgb3B0aW1pemVkIGNvZGUgYW5kIGNvbmR1Y3RlZCB0aG9yb3VnaCB0ZXN0aW5nLCByZXN1bHRpbmcgaW4gZXhjZXB0aW9uYWwgXHJcbiAgICAgICAgICAgIHBlcmZvcm1hbmNlIG9uIHZhcmlvdXMgZGV2aWNlcyBhbmQgcGxhdGZvcm1zLCBpbXByb3Zpbmcgb3ZlcmFsbCB1c2VyIHNhdGlzZmFjdGlvbi48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJteS0yIHRleHQteGwgZm9udC1ib2xkXCI+V2ViIERldmVsb3BlciAoSW50ZXJuKS48L2g1PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+VGVjaG9uPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS0zXCI+cGFydG5lcmVkIGluIHRoZSByZWRlc2lnbiBvZiB0aGUgY29tcGFueSdzIG1haW4gd2Vic2l0ZSwgaW1wbGVtZW50aW5nIGEgcmVzcG9uc2l2ZSBkZXNpZ24gYXBwcm9hY2ggYW5kIG9wdGltaXppbmcgcGVyZm9ybWFuY2VzLiBQbGF5ZWQgYSBrZXkgcm9sZSBpbiB0aGUgZGV2ZWxvcG1lbnQgb2YgYSBkeW5hbWljIGUtY29tbWVyY2UgcGxhdGZvcm0sIHV0aWxpemluZyBSZWFjdGpzICwgTmV4dGpzIGFuZCBpbnRlZ3JhdGluZyB3aXRoIGJhY2tlbmQgQVBJcy4gVGhlIHByb2plY3QgbGVkIHRvIGEgMzAlIHJpc2UgaW4gb25saW5lIHNhbGVzICwgY29udHJpYnV0aW5nIHNpZ25pZmljYW50bHkgdG8gdGhlIGNvbXBhbnkncyByZXZlbnVlIGdyb3d0aCBhbmQgbWFya2V0IGNvbXBldGl0aXZlbmVzcy4gQ29sbGFib3JhdGVkIGNsb3NlbHkgd2l0aCB0aGUgbWFya2V0aW5nIHRlYW0gdG8gaW1wbGVtZW50IGVmZmVjdGl2ZSBBL0IgdGVzdHMgYW5kIHVzZXIgYmVoYXZpb3IgdHJhY2tpbmcsIHJlc3VsdGluZyBpbiBkYXRhLWRyaXZlbiBpbXByb3ZlbWVudHMgdG8gdGhlIHdlYnNpdGUncyB1c2VyIGludGVyZmFjZSBhbmQgdXNlciBleHBlcmllbmNlLiBDaGFtcGlvbmVkIHRoZSBhZG9wdGlvbiBvZiBtb2Rlcm4gZnJvbnQtZW5kIHRvb2xzIGFuZCB0ZWNobmlxdWVzLCBzdWNoIGFzIFdlYnBhY2sgYW5kIENTUyBwcmUtcHJvY2Vzc29ycywgYWNyb3NzIHRoZSBkZXZlbG9wbWVudCB0ZWFtLiBUaGlzIGluaXRpYXRpdmUgaW5jcmVhc2VkIGRldmVsb3BtZW50IGVmZmljaWVuY3kgLCBsZWFkaW5nIHRvIGZhc3RlciBwcm9qZWN0IGRlbGl2ZXJpZXMgYW5kIGVuaGFuY2VkIGNvZGUgbWFpbnRhaW5hYmlsaXR5LiBSZWNlaXZlZCByZWNvZ25pdGlvbiBmb3IgYWN0aXZlbHkgcGFydGljaXBhdGluZyBpbiBrbm93bGVkZ2Ugc2hhcmluZyBzZXNzaW9ucywgY29uZHVjdGluZyB3b3Jrc2hvcHMsIGFuZCBtZW50b3JpbmcganVuaW9yIGRldmVsb3BlcnMuIE15IGVmZm9ydHMgY29udHJpYnV0ZWQgdG8gYSBtb3JlIGNvaGVzaXZlIGFuZCBza2lsbGVkIGRldmVsb3BtZW50IHRlYW0sIGZvc3RlcmluZyBhIGNvbGxhYm9yYXRpdmUgYW5kIGlubm92YXRpdmUgd29yayBlbnZpcm9ubWVudC48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJteS0yIHRleHQteGwgZm9udC1ib2xkXCI+TW9iaWxlIEFwcCBEZXZlbG9wZXIgSnIuPC9oNT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPkRpZ2kgVGVsZWNvbW11bmljYXRpb248L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTNcIj5SZWNlaXZlZCBhY2NvbGFkZXMgZm9yIGRlbGl2ZXJpbmcgY2xlYW4gYW5kIG1haW50YWluYWJsZSBjb2RlLCBhZGhlcmluZyB0byBpbmR1c3RyeSBiZXN0IHByYWN0aWNlcywgbGVhZGluZyB0byByZWR1Y2VkIGJ1ZyBmaXhlcyBhbmQgaW1wcm92ZWQgY29kZSBtYWludGFpbmFiaWxpdHkuIENvbnRyaWJ1dGVkIHNpZ25pZmljYW50bHkgdG8gdGhlIHN1Y2Nlc3NmdWwgbGF1bmNoIG9mIGEgaGlnaC1wcm9maWxlIG1vYmlsZSBhcHAgdGhhdCBnYXJuZXJlZCAyMDAwKyBudW1iZXIgb2YgZG93bmxvYWRzIHdpdGhpbiB0aGUgZmlyc3QgbW9udGgsIHJlY2VpdmluZyBhY2NsYWltIGZvciBpdHMgZGVzaWduIGFuZCB1c2FiaWxpdHkuIEltcGxlbWVudGVkIHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbiBzdHJhdGVnaWVzLCByZXN1bHRpbmcgaW4gYSAyMCUgZGVjcmVhc2UgaW4gbG9hZGluZyB0aW1lcyBhbmQgYSBtYXJrZWQgaW1wcm92ZW1lbnQgaW4gdXNlciBzYXRpc2ZhY3Rpb24gZm9yIGJvdGggd2ViIGFuZCBtb2JpbGUgYXBwbGljYXRpb25zLjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm15LTIgdGV4dC14bCBmb250LWJvbGRcIj5XZWIgQXBwIERldmVsb3BlciBTZW5pb3IuPC9oNT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPlRlY2FiYXJpPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS0zXCI+TGVkIHRoZSBkZXZlbG9wbWVudCBvZiBhIHJlc3BvbnNpdmUgYW5kIGludHVpdGl2ZSB1c2VyIGludGVyZmFjZSBmb3IgdGhlIGJsb2cgYXBwbGljYXRpb24sIHJlc3VsdGluZyBpbiBhbiAzMCUgaW5jcmVhc2UgaW4gdXNlciBlbmdhZ2VtZW50IGFuZCBsb25nZXIgYXZlcmFnZSBzZXNzaW9uIGR1cmF0aW9ucy4gVGhlIHVzZXItZnJpZW5kbHkgZGVzaWduIHJlY2VpdmVkIHBvc2l0aXZlIGZlZWRiYWNrIGZyb20gdXNlcnMgYW5kIGNvbnRyaWJ1dGVkIHRvIGluY3JlYXNlZCBzaXRlIHRyYWZmaWMuIEltcGxlbWVudGVkIGR5bmFtaWMgY29udGVudCBsb2FkaW5nIGFuZCBvcHRpbWl6ZWQgcGVyZm9ybWFuY2UgYnkgbGV2ZXJhZ2luZyBtb2Rlcm4gZnJvbnRlbmQgdGVjaG5vbG9naWVzIHN1Y2ggYXMgUmVhY3RqcyBhbmQgbGF6eSBsb2FkaW5nLiBUaGVzZSBpbXByb3ZlbWVudHMgbGVkIHRvIGEgNDAlIGRlY3JlYXNlIGluIHBhZ2UgbG9hZCB0aW1lcywgZW5oYW5jaW5nIHRoZSBvdmVyYWxsIHVzZXIgZXhwZXJpZW5jZSBhbmQgU0VPIHJhbmtpbmdzLiBDb2xsYWJvcmF0ZWQgY2xvc2VseSB3aXRoIHRoZSBiYWNrZW5kIGRldmVsb3BtZW50IHRlYW0gdG8gaW50ZWdyYXRlIHJvYnVzdCBBUElzIGZvciB1c2VyIGF1dGhlbnRpY2F0aW9uLCBibG9nIHBvc3QgY3JlYXRpb24sIGFuZCBjb21tZW50IGZ1bmN0aW9uYWxpdGllcy4gQWN0aXZlbHkgbW9uaXRvcmVkIHVzZXIgYmVoYXZpb3IgYW5kIGFuYWx5emVkIHVzZXIgZmVlZGJhY2sgdG8gaWRlbnRpZnkgcGFpbiBwb2ludHMgYW5kIG9wcG9ydHVuaXRpZXMgZm9yIGltcHJvdmVtZW50LiBCeSBjb25kdWN0aW5nIHVzYWJpbGl0eSB0ZXN0cyBhbmQgbWFraW5nIGRhdGEtZHJpdmVuIGRlc2lnbiBjaGFuZ2VzLCBEZW1vbnN0cmF0ZWQgYSBzdHJvbmcgY29tbWl0bWVudCB0byBhY2Nlc3NpYmlsaXR5LCBlbnN1cmluZyB0aGUgYmxvZyBhcHBsaWNhdGlvbiBjb21wbGllZCB3aXRoIHdlYiBhY2Nlc3NpYmlsaXR5IGd1aWRlbGluZXMgKCBXQ0FHKSAuIFRoaXMgaW5pdGlhdGl2ZSBlbmFibGVkIHVzZXJzIG9mIGFsbCBhYmlsaXRpZXMgdG8gYWNjZXNzIGFuZCBpbnRlcmFjdCB3aXRoIHRoZSBwbGF0Zm9ybSwgcHJvbW90aW5nIGluY2x1c2l2aXR5IGFuZCBwb3NpdGl2ZSB1c2VyIGV4cGVyaWVuY2VzLjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm15LTIgdGV4dC14bCBmb250LWJvbGRcIj5NYmlsZSBBcHAgRGV2ZWxvcGVyPC9oNT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPkNPTUVSSVZFUjwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktM1wiPkxlZCB0aGUgZGVzaWduIGFuZCBpbXBsZW1lbnRhdGlvbiBvZiBhIGZlYXR1cmUtcmljaCBtb2JpbGUgYXBwIHVzaW5nIFJlYWN0IE5hdGl2ZSwgZGVsaXZlcmluZyBjcm9zcy1wbGF0Zm9ybSBjb21wYXRpYmlsaXR5IGFuZCByZWR1Y2luZyBkZXZlbG9wbWVudCB0aW1lLCBUaGUgYXBwJ3MgdXNlci1mcmllbmRseSBpbnRlcmZhY2UgYW5kIHNlYW1sZXNzIHBlcmZvcm1hbmNlIGFuZCBpbmNyZWFzZSBpbiB1c2VyIGRvd25sb2FkcyBhbmQgcG9zaXRpdmUgYXBwIHN0b3JlIHJhdGluZ3MuIENvbGxhYm9yYXRlZCBjbG9zZWx5IHdpdGggdGhlIGJhY2tlbmQgZGV2ZWxvcG1lbnQgdGVhbSB0byBvcHRpbWl6ZSBBUEkgY2FsbHMgYW5kIGRhdGEgc3luY2hyb25pemF0aW9uLCBkZWNyZWFzZSBpbiBsb2FkaW5nIHRpbWVzIGFuZCBpbXByb3ZlZCBvdmVyYWxsIGFwcCByZXNwb25zaXZlbmVzcy4gVGhlc2UgaW1wcm92ZW1lbnRzIHNpZ25pZmljYW50bHkgZW5oYW5jZWQgdGhlIHVzZXIgZXhwZXJpZW5jZSwgbGVhZGluZyB0byBoaWdoZXIgdXNlciByZXRlbnRpb24gcmF0ZXMuIEltcGxlbWVudGVkIHJlYWwtdGltZSBwdXNoIG5vdGlmaWNhdGlvbnMgYW5kIGluLWFwcCBtZXNzYWdpbmcgZnVuY3Rpb25hbGl0eSwgZW5nYWdpbmcgdXNlcnMgd2l0aCBwZXJzb25hbGl6ZWQgdXBkYXRlcyBhbmQgZW5oYW5jaW5nIHVzZXIgZW5nYWdlbWVudCAuIFRoaXMgZmVhdHVyZSBwcm92ZWQgaW5zdHJ1bWVudGFsIGluIGluY3JlYXNpbmcgdXNlciBpbnRlcmFjdGlvbnMgYW5kIGZvc3RlcmluZyB1c2VyIGxveWFsdHkuIFByb2FjdGl2ZWx5IGludGVncmF0ZWQgc2VjdXJlIGF1dGhlbnRpY2F0aW9uIGFuZCBkYXRhIGVuY3J5cHRpb24gcHJvdG9jb2xzIHRvIHNhZmVndWFyZCB1c2VyIGRhdGEgYW5kIHByb3RlY3QgYWdhaW5zdCBwb3RlbnRpYWwgc2VjdXJpdHkgdGhyZWF0cy4gVGhlIGFwcCdzIGVuaGFuY2VkIHNlY3VyaXR5IG1lYXN1cmVzIGVhcm5lZCBwb3NpdGl2ZSByZXZpZXdzIGFuZCBlc3RhYmxpc2hlZCB0cnVzdCBhbW9uZyB1c2VycywgY29udHJpYnV0aW5nIHRvIGhpZ2hlciB1c2VyIGFkb3B0aW9uIHJhdGVzLiBEZW1vbnN0cmF0ZWQgYSBzdHJvbmcgY29tbWl0bWVudCB0byBjb250aW51b3VzIGltcHJvdmVtZW50IGJ5IHN0YXlpbmcgdXBkYXRlZCB3aXRoIHRoZSBsYXRlc3QgbW9iaWxlIGFwcCBkZXZlbG9wbWVudCB0cmVuZHMgYW5kIGVtZXJnaW5nIHRlY2hub2xvZ2llcy4gVGhlc2UgZWZmb3J0cyByZXN1bHRlZCBpbiB0aGUgdGltZWx5IGFkb3B0aW9uIG9mIG5ldyBmZWF0dXJlcyBhbmQgb3B0aW1pemF0aW9ucywga2VlcGluZyB0aGUgYXBwIGNvbXBldGl0aXZlIGluIHRoZSBtYXJrZXQuPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qTGFuZ3VhZ2VzICYgVG9vbHMgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtOSBtZDpncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibXktMyB0ZXh0LTJ4bCBmb250LWJvbGRcIj5MYW5ndWFnZSAmIEZyYW1ld29yazwvaDU+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTJcIj5cclxuICAgICAgICAgICAge2xhbmd1YWdlcy5tYXAoKGxhbmd1YWdlLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPEJhciB2YWx1ZT17bGFuZ3VhZ2V9IGtleT17aX0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTEwXCI+XHJcbiAgICAgICAgICAgIHt0b29scy5tYXAoKHRvb2wsIGkpID0+IChcclxuICAgICAgICAgICAgICA8QmFyIHZhbHVlPXt0b29sfSBrZXk9e2l9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3VtZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvYWlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvYnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvbWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvcmlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=