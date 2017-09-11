import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { imagesReady } from '../../actions/imagesReady';

class About extends Component {
	componentDidMount() {
		const { url, imagesReady } = this.props;
		imagesReady(url);
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
		imagesReady(url) {
			dispatch(imagesReady(url));
		}
	};
};

export default connect(null, mapDispatchToProps)(About);

const Text = styled.div`
	margin-top: 20px;
	font-size: 1.5rem;
	font-family: 'Abel', sans-serif;
	justify-content: center;
	margin-bottom: 20px;
`;
