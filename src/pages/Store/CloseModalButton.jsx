import React from 'react';
import styled from 'styled-components';
import { ConnectedModal } from '../Modal/ConnectedModal';

export const CloseModalButton = () => (
	<ConnectedModal
		render={({ hideModal }) => (
			<CloseButton onClick={hideModal}>
				<CloseButtonFiller>X</CloseButtonFiller>
			</CloseButton>
		)}
	/>
);

const CloseButton = styled.div`
	position: absolute;
	top: -20px;
	right: -20px;
	height: 50px;
	width: 50px;
	text-align: center;
	cursor: pointer;
`;

const CloseButtonFiller = styled.div`
	display: flex;
	height: 80%;
	width: 80%;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	background: #f1f1f1;
	font-family: 'Abel';
	font-size: 30px;
	border: 2px solid black;
	margin: 5px;
`;
