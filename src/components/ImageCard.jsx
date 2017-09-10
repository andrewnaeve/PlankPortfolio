import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { imageReady } from '../actions/imageReady';

const ImageCard = props => (
	<Wrapper>
		<Image src={props.url} onLoad={props.imageReady(props.url)} />
	</Wrapper>
);

const mapDispatchToProps = dispatch => {
	return {
		imageReady(url) {
			dispatch(imageReady(url));
		}
	};
};

export default connect(null, mapDispatchToProps)(ImageCard);

const Image = styled.img`
	display: flex;
	justify-content: center;
	align-self: center;
	max-height: 1000px;
	max-width: 100%;
	width: auto;
	border: 1px solid #f0f0f0;
	border-radius: 3px;
	margin-bottom: 30px;
`;

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
`;
