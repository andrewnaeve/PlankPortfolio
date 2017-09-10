import { IMAGE_READY } from '../actions/imageReady';
import { IMAGE_LOADING } from '../actions/imageLoading';

import initialState from '../initialState';

export const imagesReady = (state = initialState, action) => {
	const url = action.payload;
	switch (action.type) {
		case `IMAGE_READY`:
			return {
				...state,
				[url]: true
			};
		default:
			return state;
	}
};

export const imagesLoading = (state = initialState, action) => {
	console.log('hi', action.type);
	const url = action.payload;
	switch (action.type) {
		case `IMAGE_LOADING`:
			return {
				...state,
				[url]: false
			};
		default:
			return state;
	}
};
