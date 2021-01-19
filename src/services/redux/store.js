import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from 'services/redux/reducers';

export const store = createStore(rootReducer, applyMiddleware(logger));
