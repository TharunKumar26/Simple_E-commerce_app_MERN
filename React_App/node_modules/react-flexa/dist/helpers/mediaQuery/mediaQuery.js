Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']),
    _templateObject2 = _taggedTemplateLiteral(['@media (min-width: ', 'rem) {\n          ', '\n        }'], ['@media (min-width: ', 'rem) {\n          ', '\n        }']);

var _styledComponents = require('styled-components');

var _theme = require('../../theme');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var theme = _theme.themeProvider.theme;


var mediaQuery = function mediaQuery(props) {
  return _theme.themeProvider.breakpointsKeys(props).reduce(function (accumulator, value) {
    var breakpointSize = theme(props).breakpoints[value];

    Object.assign(accumulator, _defineProperty({}, value, function () {
      return breakpointSize === 0 ? (0, _styledComponents.css)(_templateObject, _styledComponents.css.apply(undefined, arguments)) : (0, _styledComponents.css)(_templateObject2, breakpointSize, _styledComponents.css.apply(undefined, arguments));
    }));

    return accumulator;
  }, {});
};

exports['default'] = mediaQuery;