import React from 'react';
import styled, { keyframes } from 'styled-components';

export const Overlay = props => (
	<OverlayContainer show={props.show}>{props.children}</OverlayContainer>
);

const fadeIn = keyframes`
	from {
		background: rgba(0, 0, 0, 0);
	}

	to {
		background: rgba(0, 0, 0, 0.6);
	}
`;

const fadeOut = keyframes`
	from {
		background: rgba(0, 0, 0, 0.6);
	}

	to {
		background: rgba(0, 0, 0, 0);
	}
`;

// animation-fill-mode: forwards;
const OverlayContainer = styled.div`
	animation: ${props => {
		return props.show ? `${fadeIn} .2s linear 1` : `${fadeOut} .2s linear 1}`;
	}};
	position: fixed;
	display: ${props => {
		return props.show ? `absolute` : `none`;
	}};
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	background: rgba(0, 0, 0, 0.6);
	z-index: 2;
`;

// background-color: #000;
