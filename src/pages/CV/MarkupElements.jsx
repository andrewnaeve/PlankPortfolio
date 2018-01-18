import styled from 'styled-components';
import { media } from '../../utilities/style-utils';

export const Row = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

export const Headline = styled.h1`
	font-weight: 600;
	font-size: 2.3rem;
	${media.tablets`
		font-size: 3rem;`};
`;

export const P = styled.p`
	font-weight: 500;
	font-size: 1.6rem;
`;

export const Bold = styled.span`
	font-weight: 800;
`;
