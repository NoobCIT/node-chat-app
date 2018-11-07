const expect = require('expect');
const { isRealString } = require('./validation.js');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var string = 123124;
    expect(isRealString(string)).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var string = '     ';
    expect(isRealString(string)).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var string = '    sdflksd ';
    expect(isRealString(string)).toBe(true);
  });
});
