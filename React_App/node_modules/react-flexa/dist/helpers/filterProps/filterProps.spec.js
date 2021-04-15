var _filterProps = require('./filterProps');

var _filterProps2 = _interopRequireDefault(_filterProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

test('should filter props from supplied object', function () {
  var mockProps = { xs: -1, sm: 2, md: 0, lg: 6 };
  var propsToRemove = { xs: '', display: '' };

  expect((0, _filterProps2['default'])(mockProps, propsToRemove)).toEqual({ sm: 2, md: 0, lg: 6 });
});

test('should ignore nested objects in second argument, propsToRemove', function () {
  var mockProps = { xs: -1, sm: 2, md: 0, lg: 6 };
  var propsToRemove = { xs: 'foo', display: 'sm' };

  expect((0, _filterProps2['default'])(mockProps, propsToRemove)).toEqual({ sm: 2, md: 0, lg: 6 });
});

test('should not filter out safe props such as children', function () {
  var mockProps = { xs: -1, sm: 2, md: 0, lg: 6, children: { foo: 'bar' } };
  var propsToRemove = { xs: 'foo', display: 'bar', children: 'baz' };

  expect((0, _filterProps2['default'])(mockProps, propsToRemove)).toEqual({ sm: 2, md: 0, lg: 6, children: { foo: 'bar' } });
});