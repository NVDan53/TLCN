module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/user/course/[slug].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/routes/StudentRoute.js":
/*!*******************************************!*\
  !*** ./components/routes/StudentRoute.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "D:\\TLCN\\henry-code\\client\\components\\routes\\StudentRoute.js";





const StudentRoute = ({
  children,
  showNav = true
}) => {
  // state
  const {
    0: ok,
    1: setOk
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false); // router

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/current-user"); //   console.log(data);

      if (data.ok) setOk(true);
    } catch (err) {
      console.log(err);
      setOk(false);
      router.push("/login");
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: !ok ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["SyncOutlined"], {
      spin: true,
      className: "d-flex justify-content-center display-1 text-primary p-5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container-fluid",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (StudentRoute);

/***/ }),

/***/ "./pages/user/course/[slug].js":
/*!*************************************!*\
  !*** ./pages/user/course/[slug].js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_routes_StudentRoute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/routes/StudentRoute */ "./components/routes/StudentRoute.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-player */ "react-player");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "D:\\TLCN\\henry-code\\client\\pages\\user\\course\\[slug].js";








const {
  Item
} = antd__WEBPACK_IMPORTED_MODULE_5__["Menu"];

const SingleCourse = () => {
  const {
    0: clicked,
    1: setClicked
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(-1);
  const {
    0: collapsed,
    1: setCollapsed
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: course,
    1: setCourse
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    lessons: []
  });
  const {
    0: completedLessons,
    1: setCompletedLessons
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); // force state update

  const {
    0: updateState,
    1: setUpdateState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false); // router

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    slug
  } = router.query;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (slug) loadCourse();
  }, [slug]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (course) loadCompletedLessons();
  }, [course]);

  const loadCourse = async () => {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`/api/user/course/${slug}`);
    setCourse(data);
  };

  const loadCompletedLessons = async () => {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`/api/list-completed`, {
      courseId: course._id
    });
    console.log("COMPLETED LESSONS => ", data);
    setCompletedLessons(data);
  };

  const markCompleted = async () => {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`/api/mark-completed`, {
      courseId: course._id,
      lessonId: course.lessons[clicked]._id
    });
    console.log(data);
    setCompletedLessons([...completedLessons, course.lessons[clicked]._id]);
  };

  const markIncompleted = async () => {
    try {
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`/api/mark-incomplete`, {
        courseId: course._id,
        lessonId: course.lessons[clicked]._id
      });
      console.log(data);
      const all = completedLessons;
      console.log("ALL => ", all);
      const index = all.indexOf(course.lessons[clicked]._id);

      if (index > -1) {
        all.splice(index, 1);
        console.log("ALL WITHOUT REMOVED => ", all);
        setCompletedLessons(all);
        setUpdateState(!updateState);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_routes_StudentRoute__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          maWidth: 320
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          onClick: () => setCollapsed(!collapsed),
          className: "text-primary mt-1 btn-block mb-2",
          children: [/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(collapsed ? _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["MenuUnfoldOutlined"] : _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["MenuFoldOutlined"]), " ", !collapsed && "Lessons"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"], {
          defaultSelectedKeys: [clicked],
          inlineCollapsed: collapsed,
          style: {
            height: "80vh",
            overflow: "scroll"
          },
          children: course.lessons.map((lesson, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Item, {
            onClick: () => setClicked(index),
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Avatar"], {
              children: index + 1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 23
            }, undefined),
            children: [lesson.title.substring(0, 30), " ", completedLessons.includes(lesson._id) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["CheckCircleFilled"], {
              className: "float-right text-primary ml-2",
              style: {
                marginTop: "13px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 19
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["MinusCircleFilled"], {
              className: "float-right text-danger ml-2",
              style: {
                marginTop: "13px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 19
            }, undefined)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 15
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col",
        children: clicked !== -1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col alert alert-primary square",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: course.lessons[clicked].title.substring(0, 30)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 17
            }, undefined), completedLessons.includes(course.lessons[clicked]._id) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "float-right pointer",
              onClick: markIncompleted,
              children: "Mark as incomplete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 19
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "float-right pointer",
              onClick: markCompleted,
              children: "Mark as completed"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 19
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 15
          }, undefined), course.lessons[clicked].video && course.lessons[clicked].video.Location && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "wrapper",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_player__WEBPACK_IMPORTED_MODULE_6___default.a, {
                className: "player",
                url: course.lessons[clicked].video.Location,
                width: "100%",
                height: "100%",
                controls: true,
                onEnded: () => markCompleted()
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 23
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 21
            }, undefined)
          }, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_7___default.a, {
            source: course.lessons[clicked].content,
            className: "single-post"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 15
          }, undefined)]
        }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex justify-content-center p-5",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "text-center p-5",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["PlayCircleOutlined"], {
              className: "text-primary display-1 p-5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "lead",
              children: "Clcik on the lessons to start learning"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SingleCourse);

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

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

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "react-player":
/*!*******************************!*\
  !*** external "react-player" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-player");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yb3V0ZXMvU3R1ZGVudFJvdXRlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3VzZXIvY291cnNlL1tzbHVnXS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tYXJrZG93blwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXBsYXllclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlN0dWRlbnRSb3V0ZSIsImNoaWxkcmVuIiwic2hvd05hdiIsIm9rIiwic2V0T2siLCJ1c2VTdGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImZldGNoVXNlciIsImRhdGEiLCJheGlvcyIsImdldCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiSXRlbSIsIk1lbnUiLCJTaW5nbGVDb3Vyc2UiLCJjbGlja2VkIiwic2V0Q2xpY2tlZCIsImNvbGxhcHNlZCIsInNldENvbGxhcHNlZCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiY291cnNlIiwic2V0Q291cnNlIiwibGVzc29ucyIsImNvbXBsZXRlZExlc3NvbnMiLCJzZXRDb21wbGV0ZWRMZXNzb25zIiwidXBkYXRlU3RhdGUiLCJzZXRVcGRhdGVTdGF0ZSIsInNsdWciLCJxdWVyeSIsImxvYWRDb3Vyc2UiLCJsb2FkQ29tcGxldGVkTGVzc29ucyIsInBvc3QiLCJjb3Vyc2VJZCIsIl9pZCIsIm1hcmtDb21wbGV0ZWQiLCJsZXNzb25JZCIsIm1hcmtJbmNvbXBsZXRlZCIsImFsbCIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsIm1hV2lkdGgiLCJjcmVhdGVFbGVtZW50IiwiTWVudVVuZm9sZE91dGxpbmVkIiwiTWVudUZvbGRPdXRsaW5lZCIsImhlaWdodCIsIm92ZXJmbG93IiwibWFwIiwibGVzc29uIiwidGl0bGUiLCJzdWJzdHJpbmciLCJpbmNsdWRlcyIsIm1hcmdpblRvcCIsInZpZGVvIiwiTG9jYXRpb24iLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLENBQUM7QUFBRUMsVUFBRjtBQUFZQyxTQUFPLEdBQUc7QUFBdEIsQ0FBRCxLQUFrQztBQUNyRDtB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eUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXpDSjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXJDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUEyRkQsQ0EzSkQ7O0FBNkplMUMsMkVBQWYsRTs7Ozs7Ozs7Ozs7QUM5S0EsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvdXNlci9jb3Vyc2UvW3NsdWddLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy91c2VyL2NvdXJzZS9bc2x1Z10uanNcIik7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IFN5bmNPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuXG5jb25zdCBTdHVkZW50Um91dGUgPSAoeyBjaGlsZHJlbiwgc2hvd05hdiA9IHRydWUgfSkgPT4ge1xuICAvLyBzdGF0ZVxuICBjb25zdCBbb2ssIHNldE9rXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgLy8gcm91dGVyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hVc2VyKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9jdXJyZW50LXVzZXJcIik7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgaWYgKGRhdGEub2spIHNldE9rKHRydWUpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIHNldE9rKGZhbHNlKTtcbiAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7IW9rID8gKFxuICAgICAgICA8U3luY091dGxpbmVkXG4gICAgICAgICAgc3BpblxuICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGRpc3BsYXktMSB0ZXh0LXByaW1hcnkgcC01XCJcbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0dWRlbnRSb3V0ZTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBTdHVkZW50Um91dGUgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvcm91dGVzL1N0dWRlbnRSb3V0ZVwiO1xuaW1wb3J0IHsgQnV0dG9uLCBNZW51LCBBdmF0YXIgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gXCJyZWFjdC1wbGF5ZXJcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IHtcbiAgUGxheUNpcmNsZU91dGxpbmVkLFxuICBNZW51Rm9sZE91dGxpbmVkLFxuICBNZW51VW5mb2xkT3V0bGluZWQsXG4gIENoZWNrQ2lyY2xlRmlsbGVkLFxuICBNaW51c0NpcmNsZUZpbGxlZCxcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5cbmNvbnN0IHsgSXRlbSB9ID0gTWVudTtcblxuY29uc3QgU2luZ2xlQ291cnNlID0gKCkgPT4ge1xuICBjb25zdCBbY2xpY2tlZCwgc2V0Q2xpY2tlZF0gPSB1c2VTdGF0ZSgtMSk7XG4gIGNvbnN0IFtjb2xsYXBzZWQsIHNldENvbGxhcHNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvdXJzZSwgc2V0Q291cnNlXSA9IHVzZVN0YXRlKHsgbGVzc29uczogW10gfSk7XG4gIGNvbnN0IFtjb21wbGV0ZWRMZXNzb25zLCBzZXRDb21wbGV0ZWRMZXNzb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgLy8gZm9yY2Ugc3RhdGUgdXBkYXRlXG4gIGNvbnN0IFt1cGRhdGVTdGF0ZSwgc2V0VXBkYXRlU3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIHJvdXRlclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBzbHVnIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2x1ZykgbG9hZENvdXJzZSgpO1xuICB9LCBbc2x1Z10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNvdXJzZSkgbG9hZENvbXBsZXRlZExlc3NvbnMoKTtcbiAgfSwgW2NvdXJzZV0pO1xuXG4gIGNvbnN0IGxvYWRDb3Vyc2UgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvdXNlci9jb3Vyc2UvJHtzbHVnfWApO1xuICAgIHNldENvdXJzZShkYXRhKTtcbiAgfTtcblxuICBjb25zdCBsb2FkQ29tcGxldGVkTGVzc29ucyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvbGlzdC1jb21wbGV0ZWRgLCB7XG4gICAgICBjb3Vyc2VJZDogY291cnNlLl9pZCxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcIkNPTVBMRVRFRCBMRVNTT05TID0+IFwiLCBkYXRhKTtcbiAgICBzZXRDb21wbGV0ZWRMZXNzb25zKGRhdGEpO1xuICB9O1xuXG4gIGNvbnN0IG1hcmtDb21wbGV0ZWQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL21hcmstY29tcGxldGVkYCwge1xuICAgICAgY291cnNlSWQ6IGNvdXJzZS5faWQsXG4gICAgICBsZXNzb25JZDogY291cnNlLmxlc3NvbnNbY2xpY2tlZF0uX2lkLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIHNldENvbXBsZXRlZExlc3NvbnMoWy4uLmNvbXBsZXRlZExlc3NvbnMsIGNvdXJzZS5sZXNzb25zW2NsaWNrZWRdLl9pZF0pO1xuICB9O1xuXG4gIGNvbnN0IG1hcmtJbmNvbXBsZXRlZCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL21hcmstaW5jb21wbGV0ZWAsIHtcbiAgICAgICAgY291cnNlSWQ6IGNvdXJzZS5faWQsXG4gICAgICAgIGxlc3NvbklkOiBjb3Vyc2UubGVzc29uc1tjbGlja2VkXS5faWQsXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgY29uc3QgYWxsID0gY29tcGxldGVkTGVzc29ucztcbiAgICAgIGNvbnNvbGUubG9nKFwiQUxMID0+IFwiLCBhbGwpO1xuICAgICAgY29uc3QgaW5kZXggPSBhbGwuaW5kZXhPZihjb3Vyc2UubGVzc29uc1tjbGlja2VkXS5faWQpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgYWxsLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQUxMIFdJVEhPVVQgUkVNT1ZFRCA9PiBcIiwgYWxsKTtcbiAgICAgICAgc2V0Q29tcGxldGVkTGVzc29ucyhhbGwpO1xuICAgICAgICBzZXRVcGRhdGVTdGF0ZSghdXBkYXRlU3RhdGUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U3R1ZGVudFJvdXRlPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYVdpZHRoOiAzMjAgfX0+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q29sbGFwc2VkKCFjb2xsYXBzZWQpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IG10LTEgYnRuLWJsb2NrIG1iLTJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjcmVhdGVFbGVtZW50KGNvbGxhcHNlZCA/IE1lbnVVbmZvbGRPdXRsaW5lZCA6IE1lbnVGb2xkT3V0bGluZWQpfXtcIiBcIn1cbiAgICAgICAgICAgIHshY29sbGFwc2VkICYmIFwiTGVzc29uc1wifVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtbY2xpY2tlZF19XG4gICAgICAgICAgICBpbmxpbmVDb2xsYXBzZWQ9e2NvbGxhcHNlZH1cbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCI4MHZoXCIsIG92ZXJmbG93OiBcInNjcm9sbFwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NvdXJzZS5sZXNzb25zLm1hcCgobGVzc29uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8SXRlbVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENsaWNrZWQoaW5kZXgpfVxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgaWNvbj17PEF2YXRhcj57aW5kZXggKyAxfTwvQXZhdGFyPn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtsZXNzb24udGl0bGUuc3Vic3RyaW5nKDAsIDMwKX17XCIgXCJ9XG4gICAgICAgICAgICAgICAge2NvbXBsZXRlZExlc3NvbnMuaW5jbHVkZXMobGVzc29uLl9pZCkgPyAoXG4gICAgICAgICAgICAgICAgICA8Q2hlY2tDaXJjbGVGaWxsZWRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgdGV4dC1wcmltYXJ5IG1sLTJcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTNweFwiIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8TWludXNDaXJjbGVGaWxsZWRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgdGV4dC1kYW5nZXIgbWwtMlwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxM3B4XCIgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9JdGVtPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9NZW51PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgIHtjbGlja2VkICE9PSAtMSA/IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGFsZXJ0IGFsZXJ0LXByaW1hcnkgc3F1YXJlXCI+XG4gICAgICAgICAgICAgICAgPGI+e2NvdXJzZS5sZXNzb25zW2NsaWNrZWRdLnRpdGxlLnN1YnN0cmluZygwLCAzMCl9PC9iPlxuICAgICAgICAgICAgICAgIHtjb21wbGV0ZWRMZXNzb25zLmluY2x1ZGVzKGNvdXJzZS5sZXNzb25zW2NsaWNrZWRdLl9pZCkgPyAoXG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbG9hdC1yaWdodCBwb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17bWFya0luY29tcGxldGVkfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBNYXJrIGFzIGluY29tcGxldGVcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHQgcG9pbnRlclwiIG9uQ2xpY2s9e21hcmtDb21wbGV0ZWR9PlxuICAgICAgICAgICAgICAgICAgICBNYXJrIGFzIGNvbXBsZXRlZFxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHtjb3Vyc2UubGVzc29uc1tjbGlja2VkXS52aWRlbyAmJlxuICAgICAgICAgICAgICAgIGNvdXJzZS5sZXNzb25zW2NsaWNrZWRdLnZpZGVvLkxvY2F0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFBsYXllclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGxheWVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybD17Y291cnNlLmxlc3NvbnNbY2xpY2tlZF0udmlkZW8uTG9jYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sc1xuICAgICAgICAgICAgICAgICAgICAgICAgb25FbmRlZD17KCkgPT4gbWFya0NvbXBsZXRlZCgpfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93blxuICAgICAgICAgICAgICAgIHNvdXJjZT17Y291cnNlLmxlc3NvbnNbY2xpY2tlZF0uY29udGVudH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaW5nbGUtcG9zdFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBwLTVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwLTVcIj5cbiAgICAgICAgICAgICAgICA8UGxheUNpcmNsZU91dGxpbmVkIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBkaXNwbGF5LTEgcC01XCIgLz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+Q2xjaWsgb24gdGhlIGxlc3NvbnMgdG8gc3RhcnQgbGVhcm5pbmc8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1N0dWRlbnRSb3V0ZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUNvdXJzZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbWFya2Rvd25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcGxheWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9