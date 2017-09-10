import React from 'react';
import styled from 'styled-components';
import { media } from '../../style-utils';
import { LavendarLanding } from '../../ImageProperties';
import AnimatedContainer from '../AnimatedContainer';
import { connect } from 'react-redux';
import { imageReady } from '../../actions/imageReady';

const Landing = props => (
	<Wrapper>
		<LandingImage src={props.url} onLoad={props.imageReady(props.url)} />
	</Wrapper>
);

const mapDispatchToProps = dispatch => {
	return {
		imageReady(url) {
			dispatch(imageReady(url));
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
