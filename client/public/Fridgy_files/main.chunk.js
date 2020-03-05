(this["webpackJsonpclient"] = this["webpackJsonpclient"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n  font-family: \"Montserrat\";\n}\n@media (min-width: 769px) {\n  .App {\n    font-size: 1.2em;\n  }\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Montserrat\", \"Lobster\",\n    \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\",\n    \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Signup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Signup */ "./src/components/Signup.js");
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Login */ "./src/components/Login.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Home */ "./src/components/Home.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _components_CreateFridge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/CreateFridge */ "./src/components/CreateFridge.js");
/* harmony import */ var _components_FridgeDetails__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/FridgeDetails */ "./src/components/FridgeDetails.js");
/* harmony import */ var _components_CreateItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/CreateItem */ "./src/components/CreateItem.js");
/* harmony import */ var _components_EditItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/EditItem */ "./src/components/EditItem.js");
/* harmony import */ var _components_Invite__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/Invite */ "./src/components/Invite.js");
/* harmony import */ var _components_FridgeUsers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/FridgeUsers */ "./src/components/FridgeUsers.js");
/* harmony import */ var _components_ItemDetails__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/ItemDetails */ "./src/components/ItemDetails.js");
/* harmony import */ var _components_Filters__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/Filters */ "./src/components/Filters.js");
/* harmony import */ var _components_StyledComponents__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/StyledComponents */ "./src/components/StyledComponents.js");
var _jsxFileName = "/Users/San4e/Desktop/fridge-manager/client/src/App.js";


















class App extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      user: this.props.user
    };

    this.updateUserState = () => {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/auth/loggedin").then(response => {
        this.setState({
          user: response.data
        });
      });
    };

    this.setUser = userObj => {
      this.setState({
        user: userObj
      });
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "App",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, this.state.user && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      user: this.state.user,
      setUser: this.setUser,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_StyledComponents__WEBPACK_IMPORTED_MODULE_16__["UnderNavbarDiv"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/:fridgeId/foodItem/:id/edit",
      render: props => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_EditItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        history: props.history,
        user: this.state.user,
        updateFunc: this.updateUserState,
        foodItemId: props.match.params.id,
        fridgeId: props.match.params.fridgeId,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/fridge/:id/filters",
      render: props => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Filters__WEBPACK_IMPORTED_MODULE_15__["default"], {
        history: props.history,
        fridgeId: props.match.params.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/fridge/:id/users",
      render: props => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FridgeUsers__WEBPACK_IMPORTED_MODULE_13__["default"], {
        history: props.history,
        userId: this.state.user._id,
        fridgeId: props.match.params.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/fridge/:fridgeId/foodItem/:foodId",
      render: props => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ItemDetails__WEBPACK_IMPORTED_MODULE_14__["default"], {
        history: props.history,
        user: this.state.user,
        updateFunc: this.updateUserState,
        itemId: props.match.params.foodId,
        fridgeId: props.match.params.fridgeId,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/fridge/:id/createItem",
      render: props => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CreateItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        history: props.history,
        user: this.state.user,
        updateFunc: this.updateUserState,
        fridgeId: props.match.params.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/fridge/:id/invite",
      render: props => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Invite__WEBPACK_IMPORTED_MODULE_12__["default"], {
        history: props.history,
        user: this.state.user,
        fridgeId: props.match.params.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/fridge/:id/join",
      render: props => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Invite__WEBPACK_IMPORTED_MODULE_12__["default"], {
        history: props.history,
        user: this.state.user,
        fridgeId: props.match.params.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/createFridge",
      render: props => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CreateFridge__WEBPACK_IMPORTED_MODULE_8__["default"], {
        history: props.history,
        user: this.state.user,
        updateFunc: this.updateUserState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      exact: true,
      path: "/fridge/:id",
      render: props => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FridgeDetails__WEBPACK_IMPORTED_MODULE_9__["default"], {
        history: props.history,
        user: this.state.user,
        fridgeId: props.match.params.id,
        updateFunc: this.updateUserState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/signup",
      render: props => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Signup__WEBPACK_IMPORTED_MODULE_4__["default"], {
        history: props.history,
        setUser: this.setUser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/login",
      render: props => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Login__WEBPACK_IMPORTED_MODULE_5__["default"], {
        history: props.history,
        setUser: this.setUser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/",
      render: props => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_6__["default"], {
        history: props.history,
        user: this.state.user,
        setUser: this.setUser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/CreateFridge.js":
/*!****************************************!*\
  !*** ./src/components/CreateFridge.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateFridge; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyledComponents */ "./src/components/StyledComponents.js");
var _jsxFileName = "/Users/San4e/Desktop/fridge-manager/client/src/components/CreateFridge.js";



class CreateFridge extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      name: ""
    };

    this.handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.handleSubmit = event => {
      event.preventDefault();
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/fridge", {
        name: this.state.name,
        userId: this.props.user._id
      }).then(response => {
        // redirect
        this.props.history.push("/");
        this.props.updateFunc(response.data);
      }).catch(err => {
        console.log(err);
        this.setState({
          message: err.response.data.message
        });
      });
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Section"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "Fridge name: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      type: "text",
      id: "name",
      name: "name",
      value: this.state.name,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "Submit")));
  }

}

/***/ }),

/***/ "./src/components/CreateItem.js":
/*!**************************************!*\
  !*** ./src/components/CreateItem.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyledComponents */ "./src/components/StyledComponents.js");
var _jsxFileName = "/Users/San4e/Desktop/fridge-manager/client/src/components/CreateItem.js";



class CreateItem extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      name: "",
      description: "",
      category: "dairy",
      expiration: null,
      number: 0,
      unit: "",
      availability: "full",
      common: false
    };

    this.handleChange = event => {
      const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
      this.setState({
        [event.target.name]: value
      });
    };

    this.handleSubmit = event => {
      event.preventDefault();
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/foodItem", {
        name: this.state.name,
        description: this.state.description,
        userId: this.props.user._id,
        fridgeId: this.props.fridgeId,
        category: this.state.category,
        expiration: this.state.expiration,
        image: this.state.image,
        quantity: {
          number: this.state.number,
          unit: this.state.unit
        },
        availability: this.state.availability,
        common: this.state.common
      }).then(response => {
        // redirect
        this.props.history.push(`/fridge/${this.props.fridgeId}`);
      }).catch(err => {
        console.log("Error: " + err);
      });
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Section"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "This is: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      type: "text",
      id: "name",
      name: "name",
      placeholder: "item name",
      value: this.state.name,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Section"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "number",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, "Quantity"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      type: "number",
      min: "0",
      id: "number",
      name: "number",
      placeholder: "0",
      value: this.state.number,
      onChange: this.handleChange,
      style: {
        width: "10vw"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Select"], {
      type: "text",
      id: "unit",
      name: "unit",
      value: this.state.unit,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "L",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, "Liter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "kg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, "kg"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, "item"))), this.state.unit !== "item" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Section"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "availability",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, "How much is left?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Select"], {
      type: "text",
      id: "availability",
      name: "availability",
      value: this.state.availability,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "full",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, "full"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "half-full",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, "half-full"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "almost empty",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, "almost empty"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "empty",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, "empty"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Section"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "expiration",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, "Best before: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      type: "date",
      id: "expiration",
      name: "expiration" // value={this.state.expiration}
      ,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Section"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, "Category: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Select"], {
      type: "text",
      id: "category",
      name: "category",
      value: this.state.category,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "fruit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, "fruit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "vegetables",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, "vegetables"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "dairy",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, "dairy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "eggs",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, "eggs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "meat",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, "meat "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "fish",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, "fish "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "seafood",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, "seafood "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "dessert",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, "dessert "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "bread",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, "bread"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "cooked",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, "cooked meal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "drinks",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, "drinks"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "alcohol",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, "alcohol"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "other",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, "other "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Section"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "common",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, "To share", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      type: "checkbox",
      id: "common",
      name: "common",
      checked: this.state.common,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Section"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, "Description: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      type: "text",
      id: "description",
      name: "description",
      value: this.state.description,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, "Submit")));
  }

}

