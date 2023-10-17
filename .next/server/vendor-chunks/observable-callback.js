"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/observable-callback";
exports.ids = ["vendor-chunks/observable-callback"];
exports.modules = {

/***/ "(ssr)/./node_modules/observable-callback/dist/cjs/observableCallback.js":
/*!*************************************************************************!*\
  !*** ./node_modules/observable-callback/dist/cjs/observableCallback.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.observableCallback = void 0;\nvar rxjs_1 = __webpack_require__(/*! rxjs */ \"(ssr)/./node_modules/rxjs/dist/esm5/index.js\");\nvar pass = function (input$) { return input$; };\nfunction observableCallback(operator) {\n    if (operator === void 0) { operator = pass; }\n    var subject = new rxjs_1.Subject();\n    return [subject.pipe(operator), function (arg) { return subject.next(arg); }];\n}\nexports.observableCallback = observableCallback;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb2JzZXJ2YWJsZS1jYWxsYmFjay9kaXN0L2Nqcy9vYnNlcnZhYmxlQ2FsbGJhY2suanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsMEJBQTBCO0FBQzFCLGFBQWEsbUJBQU8sQ0FBQywwREFBTTtBQUMzQiwrQkFBK0I7QUFDL0I7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQSxxREFBcUQsMkJBQTJCO0FBQ2hGO0FBQ0EsMEJBQTBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1zYW5pdHktYXBwLy4vbm9kZV9tb2R1bGVzL29ic2VydmFibGUtY2FsbGJhY2svZGlzdC9janMvb2JzZXJ2YWJsZUNhbGxiYWNrLmpzPzc0NzIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm9ic2VydmFibGVDYWxsYmFjayA9IHZvaWQgMDtcbnZhciByeGpzXzEgPSByZXF1aXJlKFwicnhqc1wiKTtcbnZhciBwYXNzID0gZnVuY3Rpb24gKGlucHV0JCkgeyByZXR1cm4gaW5wdXQkOyB9O1xuZnVuY3Rpb24gb2JzZXJ2YWJsZUNhbGxiYWNrKG9wZXJhdG9yKSB7XG4gICAgaWYgKG9wZXJhdG9yID09PSB2b2lkIDApIHsgb3BlcmF0b3IgPSBwYXNzOyB9XG4gICAgdmFyIHN1YmplY3QgPSBuZXcgcnhqc18xLlN1YmplY3QoKTtcbiAgICByZXR1cm4gW3N1YmplY3QucGlwZShvcGVyYXRvciksIGZ1bmN0aW9uIChhcmcpIHsgcmV0dXJuIHN1YmplY3QubmV4dChhcmcpOyB9XTtcbn1cbmV4cG9ydHMub2JzZXJ2YWJsZUNhbGxiYWNrID0gb2JzZXJ2YWJsZUNhbGxiYWNrO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/observable-callback/dist/cjs/observableCallback.js\n");

/***/ })

};
;