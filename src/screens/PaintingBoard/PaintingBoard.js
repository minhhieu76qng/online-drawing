import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import { Rectangle } from 'services/shapes/Rectangle';
import { Canvas } from 'services/graphics/Canvas';
import Shape from 'services/shapes/Shape';
import { SHAPE_TYPE } from 'constants/shapes';
import { StyledBoardContainer } from './PaintingBoard.styled';

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
    };
    this.canvasRef = null;
  }

  componentDidMount() {
    const ctx = this.canvasRef.getContext('2d');
    this.setState({
      canvasCtx: ctx,
      graphic: new Canvas(ctx),
    });
    window.addEventListener('mousedown', this.handleMouseDown);
    window.addEventListener('mouseup', this.handleMouseUp);
    window.addEventListener('mousemove', this.handleMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener('mousedown', this.handleMouseDown);
    window.removeEventListener('mouseup', this.handleMouseUp);
    window.removeEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseDown = (event) => {
    const [x, y] = this.getMousePosition(event);
    this.setState({
      isDrawing: true,
      myPosition: {
        start: {
          x,
          y,
        },
      },
    });
  };

  handleMouseUp = (event) => {
    const [x, y] = this.getMousePosition(event);
    const { myPosition, graphic } = this.state;
    const rect = new Rectangle(graphic);
    rect.setPoints(myPosition.start, { x, y });
    this.addToShapeList(rect, {});
    this.setState(
      {
        isDrawing: false,
        myPosition: {
          end: {
            x,
            y,
          },
        },
      },
      () => {
        this.drawCanvas();
      },
    );
  };

  getMousePosition = (event) => [event.clientX, event.clientY - 50];

  handleMouseMove = (event) => {
    const { graphic, myPosition, isDrawing } = this.state;
    if (isDrawing) {
      const { shapes } = this.props;
      const [x, y] = this.getMousePosition(event);
      const rect = new Rectangle(graphic);
      rect.setPoints(myPosition.start, { x, y });
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
    const { canvasWidth, canvasHeight } = this.state;
    return (
      <StyledBoardContainer>
        <Header />
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
