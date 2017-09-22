import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { ready } from '../../actions/ready';
import { media } from '../../utilities/style-utils';

class About extends Component {
	componentDidMount() {
		const { title, ready } = this.props;
		ready(title);
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

const mapDispatchToProps = dispatch => {
	return {
		ready(title) {
			dispatch(ready(title));
		}
	};
};

export default connect(null, mapDispatchToProps)(About);

const Text = styled.div`
	margin-top: 20px;
	font-family: 'Abel', sans-serif;
	justify-content: center;
	margin-bottom: 20px;
	${media.smallPhones`
		font-size: 1.35rem;
	`};
	${media.tablets`
		font-size: 1.5rem;
	`};
`;
