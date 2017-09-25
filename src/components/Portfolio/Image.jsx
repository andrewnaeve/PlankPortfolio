import React from 'react';
import styled from 'styled-components';

const Image = props => (
	<ImageStyle src={props.show ? props.url : null} onLoad={props.handleLoad} />
);

const ImageStyle = styled.img`
	display: flex;
	justify-content: center;
	align-self: center;
	max-height: 1000px;
	max-width: 100%;
	width: auto;
	border: 1px solid #f0f0f0;
	border-radius: 3px;
`;

export default Image;

// const svg = (width, height) =>
// 	`data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 ${width} ${height}'%2F%3E`;
