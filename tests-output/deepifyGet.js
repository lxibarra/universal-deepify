!function(e,Q){"object"==typeof exports&&"object"==typeof module?module.exports=Q():"function"==typeof define&&define.amd?define([],Q):"object"==typeof exports?exports.deepify=Q():e.deepify=Q()}(window,function(){return function(e){var Q={};function n(F){if(Q[F])return Q[F].exports;var B=Q[F]={i:F,l:!1,exports:{}};return e[F].call(B.exports,B,B.exports,n),B.l=!0,B.exports}return n.m=e,n.c=Q,n.d=function(e,Q,F){n.o(e,Q)||Object.defineProperty(e,Q,{configurable:!1,enumerable:!0,get:F})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var Q=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(Q,"a",Q),Q},n.o=function(e,Q){return Object.prototype.hasOwnProperty.call(e,Q)},n.p="",n(n.s=46)}({17:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getProperty = exports.getArrayRef = exports.getArrayAtPosition = undefined;\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _regex = __webpack_require__(4);\n\nvar _helpers = __webpack_require__(9);\n\nvar getArrayAtPosition = exports.getArrayAtPosition = function getArrayAtPosition(ref, propertyName) {\n  var propIndex = (0, _helpers.getIndexFromPropName)(propertyName);\n  var cleanPropName = propertyName.replace(_regex.indexArrayRegxp, '');\n\n  if (ref[cleanPropName] instanceof Array && ref[cleanPropName].length > 0 && propIndex <= ref[cleanPropName].length) {\n    return ref[cleanPropName][propIndex];\n  }\n};\n\nvar getArrayRef = exports.getArrayRef = function getArrayRef(ref, propertyName) {\n  var arrayProperty = propertyName.replace(_regex.emptyArrayRegxp, '');\n  return getArrayAtPosition(ref, arrayProperty);\n};\n\nvar getProperty = exports.getProperty = function getProperty(ref) {\n  var propertyName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n\n  if (ref === null || typeof ref === 'undefined') {\n    return null;\n  }\n  var props = propertyName.split('.');\n\n  if ((typeof ref === 'undefined' ? 'undefined' : _typeof(ref)) === 'object' && ref instanceof Array === false) {\n    var _ref = ref;\n    // pending important change.\n    // as soon as we hit undefined we should exit the loop.\n    props.forEach(function (prop) {\n      if (typeof _ref !== 'undefined' && _ref.hasOwnProperty(prop) === false && prop.match(_regex.indexArrayRegxp)) {\n        _ref = getArrayAtPosition(_ref, prop);\n      } else if (typeof _ref !== 'undefined' && prop.match(_regex.indexArrayRefRegxp)) {\n        _ref = getArrayRef(_ref, prop);\n      } else if (typeof _ref !== 'undefined' && _ref.hasOwnProperty(prop)) {\n        _ref = _ref[prop];\n      } else {\n        _ref = undefined;\n      }\n    });\n    return _ref;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWVwaWZ5Ly4vc3JjL2dldC9nZXQuaGVscGVycy5qcz8yNzA4Il0sIm5hbWVzIjpbImdldEFycmF5QXRQb3NpdGlvbiIsInJlZiIsInByb3BlcnR5TmFtZSIsInByb3BJbmRleCIsImNsZWFuUHJvcE5hbWUiLCJyZXBsYWNlIiwiQXJyYXkiLCJsZW5ndGgiLCJnZXRBcnJheVJlZiIsImFycmF5UHJvcGVydHkiLCJnZXRQcm9wZXJ0eSIsInByb3BzIiwic3BsaXQiLCJfcmVmIiwiZm9yRWFjaCIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsIm1hdGNoIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFTyxJQUFNQSxrREFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxHQUFELEVBQU1DLFlBQU4sRUFBdUI7QUFDdkQsTUFBTUMsWUFBWSxtQ0FBcUJELFlBQXJCLENBQWxCO0FBQ0EsTUFBTUUsZ0JBQWdCRixhQUFhRyxPQUFiLHlCQUFzQyxFQUF0QyxDQUF0Qjs7QUFFQSxNQUFHSixJQUFJRyxhQUFKLGFBQThCRSxLQUE5QixJQUNETCxJQUFJRyxhQUFKLEVBQW1CRyxNQUFuQixHQUE0QixDQUQzQixJQUVESixhQUFhRixJQUFJRyxhQUFKLEVBQW1CRyxNQUZsQyxFQUdHO0FBQ0EsV0FBT04sSUFBSUcsYUFBSixFQUFtQkQsU0FBbkIsQ0FBUDtBQUNGO0FBQ0YsQ0FWTTs7QUFZQSxJQUFNSyxvQ0FBYyxTQUFkQSxXQUFjLENBQUNQLEdBQUQsRUFBTUMsWUFBTixFQUF1QjtBQUNoRCxNQUFNTyxnQkFBZ0JQLGFBQWFHLE9BQWIseUJBQXNDLEVBQXRDLENBQXRCO0FBQ0EsU0FBT0wsbUJBQW1CQyxHQUFuQixFQUF3QlEsYUFBeEIsQ0FBUDtBQUNELENBSE07O0FBS0EsSUFBTUMsb0NBQWMsU0FBZEEsV0FBYyxDQUFDVCxHQUFELEVBQTRCO0FBQUEsTUFBdEJDLFlBQXNCLHVFQUFQLEVBQU87O0FBQ3JELE1BQUdELFFBQVEsSUFBUixJQUFnQixPQUFPQSxHQUFQLEtBQWUsV0FBbEMsRUFBK0M7QUFDN0MsV0FBTyxJQUFQO0FBQ0Q7QUFDRCxNQUFNVSxRQUFRVCxhQUFhVSxLQUFiLENBQW1CLEdBQW5CLENBQWQ7O0FBRUEsTUFBSSxRQUFPWCxHQUFQLHlDQUFPQSxHQUFQLE9BQWUsUUFBZixJQUE0QkEsZUFBZUssS0FBaEIsS0FBMkIsS0FBMUQsRUFBaUU7QUFDL0QsUUFBSU8sT0FBT1osR0FBWDtBQUNBO0FBQ0E7QUFDQVUsVUFBTUcsT0FBTixDQUFjLFVBQUNDLElBQUQsRUFBVTtBQUN0QixVQUFHLE9BQU9GLElBQVAsS0FBZ0IsV0FBaEIsSUFBK0JBLEtBQUtHLGNBQUwsQ0FBb0JELElBQXBCLE1BQThCLEtBQTdELElBQXNFQSxLQUFLRSxLQUFMLHdCQUF6RSxFQUFzRztBQUNwR0osZUFBT2IsbUJBQW1CYSxJQUFuQixFQUF5QkUsSUFBekIsQ0FBUDtBQUNELE9BRkQsTUFFTyxJQUFJLE9BQU9GLElBQVAsS0FBZ0IsV0FBaEIsSUFBK0JFLEtBQUtFLEtBQUwsMkJBQW5DLEVBQW1FO0FBQ3hFSixlQUFPTCxZQUFZSyxJQUFaLEVBQWtCRSxJQUFsQixDQUFQO0FBQ0QsT0FGTSxNQUVBLElBQUksT0FBT0YsSUFBUCxLQUFnQixXQUFoQixJQUErQkEsS0FBS0csY0FBTCxDQUFvQkQsSUFBcEIsQ0FBbkMsRUFBOEQ7QUFDbkVGLGVBQU9BLEtBQUtFLElBQUwsQ0FBUDtBQUNELE9BRk0sTUFFQTtBQUNMRixlQUFPSyxTQUFQO0FBQ0Q7QUFDRixLQVZEO0FBV0EsV0FBT0wsSUFBUDtBQUNEO0FBQ0YsQ0F2Qk0iLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlbXB0eUFycmF5UmVneHAsIGluZGV4QXJyYXlSZWZSZWd4cCwgaW5kZXhBcnJheVJlZ3hwLCBudW1iZXJSZWdleCwgYXJyYXlCcmFja2V0cyB9IGZyb20gJy4uL3NoYXJlZC9yZWdleC5leHByZXNzaW9ucyc7XG5pbXBvcnQgeyBnZXRJbmRleEZyb21Qcm9wTmFtZSB9IGZyb20gJy4uL3NoYXJlZC9oZWxwZXJzJztcblxuZXhwb3J0IGNvbnN0IGdldEFycmF5QXRQb3NpdGlvbiA9IChyZWYsIHByb3BlcnR5TmFtZSkgPT4ge1xuICBjb25zdCBwcm9wSW5kZXggPSBnZXRJbmRleEZyb21Qcm9wTmFtZShwcm9wZXJ0eU5hbWUpO1xuICBjb25zdCBjbGVhblByb3BOYW1lID0gcHJvcGVydHlOYW1lLnJlcGxhY2UoaW5kZXhBcnJheVJlZ3hwLCAnJyk7XG5cbiAgaWYocmVmW2NsZWFuUHJvcE5hbWVdIGluc3RhbmNlb2YgQXJyYXkgJiZcbiAgICByZWZbY2xlYW5Qcm9wTmFtZV0ubGVuZ3RoID4gMCAmJlxuICAgIHByb3BJbmRleCA8PSByZWZbY2xlYW5Qcm9wTmFtZV0ubGVuZ3RoXG4gICApIHtcbiAgICAgcmV0dXJuIHJlZltjbGVhblByb3BOYW1lXVtwcm9wSW5kZXhdO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QXJyYXlSZWYgPSAocmVmLCBwcm9wZXJ0eU5hbWUpID0+IHtcbiAgY29uc3QgYXJyYXlQcm9wZXJ0eSA9IHByb3BlcnR5TmFtZS5yZXBsYWNlKGVtcHR5QXJyYXlSZWd4cCwgJycpO1xuICByZXR1cm4gZ2V0QXJyYXlBdFBvc2l0aW9uKHJlZiwgYXJyYXlQcm9wZXJ0eSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UHJvcGVydHkgPSAocmVmLCBwcm9wZXJ0eU5hbWUgPSAnJykgPT4ge1xuICBpZihyZWYgPT09IG51bGwgfHwgdHlwZW9mIHJlZiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBwcm9wcyA9IHByb3BlcnR5TmFtZS5zcGxpdCgnLicpO1xuXG4gIGlmICh0eXBlb2YgcmVmID09PSAnb2JqZWN0JyAmJiAocmVmIGluc3RhbmNlb2YgQXJyYXkpID09PSBmYWxzZSkge1xuICAgIGxldCBfcmVmID0gcmVmO1xuICAgIC8vIHBlbmRpbmcgaW1wb3J0YW50IGNoYW5nZS5cbiAgICAvLyBhcyBzb29uIGFzIHdlIGhpdCB1bmRlZmluZWQgd2Ugc2hvdWxkIGV4aXQgdGhlIGxvb3AuXG4gICAgcHJvcHMuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgaWYodHlwZW9mIF9yZWYgIT09ICd1bmRlZmluZWQnICYmIF9yZWYuaGFzT3duUHJvcGVydHkocHJvcCkgPT09IGZhbHNlICYmIHByb3AubWF0Y2goaW5kZXhBcnJheVJlZ3hwKSkge1xuICAgICAgICBfcmVmID0gZ2V0QXJyYXlBdFBvc2l0aW9uKF9yZWYsIHByb3ApO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgX3JlZiAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvcC5tYXRjaChpbmRleEFycmF5UmVmUmVneHApKSB7XG4gICAgICAgIF9yZWYgPSBnZXRBcnJheVJlZihfcmVmLCBwcm9wKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIF9yZWYgIT09ICd1bmRlZmluZWQnICYmIF9yZWYuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgX3JlZiA9IF9yZWZbcHJvcF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfcmVmID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBfcmVmO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///17\n")},18:function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.deepifyGet = undefined;\n\nvar _get = __webpack_require__(17);\n\n// make a log available for debbuging\nvar deepifyGet = exports.deepifyGet = function deepifyGet(obj, prop) {\n  return (0, _get.getProperty)(obj, prop);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWVwaWZ5Ly4vc3JjL2RlZXBpZnlHZXQuanM/ZDg1ZiJdLCJuYW1lcyI6WyJkZWVwaWZ5R2V0Iiwib2JqIiwicHJvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBO0FBQ08sSUFBTUEsa0NBQWEsU0FBYkEsVUFBYSxDQUFDQyxHQUFELEVBQU1DLElBQU4sRUFBZTtBQUN2QyxTQUFPLHNCQUFZRCxHQUFaLEVBQWlCQyxJQUFqQixDQUFQO0FBQ0QsQ0FGTSIsImZpbGUiOiIxOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFByb3BlcnR5IH0gZnJvbSAnLi9nZXQvZ2V0LmhlbHBlcnMnO1xuLy8gbWFrZSBhIGxvZyBhdmFpbGFibGUgZm9yIGRlYmJ1Z2luZ1xuZXhwb3J0IGNvbnN0IGRlZXBpZnlHZXQgPSAob2JqLCBwcm9wKSA9PiB7XG4gIHJldHVybiBnZXRQcm9wZXJ0eShvYmosIHByb3ApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///18\n')},4:function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nvar emptyArrayRegxp = exports.emptyArrayRegxp = /\\[\\]$/;\nvar indexArrayRegxp = exports.indexArrayRegxp = /\\[\\d+\\]$/;\nvar indexArrayRefRegxp = exports.indexArrayRefRegxp = /\\[\\d+\\]\\[\\]$/;\nvar numberRegex = exports.numberRegex = /^\\d+$/;\nvar arrayBrackets = exports.arrayBrackets = /[\\[\\]]/gi;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWVwaWZ5Ly4vc3JjL3NoYXJlZC9yZWdleC5leHByZXNzaW9ucy5qcz9iYzNjIl0sIm5hbWVzIjpbImVtcHR5QXJyYXlSZWd4cCIsImluZGV4QXJyYXlSZWd4cCIsImluZGV4QXJyYXlSZWZSZWd4cCIsIm51bWJlclJlZ2V4IiwiYXJyYXlCcmFja2V0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxJQUFNQSw0Q0FBa0IsT0FBeEI7QUFDQSxJQUFNQyw0Q0FBa0IsVUFBeEI7QUFDQSxJQUFNQyxrREFBcUIsY0FBM0I7QUFDQSxJQUFNQyxvQ0FBYyxPQUFwQjtBQUNBLElBQU1DLHdDQUFnQixVQUF0QiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGVtcHR5QXJyYXlSZWd4cCA9IC9cXFtcXF0kLztcbmV4cG9ydCBjb25zdCBpbmRleEFycmF5UmVneHAgPSAvXFxbXFxkK1xcXSQvO1xuZXhwb3J0IGNvbnN0IGluZGV4QXJyYXlSZWZSZWd4cCA9IC9cXFtcXGQrXFxdXFxbXFxdJC87XG5leHBvcnQgY29uc3QgbnVtYmVyUmVnZXggPSAvXlxcZCskLztcbmV4cG9ydCBjb25zdCBhcnJheUJyYWNrZXRzID0gL1tcXFtcXF1dL2dpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n')},46:function(module,exports,__webpack_require__){"use strict";eval("\n\nvar _deepifyGet = __webpack_require__(18);\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\ndescribe('Test deepify get helpers', function () {\n  var testObject = void 0;\n  var wierdObject = void 0;\n\n  beforeEach(function () {\n    testObject = {\n      person: {\n        name: 'Ricardo',\n        lastName: 'Ibarra',\n        assets: [{\n          type: 'Car'\n        }, {\n          type: 'Boat',\n          metadata: [{\n            brand: 'xyz',\n            year: '2012'\n          }, {\n            serial: 'xxx-xxx-xxx',\n            price: 1000\n          }]\n        }]\n      }\n    };\n\n    wierdObject = _defineProperty({}, 'this', {\n      'prop[0]': {\n        'prop\\s': [{\n          'msg': 'this should be a challenge to read'\n        }]\n      },\n      prop: ['a', 'b']\n    });\n  });\n\n  it('Get prop from undefined/null will always return null', function () {\n    expect((0, _deepifyGet.deepifyGet)(null, 'person')).equal(null);\n    expect((0, _deepifyGet.deepifyGet)(undefined, 'person')).equal(null);\n  });\n\n  it('Get non existent prop will return undefined from {} get person', function () {\n    expect((0, _deepifyGet.deepifyGet)({}, 'person')).equal(undefined);\n  });\n\n  it('Get a property from object { person:\"Ricardo\" } = \"Ricardo\"', function () {\n    expect((0, _deepifyGet.deepifyGet)({ person: 'Ricardo' }, 'person')).equal('Ricardo');\n  });\n\n  it('Getting a nested non existen prop will return undefined instead of throwing an exeception', function () {\n    expect((0, _deepifyGet.deepifyGet)({}, 'person.lastName')).equal(undefined);\n    expect((0, _deepifyGet.deepifyGet)({ person: { lastName: 'Ibarra' } }, 'person.lastName')).equal('Ibarra');\n    expect((0, _deepifyGet.deepifyGet)({ person: { lastName: 'Ibarra' } }, 'person.lastName.to.be.undefined')).equal(undefined);\n  });\n\n  it('Test nested array object prop person.assets[0].type === \"Car\"', function () {\n    expect((0, _deepifyGet.deepifyGet)(testObject, 'person.assets[0].type')).equal('Car');\n  });\n\n  it('no errors are thrown when trying to get a deep non-existent nested array prop: person.assets[0].type[10].someprop', function () {\n    expect((0, _deepifyGet.deepifyGet)(testObject, 'person.assets[0].type[10].someprop')).equal(undefined);\n  });\n\n  it('I can nicely get a very nested prop person.assets[1].metadata[1].price = 1000', function () {\n    expect((0, _deepifyGet.deepifyGet)(testObject, 'person.assets[1].metadata[1].price')).equal(1000);\n  });\n\n  it('get nested prop with wierd names works as expected: this.prop[0].prop\\s[0].msg = \"this should be a challenge to read\"', function () {\n    expect((0, _deepifyGet.deepifyGet)(wierdObject, 'this.prop[0].prop\\s') instanceof Array).equal(true);\n    expect((0, _deepifyGet.deepifyGet)(wierdObject, 'this.prop[0].prop\\s[0].msg')).equal('this should be a challenge to read');\n  });\n\n  it('Having confusing name props resolves correctly this.prop[0] = \"a\", using this.prop[0][] = \"a\"', function () {\n    expect((0, _deepifyGet.deepifyGet)(wierdObject, 'this.prop[0][]')).equal('a');\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWVwaWZ5Ly4vdGVzdHMvZGVlcGlmeUdldC5zcGVjLmpzPzg2NDciXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJ0ZXN0T2JqZWN0Iiwid2llcmRPYmplY3QiLCJiZWZvcmVFYWNoIiwicGVyc29uIiwibmFtZSIsImxhc3ROYW1lIiwiYXNzZXRzIiwidHlwZSIsIm1ldGFkYXRhIiwiYnJhbmQiLCJ5ZWFyIiwic2VyaWFsIiwicHJpY2UiLCJwcm9wIiwiaXQiLCJleHBlY3QiLCJlcXVhbCIsInVuZGVmaW5lZCIsIkFycmF5Il0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBRUFBLFNBQVMsMEJBQVQsRUFBcUMsWUFBSztBQUN4QyxNQUFJQyxtQkFBSjtBQUNBLE1BQUlDLG9CQUFKOztBQUVBQyxhQUFXLFlBQU07QUFDZkYsaUJBQWE7QUFDWEcsY0FBTztBQUNMQyxjQUFNLFNBREQ7QUFFTEMsa0JBQVUsUUFGTDtBQUdMQyxnQkFBTyxDQUNMO0FBQ0VDLGdCQUFNO0FBRFIsU0FESyxFQUlMO0FBQ0VBLGdCQUFNLE1BRFI7QUFFRUMsb0JBQVMsQ0FDUDtBQUNFQyxtQkFBTyxLQURUO0FBRUVDLGtCQUFNO0FBRlIsV0FETyxFQUtQO0FBQ0VDLG9CQUFRLGFBRFY7QUFFRUMsbUJBQU87QUFGVCxXQUxPO0FBRlgsU0FKSztBQUhGO0FBREksS0FBYjs7QUF5QkFYLHNDQUNHLE1BREgsRUFDWTtBQUNSLGlCQUFXO0FBQ1Qsa0JBQVUsQ0FDUjtBQUNFLGlCQUFPO0FBRFQsU0FEUTtBQURELE9BREg7QUFRUlksWUFBTSxDQUNKLEdBREksRUFFSixHQUZJO0FBUkUsS0FEWjtBQWVELEdBekNEOztBQTJDQUMsS0FBRyxzREFBSCxFQUEyRCxZQUFLO0FBQzlEQyxXQUFPLDRCQUFXLElBQVgsRUFBaUIsUUFBakIsQ0FBUCxFQUFtQ0MsS0FBbkMsQ0FBeUMsSUFBekM7QUFDQUQsV0FBTyw0QkFBV0UsU0FBWCxFQUFzQixRQUF0QixDQUFQLEVBQXdDRCxLQUF4QyxDQUE4QyxJQUE5QztBQUNELEdBSEQ7O0FBS0FGLEtBQUcsZ0VBQUgsRUFBcUUsWUFBTTtBQUN6RUMsV0FBTyw0QkFBVyxFQUFYLEVBQWUsUUFBZixDQUFQLEVBQWlDQyxLQUFqQyxDQUF1Q0MsU0FBdkM7QUFDRCxHQUZEOztBQUlBSCxLQUFHLDZEQUFILEVBQWtFLFlBQUs7QUFDckVDLFdBQU8sNEJBQVcsRUFBRVosUUFBTyxTQUFULEVBQVgsRUFBaUMsUUFBakMsQ0FBUCxFQUFtRGEsS0FBbkQsQ0FBeUQsU0FBekQ7QUFDRCxHQUZEOztBQUlBRixLQUFHLDJGQUFILEVBQWdHLFlBQUs7QUFDbkdDLFdBQU8sNEJBQVcsRUFBWCxFQUFnQixpQkFBaEIsQ0FBUCxFQUEyQ0MsS0FBM0MsQ0FBaURDLFNBQWpEO0FBQ0FGLFdBQU8sNEJBQVcsRUFBRVosUUFBTyxFQUFFRSxVQUFTLFFBQVgsRUFBVCxFQUFYLEVBQTZDLGlCQUE3QyxDQUFQLEVBQXdFVyxLQUF4RSxDQUE4RSxRQUE5RTtBQUNBRCxXQUFPLDRCQUFXLEVBQUVaLFFBQU8sRUFBRUUsVUFBUyxRQUFYLEVBQVQsRUFBWCxFQUE2QyxpQ0FBN0MsQ0FBUCxFQUF3RlcsS0FBeEYsQ0FBOEZDLFNBQTlGO0FBQ0QsR0FKRDs7QUFNQUgsS0FBRywrREFBSCxFQUFvRSxZQUFNO0FBQ3hFQyxXQUFPLDRCQUFXZixVQUFYLEVBQXVCLHVCQUF2QixDQUFQLEVBQXdEZ0IsS0FBeEQsQ0FBOEQsS0FBOUQ7QUFDRCxHQUZEOztBQUlBRixLQUFHLG1IQUFILEVBQXdILFlBQU07QUFDNUhDLFdBQU8sNEJBQVdmLFVBQVgsRUFBdUIsb0NBQXZCLENBQVAsRUFBcUVnQixLQUFyRSxDQUEyRUMsU0FBM0U7QUFDRCxHQUZEOztBQUlBSCxLQUFHLCtFQUFILEVBQW9GLFlBQU07QUFDeEZDLFdBQU8sNEJBQVdmLFVBQVgsRUFBdUIsb0NBQXZCLENBQVAsRUFBcUVnQixLQUFyRSxDQUEyRSxJQUEzRTtBQUNELEdBRkQ7O0FBSUFGLEtBQUcsdUhBQUgsRUFBNEgsWUFBTTtBQUNoSUMsV0FBTyw0QkFBV2QsV0FBWCxFQUF3QixxQkFBeEIsYUFBMERpQixLQUFqRSxFQUF3RUYsS0FBeEUsQ0FBOEUsSUFBOUU7QUFDQUQsV0FBTyw0QkFBV2QsV0FBWCxFQUF3Qiw0QkFBeEIsQ0FBUCxFQUE4RGUsS0FBOUQsQ0FBb0Usb0NBQXBFO0FBQ0QsR0FIRDs7QUFLQUYsS0FBRywrRkFBSCxFQUFvRyxZQUFNO0FBQ3hHQyxXQUFPLDRCQUFXZCxXQUFYLEVBQXdCLGdCQUF4QixDQUFQLEVBQWtEZSxLQUFsRCxDQUF3RCxHQUF4RDtBQUNELEdBRkQ7QUFJRCxDQXZGRCIsImZpbGUiOiI0Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZXBpZnlHZXQgfSBmcm9tICcuLi9zcmMvZGVlcGlmeUdldCc7XG5cbmRlc2NyaWJlKCdUZXN0IGRlZXBpZnkgZ2V0IGhlbHBlcnMnLCAoKT0+IHtcbiAgbGV0IHRlc3RPYmplY3Q7XG4gIGxldCB3aWVyZE9iamVjdDtcblxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICB0ZXN0T2JqZWN0ID0ge1xuICAgICAgcGVyc29uOntcbiAgICAgICAgbmFtZTogJ1JpY2FyZG8nLFxuICAgICAgICBsYXN0TmFtZTogJ0liYXJyYScsXG4gICAgICAgIGFzc2V0czpbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ0NhcidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdCb2F0JyxcbiAgICAgICAgICAgIG1ldGFkYXRhOltcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyYW5kOiAneHl6JyxcbiAgICAgICAgICAgICAgICB5ZWFyOiAnMjAxMidcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcmlhbDogJ3h4eC14eHgteHh4JyxcbiAgICAgICAgICAgICAgICBwcmljZTogMTAwMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpZXJkT2JqZWN0ID0ge1xuICAgICAgWyd0aGlzJ106IHtcbiAgICAgICAgJ3Byb3BbMF0nOiB7XG4gICAgICAgICAgJ3Byb3BcXHMnOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICdtc2cnOiAndGhpcyBzaG91bGQgYmUgYSBjaGFsbGVuZ2UgdG8gcmVhZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHByb3A6IFtcbiAgICAgICAgICAnYScsXG4gICAgICAgICAgJ2InXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9O1xuICB9KTtcblxuICBpdCgnR2V0IHByb3AgZnJvbSB1bmRlZmluZWQvbnVsbCB3aWxsIGFsd2F5cyByZXR1cm4gbnVsbCcsICgpPT4ge1xuICAgIGV4cGVjdChkZWVwaWZ5R2V0KG51bGwsICdwZXJzb24nKSkuZXF1YWwobnVsbCk7XG4gICAgZXhwZWN0KGRlZXBpZnlHZXQodW5kZWZpbmVkLCAncGVyc29uJykpLmVxdWFsKG51bGwpO1xuICB9KTtcblxuICBpdCgnR2V0IG5vbiBleGlzdGVudCBwcm9wIHdpbGwgcmV0dXJuIHVuZGVmaW5lZCBmcm9tIHt9IGdldCBwZXJzb24nLCAoKSA9PiB7XG4gICAgZXhwZWN0KGRlZXBpZnlHZXQoe30sICdwZXJzb24nKSkuZXF1YWwodW5kZWZpbmVkKTtcbiAgfSk7XG5cbiAgaXQoJ0dldCBhIHByb3BlcnR5IGZyb20gb2JqZWN0IHsgcGVyc29uOlwiUmljYXJkb1wiIH0gPSBcIlJpY2FyZG9cIicsICgpPT4ge1xuICAgIGV4cGVjdChkZWVwaWZ5R2V0KHsgcGVyc29uOidSaWNhcmRvJyB9LCAncGVyc29uJykpLmVxdWFsKCdSaWNhcmRvJyk7XG4gIH0pO1xuXG4gIGl0KCdHZXR0aW5nIGEgbmVzdGVkIG5vbiBleGlzdGVuIHByb3Agd2lsbCByZXR1cm4gdW5kZWZpbmVkIGluc3RlYWQgb2YgdGhyb3dpbmcgYW4gZXhlY2VwdGlvbicsICgpPT4ge1xuICAgIGV4cGVjdChkZWVwaWZ5R2V0KHsgfSwgJ3BlcnNvbi5sYXN0TmFtZScpKS5lcXVhbCh1bmRlZmluZWQpO1xuICAgIGV4cGVjdChkZWVwaWZ5R2V0KHsgcGVyc29uOnsgbGFzdE5hbWU6J0liYXJyYScgfSB9LCAncGVyc29uLmxhc3ROYW1lJykpLmVxdWFsKCdJYmFycmEnKTtcbiAgICBleHBlY3QoZGVlcGlmeUdldCh7IHBlcnNvbjp7IGxhc3ROYW1lOidJYmFycmEnIH0gfSwgJ3BlcnNvbi5sYXN0TmFtZS50by5iZS51bmRlZmluZWQnKSkuZXF1YWwodW5kZWZpbmVkKTtcbiAgfSk7XG5cbiAgaXQoJ1Rlc3QgbmVzdGVkIGFycmF5IG9iamVjdCBwcm9wIHBlcnNvbi5hc3NldHNbMF0udHlwZSA9PT0gXCJDYXJcIicsICgpID0+IHtcbiAgICBleHBlY3QoZGVlcGlmeUdldCh0ZXN0T2JqZWN0LCAncGVyc29uLmFzc2V0c1swXS50eXBlJykpLmVxdWFsKCdDYXInKTtcbiAgfSk7XG5cbiAgaXQoJ25vIGVycm9ycyBhcmUgdGhyb3duIHdoZW4gdHJ5aW5nIHRvIGdldCBhIGRlZXAgbm9uLWV4aXN0ZW50IG5lc3RlZCBhcnJheSBwcm9wOiBwZXJzb24uYXNzZXRzWzBdLnR5cGVbMTBdLnNvbWVwcm9wJywgKCkgPT4ge1xuICAgIGV4cGVjdChkZWVwaWZ5R2V0KHRlc3RPYmplY3QsICdwZXJzb24uYXNzZXRzWzBdLnR5cGVbMTBdLnNvbWVwcm9wJykpLmVxdWFsKHVuZGVmaW5lZCk7XG4gIH0pO1xuXG4gIGl0KCdJIGNhbiBuaWNlbHkgZ2V0IGEgdmVyeSBuZXN0ZWQgcHJvcCBwZXJzb24uYXNzZXRzWzFdLm1ldGFkYXRhWzFdLnByaWNlID0gMTAwMCcsICgpID0+IHtcbiAgICBleHBlY3QoZGVlcGlmeUdldCh0ZXN0T2JqZWN0LCAncGVyc29uLmFzc2V0c1sxXS5tZXRhZGF0YVsxXS5wcmljZScpKS5lcXVhbCgxMDAwKTtcbiAgfSk7XG5cbiAgaXQoJ2dldCBuZXN0ZWQgcHJvcCB3aXRoIHdpZXJkIG5hbWVzIHdvcmtzIGFzIGV4cGVjdGVkOiB0aGlzLnByb3BbMF0ucHJvcFxcc1swXS5tc2cgPSBcInRoaXMgc2hvdWxkIGJlIGEgY2hhbGxlbmdlIHRvIHJlYWRcIicsICgpID0+IHtcbiAgICBleHBlY3QoZGVlcGlmeUdldCh3aWVyZE9iamVjdCwgJ3RoaXMucHJvcFswXS5wcm9wXFxzJykgaW5zdGFuY2VvZiBBcnJheSkuZXF1YWwodHJ1ZSk7XG4gICAgZXhwZWN0KGRlZXBpZnlHZXQod2llcmRPYmplY3QsICd0aGlzLnByb3BbMF0ucHJvcFxcc1swXS5tc2cnKSkuZXF1YWwoJ3RoaXMgc2hvdWxkIGJlIGEgY2hhbGxlbmdlIHRvIHJlYWQnKTtcbiAgfSk7XG5cbiAgaXQoJ0hhdmluZyBjb25mdXNpbmcgbmFtZSBwcm9wcyByZXNvbHZlcyBjb3JyZWN0bHkgdGhpcy5wcm9wWzBdID0gXCJhXCIsIHVzaW5nIHRoaXMucHJvcFswXVtdID0gXCJhXCInLCAoKSA9PiB7XG4gICAgZXhwZWN0KGRlZXBpZnlHZXQod2llcmRPYmplY3QsICd0aGlzLnByb3BbMF1bXScpKS5lcXVhbCgnYScpO1xuICB9KTtcblxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///46\n")},9:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getIndexFromPropName = undefined;\n\nvar _regex = __webpack_require__(4);\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar getIndexFromPropName = exports.getIndexFromPropName = function getIndexFromPropName(propertyName) {\n  return parseInt([].concat(_toConsumableArray(propertyName.match(_regex.indexArrayRegxp)))[0].replace(_regex.arrayBrackets, ''), 10);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWVwaWZ5Ly4vc3JjL3NoYXJlZC9oZWxwZXJzLmpzP2U3ZDciXSwibmFtZXMiOlsiZ2V0SW5kZXhGcm9tUHJvcE5hbWUiLCJwcm9wZXJ0eU5hbWUiLCJwYXJzZUludCIsIm1hdGNoIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRU8sSUFBTUEsc0RBQXVCLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsWUFBRDtBQUFBLFNBQWtCQyxTQUFTLDZCQUFJRCxhQUFhRSxLQUFiLHdCQUFKLEdBQXlDLENBQXpDLEVBQTRDQyxPQUE1Qyx1QkFBbUUsRUFBbkUsQ0FBVCxFQUFpRixFQUFqRixDQUFsQjtBQUFBLENBQTdCIiwiZmlsZSI6IjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmRleEFycmF5UmVneHAsIGFycmF5QnJhY2tldHMgfSBmcm9tICcuL3JlZ2V4LmV4cHJlc3Npb25zJztcblxuZXhwb3J0IGNvbnN0IGdldEluZGV4RnJvbVByb3BOYW1lID0gKHByb3BlcnR5TmFtZSkgPT4gcGFyc2VJbnQoWy4uLnByb3BlcnR5TmFtZS5tYXRjaChpbmRleEFycmF5UmVneHApXVswXS5yZXBsYWNlKGFycmF5QnJhY2tldHMsICcnKSwgMTApO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n")}})});