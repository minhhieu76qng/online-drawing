import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import { Colors } from 'constants/styles/Colors';
import { Rectangle } from 'services/shapes/Rectangle';
import { Canvas } from 'services/graphics/Canvas';
import Shape from 'services/shapes/Shape';
import { SHAPE_TYPE } from 'constants/shapes';
import { StyledBoardContainer } from './PaintingBoard.styled';
import { Point } from 'services/points/Point';

const HEADER_HEIGHT = 50;

const propTypes = {
  shapes: PropTypes.arrayOf(Shape),
  addNewShape: PropTypes.func,
};
const defaultProps = {
  shapes: [],
  addNewShape: () => {},
};

class PaintingBoard extends React.Component {
  constructor(props) {
    super(props);
    const [width, height] = this.getBoardWidthAndHeight();
    this.state = {
      canvasWidth: width,
      canvasHeight: height,
      canvasCtx: null,
      isDrawing: false,
      myPosition: {
        start: null,
        end: null,
      },
      graphic: null,
      currentShapeType: SHAPE_TYPE.RECTANGLE,
      currentShapeColor: Colors.PRIMARY,
    };
    this.canvasRef = null;
  }

  componentDidMount() {
    const ctx = this.canvasRef.getContext('2d');
    this.setState({
      canvasCtx: ctx,
      graphic: new Canvas(ctx),
    });
    this.canvasRef.addEventListener('mousedown', this.handleMouseDown);
    this.canvasRef.addEventListener('mouseup', this.handleMouseUp);
    this.canvasRef.addEventListener('mousemove', this.handleMouseMove);
  }

  componentWillUnmount() {
    this.canvasRef.removeEventListener('mousedown', this.handleMouseDown);
    this.canvasRef.removeEventListener('mouseup', this.handleMouseUp);
    this.canvasRef.removeEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseDown = (event) => {
    const { isValid, point } = this.getValidViewPort(event);
    if (!isValid) return;
    this.setState({
      isDrawing: true,
      myPosition: {
        start: point,
      },
    });
  };

  handleMouseUp = (event) => {
    const { myPosition, graphic } = this.state;
    const { isValid, point } = this.getValidViewPort(event);
    if (!isValid || Point.isEqual(myPosition.start, point)) {
      this.setState({
        isDrawing: false,
      });
      return;
    }
    const rect = new Rectangle(graphic);
    rect.setPoints(myPosition.start, point);
    this.addToShapeList(rect, {});
    this.setState(
      {
        isDrawing: false,
        myPosition: {
          end: point,
        },
      },
      () => {
        this.drawCanvas();
      },
    );
  };

  getValidViewPort = (event) => {
    const [x, y] = this.getMousePosition(event);
    return {
      isValid: x >= 0 && y >= 0,
      point: Point.toPoint([x, y]),
    };
  };

  getMousePosition = (event) => [event.clientX, event.clientY - 50];

  handleMouseMove = (event) => {
    const { graphic, myPosition, isDrawing } = this.state;
    if (isDrawing) {
      const { shapes } = this.props;
      const { isValid, point } = this.getValidViewPort(event);
      if (!isValid) return;
      const rect = new Rectangle(graphic);
      rect.setPoints(myPosition.start, point);
      const shapeWithEnemy = [...shapes, { shape: rect, owner: {} }];
      this.drawCanvas(shapeWithEnemy);
    }
  };

  getBoardWidthAndHeight = () => [window.innerWidth, window.innerHeight - HEADER_HEIGHT];

  drawCanvas = (shapeList = null) => {
    const { canvasCtx, canvasWidth, canvasHeight } = this.state;
    const { shapes } = this.props;
    canvasCtx.clearRect(0, 0, canvasWidth, canvasHeight);
    (shapeList || shapes).forEach((item) => {
      item.shape.draw();
    });
  };

  addToShapeList = (shape, owner) => {
    const { addNewShape } = this.props;
    addNewShape({
      shape,
      owner,
    });
  };

  render() {
    const { canvasWidth, canvasHeight, currentShapeType, currentShapeColor } = this.state;
    return (
      <StyledBoardContainer>
        <Header
          shapeType={currentShapeType}
          shapeColor={currentShapeColor}
          onShapeChange={(value) =>
            this.setState({
              currentShapeType: value,
            })
          }
          onColorChange={(value) =>
            this.setState({
              currentShapeColor: value,
            })
          }
        />
        <canvas
          id="board"
          ref={(ref) => (this.canvasRef = ref)}
          width={canvasWidth}
          height={canvasHeight}
        />
      </StyledBoardContainer>
    );
  }
}

PaintingBoard.propTypes = propTypes;
PaintingBoard.defaultProps = defaultProps;

export default PaintingBoard;
