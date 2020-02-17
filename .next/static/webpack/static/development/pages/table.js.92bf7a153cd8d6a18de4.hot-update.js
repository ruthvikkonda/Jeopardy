webpackHotUpdate("static/development/pages/table.js",{

/***/ "./components/feedback/feedback.js":
/*!*****************************************!*\
  !*** ./components/feedback/feedback.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/Modal.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons */ "./node_modules/react-icons/lib/esm/index.js");
/* harmony import */ var _scss_modalStyle_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../scss/modalStyle.scss */ "./scss/modalStyle.scss");
/* harmony import */ var _scss_modalStyle_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_scss_modalStyle_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__);












var Feedback =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Feedback, _Component);

  function Feedback(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Feedback);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Feedback).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Feedback, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6___default.a, {
        size: "sm",
        show: this.props.showModal,
        onHide: this.props.handleHide
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6___default.a.Dialog, {
        className: _scss_modalStyle_scss__WEBPACK_IMPORTED_MODULE_9___default.a.modalConfirm
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6___default.a.Body, {
        className: _scss_modalStyle_scss__WEBPACK_IMPORTED_MODULE_9___default.a.modalContent
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6___default.a.Body, {
        className: _scss_modalStyle_scss__WEBPACK_IMPORTED_MODULE_9___default.a.modalHeader
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons__WEBPACK_IMPORTED_MODULE_8__["IconContext"].Provider, {
        value: {
          color: '#fff',
          size: '70px',
          className: _scss_modalStyle_scss__WEBPACK_IMPORTED_MODULE_9___default.a.modalConfirmIconBox
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__["AiFillCheckCircle"], null))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        className: "mx-auto"
      }, "Congratulations!")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6___default.a.Body, {
        className: _scss_modalStyle_scss__WEBPACK_IMPORTED_MODULE_9___default.a.body
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "text-center"
      }, "That was the correct answer.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6___default.a.Body, {
        className: _scss_modalStyle_scss__WEBPACK_IMPORTED_MODULE_9___default.a.modalFooter
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: _scss_modalStyle_scss__WEBPACK_IMPORTED_MODULE_9___default.a.button,
        "data-dismiss": "modal",
        onClick: this.props.handleHide
      }, "OK")))));
    }
  }]);

  return Feedback;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Feedback);

/***/ })

})
//# sourceMappingURL=table.js.92bf7a153cd8d6a18de4.hot-update.js.map