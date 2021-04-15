Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultTheme = exports.themeProvider = undefined;

var _theme = require('./theme');

var _themeProvider = _interopRequireWildcard(_theme);

var _defaultTheme2 = require('./defaultTheme');

var _defaultTheme3 = _interopRequireDefault(_defaultTheme2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

exports.themeProvider = _themeProvider;
exports.defaultTheme = _defaultTheme3['default'];