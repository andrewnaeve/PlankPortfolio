import React from 'react';
import styled from 'styled-components';

const Education = () => (
	<Wrapper>
		<Row>
			<Headline>Education</Headline>
		</Row>
		<br />
		<Row>
			<Column>
				<P>
					<Bold>6th Annual Plein Air Convention</Bold>, April 24-28,
					2017
				</P>
				<P>San Diego, CA</P>
				<br />
				<P>
					<Bold>Watt's Atelier</Bold>, 2015
				</P>
				<P>Oil painting with Meadow Gist and Ben Young</P>
				<P>Encinitas, CA</P>
				<br />
				<P>
					<Bold>Weekend with the Masters</Bold>, 2012
				</P>
				<P>
					Oil painting with Sherrie McGraw, Quang Ho, Rose Frantzen,
					Carolyn Anderson, Daniel E. Greene, and Daniel Gerhartz
				</P>
				<P>Rancho Bernardo, CA</P>
				<br />
				<P>
					<Bold>Weekend with the Masters</Bold>, 2011
				</P>
				<P>
					Oil painting with Richard Schmid, David Leffel, Sherrie
					McGraw, Rose Frantzen
				</P>
				<br />
				<P>
					<Bold>Qiang Huang Workshops</Bold>, 2011 and 2012
				</P>
				<P>Oil painting with Meadow Gist and Ben Young</P>
				<P>Sacremento, CA</P>
				<P>Laguna Niguel, CA</P>
				<br />

				<P>
					<Bold>Carol Marine Workshop</Bold>, 2011
				</P>
				<P>San Luis Obispo, CA</P>
				<br />
				<P>
					<Bold>Athenaeum</Bold>, 1995-2011
				</P>
				<P>
					Watercolor, drawing, oil portraits with Ken Goldman Oil
					portraits with Stephanie Goldman Oil still life, landscape,
					and color theory with Pat Kelly Oil portraits with Alida
					Cervantes
				</P>
				<P>La Jolla, CA</P>
				<br />
				<P>
					<Bold>National Academy of Design School of Fine Arts</Bold>,
					1985
				</P>
				<P>Watercolor with Reeve Schley</P>
				<P>New York, NY</P>
				<br />
				<P>
					<Bold>The Brooklyn Museum Art School</Bold>, 1985
				</P>
				<P>Fashion illustration with Ruth Rosenthal</P>
				<P>Brooklyn, NY</P>
				<br />
				<P>
					<Bold>American Academy of Art</Bold>, 1981
				</P>
				<P>Watercolor with Irving Shapiro</P>
				<P>Chicago, IL</P>
				<br />
			</Column>
		</Row>
	</Wrapper>
);

export default Education;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const Headline = styled.h1`
	font-weight: 600;
	font-size: 2rem;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
`;
const Column = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const P = styled.p`
	font-weight: 500;
	font-size: 1.2rem;
`;

const Bold = styled.span`font-weight: 600;`;
// const Italic = styled.span`font-style: italic;`;
