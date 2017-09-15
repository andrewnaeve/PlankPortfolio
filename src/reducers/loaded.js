import { READY } from '../actions/ready';
import { LOADING } from '../actions/loading';

import initialState from '../initialState';

export const loaded = (state = initialState, action) => {
	const title = action.payload;
	switch (action.type) {
		case READY:
			return {
				...state,
				[title]: true
			};
		case LOADING:
			return {
				...state,
				[title]: false
			};
		default:
			return state;
	}
};
