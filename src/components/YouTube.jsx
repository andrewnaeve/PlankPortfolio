import React, { Component } from 'react';
import styled from 'styled-components';
import AnimatedContainer from './AnimatedContainer';
// import './iframe.css';

const YouTube = () => {
	return <Frame />;
};

const Frame = props => (
	<OuterWrapper>
		<MediaWrapper>
			<iframe
				style={iframeStyle}
				width="560"
				height="315"
				src="https://www.youtube.com/embed/B5nF1Mmte0M?rel=0"
				frameBorder="0"
				allowFullScreen
			/>
		</MediaWrapper>
	</OuterWrapper>
);

export default YouTube;

const OuterWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 10px;
	background-color: red;
	width: 75%;
`;

const MediaWrapper = styled.div`
	position: relative;
	padding-bottom: 56.25%;
	padding-top: 35px;
	height: 0;
	overflow: hidden;
	width: 100%;
`;

const iframeStyle = {
	position: 'absolute',
	top: '0',
	left: '0',
	width: '100%',
	height: '100%'
};
