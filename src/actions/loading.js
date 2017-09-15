export const LOADING = 'LOADING';

export const loading = title => {
	return dispatch => {
		dispatch({ type: LOADING, payload: title });
	};
};
