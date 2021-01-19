/* eslint-disable no-underscore-dangle */
export class Point {
  _x = 0;

  _y = 0;

  set x(value) {
    this._x = value;
  }

  get x() {
    return this._x;
  }

  set y(value) {
    this._y = value;
  }

  get y() {
    return this._y;
  }
}
