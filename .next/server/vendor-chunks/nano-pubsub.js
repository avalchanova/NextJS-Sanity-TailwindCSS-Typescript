"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/nano-pubsub";
exports.ids = ["vendor-chunks/nano-pubsub"];
exports.modules = {

/***/ "(ssr)/./node_modules/nano-pubsub/dist/cjs/index.js":
/*!****************************************************!*\
  !*** ./node_modules/nano-pubsub/dist/cjs/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nfunction createPubSub() {\n    var subscribers = Object.create(null);\n    var nextId = 0;\n    function subscribe(subscriber) {\n        var id = nextId++;\n        subscribers[id] = subscriber;\n        return function unsubscribe() {\n            delete subscribers[id];\n        };\n    }\n    function publish(event) {\n        for (var id in subscribers) {\n            subscribers[id](event);\n        }\n    }\n    return {\n        publish: publish,\n        subscribe: subscribe,\n    };\n}\nexports[\"default\"] = createPubSub;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmFuby1wdWJzdWIvZGlzdC9janMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1zYW5pdHktYXBwLy4vbm9kZV9tb2R1bGVzL25hbm8tcHVic3ViL2Rpc3QvY2pzL2luZGV4LmpzP2Y0OTEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBjcmVhdGVQdWJTdWIoKSB7XG4gICAgdmFyIHN1YnNjcmliZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB2YXIgbmV4dElkID0gMDtcbiAgICBmdW5jdGlvbiBzdWJzY3JpYmUoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgaWQgPSBuZXh0SWQrKztcbiAgICAgICAgc3Vic2NyaWJlcnNbaWRdID0gc3Vic2NyaWJlcjtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICAgICAgZGVsZXRlIHN1YnNjcmliZXJzW2lkXTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcHVibGlzaChldmVudCkge1xuICAgICAgICBmb3IgKHZhciBpZCBpbiBzdWJzY3JpYmVycykge1xuICAgICAgICAgICAgc3Vic2NyaWJlcnNbaWRdKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwdWJsaXNoOiBwdWJsaXNoLFxuICAgICAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlUHViU3ViO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/nano-pubsub/dist/cjs/index.js\n");

/***/ })

};
;