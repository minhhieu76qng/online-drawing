import { Point } from 'services/points/Point';
import { GraphicInterface } from './GraphicInterface';

export class Canvas extends GraphicInterface {
  constructor(context) {
    super(context);
    this._ctx = context;
  }

  drawLine(point1, point2) {
    this._ctx.moveTo(point1.x, point1.y);
    this._ctx.lineTo(point2.x, point2.y);
    this._ctx.stroke();
  }

  drawTriangle(point1, point2) {
    const top = point1;
    const bottom = new Point(point1.x, point2.y);
    const right = point2;

    this._ctx.moveTo(top.x, top.y);
    this._ctx.lineTo(bottom.x, bottom.y);
    this._ctx.lineTo(right.x, bottom.y);
    this._ctx.closePath();
    this._ctx.stroke();
  }

  drawRectangle(point1, point2) {
    const w = point2.x - point1.x;
    const h = point2.y - point1.y;
    this._ctx.strokeRect(point1.x, point1.y, w, h);
  }
}
