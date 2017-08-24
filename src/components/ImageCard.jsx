import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
	display: flex;
	justify-content: center;
	align-self: start;
	max-height: 1000px;
	max-width: 100%;
	width: auto;
	border: 1px solid #f0f0f0;
	border-radius: 3px;
	margin-bottom: 50px;
`;

const ImageCard = props => <Image src={props.url} onLoad={props.animate} />;

export default ImageCard;
