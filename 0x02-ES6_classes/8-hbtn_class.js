export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }
}

HolbertonClass.prototype.valueOf = function toNum() {
  return this._size;
};
HolbertonClass.prototype.toString = function toStr() {
  return this._location;
};
