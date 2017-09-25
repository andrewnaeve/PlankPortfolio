import React from 'react';
import styled from 'styled-components';
import AnimatedContainer from '../Animation/AnimatedContainer';
import Email from './Email';
import Instagram from './Instagram';

const Contact = () => (
	<Container>
		<Row>
			<AnimatedContainer>
				<Email title={'Email'} />
			</AnimatedContainer>
		</Row>
		<Row>
			<AnimatedContainer>
				<Instagram title={'Instagram'} />
			</AnimatedContainer>
		</Row>
	</Container>
);

export default Contact;

const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: row;
	max-width: 60%;
	justify-content: space-around;
	flex-wrap: wrap;
`;

const Row = styled.div`
	display: flex;
	font-family: 'Abel', sans-serif;
	background-color: transparent;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