/***/ }),

/***/ "./src/components/EditItem.js":
/*!************************************!*\
  !*** ./src/components/EditItem.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyledComponents */ "./src/components/StyledComponents.js");
var _jsxFileName = "/Users/San4e/Desktop/fridge-manager/client/src/components/EditItem.js";




class EditItem extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      name: "",
      description: "",
      category: "",
      expiration: new Date(),
      number: 0,
      unit: "",
      availability: "",
      common: ""
    };

    this.handleChange = event => {
      const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
      this.setState({
        [event.target.name]: value
      });
    };

    this.componentDidMount = () => {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/api/foodItem/${this.props.foodItemId}`).then(response => {
        var _response$data$quanti, _response$data$quanti2;

        this.setState({
          name: response.data.name,
          description: response.data.description,
          category: response.data.category,
          expiration: response.data.expiration.slice(0, 10),
          number: (_response$data$quanti = response.data.quantity) === null || _response$data$quanti === void 0 ? void 0 : _response$data$quanti.number,
          unit: (_response$data$quanti2 = response.data.quantity) === null || _response$data$quanti2 === void 0 ? void 0 : _response$data$quanti2.unit,
          availability: response.data.availability,
          common: response.data.common
        });
      });
    };

    this.handleSubmit = event => {
      event.preventDefault();
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/api/foodItem/edit/${this.props.foodItemId}`, {
        name: this.state.name,
        description: this.state.description,
        userId: this.props.user._id,
        fridgeId: this.props.fridgeId,
        category: this.state.category,
        expiration: this.state.expiration,
        image: this.state.image,
        quantity: {
          number: this.state.number,
          unit: this.state.unit
        },
        availability: this.state.availability,
        common: this.state.common
      }).then(response => {
        // redirect
        this.props.history.push(`/fridge/${this.props.fridgeId}`);
      }).catch(err => {
        this.setState({
          message: err.response.data.message
        });
      });
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Section"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "Item name: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      type: "text",
      id: "name",
      name: "name",
      value: this.state.name,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Section"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "number",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, "Quantity "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      type: "number",
      id: "number",
      name: "number",
      value: this.state.number,
      onChange: this.handleChange,
      style: {
        width: "10vw"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Select"], {
      type: "text",
      id: "unit",
      name: "unit",
      value: this.state.unit,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "L",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, "Liter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "kg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, "kg"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, "item"))), this.state.unit !== "item" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Section"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "availability",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, "How much is left? "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Select"], {
      type: "text",
      id: "availability",
      name: "availability",
      value: this.state.availability,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "full",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, "full"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "half-full",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, "half-full"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "almost empty",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, "almost empty"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "empty",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, "empty"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Section"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "expiration",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, "Best before: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      type: "date",
      id: "expiration",
      name: "expiration",
      value: this.state.expiration,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Section"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "common",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, "To share", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      id: "common",
      name: "common",
      checked: this.state.common,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Section"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, "Description: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      type: "text",
      id: "description",
      name: "description",
      value: this.state.description,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, "Submit")));
  }

}

