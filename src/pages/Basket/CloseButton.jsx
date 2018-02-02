import React from 'react';
import styled from 'styled-components';
import { ConnectedBasket } from './ConnectedBasket';

export const CloseButton = ({ title }) => (
	<ConnectedBasket
		render={({ removeFromBasket }) => (
			<XButton onClick={() => removeFromBasket(title)}>
				<CloseButtonFiller>X</CloseButtonFiller>
			</XButton>
		)}
	/>
);

const XButton = styled.div`
	position: absolute;
	top: -20px;
	right: -20px;
	height: 45px;
	width: 45px;
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
	font-size: 20px;
	margin: 5px;
	-webkit-box-shadow: 5px 4px 12px 0px rgba(184, 184, 184, 1);
	-moz-box-shadow: 5px 4px 12px 0px rgba(184, 184, 184, 1);
	box-shadow: 5px 4px 12px 0px rgba(184, 184, 184, 1);
`;
