var _gutter = require('./gutter');

describe('gutterWidth', function () {
  test('should use default config if no gutter is provided', function () {
    var mockProps = { xs: 1, lg: 4 };
    expect((0, _gutter.gutterWidth)(mockProps, 'sm')).toEqual(0.5);
    expect((0, _gutter.gutterWidth)(mockProps, 'lg')).toEqual(1);
  });

  test('should use gutter value in props over config', function () {
    var mockProps = { xs: 1, lg: 4, gutter: 6 };
    expect((0, _gutter.gutterWidth)(mockProps, 'sm')).toEqual(6);
    expect((0, _gutter.gutterWidth)(mockProps, 'lg')).toEqual(6);
  });

  test('should use breakpoint within gutter object if provided', function () {
    var mockProps = { xs: 1, lg: 4, gutter: { sm: 7, lg: 9 } };
    expect((0, _gutter.gutterWidth)(mockProps, 'sm')).toEqual(7);
    expect((0, _gutter.gutterWidth)(mockProps, 'lg')).toEqual(9);
  });

  test('should use default breakpoint for if a value is not used within the object', function () {
    var mockProps = { xs: 1, lg: 4, gutter: { sm: 7, lg: 9 } };
    expect((0, _gutter.gutterWidth)(mockProps, 'xs')).toEqual(0.5);
    expect((0, _gutter.gutterWidth)(mockProps, 'sm')).toEqual(7);
    expect((0, _gutter.gutterWidth)(mockProps, 'md')).toEqual(1);
    expect((0, _gutter.gutterWidth)(mockProps, 'lg')).toEqual(9);
  });

  test('should work with strings and numbers', function () {
    var mockProps = { xs: 1, lg: 4, gutter: { sm: '12rem', lg: 42 } };
    expect((0, _gutter.gutterWidth)(mockProps, 'sm')).toEqual('12rem');
    expect((0, _gutter.gutterWidth)(mockProps, 'lg')).toEqual(42);
  });
});

describe('row', function () {
  test('should generate gutter css', function () {
    var mockProps = { xs: 1, gutter: { sm: 12 } };
    var rowGutter = (0, _gutter.row)(mockProps, 'sm').join('');
    expect(rowGutter).toContain('margin-right: calc(-12rem / 2);');
    expect(rowGutter).toContain('margin-left: calc(-12rem / 2);');
  });

  test('should generate gutter css included unit', function () {
    var mockProps = { xs: 1, gutter: { sm: '12px' } };
    var rowGutter = (0, _gutter.row)(mockProps, 'sm').join('');
    expect(rowGutter).toContain('margin-right: calc(-12px / 2);');
    expect(rowGutter).toContain('margin-left: calc(-12px / 2);');
  });

  test('should return theme value if breakpoint does not exist in gutter', function () {
    var mockProps = { xs: 1, gutter: { sm: '12px' } };
    var rowGutter = (0, _gutter.row)(mockProps, 'lg').join('');
    expect(rowGutter).toContain('margin-right: calc(-1rem / 2);');
    expect(rowGutter).toContain('margin-left: calc(-1rem / 2);');
  });

  test('should return null if breakpoint does not exist in theme and gutter', function () {
    var mockProps = { xs: 1, gutter: { sm: '12px' } };
    var rowGutter = (0, _gutter.row)(mockProps, 'xlg');
    expect(rowGutter).toEqual(null);
  });
});

describe('col', function () {
  test('should generate gutter css', function () {
    var mockProps = { xs: 1, gutter: { sm: 12 } };
    var colGutter = (0, _gutter.col)(mockProps, 'sm').join('');
    expect(colGutter).toContain('padding-right: calc(12rem / 2);');
    expect(colGutter).toContain('padding-left: calc(12rem / 2);');
  });

  test('should generate gutter css included unit', function () {
    var mockProps = { xs: 1, gutter: { sm: '12px' } };
    var colGutter = (0, _gutter.col)(mockProps, 'sm').join('');
    expect(colGutter).toContain('padding-right: calc(12px / 2);');
    expect(colGutter).toContain('padding-left: calc(12px / 2);');
  });

  test('should return null if breakpoint does not exist in gutter', function () {
    var mockProps = { xs: 1, gutter: { sm: '12px' } };
    var colGutter = (0, _gutter.col)(mockProps, 'lg').join('');
    expect(colGutter).toContain('padding-right: calc(1rem / 2);');
    expect(colGutter).toContain('padding-left: calc(1rem / 2);');
  });

  test('should return null if breakpoint does not exist in theme and gutter', function () {
    var mockProps = { xs: 1, gutter: { sm: '12px' } };
    var colGutter = (0, _gutter.col)(mockProps, 'xlg');
    expect(colGutter).toEqual(null);
  });
});