import React from 'react';
import styled from 'styled-components';

export const FieldName = props => <Title>{props.children}</Title>;

const Title = styled.h2`
	font-size: 1.5rem;
	font-family: 'Abel';
`;