/***/ }),

/***/ "./src/components/Filters.js":
/*!***********************************!*\
  !*** ./src/components/Filters.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filters; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyledComponents */ "./src/components/StyledComponents.js");
var _jsxFileName = "/Users/San4e/Desktop/fridge-manager/client/src/components/Filters.js";



class Filters extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      filter: ""
    };

    this.handleClick = event => {
      this.setState({
        filter: event.target.name
      });
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Title"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Select a filter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Cleanlist"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["FilterButton"], {
      onClick: this.handleClick,
      name: "my-items",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "My items")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["FilterButton"], {
      onClick: this.handleClick,
      name: "common-items",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Common items")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["FilterButton"], {
      onClick: this.handleClick,
      name: "expiration-date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Sort by Expiration date")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["FilterButton"], {
      onClick: this.handleClick,
      name: "availability",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "My shopping list")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["FilterButton"], {
      onClick: this.handleClick,
      name: "no-filter",
      style: {
        backgroundColor: "#e7a40a"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "No filter"))), this.state.filter && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
      to: {
        pathname: `/fridge/${this.props.fridgeId}`,
        search: `?filter=${this.state.filter}` //   state: { filter: this.state.filter } doesn't work

      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }), this.state.filter === "no-filter" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
      to: {
        pathname: `/fridge/${this.props.fridgeId}`
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ "./src/components/FoodItem.js":
/*!************************************!*\
  !*** ./src/components/FoodItem.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FoodItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/San4e/Desktop/fridge-manager/client/src/components/FoodItem.js";

class FoodItem extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    var _this$props$foodItem, _this$props$foodItem3, _this$props$foodItem4, _this$props$foodItem6;

    let src = "";

    if ((_this$props$foodItem = this.props.foodItem) === null || _this$props$foodItem === void 0 ? void 0 : _this$props$foodItem.category) {
      var _this$props$foodItem2;

      src = "/" + ((_this$props$foodItem2 = this.props.foodItem) === null || _this$props$foodItem2 === void 0 ? void 0 : _this$props$foodItem2.category) + ".png";
    }

    let itemStyle = {};

    if (((_this$props$foodItem3 = this.props.foodItem) === null || _this$props$foodItem3 === void 0 ? void 0 : _this$props$foodItem3.availability) === "empty") {
      itemStyle = {
        opacity: "0.4"
      };
    }

    let nameStyle = {};

    if ((_this$props$foodItem4 = this.props.foodItem) === null || _this$props$foodItem4 === void 0 ? void 0 : _this$props$foodItem4.expiration) {
      var _this$props$foodItem5;

      if (new Date((_this$props$foodItem5 = this.props.foodItem) === null || _this$props$foodItem5 === void 0 ? void 0 : _this$props$foodItem5.expiration) < new Date()) {
        nameStyle = {
          color: "#f05050"
        };
      }
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: itemStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: nameStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, " ", (_this$props$foodItem6 = this.props.foodItem) === null || _this$props$foodItem6 === void 0 ? void 0 : _this$props$foodItem6.name), src && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      height: "50",
      src: src,
      alt: "itemimage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ "./src/components/Fridge.js":
/*!**********************************!*\
  !*** ./src/components/Fridge.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fridge; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyledComponents */ "./src/components/StyledComponents.js");
var _jsxFileName = "/Users/San4e/Desktop/fridge-manager/client/src/components/Fridge.js";



