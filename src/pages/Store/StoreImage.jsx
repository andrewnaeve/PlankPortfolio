import React from 'react';
import styled from 'styled-components';
import { LoadingMask } from './LoadingMask';

export const StoreImage = props => (
	<ImageWrapper
		heightFactor={props.heightFactor}
		height={props.height}
		width={props.width}
		onClick={props.showModal}
	>
		<LoadingMask loading={props.loading}>
			<Image src={props.url} alt={props.title} onLoad={props.loaded} />
		</LoadingMask>
	</ImageWrapper>
);

const ImageWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: ${props => {
		return `${props.heightFactor}px`;
	}};
	width: ${props => {
		return `${props.heightFactor * props.width / props.height}px`;
	}};
`;

const Image = styled.img`
	display: flex;
	align-items: center;
	margin: 10px;
	height: 100%;
	width: 100%;
`;
