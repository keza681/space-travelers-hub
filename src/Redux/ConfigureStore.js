import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

const reducer = combineReducers({
  reducers,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
