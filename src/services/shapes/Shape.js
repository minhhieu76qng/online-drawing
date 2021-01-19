export default class Shape {
  _graphic = null;

  _data = {};

  constructor(graphic) {
    this._graphic = graphic;
  }

  setPoints() {}

  draw() {
    throw new Error('Method not implements');
  }
}
