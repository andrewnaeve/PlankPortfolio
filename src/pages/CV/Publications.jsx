import React from 'react';
import styled from 'styled-components';

const Publications = () => (
	<div>
		<Headline>Publications</Headline>
		<br />
		<P>
			<Bold>50 to Watch</Bold>, 2016
		</P>
		<P>National Publication</P>
		<P>The Studio Door</P>
		<P>San Diego, CA</P>
		<br />

		<P>
			<Bold>50 to Watch</Bold>, 2015
		</P>
		<P>National Publication</P>
		<P>The Studio Door</P>
		<P>San Diego, CA</P>
		<br />

		<P>
			<Bold>Ray Street Artists</Bold>, 2013
		</P>
		<P>San Diego Art Department</P>
		<P>San Diego, CA</P>
		<br />
	</div>
);

export default Publications;

const Headline = styled.h1`
	font-weight: 600;
	font-size: 2rem;
`;

const P = styled.p`
	font-weight: 500;
	font-size: 1.3rem;
`;

const Bold = styled.span`
	font-weight: 600;
`;
