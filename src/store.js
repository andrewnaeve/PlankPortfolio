import { createStore, applyMiddleware } from 'redux';
import initialState from './initialState';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;

// const store = createStore(
// 	rootReducer,
// 	initialState,
// 	compose(
// 		applyMiddleware(thunk),
// 		typeof window === 'object' &&
// 		typeof window.devToolsExtension !== 'undefined'
// 			? window.devToolsExtension()
// 			: f => f
// 	)
// );
