module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/course/[slug].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/cards/SingleCourseJumbotron.js":
/*!***************************************************!*\
  !*** ./components/cards/SingleCourseJumbotron.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_course_slug___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/course/[slug] */ "./pages/course/[slug].js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/helpers */ "./utils/helpers.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-player */ "react-player");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "D:\\TLCN\\henry-code\\client\\components\\cards\\SingleCourseJumbotron.js";






const SingleCourseJumbotron = ({
  course,
  showModal,
  setShowModal,
  preview,
  setPreview,
  loading,
  user,
  handlePaidEnrollment,
  handleFreeEnrollment,
  enrolled,
  setEnrolled
}) => {
  // destructure
  const {
    name,
    description,
    instructor,
    updatedAt,
    lessons,
    image,
    price,
    paid,
    category
  } = course;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jumbotron bg-primary square",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-md-8",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-light font-weight-bold",
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "lead",
          children: [description && description.substring(0, 160), "..."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
          count: category,
          style: {
            backgroundColor: "#03a9f4"
          },
          className: "pb-4 mr-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Created by ", instructor.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Last udpated ", new Date(updatedAt).toLocaleDateString()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          className: "text-light",
          children: paid ? Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_2__["currencyFormatter"])({
            amount: price,
            currency: "usd"
          }) : "Free"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-md-4",
        children: [lessons[0].video && lessons[0].video.Location ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: () => {
            setPreview(lessons[0].video.Location);
            setShowModal(!showModal);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_player__WEBPACK_IMPORTED_MODULE_4___default.a, {
            className: "react-player-div",
            url: lessons[0].video.Location,
            light: image.Location,
            width: "100%",
            height: "225px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: image.Location,
            alt: name,
            className: "img img-fluid"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 15
          }, undefined)
        }, void 0, false), loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex justify-content-center mt-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["LoadingOutlined"], {
            className: "h1 text-danger"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 13
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          className: "mb-3 mt-3",
          type: "danger",
          block: true,
          shape: "round",
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["SafetyOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 21
          }, undefined),
          size: "large",
          disabled: loading,
          onClick: paid ? handlePaidEnrollment : handleFreeEnrollment,
          children: user ? enrolled.status ? "Go to course" : "Enroll" : "Login to enroll"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SingleCourseJumbotron);

/***/ }),

/***/ "./components/cards/SingleCourseLessons.js":
/*!*************************************************!*\
  !*** ./components/cards/SingleCourseLessons.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\TLCN\\henry-code\\client\\components\\cards\\SingleCourseLessons.js";

const {
  Item
} = antd__WEBPACK_IMPORTED_MODULE_1__["List"];

const SingleCourseLessons = ({
  lessons,
  setPreview,
  showModal,
  setShowModal
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col lesson-list",
        children: [lessons && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: [lessons.length, " Lessons"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 23
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
          itemLayout: "horizontal",
          dataSource: lessons,
          renderItem: (item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Item, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Item.Meta, {
              avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
                children: index + 1
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 27
              }, undefined),
              title: item.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 17
            }, undefined), item.video && item.video !== null && item.free_preview && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "text-primary pointer",
              onClick: () => {
                setPreview(item.video.Location);
                setShowModal(!showModal);
              },
              children: "Preview"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 19
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SingleCourseLessons);

/***/ }),

/***/ "./components/modal/PreviewModal.js":
/*!******************************************!*\
  !*** ./components/modal/PreviewModal.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-player */ "react-player");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "D:\\TLCN\\henry-code\\client\\components\\modal\\PreviewModal.js";



