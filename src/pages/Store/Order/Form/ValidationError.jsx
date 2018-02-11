import React from 'react';
import styled from 'styled-components';

export const ValidationError = props => <Error>{props.error}</Error>;

const Error = styled.div`
	font-family: 'Abel';
	color: red;
	font-size: 1.5rem;
`;
