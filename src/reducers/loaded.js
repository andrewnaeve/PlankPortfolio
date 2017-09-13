import { READY } from '../actions/ready';
import { LOADING } from '../actions/loading';

import initialState from '../initialState';

export const loaded = (state = initialState, action) => {
	const name = action.payload;
	switch (action.type) {
		case READY:
			return {
				...state,
				[name]: true
			};
		case LOADING:
			return {
				...state,
				[name]: false
			};
		default:
			return state;
	}
};
