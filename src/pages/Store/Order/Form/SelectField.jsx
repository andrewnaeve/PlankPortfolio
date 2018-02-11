import React from 'react';
import styled from 'styled-components';

export const SelectField = props => (
	<Select onChange={e => props.handleChange(e, props.field)}>{props.children}</Select>
);

const Select = styled.select`
	margin: 8px 0;
	box-sizing: border-box;
	height: 40px;
	font-family: 'Abel';
	font-size: 1.3rem;
	background-color: #fff;
`;
