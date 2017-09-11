export const IMAGES_READY = 'IMAGES_READY';

export const imagesReady = url => {
	return dispatch => {
		dispatch({ type: 'IMAGES_READY', payload: url });
	};
};
