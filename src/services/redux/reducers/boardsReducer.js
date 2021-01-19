/* eslint-disable no-param-reassign */
import producer from 'immer';

export default (initialState) => (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'JOIN_ROOM': {
      return state;
    }
    case 'ADD_NEW_SHAPE': {
      const { shape, owner } = payload;

      return producer(state, (draffState) => {
        draffState.shapes.push({
          shape,
          owner,
        });
      });
    }
    default:
      return state;
  }
};
