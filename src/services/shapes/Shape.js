import { Colors } from 'constants/styles/Colors';

export default class Shape {
  _graphic = null;

  _data = {};

  _color = Colors.PRIMARY;

  constructor(graphic) {
    this._graphic = graphic;
  }

  setPoints() {
    return this;
  }

  setColor(color) {
    this._color = color;
    return this;
  }

  draw() {
    throw new Error('Method not implements');
  }
}
