webpackHotUpdate("static/development/pages/table.js",{

/***/ "./components/question.js":
/*!********************************!*\
  !*** ./components/question.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/Modal.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _userInput_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./userInput.js */ "./components/userInput.js");
/* harmony import */ var _feedback_feedback__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./feedback/feedback */ "./components/feedback/feedback.js");
/* harmony import */ var _backdrop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./backdrop */ "./components/backdrop.js");
/* harmony import */ var _scss_backdrop_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../scss/backdrop.scss */ "./scss/backdrop.scss");
/* harmony import */ var _scss_backdrop_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_scss_backdrop_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");














var SampleQ =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SampleQ, _Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SampleQ, null, [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var _ref$query = _ref.query,
          amount = _ref$query.amount,
          question = _ref$query.question,
          answer = _ref$query.answer;
      return {
        specAmt: amount,
        specQ: question,
        specA: answer
      };
    }
  }]);

  function SampleQ(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SampleQ);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(SampleQ).call(this, props));
    _this.state = {
      showQuestion: false,
      // tracks visibility of first modal (the question modal)
      showFeedback: false // tracks visibility of second modal (the feedback modal)

    };

    _this.handleShow = function () {
      // show question and the backdrop when the user clicks a cell on the table
      _this.setState({
        showQuestion: true
      });

      _this.props.showBackdrop();
    };

    _this.handleHide = function () {
      _this.setState({
        showQuestion: false
      });

      _this.props.hideBackdrop();
    };

    _this.submitForm = function (event) {
      event.preventDefault();

      _this.props.hideBackdrop(); // take down stars backdrop


      _this.setState({
        showQuestion: false,
        // close question modal
        showFeedback: true // should open Feedback modal

      });
    };

    _this.closeFeedback = function () {
      // close Feedback modal and close backdrop so that it goes back to the table
      _this.setState({
        showFeedback: false
      });

      _this.props.hideBackdrop();
    };

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SampleQ, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
        variant: "outline-danger",
        size: "lg",
        onClick: this.handleShow
      }, "$ ", this.props.amount, "00"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6___default.a, {
        show: this.state.showQuestion,
        onHide: this.handleHide,
        dialogClassName: "modal-90w",
        "aria-labelledby": "example-custom-modal-styling-title",
        backdrop: false
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6___default.a.Header, {
        closeButton: true
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6___default.a.Title, {
        id: "example-custom-modal-styling-title"
      }, "Question")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6___default.a.Body, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, this.props.question), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_userInput_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        answer: this.props.specA,
        handleClick: this.submitForm
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_feedback_feedback__WEBPACK_IMPORTED_MODULE_9__["default"], {
        showModal: this.state.showFeedback,
        handleHide: this.closeFeedback
      }));
    }
  }]);

  return SampleQ;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SampleQ);

/***/ })

})
//# sourceMappingURL=table.js.066eac06cd6461c64a5d.hot-update.js.map