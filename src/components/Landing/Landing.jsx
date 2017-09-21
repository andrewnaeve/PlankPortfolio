import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../../Utilities/style-utils';
import { connect } from 'react-redux';
import { ready } from '../../actions/ready';

class Landing extends Component {
	shouldComponentUpdate() {
		return false;
	}
	handleLoad = () => {
		const { ready, title } = this.props;
		ready(title);
	};
	render() {
		return (
			<Wrapper>
				<LandingImage src={this.props.url} onLoad={this.handleLoad} />
			</Wrapper>
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

export default connect(null, mapDispatchToProps)(Landing);

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const LandingImage = styled.img`
	display: flex;
	align-self: flex-start;
	max-height: 600px;
	max-width: 90%;
	width: auto;
	border: 1px solid #f0f0f0;
	border-radius: 3px;
	${media.smallPhones`
		margin-top: 40px;`};
	${media.tablets`
		max-height: 600px;
		margin-top: 30px;`};
	${media.laptop`
		max-height: 600px;`};
	${media.fourKay`
		max-height: 1500px;`};
`;
