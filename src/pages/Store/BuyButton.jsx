import React from 'react';
import styled from 'styled-components';

export const BuyButton = props => (
	<Container>
		<Buy>Add To Cart</Buy>
	</Container>
);

const Container = styled.div`
	display: flex;
	align-items: flex-end;
	margin-bottom: 15px;
	margin-top: 15px;
`;
const Buy = styled.div`
	display: flex;
	width: 175px;
	height: 50px;
	border: 1px solid black;
	border-radius: 5px;
	justify-content: center;
	align-items: center;
	font-family: 'Abel', sans-serif;
	font-size: 1.5rem;
`;