class Fridge extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      fridge: null
    };
  }

  componentDidMount() {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/api/fridge/${this.props.fridgeId}`).then(response => {
      this.setState({
        fridge: response.data
      });
    });
  }

  render() {
    var _this$state$fridge;

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Postit"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["FridgeTitle"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), (_this$state$fridge = this.state.fridge) === null || _this$state$fridge === void 0 ? void 0 : _this$state$fridge.name)));
  }

}

/***/ }),

/***/ "./src/components/FridgeDetails.js":
/*!*****************************************!*\
  !*** ./src/components/FridgeDetails.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FridgeDetails; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _FoodItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FoodItem */ "./src/components/FoodItem.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StyledComponents */ "./src/components/StyledComponents.js");
var _jsxFileName = "/Users/San4e/Desktop/fridge-manager/client/src/components/FridgeDetails.js";





class FridgeDetails extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      user: this.props.user,
      fridge: null,
      items: [],
      userIsAdmin: false,
      userHasFridge: false,
      message: ""
    };

    this.joinFridge = () => {
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`/api/fridge/${this.state.fridge._id}/join`, {
        userId: this.props.user._id
      }).then(response => {
        this.props.updateFunc();
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/auth/loggedin").then(resp => {
          var _response$data, _response$data2;

          let isAdmin = (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.admins.includes(resp.data._id);
          let hasFridge = (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.users.includes(resp.data._id);
          this.setState({
            user: resp.data,
            userIsAdmin: isAdmin,
            userHasFridge: hasFridge,
            fridge: response.data
          });
        });
      }).catch(err => {
        this.setState({
          message: err.response.data.message
        });
      });
    };

    this.handleDelete = () => {
      if (window.confirm("Are you sure you want to delete this fridge?")) {
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`/api/fridge/${this.props.fridgeId}/delete`, {
          userId: this.props.user._id
        }).then(response => {
          this.props.updateFunc();
          this.props.history.push("/");
        });
      }
    };
  }

  componentDidMount() {
    const filter = window.location.search ? window.location.search.split("=")[1] : "";
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`/api/fridge/${this.props.fridgeId}/items`).then(response => {
      var _response$data3, _response$data3$admin, _response$data4, _response$data4$users, _response$data5;

      let isAdmin = response === null || response === void 0 ? void 0 : (_response$data3 = response.data) === null || _response$data3 === void 0 ? void 0 : (_response$data3$admin = _response$data3.admins) === null || _response$data3$admin === void 0 ? void 0 : _response$data3$admin.includes(this.state.user._id);
      let hasFridge = response === null || response === void 0 ? void 0 : (_response$data4 = response.data) === null || _response$data4 === void 0 ? void 0 : (_response$data4$users = _response$data4.users) === null || _response$data4$users === void 0 ? void 0 : _response$data4$users.includes(this.state.user._id);
      let filteredItems = response === null || response === void 0 ? void 0 : (_response$data5 = response.data) === null || _response$data5 === void 0 ? void 0 : _response$data5.items;

      if (filter) {
        if (filter === "expiration-date") {
          // sort by exp.date
          filteredItems = filteredItems.sort((a, b) => {
            if (!a.expiration || !b.expiration) {
              return true;
            }

            return new Date(a.expiration) - new Date(b.expiration);
          });
        } else {
          var _response$data6;

          filteredItems = response === null || response === void 0 ? void 0 : (_response$data6 = response.data) === null || _response$data6 === void 0 ? void 0 : _response$data6.items.filter(item => {
            if (filter === "my-items") {
              return item.users.includes(this.state.user._id);
            }

            if (filter === "availability") {
              return item.availability === "empty" || new Date(item.expiration) < new Date();
            } else if (filter === "common-items") {
              return item.common === true;
            }

            return true;
          });
        }
      }

      this.setState({
        fridge: response === null || response === void 0 ? void 0 : response.data,
        userIsAdmin: isAdmin,
        userHasFridge: hasFridge,
        items: filteredItems
      });
    }).catch(err => {
      this.setState({
        message: err.response.data.message
      });
    });
  }

  render() {
    var _this$state$fridge, _this$state$items;

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["ContainerTitleAndFilter"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["SpacerDiv"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["Title"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, " ", (_this$state$fridge = this.state.fridge) === null || _this$state$fridge === void 0 ? void 0 : _this$state$fridge.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["FilterLink"], {
      to: `/fridge/${this.props.fridgeId}/filters`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["SortButton"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["FilterSpan"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, "Filters"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["ContainerFridgedetails"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["ContainerFridgeInside"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, (_this$state$items = this.state.items) === null || _this$state$items === void 0 ? void 0 : _this$state$items.map(item => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["Innerbox"], {
        key: item._id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["Card"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["StyledLink"], {
        to: `/fridge/${this.props.fridgeId}/foodItem/${item._id}`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FoodItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
        foodItem: item,
        history: this.props.history,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }))));
    }), this.state.fridge && this.state.userHasFridge && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["Innerbox"], {
      style: {
        borderBottom: "none"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["Card"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["StyledLink"], {
      to: `/fridge/${this.state.fridge._id}/createItem`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["AddImg"], {
      src: "/add.png",
      alt: "add",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["ButtonContainer"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, this.state.userIsAdmin && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["GroupDeleteButton"], {
      onClick: () => this.handleDelete(this.props.fridgeId),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, "Delete fridge"), this.state.userIsAdmin && this.state.fridge && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: `/fridge/${this.state.fridge._id}/users`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["GroupButton"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, "(", this.state.fridge.users.length, ") Users")), this.state.userIsAdmin && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: `/fridge/${this.state.fridge._id}/invite`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["GroupButton"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, "Invite Users")), this.state.userHasFridge === false && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["Center"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      type: "submit",
      onClick: this.joinFridge,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, "Join Fridge")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["Section"], {
      style: {
        color: "#f05050"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, this.state.message && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, this.state.message))));
  }

}

/***/ }),

/***/ "./src/components/FridgeUsers.js":
/*!***************************************!*\
  !*** ./src/components/FridgeUsers.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FridgeUsers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyledComponents */ "./src/components/StyledComponents.js");
var _jsxFileName = "/Users/San4e/Desktop/fridge-manager/client/src/components/FridgeUsers.js";



class FridgeUsers extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      fridge: null,
      message: ""
    };
  }

  componentDidMount() {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/api/fridge/${this.props.fridgeId}/users`).then(response => {
      this.setState({
        fridge: response.data
      });
    }).catch(err => {
      this.setState({
        message: err.response.data.message
      });
    });
  }

  handleDelete(userId) {
    if (window.confirm("Are you sure you want to remove this user from this fridge?")) {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/api/fridge/${this.props.fridgeId}/removeUser`, {
        userId: userId
      }).then(response => {
        this.setState({
          fridge: response.data
        });
      }).catch(err => {
        this.setState({
          message: err.response.data.message
        });
      });
    }
  }

  render() {
    var _this$state$fridge, _this$state$fridge2;

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Section"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Section"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "Users of: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, (_this$state$fridge = this.state.fridge) === null || _this$state$fridge === void 0 ? void 0 : _this$state$fridge.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Section"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, ((_this$state$fridge2 = this.state.fridge) === null || _this$state$fridge2 === void 0 ? void 0 : _this$state$fridge2.users) && this.state.fridge.users.map(user => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["UserCard"], {
        key: user._id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["UserName"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, user.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["UserDeleteButton"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, user._id !== this.props.userId && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["RemoveButton"], {
        onClick: () => this.handleDelete(user._id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Remove")));
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Section"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, this.state.message && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, this.state.message)));
  }

}

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Fridge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Fridge */ "./src/components/Fridge.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Login */ "./src/components/Login.js");
/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StyledComponents */ "./src/components/StyledComponents.js");
var _jsxFileName = "/Users/San4e/Desktop/fridge-manager/client/src/components/Home.js";





class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    if (this.props.user) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, this.props.user.fridges.map(fridgeId => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["StyledLink"], {
          to: `/fridge/${fridgeId}`,
          key: fridgeId,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["SmallFridge"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Fridge__WEBPACK_IMPORTED_MODULE_2__["default"], {
          fridgeId: fridgeId,
          user: this.props.user,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }))));
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["StyledLink"], {
        to: "/createFridge",
        style: {
          padding: "5vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Add a fridge"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["AddImg"], {
        src: "/add.png",
        alt: "add",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }))));
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["MainTitle"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Fridgy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        padding: "0 10vh"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Welcome to Fridgy!", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), " The app that helps you organise your fridge."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__["HomeImg"], {
      src: "/fridge.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        paddingBottom: "10vh"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Login__WEBPACK_IMPORTED_MODULE_3__["default"], {
      setUser: this.props.setUser,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/signup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Sign Up")));
  }

}

/***/ }),

/***/ "./src/components/Invite.js":
/*!**********************************!*\
  !*** ./src/components/Invite.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyledComponents */ "./src/components/StyledComponents.js");
var _jsxFileName = "/Users/San4e/Desktop/fridge-manager/client/src/components/Invite.js";



class CreateItem extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      emails: ""
    };

    this.handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.handleSubmit = event => {
      event.preventDefault();
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/api/fridge/invite`, {
        emails: this.state.emails,
        userId: this.props.user._id,
        fridgeId: this.props.fridgeId
      }).then(response => {
        // redirect
        this.props.history.push(`/fridge/${this.props.fridgeId}`); // TODO: show confirmation?
      }).catch(err => {
        this.setState({
          message: err.response.data.message
        });
      });
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Section"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["H2"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Invite to fridge"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      onSubmit: this.handleSubmit,
      id: "email-form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Label"], {
      htmlFor: "emails",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "Please enter user e-mails, separated by a comma:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Textarea"], {
      name: "emails",
      cols: "80",
      rows: "8",
      form: "email-form",
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Submit")));
  }

}

