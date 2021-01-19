/* eslint-disable no-underscore-dangle */
export class Point {
  _x = 0;

  _y = 0;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

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

  static isEqual(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
  }

  static toPoint([x, y]) {
    return new Point(x, y);
  }
}
