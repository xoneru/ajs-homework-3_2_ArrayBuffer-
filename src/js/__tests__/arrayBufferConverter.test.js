import ArrayBufferConverter from '../class_ArrayBufferConverter';
import getBuffer from '../func_getBuffer';

test('test converter', () => {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());
  expect(converter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});