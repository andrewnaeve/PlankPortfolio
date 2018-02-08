import React from 'react';
import styled from 'styled-components';

export const Header = props => <Title>{props.children}</Title>;

const Title = styled.div`
	display: flex;
	font-family: 'Abel', sans-serif;
	font-size: 5rem;
	font-weight: 500;
`;
