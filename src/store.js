import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import rootReducer from './reducers/index';

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
