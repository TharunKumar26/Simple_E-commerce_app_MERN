var _templateObject = _taggedTemplateLiteral(['color: red'], ['color: red']),
    _templateObject2 = _taggedTemplateLiteral(['color: blue'], ['color: blue']),
    _templateObject3 = _taggedTemplateLiteral(['color: green'], ['color: green']),
    _templateObject4 = _taggedTemplateLiteral(['color: yellow'], ['color: yellow']);

var _mediaQuery = require('./mediaQuery');

var _mediaQuery2 = _interopRequireDefault(_mediaQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

test('should generate a media query for lg breakpoint', function () {
  var query = (0, _mediaQuery2['default'])().lg(_templateObject).join('');
  expect(query).toContain('@media (min-width: 60rem)');
  expect(query).toContain('color: red');
});

test('should generate a media query for md breakpoint', function () {
  var query = (0, _mediaQuery2['default'])().md(_templateObject2).join('');
  expect(query).toContain('@media (min-width: 48rem)');
  expect(query).toContain('color: blue');
});

test('should generate a media query for sm breakpoint', function () {
  var query = (0, _mediaQuery2['default'])().sm(_templateObject3).join('');
  expect(query).toContain('@media (min-width: 30rem)');
  expect(query).toContain('color: green');
});

test('should not generate a media query for xs breakpoint', function () {
  var query = (0, _mediaQuery2['default'])().xs(_templateObject4).join('');
  expect(query).not.toContain('@media (min-width: 0rem)');
  expect(query).toContain('color: yellow');
});