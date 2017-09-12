export const IMAGES_LOADING = 'IMAGES_LOADING';

export const imagesLoading = url => {
	return dispatch => {
		dispatch({ type: IMAGES_LOADING, payload: url });
	};
};
