export const LOADING = 'LOADING';

export const loading = name => {
	return dispatch => {
		dispatch({ type: LOADING, payload: name });
	};
};
