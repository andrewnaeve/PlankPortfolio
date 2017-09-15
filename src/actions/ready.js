export const READY = 'READY';

export const ready = title => {
	return dispatch => {
		dispatch({ type: READY, payload: title });
	};
};
