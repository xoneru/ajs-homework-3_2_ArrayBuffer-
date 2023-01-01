export default class ArrayBufferConverter {
  constructor() {
    this.buffer = null;
  }

  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const result = new Int16Array(this.buffer);
    return String.fromCharCode(...result);
  }
}