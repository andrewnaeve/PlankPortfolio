import React, { Component } from 'react';
import styled from 'styled-components';
import AnimatedContainer from '../Animation/AnimatedContainer';
import { connect } from 'react-redux';
import { ready } from '../../actions/ready';
import Email from './Email';
import Instagram from './Instagram';

class Contact extends Component {
	componentDidMount() {
		const { title, ready } = this.props;
		ready(title);
	}
	shouldComponentUpdate() {
		return false;
	}
	render() {
		return (
			<AnimatedContainer>
				<Container>
					<Row>
						<Email />
					</Row>
					<Row>
						<Instagram />
					</Row>
				</Container>
			</AnimatedContainer>
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

export default connect(null, mapDispatchToProps)(Contact);

const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: row;
	max-width: 60%;
	justify-content: space-around;
	flex-wrap: wrap;
`;

const Row = styled.div`
	display: flex;
	font-family: 'Abel', sans-serif;
	background-color: transparent;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
