import { combineReducers } from 'redux';
import boardReducer from 'services/redux/reducers/boardsReducer';
import { initialState } from 'services/redux/initialState';

export default combineReducers({
  board: boardReducer(initialState.board),
});
