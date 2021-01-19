import Shape from './Shape';

export class Rectangle extends Shape {
  constructor(graphic) {
    super(graphic);
  }

  setPoints(point1, point2) {
    this._data = {
      point1,
      point2,
    };
  }

  draw() {
    const { point1, point2 } = this._data;
    this._graphic.drawRectangle(point1, point2);
  }
}
