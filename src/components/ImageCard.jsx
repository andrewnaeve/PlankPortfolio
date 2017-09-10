import React from 'react';
import styled from 'styled-components';

const ImageCard = props => (
	<Wrapper>
		<Image src={props.url} onLoad={this.animate} />
	</Wrapper>
);

export default ImageCard;

const Image = styled.img`
	display: flex;
	justify-content: center;
	align-self: center;
	max-height: 1000px;
	max-width: 100%;
	width: auto;
	border: 1px solid #f0f0f0;
	border-radius: 3px;
	margin-bottom: 30px;
`;

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
`;
