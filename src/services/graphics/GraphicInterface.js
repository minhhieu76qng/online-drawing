export class GraphicInterface {
  _ctx = null;

  get Context() {
    return this._ctx;
  }

  drawLine(point1, point2) {
    throw new Error('Method is not implemented.');
  }

  drawRectangle(point1, point2) {
    throw new Error('Method is not implemented.');
  }
}
