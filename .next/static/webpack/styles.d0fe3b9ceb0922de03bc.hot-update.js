webpackHotUpdate("styles",{

/***/ "./scss/modalStyle.scss":
/*!******************************!*\
  !*** ./scss/modalStyle.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"modal":"modal___3VWN0","h4":"h4___3iBWP","p":"p___3Y8YL","modalConfirmIconBox":"modalConfirmIconBox___30Kqz","button":"button___3sPcB"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1582173801605");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.d0fe3b9ceb0922de03bc.hot-update.js.map