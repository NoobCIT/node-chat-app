var expect = require('expect');
var { generateMessage, generateLocationMessage } = require('./message');

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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'admin';
    var latitude = 1;
    var longitude = 1;
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    var message = generateLocationMessage(from, latitude, longitude);
    expect(message.from).toBe(from);
    expect(message.url).toBe(url);
    expect(typeof message.createdAt).toBe('number');
  });
});
