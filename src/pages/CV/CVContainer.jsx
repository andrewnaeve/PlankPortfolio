import React from 'react';
import styled from 'styled-components';
import ProfilePic from './ProfilePic';
import AnimatedContainer from '../Animation/AnimatedContainer';
import { NancyPlank } from '../../ImageProperties';
import MarkupWrapper from './MarkupWrapper';

const { firebaseUrl, title } = NancyPlank;
const CVWrapper = () => (
	<Container>
		<AnimatedContainer
			render={({ handleLoad, renderAnimation }) =>
				renderAnimation(
					<ProfilePic firebaseUrl={firebaseUrl} title={title} handleLoad={handleLoad} />
				)
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
