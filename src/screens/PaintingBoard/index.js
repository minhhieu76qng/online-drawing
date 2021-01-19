import { connect } from 'react-redux';
import actions from 'services/redux/actions';
import selectors from 'services/redux/selectors';
import PaintingBoard from './PaintingBoard';

const mapStateToProps = (state) => ({
  shapes: selectors.getShapesInBoard(state),
});

const mapDispatchToProps = (dispatch) => ({
  addNewShape: (shape) => dispatch(actions.addNewShape(shape)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaintingBoard);