/***/ }),

/***/ "./src/components/ItemDetails.js":
/*!***************************************!*\
  !*** ./src/components/ItemDetails.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ItemDetails; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StyledComponents */ "./src/components/StyledComponents.js");
var _jsxFileName = "/Users/San4e/Desktop/fridge-manager/client/src/components/ItemDetails.js";




class ItemDetails extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      foodItem: null
    };

    this.handleDelete = () => {
      if (window.confirm("Are you sure you want to delete this item?")) {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`/api/foodItem/${this.props.itemId}/delete`, {
          fridgeId: this.props.fridgeId
        }).then(response => {
          this.props.updateFunc(response.data);
          this.props.history.push(`/fridge/${this.props.fridgeId}`);
        });
      }
    };
  }

  componentDidMount() {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`/api/foodItem/${this.props.itemId}`).then(response => {
      this.setState({
        foodItem: response.data
      });
    });
  }

  render() {
    var _this$state$foodItem, _this$state$foodItem3, _this$state$foodItem4, _this$state$foodItem5, _this$state$foodItem6, _this$state$foodItem7, _this$state$foodItem8, _this$state$foodItem9, _this$state$foodItem10, _this$state$foodItem11, _this$state$foodItem12, _this$state$foodItem13, _this$state$foodItem14, _this$state$foodItem15, _this$state$foodItem16, _this$state$foodItem17, _this$state$foodItem18, _this$state$foodItem19, _this$state$foodItem20;

    let src = "";

    if ((_this$state$foodItem = this.state.foodItem) === null || _this$state$foodItem === void 0 ? void 0 : _this$state$foodItem.category) {
      var _this$state$foodItem2;

      src = "/" + ((_this$state$foodItem2 = this.state.foodItem) === null || _this$state$foodItem2 === void 0 ? void 0 : _this$state$foodItem2.category) + ".png";
    }

    let style = {};

    if (((_this$state$foodItem3 = this.state.foodItem) === null || _this$state$foodItem3 === void 0 ? void 0 : _this$state$foodItem3.availability) === "empty" || ((_this$state$foodItem4 = this.state.foodItem) === null || _this$state$foodItem4 === void 0 ? void 0 : _this$state$foodItem4.expiration) && new Date((_this$state$foodItem5 = this.state.foodItem) === null || _this$state$foodItem5 === void 0 ? void 0 : _this$state$foodItem5.expiration) < new Date()) {
      style = {
        color: "#f05050",
        fontWeight: "bold"
      };
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["ContainerTitleAndFilter"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["SpacerDiv"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["FilterLink"], {
      to: `/fridge/${this.props.fridgeId}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "/close-24px.svg",
      alt: "back to frige",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["Section"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["Title"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, (_this$state$foodItem6 = this.state.foodItem) === null || _this$state$foodItem6 === void 0 ? void 0 : _this$state$foodItem6.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["Cleanlist"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["Li"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      height: "70vh",
      src: src,
      alt: "itemimage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, "Belongs to: "), " ", this.props.user.username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "Category: "), (_this$state$foodItem7 = this.state.foodItem) === null || _this$state$foodItem7 === void 0 ? void 0 : _this$state$foodItem7.category), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, "Quantity: "), (_this$state$foodItem8 = this.state.foodItem) === null || _this$state$foodItem8 === void 0 ? void 0 : (_this$state$foodItem9 = _this$state$foodItem8.quantity) === null || _this$state$foodItem9 === void 0 ? void 0 : _this$state$foodItem9.number, " ", (_this$state$foodItem10 = this.state.foodItem) === null || _this$state$foodItem10 === void 0 ? void 0 : (_this$state$foodItem11 = _this$state$foodItem10.quantity) === null || _this$state$foodItem11 === void 0 ? void 0 : _this$state$foodItem11.unit), ((_this$state$foodItem12 = this.state.foodItem) === null || _this$state$foodItem12 === void 0 ? void 0 : (_this$state$foodItem13 = _this$state$foodItem12.quantity) === null || _this$state$foodItem13 === void 0 ? void 0 : _this$state$foodItem13.unit) !== "item" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "Availability: "), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, (_this$state$foodItem14 = this.state.foodItem) === null || _this$state$foodItem14 === void 0 ? void 0 : _this$state$foodItem14.availability)), ((_this$state$foodItem15 = this.state.foodItem) === null || _this$state$foodItem15 === void 0 ? void 0 : _this$state$foodItem15.expiration) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, "Best before: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, (_this$state$foodItem16 = this.state.foodItem) === null || _this$state$foodItem16 === void 0 ? void 0 : (_this$state$foodItem17 = _this$state$foodItem16.expiration) === null || _this$state$foodItem17 === void 0 ? void 0 : _this$state$foodItem17.slice(0, 10))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, "To be shared: "), ((_this$state$foodItem18 = this.state.foodItem) === null || _this$state$foodItem18 === void 0 ? void 0 : _this$state$foodItem18.common) ? "Yes" : "No"), ((_this$state$foodItem19 = this.state.foodItem) === null || _this$state$foodItem19 === void 0 ? void 0 : _this$state$foodItem19.description) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, "Description: "), (_this$state$foodItem20 = this.state.foodItem) === null || _this$state$foodItem20 === void 0 ? void 0 : _this$state$foodItem20.description))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["Section"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: `/${this.props.fridgeId}/foodItem/${this.props.itemId}/edit`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, "Edit item")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_3__["DeleteButton"], {
      onClick: () => this.handleDelete(this.props.foodId),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, "Delete")));
  }

}

/***/ }),

/***/ "./src/components/Login.js":
/*!*********************************!*\
  !*** ./src/components/Login.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyledComponents */ "./src/components/StyledComponents.js");
var _jsxFileName = "/Users/San4e/Desktop/fridge-manager/client/src/components/Login.js";



class Login extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      username: "",
      password: "",
      message: ""
    };

    this.handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.handleSubmit = event => {
      event.preventDefault();
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/auth/login", {
        username: this.state.username,
        password: this.state.password
      }).then(response => {
        this.props.setUser(response.data); // update state for user in <App/>
      }).catch(err => {
        this.setState({
          message: err.response.data.message
        });
      });
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Section"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      type: "text",
      id: "username",
      name: "username",
      placeholder: "Username",
      value: this.state.username,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Section"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      type: "password",
      name: "password",
      id: "password",
      placeholder: "Password",
      value: this.state.password,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Section"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "Login"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Section"], {
      style: {
        color: "#f05050"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, this.state.message && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, this.state.message)));
  }

}

/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyledComponents */ "./src/components/StyledComponents.js");
var _jsxFileName = "/Users/San4e/Desktop/fridge-manager/client/src/components/Navbar.js";




const Navbar = props => {
  const logout = () => {
    props.setUser(null);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("/api/auth/logout").then(() => {});
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["NavTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "Fridgy"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "/",
    onClick: logout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "Logout")));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/components/Signup.js":
/*!**********************************!*\
  !*** ./src/components/Signup.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Signup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyledComponents */ "./src/components/StyledComponents.js");
var _jsxFileName = "/Users/San4e/Desktop/fridge-manager/client/src/components/Signup.js";



class Signup extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      username: "",
      password: "",
      message: ""
    };

    this.handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.handleSubmit = event => {
      event.preventDefault();
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/auth/signup", {
        username: this.state.username,
        password: this.state.password
      }).then(response => {
        // redirect
        this.props.history.push("/"); // update state for user in <App/>

        this.props.setUser(response.data);
      }).catch(err => {
        this.setState({
          message: err.response.data.message
        });
      });
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["H2"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Sign Up"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Section"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "username",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Username: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      type: "text",
      id: "username",
      name: "username",
      value: this.state.username,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Section"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "Password: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      type: "password",
      name: "password",
      id: "password",
      value: this.state.password,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Section"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "Sign up"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_2__["Section"], {
      style: {
        color: "#f05050"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, this.state.message && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, this.state.message)));
  }

}

/***/ }),

/***/ "./src/components/StyledComponents.js":
/*!********************************************!*\
  !*** ./src/components/StyledComponents.js ***!
  \********************************************/
/*! exports provided: Nav, NavLink, NavTitle, UnderNavbarDiv, Span, Label, H2, Form, Section, Button, FilterButton, ContainerTitleAndFilter, SortButton, FilterLink, FilterSpan, SpacerDiv, MainTitle, Title, FridgeTitle, Postit, DeleteButton, RemoveButton, Input, Textarea, StyledLink, Card, UserCard, UserName, UserDeleteButton, Innerbox, ContainerScroll, ContainerFridgedetails, ContainerFridgeInside, Container, HomeImg, LogoImg, AddImg, Cleanlist, Li, Select, SmallFridge, ButtonContainer, GroupButton, GroupDeleteButton, Center */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavTitle", function() { return NavTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderNavbarDiv", function() { return UnderNavbarDiv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Span", function() { return Span; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H2", function() { return H2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterButton", function() { return FilterButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerTitleAndFilter", function() { return ContainerTitleAndFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortButton", function() { return SortButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterLink", function() { return FilterLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterSpan", function() { return FilterSpan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpacerDiv", function() { return SpacerDiv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainTitle", function() { return MainTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FridgeTitle", function() { return FridgeTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Postit", function() { return Postit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteButton", function() { return DeleteButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveButton", function() { return RemoveButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return Textarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLink", function() { return StyledLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCard", function() { return UserCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserName", function() { return UserName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDeleteButton", function() { return UserDeleteButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Innerbox", function() { return Innerbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerScroll", function() { return ContainerScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerFridgedetails", function() { return ContainerFridgedetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerFridgeInside", function() { return ContainerFridgeInside; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeImg", function() { return HomeImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoImg", function() { return LogoImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddImg", function() { return AddImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cleanlist", function() { return Cleanlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Li", function() { return Li; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmallFridge", function() { return SmallFridge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonContainer", function() { return ButtonContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupButton", function() { return GroupButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupDeleteButton", function() { return GroupDeleteButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Center", function() { return Center; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");


const Nav = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav`
  position: fixed;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #5cb1ab;
  padding: 1vh;
`;
const NavLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"])`
  color: white;
  font-size: 1em;
  padding: 1vw;
  text-decoration: none;
`;
const NavTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span`
  font-family: "Lobster";
  padding: 0.5vw;
  font-size: 2em;
`;
const UnderNavbarDiv = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  margin-top: 15vh;
`;
const Span = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span`
  font-size: 1.2em;
  font-family: "Lobster";
  font-weight: lighter;
  color: darkgray;
`;
const Label = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].label`
  width: 70vw;
  @media (min-width: 769px) {
    width: 50vw;
  }
`;
const H2 = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h2`
padding: 3vw
  width: 70vw;
  text-align: center;
`;
const Form = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].form`
  display: flex:
  flex-direction: column;
  padding: 5vh 0 2vh 0;
  align-items: flex-start;
`;
const Section = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  margin-top: 3vh;
  font-size: 1em;
`;
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`
  padding: 1vw;
  font-size: 0.9em;
  width: 30vw;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  background-color: #5cb1ab;
  color: white;
  margin-top: 3vh;

  @media (min-width: 321px) {
    width: 25vw;
  }
  @media (min-width: 426px) {
    width: 15vw;
  }
  @media (min-width: 769px) {
    width: 12vw;
    font-size: 0.7em;
  }
  @media (min-width: 1025px) {
    width: 10vw;
  }
`;
const FilterButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`
  padding: 1vw;
  font-size: 0.8em;
  width: 30vw;
  border: 0.5px solid lightgray;
  border-radius: 5px;
  background-color: #5cb1ab;
  color: white;
  margin-top: 3vh;
  @media (min-width: 321px) {
    width: 50vw;
  }
  @media (min-width: 426px) {
    width: 40vw;
  }
  @media (min-width: 1025px) {
    width: 30vw;
  }
`;
const ContainerTitleAndFilter = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0vw;
`;
const SortButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 30px;
  height: 30px;
  background-image: url(/sort-icon.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const FilterLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"])`
  width: 30px;
  height: 30px;
  margin: 3vh;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #414042;

  @media (min-width: 321px) {
    width: 100px;
  }
`;
const FilterSpan = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span`
  display: none;
  @media (min-width: 321px) {
    display: block;
  }
`;
const SpacerDiv = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 30px;
  height: 30px;
  margin: 3vh;

  @media (min-width: 321px) {
    width: 100px;
  }
`;
const MainTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h1`
  font-size: 2em;
  font-family: "Lobster";
  padding: 2vh;
  color: #414042;
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h1`
  font-size: 5vh;
  font-family: "Lobster";
  padding: 2vh;
  color: #414042;
`;
const FridgeTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p`
  font-size: 2vh;
  font-weight: lightest;
  transform: rotate(-15deg);
  line-height: 70%;
  font-family: "Lobster";
  word-wrap: break-word;
  text-indent: 0.5em;
  padding: 0.5vh;
  height: 5vh;
  width: 5vw;
  @media (min-width: 320px) {
    width: 15vw;
    line-height: 80%;
  }
  @media (min-width: 426px) {
    width: 10vw;
  }
  @media (min-width: 769px) {
    width: 10vw;
  }
  @media (min-width: 1025px) {
    width: 5vw;
    height: 7vh;
  }
`;
const Postit = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  background-image: url(/postit.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 15vw;
  height: 8vh;
  margin: 0 auto;

  @media (min-width: 426px) {
    width: 10vw;
  }
  @media (min-width: 769px) {
    width: 10vw;
  }
  @media (min-width: 1025px) {
    width: 5vw;
    height: 7vh;
  }
`;
const DeleteButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`
  padding: 1vw;
  font-size: 0.9em;
  width: 30vw;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  background-color: #f05050;
  color: white;
  margin: 3vh 0;
  @media (min-width: 321px) {
    width: 25vw;
  }
  @media (min-width: 426px) {
    width: 15vw;
  }
  @media (min-width: 769px) {
    width: 12vw;
    font-size: 0.7em;
  }
  @media (min-width: 1025px) {
    width: 10vw;
  }
`;
const RemoveButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(DeleteButton)`
  margin-top: 0vh;
  width: 25vw;
  padding: 1vw;
  font-size: 0.8em;
  @media (min-width: 321px) {
    width: 20vw;
  }
  @media (min-width: 376px) {
    width: 20vw;
  }
  @media (min-width: 426px) {
    width: 13vw;
    padding: 0.8vw;
  }
  @media (min-width: 769px) {
    width: 10vw;
    padding: 0.5vw;
  }
  @media (min-width: 1025px) {
    width: 8vw;
  }
`;
const Input = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input`
  padding: 1.5vh;
  width: 50vw;
  border-radius: 5px;
`;
const Textarea = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].textarea`
  padding: 1.5vh;
  width: 60vw;
  height: 20vh;
  border: 0.5px solid lightgray;
  border-radius: 5px;
  @media (min-width: 426px) {
    width: 50vw;
  }
  @media (min-width: 769px) {
    width: 40vw;
  }
  @media (min-width: 1025px) {
    width: 35vw;
  }
`;
const StyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"])`
  text-decoration: none;
  color: black;
  font-size: 1em;
`;
const Card = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  text-align: center;
`;
const UserCard = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70vw;
  margin: 0 auto;
  padding: 2vh;
  @media (min-width: 376px) {
    width: 65vw;
  }
  @media (min-width: 426px) {
    width: 50vw;
  }
  @media (min-width: 769px) {
    width: 40vw;
  }
  @media (min-width: 1025px) {
    width: 30vw;
  }
`;
const UserName = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  flex: 1;
`;
const UserDeleteButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  flex: 1;
`;
const Innerbox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  border-bottom: 3px double grey;
  border-bottom-style: double;
  width: 35%;
`;
const ContainerScroll = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
  background-color: rgb(242, 249, 250);
  height: 80vh;
  width: 100vw;
  overflow-y: auto;
  border-radius: 45px;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.9);
  border: solid transparent;
  border-width: 70px 15px 40px 15px;
  border-image-source: url(/FridgyFridge.png);
  border-image-slice: 120;
  padding: 10vw;
`;
const ContainerFridgedetails = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(/FridgyFridge.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  margin: 0 auto;
  width: 90vw;
  height: 70vh;
  max-width: 1000px;
  border-radius: 45px;
`;
const ContainerFridgeInside = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  background-color: rgb(242, 249, 250);
  overflow-y: auto;
  padding: 10px;
  width: 95%;
  height: 95%;
  border-radius: 45px;
  border: solid transparent;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.9);
  border-width: 0px;
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0vw;
`;
const HomeImg = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
  height: 40vh;
`;
const LogoImg = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
  width: 70px;
`;
const AddImg = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img`
  padding-top: 3vh;
  width: 40px;
`;
const Cleanlist = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul`
  list-style-type: none;
  margin: 0vw auto;
  padding: 0vw;
  font-size: 1em;
  text-align: center;
  width: 75vw;
`;
const Li = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li`
  list-style-type: none;
  margin: 0vw auto;
  padding: 0vw;
  font-size: 1em;
  text-align: center;
  width: 50vw;
`;
const Select = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].select`
  width: 52%;
  border: 0.5px solid lightgray;
  border-radius: 5px;
  font-size: 1em;
  margin: 1vw;
  outline: 0;
  padding: 1.8vh;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  @media (min-width: 426px) {
    width: 40%;
  }
  @media (min-width: 769px) {
    width: 35%;
    padding: 2.3vh;
  }
  @media (min-width: 1025px) {
    width: 30%;
  }
`;
const SmallFridge = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  background-image: url("/FridgyFridge.png");
  background-repeat: no-repeat;
  background-size: 35vw;
  margin: 2vh 2vw;
  padding-top: 3vh;
  height: 45vh;
  width: 35vw;
  @media (min-width: 321px) {
    height: 50vh;
    margin: 2vh 3vw;
  }
  @media (min-width: 376px) {
    height: 55vh;
  }
  @media (min-width: 426px) {
    background-size: 15vw;
    height: 45vh;
    width: 15vw;
  }
  @media (min-width: 769px) {
    background-size: 12vw;
    height: 50vh;
    width: 12vw;
  }
  @media (min-width: 1025px) {
    height: 52vh;
  }
`;
const ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  justify-content: space-between;
  width: 80vw;
  margin: 0 auto;
  padding-bottom: 5vh;
  @media (min-width: 426px) {
    width: 50vw;
  }
  @media (min-width: 1025px) {
    width: 40vw;
  }
`;
const GroupButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(Button)`
  width: 25vw;
  height: 11vh;
  @media (min-width: 769px) {
    height: 8vh;
  }
`;
const GroupDeleteButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(DeleteButton)`
  width: 25vw;
  height: 11vh;
  @media (min-width: 769px) {
    height: 8vh;
  }
`;
const Center = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  margin: 0 auto;
`;

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/San4e/Desktop/fridge-manager/client/src/index.js";







axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("/api/auth/loggedin").then(response => {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["BrowserRouter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
    user: response.data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  })), document.getElementById("root"));
}); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/San4e/Desktop/fridge-manager/client/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/San4e/Desktop/fridge-manager/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/San4e/Desktop/fridge-manager/client/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map