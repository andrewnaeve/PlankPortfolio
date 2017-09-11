import { IMAGES_READY } from '../actions/imagesReady';
import { IMAGES_LOADING } from '../actions/imagesLoading';

import initialState from '../initialState';

export const imagesLoaded = (state = initialState, action) => {
	const url = action.payload;
	switch (action.type) {
		case IMAGES_READY:
			return {
				...state,
				[url]: true
			};
		case IMAGES_LOADING:
			return {
				...state,
				[url]: false
			};
		default:
			return state;
	}
};
