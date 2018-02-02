import React from 'react';
import styled from 'styled-components';

export const ProceedToPayment = () => (
	<Container>
		<Proceed>Proceed To Payment</Proceed>
	</Container>
);

const Container = styled.div`
	display: flex;
	margin-bottom: 15px;
	margin-top: 25px;
	justify-content: flex-end;
`;

const Proceed = styled.div`
	display: flex;
	width: 200px;
	height: 50px;
	border: 1px solid black;
	border-radius: 5px;
	justify-content: center;
	align-items: center;
	font-family: 'Abel', sans-serif;
	font-size: 1.5rem;
	cursor: pointer;
	text-align: center;
`;
