import { IMAGE_LOADING } from '../actions/imageLoading';
import initialState from '../initialState';

export const imagesLoading = (state = initialState, action) => {
	console.log('action', action.type);
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
