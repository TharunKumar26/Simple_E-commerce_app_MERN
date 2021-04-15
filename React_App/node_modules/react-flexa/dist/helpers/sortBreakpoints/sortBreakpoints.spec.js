var _sortBreakpoints = require('./sortBreakpoints');

var _sortBreakpoints2 = _interopRequireDefault(_sortBreakpoints);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

test('should order breakpoint props from smallest to largest value', function () {
  var mockBreakpoints = { lg: 30, sm: 0, xs: 1, md: 20 };
  expect((0, _sortBreakpoints2['default'])(mockBreakpoints)).toEqual(['sm', 'xs', 'md', 'lg']);
});