import React, { Component } from 'react';
import styled from 'styled-components';
import { imagesReady } from '../../actions/imagesReady';
import { connect } from 'react-redux';
import { media } from '../../style-utils';

class ProfilePic extends Component {
	handleLoad = () => {
		const { url, imagesReady } = this.props;
		imagesReady(url);
	};
	render() {
		const { url } = this.props;
		return (
			<HeaderRow>
				<Pic src={url} onLoad={this.handleLoad} />
			</HeaderRow>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		imagesReady(url) {
			dispatch(imagesReady(url));
		}
	};
};

export default connect(null, mapDispatchToProps)(ProfilePic);

const HeaderRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 20px;
	margin-bottom: 40px;
	min-height: 250px;
	${media.tablets`
justify-content: start;`};
	width: 100%;
`;
const Pic = styled.img`
	display: flex;
	border-radius: 3px;
	max-height: 250px;
	max-width: 100%;
	width: auto;
	align-self: center;
	justify-content: center;
`;
