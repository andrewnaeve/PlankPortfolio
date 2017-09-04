import React from 'react';
import styled from 'styled-components';

const Shows = () => (
	<div>
		<Headline>Shows</Headline>
		<br />
		<P>
			<Bold>HYPE</Bold>
		</P>
		<P>July - August 2017</P>
		<P>San Diego, CA</P>
		<br />
		<P>
			<Bold>La Jolla Sports Club</Bold>
		</P>
		<P>March 2017 - Present</P>
		<P>La Jolla, CA</P>
		<br />
		<P>
			<Bold>Muramid Mural Museum & Art Center</Bold>
		</P>
		<P>May 2017</P>
		<P>Oceanside, CA</P>
		<br />
		<P>
			<Bold>4Up Show</Bold>
		</P>
		<P>January 2017</P>
		<P>San Diego, CA</P>
		<br />
		<P>
			<Bold>Open Studios San Diego</Bold>
		</P>
		<P>2016</P>
		<P>San Diego, CA</P>
		<br />
		<P>
			<Bold>50 to Watch</Bold>
		</P>
		<P>Juried Exhibition and National Publication</P>
		<P>2016</P>
		<P>The Studio Door</P>
		<P>San Diego, CA</P>
		<P>
			Jurors: Christine Knoke (Director of Exhibitions and Chief curator/
			Mingei International Museum) and Jenna S. Jacobs (Curatorial
			Manager, Museum of contemporary Art San Diego)
		</P>

		<br />
		<P>
			<Bold>Holiday Art Market</Bold>
		</P>
		<P>2015</P>
		<P>San Diego, CA</P>
		<br />
		<P>
			<Bold>The Empyrean Artifacts</Bold>
		</P>
		<P>2015</P>
		<P>Palm Desert, CA</P>
		<br />
		<P>
			<Bold>Open Studios San Diego</Bold>
		</P>
		<P>2015</P>
		<P>San Diego, CA</P>
		<br />
		<P>
			<Bold>50 to Watch</Bold>
		</P>
		<P>Exhibition and National Publication</P>
		<P>2015</P>
		<P>The Studio Door</P>
		<P>San Diego, CA</P>
		<br />
		<P>
			<Bold>Athenaeum</Bold>
		</P>
		<P>2009 - 2011</P>
		<P>La Jolla, CA</P>
		<br />
		<P>
			<Bold>San Diego Art Department</Bold>
		</P>
		<P>2012-2015</P>
		<P>San Diego, CA</P>
		<br />
		<P>
			<Bold>San Diego Art Institute</Bold>
		</P>
		<P>Museum of the Living Artist</P>
		<P>2013</P>
		<P>San Diego, CA</P>
		<br />
	</div>
);

export default Shows;

const Headline = styled.h1`
	font-weight: 600;
	font-size: 2rem;
`;

const P = styled.p`
	font-weight: 500;
	font-size: 1.2rem;
`;

const Bold = styled.span`font-weight: 600;`;
// const Italic = styled.span`font-style: italic;`;
