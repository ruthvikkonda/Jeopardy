webpackHotUpdate("styles",{

/***/ "./scss/correctAnswer.scss":
/*!*********************************!*\
  !*** ./scss/correctAnswer.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"modal":"modal___7Qfet","modal-dialog":"modal-dialog___2xlBj","h4":"h4___11rvc","p":"p___2Ky2k","modalConfirmIconBox":"modalConfirmIconBox___2BR5T","button":"button___RNShi"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1582781998850");
          });
      }
    }
  

/***/ }),

/***/ "./scss/wrongAnswer.scss":
/*!*******************************!*\
  !*** ./scss/wrongAnswer.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"modal":"modal___2xbmU","modal-dialog":"modal-dialog___3kWbT","h4":"h4___3UHjb","p":"p___2HnHw","modalConfirmIconBox":"modalConfirmIconBox___2uvIl","button":"button___2sx12"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1582781998805");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.b267ddf2798c934c8e7b.hot-update.js.map