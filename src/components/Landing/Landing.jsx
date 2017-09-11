import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../../style-utils';
import { connect } from 'react-redux';
import { imagesReady } from '../../actions/imagesReady';

class Landing extends Component {
	handleLoad = () => {
		const { imagesReady, url } = this.props;
		imagesReady(url);
	};
	render() {
		return (
			<Wrapper>
				<LandingImage src={this.props.url} onLoad={this.handleLoad} />
			</Wrapper>
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

export default connect(null, mapDispatchToProps)(Landing);

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const LandingImage = styled.img`
	display: flex;
	align-self: flex-start;
	max-height: 600px;
	max-width: 90%;
	width: auto;
	border: 1px solid #f0f0f0;
	border-radius: 3px;
	${media.smallPhones`
margin-top: 40px;`};
	${media.tablets`
max-height: 600px;`};
	${media.laptop`
margin-top: 20px;
max-height: 600px;`};
	${media.fourKay`
max-height: 1500px;`};
`;
