var expect = require('expect');
var { generateMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'kevin@example.com';
    var text = 'hello man'
    var response = generateMessage(from, text);
    expect(response.from).toBe(from);
    expect(response.text).toBe(text);
    expect(typeof response.createdAt).toBe('number');
  });
});