const PreviewModal = ({
  showModal,
  setShowModal,
  preview
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      title: "Course Preview",
      visible: showModal,
      onCancel: () => setShowModal(!showModal),
      widht: 720,
      footer: null,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "wrapper",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_player__WEBPACK_IMPORTED_MODULE_2___default.a, {
          url: preview,
          playing: showModal,
          controls: true,
          width: "100%",
          height: "100%"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (PreviewModal);

/***/ }),

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/*! exports provided: Context, Provider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\TLCN\\henry-code\\client\\context\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // initial state

const intialState = {
  user: null
}; // create context

const Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(); // root reducer

const rootReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return _objectSpread(_objectSpread({}, state), {}, {
        user: action.payload
      });

    case "LOGOUT":
      return _objectSpread(_objectSpread({}, state), {}, {
        user: null
      });

    default:
      return state;
  }
}; // context provider


const Provider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(rootReducer, intialState); // router

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    dispatch({
      type: "LOGIN",
      payload: JSON.parse(window.localStorage.getItem("user"))
    });
  }, []);
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.interceptors.response.use(function (response) {
    // any status code that lie within the range of 2XX cause this function
    // to trigger
    return response;
  }, function (error) {
    // any status codes that falls outside the range of 2xx cause this function
    // to trigger
    let res = error.response;

    if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
      return new Promise((resolve, reject) => {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/logout").then(data => {
          console.log("/401 error > logout");
          dispatch({
            type: "LOGOUT"
          });
          window.localStorage.removeItem("user");
          router.push("/login");
        }).catch(err => {
          console.log("AXIOS INTERCEPTORS ERR", err);
          reject(error);
        });
      });
    }

    return Promise.reject(error);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const getCsrfToken = async () => {
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/csrf-token"); // console.log("CSRF", data);

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.headers["X-CSRF-Token"] = data.getCsrfToken;
    };

    getCsrfToken();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Context.Provider, {
    value: {
      state,
      dispatch
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 5
  }, undefined);
};



/***/ }),

/***/ "./pages/course/[slug].js":
/*!********************************!*\
  !*** ./pages/course/[slug].js ***!
  \********************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_cards_SingleCourseJumbotron__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cards/SingleCourseJumbotron */ "./components/cards/SingleCourseJumbotron.js");
/* harmony import */ var _components_modal_PreviewModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/modal/PreviewModal */ "./components/modal/PreviewModal.js");
/* harmony import */ var _components_cards_SingleCourseLessons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/cards/SingleCourseLessons */ "./components/cards/SingleCourseLessons.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context */ "./context/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @stripe/stripe-js */ "@stripe/stripe-js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "D:\\TLCN\\henry-code\\client\\pages\\course\\[slug].js";










