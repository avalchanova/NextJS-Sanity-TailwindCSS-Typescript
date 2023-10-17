/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/get-random-values";
exports.ids = ["vendor-chunks/get-random-values"];
exports.modules = {

/***/ "(ssr)/./node_modules/get-random-values/index.js":
/*!*************************************************!*\
  !*** ./node_modules/get-random-values/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var window = __webpack_require__(/*! global/window */ \"(ssr)/./node_modules/global/window.js\");\nvar nodeCrypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nfunction getRandomValues(buf) {\n  if (window.crypto && window.crypto.getRandomValues) {\n    return window.crypto.getRandomValues(buf);\n  }\n  if (typeof window.msCrypto === 'object' && typeof window.msCrypto.getRandomValues === 'function') {\n    return window.msCrypto.getRandomValues(buf);\n  }\n  if (nodeCrypto.randomBytes) {\n    if (!(buf instanceof Uint8Array)) {\n      throw new TypeError('expected Uint8Array');\n    }\n    if (buf.length > 65536) {\n      var e = new Error();\n      e.code = 22;\n      e.message = 'Failed to execute \\'getRandomValues\\' on \\'Crypto\\': The ' +\n        'ArrayBufferView\\'s byte length (' + buf.length + ') exceeds the ' +\n        'number of bytes of entropy available via this API (65536).';\n      e.name = 'QuotaExceededError';\n      throw e;\n    }\n    var bytes = nodeCrypto.randomBytes(buf.length);\n    buf.set(bytes);\n    return buf;\n  }\n  else {\n    throw new Error('No secure random number generator available.');\n  }\n}\n\nmodule.exports = getRandomValues;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZ2V0LXJhbmRvbS12YWx1ZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEsYUFBYSxtQkFBTyxDQUFDLDREQUFlO0FBQ3BDLGlCQUFpQixtQkFBTyxDQUFDLHNCQUFROztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtc2FuaXR5LWFwcC8uL25vZGVfbW9kdWxlcy9nZXQtcmFuZG9tLXZhbHVlcy9pbmRleC5qcz81ODE0Il0sInNvdXJjZXNDb250ZW50IjpbInZhciB3aW5kb3cgPSByZXF1aXJlKCdnbG9iYWwvd2luZG93Jyk7XG52YXIgbm9kZUNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuXG5mdW5jdGlvbiBnZXRSYW5kb21WYWx1ZXMoYnVmKSB7XG4gIGlmICh3aW5kb3cuY3J5cHRvICYmIHdpbmRvdy5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGJ1Zik7XG4gIH1cbiAgaWYgKHR5cGVvZiB3aW5kb3cubXNDcnlwdG8gPT09ICdvYmplY3QnICYmIHR5cGVvZiB3aW5kb3cubXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5tc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMoYnVmKTtcbiAgfVxuICBpZiAobm9kZUNyeXB0by5yYW5kb21CeXRlcykge1xuICAgIGlmICghKGJ1ZiBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleHBlY3RlZCBVaW50OEFycmF5Jyk7XG4gICAgfVxuICAgIGlmIChidWYubGVuZ3RoID4gNjU1MzYpIHtcbiAgICAgIHZhciBlID0gbmV3IEVycm9yKCk7XG4gICAgICBlLmNvZGUgPSAyMjtcbiAgICAgIGUubWVzc2FnZSA9ICdGYWlsZWQgdG8gZXhlY3V0ZSBcXCdnZXRSYW5kb21WYWx1ZXNcXCcgb24gXFwnQ3J5cHRvXFwnOiBUaGUgJyArXG4gICAgICAgICdBcnJheUJ1ZmZlclZpZXdcXCdzIGJ5dGUgbGVuZ3RoICgnICsgYnVmLmxlbmd0aCArICcpIGV4Y2VlZHMgdGhlICcgK1xuICAgICAgICAnbnVtYmVyIG9mIGJ5dGVzIG9mIGVudHJvcHkgYXZhaWxhYmxlIHZpYSB0aGlzIEFQSSAoNjU1MzYpLic7XG4gICAgICBlLm5hbWUgPSAnUXVvdGFFeGNlZWRlZEVycm9yJztcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICAgIHZhciBieXRlcyA9IG5vZGVDcnlwdG8ucmFuZG9tQnl0ZXMoYnVmLmxlbmd0aCk7XG4gICAgYnVmLnNldChieXRlcyk7XG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuICBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHNlY3VyZSByYW5kb20gbnVtYmVyIGdlbmVyYXRvciBhdmFpbGFibGUuJyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYW5kb21WYWx1ZXM7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/get-random-values/index.js\n");

/***/ })

};
;