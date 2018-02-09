import React from 'react';
import styled from 'styled-components';

export const Field = props => (
	<Input onChange={e => props.handleChange(e, props.field)} type={props.type || 'text'} />
);

const Input = styled.input`
	margin: 8px 0;
	box-sizing: border-box;
	height: 40px;
	font-family: 'Abel';
	font-size: 1.3rem;
`;
