import React from 'react';
import styled from 'styled-components';
import { media } from '../../utilities/style-utils';

const ProfilePic = props => (
	<HeaderRow>
		<Pic src={props.title} onLoad={props.handleLoad} />
	</HeaderRow>
);

export default ProfilePic;

const HeaderRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 20px;
	margin-bottom: 40px;
	min-height: 250px;
	${media.tablets`
justify-content: start;`};
	width: 100%;
`;
const Pic = styled.img`
	display: flex;
	border-radius: 3px;
	max-height: 250px;
	max-width: 100%;
	width: auto;
	align-self: center;
	justify-content: center;
`;