const SingleCourse = ({
  course
}) => {
  // state
  const {
    0: showModal,
    1: setShowModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: preview,
    1: setPreview
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: enrolled,
    1: setEnrolled
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}); // context

  const {
    state: {
      user
    }
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_7__["Context"]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (user && course) checkEnrollment();
  }, [user, course]);

  const checkEnrollment = async () => {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`/api/check-enrollment/${course._id}`);
    console.log("CHECK ENROLLMENT", data);
    setEnrolled(data);
  };

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    slug
  } = router.query;

  const handlePaidEnrollment = async () => {
    // console.log("handle paid enrollment");
    try {
      setLoading(true); // check if user is logged in

      if (!user) router.push("/login"); // check if already enrolled

      if (enrolled.status) return router.push(`/user/course/${enrolled.course.slug}`);
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`/api/paid-enrollment/${course._id}`);
      const stripe = await Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_9__["loadStripe"])("pk_test_51J6cRPAqAHG93TmgaCnX5PJVE1RFGSrUuvnGgRqzhZYBi7tVSNngAbmtrxNtnIZFW5VczjUGAEMqhECnRO3sVKhg00iGksll52");
      stripe.redirectToCheckout({
        sessionId: data
      });
    } catch (err) {
      Object(react_toastify__WEBPACK_IMPORTED_MODULE_8__["toast"])("Enrollment failed, try again.");
      console.log(err);
      setLoading(false);
    }
  };

  const handleFreeEnrollment = async e => {
    // console.log("handle free enrollment");
    e.preventDefault();

    try {
      // check if user is logged in
      if (!user) router.push("/login"); // check if already enrolled

      if (enrolled.status) return router.push(`/user/course/${enrolled.course.slug}`);
      setLoading(true);
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`/api/free-enrollment/${course._id}`);
      Object(react_toastify__WEBPACK_IMPORTED_MODULE_8__["toast"])(data.message);
      setLoading(false);
      router.push(`/user/course/${data.course.slug}`);
    } catch (err) {
      Object(react_toastify__WEBPACK_IMPORTED_MODULE_8__["toast"])("Enrollment failed. Try again.");
      console.log(err);
      setLoading(false);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_cards_SingleCourseJumbotron__WEBPACK_IMPORTED_MODULE_4__["default"], {
      course: course,
      showModal: showModal,
      setShowModal: setShowModal,
      preview: preview,
      setPreview: setPreview,
      user: user,
      loading: loading,
      handlePaidEnrollment: handlePaidEnrollment,
      handleFreeEnrollment: handleFreeEnrollment,
      enrolled: enrolled,
      setEnrolled: setEnrolled
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modal_PreviewModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      showModal: showModal,
      setShowModal: setShowModal,
      preview: preview
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, undefined), course.lessons && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_cards_SingleCourseLessons__WEBPACK_IMPORTED_MODULE_6__["default"], {
      lessons: course.lessons,
      setPreview: setPreview,
      showModal: showModal,
      setShowModal: setShowModal
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
};

async function getServerSideProps({
  query
}) {
  const {
    data
  } = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${process.env.API}/course/${query.slug}`);
  return {
    props: {
      course: data
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (SingleCourse);

/***/ }),

/***/ "./utils/helpers.js":
/*!**************************!*\
  !*** ./utils/helpers.js ***!
  \**************************/
/*! exports provided: currencyFormatter, stripeCurrencyFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currencyFormatter", function() { return currencyFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripeCurrencyFormatter", function() { return stripeCurrencyFormatter; });
// data { currency: '', amount: ''}
const currencyFormatter = data => {
  return (data.amount * 100 / 100).toLocaleString(data.currency, {
    style: "currency",
    currency: data.currency
  });
};
const stripeCurrencyFormatter = data => {
  return (data.amount / 100).toLocaleString(data.currency, {
    style: "currency",
    currency: data.currency
  });
};

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-player":
/*!*******************************!*\
  !*** external "react-player" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-player");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJkcy9TaW5nbGVDb3Vyc2VKdW1ib3Ryb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJkcy9TaW5nbGVDb3Vyc2VMZXNzb25zLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWwvUHJldmlld01vZGFsLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY291cnNlL1tzbHVnXS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9oZWxwZXJzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHN0cmlwZS9zdHJpcGUtanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcGxheWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJTaW5nbGVDb3Vyc2VKdW1ib3Ryb24iLCJjb3Vyc2UiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJwcmV2aWV3Iiwic2V0UHJldmlldyIsImxvYWRpbmciLCJ1c2VyIiwiaGFuZGxlUGFpZEVucm9sbG1lbnQiLCJoYW5kbGVGcmVlRW5yb2xsbWVudCIsImVucm9sbGVkIiwic2V0RW5yb2xsZWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJpbnN0cnVjdG9yIiwidXBkYXRlZEF0IiwibGVzc29ucyIsImltYWdlIiwicHJpY2UiLCJwYWlkIiwiY2F0ZWdvcnkiLCJzdWJzdHJpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiY3VycmVuY3lGb3JtYXR0ZXIiLCJhbW91bnQiLCJjdXJyZW5jeSIsInZpZGVvIiwiTG9jYXRpb24iLCJzdGF0dXMiLCJJdGVtIiwiTGlzdCIsIlNpbmdsZUNvdXJzZUxlc3NvbnMiLCJsZW5ndGgiLCJpdGVtIiwiaW5kZXgiLCJ0aXRsZSIsImZyZWVfcHJldmlldyIsIlByZXZpZXdNb2RhbCIsImludGlhbFN0YXRlIiwiQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiSlNPTiIsInBhcnNlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImF4aW9zIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJlcnJvciIsInJlcyIsImNvbmZpZyIsIl9faXNSZXRyeVJlcXVlc3QiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImdldCIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlbW92ZUl0ZW0iLCJwdXNoIiwiY2F0Y2giLCJlcnIiLCJnZXRDc3JmVG9rZW4iLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJTaW5nbGVDb3Vyc2UiLCJ1c2VTdGF0ZSIsInNldExvYWRpbmciLCJ1c2VDb250ZXh0IiwiY2hlY2tFbnJvbGxtZW50IiwiX2lkIiwic2x1ZyIsInF1ZXJ5IiwicG9zdCIsInN0cmlwZSIsImxvYWRTdHJpcGUiLCJwcm9jZXNzIiwicmVkaXJlY3RUb0NoZWNrb3V0Iiwic2Vzc2lvbklkIiwidG9hc3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJtZXNzYWdlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiZW52IiwiQVBJIiwicHJvcHMiLCJ0b0xvY2FsZVN0cmluZyIsInN0eWxlIiwic3RyaXBlQ3VycmVuY3lGb3JtYXR0ZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLHFCQUFxQixHQUFHLENBQUM7QUFDN0JDLFFBRDZCO0FBRTdCQyxXQUY2QjtBQUc3QkMsY0FINkI7QUFJN0JDLFNBSjZCO0FBSzdCQyxZQUw2QjtBQU03QkMsU0FONkI7QUFPN0JDLE1BUDZCO0FBUTdCQyxzQkFSNkI7QUFTN0JDLHNCQVQ2QjtBQVU3QkMsVUFWNkI7QUFXN0JDO0FBWDZCLENBQUQsS0FZeEI7QUFDSjtBQUNBLFFBQU07QUFDSkMsUUFESTtBQUVKQyxlQUZJO0FBR0pDLGNBSEk7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QyxFQUFrRDtBQUN2RCtFLFNBQUssRUFBRSxVQURnRDtBQUV2RC9FLFlBQVEsRUFBRThDLElBQUksQ0FBQzlDO0FBRndDLEdBQWxELENBQVA7QUFJRCxDQUxNLEM7Ozs7Ozs7Ozs7O0FDUlAsOEM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvY291cnNlL1tzbHVnXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvY291cnNlL1tzbHVnXS5qc1wiKTtcbiIsImltcG9ydCBTaW5nbGVDb3Vyc2UgZnJvbSBcIi4uLy4uL3BhZ2VzL2NvdXJzZS9bc2x1Z11cIjtcbmltcG9ydCB7IGN1cnJlbmN5Rm9ybWF0dGVyIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2hlbHBlcnNcIjtcbmltcG9ydCB7IEJhZGdlLCBNb2RhbCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBSZWFjdFBsYXllciBmcm9tIFwicmVhY3QtcGxheWVyXCI7XG5pbXBvcnQgeyBMb2FkaW5nT3V0bGluZWQsIFNhZmV0eU91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5cbmNvbnN0IFNpbmdsZUNvdXJzZUp1bWJvdHJvbiA9ICh7XG4gIGNvdXJzZSxcbiAgc2hvd01vZGFsLFxuICBzZXRTaG93TW9kYWwsXG4gIHByZXZpZXcsXG4gIHNldFByZXZpZXcsXG4gIGxvYWRpbmcsXG4gIHVzZXIsXG4gIGhhbmRsZVBhaWRFbnJvbGxtZW50LFxuICBoYW5kbGVGcmVlRW5yb2xsbWVudCxcbiAgZW5yb2xsZWQsXG4gIHNldEVucm9sbGVkLFxufSkgPT4ge1xuICAvLyBkZXN0cnVjdHVyZVxuICBjb25zdCB7XG4gICAgbmFtZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBpbnN0cnVjdG9yLFxuICAgIHVwZGF0ZWRBdCxcbiAgICBsZXNzb25zLFxuICAgIGltYWdlLFxuICAgIHByaWNlLFxuICAgIHBhaWQsXG4gICAgY2F0ZWdvcnksXG4gIH0gPSBjb3Vyc2U7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImp1bWJvdHJvbiBiZy1wcmltYXJ5IHNxdWFyZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxuICAgICAgICAgIHsvKiB0aXRsZSAqL31cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1saWdodCBmb250LXdlaWdodC1ib2xkXCI+e25hbWV9PC9oMT5cbiAgICAgICAgICB7LyogZGVzY3JpcHRpb24gKi99XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZFwiPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIGRlc2NyaXB0aW9uLnN1YnN0cmluZygwLCAxNjApfS4uLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICB7LyogY2F0ZWdvcnkgKi99XG4gICAgICAgICAgPEJhZGdlXG4gICAgICAgICAgICBjb3VudD17Y2F0ZWdvcnl9XG4gICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAzYTlmNFwiIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwYi00IG1yLTJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgey8qIGF1dGhvciAqL31cbiAgICAgICAgICA8cD5DcmVhdGVkIGJ5IHtpbnN0cnVjdG9yLm5hbWV9PC9wPlxuICAgICAgICAgIHsvKiB1cGRhdGVkIGF0ICovfVxuICAgICAgICAgIDxwPkxhc3QgdWRwYXRlZCB7bmV3IERhdGUodXBkYXRlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoKX08L3A+XG4gICAgICAgICAgey8qIHByaWNlICovfVxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0XCI+XG4gICAgICAgICAgICB7cGFpZFxuICAgICAgICAgICAgICA/IGN1cnJlbmN5Rm9ybWF0dGVyKHtcbiAgICAgICAgICAgICAgICAgIGFtb3VudDogcHJpY2UsXG4gICAgICAgICAgICAgICAgICBjdXJyZW5jeTogXCJ1c2RcIixcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICA6IFwiRnJlZVwifVxuICAgICAgICAgIDwvaDQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG4gICAgICAgICAgey8qIHtKU09OLnN0cmluZ2lmeShsZXNzb25zWzBdKX0gKi99XG4gICAgICAgICAgey8qIHNob3cgdmlkZW8gcHJldmlldyBvciBjb3Vyc2UgaW1hZ2UgKi99XG4gICAgICAgICAge2xlc3NvbnNbMF0udmlkZW8gJiYgbGVzc29uc1swXS52aWRlby5Mb2NhdGlvbiA/IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFByZXZpZXcobGVzc29uc1swXS52aWRlby5Mb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgc2V0U2hvd01vZGFsKCFzaG93TW9kYWwpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8UmVhY3RQbGF5ZXJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWFjdC1wbGF5ZXItZGl2XCJcbiAgICAgICAgICAgICAgICB1cmw9e2xlc3NvbnNbMF0udmlkZW8uTG9jYXRpb259XG4gICAgICAgICAgICAgICAgbGlnaHQ9e2ltYWdlLkxvY2F0aW9ufVxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjI1cHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZS5Mb2NhdGlvbn0gYWx0PXtuYW1lfSBjbGFzc05hbWU9XCJpbWcgaW1nLWZsdWlkXCIgLz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgey8qIGVucm9sbCBidXR0b24gKi99XG4gICAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTNcIj5cbiAgICAgICAgICAgICAgPExvYWRpbmdPdXRsaW5lZCBjbGFzc05hbWU9XCJoMSB0ZXh0LWRhbmdlclwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0zIG10LTNcIlxuICAgICAgICAgICAgICB0eXBlPVwiZGFuZ2VyXCJcbiAgICAgICAgICAgICAgYmxvY2tcbiAgICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICAgICAgICAgIGljb249ezxTYWZldHlPdXRsaW5lZCAvPn1cbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3BhaWQgPyBoYW5kbGVQYWlkRW5yb2xsbWVudCA6IGhhbmRsZUZyZWVFbnJvbGxtZW50fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dXNlclxuICAgICAgICAgICAgICAgID8gZW5yb2xsZWQuc3RhdHVzXG4gICAgICAgICAgICAgICAgICA/IFwiR28gdG8gY291cnNlXCJcbiAgICAgICAgICAgICAgICAgIDogXCJFbnJvbGxcIlxuICAgICAgICAgICAgICAgIDogXCJMb2dpbiB0byBlbnJvbGxcIn1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVDb3Vyc2VKdW1ib3Ryb247XG4iLCJpbXBvcnQgeyBMaXN0LCBBdmF0YXIgfSBmcm9tIFwiYW50ZFwiO1xuY29uc3QgeyBJdGVtIH0gPSBMaXN0O1xuXG5jb25zdCBTaW5nbGVDb3Vyc2VMZXNzb25zID0gKHtcbiAgbGVzc29ucyxcbiAgc2V0UHJldmlldyxcbiAgc2hvd01vZGFsLFxuICBzZXRTaG93TW9kYWwsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGxlc3Nvbi1saXN0XCI+XG4gICAgICAgICAge2xlc3NvbnMgJiYgPGg0PntsZXNzb25zLmxlbmd0aH0gTGVzc29uczwvaDQ+fVxuICAgICAgICAgIDxociAvPlxuICAgICAgICAgIDxMaXN0XG4gICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICBkYXRhU291cmNlPXtsZXNzb25zfVxuICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxJdGVtPlxuICAgICAgICAgICAgICAgIDxJdGVtLk1ldGFcbiAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57aW5kZXggKyAxfTwvQXZhdGFyPn1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2l0ZW0udmlkZW8gJiYgaXRlbS52aWRlbyAhPT0gbnVsbCAmJiBpdGVtLmZyZWVfcHJldmlldyAmJiAoXG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRQcmV2aWV3KGl0ZW0udmlkZW8uTG9jYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dNb2RhbCghc2hvd01vZGFsKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgUHJldmlld1xuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvSXRlbT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUNvdXJzZUxlc3NvbnM7XG4iLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgUmVhY3RQbGF5ZXIgZnJvbSBcInJlYWN0LXBsYXllclwiO1xuXG5jb25zdCBQcmV2aWV3TW9kYWwgPSAoeyBzaG93TW9kYWwsIHNldFNob3dNb2RhbCwgcHJldmlldyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNb2RhbFxuICAgICAgICB0aXRsZT1cIkNvdXJzZSBQcmV2aWV3XCJcbiAgICAgICAgdmlzaWJsZT17c2hvd01vZGFsfVxuICAgICAgICBvbkNhbmNlbD17KCkgPT4gc2V0U2hvd01vZGFsKCFzaG93TW9kYWwpfVxuICAgICAgICB3aWRodD17NzIwfVxuICAgICAgICBmb290ZXI9e251bGx9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgIDxSZWFjdFBsYXllclxuICAgICAgICAgICAgdXJsPXtwcmV2aWV3fVxuICAgICAgICAgICAgcGxheWluZz17c2hvd01vZGFsfVxuICAgICAgICAgICAgY29udHJvbHM9e3RydWV9XG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01vZGFsPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJldmlld01vZGFsO1xuIiwiaW1wb3J0IHsgdXNlUmVkdWNlciwgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHVzZXJSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuLy8gaW5pdGlhbCBzdGF0ZVxuY29uc3QgaW50aWFsU3RhdGUgPSB7XG4gIHVzZXI6IG51bGwsXG59O1xuXG4vLyBjcmVhdGUgY29udGV4dFxuY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuLy8gcm9vdCByZWR1Y2VyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiTE9HSU5cIjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1c2VyOiBhY3Rpb24ucGF5bG9hZCB9O1xuICAgIGNhc2UgXCJMT0dPVVRcIjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1c2VyOiBudWxsIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuLy8gY29udGV4dCBwcm92aWRlclxuY29uc3QgUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyb290UmVkdWNlciwgaW50aWFsU3RhdGUpO1xuXG4gIC8vIHJvdXRlclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFwiTE9HSU5cIixcbiAgICAgIHBheWxvYWQ6IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSksXG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBheGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxuICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgLy8gYW55IHN0YXR1cyBjb2RlIHRoYXQgbGllIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgMlhYIGNhdXNlIHRoaXMgZnVuY3Rpb25cbiAgICAgIC8vIHRvIHRyaWdnZXJcbiAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9LFxuICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgLy8gYW55IHN0YXR1cyBjb2RlcyB0aGF0IGZhbGxzIG91dHNpZGUgdGhlIHJhbmdlIG9mIDJ4eCBjYXVzZSB0aGlzIGZ1bmN0aW9uXG4gICAgICAvLyB0byB0cmlnZ2VyXG4gICAgICBsZXQgcmVzID0gZXJyb3IucmVzcG9uc2U7XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAxICYmIHJlcy5jb25maWcgJiYgIXJlcy5jb25maWcuX19pc1JldHJ5UmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAuZ2V0KFwiL2FwaS9sb2dvdXRcIilcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLzQwMSBlcnJvciA+IGxvZ291dFwiKTtcbiAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkxPR09VVFwiIH0pO1xuICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xuICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFYSU9TIElOVEVSQ0VQVE9SUyBFUlJcIiwgZXJyKTtcbiAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0Q3NyZlRva2VuID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2NzcmYtdG9rZW5cIik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIkNTUkZcIiwgZGF0YSk7XG4gICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzW1wiWC1DU1JGLVRva2VuXCJdID0gZGF0YS5nZXRDc3JmVG9rZW47XG4gICAgfTtcbiAgICBnZXRDc3JmVG9rZW4oKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PntjaGlsZHJlbn08L0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgeyBDb250ZXh0LCBQcm92aWRlciB9O1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgU2luZ2xlQ291cnNlSnVtYm90cm9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NhcmRzL1NpbmdsZUNvdXJzZUp1bWJvdHJvblwiO1xuaW1wb3J0IFByZXZpZXdNb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tb2RhbC9QcmV2aWV3TW9kYWxcIjtcbmltcG9ydCBTaW5nbGVDb3Vyc2VMZXNzb25zIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NhcmRzL1NpbmdsZUNvdXJzZUxlc3NvbnNcIjtcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dFwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tIFwiQHN0cmlwZS9zdHJpcGUtanNcIjtcblxuY29uc3QgU2luZ2xlQ291cnNlID0gKHsgY291cnNlIH0pID0+IHtcbiAgLy8gc3RhdGVcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3ByZXZpZXcsIHNldFByZXZpZXddID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vucm9sbGVkLCBzZXRFbnJvbGxlZF0gPSB1c2VTdGF0ZSh7fSk7XG4gIC8vIGNvbnRleHRcbiAgY29uc3Qge1xuICAgIHN0YXRlOiB7IHVzZXIgfSxcbiAgfSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXNlciAmJiBjb3Vyc2UpIGNoZWNrRW5yb2xsbWVudCgpO1xuICB9LCBbdXNlciwgY291cnNlXSk7XG5cbiAgY29uc3QgY2hlY2tFbnJvbGxtZW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL2NoZWNrLWVucm9sbG1lbnQvJHtjb3Vyc2UuX2lkfWApO1xuICAgIGNvbnNvbGUubG9nKFwiQ0hFQ0sgRU5ST0xMTUVOVFwiLCBkYXRhKTtcbiAgICBzZXRFbnJvbGxlZChkYXRhKTtcbiAgfTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBzbHVnIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgY29uc3QgaGFuZGxlUGFpZEVucm9sbG1lbnQgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coXCJoYW5kbGUgcGFpZCBlbnJvbGxtZW50XCIpO1xuICAgIHRyeSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgLy8gY2hlY2sgaWYgdXNlciBpcyBsb2dnZWQgaW5cbiAgICAgIGlmICghdXNlcikgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgICAvLyBjaGVjayBpZiBhbHJlYWR5IGVucm9sbGVkXG4gICAgICBpZiAoZW5yb2xsZWQuc3RhdHVzKVxuICAgICAgICByZXR1cm4gcm91dGVyLnB1c2goYC91c2VyL2NvdXJzZS8ke2Vucm9sbGVkLmNvdXJzZS5zbHVnfWApO1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL3BhaWQtZW5yb2xsbWVudC8ke2NvdXJzZS5faWR9YCk7XG4gICAgICBjb25zdCBzdHJpcGUgPSBhd2FpdCBsb2FkU3RyaXBlKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUklQRV9LRVkpO1xuICAgICAgc3RyaXBlLnJlZGlyZWN0VG9DaGVja291dCh7IHNlc3Npb25JZDogZGF0YSB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRvYXN0KFwiRW5yb2xsbWVudCBmYWlsZWQsIHRyeSBhZ2Fpbi5cIik7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZyZWVFbnJvbGxtZW50ID0gYXN5bmMgKGUpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImhhbmRsZSBmcmVlIGVucm9sbG1lbnRcIik7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyeSB7XG4gICAgICAvLyBjaGVjayBpZiB1c2VyIGlzIGxvZ2dlZCBpblxuICAgICAgaWYgKCF1c2VyKSByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICAgIC8vIGNoZWNrIGlmIGFscmVhZHkgZW5yb2xsZWRcbiAgICAgIGlmIChlbnJvbGxlZC5zdGF0dXMpXG4gICAgICAgIHJldHVybiByb3V0ZXIucHVzaChgL3VzZXIvY291cnNlLyR7ZW5yb2xsZWQuY291cnNlLnNsdWd9YCk7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL2ZyZWUtZW5yb2xsbWVudC8ke2NvdXJzZS5faWR9YCk7XG4gICAgICB0b2FzdChkYXRhLm1lc3NhZ2UpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICByb3V0ZXIucHVzaChgL3VzZXIvY291cnNlLyR7ZGF0YS5jb3Vyc2Uuc2x1Z31gKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRvYXN0KFwiRW5yb2xsbWVudCBmYWlsZWQuIFRyeSBhZ2Fpbi5cIik7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiA8cHJlPntKU09OLnN0cmluZ2lmeShjb3Vyc2UsIG51bGwsIDQpfTwvcHJlPiAqL31cbiAgICAgIDxTaW5nbGVDb3Vyc2VKdW1ib3Ryb25cbiAgICAgICAgY291cnNlPXtjb3Vyc2V9XG4gICAgICAgIHNob3dNb2RhbD17c2hvd01vZGFsfVxuICAgICAgICBzZXRTaG93TW9kYWw9e3NldFNob3dNb2RhbH1cbiAgICAgICAgcHJldmlldz17cHJldmlld31cbiAgICAgICAgc2V0UHJldmlldz17c2V0UHJldmlld31cbiAgICAgICAgdXNlcj17dXNlcn1cbiAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgaGFuZGxlUGFpZEVucm9sbG1lbnQ9e2hhbmRsZVBhaWRFbnJvbGxtZW50fVxuICAgICAgICBoYW5kbGVGcmVlRW5yb2xsbWVudD17aGFuZGxlRnJlZUVucm9sbG1lbnR9XG4gICAgICAgIGVucm9sbGVkPXtlbnJvbGxlZH1cbiAgICAgICAgc2V0RW5yb2xsZWQ9e3NldEVucm9sbGVkfVxuICAgICAgLz5cblxuICAgICAgPFByZXZpZXdNb2RhbFxuICAgICAgICBzaG93TW9kYWw9e3Nob3dNb2RhbH1cbiAgICAgICAgc2V0U2hvd01vZGFsPXtzZXRTaG93TW9kYWx9XG4gICAgICAgIHByZXZpZXc9e3ByZXZpZXd9XG4gICAgICAvPlxuXG4gICAgICB7Y291cnNlLmxlc3NvbnMgJiYgKFxuICAgICAgICA8U2luZ2xlQ291cnNlTGVzc29uc1xuICAgICAgICAgIGxlc3NvbnM9e2NvdXJzZS5sZXNzb25zfVxuICAgICAgICAgIHNldFByZXZpZXc9e3NldFByZXZpZXd9XG4gICAgICAgICAgc2hvd01vZGFsPXtzaG93TW9kYWx9XG4gICAgICAgICAgc2V0U2hvd01vZGFsPXtzZXRTaG93TW9kYWx9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHF1ZXJ5IH0pIHtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQVBJfS9jb3Vyc2UvJHtxdWVyeS5zbHVnfWApO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjb3Vyc2U6IGRhdGEsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlQ291cnNlO1xuIiwiLy8gZGF0YSB7IGN1cnJlbmN5OiAnJywgYW1vdW50OiAnJ31cbmV4cG9ydCBjb25zdCBjdXJyZW5jeUZvcm1hdHRlciA9IChkYXRhKSA9PiB7XG4gIHJldHVybiAoKGRhdGEuYW1vdW50ICogMTAwKSAvIDEwMCkudG9Mb2NhbGVTdHJpbmcoZGF0YS5jdXJyZW5jeSwge1xuICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXG4gICAgY3VycmVuY3k6IGRhdGEuY3VycmVuY3ksXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHN0cmlwZUN1cnJlbmN5Rm9ybWF0dGVyID0gKGRhdGEpID0+IHtcbiAgcmV0dXJuIChkYXRhLmFtb3VudCAvIDEwMCkudG9Mb2NhbGVTdHJpbmcoZGF0YS5jdXJyZW5jeSwge1xuICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXG4gICAgY3VycmVuY3k6IGRhdGEuY3VycmVuY3ksXG4gIH0pO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHJpcGUvc3RyaXBlLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcGxheWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9