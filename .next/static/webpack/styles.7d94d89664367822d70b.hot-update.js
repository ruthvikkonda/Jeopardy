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
            injectCss(link, link.href.split("?")[0] + "?unix=1582173808004");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.7d94d89664367822d70b.hot-update.js.map