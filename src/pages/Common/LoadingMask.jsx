import React, { Component } from 'react';
import { BeatLoader } from 'react-spinners';

export class LoadingMask extends Component {
	render() {
		const { loading, children } = this.props;
		return (
			<div style={loading ? styles.container : styles.done}>
				<div>{loading && <BeatLoader color={'#78D5E3'} size={20} />}</div>
				<div style={loading ? styles.hide : styles.show}>{children}</div>
			</div>
		);
	}
}

const styles = {
	container: {
		display: 'flex',
		height: '100%',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	done: {
		display: 'flex',
		flex: '1',
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	},
	hide: {
		display: 'none'
	},
	show: {
		display: 'flex',
		flex: '1',
		justifyContent: 'center',
		alignItems: 'center'
	}
};
