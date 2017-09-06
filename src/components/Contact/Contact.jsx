import React from 'react';
import styled from 'styled-components';
import { media } from '../../style-utils';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

const Contact = () => (
	<Container>
		<Row>
			NPlank@me.com
			<Icons className="fa fa-envelope-o" />
		</Row>
		<Row>
			Instagram
			<Icons className="fa fa-instagram" />
		</Row>
	</Container>
);

export default Contact;

const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: row;
	max-width: 50%;
	justify-content: space-around;
	flex-wrap: wrap;
`;

const Row = styled.div`
	display: flex;
	font-family: 'Abel', sans-serif;
	font-size: 2rem;
	background-color: white;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
`;

const Icons = styled.i`
	display: flex;
	font-size: 5rem;
	margin-top: 10px;
	margin-bottom: 20px;
	text-align: center;
`;
