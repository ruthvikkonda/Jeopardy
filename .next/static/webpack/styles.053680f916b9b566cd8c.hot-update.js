webpackHotUpdate("styles",{

/***/ "./scss/modalStyle.scss":
/*!******************************!*\
  !*** ./scss/modalStyle.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Feedback":"Feedback___2EyJy","modalDialog":"modalDialog___ASFQz","modalBody":"modalBody___19DC_","modalConfirm":"modalConfirm___1bxFs","modalContent":"modalContent___2shCR","modalHeader":"modalHeader___pyEeK","formControl":"formControl___2MpwY","btn":"btn___C1liH","close":"close___37CMt","modalFooter":"modalFooter___250bN","iconBox":"iconBox___7jLeX","triggerBtn":"triggerBtn___LfF6V"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1581276148096");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.053680f916b9b566cd8c.hot-update.js.map