import React from 'react';
import styled from 'styled-components';
import { media } from '../../../../utilities/style-utils';

export const Field = props => <Input onChange={props.handleChange} type={props.type || 'text'} />;

const Input = styled.input`
	margin: 8px 0;
	box-sizing: border-box;
	height: 40px;
	font-family: 'Abel';
	font-size: 1.3rem;
	${media.smallPhones`
		width: 95%;
	`};
	${media.laptop`
		width: 65%;
	`};
`;
