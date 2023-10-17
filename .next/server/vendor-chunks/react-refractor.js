"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-refractor";
exports.ids = ["vendor-chunks/react-refractor"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-refractor/lib/Refractor.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-refractor/lib/Refractor.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar React = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\nvar PropTypes = __webpack_require__(/*! prop-types */ \"(ssr)/./node_modules/prop-types/index.js\");\n\nvar fract = __webpack_require__(/*! refractor/core.js */ \"(ssr)/./node_modules/refractor/core.js\");\n\nvar mapChildren = __webpack_require__(/*! ./mapChildren */ \"(ssr)/./node_modules/react-refractor/lib/mapChildren.js\");\n\nvar addMarkers = __webpack_require__(/*! ./addMarkers */ \"(ssr)/./node_modules/react-refractor/lib/addMarkers.js\"); // eslint-disable-next-line id-length\n\n\nvar h = React.createElement;\n\nfunction Refractor(props) {\n  if (true) {\n    if (!fract.registered(props.language)) {\n      // eslint-disable-next-line no-console\n      console.warn(\"No language definitions for \\\"\".concat(props.language, \"\\\" seems to be registered, did you forget to call `Refractor.registerLanguage()`?\"));\n    }\n  }\n\n  var langClassName = \"language-\".concat(props.language);\n  var codeProps = {\n    className: langClassName\n  };\n  var preProps = {\n    className: [props.className, langClassName].filter(Boolean).join(' ')\n  };\n\n  if (props.inline) {\n    codeProps.style = {\n      display: 'inline'\n    };\n    codeProps.className = props.className;\n  }\n\n  var ast = fract.highlight(props.value, props.language);\n\n  if (props.markers && props.markers.length > 0) {\n    ast = addMarkers(ast, {\n      markers: props.markers\n    });\n  }\n\n  var value = ast.length === 0 ? props.value : ast.map(mapChildren.depth(0));\n  var code = h('code', codeProps, value);\n  return props.inline ? code : h('pre', preProps, code);\n}\n\nRefractor.propTypes = {\n  className: PropTypes.string,\n  inline: PropTypes.bool,\n  language: PropTypes.string.isRequired,\n  value: PropTypes.string.isRequired,\n  markers: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.shape({\n    line: PropTypes.number.isRequired,\n    className: PropTypes.string,\n    component: PropTypes.oneOfType([PropTypes.node, PropTypes.func])\n  })]))\n};\nRefractor.defaultProps = {\n  className: 'refractor',\n  inline: false\n};\n\nRefractor.registerLanguage = function (lang) {\n  return fract.register(lang);\n};\n\nRefractor.hasLanguage = function (lang) {\n  return fract.registered(lang);\n};\n\nmodule.exports = Refractor;\n//# sourceMappingURL=Refractor.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVmcmFjdG9yL2xpYi9SZWZyYWN0b3IuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHdHQUFPOztBQUUzQixnQkFBZ0IsbUJBQU8sQ0FBQyw0REFBWTs7QUFFcEMsWUFBWSxtQkFBTyxDQUFDLGlFQUFtQjs7QUFFdkMsa0JBQWtCLG1CQUFPLENBQUMsOEVBQWU7O0FBRXpDLGlCQUFpQixtQkFBTyxDQUFDLDRFQUFjLEdBQUc7OztBQUcxQzs7QUFFQTtBQUNBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtc2FuaXR5LWFwcC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWZyYWN0b3IvbGliL1JlZnJhY3Rvci5qcz83ODc0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgZnJhY3QgPSByZXF1aXJlKCdyZWZyYWN0b3IvY29yZS5qcycpO1xuXG52YXIgbWFwQ2hpbGRyZW4gPSByZXF1aXJlKCcuL21hcENoaWxkcmVuJyk7XG5cbnZhciBhZGRNYXJrZXJzID0gcmVxdWlyZSgnLi9hZGRNYXJrZXJzJyk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpZC1sZW5ndGhcblxuXG52YXIgaCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQ7XG5cbmZ1bmN0aW9uIFJlZnJhY3Rvcihwcm9wcykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghZnJhY3QucmVnaXN0ZXJlZChwcm9wcy5sYW5ndWFnZSkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJObyBsYW5ndWFnZSBkZWZpbml0aW9ucyBmb3IgXFxcIlwiLmNvbmNhdChwcm9wcy5sYW5ndWFnZSwgXCJcXFwiIHNlZW1zIHRvIGJlIHJlZ2lzdGVyZWQsIGRpZCB5b3UgZm9yZ2V0IHRvIGNhbGwgYFJlZnJhY3Rvci5yZWdpc3Rlckxhbmd1YWdlKClgP1wiKSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGxhbmdDbGFzc05hbWUgPSBcImxhbmd1YWdlLVwiLmNvbmNhdChwcm9wcy5sYW5ndWFnZSk7XG4gIHZhciBjb2RlUHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiBsYW5nQ2xhc3NOYW1lXG4gIH07XG4gIHZhciBwcmVQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6IFtwcm9wcy5jbGFzc05hbWUsIGxhbmdDbGFzc05hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJylcbiAgfTtcblxuICBpZiAocHJvcHMuaW5saW5lKSB7XG4gICAgY29kZVByb3BzLnN0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2lubGluZSdcbiAgICB9O1xuICAgIGNvZGVQcm9wcy5jbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWU7XG4gIH1cblxuICB2YXIgYXN0ID0gZnJhY3QuaGlnaGxpZ2h0KHByb3BzLnZhbHVlLCBwcm9wcy5sYW5ndWFnZSk7XG5cbiAgaWYgKHByb3BzLm1hcmtlcnMgJiYgcHJvcHMubWFya2Vycy5sZW5ndGggPiAwKSB7XG4gICAgYXN0ID0gYWRkTWFya2Vycyhhc3QsIHtcbiAgICAgIG1hcmtlcnM6IHByb3BzLm1hcmtlcnNcbiAgICB9KTtcbiAgfVxuXG4gIHZhciB2YWx1ZSA9IGFzdC5sZW5ndGggPT09IDAgPyBwcm9wcy52YWx1ZSA6IGFzdC5tYXAobWFwQ2hpbGRyZW4uZGVwdGgoMCkpO1xuICB2YXIgY29kZSA9IGgoJ2NvZGUnLCBjb2RlUHJvcHMsIHZhbHVlKTtcbiAgcmV0dXJuIHByb3BzLmlubGluZSA/IGNvZGUgOiBoKCdwcmUnLCBwcmVQcm9wcywgY29kZSk7XG59XG5cblJlZnJhY3Rvci5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaW5saW5lOiBQcm9wVHlwZXMuYm9vbCxcbiAgbGFuZ3VhZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbWFya2VyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBsaW5lOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5mdW5jXSlcbiAgfSldKSlcbn07XG5SZWZyYWN0b3IuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICdyZWZyYWN0b3InLFxuICBpbmxpbmU6IGZhbHNlXG59O1xuXG5SZWZyYWN0b3IucmVnaXN0ZXJMYW5ndWFnZSA9IGZ1bmN0aW9uIChsYW5nKSB7XG4gIHJldHVybiBmcmFjdC5yZWdpc3RlcihsYW5nKTtcbn07XG5cblJlZnJhY3Rvci5oYXNMYW5ndWFnZSA9IGZ1bmN0aW9uIChsYW5nKSB7XG4gIHJldHVybiBmcmFjdC5yZWdpc3RlcmVkKGxhbmcpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWZyYWN0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1SZWZyYWN0b3IuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-refractor/lib/Refractor.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-refractor/lib/addMarkers.js":
/*!********************************************************!*\
  !*** ./node_modules/react-refractor/lib/addMarkers.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar filter = __webpack_require__(/*! unist-util-filter */ \"(ssr)/./node_modules/unist-util-filter/index.js\");\n\nvar visit = __webpack_require__(/*! unist-util-visit-parents */ \"(ssr)/./node_modules/unist-util-visit-parents/index.js\");\n\nvar NodeMap = __webpack_require__(/*! ./map */ \"(ssr)/./node_modules/react-refractor/lib/map.js\");\n\nfunction lineNumberify(ast) {\n  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {\n    lineNumber: 1\n  };\n  return ast.reduce(function (result, node) {\n    var lineStart = context.lineNumber;\n\n    if (node.type === 'text') {\n      if (node.value.indexOf('\\n') === -1) {\n        node.lineStart = lineStart;\n        node.lineEnd = lineStart;\n        result.nodes.push(node);\n        return result;\n      }\n\n      var lines = node.value.split('\\n');\n\n      for (var i = 0; i < lines.length; i++) {\n        var lineNum = i === 0 ? context.lineNumber : ++context.lineNumber;\n        result.nodes.push({\n          type: 'text',\n          value: i === lines.length - 1 ? lines[i] : \"\".concat(lines[i], \"\\n\"),\n          lineStart: lineNum,\n          lineEnd: lineNum\n        });\n      }\n\n      result.lineNumber = context.lineNumber;\n      return result;\n    }\n\n    if (node.children) {\n      var processed = lineNumberify(node.children, context);\n      var firstChild = processed.nodes[0];\n      var lastChild = processed.nodes[processed.nodes.length - 1];\n      node.lineStart = firstChild ? firstChild.lineStart : lineStart;\n      node.lineEnd = lastChild ? lastChild.lineEnd : lineStart;\n      node.children = processed.nodes;\n      result.lineNumber = processed.lineNumber;\n      result.nodes.push(node);\n      return result;\n    }\n\n    result.nodes.push(node);\n    return result;\n  }, {\n    nodes: [],\n    lineNumber: context.lineNumber\n  });\n}\n\nfunction unwrapLine(markerLine, nodes) {\n  var tree = {\n    type: 'root',\n    children: nodes\n  };\n  var headMap = new NodeMap();\n  var lineMap = new NodeMap();\n  var tailMap = new NodeMap();\n  var cloned = [];\n\n  function addCopy(map, node, ancestors) {\n    cloned.push(node);\n    ancestors.forEach(function (ancestor) {\n      if (!map.has(ancestor)) {\n        map.set(ancestor, Object.assign({}, ancestor, {\n          children: []\n        }));\n\n        if (ancestor !== tree) {\n          cloned.push(ancestor);\n        }\n      }\n    });\n    var i = ancestors.length;\n\n    while (i--) {\n      var ancestor = map.get(ancestors[i]);\n      var child = ancestors[i + 1];\n      var leaf = map.get(child) || node;\n\n      if (ancestor.children.indexOf(leaf) === -1) {\n        ancestor.children.push(leaf);\n      }\n    }\n  }\n\n  visit(tree, function (node, ancestors) {\n    if (node.children) {\n      return;\n    } // These nodes are on previous lines, but nested within the same structure\n\n\n    if (node.lineStart < markerLine) {\n      addCopy(headMap, node, ancestors);\n      return;\n    } // These nodes are on the target line\n\n\n    if (node.lineStart === markerLine) {\n      addCopy(lineMap, node, ancestors);\n      return;\n    } // If we have shared ancestors with some of the cloned elements,\n    // create another tree of the remaining nodes\n\n\n    if (node.lineEnd > markerLine && cloned.some(function (clone) {\n      return ancestors.indexOf(clone) !== -1;\n    })) {\n      addCopy(tailMap, node, ancestors);\n    }\n  }); // Get the remaining nodes - the ones who were not part of the same tree\n\n  var filtered = filter(tree, function (node) {\n    return cloned.indexOf(node) === -1;\n  });\n\n  var getChildren = function getChildren(map) {\n    var rootNode = map.get(tree);\n\n    if (!rootNode) {\n      return [];\n    }\n\n    visit(rootNode, function (leaf, ancestors) {\n      if (leaf.children) {\n        leaf.lineStart = 0;\n        leaf.lineEnd = 0;\n        return;\n      }\n\n      ancestors.forEach(function (ancestor) {\n        ancestor.lineStart = Math.max(ancestor.lineStart, leaf.lineStart);\n        ancestor.lineEnd = Math.max(ancestor.lineEnd, leaf.lineEnd);\n      });\n    });\n    return rootNode.children;\n  };\n\n  var merged = [].concat(getChildren(headMap), getChildren(lineMap), getChildren(tailMap), filtered ? filtered.children : []);\n  headMap.clear();\n  lineMap.clear();\n  tailMap.clear();\n  return merged;\n}\n\nfunction wrapBatch(children, marker, options) {\n  var className = marker.className || 'refractor-marker';\n  return {\n    type: 'element',\n    tagName: marker.component || 'div',\n    properties: marker.component ? Object.assign({}, options, {\n      className: className\n    }) : {\n      className: className\n    },\n    children: children,\n    lineStart: marker.line,\n    lineEnd: children[children.length - 1].lineEnd,\n    isMarker: true\n  };\n}\n\nfunction wrapLines(treeNodes, markers, options) {\n  if (markers.length === 0 || treeNodes.length === 0) {\n    return treeNodes;\n  }\n\n  var ast = markers.reduce(function (acc, marker) {\n    return unwrapLine(marker.line, acc);\n  }, treeNodes); // Container for the new AST\n\n  var wrapped = []; // Note: Markers are already sorted by line number (ascending)\n\n  var astIndex = 0;\n\n  for (var m = 0; m < markers.length; m++) {\n    var marker = markers[m]; // Start by eating all AST nodes with line numbers up to the given marker\n\n    for (var node = ast[astIndex]; node && node.lineEnd < marker.line; node = ast[++astIndex]) {\n      wrapped.push(node);\n    } // Now proceed to find all _contiguous_ nodes on the same line\n\n\n    var batch = [];\n\n    for (var _node = ast[astIndex]; _node && _node.lineEnd === marker.line; _node = ast[++astIndex]) {\n      batch.push(_node);\n    } // Now add that batch, if we have anything\n\n\n    if (batch.length > 0) {\n      wrapped.push(wrapBatch(batch, marker, options));\n    }\n  } // Now add the remaining AST nodes\n\n\n  while (astIndex < ast.length) {\n    wrapped.push(ast[astIndex++]);\n  }\n\n  return wrapped;\n}\n\nfunction addMarkers(ast, options) {\n  var markers = options.markers.map(function (marker) {\n    return marker.line ? marker : {\n      line: marker\n    };\n  }).sort(function (nodeA, nodeB) {\n    return nodeA.line - nodeB.line;\n  });\n  var numbered = lineNumberify(ast).nodes;\n  return wrapLines(numbered, markers, options);\n}\n\nmodule.exports = addMarkers;\n//# sourceMappingURL=addMarkers.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVmcmFjdG9yL2xpYi9hZGRNYXJrZXJzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLGFBQWEsbUJBQU8sQ0FBQywwRUFBbUI7O0FBRXhDLFlBQVksbUJBQU8sQ0FBQyx3RkFBMEI7O0FBRTlDLGNBQWMsbUJBQU8sQ0FBQyw4REFBTzs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHNCQUFzQixrQkFBa0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOzs7QUFHQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHLEdBQUc7O0FBRU47QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcsY0FBYzs7QUFFakIsb0JBQW9COztBQUVwQjs7QUFFQSxrQkFBa0Isb0JBQW9CO0FBQ3RDLDZCQUE2Qjs7QUFFN0IsbUNBQW1DLG9DQUFvQztBQUN2RTtBQUNBLE1BQU07OztBQUdOOztBQUVBLG9DQUFvQyx3Q0FBd0M7QUFDNUU7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1zYW5pdHktYXBwLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZnJhY3Rvci9saWIvYWRkTWFya2Vycy5qcz9kMGU0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZmlsdGVyID0gcmVxdWlyZSgndW5pc3QtdXRpbC1maWx0ZXInKTtcblxudmFyIHZpc2l0ID0gcmVxdWlyZSgndW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzJyk7XG5cbnZhciBOb2RlTWFwID0gcmVxdWlyZSgnLi9tYXAnKTtcblxuZnVuY3Rpb24gbGluZU51bWJlcmlmeShhc3QpIHtcbiAgdmFyIGNvbnRleHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHtcbiAgICBsaW5lTnVtYmVyOiAxXG4gIH07XG4gIHJldHVybiBhc3QucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIG5vZGUpIHtcbiAgICB2YXIgbGluZVN0YXJ0ID0gY29udGV4dC5saW5lTnVtYmVyO1xuXG4gICAgaWYgKG5vZGUudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICBpZiAobm9kZS52YWx1ZS5pbmRleE9mKCdcXG4nKSA9PT0gLTEpIHtcbiAgICAgICAgbm9kZS5saW5lU3RhcnQgPSBsaW5lU3RhcnQ7XG4gICAgICAgIG5vZGUubGluZUVuZCA9IGxpbmVTdGFydDtcbiAgICAgICAgcmVzdWx0Lm5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIHZhciBsaW5lcyA9IG5vZGUudmFsdWUuc3BsaXQoJ1xcbicpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBsaW5lTnVtID0gaSA9PT0gMCA/IGNvbnRleHQubGluZU51bWJlciA6ICsrY29udGV4dC5saW5lTnVtYmVyO1xuICAgICAgICByZXN1bHQubm9kZXMucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIHZhbHVlOiBpID09PSBsaW5lcy5sZW5ndGggLSAxID8gbGluZXNbaV0gOiBcIlwiLmNvbmNhdChsaW5lc1tpXSwgXCJcXG5cIiksXG4gICAgICAgICAgbGluZVN0YXJ0OiBsaW5lTnVtLFxuICAgICAgICAgIGxpbmVFbmQ6IGxpbmVOdW1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdC5saW5lTnVtYmVyID0gY29udGV4dC5saW5lTnVtYmVyO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5jaGlsZHJlbikge1xuICAgICAgdmFyIHByb2Nlc3NlZCA9IGxpbmVOdW1iZXJpZnkobm9kZS5jaGlsZHJlbiwgY29udGV4dCk7XG4gICAgICB2YXIgZmlyc3RDaGlsZCA9IHByb2Nlc3NlZC5ub2Rlc1swXTtcbiAgICAgIHZhciBsYXN0Q2hpbGQgPSBwcm9jZXNzZWQubm9kZXNbcHJvY2Vzc2VkLm5vZGVzLmxlbmd0aCAtIDFdO1xuICAgICAgbm9kZS5saW5lU3RhcnQgPSBmaXJzdENoaWxkID8gZmlyc3RDaGlsZC5saW5lU3RhcnQgOiBsaW5lU3RhcnQ7XG4gICAgICBub2RlLmxpbmVFbmQgPSBsYXN0Q2hpbGQgPyBsYXN0Q2hpbGQubGluZUVuZCA6IGxpbmVTdGFydDtcbiAgICAgIG5vZGUuY2hpbGRyZW4gPSBwcm9jZXNzZWQubm9kZXM7XG4gICAgICByZXN1bHQubGluZU51bWJlciA9IHByb2Nlc3NlZC5saW5lTnVtYmVyO1xuICAgICAgcmVzdWx0Lm5vZGVzLnB1c2gobm9kZSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJlc3VsdC5ub2Rlcy5wdXNoKG5vZGUpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sIHtcbiAgICBub2RlczogW10sXG4gICAgbGluZU51bWJlcjogY29udGV4dC5saW5lTnVtYmVyXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1bndyYXBMaW5lKG1hcmtlckxpbmUsIG5vZGVzKSB7XG4gIHZhciB0cmVlID0ge1xuICAgIHR5cGU6ICdyb290JyxcbiAgICBjaGlsZHJlbjogbm9kZXNcbiAgfTtcbiAgdmFyIGhlYWRNYXAgPSBuZXcgTm9kZU1hcCgpO1xuICB2YXIgbGluZU1hcCA9IG5ldyBOb2RlTWFwKCk7XG4gIHZhciB0YWlsTWFwID0gbmV3IE5vZGVNYXAoKTtcbiAgdmFyIGNsb25lZCA9IFtdO1xuXG4gIGZ1bmN0aW9uIGFkZENvcHkobWFwLCBub2RlLCBhbmNlc3RvcnMpIHtcbiAgICBjbG9uZWQucHVzaChub2RlKTtcbiAgICBhbmNlc3RvcnMuZm9yRWFjaChmdW5jdGlvbiAoYW5jZXN0b3IpIHtcbiAgICAgIGlmICghbWFwLmhhcyhhbmNlc3RvcikpIHtcbiAgICAgICAgbWFwLnNldChhbmNlc3RvciwgT2JqZWN0LmFzc2lnbih7fSwgYW5jZXN0b3IsIHtcbiAgICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGlmIChhbmNlc3RvciAhPT0gdHJlZSkge1xuICAgICAgICAgIGNsb25lZC5wdXNoKGFuY2VzdG9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHZhciBpID0gYW5jZXN0b3JzLmxlbmd0aDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZhciBhbmNlc3RvciA9IG1hcC5nZXQoYW5jZXN0b3JzW2ldKTtcbiAgICAgIHZhciBjaGlsZCA9IGFuY2VzdG9yc1tpICsgMV07XG4gICAgICB2YXIgbGVhZiA9IG1hcC5nZXQoY2hpbGQpIHx8IG5vZGU7XG5cbiAgICAgIGlmIChhbmNlc3Rvci5jaGlsZHJlbi5pbmRleE9mKGxlYWYpID09PSAtMSkge1xuICAgICAgICBhbmNlc3Rvci5jaGlsZHJlbi5wdXNoKGxlYWYpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZpc2l0KHRyZWUsIGZ1bmN0aW9uIChub2RlLCBhbmNlc3RvcnMpIHtcbiAgICBpZiAobm9kZS5jaGlsZHJlbikge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gVGhlc2Ugbm9kZXMgYXJlIG9uIHByZXZpb3VzIGxpbmVzLCBidXQgbmVzdGVkIHdpdGhpbiB0aGUgc2FtZSBzdHJ1Y3R1cmVcblxuXG4gICAgaWYgKG5vZGUubGluZVN0YXJ0IDwgbWFya2VyTGluZSkge1xuICAgICAgYWRkQ29weShoZWFkTWFwLCBub2RlLCBhbmNlc3RvcnMpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gVGhlc2Ugbm9kZXMgYXJlIG9uIHRoZSB0YXJnZXQgbGluZVxuXG5cbiAgICBpZiAobm9kZS5saW5lU3RhcnQgPT09IG1hcmtlckxpbmUpIHtcbiAgICAgIGFkZENvcHkobGluZU1hcCwgbm9kZSwgYW5jZXN0b3JzKTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIElmIHdlIGhhdmUgc2hhcmVkIGFuY2VzdG9ycyB3aXRoIHNvbWUgb2YgdGhlIGNsb25lZCBlbGVtZW50cyxcbiAgICAvLyBjcmVhdGUgYW5vdGhlciB0cmVlIG9mIHRoZSByZW1haW5pbmcgbm9kZXNcblxuXG4gICAgaWYgKG5vZGUubGluZUVuZCA+IG1hcmtlckxpbmUgJiYgY2xvbmVkLnNvbWUoZnVuY3Rpb24gKGNsb25lKSB7XG4gICAgICByZXR1cm4gYW5jZXN0b3JzLmluZGV4T2YoY2xvbmUpICE9PSAtMTtcbiAgICB9KSkge1xuICAgICAgYWRkQ29weSh0YWlsTWFwLCBub2RlLCBhbmNlc3RvcnMpO1xuICAgIH1cbiAgfSk7IC8vIEdldCB0aGUgcmVtYWluaW5nIG5vZGVzIC0gdGhlIG9uZXMgd2hvIHdlcmUgbm90IHBhcnQgb2YgdGhlIHNhbWUgdHJlZVxuXG4gIHZhciBmaWx0ZXJlZCA9IGZpbHRlcih0cmVlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgIHJldHVybiBjbG9uZWQuaW5kZXhPZihub2RlKSA9PT0gLTE7XG4gIH0pO1xuXG4gIHZhciBnZXRDaGlsZHJlbiA9IGZ1bmN0aW9uIGdldENoaWxkcmVuKG1hcCkge1xuICAgIHZhciByb290Tm9kZSA9IG1hcC5nZXQodHJlZSk7XG5cbiAgICBpZiAoIXJvb3ROb2RlKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgdmlzaXQocm9vdE5vZGUsIGZ1bmN0aW9uIChsZWFmLCBhbmNlc3RvcnMpIHtcbiAgICAgIGlmIChsZWFmLmNoaWxkcmVuKSB7XG4gICAgICAgIGxlYWYubGluZVN0YXJ0ID0gMDtcbiAgICAgICAgbGVhZi5saW5lRW5kID0gMDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhbmNlc3RvcnMuZm9yRWFjaChmdW5jdGlvbiAoYW5jZXN0b3IpIHtcbiAgICAgICAgYW5jZXN0b3IubGluZVN0YXJ0ID0gTWF0aC5tYXgoYW5jZXN0b3IubGluZVN0YXJ0LCBsZWFmLmxpbmVTdGFydCk7XG4gICAgICAgIGFuY2VzdG9yLmxpbmVFbmQgPSBNYXRoLm1heChhbmNlc3Rvci5saW5lRW5kLCBsZWFmLmxpbmVFbmQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJvb3ROb2RlLmNoaWxkcmVuO1xuICB9O1xuXG4gIHZhciBtZXJnZWQgPSBbXS5jb25jYXQoZ2V0Q2hpbGRyZW4oaGVhZE1hcCksIGdldENoaWxkcmVuKGxpbmVNYXApLCBnZXRDaGlsZHJlbih0YWlsTWFwKSwgZmlsdGVyZWQgPyBmaWx0ZXJlZC5jaGlsZHJlbiA6IFtdKTtcbiAgaGVhZE1hcC5jbGVhcigpO1xuICBsaW5lTWFwLmNsZWFyKCk7XG4gIHRhaWxNYXAuY2xlYXIoKTtcbiAgcmV0dXJuIG1lcmdlZDtcbn1cblxuZnVuY3Rpb24gd3JhcEJhdGNoKGNoaWxkcmVuLCBtYXJrZXIsIG9wdGlvbnMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IG1hcmtlci5jbGFzc05hbWUgfHwgJ3JlZnJhY3Rvci1tYXJrZXInO1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdlbGVtZW50JyxcbiAgICB0YWdOYW1lOiBtYXJrZXIuY29tcG9uZW50IHx8ICdkaXYnLFxuICAgIHByb3BlcnRpZXM6IG1hcmtlci5jb21wb25lbnQgPyBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICAgIH0pIDoge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICB9LFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBsaW5lU3RhcnQ6IG1hcmtlci5saW5lLFxuICAgIGxpbmVFbmQ6IGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aCAtIDFdLmxpbmVFbmQsXG4gICAgaXNNYXJrZXI6IHRydWVcbiAgfTtcbn1cblxuZnVuY3Rpb24gd3JhcExpbmVzKHRyZWVOb2RlcywgbWFya2Vycywgb3B0aW9ucykge1xuICBpZiAobWFya2Vycy5sZW5ndGggPT09IDAgfHwgdHJlZU5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0cmVlTm9kZXM7XG4gIH1cblxuICB2YXIgYXN0ID0gbWFya2Vycy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbWFya2VyKSB7XG4gICAgcmV0dXJuIHVud3JhcExpbmUobWFya2VyLmxpbmUsIGFjYyk7XG4gIH0sIHRyZWVOb2Rlcyk7IC8vIENvbnRhaW5lciBmb3IgdGhlIG5ldyBBU1RcblxuICB2YXIgd3JhcHBlZCA9IFtdOyAvLyBOb3RlOiBNYXJrZXJzIGFyZSBhbHJlYWR5IHNvcnRlZCBieSBsaW5lIG51bWJlciAoYXNjZW5kaW5nKVxuXG4gIHZhciBhc3RJbmRleCA9IDA7XG5cbiAgZm9yICh2YXIgbSA9IDA7IG0gPCBtYXJrZXJzLmxlbmd0aDsgbSsrKSB7XG4gICAgdmFyIG1hcmtlciA9IG1hcmtlcnNbbV07IC8vIFN0YXJ0IGJ5IGVhdGluZyBhbGwgQVNUIG5vZGVzIHdpdGggbGluZSBudW1iZXJzIHVwIHRvIHRoZSBnaXZlbiBtYXJrZXJcblxuICAgIGZvciAodmFyIG5vZGUgPSBhc3RbYXN0SW5kZXhdOyBub2RlICYmIG5vZGUubGluZUVuZCA8IG1hcmtlci5saW5lOyBub2RlID0gYXN0WysrYXN0SW5kZXhdKSB7XG4gICAgICB3cmFwcGVkLnB1c2gobm9kZSk7XG4gICAgfSAvLyBOb3cgcHJvY2VlZCB0byBmaW5kIGFsbCBfY29udGlndW91c18gbm9kZXMgb24gdGhlIHNhbWUgbGluZVxuXG5cbiAgICB2YXIgYmF0Y2ggPSBbXTtcblxuICAgIGZvciAodmFyIF9ub2RlID0gYXN0W2FzdEluZGV4XTsgX25vZGUgJiYgX25vZGUubGluZUVuZCA9PT0gbWFya2VyLmxpbmU7IF9ub2RlID0gYXN0WysrYXN0SW5kZXhdKSB7XG4gICAgICBiYXRjaC5wdXNoKF9ub2RlKTtcbiAgICB9IC8vIE5vdyBhZGQgdGhhdCBiYXRjaCwgaWYgd2UgaGF2ZSBhbnl0aGluZ1xuXG5cbiAgICBpZiAoYmF0Y2gubGVuZ3RoID4gMCkge1xuICAgICAgd3JhcHBlZC5wdXNoKHdyYXBCYXRjaChiYXRjaCwgbWFya2VyLCBvcHRpb25zKSk7XG4gICAgfVxuICB9IC8vIE5vdyBhZGQgdGhlIHJlbWFpbmluZyBBU1Qgbm9kZXNcblxuXG4gIHdoaWxlIChhc3RJbmRleCA8IGFzdC5sZW5ndGgpIHtcbiAgICB3cmFwcGVkLnB1c2goYXN0W2FzdEluZGV4KytdKTtcbiAgfVxuXG4gIHJldHVybiB3cmFwcGVkO1xufVxuXG5mdW5jdGlvbiBhZGRNYXJrZXJzKGFzdCwgb3B0aW9ucykge1xuICB2YXIgbWFya2VycyA9IG9wdGlvbnMubWFya2Vycy5tYXAoZnVuY3Rpb24gKG1hcmtlcikge1xuICAgIHJldHVybiBtYXJrZXIubGluZSA/IG1hcmtlciA6IHtcbiAgICAgIGxpbmU6IG1hcmtlclxuICAgIH07XG4gIH0pLnNvcnQoZnVuY3Rpb24gKG5vZGVBLCBub2RlQikge1xuICAgIHJldHVybiBub2RlQS5saW5lIC0gbm9kZUIubGluZTtcbiAgfSk7XG4gIHZhciBudW1iZXJlZCA9IGxpbmVOdW1iZXJpZnkoYXN0KS5ub2RlcztcbiAgcmV0dXJuIHdyYXBMaW5lcyhudW1iZXJlZCwgbWFya2Vycywgb3B0aW9ucyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYWRkTWFya2Vycztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkZE1hcmtlcnMuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-refractor/lib/addMarkers.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-refractor/lib/map.js":
/*!*************************************************!*\
  !*** ./node_modules/react-refractor/lib/map.js ***!
  \*************************************************/
/***/ ((module) => {

eval("\n\n/**\n * Weird \"map\" polyfill, that's weak if possible\n */\nmodule.exports = typeof WeakMap === 'function' ? HappyMap : SadMap; // Happy path! Fakes a `clear()` if possible (noop)\n\nfunction HappyMap() {\n  this.map = new WeakMap();\n}\n\nHappyMap.prototype.has = function (key) {\n  return this.map.has(key);\n};\n\nHappyMap.prototype.set = function (key, value) {\n  this.map.set(key, value);\n  return this;\n};\n\nHappyMap.prototype.get = function (key) {\n  return this.map.get(key);\n};\n\nHappyMap.prototype.clear = function () {// intentional noop, since we dont need to/cant clear\n}; // Sad path! Use less stylish approach\n\n\nfunction SadMap() {\n  this.keys = [];\n  this.values = [];\n}\n\nSadMap.prototype.has = function (key) {\n  return this.keys.indexOf(key) !== -1;\n};\n\nSadMap.prototype.set = function (key, value) {\n  var index = this.keys.indexOf(key);\n\n  if (index === -1) {\n    this.keys.push(key);\n    this.values.push(value);\n  } else {\n    this.values[index] = value;\n  }\n\n  return this;\n};\n\nSadMap.prototype.get = function (key) {\n  var index = this.keys.indexOf(key);\n  return index === -1 ? undefined : this.values[index];\n};\n\nSadMap.prototype.clear = function () {\n  this.keys = [];\n  this.values = [];\n};\n//# sourceMappingURL=map.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVmcmFjdG9yL2xpYi9tYXAuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FOztBQUVwRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0M7QUFDeEMsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1zYW5pdHktYXBwLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZnJhY3Rvci9saWIvbWFwLmpzPzVmYzMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogV2VpcmQgXCJtYXBcIiBwb2x5ZmlsbCwgdGhhdCdzIHdlYWsgaWYgcG9zc2libGVcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IEhhcHB5TWFwIDogU2FkTWFwOyAvLyBIYXBweSBwYXRoISBGYWtlcyBhIGBjbGVhcigpYCBpZiBwb3NzaWJsZSAobm9vcClcblxuZnVuY3Rpb24gSGFwcHlNYXAoKSB7XG4gIHRoaXMubWFwID0gbmV3IFdlYWtNYXAoKTtcbn1cblxuSGFwcHlNYXAucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHRoaXMubWFwLmhhcyhrZXkpO1xufTtcblxuSGFwcHlNYXAucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRoaXMubWFwLnNldChrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5IYXBweU1hcC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gdGhpcy5tYXAuZ2V0KGtleSk7XG59O1xuXG5IYXBweU1hcC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7Ly8gaW50ZW50aW9uYWwgbm9vcCwgc2luY2Ugd2UgZG9udCBuZWVkIHRvL2NhbnQgY2xlYXJcbn07IC8vIFNhZCBwYXRoISBVc2UgbGVzcyBzdHlsaXNoIGFwcHJvYWNoXG5cblxuZnVuY3Rpb24gU2FkTWFwKCkge1xuICB0aGlzLmtleXMgPSBbXTtcbiAgdGhpcy52YWx1ZXMgPSBbXTtcbn1cblxuU2FkTWFwLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiB0aGlzLmtleXMuaW5kZXhPZihrZXkpICE9PSAtMTtcbn07XG5cblNhZE1hcC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdmFyIGluZGV4ID0gdGhpcy5rZXlzLmluZGV4T2Yoa2V5KTtcblxuICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgdGhpcy5rZXlzLnB1c2goa2V5KTtcbiAgICB0aGlzLnZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuU2FkTWFwLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHZhciBpbmRleCA9IHRoaXMua2V5cy5pbmRleE9mKGtleSk7XG4gIHJldHVybiBpbmRleCA9PT0gLTEgPyB1bmRlZmluZWQgOiB0aGlzLnZhbHVlc1tpbmRleF07XG59O1xuXG5TYWRNYXAucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmtleXMgPSBbXTtcbiAgdGhpcy52YWx1ZXMgPSBbXTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXAuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-refractor/lib/map.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-refractor/lib/mapChildren.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-refractor/lib/mapChildren.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar React = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\nfunction mapChild(child, i, depth) {\n  if (child.tagName) {\n    var className = child.properties && Array.isArray(child.properties.className) ? child.properties.className.join(' ') : child.properties.className;\n    return React.createElement(child.tagName, Object.assign({\n      key: \"fract-\".concat(depth, \"-\").concat(i)\n    }, child.properties, {\n      className: className\n    }), child.children && child.children.map(mapWithDepth(depth + 1)));\n  }\n\n  return child.value;\n}\n\nfunction mapWithDepth(depth) {\n  return function mapChildrenWithDepth(child, i) {\n    return mapChild(child, i, depth);\n  };\n}\n\nexports.depth = mapWithDepth;\n//# sourceMappingURL=mapChildren.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVmcmFjdG9yL2xpYi9tYXBDaGlsZHJlbi5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixZQUFZLG1CQUFPLENBQUMsd0dBQU87O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtc2FuaXR5LWFwcC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWZyYWN0b3IvbGliL21hcENoaWxkcmVuLmpzP2VlMjkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmZ1bmN0aW9uIG1hcENoaWxkKGNoaWxkLCBpLCBkZXB0aCkge1xuICBpZiAoY2hpbGQudGFnTmFtZSkge1xuICAgIHZhciBjbGFzc05hbWUgPSBjaGlsZC5wcm9wZXJ0aWVzICYmIEFycmF5LmlzQXJyYXkoY2hpbGQucHJvcGVydGllcy5jbGFzc05hbWUpID8gY2hpbGQucHJvcGVydGllcy5jbGFzc05hbWUuam9pbignICcpIDogY2hpbGQucHJvcGVydGllcy5jbGFzc05hbWU7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY2hpbGQudGFnTmFtZSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICBrZXk6IFwiZnJhY3QtXCIuY29uY2F0KGRlcHRoLCBcIi1cIikuY29uY2F0KGkpXG4gICAgfSwgY2hpbGQucHJvcGVydGllcywge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICB9KSwgY2hpbGQuY2hpbGRyZW4gJiYgY2hpbGQuY2hpbGRyZW4ubWFwKG1hcFdpdGhEZXB0aChkZXB0aCArIDEpKSk7XG4gIH1cblxuICByZXR1cm4gY2hpbGQudmFsdWU7XG59XG5cbmZ1bmN0aW9uIG1hcFdpdGhEZXB0aChkZXB0aCkge1xuICByZXR1cm4gZnVuY3Rpb24gbWFwQ2hpbGRyZW5XaXRoRGVwdGgoY2hpbGQsIGkpIHtcbiAgICByZXR1cm4gbWFwQ2hpbGQoY2hpbGQsIGksIGRlcHRoKTtcbiAgfTtcbn1cblxuZXhwb3J0cy5kZXB0aCA9IG1hcFdpdGhEZXB0aDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hcENoaWxkcmVuLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-refractor/lib/mapChildren.js\n");

/***/ })

};
;