export const READY = 'READY';

export const ready = name => {
	return dispatch => {
		dispatch({ type: 'READY', payload: name });
	};
};
