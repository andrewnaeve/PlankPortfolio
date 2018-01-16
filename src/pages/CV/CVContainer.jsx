import React, { Component } from 'react';
import styled from 'styled-components';
import ProfilePic from './ProfilePic';
import AnimatedContainer from '../Animation/AnimatedContainer';
import NancyPlank from '../../img/NancyPlank.jpg';
import MarkupWrapper from './MarkupWrapper';

const CVWrapper = () => (
	<Container>
		<AnimatedContainer
			render={({ handleLoad, renderAnimation }) =>
				renderAnimation(<ProfilePic title={NancyPlank} handleLoad={handleLoad} />)
			}
		/>
		<AnimatedContainer
			render={({ handleLoad, renderAnimation }) =>
				renderAnimation(<MarkupWrapper handleLoad={handleLoad} />)
			}
		/>
	</Container>
);

export default CVWrapper;

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
