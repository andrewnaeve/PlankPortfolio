import { combineReducers } from 'redux';

import { imagesReady } from './imagesReady';
import { imagesLoading } from './imagesLoading';

const rootReducer = combineReducers({
	imagesReady,
	imagesLoading
});

export default rootReducer;
