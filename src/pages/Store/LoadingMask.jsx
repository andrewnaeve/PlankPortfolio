import React, { Component } from 'react';
import styled from 'styled-components';
import { BeatLoader } from 'react-spinners';

export class LoadingMask extends Component {
	render() {
		const { loading, children } = this.props;
		return (
			<div style={styles.container}>
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
	hide: {
		display: 'none'
	},
	show: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
};
