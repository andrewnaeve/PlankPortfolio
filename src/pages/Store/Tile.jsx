import React from 'react';
import styled from 'styled-components';
import { BuyButton } from './BuyButton';

export const Tile = props => (
	<Container>
		<Image src={props.url} alt={props.title} onLoad={props.handleLoad} />
		<Title>{props.title}</Title>
		<Price>${props.price}</Price>
		<BuyButton />
	</Container>
);

const Image = styled.img`
	display: flex;
	background: purple;
	margin: 10px;
	width: auto;
	height: 500px;
	min-width: 400px;
`;

const Title = styled.p`
	display: flex;
	font-family: 'Abel', sans-serif;
	font-size: 1.5rem;
	margin-bottom: 5px;
`;

const Price = styled.i`
	display: flex;
	font-family: 'Abel', sans-serif;
	font-size: 1.5rem;
	font-style: italic;
`;

const Container = styled.div`
	display: flex;
	margin: 10px;
	align-items: center;
	justify-content: flex-end;
	flex-direction: column;
	border: 2px solid #d0d0d0;
	border-radius: 5px;
	margin-bottom: 20px;
	height: 650px;
	-webkit-box-shadow: 5px 4px 12px 0px rgba(184, 184, 184, 1);
	-moz-box-shadow: 5px 4px 12px 0px rgba(184, 184, 184, 1);
	box-shadow: 5px 4px 12px 0px rgba(184, 184, 184, 1);
`;
