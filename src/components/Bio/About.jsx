import React, { Component } from 'react';
import styled from 'styled-components';
import AnimatedContainer from '../AnimatedContainer';
import { media } from '../../style-utils';

class Description extends Component {
	componentDidMount() {
		this.props.animate();
	}
	render() {
		return (
			<Text>
				<p>
					"My goal in painting is to put down what I see, feel, and
					experience as beautiful in an object, person, or place.
					Ideally, it is sensitive, strong, and honest. It’s my joy
					and passion to paint."
				</p>
				<p>- Nancy Plank</p>
				<br />
				<p>
					Nancy Plank is a realism painter specializing in florals and
					portraits. She is available for commission work. Her studio
					is located in San Diego.
				</p>
			</Text>
		);
	}
}

const About = () => (
	<AnimatedContainer>
		<Description />
	</AnimatedContainer>
);

export default About;

const Text = styled.div`
	margin-top: 20px;
	font-size: 1.5rem;
	font-family: 'Abel', sans-serif;
	justify-content: center;
	margin-bottom: 20px;
`;
