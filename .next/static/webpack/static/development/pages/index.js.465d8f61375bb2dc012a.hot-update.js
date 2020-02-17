webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/feedback/feedback.js":
false,

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _backdrop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./backdrop */ "./components/backdrop.js");
/* harmony import */ var _pages_document__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/_document */ "./pages/_document.js");
/* harmony import */ var _components_Navbar_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Navbar/index */ "./components/Navbar/index.js");











var Layout =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Layout, _Component);

  function Layout(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "render",
    value: function render() {
      var background;

      if (this.props.showBackground) {
        background = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_backdrop__WEBPACK_IMPORTED_MODULE_7__["default"], null);
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, this.props.showBackground ? null : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Navbar_index__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("title", null, this.props.title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        charSet: "utf-8"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      })), background);
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Layout);
/*
import Head from 'next/head'
import React from "react";
import Backdrop from "./backdrop";

export default ({ showBackground, title = 'Ruthvik Konda' }) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Backdrop/>
    </div>
)
 */

/***/ }),

/***/ "./components/question.js":
false,

/***/ "./components/userInput.js":
false,

/***/ "./node_modules/dom-helpers/activeElement.js":
false,

/***/ "./node_modules/dom-helpers/class/addClass.js":
false,

/***/ "./node_modules/dom-helpers/class/hasClass.js":
false,

/***/ "./node_modules/dom-helpers/class/index.js":
false,

/***/ "./node_modules/dom-helpers/class/removeClass.js":
false,

/***/ "./node_modules/dom-helpers/events/filter.js":
false,

/***/ "./node_modules/dom-helpers/events/index.js":
false,

/***/ "./node_modules/dom-helpers/events/listen.js":
false,

/***/ "./node_modules/dom-helpers/events/off.js":
false,

/***/ "./node_modules/dom-helpers/events/on.js":
false,

/***/ "./node_modules/dom-helpers/ownerDocument.js":
false,

/***/ "./node_modules/dom-helpers/query/contains.js":
false,

/***/ "./node_modules/dom-helpers/query/isWindow.js":
false,

/***/ "./node_modules/dom-helpers/util/scrollbarSize.js":
false,

/***/ "./node_modules/prop-types-extra/lib/componentOrElement.js":
false,

/***/ "./node_modules/prop-types-extra/lib/elementType.js":
false,

/***/ "./node_modules/react-bootstrap/Button.js":
false,

/***/ "./node_modules/react-bootstrap/CloseButton.js":
false,

/***/ "./node_modules/react-bootstrap/Col.js":
false,

/***/ "./node_modules/react-bootstrap/Fade.js":
false,

/***/ "./node_modules/react-bootstrap/Feedback.js":
false,

/***/ "./node_modules/react-bootstrap/Form.js":
false,

/***/ "./node_modules/react-bootstrap/FormCheck.js":
false,

/***/ "./node_modules/react-bootstrap/FormCheckInput.js":
false,

/***/ "./node_modules/react-bootstrap/FormCheckLabel.js":
false,

/***/ "./node_modules/react-bootstrap/FormContext.js":
false,

/***/ "./node_modules/react-bootstrap/FormControl.js":
false,

/***/ "./node_modules/react-bootstrap/FormGroup.js":
false,

/***/ "./node_modules/react-bootstrap/FormLabel.js":
false,

/***/ "./node_modules/react-bootstrap/FormText.js":
false,

/***/ "./node_modules/react-bootstrap/Modal.js":
false,

/***/ "./node_modules/react-bootstrap/ModalBody.js":
false,

/***/ "./node_modules/react-bootstrap/ModalContext.js":
false,

/***/ "./node_modules/react-bootstrap/ModalDialog.js":
false,

/***/ "./node_modules/react-bootstrap/ModalFooter.js":
false,

/***/ "./node_modules/react-bootstrap/ModalHeader.js":
false,

/***/ "./node_modules/react-bootstrap/ModalTitle.js":
false,

/***/ "./node_modules/react-bootstrap/Row.js":
false,

/***/ "./node_modules/react-bootstrap/Table.js":
false,

/***/ "./node_modules/react-bootstrap/node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/react-bootstrap/node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/react-bootstrap/node_modules/prop-types/index.js":
false,

/***/ "./node_modules/react-bootstrap/node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/react-bootstrap/node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/react-bootstrap/node_modules/react-is/index.js":
false,

/***/ "./node_modules/react-bootstrap/utils/BootstrapModalManager.js":
false,

/***/ "./node_modules/react-bootstrap/utils/divWithClassName.js":
false,

/***/ "./node_modules/react-icons/ai/index.esm.js":
false,

/***/ "./node_modules/react-icons/lib/esm/iconBase.js":
false,

/***/ "./node_modules/react-icons/lib/esm/iconContext.js":
false,

/***/ "./node_modules/react-icons/lib/esm/iconsManifest.js":
false,

/***/ "./node_modules/react-icons/lib/esm/index.js":
false,

/***/ "./node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/react-is/index.js":
false,

/***/ "./node_modules/react-overlays/Modal.js":
false,

/***/ "./node_modules/react-overlays/ModalManager.js":
false,

/***/ "./node_modules/react-overlays/Portal.js":
false,

/***/ "./node_modules/react-overlays/WaitForContainer.js":
false,

/***/ "./node_modules/react-overlays/utils/getContainer.js":
false,

/***/ "./node_modules/react-overlays/utils/isOverflowing.js":
false,

/***/ "./node_modules/react-overlays/utils/manageAriaHidden.js":
false,

/***/ "./node_modules/react-overlays/utils/ownerDocument.js":
false,

/***/ "./node_modules/warning/warning.js":
false,

/***/ "./pages/table.js":
false

})
//# sourceMappingURL=index.js.465d8f61375bb2dc012a.hot-update.js.map