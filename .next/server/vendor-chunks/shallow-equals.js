/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/shallow-equals";
exports.ids = ["vendor-chunks/shallow-equals"];
exports.modules = {

/***/ "(ssr)/./node_modules/shallow-equals/index.js":
/*!**********************************************!*\
  !*** ./node_modules/shallow-equals/index.js ***!
  \**********************************************/
/***/ ((module) => {

eval("module.exports = shallow\n\nfunction shallow(a, b, compare) {\n  var aIsNull = a === null\n  var bIsNull = b === null\n\n  if (aIsNull !== bIsNull) return false\n\n  var aIsArray = Array.isArray(a)\n  var bIsArray = Array.isArray(b)\n\n  if (aIsArray !== bIsArray) return false\n\n  var aTypeof = typeof a\n  var bTypeof = typeof b\n\n  if (aTypeof !== bTypeof) return false\n  if (flat(aTypeof)) return compare\n    ? compare(a, b)\n    : a === b\n\n  return aIsArray\n    ? shallowArray(a, b, compare)\n    : shallowObject(a, b, compare)\n}\n\nfunction shallowArray(a, b, compare) {\n  var l = a.length\n  if (l !== b.length) return false\n\n  if (compare) {\n    for (var i = 0; i < l; i++)\n      if (!compare(a[i], b[i])) return false\n  } else {\n    for (var i = 0; i < l; i++) {\n      if (a[i] !== b[i]) return false\n    }\n  }\n\n  return true\n}\n\nfunction shallowObject(a, b, compare) {\n  var ka = 0\n  var kb = 0\n\n  if (compare) {\n    for (var key in a) {\n      if (\n        a.hasOwnProperty(key) &&\n        !compare(a[key], b[key])\n      ) return false\n\n      ka++\n    }\n  } else {\n    for (var key in a) {\n      if (\n        a.hasOwnProperty(key) &&\n        a[key] !== b[key]\n      ) return false\n\n      ka++\n    }\n  }\n\n  for (var key in b) {\n    if (b.hasOwnProperty(key)) kb++\n  }\n\n  return ka === kb\n}\n\nfunction flat(type) {\n  return (\n    type !== 'function' &&\n    type !== 'object'\n  )\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2hhbGxvdy1lcXVhbHMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBLElBQUk7QUFDSixvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1zYW5pdHktYXBwLy4vbm9kZV9tb2R1bGVzL3NoYWxsb3ctZXF1YWxzL2luZGV4LmpzP2RkZjEiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBzaGFsbG93XG5cbmZ1bmN0aW9uIHNoYWxsb3coYSwgYiwgY29tcGFyZSkge1xuICB2YXIgYUlzTnVsbCA9IGEgPT09IG51bGxcbiAgdmFyIGJJc051bGwgPSBiID09PSBudWxsXG5cbiAgaWYgKGFJc051bGwgIT09IGJJc051bGwpIHJldHVybiBmYWxzZVxuXG4gIHZhciBhSXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYSlcbiAgdmFyIGJJc0FycmF5ID0gQXJyYXkuaXNBcnJheShiKVxuXG4gIGlmIChhSXNBcnJheSAhPT0gYklzQXJyYXkpIHJldHVybiBmYWxzZVxuXG4gIHZhciBhVHlwZW9mID0gdHlwZW9mIGFcbiAgdmFyIGJUeXBlb2YgPSB0eXBlb2YgYlxuXG4gIGlmIChhVHlwZW9mICE9PSBiVHlwZW9mKSByZXR1cm4gZmFsc2VcbiAgaWYgKGZsYXQoYVR5cGVvZikpIHJldHVybiBjb21wYXJlXG4gICAgPyBjb21wYXJlKGEsIGIpXG4gICAgOiBhID09PSBiXG5cbiAgcmV0dXJuIGFJc0FycmF5XG4gICAgPyBzaGFsbG93QXJyYXkoYSwgYiwgY29tcGFyZSlcbiAgICA6IHNoYWxsb3dPYmplY3QoYSwgYiwgY29tcGFyZSlcbn1cblxuZnVuY3Rpb24gc2hhbGxvd0FycmF5KGEsIGIsIGNvbXBhcmUpIHtcbiAgdmFyIGwgPSBhLmxlbmd0aFxuICBpZiAobCAhPT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZVxuXG4gIGlmIChjb21wYXJlKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspXG4gICAgICBpZiAoIWNvbXBhcmUoYVtpXSwgYltpXSkpIHJldHVybiBmYWxzZVxuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAoYVtpXSAhPT0gYltpXSkgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gc2hhbGxvd09iamVjdChhLCBiLCBjb21wYXJlKSB7XG4gIHZhciBrYSA9IDBcbiAgdmFyIGtiID0gMFxuXG4gIGlmIChjb21wYXJlKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGEpIHtcbiAgICAgIGlmIChcbiAgICAgICAgYS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmXG4gICAgICAgICFjb21wYXJlKGFba2V5XSwgYltrZXldKVxuICAgICAgKSByZXR1cm4gZmFsc2VcblxuICAgICAga2ErK1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gYSkge1xuICAgICAgaWYgKFxuICAgICAgICBhLmhhc093blByb3BlcnR5KGtleSkgJiZcbiAgICAgICAgYVtrZXldICE9PSBiW2tleV1cbiAgICAgICkgcmV0dXJuIGZhbHNlXG5cbiAgICAgIGthKytcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBrZXkgaW4gYikge1xuICAgIGlmIChiLmhhc093blByb3BlcnR5KGtleSkpIGtiKytcbiAgfVxuXG4gIHJldHVybiBrYSA9PT0ga2Jcbn1cblxuZnVuY3Rpb24gZmxhdCh0eXBlKSB7XG4gIHJldHVybiAoXG4gICAgdHlwZSAhPT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGUgIT09ICdvYmplY3QnXG4gIClcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/shallow-equals/index.js\n");

/***/ })

};
;