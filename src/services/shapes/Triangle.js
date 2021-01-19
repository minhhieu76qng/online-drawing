import Shape from './Shape';

export class Triangle extends Shape {
  constructor(graphic) {
    super(graphic);
  }

  setPoints(point1, point2) {
    this._data = {
      point1,
      point2,
    };
    return this;
  }

  draw() {
    const { point1, point2 } = this._data;
    this._graphic.drawTriangle(point1, point2);
  }
}
