import { SHAPE_TYPE } from 'constants/shapes';
import { Rectangle } from './Rectangle';
import { Triangle } from './Triangle';

export class ShapeFactory {
  static getShapeByName(shapeName) {
    switch (shapeName) {
      case SHAPE_TYPE.RECTANGLE:
        return Rectangle;
      case SHAPE_TYPE.CIRCLE:
        return Triangle;
      case SHAPE_TYPE.TRIANGLE:
        return Triangle;
      default:
        return null;
    }
  }
}
