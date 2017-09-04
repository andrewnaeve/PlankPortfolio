import React from 'react';
import styled from 'styled-components';
import { media } from '../../style-utils';
import Shows from './Shows';
import Publications from './Publications';
import Education from './Education';
import NancyPlank from '../../img/NancyPlank.jpg';
import AnimatedContainer from '../AnimatedContainer';

const CVWrapper = () => (
	<AnimatedContainer>
		<CV />
	</AnimatedContainer>
);

const CV = props => {
	return (
		<Container>
			<HeaderRow>
				<NP animate={props.animate} />
			</HeaderRow>
			<Row>
				<Column>
					<Publications />
					<Shows />
				</Column>
				<Column>
					<Education />
				</Column>
			</Row>
		</Container>
	);
};

export default CVWrapper;

const NP = props => <ProfilePic src={NancyPlank} onLoad={props.animate} />;

const HeaderRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: start;
	margin-top: 20px;
	margin-bottom: 40px;
`;
const ProfilePic = styled.img`
	display: flex;
	border-radius: 3px;
	max-height: 250px;
	max-width: 100%;
	width: auto;
	align-self: center;
	justify-content: center;
`;

const Container = styled.div`
	display: flex;
	width: 95%;
	height: 100%;
	flex-direction: column;
	margin-top: 20px;
`;
const Row = styled.div`
	display: flex;
	flex-direction: row;
	font-family: 'Abel', sans-serif;
	width: 100%;
`;
const Column = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 10px;
	width: calc(100% /2);
`;

const Headline = styled.h1`
	font-weight: 600;
	font-size: 2rem;
`;

const P = styled.p`
	font-weight: 500;
	font-size: 1.2rem;
`;

const Bold = styled.span`font-weight: 600;`;
const Italic = styled.span`font-style: italic;`;
