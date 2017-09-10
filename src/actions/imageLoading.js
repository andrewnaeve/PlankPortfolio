export const IMAGE_LOADING = 'IMAGE_LOADING';

export const imageLoading = url => {
	console.log('unmounted and fired');
	return dispatch => {
		dispatch({ type: `IMAGE_LOADING`, payload: url });
	};
};
