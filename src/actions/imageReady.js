export const IMAGE_READY = 'IMAGE_READY';

export const imageReady = url => {
	return dispatch => {
		dispatch({ type: `IMAGE_READY`, payload: url });
	};
};
